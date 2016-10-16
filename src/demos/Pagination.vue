<template>
<xcontent>
  <span slot="title">Pagination</span>
  <div class="box no-shadow">
      <p class="title">Pagination</p>
      <p class="subtitle">vue页码组件</p>
      <p>vue典型组件，从这个组件的设计中体现了与jquery的巨大不同，组件中只需要一行代码即可实现比较复杂的页码显示处理，使用了配置设定来代替代码驱动dom，彻底告别了乱糟糟的代码。</p>
      <hr>
      <pagination :index="page" :count="18" :loading="loading" @change="pages(arguments[0])"></pagination>
  </div>
</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
import { Pagination } from '../components/common'
export default {
  components: {
    Xcontent,
    Pagination
  },
  data () {
    return {
      page: 1,
      loading: false
    }
  },
  methods: {
    pages (index) {
      this.page = index
      this.loading = true

      // ajax处理代码
      setTimeout(() => {
        this.loading = false
      }, 300)
    }
  }
}
</script>