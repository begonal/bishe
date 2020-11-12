<template>
  <div class="recommed">
    <div v-if="homedate"></div>
    <div class="box">
      <div class="item" v-for="item in homepage " :key="item.id" @click="playmovie(item)">
        <el-popover
          placement="right"
          width="200"
          trigger="hover"
          :show="lodaurl(item)"
          content
          style="padding:0；height:120;background-color: black;"
        >
          <video :src="item.playUrl" ref="video" muted  autoplay width="200" height="120"></video>

          <el-button
            slot="reference"
            class="img"
            :style="{backgroundImage: 'url(' + item.cover.feed + ')', backgroundSize:'100% 100%'}"
          ></el-button>
        </el-popover>
        <!-- <div>
          <el-image class="img" :src="item.author.cover" placeholder="正在加载" />
        </div>-->
        <div class="text">
          <span style="width: 100%;height:50px ;">{{item.title}}</span>
          <span># {{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
export default {
  // watch: {
  //   homepage: function (homepage) {
  //     console.log("homepage:", homepage);

  //     this.homedate = homepage;
  //   },
  // },
  props: {
    homepage: {
      type: Array,
    },
  },
  mounted() {},
  created() {},
  components: {
    "d-player": VueDPlayer,
  },
  data() {
    return {
      homedate: [],
      "d-player": VueDPlayer,
      player: "",
      options: {
        autoplay: false,
        video: {
          url: "",
        },
      },
    };
  },
  methods: {
    playmovie(item) {
      this.$store.state.playing = item;
      this.$router.push("/video");
    },
    lodaurl(item) {
      $("#video").trigger("play");
    },
  },
};
</script>
<style >
video::-webkit-media-controls {
  display: none !important;
}
.recommed {
  margin-left: 5%;
}
.recommed .box {
  display: flex;
  flex-direction: row;
}
.recommed .item {
  padding: 20px;
  width: 25%;
}
.recommed .item .img {
  border-radius: 10px 10px 10px 10px;
  height: 150px;
  width: 100%;
}
.recommed .text {
  display: flex;
  flex-direction: column;
}
.el-popover {
  padding: 0;
}
</style>