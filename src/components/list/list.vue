<template>
  <div class="list-block">
    <div class="list-title" v-if="title.length>0" v-text="title"></div>
    <ul>
      <slot></slot>
    </ul>
    <div class="list-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    empty (t) {
      if (!t) return true
      return !t.trim()
    }
  }
}
</script>