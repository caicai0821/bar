/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 11:18:08
 * @LastEditTime : 2023-05-26 12:08:36
 * @Description  : 路由
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
// import MyLayout from '@/layout'
Vue.use(VueRouter)

const routes = [
  // 公共组件
  {
    path: '/head',
    component: Head,
  },
  {
    path: '/tail',
    component: Tail,
  },
  {
    path: '/login',
    component: () => import('@/components/common/login.vue'),
  },
  {
    path: '/register',
    component: () => import('@/components/common/register.vue'),
  },
  {
    path: '/btn',
    component: () => import('@/components/common/comment.vue'),
  },
  // 页面路由
  // 普通用户
  // 酒的配方
  {
    path: '/WineIntroduction',
    component: () => import('@/views/npcViews/WineFormula/WineFormula.vue'),
  },
  // 管理员页面
  // 登录
  {
    path: '/boss/Login',
    component: () => import('@/views/bossViews/login.vue'),
  },
  {
    path: '/boss/home',
    name: 'home',
    component: () => import('@/views/bossViews/home.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
