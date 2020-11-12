<template>
  <div class="frontiView">
    <el-container  class="frontiView">
      <el-header :class="navBarFixed == false ? 'navBarWrap' :''">
        <top-bar></top-bar>
      </el-header>
      <div  class="main " >
        <router-view class="router"></router-view>
      </div>
    </el-container>
  </div>
</template>
<script>
import topBar from "@/components/common/topBar";
export default {
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
  data() {
    return {
      navBarFixed: false,
    };
  },
  components: {
    topBar,
  },
  
};
</script>
<style >
.frontiView{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  
}
.navBarWrap {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  
}

.frontiView .main 
{
  
    margin-top: 90px;
    padding: 0;
    width: 100vw;
    height:87vh; 
    
  
}
.frontiView .el-header {
    padding: 0;
}
</style>