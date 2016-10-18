<template>
<xcontent>
  <span slot="title">Notifications</span>

    <h1 class="title">Notifications</h1>
    <h2 class="subtitle">
      Bold <strong>notification</strong> blocks, to alert your users of something
    </h2>

    <hr>

    <div class="columns">
      <div class="column">
        <div class="notification">
          <button class="delete"></button>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="notification is-primary">
          <button class="delete"></button>
          Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="notification is-info">
          <button class="delete"></button>
          Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="notification is-success">
          <button class="delete"></button>
          Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="notification is-warning">
          <button class="delete"></button>
          Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div class="notification is-danger">
          <button class="delete"></button>
          Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"notification"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"notification is-primary"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"notification is-info"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
  Info lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"notification is-success"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
  Success lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"notification is-warning"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
  Warning lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"notification is-danger"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
  Danger lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
<span class="nt">&lt;/div&gt;</span></code></pre><button class="copy">Copy</button><button class="expand">Expand</button></figure>
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