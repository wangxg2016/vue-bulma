<template>
<xcontent>
  <span slot="title">Tags</span>
  <div class="box no-shadow">
      <p class="title">Tags</p>
<p>
  <span class="tag">Tag label</span>
  <span class="tag is-dark">Dark</span>
<span class="tag is-primary">Primary</span>
<span class="tag is-info">Info</span>
<span class="tag is-success">Success</span>
<span class="tag is-warning">Warning</span>
<span class="tag is-danger">Danger</span>
<span class="tag is-dark is-small">Small</span>
<span class="tag is-primary is-medium">Medium</span>
<span class="tag is-info is-large">Large</span>
<span class="tag is-info is-small">
  Foo
  <button class="delete is-small"></button>
</span>
<span class="tag is-success">
  Bar
  <button class="delete is-small"></button>
</span>
<span class="tag is-warning is-medium">
  Hello
  <button class="delete is-small"></button>
</span>
<span class="tag is-danger is-large">
  World
  <button class="delete"></button>
</span>
</p>
  </div>
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