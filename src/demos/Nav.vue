<template>
<xcontent>
  <span slot="title">Nav</span>
    <h1 class="title">Nav</h1>
    <h2 class="subtitle">
      A responsive horizontal <strong>nav bar</strong> that can contain links, tabs, buttons, icons, and a logo
    </h2>

    <hr>

    <div class="content">
      <p>
        The <code>nav</code> container can have <strong>3 parts</strong>:
      </p>
      <ul>
        <li><code>nav-left</code></li>
        <li><code>nav-center</code></li>
        <li><code>nav-right</code></li>
      </ul>
      <p>
        For responsiveness, <strong>2 additional</strong> classes are available:
      </p>
      <ul>
        <li><code>nav-toggle</code> for the hamburger menu on mobile</li>
        <li><code>nav-menu</code> for menu that is collapsable on mobile (you can combine it with <code>nav-right</code>)</li>
      </ul>
    </div>

<div class="example">
<nav class="nav">
  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
    </a>
  </div>

  <div class="nav-center">
    <a class="nav-item" href="#">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item" href="#">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <div class="nav-right nav-menu">
    <a class="nav-item" href="#">
      Home
    </a>
    <a class="nav-item" href="#">
      Documentation
    </a>
    <a class="nav-item" href="#">
      Blog
    </a>

    <span class="nav-item">
      <a class="button">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </a>
      <a class="button is-primary" href="#">
        <span class="icon">
          <i class="fa fa-download"></i>
        </span>
        <span>Download</span>
      </a>
    </span>
  </div>
</nav>
</div>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;nav</span> <span class="na">class=</span><span class="s">"nav"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"nav-left"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"nav-item is-brand"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"http://bulma.io/images/bulma-type.png"</span> <span class="na">alt=</span><span class="s">"Bulma logo"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"nav-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"nav-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-github"</span><span class="nt">&gt;&lt;/i&gt;</span>
      <span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"nav-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
      <span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"nav-toggle"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span&gt;&lt;/span&gt;</span>
    <span class="nt">&lt;span&gt;&lt;/span&gt;</span>
    <span class="nt">&lt;span&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;/span&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"nav-right nav-menu"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"nav-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
      Home
    <span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"nav-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
      Documentation
    <span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"nav-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
      Blog
    <span class="nt">&lt;/a&gt;</span>

    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"nav-item"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span> <span class="nt">&gt;</span>
        <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/span&gt;</span>
        <span class="nt">&lt;span&gt;</span>Tweet<span class="nt">&lt;/span&gt;</span>
      <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-download"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/span&gt;</span>
        <span class="nt">&lt;span&gt;</span>Download<span class="nt">&lt;/span&gt;</span>
      <span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/nav&gt;</span></code></pre><button class="copy">Copy</button><button class="expand">Expand</button></figure>

    <hr>

    <h3 class="title">Modifiers</h3>

    <div class="content">
      <ul>
        <li>the <code>nav</code> container can have a <strong>shadow</strong> by adding the <code>has-shadow</code> modifier</li>
        <li>the <code>nav-item</code> can become <strong>active</strong> by adding the <code>is-active</code> modifier</li>
        <li>the <code>nav-item</code> can become a <strong>tab</strong> by adding the <code>is-tab</code> modifier</li>
      </ul>
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