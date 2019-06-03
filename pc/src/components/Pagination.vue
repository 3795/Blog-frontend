<template>
  <div class="pagination">
    <page
      :total=total
      :page-size="5"
      :current="pageNum"
      @on-change="changePageNum"
    ></page>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      total: Number,
      pageNum: Number,
    },
    methods: {
      changePageNum(num) {
        this.$emit('pageNumChange', num);
      }
    }
  }
</script>

<style scoped lang="stylus">
  .pagination
    height 2rem
    line-height: 2rem
    text-align: center

</style>
