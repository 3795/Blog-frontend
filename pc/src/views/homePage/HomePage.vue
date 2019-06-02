<template>
  <div class="home-page">
    <div class="home-card">
      <p class="web-title">NTShare</p>
      <p class="web-desc">记录挖坑技巧与爬坑方法的小站</p>
    </div>
    <div class="article-card" v-for="article of articleList" :key="article.id">
      <Row :gutter="16">
        <Col span="8">
          <div class="thumb-image-box">
            <img class="thumb-image" :src="article.img" :alt="article.title" :title="article.title">
          </div>
        </Col>
        <Col span="16">
          <div class="article-info">
            <div class="article-title">
              {{article.title}}
            </div>
            <br>
            <div class="article-summary">
              <div>
                {{article.summary}}
              </div>
            </div>
            <div class="article-other-info">
              <Row>
                <Col span="8"><Icon type="ios-time-outline" />&nbsp;{{article.createTime | formatDate}}</Col>
                <Col span="8"><Icon type="ios-list" />&nbsp;{{article.categoryName}}</Col>
                <Col span="8"><Icon type="ios-book-outline" />&nbsp;阅读全文</Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import myDateFormat from "../../assets/js/data";

  export default {
    name: "HomePage",
    data() {
      return {
        articleList: []
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
        }
      }
    },
    mounted() {
      this.getArticleList();
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return myDateFormat.formatDate(date, "yyyy-MM-dd");
      }
    }
  }
</script>

<style scoped lang="stylus">
  .home-page
    height auto

  .home-card
    width 100%
    height 5rem
    background-color #fff
    margin 0 0 .4rem 0

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

  .article-card
    padding .3rem

  .thumb-image-box, article-info
    height 4.4rem

  .thumb-image
    width 100%
    height 100%
    transition all 0.6s

    &:hover
      transform scale(1.05)

  .article-title
    font-size: 20px;
    transition: margin-left 1s;
    font-family: "华文隶书";
    height .8rem
    line-height .8rem
    overflow hidden

    &:hover
      margin-left 10px
      color #00c7e7

  .article-summary
    font-size: 16px;
    text-indent: 2em;
    height: 2.5rem;
    line-height .5rem
    overflow: hidden;

  .article-other-info
    height .85rem
    line-height .85rem
    text-align center
</style>
