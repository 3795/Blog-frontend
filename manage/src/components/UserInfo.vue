<template>
  <div>
    <div class="info">
      <img :src="userInfo.avatar" alt="头像" class="avatar" @click="changeAvatar"/>
      <Row :gutter="16">
        <Col span="8" class="title-box">昵称</Col>
        <Col span="16" class="content-box">{{userInfo.username}}</Col>
        <Col span="8" class="title-box">账号</Col>
        <Col span="16" class="content-box">{{userInfo.account}}</Col>
        <Col span="8" class="title-box">电话</Col>
        <Col span="16" class="content-box">{{userInfo.phone}}</Col>
        <Col span="8" class="title-box">邮箱</Col>
        <Col span="16" class="content-box">{{userInfo.email}}</Col>
        <Col span="8" class="title-box">签名</Col>
        <Col span="16" class="content-box">{{userInfo.signature}}</Col>
      </Row>
      <div style="margin-top: 2rem">
        <Button type="primary" size="large" @click="updateInfo">修改信息</Button>
      </div>
    </div>
    <Modal
      v-model="showAvatarModel"
      title="更换头像"
    >
      <Form :label-width="100">
        <FormItem label="上传图片">
          <Upload action="/api/backend/user/avatar"
                  :format="['jpg','jpeg','png']"
                  :on-success="handleImgSuccess"
                  :on-error="handleImgError"
                  :on-format-error="handleImgFormatError"
                  :with-credentials="true"
                  :show-upload-list="false"
          >
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
          </Upload>
          <img v-if="showImg" :src="userInfo.avatar" alt="上传图片" class="upload-img"/>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      v-model="showUpdateInfoModel"
      title="更新信息"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Form :model="userInfo" :label-width="100">
        <FormItem label="昵称">
          <Input v-model="userInfo.username" placeholder="请输入昵称"></Input>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="userInfo.email" placeholder="请输入邮箱地址"></Input>
        </FormItem>
        <FormItem label="电话号码">
          <Input v-model="userInfo.phone" placeholder="请输入联系电话"></Input>
        </FormItem>
        <FormItem label="个性签名">
          <Input v-model="userInfo.signature" placeholder="请输入个性签名"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import {BASE_URL} from "../main";

  export default {
    name: "UserInfo",
    data() {
      return {
        userInfo: {
          avatar: '',
          username: '',
          account: '',
          phone: '',
          email: '',
          signature: ''
        },
        showAvatarModel: false,
        showUpdateInfoModel: false,
        showImg: false,
      }
    },
    methods: {
      getUserInfo() {
        this.$axios.get(BASE_URL + "/backend/user/detail").then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.userInfo = res.data;
          }
        })
      },
      changeAvatar() {
        this.showAvatarModel = true;
      },
      updateInfo() {
        this.showUpdateInfoModel = true;
      },
      ok() {
        let params = new URLSearchParams();
        params.append("username", this.userInfo.username);
        params.append("email", this.userInfo.email);
        params.append("phone", this.userInfo.phone);
        params.append("signature", this.userInfo.signature);
        this.$axios.put(BASE_URL + '/backend/user/info', params).then(this.handleOk)
      },
      cancel() {
      },
      handleOk(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("信息更新成功");
        } else {
          this.$Message.error(res.msg);
        }
      },
      handleImgSuccess(response) {
        if (response.code % 2) {
          this.$Message.success("图片上传成功");
          this.userInfo.avatar = response.data;
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
      this.getUserInfo();
    }
  }
</script>

<style scoped lang="stylus">
  .info
    padding-top 1rem
    box-shadow 5px 5px 5px #e2e2e2
    height 15rem
    font-size 16px
    margin-bottom 2rem
    border-left solid .05rem #e2e2e2

  .avatar
    width 40%
    height 3.15rem
    border dotted .05rem #dfdfdf
    margin-bottom .5rem

  .title-box
    text-align right
    height .7rem
    line-height .7rem

  .content-box
    text-align left
    height .7rem
    line-height .7rem

  .upload-img
    width 100%
    margin-top .2rem
</style>
