import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import store from './store'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.use(animated)
Vue.use(VueCookies)
axios.defaults.headers.post["Content-Type"] = "application/json"
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://47.112.244.72/'
Vue.config.productionTip = false

Vue.use(ElementUI);


// 导入全局样式表
import './assets/css/global.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')