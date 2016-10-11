<template>
<div class="modal is-active">
  <div class="modal-background" @click="close()"></div>
  <button class="modal-close" @click="close()"></button>
  <div class="modal-content" :style="w">
    <div class="box">
      <p v-if="title.length>0" class="title is-5" v-text="title"></p>
      <p v-if="content.length>0" class="is-bottom-20" v-text="content"></p>
      <hr class="modal-hr">
      <nav class="level">
        <div class="level-left"></div>
        <div class="level-right is-mobile">
        <p class="level-item" v-if="mode!=='custom'">
          <a v-if="mode!=='logout'" class="button is-primary" :class="{'is-right-10':mode!=='alert'}" @click="onOK()"><span class="icon is-small"><i class="fa fa-check"></i></span>确定</a>
          <a v-if="mode==='logout'" class="button is-primary is-right-10" @click="logout()"><span class="icon is-small"><i class="fa fa-power-off"></i></span>注销</a>
          <a v-if="mode!=='alert'" class="button is-light" @click="onCancel()"><span class="icon is-small"><i class="fa fa-close"></i></span>取消</a>
        </p>
        <slot v-if="mode==='custom'" name="buttons"></slot>
        </div>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'alert'
    },
    width: {
      type: Number,
      default: null
    },
    ok: {
      type: Function,
      require: false
    },
    cancel: {
      type: Function,
      require: false
    }
  },
  methods: {
    onOK () {
      this.close()
      this.ok && this.ok()
    },
    onCancel () {
      this.close()
      this.cancel && this.cancel()
    },
    logout () {
      global.$fn.init()
      this.$emit('closemodal')
    },
    close () {
      this.$emit('closemodal')
    }
  },
  computed: {
    w () {
      return (this.width === null) ? '' : 'width:' + this.width + 'px;'
    }
  }
}
</script>

<style lang="less">
.modal {
  opacity: 1;
  transition: opacity 300ms;
}
.modal .modal-background{
  background-color: rgba(0,0,0,0.7)
}
.modal .box{
  padding:15px;
}
.modal-hr{
  margin:15px -15px;
}
.modal a .icon {
    margin-left:0 !important;
    margin-right:5px !important;
}
</style>
