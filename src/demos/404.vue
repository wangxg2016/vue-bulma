<template>
<xcontent>
  <span slot="title">404 Not Found</span>
  <div class="has-text-centered">
  </div>
  <section class="hero is-large" style="background-color: transparent;">
  <div class="hero-body">
    <div class="container">
      <p class="has-text-centered">
      <span class="iconwrap"><span class="long-shadow"></span><span class="svg-icon flat-shadow" id="shadow-rocket"><span class="svg-icon flat-shadow" id="shadow-rocket"><svg class="flat_icon" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100"><path class="circle" d="M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z"></path><g class="icon"><path class="engine" d="M32.515,51.63l16.327,16.328l-3.571,5.612L26.902,55.2L32.515,51.63z"></path><path class="base" d="M26.902,46.083l1.021-1.021c0,0,7.669-1.483,14.828-8.643c14.165-14.164,30.583-9.217,30.583-9.217s4.946,16.421-9.216,30.583c-7.159,7.158-8.643,14.829-8.643,14.829l-1.021,1.021L26.902,46.083z"></path><path class="window" d="M62.619,39.311c2.817,2.818,2.817,7.387,0,10.205c-2.817,2.82-7.388,2.82-10.204,0c-2.817-2.817-2.817-7.386,0-10.205C55.233,36.493,59.802,36.493,62.619,39.311z"></path><path class="glass" d="M61.09,40.841c1.972,1.974,1.972,5.172,0,7.144c-1.974,1.972-5.171,1.972-7.143,0c-1.973-1.973-1.973-5.171,0-7.144C55.919,38.87,59.116,38.87,61.09,40.841z"></path><path class="flame" d="M33.326,66.073c1.69,1.692,1.747,4.377,0.126,5.999c-1.859,1.858-6.759,1.656-7.269,1.146c-0.511-0.511-0.713-5.41,1.146-7.27C28.949,64.327,31.635,64.384,33.326,66.073z"></path></g></svg></span></span></span>
      </p>
      <p class="has-text-centered">页面君去火星了！</p>
    </div>
  </div>
</section>
</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent
  }
}
</script>
<style lang="less" scoped>
#shadow-rocket .circle { fill: #4BAE97 }
#shadow-rocket .engine { fill: #7D7D7D }
#shadow-rocket .base { fill: #B0CED8 }
#shadow-rocket .window { fill: #8BABB6 }
#shadow-rocket .glass { fill: #FFFFFF }
#shadow-rocket .flame { fill: #FF5400 }
</style>