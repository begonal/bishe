<template>
  <div class="play">
    <d-player :options="options"></d-player>
  </div>
</template>
<script>
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";

export default {
  components: {
    "d-player": VueDPlayer,
  },
  data() {
    return {
      options: {
        video: {
          url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
          pic:
            "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
          thumbnails:
            "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
        },
      },
    };
  },
};
</script>
<style scoped>
.play {
  padding-left: 20%;
  padding-right: 20%;
}
</style>