<template>
  <div class="topBar">
    <router-link class="animate__animated animate__rubberBand" to="/home" style="font-weight:bold;font-size: 30px;margin-left: 100px; text-decoration: none">Video.</router-link>
    <span style="font-size: 20px;margin-left: 80px; color: #808A87; margin-top: 5px;">发现</span>
    <span style="font-size: 20px;margin-left: 80px; color: #808A87; margin-top: 5px;">推荐</span>
    <span style="font-size: 20px;margin-left: 80px; color: #808A87; margin-top: 5px;">日报</span>
    <el-input class="searchClass" v-model="state1" placeholder="请输入内容" @focus="selectHandle()">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <show-pop
      :isShowPop="this.isShowPop"
      :optionsList="this.optionsList"
      @itemSelected="selected()"
    ></show-pop>
    <!-- <div
      class="cw-input-select_pop"
      @click="selectHandle()"
      v-if="isShowPop"
      onselectstart="return false"
    >
      <h3>热搜关键词</h3>
      <ul class="cw-input-select_options">
        <li v-for="option in optionsList" :key="option" @click="selected(option)">{{option}}</li>
      </ul>
    </div>-->
    <div class="userInfo-nologin userInfo" v-if="!isLogin">
      <router-link :to="{ path: '/login' }" class="login" style="text-decoration: none;">
        <span style="font-size: 20px;margin-left: 80px; color: #808A87;">登录</span>
      </router-link>
      <router-link :to="{ path: '/register' }" class="login" style="text-decoration: none;">
        <span style="font-size: 20px;margin-left: 80px; color: #808A87;text-decoration: none;">注册</span>
      </router-link>
    </div>
    <div class="userInfo-login userInfo" v-else>
      <img src="../../assets/logo.png" @click="loginOut()" class="topImg" />
      <div v-if="isShowUserPop" class="show-userCenterPop">
        <ul>
          <li   v-for="index in 3" :key="index">
            <router-link
               @click.native="liClick(index)"
              :to="{ path: linkpath[index-1] }"
              class="personalcenter"
              style="text-decoration: none;"
            
            >
              <span style="font-size: 20px; color: #808A87; width: 200px;" >{{optionsList2[index-1]}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <span>帅气的小骏哥</span>
    </div>
  </div>
</template>
<script>
import showPop from "@/components/common/showPop";
export default {
  components: {
    showPop,
  },
  created() {
    if (this.$cookies.isKey("token")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  data() {
    return {
      optionsList: ["选项1", "选项2", "选项3"],
      optionsList2: ["个人中心", "我的投稿", "退出登录"],
      linkpath:['/personalcenter','/contribute','/home'],
      restaurants: [],
      state1: "",
      isShowPop: false,
      selectvalue: "",
      isLogin: false,
      isShowUserPop: false,
    };
  },
  mounted() {
    let that = this;
    document.addEventListener("click", function (e) {
      if (e.target.className != "el-input__inner") {
        that.$nextTick(() => {
          that.isShowPop = false;
        });
      }
      if (e.target.className != "topImg") {
        that.$nextTick(() => {
          that.isShowUserPop = false;
        });
      }
    });
  },
  methods: {
    liClick(option){
        if(option==3){
           this.$message({
                showClose: true,
                message: "退出登录成功",
                type: "success",
              });
          this.isLogin = false;
          this.$cookies.remove("token")
        }
    },
    loginOut() {
      this.isShowUserPop = !this.isShowUserPop;
    },
    selected() {
      this.state1 = this.$store.state.topbar;
    },
    selectHandle() {
      this.isShowPop = !this.isShowPop;
    },
    itemSelected(option) {
      if (option == "个人中心") {
      }
    },
    // hidePop() {
    //   this.isShowPop = false;
    // },
  },
};
</script>

<style >
.show-userCenterPop li {
  height: 40px;
}
.show-userCenterPop {
  position: absolute;
  left: -40px;
  right: 0;
  background: white;
  width: 100px;
  height: 120px;
  text-align: center;
  top: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
}
.topBar .userInfo img {
  width: 50px;
  height: 50px;
}
.topBar .userInfo {
  margin-left: 70%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.searchClass {
  border-radius: 20px;
  background: #f4f4f4;
  margin-left: 30px;
  position: relative;
}
.topBar .el-input-group {
  width: 300px;
}
.searchClass .el-input-group__prepend {
  border: none;
  background-color: transparent;
  padding: 0 10px 0 30px;
}
.searchClass .el-input-group__append {
  border: none;
  background-color: transparent;
}
.searchClass .el-input__inner {
  height: 36px;
  line-height: 36px;
  border: none;
  background-color: transparent;
}
.searchClass .el-icon-search {
  font-size: 16px;
}
.searchClass .centerClass {
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
.searchClass .line {
  width: 1px;
  height: 26px;
  background-color: #ffffff;
  margin-left: 14px;
}
.searchClass:hover {
  border: 1px solid #d5e3e8;
  background: #f4f4f4;
}
.searchClass:hover .line {
  background-color: #ffffff;
}
.searchClass:hover .el-icon-search {
  color: #409eff;
  font-size: 16px;
}
/* 组件整体容器 */
.cw-input-select_wrap {
  position: relative;
  width: 198px;
  height: 28px;
  font-size: 14px;
}

/* 组件内容 */
.cw-input-select {
  width: 198px;
  position: absolute;
}

/* 基本下拉框 */
.cw-input-select_box {
  height: 28px;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  background-color: white;
  position: relative;
  cursor: pointer;
}

/* 基本下拉框里面右边的线体上下箭头（可旋转） */
.cw-arrow {
  content: "";
  display: block;
  position: absolute;
  right: 10px;
  top: 8px;
  border-top: 1px solid #c0c4cc;
  border-right: 1px solid #c0c4cc;
  border-radius: 1px;
  width: 8px;
  height: 8px;
  background: transparent;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transform: rotate(135deg);
  z-index: 10;
}

/* 基本下拉框 文字 */
.cw-input-select_box > span {
  display: inline-block;
  line-height: 28px;
  padding: 0 30px 0 15px;
  font-size: 12px;
  color: #606266;
  /* 文字超出用省略号 */
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
}

/* 选项列表盒子 */
.cw-input-select_pop {
  position: absolute;
  background-color: white;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  max-height: 274px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  padding: 5px;
  box-sizing: border-box;
  z-index: 9;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 90px;
  left: 670px;
}

/* 选项列表内容 */
.cw-input-select_options {
  display: block;
  margin-top: 26px;
  max-height: 234px;
}

/* 选项单元 */
.cw-input-select_options li {
  padding: 8px 15px;
  background-color: white;
  cursor: pointer;
}

/* 选项单元hover */
.cw-input-select_options li:hover {
  background-color: #f5f7fa;
}
.topBar ul {
  margin: 0;
  padding: 0;
}
.topBar ul,
li {
  list-style: none;
}
.topBar {
  background: #ffffff;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: row;
}
</style>