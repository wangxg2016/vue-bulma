<template>
<div class="columns is-multiline is-gapless is-mobile">
  <div v-if="title.length>0" class="column is-6 is-bottom-5" v-text="title"></div>
  <div v-if="title.length>0" class="column is-6 is-bottom-5 has-text-right"><span><strong v-text="value"></strong></span>/<span v-text="max"></span></div>
  <div class="column is-12">
  <progress v-if="readonly" class="progress" :class="classname" :value="value" :max="max"></progress>
  <input v-if="!readonly" type="range" v-model="val" :min="0" :max="max" :step="step" number="" class="slider is-fullwidth" :class="classname" :style="'--low:0%;--high:'+high+'%;'">
  </div>
</div>
</template>
<script>
export default {
  props: {
    classname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      val: this.value,
      high: this.value / this.max * 100
    }
  },
  watch: {
    val (n, o) {
      this.$emit('change', Number(n))
    },
    value (n, o) {
      this.high = this.val / this.max * 100
      this.val = n
    }
  }
}
</script>
<style>
.cursor{
  position: absolute;
  top:0;
  line-height:20px;
  font-size:20px;
}

input[type=range].slider{--height:12px;border:none;border-radius:290486px;display:block;height:var(--height);padding:0;margin:0;cursor:pointer;outline:none;background:#dbdbdb;-webkit-tap-highlight-color:transparent
}
input[type=range].slider.is-small{--height:8px
}
input[type=range].slider.is-medium{--height:16px
}
input[type=range].slider.is-large{--height:20px
}
input[type=range].slider.is-fullwidth{width:100%
}
input[type=range].slider:focus{outline:none
}
input[type=range].slider::-moz-focus-outer{border:none
}
input[type=range].slider::-webkit-slider-runnable-track,input[type=range].slider::-webkit-slider-thumb,input[type=range].slider{-webkit-appearance:none;appearance:none
}
input[type=range].slider::-webkit-slider-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box
}
input[type=range].slider::-webkit-slider-thumb:hover{transform:scale(1.25)
}
input[type=range].slider::-webkit-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing
}
input[type=range].slider::-webkit-slider-runnable-track{display:flex;align-items:center;height:var(--height);border-radius:290486px;--track-background:linear-gradient(to right, transparent var(--low), #4a4a4a calc(0%), #4a4a4a var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background);transform:translateZ(0);transition:0.1165s
}
input[type=range].slider::-moz-range-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box
}
input[type=range].slider::-moz-range-thumb:hover{transform:scale(1.25)
}
input[type=range].slider::-moz-range-thumb:active{cursor:grabbing
}
input[type=range].slider::-moz-range-progress:focus{outline:0;border:0
}
input[type=range].slider::-moz-range-track{background:transparent
}
input[type=range].slider::-moz-range-progress{display:flex;align-items:center;width:100%;height:var(--height);border-radius:290486px;background-color:#4a4a4a
}
input[type=range].slider::-ms-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box
}
input[type=range].slider::-ms-thumb:hover{-ms-transform:scale(1.25);transform:scale(1.25)
}
input[type=range].slider::-ms-thumb:active{cursor:grabbing
}
input[type=range].slider::-ms-tooltip{display:none
}
input[type=range].slider.is-white::-webkit-slider-thumb{border-color:#fff
}
input[type=range].slider.is-white::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #fff calc(0%), #fff var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-white::-moz-range-thumb{border-color:#fff
}
input[type=range].slider.is-white::-moz-range-progress{background-color:#fff
}
input[type=range].slider.is-white::-ms-thumb{border-color:#fff
}
input[type=range].slider.is-white::-ms-fill-lower{background-color:#fff
}
input[type=range].slider.is-black::-webkit-slider-thumb{border-color:#0a0a0a
}
input[type=range].slider.is-black::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #0a0a0a calc(0%), #0a0a0a var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-black::-moz-range-thumb{border-color:#0a0a0a
}
input[type=range].slider.is-black::-moz-range-progress{background-color:#0a0a0a
}
input[type=range].slider.is-black::-ms-thumb{border-color:#0a0a0a
}
input[type=range].slider.is-black::-ms-fill-lower{background-color:#0a0a0a
}
input[type=range].slider.is-light::-webkit-slider-thumb{border-color:#f5f5f5
}
input[type=range].slider.is-light::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #f5f5f5 calc(0%), #f5f5f5 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-light::-moz-range-thumb{border-color:#f5f5f5
}
input[type=range].slider.is-light::-moz-range-progress{background-color:#f5f5f5
}
input[type=range].slider.is-light::-ms-thumb{border-color:#f5f5f5
}
input[type=range].slider.is-light::-ms-fill-lower{background-color:#f5f5f5
}
input[type=range].slider.is-dark::-webkit-slider-thumb{border-color:#363636
}
input[type=range].slider.is-dark::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #363636 calc(0%), #363636 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-dark::-moz-range-thumb{border-color:#363636
}
input[type=range].slider.is-dark::-moz-range-progress{background-color:#363636
}
input[type=range].slider.is-dark::-ms-thumb{border-color:#363636
}
input[type=range].slider.is-dark::-ms-fill-lower{background-color:#363636
}
input[type=range].slider.is-primary::-webkit-slider-thumb{border-color:#00d1b2
}
input[type=range].slider.is-primary::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #00d1b2 calc(0%), #00d1b2 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-primary::-moz-range-thumb{border-color:#00d1b2
}
input[type=range].slider.is-primary::-moz-range-progress{background-color:#00d1b2
}
input[type=range].slider.is-primary::-ms-thumb{border-color:#00d1b2
}
input[type=range].slider.is-primary::-ms-fill-lower{background-color:#00d1b2
}
input[type=range].slider.is-info::-webkit-slider-thumb{border-color:#3273dc
}
input[type=range].slider.is-info::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #3273dc calc(0%), #3273dc var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-info::-moz-range-thumb{border-color:#3273dc
}
input[type=range].slider.is-info::-moz-range-progress{background-color:#3273dc
}
input[type=range].slider.is-info::-ms-thumb{border-color:#3273dc
}
input[type=range].slider.is-info::-ms-fill-lower{background-color:#3273dc
}
input[type=range].slider.is-success::-webkit-slider-thumb{border-color:#23d160
}
input[type=range].slider.is-success::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #23d160 calc(0%), #23d160 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-success::-moz-range-thumb{border-color:#23d160
}
input[type=range].slider.is-success::-moz-range-progress{background-color:#23d160
}
input[type=range].slider.is-success::-ms-thumb{border-color:#23d160
}
input[type=range].slider.is-success::-ms-fill-lower{background-color:#23d160
}
input[type=range].slider.is-warning::-webkit-slider-thumb{border-color:#ffdd57
}
input[type=range].slider.is-warning::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #ffdd57 calc(0%), #ffdd57 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-warning::-moz-range-thumb{border-color:#ffdd57
}
input[type=range].slider.is-warning::-moz-range-progress{background-color:#ffdd57
}
input[type=range].slider.is-warning::-ms-thumb{border-color:#ffdd57
}
input[type=range].slider.is-warning::-ms-fill-lower{background-color:#ffdd57
}
input[type=range].slider.is-danger::-webkit-slider-thumb{border-color:#ff3860
}
input[type=range].slider.is-danger::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #ff3860 calc(0%), #ff3860 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider.is-danger::-moz-range-thumb{border-color:#ff3860
}
input[type=range].slider.is-danger::-moz-range-progress{background-color:#ff3860
}
input[type=range].slider.is-danger::-ms-thumb{border-color:#ff3860
}
input[type=range].slider.is-danger::-ms-fill-lower{background-color:#ff3860
}
input[type=range].slider[orient=vertical]{-webkit-writing-mode:bt-lr;-ms-writing-mode:bt-lr;writing-mode:bt-lr;-webkit-appearance:slider-vertical;height:200px;width:var(--height);-webkit-transform-origin:0 0;position:relative;top:0;left:0
}
input[type=range].slider[orient=vertical].is-white::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #fff;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-white::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #fff 0, #fff var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-black::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #0a0a0a;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-black::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #0a0a0a 0, #0a0a0a var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-light::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #f5f5f5;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-light::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #f5f5f5 0, #f5f5f5 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-dark::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #363636;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-dark::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #363636 0, #363636 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-primary::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #00d1b2;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-primary::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #00d1b2 0, #00d1b2 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-info::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-info::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #3273dc 0, #3273dc var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-success::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #23d160;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-success::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #23d160 0, #23d160 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-warning::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ffdd57;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-warning::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #ffdd57 0, #ffdd57 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}
input[type=range].slider[orient=vertical].is-danger::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ff3860;content:'';position:absolute;z-index:233
}
input[type=range].slider[orient=vertical].is-danger::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #ff3860 0, #ff3860 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)
}

</style>