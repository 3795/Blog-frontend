<template>
  <div class="message-panel">
    <Tabs value="message">
      <TabPane :label="label" name="message">
        <div class="message-content">
          <Card class="my-card" v-for="(item) of messageList" :key="item.id">
            <p slot="title">
              {{item.title}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.createTime | formatDate}}
            </p>

            <Button v-if="item.status === 0" type="info" size="small" slot="extra" @click="readMessage(item.id)">知道了</Button>
            <Button v-else type="error" size="small" slot="extra"  @click="deleteMessage(item.id)">删除</Button>
            <div class="card-content">
              {{item.content}}
            </div>
          </Card>
        </div>
      </TabPane>
      <Button type="success" slot="extra" @click="clearMessage">清空消息</Button>
    </Tabs>
  </div>
</template>

<script>
  import myDateFormat from "../assets/js/data";
  import {BASE_URL} from "../main";

  export default {
    name: "MessagePanel",
    data() {
      return {
        label: (h) => {
          return h('div', [
            h('span', '消息中心'),
            h('Badge', {
              props: {
                count: this.messageCount
              }
            })
          ])
        },
        messageCount: 0,
        messageList: [],
      }
    },
    methods: {
      getMessageList() {
        this.$axios.get(BASE_URL + '/backend/message').then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.messageList = res.data;
          }
        })
      },
      getMessageCount() {
        this.$axios.get(BASE_URL + '/backend/message/count', {
          params: {
            status: 0,
          }
        }).then((res) => {
          res = res.data;
          if (res.code % 2) {
            this.messageCount = res.data;
          }
        })
      },
      readMessage(id) {
        for (let message of this.messageList) {
          if (message.id === id) {
            message.status = 1;
            break;
          }
        }
        this.messageCount -= 1;
        this.$axios.patch(BASE_URL + '/backend/message/' + id).then((res) => {
          res = res.data;
          if (!res.code % 2) {
            this.$Message.error(res.msg);
          }
        })
      },
      deleteMessage(id) {
        for (let index in this.messageList) {
          if (this.messageList[index].id === id) {
            this.messageList.splice(parseInt(index), 1);
            break;
          }
        }
        this.$axios.delete(BASE_URL + '/backend/message/' + id).then((res) => {
          res = res.data;
          if (!res.code % 2) {
            this.$Message.error(res.msg);
          }
        })
      },
      clearMessage() {
        this.$Modal.confirm({
          title: '确认删除',
          content: '确认删除所有已读消息吗',
          onOk: () => {
            let tmp = [];
            for (let message of this.messageList) {
              if (message.status === 0) {
                tmp.push(message);
              }
            }
            this.messageList = tmp;
            this.$axios.post(BASE_URL + '/backend/message/empty').then((res) => {
              res = res.data;
              if (res.code % 2) {
                this.$Message.success("删除成功");
              }
            })
          },
          onCancel: () => {
          }
        });
      }
    },
    mounted() {
      this.getMessageCount();
      this.getMessageList();
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return myDateFormat.formatDate(date, "MM-dd hh:mm:ss");
      }
    }
  }
</script>

<style scoped lang="stylus">
  .message-panel
    box-shadow 5px 5px 5px #e2e2e2
    height 15rem
  .message-content
    height 13.9rem
    overflow-y auto
    margin-right -15px
    text-align left
  .my-card
    width 98%
    margin-bottom .5rem
</style>
