// import 'babel-polyfill'

import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product
  },
  state: {
    message: '初期メッセージ'
  },
  getters: {
    // messageを使用するゲッター
    message(state) { return state.message }
  },
  mutations: {
    // メッセージを変更するミューテーション
    setMessage(state, payload) {
        state.message = payload.message
    }
  },
  actions: { // メッセージの更新処理
    doUpdate({ commit }, message) {
      commit('setMessage', { message })
    }
  }
})
export default store