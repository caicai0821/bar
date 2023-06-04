/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-06-04 20:13:54
 * @LastEditTime : 2023-06-04 20:46:06
 * @Description  :
 *
 */
import { DBUser } from '@/api/db'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据，相当于data
  state: {
    user: DBUser.getCurrUser(),
  },
  getters: {},
  // 里面定义方法，操作state方发
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
      DBUser.login(user)
    },
  },
  // 操作异步操作mutation
  actions: {
    Login({ commit }, user) {
      commit('SET_USER', user)
    },
  },
  modules: {},
})
