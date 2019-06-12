<template>
    <div class="curtain-page">
      <Row>
        <Col offset="2" span="20">
          <manage-header></manage-header>
          <Row>
            <Col span="4">
              <NavBar></NavBar>
            </Col>
            <Col span="20">
              <div class="content">
                <router-view></router-view>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import ManageHeader from "../components/ManageHeader";
    export default {
        name: "CurtainPage",
      components: {ManageHeader, NavBar}
    }
</script>

<style scoped lang="stylus">
  .curtain-page
    padding-top .1rem
  .content
    padding-top .1rem
    width 100%
    min-height 13rem
</style>
