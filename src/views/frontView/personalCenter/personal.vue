<template>
  <div class="personal ">
    <div class="user-center">
      <div class="center-left">
        <div class="head-box">
          <img :src="form.headPortrait" alt class="head-img" />
          <div class="head-info">
            <h3 style=" width: 100%;">{{form.username}}</h3>
            <span style=" margin-top: 10%;">{{form.locationProvince}}|{{form.locationCity}}</span>
            <el-button type="primary" icon="el-icon-edit" style="width: 40%;margin-top: 10%;">签到</el-button>
          </div>
        </div>
        <div class="user-focus">
          <div class="font">
            <span>11</span>
            <span>12</span>
            <span>12</span>
          </div>
          <div class="font" style="font-style: italic;">
            <span>投稿</span>
            <span>粉丝</span>
            <span>关注</span>
          </div>
        </div>
        <div class="navigation">
          <el-col :span="12" style=" width: 101%;">
            <el-menu
              default-active="userinfo"
              class="el-menu-vertical-demo"
              router=""
            >
              <el-menu-item index="userinfo">
                <i class="el-icon-document"></i>
                <span slot="title">个人资料</span>
              </el-menu-item>
              <el-menu-item index="colle">
                <i class="el-icon-document"></i>
                <span slot="title">收藏</span>
              </el-menu-item>
              <el-menu-item index="history">
                <i class="el-icon-document"></i>
                <span slot="title">历史
      
                </span>
              </el-menu-item>
              <el-menu-item index="contribute">
                <i class="el-icon-document"></i>
                <span slot="title">我的投稿</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </div>
      <div class="center-right  ">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
       form:{}   
    }
  },
  watch:{
    '$store.state.userForm'(){
       this.form=this.$store.getters.getUserInfo;
    }
  },
  components: {
    
  },
  created(){
    this.form=this.$store.getters.getUserInfo;
    console.log(this.$store.getters.getUserInfo);
    console.log("11111");
    // this.onHomeCreate();
  },
  methods:{
     async onHomeCreate() {
      this.$http
        .get("/userInfo", {
          headers: {
            Authorization: "Bearer " + this.$cookies.get("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          this.tag = res.data;
          let tag = res.data;
          for (var key in tag) {
            this.form[key] = tag[key];
            console.log(key, tag[key]);
          }
         
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
  }
};
</script>
<style scoped>
.personal {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.user-center {
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  width: 75%;
  height: 100%;
}
.user-center .center-left {
  width: 15%;
  height: 80%;
}
.user-center .center-right {
  width: 100%;
  height: 80%;
}
.user-center .head-box {
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  width: 100%;
  text-align: center;
  position: relative;
  height: 40%;
}
.user-center .head-info {
  margin-top: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.user-center .head-img {
  border-radius: 1000px;
  border: 5px solid rgb(235, 233, 229);
  height: 120px;
  width: 120px;
  top: -4%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.user-center .navigation {
  width: 100%;
  background: #000;
}
.user-center .user-focus {
  width: 100%;
  background: #fafbfd;
  border: 1px solid #e1e1e1;
  border-top: 0px;
  height: 10%;
  text-align: center;
  padding-top: 15%;
  align-items: center;
}
.user-center .user-focus .font {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
}
</style>