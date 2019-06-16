<template>
  <div class="label-panel">
    <Card class="label-card">
      <p slot="title" class="title">
        <Icon type="ios-pricetags-outline"/>&nbsp;文章标签
      </p>
      <div>
        <Tag v-for="item of tagList"
             :color="item.color"
             :key="item.id"
             class="tag-item"
             @click.native="changeTag(item.id)"
        >
          {{item.name}}
        </Tag>
      </div>
    </Card>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "LabelPanel",
    data() {
      return {
        tagList: [],
      }
    },
    methods: {
      getTagList() {
        axios.get('/api/tag?t=' + Date.now()).then(this.handleGetTagList)
      },
      handleGetTagList(res) {
        res = res.data;
        if (res.code % 2) {
          this.tagList = res.data;
        }
      },
      changeTag(id) {
        this.$router.history.push("/tag/" + id)
      }
    },
    mounted() {
      this.getTagList();
    }
  }
</script>

<style scoped lang="stylus">
  .label-panel
    padding-top 0.4rem
    height auto
    width 100%

  .label-card
    height 100%

    .title
      color #0a001f ab
      font-size 0.35rem
      font-family "华文楷体"

    .tag-item
      margin .1rem
</style>
