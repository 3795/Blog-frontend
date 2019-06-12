<template>
  <div>
    <Table :data="articleList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row.id)">编辑</Button>
        <Button type="error" size="small" @click="remove(row.id)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="createTime">
        {{row.createTime | formatDate}}
      </template>
      <template slot-scope="{ row, index }" slot="type">
        <i-switch :value="row.type === 1" @on-change="changeType(row.id)"></i-switch>
      </template>
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="total" :current="pageNum" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import {BASE_URL} from "../../main";
  import myDateFormat from "../../assets/js/data";

  export default {
    name: "ArticleList",
    data() {
      return {
        columns1: [
          {
            title: 'ID',
            key: 'id',
            align: 'center',
            width: 70,
          },
          {
            title: '文章标题',
            key: 'title',
            width: 400
          },
          {
            title: '文章分类',
            key: 'categoryName',
            align: "center",
            width: 150
          },
          {
            title: '创建时间',
            key: 'createTime',
            align: "center",
            slot: 'createTime'
          },
          {
            title: '文章状态',
            key: 'type',
            align: "center",
            width: 150,
            slot: 'type'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            slot: 'action'
          }
        ],
        articleList: [],
        pageNum: 1,
        total: 0,
      }
    },
    methods: {
      getArticleList(pageNum) {
        this.$axios.get(BASE_URL + '/backend/article', {
          params: {
            status: 1,
            type: 1,
            pageNum: pageNum
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
          alert(res.msg);
        }
      },
      changePage(pageNum) {
        this.getArticleList(pageNum)
      },
      edit(id) {
        console.log(id)
      },
      remove(id) {
        console.log(id)
      },
      changeType(id) {
        console.log(id)
      }
    },
    mounted() {
      this.getArticleList(this.pageNum);
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

</style>
