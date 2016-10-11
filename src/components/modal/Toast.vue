<template>
  <div>
    <toast-item v-for="(item, index) in toastArray" :key="item.id" :title="item.title" :mode="item.mode"></toast-item>
  </div>
</template>

<script>
import ToastItem from './ToastItem'
export default {
  components: {
    ToastItem
  },
  props: {
    toastArray: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>