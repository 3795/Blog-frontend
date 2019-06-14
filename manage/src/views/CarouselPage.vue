<template>
  <div>
    <Row>
      <Col span="20">
        <p class="table-title">轮播图管理</p>
      </Col>
      <Col span="4">
        <div>
          <Button size="large" type="primary" @click="showAddModel">添加图片</Button>
        </div>
      </Col>
    </Row>
    <Modal
      v-model="addImageModel"
      title="添加轮播图"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Form :model="imageForm" :label-width="100">
        <FormItem label="上传图片">
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
          <img v-if="showImg" :src="imageForm.img" alt="上传图片" class="upload-img"/>
        </FormItem>
        <FormItem label="图片链接">
          <Input type="text" v-model="imageForm.link" placeholder="请输入图片链接地址"></Input>
        </FormItem>
      </Form>
    </Modal>
    <Table :data="imageList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="image">
        <div style="padding: .1rem 0 .1rem 0">
          <img :src="row.img" alt="图片" class="image"/>
        </div>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="error" size="small" @click="removeImage(row.id, index)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="status">
        <i-switch :value="row.status === 1" @on-change="changeType(row.id, row.status)"></i-switch>
      </template>
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="total" :current="pageNum" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import {BASE_URL} from "../main";

  export default {
    name: "CarouselPage",
    data() {
      return {
        columns1: [
          {
            title: 'ID',
            key: 'id',
            align: 'center',
            width: 200,
          },
          {
            title: '图片',
            key: 'img',
            width: 400,
            align: 'center',
            slot: 'image'
          },
          {
            title: '图片链接',
            key: 'link',
            align: "center",
            width: 300
          },
          {
            title: '状态',
            key: 'status',
            align: "center",
            slot: 'status'
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            align: 'center',
            slot: 'action'
          }
        ],
        imageList: [],
        pageNum: 1,
        total: 0,
        addImageModel: false,
        imageForm: {
          img: '',
          link: '',
        },
        showImg: false,
      }
    },
    methods: {
      getImageList(pageNum) {
        this.$axios.get(BASE_URL + '/backend/carouselImg', {
          params: {
            pageNum: pageNum
          }
        }).then(this.handleGetImageList)
      },
      handleGetImageList(res) {
        res = res.data;
        if (res.code % 2) {
          this.imageList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        } else {
          this.$Message.error(res.msg);
        }
      },
      changePage(pageNum) {
        this.getImageList(pageNum)
      },
      removeImage(id, index) {
        this.$Modal.confirm({
          title: '确认删除',
          content: '确认删除该图片吗',
          onOk: () => {
            this.$axios.delete(BASE_URL + '/backend/carouselImg/' + id).then(this.handleDeleteImage);
            this.imageList.splice(index, 1);
          },
          onCancel: () => {
          }
        });
      },
      handleDeleteImage(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("删除成功");
        } else {
          this.$Message.success("删除失败");
        }
      },
      changeType(id, status) {
        this.$Message.info("暂未开发该功能");
      },
      handleChangeType(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("更改成功");
          this.getImageList(this.pageNum);
        } else {
          this.$Message.error(res.msg);
        }
      },
      showAddModel() {
        this.addImageModel = true;
        this.imageForm.img = '';
        this.imageForm.link = '';
        this.showImg = false;
      },
      ok() {
        let params = new URLSearchParams();
        params.append("img", this.imageForm.img);
        params.append("link", this.imageForm.link);
        this.$axios.post(BASE_URL + '/backend/carouselImg', params).then(this.handleOk)
      },
      cancel() {
      },
      handleOk(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success(res.msg);
          this.getImageList(this.total);
        } else {
          this.$Message.error(res.msg);
        }
      },
      handleImgSuccess(response) {
        if (response.code % 2) {
          this.$Message.success("图片上传成功");
          this.imageForm.img = response.data;
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
      }
    },
    mounted() {
      this.getImageList(this.pageNum);
    }
  }
</script>


<style scoped lang="stylus">
  .image
    width 70%
    height 3rem
  .upload-img
    width 100%
    margin-top .2rem
</style>
