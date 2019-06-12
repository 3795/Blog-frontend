<template>
  <div class="login-page">
    <Row>
      <Col offset="9" span="6">
        <div class="login">
          <p class="login-title">请登录</p>
          <div class="login-block">
            <Form class="login-form" ref="loginForm" :model="loginForm" :rules="ruleInline">
              <FormItem prop="user">
                <Input type="text" v-model="loginForm.account" placeholder="请输入账号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="loginForm.password" placeholder="请输入密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="captcha">
                <Row>
                  <Col span="16">
                    <Input type="text" v-model="loginForm.captcha" placeholder="请输入验证码">
                      <Icon type="ios-checkmark-circle-outline" slot="prepend"/>
                    </Input>
                  </Col>
                  <Col span="8">
                    <img src="https://api.ntshare.cn/blog/v1/captcha" title="验证码" alt="验证码"
                         onclick="this.src='https://api.ntshare.cn/blog/v1/captcha?d=' + new Date() * 1">
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('loginForm')">Sign&nbsp;In</Button>
              </FormItem>
            </Form>
          </div>
          <Modal
            v-model="sendSms"
            title="异地登录验证"
            @on-ok="ok"
            @on-cancel="cancel">
            <p>将向手机号{{phoneNumber}}发送验证码</p>
          </Modal>
          <Modal
            v-model="inputSms"
            title="请输入验证码"
            @on-ok="handleSubmit('loginForm')"
            @on-cancel="cancel">
            <Input v-model="smsCode" placeholder="请输入验证码" type="text"/>
          </Modal>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import {BASE_URL} from "../main";
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          account: '',
          password: '',
          captcha: ''
        },
        ruleInline: {
          account: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur'}
          ],
          captcha: [
            {required: true, message: '验证码不能为空', trigger: 'blur'},
            {type: 'string', min: 4, message: '验证码不能少于4位', trigger: 'blur'}
          ],
        },
        sendSms: false,
        inputSms: false,
        phoneNumber: '',
        smsCode: '',
        smsToken: '',
      }
    },
    methods: {
      handleSubmit(name) {
        let params = new URLSearchParams();
        params.append("account", this.loginForm.account);
        params.append("password", this.loginForm.password);
        params.append("captchaCode", this.loginForm.captcha);
        if (this.smsCode !== '') {
          params.append("phoneCaptchaCode", this.smsCode);
        }
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$axios.post(BASE_URL + '/backend/login', params).then(this.handleLogin);
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleLogin(res) {
        res = res.data;
        if (res.code === 52) {
          this.sendSms = true;
          this.phoneNumber = res.data[0];
          this.smsToken = res.data[1];
        } else if (res.code % 2 ) {
          this.$Message.success(res.msg);
          console.log("登录成功");
          this.$router.push('/console');
        } else {
          this.$Message.error(res.msg);
        }
      },
      ok () {
        let params = new URLSearchParams();
        params.append("phoneToken", this.smsToken);
        this.$axios.post(BASE_URL + "/sms", params).then(this.handleSmsCaptcha);
      },
      cancel () {
      },
      handleSmsCaptcha(res) {
        res = res.data;
        if (res.code%2) {
          this.$Message.success(res.msg);
          this.inputSms = true;
        } else {
          this.$Message.error(res.msg);
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .login-page
    padding-top 2rem
    text-align center

  .login
    height 9rem
    background-color #fbfbfb;
    box-shadow 5px 5px 5px #e2e2e2


  .login-title
    display block
    height 2rem
    line-height 2rem
    font-size .5rem

  .login-block
    text-align center
    margin auto
    width 100%
    padding-left 20%

  .login-form
    width 70%
    display block
</style>
