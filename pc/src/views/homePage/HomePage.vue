<template>
  <div class="home-page">
    <div class="first-card">
      <p class="web-title">NTShare</p>
      <p class="web-desc">记录挖坑技巧与爬坑方法的小站</p>
    </div>
    <article-card :articleList="articleList"></article-card>
    <pagination :total="total" :pageNum="pageNum" @pageNumChange="handlePageNumChange"></pagination>
  </div>
</template>

<script>
  import axios from 'axios'
  import ArticleCard from "../../components/ArticleCard";
  import Pagination from "../../components/Pagination";

  export default {
    name: "HomePage",
    components: {Pagination, ArticleCard},
    data() {
      return {
        articleList: [],
        total: 5,
        pageNum: 1,
      }
    },
    methods: {
      getArticleList() {
        axios.get('api/article').then(this.handleGetArticleList)
      },
      handleGetArticleList(res) {
        res = res.data;
        if (res.code % 2) {
          this.articleList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        }
      },
      handlePageNumChange(num) {
        axios.get('/api/article', {
          params: {
            pageNum: num
          }
        }).then(this.handleGetArticleList)
      }
    },
    mounted() {
      this.getArticleList();
    }

  }
</script>

<style scoped lang="stylus">
  .home-page
    height auto

  .web-title
    display block
    height 3rem
    line-height 4rem
    text-align center
    font-size 60px
    font-family "华文行楷"
    padding-left .3rem
    color #1890ff

  .web-desc
    display block
    height 2rem
    line-height 1rem
    text-align center
    font-size 30px
    font-family "华文行楷"
    padding-left .3rem
    color rgba(64, 64, 64, 0.73)

</style>
