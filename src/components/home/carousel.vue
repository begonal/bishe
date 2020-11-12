<template>
  <div class="homeCarousel">
    <el-carousel height="670px" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in 3" :key="item" >
        <img
          src="http://img.kaiyanapp.com/b85656fae5c5fc73f8a2305cb425816d.jpeg?imageMogr2/quality/60/format/jpg"
          class="banner"
          width="100%"
          height="100%"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {};
</script>
<style>
.banner {
  display: block;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.layui-carousel {
  margin-top: 1.875rem;
  height: 29.3125rem;
}

/*屏幕大于1680px（超大屏电脑）*/
@media screen and (min-width: 105rem) {
  .layui-carousel {
    height: 45.875rem;
  }
}

/*屏幕在1200px到1679之间 (大屏幕电脑) */
@media screen and (min-width: 75rem) and (max-width: 104.9375rem) {
  .layui-carousel {
    height: 29.3125rem;
  }
}

/*屏幕在1024px到1199之间(中屏幕电脑) */
@media screen and (min-width: 64rem) and (max-width: 74.9375rem) {
  .layui-carousel {
    height: 26.875rem;
  }
}

/*屏幕在768px到1023之间(小屏幕-pad)*/
@media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
  .layui-carousel {
    height: 22rem;
  }
}

/*屏幕在480px到768之间(主要是手机屏幕)*/
@media screen and (max-width: 48rem) {
  .layui-carousel {
    height: 14.625rem;
  }
}
.homeCarousel {
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}
.el-carousel {
  border-radius: 60px 0px 0px 60px;
  left: 6%;
  width:94%;

  right: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>