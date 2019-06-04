<template>
  <div id="app" class="app">
    <Row :gutter="16">
      <Col span="4" offset="2">
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
