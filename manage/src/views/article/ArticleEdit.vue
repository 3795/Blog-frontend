<template>
  <div class="edit-article">
    <Form :model="articleForm" label-position="right" :label-width="100">
      <FormItem label="文章标题">
        <Input v-model="articleForm.title" placeholder="请输入文章标题"></Input>
      </FormItem>
      <FormItem label="标签图" style="text-align: left">
        <Upload action="/api/backend/uploadImg"
                :format="['jpg','jpeg','png']"
                :on-success="handleImgSuccess"
                :on-error="handleImgError"
                :on-format-error="handleImgFormatError"
                :with-credentials="true"
                :show-upload-list="false"
        >
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        <img v-if="showImg" :src="articleForm.img" alt="上传图片" class="image"/>
      </FormItem>
      <FormItem label="文章标签" class="input-item">
        <Select v-model="articleForm.tagId" multiple>
          <Option :transfer="true"
                  v-for="item in tagList"
                  :value="item.value"
                  :key="item.value"
          >{{ item.label }}
          </Option>
        </Select>
      </FormItem>
      <FormItem label="文章分类" class="input-item">
        <Cascader :data="categoryList"
                  trigger="hover"
                  :transfer="true"
                  v-model="categoryValue"
        ></Cascader>
      </FormItem>
      <FormItem label="文章状态" style="text-align: left">
        <i-switch size="large" v-model="articleType">
          <span slot="open">发布</span>
          <span slot="close">草稿</span>
        </i-switch>
      </FormItem>
      <FormItem label="文章摘要">
        <Input v-model="articleForm.summary" type="textarea"
               :autosize="{minRows: 3,maxRows: 5}"
               placeholder="请输入文章摘要"></Input>
      </FormItem>
      <FormItem label="文章内容">
        <mavon-editor v-model="articleForm.content"
                      ref=md
                      @imgAdd="$imgAdd"></mavon-editor>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">保存文章</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {BASE_URL} from "../../main";

  export default {
    name: "ArticleEdit",
    data() {
      return {
        articleForm: {
          title: '',
          summary: '',
          img: '',
          content: '',
          categoryId: '',
          tagId: [],
          type: '',
          id: ''
        },
        showImg: false,
        categoryList: [],
        categoryValue: [],
        tagList: [],
        articleType: true
      }
    },
    methods: {
      handleImgSuccess(response) {
        if (response.code % 2) {
          this.$Message.success("图片上传成功");
          this.articleForm.img = response.data;
          this.showImg = true;
        } else {
          this.$Message.error(response.msg);
        }
      },
      handleImgError(response, file) {
        if (!response.code % 2) {
          this.$Message.error(response.msg);
        } else {
          this.$Notice.error("上传图片没有响应")
        }
      },
      handleImgFormatError(file, fileList) {
        this.$Message.error("图片格式不正确");
      },
      getCategory() {
        this.$axios.get(BASE_URL + "/backend/category/cascade").then(this.handleGetCategory)
      },
      handleGetCategory(res) {
        res = res.data;
        if (res.code % 2) {
          this.categoryList = res.data;
        }
      },
      getTag() {
        this.$axios.get(BASE_URL + "/backend/tag/options").then(this.handleGetTag)
      },
      handleGetTag(res) {
        res = res.data;
        if (res.code % 2) {
          this.tagList = res.data;
        }
      },
      handleSubmit() {
        if (this.articleForm.title === '') {
          this.$Message.warning("标题不能为空");
          return;
        }
        if (this.articleForm.img === '') {
          this.$Message.warning("标签图不能为空");
          return;
        }
        if (this.articleForm.tagId.length === 0) {
          this.$Message.warning("请选择文章标签");
          return;
        }
        if (this.categoryValue.length === 0) {
          this.$Message.warning("请选择文章分类");
          return;
        }
        if (this.articleForm.summary === '') {
          this.$Message.warning("摘要不能为空");
          return;
        }
        if (this.articleForm.content === '') {
          this.$Message.warning("内容不能为空");
          return;
        }
        this.articleForm.categoryId = this.categoryValue[this.categoryValue.length - 1];
        this.articleForm.type = this.articleType === true ? 1 : 0;
        let params = new URLSearchParams();
        params.append("title", this.articleForm.title);
        params.append("img", this.articleForm.img);
        params.append("summary", this.articleForm.summary);
        params.append("content", this.articleForm.content);
        params.append("categoryId", this.articleForm.categoryId);
        params.append("tags", this.articleForm.tagId);
        params.append("type", this.articleForm.type);
        if (this.articleForm.id <= 0) {
          this.$axios.post(BASE_URL + '/backend/article', params).then(this.handleArticleEdit);
        } else {
          params.append("id", this.articleForm.id);
          this.$axios.put(BASE_URL + '/backend/article', params).then(this.handleArticleEdit);
        }
      },
      handleArticleEdit(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("文章" + res.msg);
          this.$router.push("/console/article/list");
        } else {
          this.$Message.error("文章" + res.msg);
        }
      },
      getArticleById(id) {
        this.$axios.get(BASE_URL + "/backend/article/" + id).then(this.handleGetArticleById)
      },
      handleGetArticleById(res) {
        res = res.data;
        if (res.code % 2) {
          this.articleForm.title = res.data.title;
          this.articleForm.id = res.data.id;
          this.articleForm.summary = res.data.summary;
          this.articleForm.content = res.data.content;
          this.articleForm.categoryId = res.data.categoryId;
          let tags = res.data.tags;
          for (let i = 0; i < tags.length; i++) {
            this.articleForm.tagId.push(tags[i]['id'])
          }
          this.articleForm.img = res.data.img;
          this.showImg = true;
        }
      },
      $imgAdd: function (pos, $file) {
        let formData = new FormData();
        formData.append('editormd-image-file', $file);
        this.$axios({
          url: BASE_URL + '/backend/edUploadImg',
          method: 'POST',
          data: formData,
          headers: {'Content-Type': 'multipart/form-data'},
        }).then((res) => {
          res = res.data;
          let url = "";
          if (res.success === 1) {
            url = res.url;
          } else {
            this.$Message.error("图片上传失败")
          }
          this.$refs.md.$img2Url(pos, url);
        })
      }
    },
    mounted() {
      this.getCategory();
      this.getTag();
      this.articleForm.id = this.$route.params.id;
      if (this.articleForm.id > 0) {
        this.getArticleById(this.articleForm.id);
      }
    }
  }
</script>

<style scoped lang="stylus">
  .edit-article
    height 10rem

  .image
    width 8rem
    height 5rem
    margin-top .5rem

  .input-item
    width 40%
</style>
