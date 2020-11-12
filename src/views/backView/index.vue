<template>
  <div class="back">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <span class="font">后台管理系统</span>
        </div></el-col
      >
      <el-col :span="6"></el-col>
      <el-col :span="2"><el-button>退出</el-button></el-col>
    </el-row>
    <el-container>
      <el-aside width="15%" height="100%">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
        
          active-text-color="#ffd04b"
        >
         <el-menu-item index="1" route="./backhome.vue">
            <i class="el-icon-menu"></i>
            <span slot="title">导航1</span>
          </el-menu-item>
          <el-menu-item index="backhome">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style>
.back {
  height: 100vh;
  width: 100vw;
}
.back .font {
  font-size: 40px;
  color: rgb(255, 255, 255);
}
.back .row-bg {
  background-color: #242730;
  color: rgb(255, 255, 255);
  height: 10%;
  display: flex;
  align-items: center;
}
 .el-aside{
    background-color: #545C64;
    height: 843px;
}
</style>