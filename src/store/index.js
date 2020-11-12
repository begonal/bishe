import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    topbar: "",
    homePage: [],
    playing: '',
    theme: [{
        "id": 2,
        "name": "创意",
        "actionUrl": "eyepetizer://tag/2/?title=%E5%88%9B%E6%84%8F",
        "description": "技术与审美结合，探索视觉的无限可能",
        "bgPicture": "http://img.kaiyanapp.com/1b457058cf2b317304ff9f70543c040d.png?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/fdefdb34cbe3d2ac9964d306febe9025.jpeg?imageMogr2/quality/100",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 12,
        "name": "剧情",
        "actionUrl": "eyepetizer://tag/12/?title=%E5%89%A7%E6%83%85",
        "description": "用一个好故事，描绘生活的不可思议",
        "bgPicture": "http://img.kaiyanapp.com/945fa937f0955b31224314a4eeef59b8.jpeg?imageMogr2/quality/100",
        "headerImage": "http://img.kaiyanapp.com/945fa937f0955b31224314a4eeef59b8.jpeg?imageMogr2/quality/100",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 24,
        "name": "记录",
        "actionUrl": "eyepetizer://tag/24/?title=%E8%AE%B0%E5%BD%95",
        "description": "告诉他们为什么与众不同",
        "bgPicture": "http://img.kaiyanapp.com/c3984cad49455e01637347e0c8f6a37d.jpeg?imageMogr2/quality/100",
        "headerImage": "http://img.kaiyanapp.com/fd76dab1411e07f0dcf45309720134f9.jpeg?imageMogr2/quality/100",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 26,
        "name": "时尚",
        "actionUrl": "eyepetizer://tag/26/?title=%E6%97%B6%E5%B0%9A",
        "description": "优雅地行走在潮流尖端",
        "bgPicture": "http://img.kaiyanapp.com/34b720d05d98c905432e9906d5b9cdf7.jpeg?imageMogr2/quality/100",
        "headerImage": "http://img.kaiyanapp.com/34b720d05d98c905432e9906d5b9cdf7.jpeg?imageMogr2/quality/100",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 28,
        "name": "综艺",
        "actionUrl": "eyepetizer://tag/28/?title=%E7%BB%BC%E8%89%BA",
        "description": "全球网红在表演什么",
        "bgPicture": "http://img.kaiyanapp.com/d67f739fba330099b515c3b92fccfd91.jpeg?imageMogr2/quality/100",
        "headerImage": "http://img.kaiyanapp.com/d67f739fba330099b515c3b92fccfd91.jpeg?imageMogr2/quality/100",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 30,
        "name": "游戏",
        "actionUrl": "eyepetizer://tag/30/?title=%E6%B8%B8%E6%88%8F",
        "description": "欢迎来到惊险刺激的新世界",
        "bgPicture": "http://img.kaiyanapp.com/5f76097ee5192327b15330618df94ffd.jpeg?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/5f76097ee5192327b15330618df94ffd.jpeg?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 32,
        "name": "萌宠",
        "actionUrl": "eyepetizer://tag/32/?title=%E8%90%8C%E5%AE%A0",
        "description": "来自汪星、喵星、蠢萌星的你",
        "bgPicture": "http://img.kaiyanapp.com/bd689302a738a5d2156243a2b74f15d1.png?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/1ea685a0d2757701741a4a9be0f7e269.jpeg?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 36,
        "name": "集锦",
        "actionUrl": "eyepetizer://tag/36/?title=%E9%9B%86%E9%94%A6",
        "description": "最好的部分 + 有化学反应的混剪",
        "bgPicture": "http://img.kaiyanapp.com/ec07f44858caa7c4d8b309cde5500a84.jpeg?imageMogr2/quality/100",
        "headerImage": "http://img.kaiyanapp.com/ec07f44858caa7c4d8b309cde5500a84.jpeg?imageMogr2/quality/100",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 140,
        "name": "搞笑",
        "actionUrl": "eyepetizer://tag/140/?title=%E6%90%9E%E7%AC%91",
        "description": "哈哈哈哈哈哈哈哈",
        "bgPicture": "http://img.kaiyanapp.com/f787d5053443499e8d787911cd8b3876.jpeg?imageMogr2/quality/100",
        "headerImage": "http://img.kaiyanapp.com/f2b803d3c383bba5a3888b2709160b6e.jpeg?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },


      {
        "id": 1019,
        "name": "旅行",
        "actionUrl": "eyepetizer://tag/1019/?title=%E6%97%85%E8%A1%8C",
        "description": "世界这么大，总有你的目的地",
        "bgPicture": "http://img.kaiyanapp.com/67b5aa7b489b33e7894e04d293e9b01f.jpeg?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/67b5aa7b489b33e7894e04d293e9b01f.jpeg?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 1020,
        "name": "开胃",
        "actionUrl": "eyepetizer://tag/1020/?title=%E5%BC%80%E8%83%83",
        "description": "用美食唤醒你沉睡的味蕾",
        "bgPicture": "http://img.kaiyanapp.com/539f19d05586a9bcf67f255b2e54da2d.jpeg?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/539f19d05586a9bcf67f255b2e54da2d.jpeg?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },

      {
        "id": 1023,
        "name": "动画",
        "actionUrl": "eyepetizer://tag/1023/?title=%E5%8A%A8%E7%94%BB",
        "description": "有趣的人永远不缺童心",
        "bgPicture": "http://img.kaiyanapp.com/349cbd33cdf71fc74d5e9c7a00b444fd.jpeg?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/208aa67386c045497389f015ae28dd29.jpeg?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      },
      {
        "id": 1024,
        "name": "科技",
        "actionUrl": "eyepetizer://tag/1024/?title=%E7%A7%91%E6%8A%80",
        "description": "新知识与一切先进生产力",
        "bgPicture": "http://img.kaiyanapp.com/7e326064edc565ac6355921cfe4b3e46.png?imageMogr2/quality/60/format/jpg",
        "headerImage": "http://img.kaiyanapp.com/810adad06df812462bb0e00501fa679c.png?imageMogr2/quality/60/format/jpg",
        "tagRecType": "NORMAL",
        "type": "CATEGORY",
        "data": []
      }
    ],
    userForm: {}
  },
  mutations: {
    lodaUser(state, form) {
      state.userForm = form;
    },
    add(state) {
      state.count += 1;
    },
    reduce(state) {
      state.count -= 1;
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userForm;
    }
  }
})

