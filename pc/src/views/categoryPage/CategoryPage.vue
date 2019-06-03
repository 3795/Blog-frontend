<template>
  <div class="category-page">
    <div class="first-card">
      <p class="category-name">{{categoryName}}</p>
      <div class="category-children">
        <Row>
          <Col span="4" v-for="item of categoryChildrenList"
               :key="item.id">
            <router-link :to="{path: `/category/${item.id}`}">
              <span class="category-children-name">{{item.name}}</span>
            </router-link>
          </Col>
        </Row>
      </div>
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
    name: "CategoryPage",
    components: {Pagination, ArticleCard},
    data() {
      return {
        categoryName: '',
        categoryChildrenList: Array,
        articleList: Array,
        total: 5,
        pageNum: 1,
        id: 0,
      }
    },
    methods: {
      getData() {
        this.id = this.$route.params.id;
        this.getCategoryInfo(this.id);
        this.getArticleList(this.id);
      },
      getCategoryInfo(id) {
        axios.get('/api/category/children', {
          params: {
            id: id
          }
        }).then(this.handleGetCategoryInfo);
      },
      getArticleList(id) {
        axios.get('/api/category/' + id).then(this.handleGetArticleList)
      },
      handleGetCategoryInfo(res) {
        res = res.data;
        if (res.code % 2) {
          this.categoryName = res.data.name;
          this.categoryChildrenList = res.data.categoryDTOList;
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
        axios.get('/api/category/' + this.id, {
          params: {
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

  .category-name
    display block
    height 3rem
    line-height 4rem
    text-align center
    font-size 60px
    font-family "华文行楷"
    padding-left .3rem
    color #1890ff

  .category-children
    display block
    height 2rem
    line-height 1rem
    text-align center
    font-size 26px
    font-family "华文行楷"
    padding-left .3rem

  .category-children-name
    color rgba(64, 64, 64, 0.73)
    &:hover
      color #1890ff
</style>
