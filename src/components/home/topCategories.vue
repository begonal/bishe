<template>
  <div class="topCategories">
    <div class="item" v-for="(item,index) in theme" :key="index">
      <router-link :to="{ path: '/theme' }" style="text-decoration: none;">
        <el-image :src="item.headerImage" class="img"></el-image>
        <span>#{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // this.onHomeCreate();
    this.theme=this.$store.state.theme
  },
  data() {
    return {
      theme: [],
    };
  },
  methods: {
    async onHomeCreate() {
      console.log("11111111111111111111")
      this.$http
        .get("/theme", {})
        .then((res) => {
          this.$message({
            showClose: true,
            message: "加载主题成功",
            type: "success",
          });
          for (let index = 0; index < 13; index++) {
            this.theme[index] = res.data[index];
          }

          this.$store.state.theme = this.theme;
        })
        .catch((error) => {
          if (error.response) {
            // this.$message({
            //   showClose: true,
            //   message: "加载主题失败",
            //   type: "error",
            // });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
         console.log(this.theme)
    },
  },
};
</script>
<style scoped>
.topCategories {
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
  margin-top: 30px;
}
.topCategories .item {
  width: 120px;
  height: 120px;
  position: relative;
  margin: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
}
.topCategories .item .img {
  height: 120px;
  width: 120px;
  border-radius: 10px;
}
.topCategories .item span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  font-weight: bold;
  font-size: 22px;
  color: white;
}
</style>