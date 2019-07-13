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
    <div class="article-content">
    <mavon-editor v-model="article.content"
                  :subfield="false"
                  :toolbarsFlag="false"
                  :defaultOpen="'preview'"
                  :ishljs="true"
                  :codeStyle="'vs2015'">
    </mavon-editor>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import myDateFormat from "../../assets/js/data";
  import {generateTitle} from "../../main";

  export default {
    name: "ArticlePage",
    data() {
      return {
        article: Object,
      }
    },
    mounted() {
      this.getArticle(this.$route.params.id);
    },
    methods: {
      getArticle(id) {
        axios.get('/api/article/' + id, {
          params: {
            t: Date.now()
          }
        }).then(this.handleGetArticle);
      },
      handleGetArticle(res) {
        res = res.data;
        if (res.code % 2) {
          this.article = res.data;
          document.title = generateTitle(this.article.title)
        } else {
          this.$router.push("/404")
        }
      },
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
    height 1rem
    line-height 1rem
    text-align center

  .article-content
    font-size .36rem
    overflow hidden
</style>
