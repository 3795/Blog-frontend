<template>
  <div class="header">
    <Row>
      <Col span="24">
        <Col span="22">
          <router-link to="/console"><span class="web-name">NTShare-管理平台</span></router-link>
        </Col>
        <Col span="2">
          <div class="user">
            <Dropdown>
              <Avatar :src="avatar" />
              <DropdownMenu slot="list">
                <DropdownItem>
                  <router-link to="/console/personal">个人中心</router-link>
                </DropdownItem>
                <DropdownItem @click.native="logout">退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      </Col>
    </Row>
  </div>
</template>

<script>
  import {BASE_URL} from "../main";

  export default {
    name: "ManageHeader",
    data() {
      return {
        avatar: '',
      }
    },
    methods: {
      getAvatar() {
        this.$axios.get(BASE_URL + '/backend/user/brief').then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.avatar = res.data.avatar;
          }
        })
      },
      logout() {
        this.$Modal.confirm({
          title: '确认',
          content: '确认退出登录吗',
          onOk: () => {
            this.$axios.get(BASE_URL + '/backend/user/logout').then((res) => {
              res = res.data;
              if (res.code % 2) {
                this.$Message.success("退出登录成功");
                this.$router.history.push("/");
              }
            })
          },
          onCancel: () => {
          }
        });
      }
    },
    mounted() {
      this.getAvatar();
    }
  }
</script>

<style scoped lang="stylus">
  .header
    height 1.2rem
    line-height 1.2rem
    background-color #1890ff
    text-align left

    .web-name
      font-size 28px
      font-family "华文行楷"
      padding-left .3rem
      color #fff

  .user
    text-align center
</style>
