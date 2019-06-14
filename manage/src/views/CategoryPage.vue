<template>
  <div>
    <Row>
      <Col span="20">
        <p class="table-title">分类管理</p>
      </Col>
      <Col span="4">
        <div>
          <Button size="large" type="primary" @click="showAddModel">添加分类</Button>
        </div>
      </Col>
    </Row>
    <Modal
      v-model="addCategoryModel"
      title="添加分类"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Form :model="categoryForm" :label-width="100">
        <FormItem label="分类名称">
          <Input v-model="categoryForm.name" placeholder="请输入分类名称"></Input>
        </FormItem>
        <FormItem label="父级分类">
          <Select v-model="categoryForm.parentId" style="width:200px">
            <Option v-for="item in firstLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
    <Table :data="categoryList" :columns="columns1" stripe>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="editCategory(row.id)">编辑</Button>
        <Button type="error" size="small" @click="removeCategory(row.id, index)">删除</Button>
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
    name: "CategoryPage",
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
            title: '分类名称',
            key: 'name',
            width: 400,
            align: 'center',
          },
          {
            title: '父级名称',
            key: 'parentName',
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
        categoryList: [],
        firstLevel: [],
        pageNum: 1,
        total: 0,
        addCategoryModel: false,
        categoryForm: {
          name: '',
          parentId: '',
          id: '-1'
        }
      }
    },
    methods: {
      getCategoryList(pageNum) {
        this.$axios.get(BASE_URL + '/backend/category', {
          params: {
            pageNum: pageNum
          }
        }).then(this.handleGetCategoryList)
      },
      handleGetCategoryList(res) {
        res = res.data;
        if (res.code % 2) {
          this.categoryList = res.data.list;
          this.total = res.data.total;
          this.pageNum = res.data.pageNum;
        } else {
          this.$Message.error(res.msg);
        }
      },
      changePage(pageNum) {
        this.getCategoryList(pageNum)
      },
      editCategory(id) {
        this.showEditModel(id);
      },
      removeCategory(id, index) {
        this.$Modal.confirm({
          title: '确认删除',
          content: '确认删除该分类吗',
          onOk: () => {
            this.$axios.delete(BASE_URL + '/backend/category/' + id).then(this.handleDeleteCategory);
            this.categoryList.splice(index, 1);
          },
          onCancel: () => {
          }
        });
      },
      handleDeleteCategory(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("删除成功");
        } else {
          this.$Message.success("删除失败");
        }
      },
      changeType(id) {
        let params = new URLSearchParams();
        params.append("id", id);
        this.$axios.patch(BASE_URL + '/backend/category/' + id).then(this.handleChangeType);
      },
      handleChangeType(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success("更改成功");
          this.getCategoryList(this.pageNum);
        } else {
          this.$Message.error(res.msg);
        }
      },
      showAddModel() {
        this.addCategoryModel = true;
        if (this.firstLevel.length === 0) {
          this.getParentCategory();
        }
        this.categoryForm.name = '';
        this.categoryForm.parentId = 0;
        this.categoryForm.id = -1;
      },
      showEditModel(id) {
        this.addCategoryModel = true;
        if (this.firstLevel.length === 0) {
          this.getParentCategory();
        }
        this.$axios.get('/api/backend/category/' + id).then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.categoryForm.id = res.data.id;
            this.categoryForm.name = res.data.name;
            this.categoryForm.parentId = res.data.parentId;
          } else {
            this.$Message.error(res.msg);
          }
        })
      },
      getParentCategory() {
        this.$axios.get('/api/backend/category/firstLevel').then((res) => {
          res = res.data;
          if (res.code % 2) {
            let data = res.data;
            let o = {};
            o.value = 0;
            o.label = "无父级分类";
            this.firstLevel.push(o);
            for (let i = 0; i < data.length; i++) {
              let o = {};
              o.value = data[i].id;
              o.label = data[i].name;
              this.firstLevel.push(o);
            }
          } else {
            this.$Message.error(data.msg);
          }
        })
      },
      ok() {
        let params = new URLSearchParams();
        params.append("name", this.categoryForm.name);
        params.append("parentId", this.categoryForm.parentId);
        params.append("status", "1");
        if (this.categoryForm.id > 0) {
          params.append("id", this.categoryForm.id);
          this.$axios.put(BASE_URL + '/backend/category', params).then(this.handleOk)
        } else {
          this.$axios.post(BASE_URL + '/backend/category', params).then(this.handleOk)
        }
      },
      cancel() {
      },
      handleOk(res) {
        res = res.data;
        if (res.code % 2) {
          this.$Message.success(res.msg);
          if (this.categoryForm.id > 0) {
            this.getCategoryList(this.pageNum);
          } else {
            this.getCategoryList(this.total);
          }
        } else {
          this.$Message.error(res.msg);
        }
      }
    },
    mounted() {
      this.getCategoryList(this.pageNum);
    }
  }
</script>


<style scoped lang="stylus">

</style>
