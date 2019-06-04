<template>
  <div class="tag-page">
    <div class="first-card">
      <p class="tag-name" ref="tagName">{{tag.name}}</p>
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
    name: "TagPage",
    components: {Pagination, ArticleCard},
    data() {
      return {
        id: 0,
        tag: Object,
        articleList: Array,
        total: 5,
        pageNum: 1,
      }
    },
    methods: {
      getData() {
        this.id = this.$route.params.id;
        if (this.$route.path !== ('/tag/' + this.id)) {
          return
        }
        this.getTagInfo(this.id);
        this.getArticleList(this.id);
      },
      getTagInfo(id) {
        axios.get('/api/tag/' + id).then(this.handleGetTagInfo);
      },
      getArticleList(id) {
        axios.get('/api/tag/article', {
          params: {
            id: id
          }
        }).then(this.handleGetArticleList)
      },
      handleGetTagInfo(res) {
        res = res.data;
        if (res.code % 2) {
          this.tag = res.data;
          this.$refs.tagName.style.color = this.tag.color;
        } else {
          this.$router.push("/404")
        }
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
        axios.get('/api/tag/article', {
          params: {
            id: this.id,
            pageNum: num
          }
        }).then(this.handleGetArticleList)
      },
    },
    mounted() {
      this.getData();
    },
    watch: {
      '$route': 'getData'
    }
  }
</script>

<style scoped lang="stylus">
  .tag-name
    display block
    height 3rem
    line-height 4rem
    text-align center
    font-size 60px
    font-family "华文行楷"
    padding-left .3rem
    color #1890ff
</style>
