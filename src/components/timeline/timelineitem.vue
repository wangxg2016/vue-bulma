<template>
  <li :class="{'time-label':label}">
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: {
    label: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less">
</style>
