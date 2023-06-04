/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 11:18:08
 * @LastEditTime : 2023-05-19 16:02:11
 * @Description  :
 *
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import '@/assets/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios' // 引入axios
import '@/assets/index.less'
// 引入echarts
import * as echarts from 'echarts'
import store from './store/index'

Vue.prototype.$axios = axios // 把axios挂载到vue上
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
