<template>
<xcontent>
  <span slot="title">Panel</span>
    <h1 class="title">Panel</h1>
    <h2 class="subtitle">A composable <strong>panel</strong>, for compact controls</h2>

    <hr>

    <div class="columns">
      <div class="column is-4">
        <nav class="panel">
          <p class="panel-heading">
            Repositories
          </p>
          <p class="panel-tabs">
            <a class="is-active" href="#">All</a>
            <a href="#">Public</a>
            <a href="#">Private</a>
            <a href="#">Sources</a>
            <a href="#">Forks</a>
          </p>
          <a class="panel-block is-active" href="#"><span class="panel-icon"><i class="fa fa-book"></i></span>bulma-website</a>
          <a class="panel-block" href="#"><span class="panel-icon"><i class="fa fa-book"></i></span>bulma</a>
          <a class="panel-block" href="#"><span class="panel-icon"><i class="fa fa-book"></i></span>marksheet</a>
          <a class="panel-block" href="#"><span class="panel-icon"><i class="fa fa-code-fork"></i></span>daniellowtw/infBoard</a>
          <a class="panel-block" href="#"><span class="panel-icon"><i class="fa fa-book"></i></span>jgthms.github.io</a>
          <a class="panel-block" href="#"><span class="panel-icon"><i class="fa fa-code-fork"></i></span>mojs</a>
          <a class="panel-block" href="#"><span class="panel-icon"><i class="fa fa-book"></i></span>grumpy-cat</a>
          <label class="panel-block">
            <input type="checkbox">
            Remember me
          </label>
          <div class="panel-block">
            <button class="button is-primary is-outlined is-fullwidth">
              Reset all filters
            </button>
          </div>
        </nav>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;nav</span> <span class="na">class=</span><span class="s">"panel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"panel-heading"</span><span class="nt">&gt;</span>
    Repositories
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"panel-tabs"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"is-active"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>All<span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Public<span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Private<span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Sources<span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Forks<span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block is-active"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-book"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    bulma-website
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-book"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    bulma
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-book"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    marksheet
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-code-fork"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    daniellowtw/infBoard
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-book"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    jgthms.github.io
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-code-fork"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    mojs
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"panel-block"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"panel-icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-book"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    grumpy-cat
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"panel-block"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span><span class="nt">&gt;</span>
    Remember me
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"panel-block"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary is-outlined is-fullwidth"</span><span class="nt">&gt;</span>
      Reset all filters
    <span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/nav&gt;</span></code></pre><button class="copy">Copy</button><button class="expand">Expand</button></figure>
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