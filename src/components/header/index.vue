<template>
<section id="nav-section" class="hero is-primary">
  <div class="hero-head">
    <nav class="nav">
      <div class="nav-left">
        <router-link class="nav-item is-brand" to="/">
          <img src="../../assets/headerlogo-white.png">
        </router-link>
      </div>
      <span id="nav-toggle" class="nav-toggle" :class="{'is-active': status}" @click="status = !status">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div id="nav-menu" class="nav-right nav-menu" :class="{'is-active': status}">
        <router-link class="nav-item" to="/"><figure class="image is-24x24 is-right-5"><img class="is-circle" src="../../assets/photo.jpg"></figure><span>James Bond</span></router-link>
        <a class="nav-item" @click="logout()"><span class="icon is-small"><i class="fa fa-power-off"></i></span>注销</a>
      </div>
    </nav>
  </div>
</section>
</template>
<script>
export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    toggle () {
      this.status = !this.status
    },
    logout () {
      // 询问
      // this.$emit('closemodal')
      this.$parent.showModal('logout', '注销', '您确定要注销吗？', 300)
    }
  }
}
</script>

