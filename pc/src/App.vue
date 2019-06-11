<template>
  <div id="app" class="app">
    <Row>
      <Col :xs="0" :md="24" :lg="24">
        <Row :gutter="16">
          <Col offset="2" span="4">
            <div class="nav-bar">
              <Affix :offset-top="5">
                <nav-bar></nav-bar>
              </Affix>
            </div>
          </Col>
          <Col span="16">
            <my-header></my-header>
            <div class="content">
              <keep-alive exclude="ArticlePage,CarouselImg">
                <router-view></router-view>
              </keep-alive>
            </div>
            <my-footer></my-footer>
          </Col>
        </Row>
      </Col>

      <Col :xs="24" :sm="24" :md="0" :lg="0">
        <div class="mobile">
          <h2>
            移动端请访问
            <a href="https://m.ntshare.cn" target="_self">https://m.ntshare.cn</a>
          </h2>
        </div>
      </Col>
    </Row>
  </div>
</template>

<style scoped lang="stylus">
  .app
    padding-top .1rem
    background-color #f0f2f5

    .content
      min-height 15.4rem
      height auto
      padding .2rem 0 0 0

    .nav-bar
      height 10rem

  .mobile
    height 10rem
    line-height 10rem
    text-align center
</style>
<script>
  import NavBar from "./components/NavBar";
  import MyHeader from "./components/Header";
  import Home from "./views/curtainPage/CurtainPage";
  import MyFooter from "./components/Footer";

  export default {
    components: {MyFooter, MyHeader, Home, NavBar}
  }
</script>
