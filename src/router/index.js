import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/login&register/Register.vue'
import Login from '../views/login&register/Login.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/back',
    component: () => import("../views/backView/index.vue"),
    children: [{
      path: '/backhome',
      component: () => import("../views/backView/backhome/backhome.vue")
    }]
  },
  {
    path: '/front',
    component: () => import("../views/frontView/idnex.vue"),
    children: [{
        path: '/home',
        component: () => import("@/views/frontView/home/home.vue")
      },
      {
        path: '/video',
        component: () => import("../views/frontView/viedoPlay/video.vue")
      },
      {
        path: '/theme',
        component: () => import("../views/frontView/themeClass/themeClass.vue")
      },
      {
        path: '/personalcenter',
        component: () => import("../views/frontView/personalCenter/personal.vue"),
        children: [{
            path: '/',
            redirect: '/userinfo'
          },
          {
            path: '/userinfo',
            name: 'userinfo',
            component: () => import("../views/frontView/personalCenter/userInfo/userInfo.vue"),
          },
          {
            path: '/colle',
            name: 'collection',
            component: () => import("../views/frontView/personalCenter/collection/collection.vue"),
          },
          {
            path: '/history',
            name: 'history',
            component: () => import("../views/frontView/personalCenter/history/history.vue"),
          },
          {
            path: '/contribute',
            name: 'contribute',
            component: () => import("../views/frontView/personalCenter/contribute/contribute.vue"),
          },
        ]


      },


    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router