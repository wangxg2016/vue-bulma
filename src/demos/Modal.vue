<template>
<xcontent>
  <span slot="title">Modal</span>
  <div class="box no-shadow">
      <p class="title">Modal</p>
      <p class="subtitle">全局Modal与定制Modal</p>
      <p>
        <a class="button is-primary" @click="showAlert()">Show Alert</a>
        <a class="button is-info" @click="showConfirm()">Show Confirm</a>
        <a class="button is-danger" @click="showModal()">Show Custom Modal</a>
        <a class="button is-warning" @click="showPrompt()">Custom Width</a>
      </p>
      <br>
      <br>
      <p class="subtitle">Modal打开后浏览器前进后退试试</p>
      <p>
        <a class="button is-primary" @click="showAlert2">全局alert</a>
        <a class="button is-info" @click="showConfirm2">全局Confirm</a>
      </p>
    </xscroll>

    <transition-group name="fade">
    <modal :key="1" v-show="alert" :title="'Hello'" :content="'Hello there!'" :ok="callback" @closemodal="alert=false"></modal>
    <modal :key="2" v-show="confirm" :mode="'confirm'" :title="'YesOrNo'" :content="'Yes Or No?'" :ok="callback" :cancel="error" @closemodal="confirm=false"></modal>
    <modal :key="3" v-show="prompt" :mode="'alert'" :title="'宽度自定义'" :width="240" :content="'这个Modal 240px宽'" :ok="callback" :cancel="error" @closemodal="prompt=false"></modal>
    <modal :key="4" v-show="modal" :mode="'custom'" :title="'Payment'" :content="'Choose your payment!'" :ok="callback" :cancel="error" @closemodal="modal=false">
      <p class="level-item" slot="buttons">
        <xlink :classname="'button is-primary is-right-10'" :callback="onOk">支付</xlink>
        <xlink :classname="'button is-light'" :callback="onClick">返回</xlink>
      </p>
    </modal>
    </transition-group>
  </div>
  </div>
</xcontent>
</template>

<script>
import { Xcontent, Xlink } from '../components/page'
import { Alert, Confirm, Prompt, Modal } from '../components/modal'
export default {
  components: {
    Xcontent,
    Xlink,
    Alert,
    Confirm,
    Modal,
    Prompt
  },
  data () {
    return {
      alert: false,
      confirm: false,
      modal: false,
      prompt: false,
      input: ''
    }
  },
  methods: {
    error () {
      global.$fn.toast('danger', '回调成功')
    },
    callback () {
      global.$fn.toast('info', '回调成功')
    },
    showAlert2 () {
      this.$parent.showModal('alert', '全局', '全局组件Modal演示Alert', 300, this.callback)
    },
    showConfirm2 () {
      this.$parent.showModal('confirm', '全局', '全局组件Modal演示Confirm？', 300, this.callback, this.error)
    },
    showAlert () {
      this.alert = true
    },
    showConfirm () {
      this.confirm = true
    },
    showPrompt () {
      this.prompt = true
    },
    showModal () {
      this.modal = true
    },
    onOk () {
      this.modal = false
      this.callback()
    },
    onPrompt () {
      console.log('your name:' + this.input)
    },
    onClick (index) {
      this.modal = false
      this.error()
    }
  }
}
</script>
