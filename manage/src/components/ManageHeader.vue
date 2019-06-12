<template>
  <div class="header">
    <Row>
      <Col span="24">
        <router-link to="/console"><span class="web-name">NTShare-管理平台</span></router-link>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: "ManageHeader",
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

</style>
