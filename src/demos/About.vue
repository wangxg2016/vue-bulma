<template>
<xcontent :classname="'bg-light'">
  <span slot="title">关于...</span>
  <div class="box no-shadow">
      <p class="title">Vue-Bulma</p>
      <p class="subtitle">轻量级高性能MVVM Admin UI框架</p>
      <p><span class="icon"><i class="fa fa-github"></i></span><a src="https://github.com/wangxg2016/vue-bulma">https://github.com/wangxg2016/vue-bulma</a></p>
  </div>
</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent
  }
}
</script>