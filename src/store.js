import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // TODO: 放置初始状态
  isAuth: true, // 是否登录
  authToken: '', // ajax token
  account: {}, // 账户信息
  toastList: [], // 系统提示
  modal: false, // 全局modal
  preloader: false // preloader
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  isAuth (state, status) {
    state.isAuth = status
  },
  authToken (state, token) {
    state.authToken = token
  },
  preloader (state, status) {
    state.preloader = status
  },
  modal (state, status) {
    state.modal = status
  },
  toast (state, json) {
    state.toastList.push(json)
    setTimeout(() => {
      state.toastList.shift()
    }, 2000)
  }
}

const getters = {
  getIsAuth: state => { return state.isAuth },
  getAuthToken: state => { return state.authToken },
  getToast: state => { return state.toastList },
  getModal: state => { return state.modal },
  getPreloader: state => { return state.preloader }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  getters,
  mutations
})
