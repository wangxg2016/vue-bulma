<template>
  <section id="app-container">
    <xheader v-if="isAuth"></xheader>
    <section class="page" v-if="isAuth">
      <nav-menu></nav-menu>
      <div class="page-container">
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </section>
    <login v-if='!isAuth' class="is-active"></login>
    <toast :toast-array="toastArray"></toast>
    <transition name="fade">
    <modal v-show="isModal" @closemodal="closeModal()" :mode="modalinfo.mode" :title="modalinfo.title"" :content="modalinfo.content" :width="modalinfo.width" :ok="modalinfo.ok"" :cancel="modalinfo.cancel"></modal>
    </transition>
  </div>
</template>
<script>
// vuex全局数据
import store from './store'
import Xheader from './components/header'
import { Toast, Modal } from './components/modal'
import { NavMenu, Login } from './components/page'
export default {
  store: store,
  components: {
    NavMenu,
    Login,
    Modal,
    Toast,
    Xheader
  },
  data () {
    return {
      modalinfo: {
        mode: 'alert',
        title: '',
        content: '',
        callback: null
      }
      // data
    }
  },
  computed: {
    isModal () {
      return this.$store.getters.getModal
    },
    isAuth () {
      return this.$store.getters.getIsAuth
    },
    toastArray () {
      return this.$store.getters.getToast
    },
    preloaderShow () {
      return this.$store.getters.getPreloader
    }
  },
  methods: {
    showModal (mode, title, content, width, ok, cancel) {
      this.$set(this.modalinfo, 'mode', mode)
      this.$set(this.modalinfo, 'title', title)
      this.$set(this.modalinfo, 'content', content)
      this.$set(this.modalinfo, 'width', width)
      this.$set(this.modalinfo, 'ok', ok)
      this.$set(this.modalinfo, 'cancel', cancel)
      store.commit('modal', true)
    },
    closeModal () {
      store.commit('modal', false)
    }
  },
  mounted () {
    let ico = require('./assets/images/vueico.png')
    let icon = require('./assets/images/vuelogo.png')

    document.getElementById('linkIcon').href = ico
    document.getElementById('linkAppIcon').href = icon

    window.applicationCache.addEventListener('updateready', (e) => {
      if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
        console.log('system update')
        window.location.reload()
      }
    }, false)
  }
}
</script>
<style lang="less">
@media screen and (min-width: 769px){
.modal-content, .modal-card {
  margin:inherit;
}
}
.tabs a{
  transition: all 100ms;
}

html, body{
  background-color:#fff;
  font-family: Helvetica Neue,Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  overflow:hidden;
}
#app-container{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  overflow:hidden;  
}
section.page{
  position:absolute;
  top:50px;
  left:0;
  right:0;
  bottom:0;
  overflow:hidden;
  margin:0;
}
section.page-content,.fade{
  opacity: 1;
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-active {
  opacity: 0 !important;
}

.slide{
  transform: translate3d(0,0,0);
  transition: all 400ms;
}
.slide-enter, .slide-leave-active {
  transform: translate3d(-110%,0,0);
}
.transiton-reverse .slide-enter, .transiton-reverse  .slide-leave-active {
  transform: translate3d(110%,0,0);
}
a .icon {
    vertical-align: baseline;
    margin-right:5px;
}
.is-rounded{
  border-radius: 4px;
}
.is-right-5{
  margin-right:5px;
}
.is-right-10{
  margin-right:10px;
}
.is-right-20{
  margin-right:20px;
}
.is-left-10{
  margin-left:10px;
}
.is-bottom-5{
  margin-bottom:5px !important;
}
.is-bottom-10{
  margin-bottom:10px;
}
.is-bottom-20{
  margin-bottom:20px;
}
.is-circle{
  border-radius: 50%;
}
.is-baseline{
  vertical-align: baseline;
}
.is-middle{
  vertical-align: middle;
}
.is-flex{
  display:flex;
}
.no-shadow{
  box-shadow:none;
}
.has-shadow{
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.notification.is-normal {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.7);
}
#nav-section{
    background-color: rgb(0,151,129) !important;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
}
#nav-section .nav{
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
section.page>.columns{
  margin:0;
}
.page-container{
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  overflow:hidden;
  background-color: #fff;
}
.page-content{
  position:absolute;
  left:220px;
  top:0;
  right:0;
  bottom:0;
  overflow:auto;
  transition: all 0.3s;
}
.inner-header, .inner-content{
  padding: 20px;
}


.example:not(:last-child), .structure:not(:last-child) {
    margin-bottom: 20px;
}
.example:not(:first-child), .structure:not(:first-child) {
    margin-top: 30px;
}
.example, .structure {
    border: 1px solid #ffdd57;
    border-top-right-radius: 3px;
    color: rgba(0, 0, 0, 0.7);
    padding: 15px 20px;
    position: relative;
}
.example:before, .structure:before {
    background: #ffdd57;
    border-radius: 3px 3px 0 0;
    bottom: 100%;
    content: "Example";
    display: inline-block;
    font-size: 7px;
    font-weight: bold;
    left: -1px;
    letter-spacing: 1px;
    padding: 3px 5px;
    position: absolute;
    text-transform: uppercase;
    vertical-align: top;
}
.highlight {
    position: relative;
}
.highlight .copy, .highlight .expand {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: white;
    border: solid #dbdbdb;
    border-width: 0 0 1px 1px;
    color: #7a7a7a;
    cursor: pointer;
    outline: none;
    position: absolute;
    right: 0;
    top: 0;
}
.example + .highlight:not(:last-child) {
    margin-bottom: 40px;
}
.example + .highlight {
    border: 1px solid #ffdd57;
    border-radius: 0 0 3px 3px;
    border-top: none;
    margin-top: -20px;
}
.bg-light{
  background-color:#f1f1f1;
}
button.copy{
  display:none;
}
</style>