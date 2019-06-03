<template>
  <div class="header">
    <Row>
      <Col span="8">
        <router-link to="/"><span class="web-name">NTShare</span></router-link>
      </Col>
      <Col span="8" offset="8">
        <div class="search-input">
          <Input search enter-button placeholder="Enter something..."/>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style scoped lang="stylus">
  .header
    height 1.2rem
    line-height 1.2rem
    background-color #fff

    .web-name
      font-size 28px
      font-family "华文行楷"
      padding-left .3rem
      color #1890ff
    .search-input
      width 80%
      display inline-block
      vertical-align middle
</style>
