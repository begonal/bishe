<template>
  <div class="recommed">
    <div>
      <span style="font-weight:bold;font-size: 30px;  margin-left: 30px;">每日精选推荐</span>
    </div>
    <div class="box">
      <div class="item" v-for="itme in 5 " :key="itme">
        <div>
          <img
            class="img"
            src="http://img.kaiyanapp.com/3f137282d738483b32cf4cd9da2c2c43.jpeg?imageMogr2/quality/60/format/jpg"
          />
        </div>
        <div class="text">
          <span>技术与审美结合，探索视觉的无限可能</span>
          <span># 每日创意灵感</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.recommed {
 
  margin-left: 120px;
}
.recommed .box {
  display: flex;
  flex-direction: column;
}
.recommed .item {
  padding: 20px;
}
.recommed .item .img {
  border-radius: 10px 10px 10px 10px;
  height: 150px;
  width: 250px;
}
.recommed .text {
  display: flex;
  flex-direction: column;
}
</style>