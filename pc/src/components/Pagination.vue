<template>
  <div class="pagination">
<!--    更改currentPage名称为pageNum-->
    <page :total=total :page-size="5" :current="currentPage"></page>
  </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
          total: Number,
          currentPage: Number,
        }
    }
</script>

<style scoped lang="stylus">
  .pagination
    height 2rem
    line-height: 2rem
    text-align: center

</style>
