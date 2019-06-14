<template>
  <div class="personal">
    <Row :gutter="16">
      <Col span="8">
        <UserInfo></UserInfo>
      </Col>
      <Col span="16">
        <MessagePanel></MessagePanel>
      </Col>
    </Row>
  </div>
</template>

<script>

  import UserInfo from "../components/UserInfo";
  import MessagePanel from "../components/MessagePanel";

  export default {
    name: "PersonalPage",
    components: {MessagePanel, UserInfo},
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped lang="stylus">


</style>
