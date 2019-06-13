<template>
  <div>
    <p class="table-title">回收站</p>
    <Table :data="articleList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="recoverArticle(row.id, index)">还原</Button>
        <Button type="error" size="small" @click="deleteArticle(row.id, index)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="createTime">
        {{row.createTime | formatDate}}
      </template>
      <template slot-scope="{ row, index }" slot="type">
        <i-switch :value="row.type === 1" @on-change="changeType(row.id, row.type)"></i-switch>
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
    name: "Recycle",
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
            status: 0,
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
      recoverArticle(id, index) {
        let params = new URLSearchParams();
        params.append("id", id);
        params.append("status", "1");
        this.$axios.patch(BASE_URL + '/backend/article/status', params).then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.$Message.success("文章还原成功");
            this.articleList.splice(index, 1);
          } else {
            this.$Message.success("文章还原失败");
          }
        });
      },
      deleteArticle(id, index) {
        this.$Modal.confirm({
          title: '确认删除',
          content: '彻底删除该文章吗',
          onOk: () => {
            this.$axios.delete(BASE_URL + '/backend/article/' + id).then(this.handleDeleteArticle);
            this.articleList.splice(index, 1);
          },
          onCancel: () => {
          }
        });
      },
      handleDeleteArticle(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("删除成功");
        } else {
          this.$Message.success("删除失败");
        }
      },
      changeType(id, type) {
        let params = new URLSearchParams();
        params.append("id", id);
        type = (type+1) % 2;
        params.append("type", type);
        this.$axios.patch(BASE_URL + '/backend/article/type', params).then(this.handleChangeType);
      },
      handleChangeType(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("更改成功");
        } else {
          this.$Message.error(res.msg);
        }
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
