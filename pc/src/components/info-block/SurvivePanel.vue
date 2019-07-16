<template>
  <div class="survive-panel">
    <Card class="survive-card">
      <p slot="title" class="title">
        <Icon type="ios-heart-outline" />&nbsp;平稳运行
      </p>
      <div class="content">
        <img src="https://img.ntshare.cn/15632872026.gif"/>
        <div class="time">&nbsp;{{operationHours}}</div>
      </div>
    </Card>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "SurvivePanel",
    data() {
      return {
        days: 336,
        seconds: 40223,
        operationHours: "336 天 16 小时 28 分 11 秒",
      }
    },
    methods: {
      timing() {
        setInterval(() => {
          this.seconds += 1;
          this.operationHours = this.secondsFormat(this.seconds)
        }, 1000)
      },
      secondsFormat(s) {
        let hour = Math.floor(s / 3600);
        let minute = Math.floor((s - hour * 3600) / 60);
        let second = s - hour * 3600 - minute * 60;
        return this.days + " 天 " + hour + " 时 " + minute + " 分 " + second + " 秒";
      },
      getRuntime() {
        axios.get('/api/data/runtime?t=' + Date.now()).then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.days = res.data.days;
            this.seconds = res.data.seconds;
          }
        })
      },
    },
    mounted() {
      this.getRuntime();
      this.timing()
    }
  }
</script>

<style scoped lang="stylus">
  .survive-panel
    padding-top 0.4rem
    height auto
    width 100%

    .title
      color #0a001f ab
      font-size 0.35rem
      font-family "华文楷体"

    .content
      text-align center

    .time
      height .5rem
      line-height .5rem
</style>
