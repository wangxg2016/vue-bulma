import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Moment from 'moment' // 时间处理插件

// demos
import App from './App'
import Index from './demos/Index'
import Form from './demos/Form'
import About from './demos/About'
import Stars from './demos/Stars'
import Toast from './demos/Toast'
import Modal from './demos/Modal'
import Notfound from './demos/404'

// UI
import Icons from './demos/Icons'
import Buttons from './demos/Buttons'
import Box from './demos/Box'
import Tags from './demos/Tags'
import Tabs from './demos/Tabs'

// vuex store
import store from './store'

Vue.use(Router)
Vue.use(Resource)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

Moment.locale('zh-cn')

// txt转码html
Vue.filter('text2html', function (str) {
  return global.$fn.t2h(str)
})

// 全局闭包，公用函数库，也可以放置到vuex2.0中
global.$fn = {
  // ajax默认api地址,一般为API接口地址
  ajaxhost: '//。。。/api',
  // 获取url中的参数，允许默认值的设定
  getparam (name, defaultValue) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    return (!r) ? ((!defaultValue) ? '' : defaultValue) : unescape(r[2])
  },
  moment: Moment,
  init () {
    // 登录或注销后需要清空cache
    store.commit('isAuth', false)
    store.commit('authToken', '')
  },
  // 随机字符串
  getCode (n) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let res = ''
    for (let i = 0; i < n; i++) {
      res += chars[Math.floor(Math.random() * chars.length)]
    }
    return res
  },
  // text2html
  t2h (str) {
    let converter = document.createElement('DIV')
    converter.innerText = str
    let html = converter.innerHTML
    converter = null
    return html
  },
  // cache 机制
  cache: [],
  // 默认300秒数据缓存时间
  exp: 300,
  getCache (url) {
    let json = this.cache[url]
    return (json && (json.exp >= this.timestamp())) ? json.data : null
  },
  setCache (url, data, exp) {
    // 默认300秒,{data,exp}
    this.cache[url] = {data: data, exp: this.timestamp() + ((!exp) ? this.exp : exp)}
    // console.log(this.cache)
  },
  // get方式 不鉴权，可进行数据缓存
  $get (ajaxurl, callback, _self, exp) {
    // callback _self:this,data,ajax
    let url = this.ajaxhost + ajaxurl
    let data = this.getCache(url)
    if (!data) {
      _self.$http.get(url, {}, {
      }).then((response) => {
        callback(_self, response.data, true)
        if (!(exp && exp < 0)) this.setCache(url, response.data, exp)
        let json = {}
        json.timestamp = this.timestamp()
        json.data = response.data
      }, (response) => {
        this.ajaxerr(response)
      })
    } else {
      callback(_self, data, false)
    }
  },
  // post带鉴权，不使用缓存
  $post (ajaxurl, param, callback, _self, exp) {
    let url = this.ajaxhost + ajaxurl
    _self.$http.post(url, param, {
      headers: {
        // 加入授权验证算法
        'Authorization': 'test'
      }
    }).then(function (response) {
      callback(_self, response.data)
    }, function (response) {
      this.ajaxerr(response)
    })
  },
  // ajax错误处理
  ajaxerr (response) {
    // 此处需配合后端进行自定义的错误设置
    // console.log(response)
    switch (response.status) {
      case 0: // 网络不通
        this.toast('网络暂时未能连通', '', true, 'top')
        break
      case 401: // 未登录
      case 521: // 超时
      case 522: // 错误
        // 退出当前用户帐号,路由到登录页
        this.init()
        router.go('/login?redirect=' + encodeURIComponent(window.location.pathname + window.location.search))
        break
      case 523:
        this.toast('当前时间存在较大偏差')
        break
      case 524:
        this.toast('未找到相关数据')
        break
      default:
        // 其它错误，暂不处理
        break
    }
  },
  toast (mode, title) {
    store.commit('toast', {id: new Date().getTime(), title: (title && title.length) > 0 ? title : '操作完成', mode: mode})
  },
  // 时间戳
  timestamp () {
    return Math.floor(new Date().getTime() / 1000)
  }
}

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/icons',
    component: Icons
  },
  {
    path: '/buttons',
    component: Buttons
  },
  {
    path: '/box',
    component: Box
  },
  {
    path: '/tabs',
    component: Tabs
  },
  {
    path: '/tags',
    component: Tags
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/modal',
    component: Modal
  },
  {
    path: '/stars',
    component: Stars
  },
  {
    path: '/form',
    component: Form
  },
  {
    /*
    meta: {
      auth: true
    },
    */
    path: '/404',
    component: Notfound
  },
  {
    path: '*',
    redirect: '/404'
  }
]
const router = new Router({
  base: '/admin/',
  mode: 'history',
  linkActiveClass: 'is-active', // router-link active样式
  /*
  由于本项目采用内滚动布局，此处代码无效，需要自行hack vue-router获得此能力
  saveScrollPosition: true,
  scrollBehavior (to, from, savedPosition) {
  },
  */
  routes // short for routes: routes
})

router.beforeEach((to, from, next) => {
  if (store.getters.getIsAuth || !to.meta.auth) {
    next()
  } else {
    // 判断是否登录，（可以通过接口，Vuex状态 token）
    // 没有登录走下面逻辑
    global.$fn.init()
    let redirect = encodeURIComponent(to.path)
    next('/login?redirect=' + redirect)
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
