<template>
  <div class="viedoPlay animate__animated animate__zoomIn">
    <div class="viedoBar">
      <h2>{{item.title}}</h2>
      # {{item.category}}
    </div>
    <div class="play">
      <d-player ref="player" :options="options"></d-player>
    </div>
    
    <div class="viedoTitle">
      <span>{{item.description}}</span>
    </div>
    <video-operation></video-operation>
    <div class="videoBox">
      <div class="comment">
        <comment
          @doSend="doSend($event)"
          @doChidSend="doChidSend(arguments)"
          :commentList="commentList"
          :commentNum="commentNum"
          :label="label"
          :avatar="avatar"
          :placeholder="placeholder"
          :minRows="minRows"
          :maxRows="maxRows"
        ></comment>
      </div>
      <div class="videoRecommend">
        <video-recommend></video-recommend>
      </div>
    </div>
  </div>
</template>
<script>
import videoPlay from "../../../components/video1/videoPlay";
import videoOperation from "../../../components/video1/videoOperation";
import comment from "../../../components/comment/Comment";
import videoRecommend from "../../../components/video1/videoRecommend";
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
export default {
  mounted() {
   this.player = this.$refs.player.dp
        window.scrollTo(0,0);
  
  },
  activated(){
      window.scrollTo(0,0);
      console.log("hahhahah ");
  },
  created(){
    
  },
  components: {
    videoPlay,
    videoOperation,
    comment,
    videoRecommend,
    "d-player": VueDPlayer,
  },
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
    formatDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },
    doSend(content) {
      this.commentList.push({
        id: this.commentList.length + 1,
        commentUser: {
          id: this.commentUser,
          nickName: "花非花",
          avatar:
            "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50",
        },
        content: content,
        createDate: this.formatDate(new Date()),
        childrenList: [],
      });
      console.log("初始发送按钮点击事件：" + content);
    },
    doChidSend(args) {
      var children = this.commentList.find(function (obj) {
        return obj.id === args[2];
      });
      children.childrenList.push({
        id: children.childrenList.length + 2,
        commentUser: {
          id: 2,
          nickName: "坏菠萝",
          avatar:
            "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50",
        },
        targetUser: {
          id: args[1],
          nickName: "花非花",
          avatar:
            "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50",
        },
        content: args[0],
        createDate: "2019-9-23 17:45:26",
      });

      console.log("评论区发送按钮点击事件：");
      console.log("content=" + args[0]);
      console.log("targetUserId=" + args[1]);
      console.log("父级评论id=" + args[2]);
    },
  },
  data() {
    return {
      navBarFixed: false,
      label: "SVIP",
      placeholder: "说点什么吧",
      minRows: 4,
      maxRows: 4,

      avatar:
        "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50",
      commentList: [],
      commentNum: 2,
      item: this.$store.state.playing,
      "d-player": VueDPlayer,
        player: null,
      options: {
         autoplay:true,
        video: {
         
          url: this.$store.state.playing.playUrl,
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
.videoBox {
  display: flex;
  flex-direction: row;
  margin-top: 90px;
}
.comment {
  width: 70%;
}
.viedoPlay {
  height: 100%;
  margin-top: 30px;
}
.play {
  padding-left: 20%;
  padding-right: 20%;
}
.viedoBar {
  padding-left: 20%;
  margin-bottom: 50px;
}
.viedoTitle {
  padding-left: 20%;
  width: 40%;
  margin-top: 30px;
}
.navBarWrap {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
</style> 