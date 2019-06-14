<template>
  <div>
    <Row>
      <Col span="20">
        <p class="table-title">导航管理</p>
      </Col>
      <Col span="4">
        <div>
          <Button size="large" type="primary" @click="showAddModel">添加导航</Button>
        </div>
      </Col>
    </Row>
    <Modal
      v-model="addNavigationModel"
      title="添加导航"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Form :model="navigationForm" :label-width="100">
        <FormItem label="导航名称">
          <Input v-model="navigationForm.name" placeholder="请输入导航名称"></Input>
        </FormItem>
        <FormItem label="优先级">
          <InputNumber :max="10" :min="0" v-model="navigationForm.priority"></InputNumber>
        </FormItem>
        <FormItem label="导航地址">
          <Input v-model="navigationForm.link" placeholder="请输入导航地址"></Input>
        </FormItem>
      </Form>
    </Modal>
    <Table :data="navigationList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="editNavigation(row.id)">编辑</Button>
        <Button type="error" size="small" @click="removeNavigation(row.id, index)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="status">
        <i-switch :value="row.status === 1" @on-change="changeType(row.id, row.status)"></i-switch>
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

  export default {
    name: "NavigationPage",
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
            title: '导航名称',
            key: 'name',
            width: 400,
            align: 'center',
          },
          {
            title: '优先级',
            key: 'priority',
            align: "center",
          },
          {
            title: '导航地址',
            key: 'link',
            align: "center",
            width: 300
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
        navigationList: [],
        pageNum: 1,
        total: 0,
        addNavigationModel: false,
        navigationForm: {
          name: '',
          link: '',
          priority: 0,
          id: '-1'
        }
      }
    },
    methods: {
      getNavigationList(pageNum) {
        this.$axios.get(BASE_URL + '/backend/navigation', {
          params: {
            pageNum: pageNum
          }
        }).then(this.handleGetNavigationList)
      },
      handleGetNavigationList(res) {
        res = res.data;
        if (res.code % 2) {
          this.navigationList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        } else {
          this.$Message.error(res.msg);
        }
      },
      changePage(pageNum) {
        this.getNavigationList(pageNum)
      },
      editNavigation(id) {
        this.showEditModel(id);
      },
      removeNavigation(id, index) {
        this.$Modal.confirm({
          title: '确认删除',
          content: '确认删除该导航吗',
          onOk: () => {
            this.$axios.delete(BASE_URL + '/backend/navigation/' + id).then(this.handleDeleteNavigation);
            this.navigationList.splice(index, 1);
          },
          onCancel: () => {
          }
        });
      },
      handleDeleteNavigation(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("删除成功");
        } else {
          this.$Message.success("删除失败");
        }
      },
      changeType(id, status) {
        let params = new URLSearchParams();
        params.append("id", id);
        status = (status + 1) % 2;
        params.append("status", status);
        this.$axios.patch(BASE_URL + '/backend/navigation', params).then(this.handleChangeType);
      },
      handleChangeType(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("更改成功");
          this.getNavigationList(this.pageNum);
        } else {
          this.$Message.error(res.msg);
        }
      },
      showAddModel() {
        this.addNavigationModel = true;
        this.navigationForm.name = '';
        this.navigationForm.priority = 0;
        this.navigationForm.link = '';
        this.navigationForm.id = -1;
      },
      showEditModel(id) {
        this.addNavigationModel = true;
        this.$axios.get('/api/backend/navigation/' + id).then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.navigationForm.id = res.data.id;
            this.navigationForm.name = res.data.name;
            this.navigationForm.priority = res.data.priority;
            this.navigationForm.link = res.data.link;
          } else {
            this.$Message.error(res.msg);
          }
        })
      },
      ok() {
        let params = new URLSearchParams();
        params.append("name", this.navigationForm.name);
        params.append("priority", this.navigationForm.priority);
        params.append("link", this.navigationForm.link);
        params.append("status", "1");
        if (this.navigationForm.id > 0) {
          params.append("id", this.navigationForm.id);
          this.$axios.put(BASE_URL + '/backend/navigation/', params).then(this.handleOk)
        } else {
          this.$axios.post(BASE_URL + '/backend/navigation', params).then(this.handleOk)
        }
      },
      cancel() {
      },
      handleOk(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success(res.msg);
          if (this.navigationForm.id > 0) {
            this.getNavigationList(this.pageNum);
          } else {
            this.getNavigationList(this.total);
          }
        } else {
          this.$Message.error(res.msg);
        }
      }
    },
    mounted() {
      this.getNavigationList(this.pageNum);
    }
  }
</script>


<style scoped lang="stylus">

</style>
