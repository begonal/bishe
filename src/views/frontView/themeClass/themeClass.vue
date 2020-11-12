<template>
  <div class="themeClass animate__animated animate__zoomIn">
    <div class="title">
      <h1># {{tag.name}}</h1>
      <h3>{{tag.description}}</h3>
    </div>
    <div class="imgclass">
      <div v-for="i in tag" :key="i.id" class="img-box">
        <h4 style="weight='100px'">{{i.title}}</h4>
        <el-image class="img" :src="i.cover.homepage" placeholder="正在加载" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.onHomeCreate();
  },
  data() {
    return {
      id: 2,
      tag: "",
    };
  },
  methods: {
    async onHomeCreate() {
      this.$http
        .get("/tag", {
          params: {
            tagId: this.id,
          },
        })
        .then((res) => {
          console.log(res);
          this.tag = res.data;
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              showClose: true,
              message: "加载失败",
              type: "error",
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  },
};
</script>
<style scoped>
.themeClass {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.themeClass .img {
  border-radius: 10px 10px 10px 10px;
  height: 150px;
  width: 70%;
  margin: 3%;
}
.themeClass .imgclass {
  width: 97%;
  align-items: center;
  margin-left: 3%;
   
}
.themeClass .imgclass .img-box{
    width:20%;
    float: right;
}
</style>