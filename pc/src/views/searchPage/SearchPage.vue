<template>
  <div class="search-page">
    <div class="first-card">
      <div class="search-input">
        <Input search
               enter-button
               size="large"
               v-model="keywords"
               placeholder="Enter something..."
               @enter="search"
               @on-search="search"
        />
      </div>
    </div>
    <div class="first-card" v-if="false">
      暂无内容
    </div>
    <article-card :articleList="articleList"></article-card>
    <pagination v-if="isShow" :total="total" :pageNum="pageNum" @pageNumChange="handlePageNumChange"></pagination>
  </div>
</template>

<script>
  import axios from 'axios'
  import ArticleCard from "../../components/ArticleCard";
  import Pagination from "../../components/Pagination";

  export default {
    name: "SearchPage",
    components: {Pagination, ArticleCard},
    data() {
      return {
        keywords: '',
        articleList: Array,
        total: 0,
        pageNum: 0,
      }
    },
    computed: {
      isShow() {
        return this.total > 0;
      }
    },
    methods: {
      getData() {
        this.keywords = this.$route.query.keywords;
        if (this.$route.path !== ('/search')) {
          return
        }
        this.getArticleList();
      },
      getArticleList() {
        axios.get('/api/article/search', {
          params: {
            keywords: this.keywords
          }
        }).then(this.handleGetArticleList)
      },
      handleGetArticleList(res) {
        res = res.data;
        if (res.code % 2) {
          this.articleList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        } else {
          this.$router.push("/404")
        }
      },
      handlePageNumChange(num) {
        axios.get('/api/article/search', {
          params: {
            keywords: this.keywords,
            pageNum: num
          }
        }).then(this.handleGetArticleList)
      },
      search() {
        if (this.keywords === '') {
          return
        }
        this.$router.push({ path: '/search', query: { keywords: this.keywords }});
      }
    },
    mounted() {
      this.getData();
    },
    watch: {
      '$route': 'getData',
    }
  }
</script>

<style scoped lang="stylus">
  .search-input
    width 80%
    padding 2rem 0 0 3rem
</style>
