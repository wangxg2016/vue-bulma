<template>
<xcontent>
  <span slot="title">Ajax</span>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="(item,index) in items" :key="index">
      <a target="_blank" :href="item.html_url">
      <article class="message" :class="color[item.stargazers_count % 5]">
        <div class="message-header has-text-centered">
          <h1 class="is-3 title has-text-centered" v-text="item.name"></h1>
          <img class="is-circle" :src="item.owner.avatar_url">
        </div>
        <div class="message-body">
          <nav class="level" style="width:100%;">
            <div class="level-item has-text-centered">
              <p class="heading">Star</p>
              <p class="title" v-text="item.stargazers_count"></p>
            </div>
            <div class="level-item has-text-centered">
              <p class="heading">Forks</p>
              <p class="title" v-text="item.forks_count"></p>
            </div>
          </nav>
        </div>
      </article>
      </a>
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
      color: ['is-primary', 'is-info', 'is-success', 'is-warning', 'is-danger'],
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
<style lang="less" scoped>
  article h1{
    margin-top:10px;
    margin-bottom:20px;
    color:#fff;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    text-shadow: 0 1px 1px rgba(0,0,0,.5)
  }
  article img{
    background-color:#fff;
    width:128px;
    height:128px;
    margin-bottom:-74px;
  }
  article .message-body{
    padding-top:74px;
  }
</style>