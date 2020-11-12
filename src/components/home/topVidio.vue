<template>
  <div class="topVidio">
    <h1>Top Video</h1>
    <div class="topItem" v-for="item in hot" :key="item.id"> 
      <svg
        t="1599722026218"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5052"
        width="64"
        height="64"
      >
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 848.8C291 912.8 111.2 733 111.2 512S291 111.2 512 111.2 912.8 291 912.8 512 733 912.8 512 912.8z"
          p-id="5053"
        />
        <path d="M417.7 677.1L700.6 512 417.7 346.9z" p-id="5054" />
      </svg>
      <span style="font-weight:bold;font-size: 20px;  margin-left: 30px; width: 195px;">{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  created(){
      this.Hotget();
  },
  data(){
    return{
        hot:[]
    }
  },
  methods:{
     async Hotget() {
      this.$http
        .get("/hot")
        .then((res) => {
            this.hot=res.data;
            console.log("hot:"+this.hot);
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
.topVidio {
  margin-top: 90px;
 
  margin-left: 50px;
}
.topVidio .topItem {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>