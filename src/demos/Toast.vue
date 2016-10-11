<template>
<xcontent>
  <span slot="title">Toast</span>
  <div class="box no-shadow">
    <p class="title">Toast</p>
    <p class="subtitle">全局化组件，需配合vuex</p>
    <div class="block">
      <a class="button" @click="showToast(0)">Normal</a>
      <a class="button is-info" @click="showToast(2)">Info</a>
      <a class="button is-success" @click="showToast(3)">Success</a>
      <a class="button is-warning" @click="showToast(4)">Warning</a>
      <a class="button is-danger" @click="showToast(5)">Danger</a>
    </div>
  </div>
</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent
  },
  methods: {
    showToast (mode) {
      switch (mode) {
        case 0:
          global.$fn.toast('success')
          break
        case 2:
          global.$fn.toast('info', '这是一条info信息')
          break
        case 3:
          global.$fn.toast('success', '这是一条success信息')
          break
        case 4:
          global.$fn.toast('warning', '这是一条warning信息')
          break
        case 5:
          global.$fn.toast('danger', '这是一条danger信息')
          break
        default:
          break
      }
    }
  }
}
</script>
