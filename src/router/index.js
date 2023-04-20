/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 11:18:08
 * @LastEditTime : 2023-04-20 14:39:21
 * @Description  : 路由
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '@/components/common/head.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/head',
    component: Head,
  },
]

const router = new VueRouter({
  routes,
})

export default router
