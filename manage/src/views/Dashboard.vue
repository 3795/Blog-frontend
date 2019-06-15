<template>
  <div class="dashboard">
    <Row>
      <Col span="4">
        <Card class="my-card">
          <p slot="title"  class="card-title">
            文章
          </p>
          <div class="card-content">
            <span class="item">{{cardData.articleCount}}</span>篇
          </div>
        </Card>
      </Col>
      <Col span="4" :offset="1">
        <Card class="my-card">
          <p slot="title" class="card-title">
            分类
          </p>
          <div class="card-content">
            <span class="item">{{cardData.categoryCount}}</span>种
          </div>
        </Card>
      </Col>
      <Col span="4" :offset="1">
        <Card class="my-card">
          <p slot="title" class="card-title">
            标签
          </p>
          <div class="card-content">
            <span class="item">{{cardData.tagCount}}</span>个
          </div>
        </Card>
      </Col>
      <Col span="4" :offset="1">
        <Card class="my-card">
          <p slot="title" class="card-title">
            今日访问
          </p>
          <div class="card-content">
            <span class="item">{{cardData.todayViews}}</span>次
          </div>
        </Card>
      </Col>
      <Col span="4" :offset="1">
        <Card class="my-card">
          <p slot="title" class="card-title">
            昨日访问
          </p>
          <div class="card-content">
            <span class="item">{{cardData.yesterdayViews}}</span>次
          </div>
        </Card>
      </Col>
      <Col span="4">
        <Card class="my-card">
          <p slot="title" class="card-title">
            本月访问
          </p>
          <div class="card-content">
            <span class="item">{{cardData.monthViews}}</span>次
          </div>
        </Card>
      </Col>
    </Row>

  </div>
</template>

<script>
  import {BASE_URL} from "../main";

  export default {
    name: "Dashboard",
    data() {
      return {
        cardData: {}
      }
    },
    methods: {
      getCardData() {
        this.$axios.get(BASE_URL + '/backend/monitor/cardData').then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.cardData = res.data;
          } else {
            this.$Message.error(res.msg);
          }
        })
      },
    },
    mounted() {
      this.getCardData();
    }
  }
</script>

<style scoped lang="stylus">
  .dashboard
    text-align left

  .card-title
    font-size 24px

  .card-content
    height 1.5rem
    line-height 1.5rem
    text-align center
    font-size 24px

  .item
    font-size 30px
  .my-card
    margin .5rem 0 .5rem 0
</style>
