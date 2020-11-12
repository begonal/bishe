<template>
  <div class="home animate__animated animate__rubberBand">
    <div class="topcate">
      <top-categories></top-categories>
    </div>
    <car-ousel></car-ousel>

    <div class="container">
      <div class="left infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <li v-for="(i,index) in onepage" class="list-item" :key="index" style=" margin-top: 30px;">
            <span style="font-weight:bold;font-size: 30px;  margin-left: 90px;">{{i.name}}</span>
            
            <recommend :homepage="i.data"></recommend>
          </li>
          <p
            id="home-loading"
            v-if="loading"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="#"
          ></p>
          <p v-if="noMore" style="text-align: center;font-size:30px">到底了哦~</p>
        </ul>
      </div>
      <div class="right">
        <top-vido></top-vido>
      </div>
    </div>
  </div>
</template>
<script>
import carOusel from "@/components/home/carousel.vue";
import recommend from "@/components/home/recommend.vue";
import topVido from "@/components/home/topVidio.vue";
import topCategories from "@/components/home/topCategories";

export default {
  created() {
    this.onHomeCreate();
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.onHomeCreate();
        this.count += 1;
        this.loading = false;
        console.log(this.count);
      }, 2000);
    },
    async onHomeCreate() {
      this.$http
        .get("/home", {
          params: {
            page: this.count,
          },
        })
        .then((res) => {
          this.$store.state.homePage = res.data;
          for (var i in res.data) {
            this.onepage.push(res.data[i]);
          }
         
          console.log(this.onepage);
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
  data() {
    return {
      navBarFixed: false,
      count: 0,
      loading: false,
      page: 1,
      homePage: [],
      onepage: [],
      hot:'',
    };
  },
  components: {
    carOusel,
    recommend,
    topVido,
    topCategories,
  },
  computed: {
    noMore() {
      return this.count >3;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
};
</script>
<style >
#list {
  overflow-x: hidden;
  overflow-y: hidden;
  /* overflow-x:hidden;
  overflow-y:hidden;
  background-color: rgba(red, green, blue, alpha); */
}
.left {
  height: 1200px;
  overflow: hidden;
  width: 80%;
}
.left::-webkit-scrollbar {
  background-color: transparent;
}
#home-loading {
  height: 50px;
}
.home {
  margin: 0;
  padding: 0;
}
.home .topcate {
  width: 100%;
}
.home .homeCarousel {
  margin: 0;
}
.home .container {
  display: flex;
  flex-direction: row;
}
.navBarWrap {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
</style>