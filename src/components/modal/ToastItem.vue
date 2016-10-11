<template>
<transition name="toast">
  <div class="toast" :key="id">
    <span :class="'tag is-' + mode"><i :class="icon"></i></span>
    <div class="toast-title"><p v-text="title"></p></div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true
    },
    title: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      icons: {'success': 'check', 'info': 'info', 'warning': 'warning', 'danger': 'close'}
    }
  },
  computed: {
    icon () {
      return 'fa fa-' + this.icons[this.mode]
    }
  }
}
</script>
<style lang="less">
.toast{
  box-shadow1: 0 0 5px rgba(0,0,0,.3);
  min-width: 240px;
  padding: 10px 12px;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  background-color: #f1f1f1;
  transition: all .3s;
  opacity:1;
  overflow: hidden;
  z-index: 1050;
}
.toast .tag{
  position:absolute;
  left:0;
  top:0;
  width:40px;
  height:40px;
  border-radius:0;
  z-index:10;
}
.toast-title{
  margin-left:38px;
}
.toast.toast-enter{
    opacity:0;
    transform: translate3d(-50%, -50px, 0);
}

.toast.toast-leave-active {
    opacity:0;
    transform: translate3d(-50%, -50px, 0);
}

</style>