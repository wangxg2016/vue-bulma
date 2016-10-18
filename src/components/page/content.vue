<template>
<section class="page-content" :class="classname">
  <div class="page-inner">
    <div class="hero is-primary">
      <div class="inner-header">
        <h1 class="title is-5"><slot name="title"></slot></h1>
      </div>
      <slot name="menu"></slot>
    </div>
    <div class="inner-content">
      <slot></slot>
    </div>
  </div>
</section>
</template>
<script>
export default {
  props: {
    classname: {
      type: String,
      default: ''
    }
  }
}
</script>
