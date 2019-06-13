<template>
  <div>
    <Row>
      <Col span="20">
        <p class="table-title">IP管理</p>
      </Col>
    </Row>
    <Table :data="ipList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="error" size="small" @click="removeIp(row.id, index)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="status">
        <i-switch :value="row.status === 1" @on-change="changeType(row.id)"></i-switch>
      </template>
      <template slot-scope="{ row, index }" slot="lastTime">
        {{row.lastTime | formatDate}}
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
  import {BASE_URL} from "../main";
  import myDateFormat from "../assets/js/data";

  export default {
    name: "IpPage",
    data() {
      return {
        columns1: [
          {
            title: 'ID',
            key: 'id',
            align: 'center',
            width: 135,
          },
          {
            title: 'IP',
            key: 'ip',
            width: 200,
            align: 'center',
          },
          {
            title: '最近登录时间',
            key: 'lastTime',
            align: "center",
            width: 400,
            slot: 'lastTime'
          },
          {
            title: '登录次数',
            key: 'count',
            align: "center",
            width: 200
          },
          {
            title: '状态',
            key: 'status',
            align: "center",
            width: 150,
            slot: 'status'
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            align: 'center',
            slot: 'action'
          }
        ],
        ipList: [],
        pageNum: 1,
        total: 0,
        addIpModel: false,
        ipForm: {
          name: '',
          color: '',
          id: '-1'
        }
      }
    },
    methods: {
      getIpList(pageNum) {
        this.$axios.get(BASE_URL + '/backend/ipRecord', {
          params: {
            pageNum: pageNum
          }
        }).then(this.handleGetIpList)
      },
      handleGetIpList(res) {
        res = res.data;
        if (res.code % 2) {
          this.ipList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        } else {
          this.$Message.error(res.msg);
        }
      },
      changePage(pageNum) {
        this.getIpList(pageNum)
      },
      removeIp(id, index) {
        this.$Modal.confirm({
          title: '确认删除',
          content: '确认删除该IP吗',
          onOk: () => {
            this.$axios.delete(BASE_URL + '/backend/ipRecord/' + id).then(this.handleDeleteIp);
            this.ipList.splice(index, 1);
          },
          onCancel: () => {
          }
        });
      },
      handleDeleteIp(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("删除成功");
        } else {
          this.$Message.success("删除失败");
        }
      },
      changeType(id) {
        this.$axios.patch(BASE_URL + '/backend/ipRecord/' + id).then(this.handleChangeType);
      },
      handleChangeType(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("更改成功");
          this.getIpList(this.pageNum);
        } else {
          this.$Message.error(res.msg);
        }
      },
    },
    mounted() {
      this.getIpList(this.pageNum);
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return myDateFormat.formatDate(date, "yyyy-MM-dd hh:mm:ss");
      }
    }
  }
</script>


<style scoped lang="stylus">

</style>
