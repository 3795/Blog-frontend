<template>
  <div class="edit-article">
    <Form :model="articleForm" label-position="right" :label-width="100">
      <FormItem label="文章标题">
        <Input v-model="articleForm.title" placeholder="请输入文章标题"></Input>
      </FormItem>
      <FormItem label="标签图">
        
        <Upload action="https://api.ntshare.cn/backend/"
                :format="['jpg','jpeg','png']"
                :on-success="handleImgSuccess"
                :on-error="handleImgError"
                :on-format-error="handleImgFormatError"

        >
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
<!--        <Input v-model="articleForm.img"></Input>-->
      </FormItem>
      <FormItem label="文章摘要">
        <Input v-model="articleForm.summary" type="textarea"
               :autosize="{minRows: 2,maxRows: 5}"
               placeholder="请输入文章摘要"></Input>
      </FormItem>
      <FormItem label="文章内容">
        <mavon-editor v-model="articleForm.content"></mavon-editor>
      </FormItem>
      <FormItem label="文章分类">
        <Input v-model="articleForm.img"></Input>
      </FormItem>
      <FormItem label="文章标签">
        <Input v-model="articleForm.img"></Input>
      </FormItem>
      <FormItem label="文章状态">
        <Input v-model="articleForm.img"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">保存文章</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "ArticleEdit",
    data() {
      return {
        articleForm: {
          title: '',
          summary: '',
          img: '',
          content: '# 你好'
        }
      }
    },
    methods: {
      handleImgSuccess(response, file, fileList) {
        console.log("response:" +response);
        console.log("file:" + response);
        console.log("fileList:" + fileList);
      },
      handleImgError(response, file, fileList) {
        console.log("response:" +response);
        console.log("file:" + response);
        console.log("fileList:" + fileList);
      },
      handleImgFormatError(file, fileList) {

      },
    }
  }
</script>

<style scoped lang="stylus">
  .edit-article
    height 10rem
</style>
