/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 11:18:08
 * @LastEditTime : 2023-06-03 21:42:03
 * @Description  : 路由
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
import Layout from '@/views/bossViews/home.vue'
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
  // {
  //   path: '/login',
  //   component: () => import('@/components/common/login.vue'),
  // },
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
  // 用户首页
  {
    path: '/index',
    component: () => import('@/views/npcViews/WineFormula/WineIndex.vue'),
  },
  // 管理员页面
  // 登录
  {
    path: '/login',
    component: () => import('@/views/bossViews/login.vue'),
  },
  {
    path: '/boss',
    name: 'home',
    redirect: '/boss/visit',
    component: Layout,
    children: [
      {
        path: 'visit',
        name: '用户访问量页面',
        component: () => import('@/views/bossViews/visit.vue'),
      },
      {
        path: 'area',
        name: '用户地域分布',
        component: () => import('@/views/bossViews/area.vue'),
      },
      {
        path: 'userList',
        name: '用户列表',
        component: () => import('@/views/bossViews/userList.vue'),
      },
      {
        path: 'userOnline',
        name: '在线用户',
        component: () => import('@/views/bossViews/userOnline.vue'),
      },
      {
        path: 'bartender',
        name: '申请调酒师',
        component: () => import('@/views/bossViews/bartender.vue'),
      },
      {
        path: 'systemManagement',
        name: '系统管理',
        component: () => import('@/views/bossViews/systemManagement.vue'),
      },
      {
        path: 'wineType',
        name: '种类管理',
        component: () => import('@/views/bossViews/wineType.vue'),
      },
      {
        path: 'wineInfo',
        name: '酒品信息',
        component: () => import('@/views/bossViews/wineInfo.vue'),
      },
      {
        path: 'wineRecipe',
        name: '酒品配方',
        component: () => import('@/views/bossViews/wineRecipe.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
