<template>
  <div class="carousel-map">
    <Carousel autoplay loop>
      <CarouselItem v-for="item of carouselImgList" :key="item.id">
        <div><img class="carousel-image" :src="item.img" alt=""/></div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "CarouselMap",
    data() {
      return {
        carouselImgList: [],
      }
    },
    methods: {
      getCarouselImg() {
        axios.get('/api/carouselImg?t=' + Date.now()).then(this.handleGetCarouselImg)
      },
      handleGetCarouselImg(res) {
        res = res.data;
        if (res.code % 2) {
          this.carouselImgList = res.data
        }
      }
    },
    mounted() {
      // 获取图片列表
      this.getCarouselImg();
    }
  }
</script>

<style scoped lang="stylus">
  .carousel-map
    width 100%
    height 4rem
    box-shadow 0 6px 5px #d7d8db

  .carousel-image
    width 100%
    height 4rem

</style>
