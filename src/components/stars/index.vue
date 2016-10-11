<template>
  <div class="stars">
    <div class="star" v-for="n in size" @click="click(n+1,$event)" @mouseover="loc=n+1" @mouseleave="loc=0"><span :style="{color: (n<amounted || (n<loc && !readonly) )?color:'#bbb'}"><i class="fa" :class="showicon"></i><i class="fa icon-copy" :class="[showicon,effectmode]" v-if="effect && inited && ((n+1)===amounted)"></i></span></div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'star'
    },
    mode: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#f5bd23'
    },
    size: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    init: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loc: 0,
      inited: this.init,
      amounted: this.amount,
      showicon: 'fa-' + this.icon,
      effect: (this.mode.length > 0),
      effectmode: 'effect-' + this.mode
    }
  },
  methods: {
    click (i, e) {
      if (!this.readonly && this.amounted !== i) {
        this.inited = true
        this.amounted = i
        if (this.effect) {
          let el = e.currentTarget
          setTimeout(() => {
            let item = el.getElementsByClassName('icon-copy')
            if (item.length > 0) item[0].style.display = 'none'
          }, 1100)
        }
      }
    }
  }
}
</script>

<style lang="less">
@import './stars.less';
</style>