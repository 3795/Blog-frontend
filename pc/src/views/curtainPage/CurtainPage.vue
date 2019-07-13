<template>
  <div class="curtain-page">
    <Row :gutter="16">
      <Col span="17">
        <div class="route-block">
          <router-view></router-view>
        </div>
      </Col>
      <Col span="7">
        <div class="info-block">
          <carousel-map></carousel-map>
          <label-panel></label-panel>
          <survive-panel></survive-panel>
          <link-panel></link-panel>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import CarouselMap from "../../components/info-block/CarouselMap";
  import LabelPanel from "../../components/info-block/LabelPanel";
  import LinkPanel from "../../components/info-block/LinkPanel";
  import SurvivePanel from "../../components/info-block/SurvivePanel";

  export default {
    name: 'CurtainPage',
    components: {
      SurvivePanel,
      LinkPanel,
      LabelPanel,
      CarouselMap
    }
  }
</script>

<style scoped lang="stylus">
  .route-block
    padding .4rem
    height auto
</style>
