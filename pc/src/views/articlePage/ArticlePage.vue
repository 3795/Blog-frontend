<template>
  <div class="article-page">
    <p class="article-title">{{article.title}}</p>
    <div class="article-info">
      <Row>
        <Col :offset="9" span="5">
          <Icon type="ios-list"/>&nbsp;{{article.categoryName}}
        </Col>
        <Col span="5">
          <Tag v-for="item of article.tags"
               :color="item.color"
               :key="item.id"
          >
            {{item.name}}
          </Tag>
        </Col>
        <Col span="5">
          <Icon type="ios-time-outline"/>&nbsp;{{article.createTime | formatDate}}
        </Col>
      </Row>
    </div>
    <h4>算法定义</h4>
    <div class="article-content">
      <h4>算法定义</h4>
      <vue-markdown :source="article.content"></vue-markdown>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import myDateFormat from "../../assets/js/data";
  import VueMarkdown from 'vue-markdown'

  export default {
    name: "ArticlePage",
    components: {VueMarkdown},
    data() {
      return {
        article: Object
      }
    },
    mounted() {
      this.getArticle(this.$route.params.id);
    },
    methods: {
      getArticle(id) {
        axios.get('/api/article/' + id).then(this.handleGetArticle);
      },
      handleGetArticle(res) {
        res = res.data;
        if (res.code % 2) {
          this.article = res.data;
        }
      }
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
  .article-page
    min-height 15rem
    height auto
    background-color #fff
    padding 0 .1rem 0 .1rem

  .article-title
    display block
    height 1.5rem
    line-height 1.5rem
    font-size 28px
    padding-left 2rem

  .article-info
    font-size 16px
    border-bottom solid .01rem #e2e2e2
    height 1rem
    line-height 1rem
    text-align center

  .article-content
    padding .5rem 0 .5rem 0
</style>
