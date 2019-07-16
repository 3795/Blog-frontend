<template>
  <div class="nav">
    <div>
      <img src="https://img.ntshare.cn/bg.jpg" class="bkg-img"/>
    </div>
    <div class="user-info">
      <Row>
        <Col span="12"><img :src="avatar" class="avatar"></Col>
        <Col span="12"><span class="username">{{username}}</span></Col>
      </Row>
      <div class="sign">{{signature}}</div>
    </div>
    <Row class="blog-info">
      <Col span="12" class="blog-info-item"><span class="underline"><b>{{articleNum}}</b></span>&nbsp;文章</Col>
      <Col span="12" class="blog-info-item"><span class="underline"><b>{{categoryNum}}</b></span>&nbsp;分类</Col>
    </Row>
    <Row class="nav-info">
      <Col span="24">
        <Menu style="text-align: center; width: 100%">

          <MenuItem v-for="(item, index) of navigationList"
                    @click.native="changeNavigation(item.link)"
                    :name="1-index"
                    :key="index"
                    class="my-menu-item">
            {{item.name}}
          </MenuItem>
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "NavBar",
    data() {
      return {
        username: '3795',
        avatar: 'https://img.ntshare.cn/15465091750.jpg',
        signature: '每天起床第一句，先给自己打个气',
        navigationList: [],
        articleNum: 16,
        categoryNum: 18
      }
    },
    methods: {
      getUserInfo() {
        axios.get('/api/user?t=' + Date.now()).then(this.handleGetUserInfo)
      },
      handleGetUserInfo(res) {
        res = res.data;
        if (res.code % 2) {
          this.username = res.data.username;
          this.avatar = res.data.avatar;
          this.signature = res.data.signature;
        }
      },
      getData() {
        axios.get('/api/data/count?t=' + Date.now()).then(this.handleGetData)
      },
      handleGetData(res) {
        res = res.data;
        if (res.code % 2) {
          this.articleNum = res.data.articleCount;
          this.categoryNum = res.data.categoryCount;
        }
      },
      getNavigationList() {
        axios.get('/api/navigation?t=' + Date.now()).then(this.handleGetNavigationList)
      },
      handleGetNavigationList(res) {
        res = res.data;
        if (res.code % 2) {
          this.navigationList = res.data;
        }
      },
      changeNavigation(url) {
        this.$router.history.push(url)
      }
    },
    mounted() {
      this.getUserInfo();
      this.getData();
      this.getNavigationList();
    }
  }
</script>

<style scoped lang="stylus">
  .nav
    height 100%

    .bkg-img
      width 100%
      height 4rem

  .user-info
    text-align left
    padding-bottom .5rem
    padding-left .5rem
    background-color #ffffff

    .avatar
      border-radius 50%
      width 70%
      height 70%
      margin-top -30%
      border solid 3px #ffffff
      transition all 2s

      &:hover
        transform rotate(360deg)

    .username
      height .6rem
      line-height 1rem
      font-family "华文行楷"
      font-size .5rem

    .sign
      padding-right .5rem
      margin-top .15rem
      font-size 14px
      font-family "华文楷体"
      height auto


  .blog-info
    background-color #ffffff
    text-align center
    font-size .3rem
    padding .3rem 0 .3rem 0
    margin-top .1rem

    .blog-info-item
      height .6rem
      line-height .6rem

    .underline
      font-size 16px

  .nav-info
    margin-top .1rem
    padding-bottom 2rem
    background-color #fff

    .my-menu-item
      font-size .32rem
      font-family "楷体"
</style>
