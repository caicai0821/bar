/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 11:18:08
 * @LastEditTime : 2023-04-19 16:40:34
 * @Description  :
 *
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios' // 引入axios
import '@/assets/index.less'

Vue.prototype.$axios = axios // 把axios挂载到vue上

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
