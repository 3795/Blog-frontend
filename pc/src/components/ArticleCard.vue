<template>
  <div>
    <div class="article-card" v-for="article of articleList" :key="article.id">
      <Row :gutter="16">
        <Col span="8">
          <div class="thumb-image-box">
            <img class="thumb-image" :src="article.img" :alt="article.title" :title="article.title">
          </div>
        </Col>
        <Col span="16">
          <div class="article-info">
            <router-link :to="{path: `/article/${article.id}`}">
              <div class="article-title">
                <span>{{article.title}}</span>
              </div>
            </router-link>

            <br>
            <div class="article-summary">
              <div>
                {{article.summary}}
              </div>
            </div>
            <div class="article-other-info">
              <Row>
                <Col span="8">
                  <Icon type="ios-time-outline"/>&nbsp;{{article.createTime | formatDate}}
                </Col>
                <Col span="8">
                  <Icon type="ios-list"/>&nbsp;{{article.categoryName}}
                </Col>
                <Col span="8">
                  <router-link :to="{path: `/article/${article.id}`}">
                    <Button type="info" size="small">阅读全文</Button>
                  </router-link>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import myDateFormat from "../assets/js/data";

  export default {
    name: "ArticleCard",
    props: ['articleList'],
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return myDateFormat.formatDate(date, "yyyy-MM-dd");
      }
    }
  }
</script>

<style scoped lang="stylus">
  .article-card
    background-color #fff
    width 100%
    height 5rem;
    margin: .4rem 0 .4rem 0
    padding .3rem
    box-shadow 2px 2px 5px #e2e2e2

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
    color #000

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
    border-top solid .02rem #e2e2e2

</style>
