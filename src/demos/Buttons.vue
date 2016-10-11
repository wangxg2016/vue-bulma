<template>
  <xcontent>
    <span slot="title">Buttons</span>

    <div class="block">
      <a class="button">Button</a>
      <a class="button is-primary">Primary</a>
      <a class="button is-info">Info</a>
      <a class="button is-success">Success</a>
      <a class="button is-warning">Warning</a>
      <a class="button is-danger">Danger</a>
      <a class="button is-link">Link</a>
    </div>
    <div class="block">
      <a class="button is-small">Small</a>
      <a class="button">Normal</a>
      <a class="button is-medium">Medium</a>
      <a class="button is-large">Large</a>
    </div>
    <div class="block">
      <a class="button is-outlined">Outlined</a>
      <a class="button is-primary is-outlined">Outlined</a>
      <a class="button is-info is-outlined">Outlined</a>
      <a class="button is-success is-outlined">Outlined</a>
      <a class="button is-danger is-outlined">Outlined</a>
    </div>
    <div class="block">
      <a class="button">
        <span class="icon">
    <i class="fa fa-github"></i>
  </span>
        <span>GitHub</span>
      </a>
      <a class="button is-primary">
        <span class="icon">
    <i class="fa fa-twitter"></i>
  </span>
        <span>Twitter</span>
      </a>
      <a class="button is-success">
        <span class="icon">
    <i class="fa fa-check"></i>
  </span>
        <span>Save</span>
      </a>
      <a class="button is-danger">
        <span>Delete</span>
        <span class="icon">
    <i class="fa fa-times"></i>
  </span>
      </a>
      <a class="button is-danger is-outlined">
        <span class="icon">
    <i class="fa fa-times"></i>
  </span>
        <span>Delete</span>
      </a>
    </div>
    <div class="block">
      <a class="button is-loading">Loading</a>
<a class="button is-primary is-loading">Loading</a>
<a class="button is-info is-loading">Loading</a>
<a class="button is-success is-loading">Loading</a>
<a class="button is-warning is-loading">Loading</a>
<a class="button is-danger is-loading">Loading</a>
    </div>
    <div class="block">
      <a class="button is-disabled">Disabled</a>
<a class="button is-primary is-disabled">Disabled</a>
<a class="button is-info is-disabled">Disabled</a>
<a class="button is-success is-disabled">Disabled</a>
<a class="button is-warning is-disabled">Disabled</a>
<a class="button is-danger is-disabled">Disabled</a>
    </div>
    <div class="block">
      <div class="notification is-primary">
          <a class="button is-primary is-inverted">Inverted</a>
          <a class="button is-info is-inverted">Inverted</a>
          <a class="button is-success is-inverted">Inverted</a>
          <a class="button is-danger is-inverted">Inverted</a>
        </div>
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