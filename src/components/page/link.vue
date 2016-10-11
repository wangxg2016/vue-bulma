<template>
<a :class="classname" @click="run()">
  <slot></slot>
</a>
</template>
<script>
export default {
  props: {
    classname: {
      type: String,
      defalut: ''
    },
    callback: {
      type: Function,
      require: false
    }
  },
  methods: {
    run () {
      this.callback && this.callback()
    }
  }
}
</script>
