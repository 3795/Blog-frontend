<template>
  <div class="nav">
    <div>
      <img src="https://img.ntshare.cn/bg.jpg" class="bkg-img"/>
    </div>
    <div class="user-info">
      <img :src="avatar" class="avatar">
      <p class="username">{{username}}</p>
    </div>
    <Row class="blog-info">
      <Col span="12" class="blog-info-item">{{articleNum}}文章</Col>
      <Col span="12" class="blog-info-item">{{categoryNum}}分类</Col>
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
        navigationList: [],
        articleNum: 16,
        categoryNum: 18
      }
    },
    methods: {
      getUserInfo() {
        axios.get('/api/account').then(this.handleGetUserInfo)
      },
      handleGetUserInfo(res) {
        res = res.data;
        if (res.code % 2) {
          this.username = res.data.username;
          this.avatar = res.data.avatar;
        }
      },
      getArticleNum() {
        axios.get('/api/article/count').then(this.handleGetArticleNum)
      },
      handleGetArticleNum(res) {
        res = res.data;
        if (res.code % 2) {
          this.articleNum = res.data;
        }
      },
      getCategoryNum() {
        axios.get('/api/category/count').then(this.handleGetCategoryNum)
      },
      handleGetCategoryNum(res) {
        res = res.data;
        if (res.code % 2) {
          this.categoryNum = res.data;
        }
      },
      getNavigationList() {
        axios.get('/api/navigation').then(this.handleGetNavigationList)
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
      this.getArticleNum();
      this.getCategoryNum();
      this.getNavigationList();
    }
  }
</script>

<style scoped lang="stylus">
  .nav
    background-color #ffffff
    height 100%

    .bkg-img
      width 100%
      height 4.4rem

  .user-info
    text-align center

    .avatar
      border-radius 50%
      width 45%
      height 45%
      margin-top -22%
      border solid 3px #ffffff
      transition all 2s

      &:hover
        transform rotate(360deg)

    .username
      height: .6rem;
      line-height 1rem
      font-family "华文行楷"
      font-size .5rem

  .blog-info
    text-align center
    font-size .3rem
    padding-top .5rem

    .blog-info-item
      height .6rem
      line-height .6rem

  .nav-info
    padding-top .5rem
    padding-bottom 3rem

    .my-menu-item
      font-size .32rem
      font-family "楷体"
</style>
