<template>
  <div class="link-panel">
    <Card class="link-card">
      <p slot="title" class="title">
        <Icon type="ios-link-outline"/>&nbsp;友情链接
      </p>
      <div>
        <p class="link-item"><a href="https://juejin.im/" target="_blank">掘金- juejin.im</a></p>
        <p class="link-item"><a href="https://github.com/" target="_blank">GitHub- 大型同性交友网站</a></p>
        <p class="link-item"><a href="https://cn.vuejs.org/" target="_blank">Vue.js</a></p>
        <p class="link-item"><a href="https://cn.vuejs.org/" target="_blank">欢迎添加友链</a></p>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "LinkPanel"
  }
</script>

<style scoped lang="stylus">
  .link-panel
    padding-top 0.4rem
    height auto
    width 100%

  .link-card
    height 100%

    .title
      color #0a001f ab
      font-size 0.35rem
      font-family "华文楷体"
    a
      color #000
      &:hover
        color deepskyblue

  .link-item
    display block
    height .7rem
    line-height .7rem
</style>
