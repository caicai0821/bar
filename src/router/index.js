/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 11:18:08
 * @LastEditTime : 2023-05-07 19:08:57
 * @Description  : 路由
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
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
]

const router = new VueRouter({
  routes,
})

export default router
