<template>
<xcontent :classname="'bg-light'">
  <span slot="title">Ajax</span>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="(item,index) in items" :key="index">
      <div class="box box-widget widget-user"> <div class="widget-user-header bg-aqua-active text-center"> <h3 class="widget-user-username center-text">FreeCodeCamp</h3> </div> <div class="widget-user-image"> <img class="img-circle" :src="item.owner.avatar_url" alt="FreeCodeCamp Avatar"> </div> <div class="box-footer"> <div class="row"> <div class="col-sm-4 border-right"> <div class="description-block"> <h5 class="description-header">184315</h5> <span class="description-text">Star</span> </div> </div> <div class="col-sm-4 border-right"> <div class="description-block"><a target="_blank" class="button is-primary" :href="item.owner.html_url">Visit</a></div> </div> <div class="col-sm-4"> <div class="description-block"> <h5 class="description-header">7015</h5> <span class="description-text">Forks</span> </div> </div> </div> </div> </div>
    </div>
  </div>
</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent
  },
  data () {
    return {
      items: [],
      url: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars'
    }
  },
  methods: {

  },
  activated () {
    global.$fn.$get(this.url, (data, cache) => {
      this.items = data.items
    })
  }
}
</script>