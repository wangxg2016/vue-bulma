<template>
<nav class="pagination">
  <a :class="{'is-disabled':index===1}" class="button" @click="page(index-1)">上一页</a>
  <a :class="{'is-disabled':index===count}" class="button" @click="page(index+1)">下一页</a>
  <ul>
    <li :key="1" v-show="count>0 && index>1" @click="page(1)">
      <a class="button">1</a>
    </li>
    <li :key="2" v-show="count>3 && index>3">
      <span>...</span>
    </li>
    <li :key="3" v-show="count>0 && index>2" @click="page(index-1)">
      <a class="button" v-text="index-1"></a>
    </li>
    <li :key="4" v-show="count>0" @click="page(index)">
      <a class="button is-primary" :class="{'is-loading': loading}" v-text="index"></a>
    </li>
    <li :key="5" v-show="index<count" @click="page(index+1)">
      <a class="button" v-text="index+1"></a>
    </li>
    <li :key="6" v-show="(index+2)<count">
      <span>...</span>
    </li>
    <li :key="7" v-show="(index+1)<count" @click="page(count)">
      <a class="button" v-text="count"></a>
    </li>
  </ul>
</nav>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      require: true
    },
    count: {
      type: Number,
      require: true
    },
    loading: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    page (index) {
      if ((!this.loading) && (index !== this.index) && (index > 0) && (index <= this.count)) this.$emit('change', index)
    }
  }
}
</script>