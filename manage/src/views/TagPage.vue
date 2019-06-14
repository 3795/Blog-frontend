<template>
  <div>
    <Row>
      <Col span="20">
        <p class="table-title">标签管理</p>
      </Col>
      <Col span="4">
        <div>
          <Button size="large" type="primary" @click="showAddModel">添加标签</Button>
        </div>
      </Col>
    </Row>
    <Modal
      v-model="addTagModel"
      title="添加标签"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Form :model="tagForm" :label-width="100">
        <FormItem label="标签名称">
          <Input v-model="tagForm.name" placeholder="请输入标签名称"></Input>
        </FormItem>
        <FormItem label="标签颜色">
          <ColorPicker v-model="tagForm.color" />
        </FormItem>
      </Form>
    </Modal>
    <Table :data="tagList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="editTag(row.id)">编辑</Button>
        <Button type="error" size="small" @click="removeTag(row.id, index)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="status">
        <i-switch :value="row.status === 1" @on-change="changeType(row.id)"></i-switch>
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
    name: "TagPage",
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
            title: '标签名称',
            key: 'name',
            width: 400,
            align: 'center',
          },
          {
            title: '标签颜色',
            key: 'color',
            align: "center",
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
        tagList: [],
        pageNum: 1,
        total: 0,
        addTagModel: false,
        tagForm: {
          name: '',
          color: '',
          id: '-1'
        }
      }
    },
    methods: {
      getTagList(pageNum) {
        this.$axios.get(BASE_URL + '/backend/tag', {
          params: {
            pageNum: pageNum
          }
        }).then(this.handleGetTagList)
      },
      handleGetTagList(res) {
        res = res.data;
        if (res.code % 2) {
          this.tagList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        } else {
          this.$Message.error(res.msg);
        }
      },
      changePage(pageNum) {
        this.getTagList(pageNum)
      },
      editTag(id) {
        this.showEditModel(id);
      },
      removeTag(id, index) {
        this.$Modal.confirm({
          title: '确认删除',
          content: '确认删除该标签吗',
          onOk: () => {
            this.$axios.delete(BASE_URL + '/backend/tag/' + id).then(this.handleDeleteTag);
            this.tagList.splice(index, 1);
          },
          onCancel: () => {
          }
        });
      },
      handleDeleteTag(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("删除成功");
        } else {
          this.$Message.success("删除失败");
        }
      },
      changeType(id) {
        this.$axios.patch(BASE_URL + '/backend/tag/' + id).then(this.handleChangeType);
      },
      handleChangeType(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("更改成功");
          this.getTagList(this.pageNum);
        } else {
          this.$Message.error(res.msg);
        }
      },
      showAddModel() {
        this.addTagModel = true;
        this.tagForm.name = '';
        this.tagForm.color = '';
        this.tagForm.id = -1;
      },
      showEditModel(id) {
        this.addTagModel = true;
        this.$axios.get('/api/backend/tag/' + id).then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.tagForm.id = res.data.id;
            this.tagForm.name = res.data.name;
            this.tagForm.color = res.data.color;
          } else {
            this.$Message.error(res.msg);
          }
        })
      },
      ok() {
        let params = new URLSearchParams();
        params.append("name", this.tagForm.name);
        params.append("color", this.tagForm.color);
        params.append("status", "1");
        if (this.tagForm.id > 0) {
          this.$axios.put(BASE_URL + '/backend/tag/' + this.tagForm.id, params).then(this.handleOk)
        } else {
          this.$axios.post(BASE_URL + '/backend/tag', params).then(this.handleOk)
        }
      },
      cancel() {
      },
      handleOk(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success(res.msg);
          if (this.tagForm.id > 0) {
            this.getTagList(this.pageNum);
          } else {
            this.getTagList(this.total);
          }
        } else {
          this.$Message.error(res.msg);
        }
      }
    },
    mounted() {
      this.getTagList(this.pageNum);
    }
  }
</script>


<style scoped lang="stylus">

</style>
