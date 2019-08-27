import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import PostVideo from './views/PostVideo' // 引入组件 两种方式

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/postvideo',
      name: 'postView',
      component: () => import('./views/PostVideo.vue') // 引入组件
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
