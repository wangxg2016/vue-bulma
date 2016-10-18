<template>
  <xcontent>
    <span slot="title">Buttons</span>

    <h1 class="title">Buttons</h1>
    <h2 class="subtitle">
      The classic <strong>button</strong>, in different colors, sizes, and states
    </h2>

    <hr>

    <div class="columns">
      <div class="column">
        <div class="block">
          <a class="button">Button</a>
          <a class="button is-white">White</a>
          <a class="button is-light">Light</a>
          <a class="button is-dark">Dark</a>
          <a class="button is-black">Black</a>
          <a class="button is-link">Link</a>
        </div>
        <div class="block">
          <a class="button is-primary">Primary</a>
          <a class="button is-info">Info</a>
          <a class="button is-success">Success</a>
          <a class="button is-warning">Warning</a>
          <a class="button is-danger">Danger</a>
        </div>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info"</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success"</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-warning"</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger"</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-link"</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">Sizes</h3>

    <div class="columns">
      <div class="column">
        <a class="button is-small">Small</a>
        <a class="button">Normal</a>
        <a class="button is-medium">Medium</a>
        <a class="button is-large">Large</a>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-small"</span><span class="nt">&gt;</span>Small<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>Normal<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-medium"</span><span class="nt">&gt;</span>Medium<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-large"</span><span class="nt">&gt;</span>Large<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">Styles</h3>
    <h4 class="subtitle">Outlined</h4>

    <div class="columns">
      <div class="column">
        <a class="button is-outlined">Outlined</a>
        <a class="button is-primary is-outlined">Outlined</a>
        <a class="button is-info is-outlined">Outlined</a>
        <a class="button is-success is-outlined">Outlined</a>
        <a class="button is-danger is-outlined">Outlined</a>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-outlined"</span><span class="nt">&gt;</span>Outlined<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-outlined"</span><span class="nt">&gt;</span>Outlined<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info is-outlined"</span><span class="nt">&gt;</span>Outlined<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success is-outlined"</span><span class="nt">&gt;</span>Outlined<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger is-outlined"</span><span class="nt">&gt;</span>Outlined<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <h4 class="subtitle">Inverted (the text color becomes the background color, and vice-versa)</h4>

    <div class="columns">
      <div class="column">
        <div class="notification is-primary">
          <a class="button is-primary is-inverted">Inverted</a>
          <a class="button is-info is-inverted">Inverted</a>
          <a class="button is-success is-inverted">Inverted</a>
          <a class="button is-danger is-inverted">Inverted</a>
        </div>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-inverted"</span><span class="nt">&gt;</span>Inverted<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info is-inverted"</span><span class="nt">&gt;</span>Inverted<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success is-inverted"</span><span class="nt">&gt;</span>Inverted<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger is-inverted"</span><span class="nt">&gt;</span>Inverted<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">States</h3>
    <h4 class="subtitle">Loading</h4>

    <div class="columns">
      <div class="column">
        <a class="button is-loading">Loading</a>
        <a class="button is-primary is-loading">Loading</a>
        <a class="button is-info is-loading">Loading</a>
        <a class="button is-success is-loading">Loading</a>
        <a class="button is-warning is-loading">Loading</a>
        <a class="button is-danger is-loading">Loading</a>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-loading"</span><span class="nt">&gt;</span>Loading<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-loading"</span><span class="nt">&gt;</span>Loading<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info is-loading"</span><span class="nt">&gt;</span>Loading<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success is-loading"</span><span class="nt">&gt;</span>Loading<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-warning is-loading"</span><span class="nt">&gt;</span>Loading<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger is-loading"</span><span class="nt">&gt;</span>Loading<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <h4 class="subtitle">Active</h4>

    <div class="columns">
      <div class="column">
        <a class="button is-active">Active</a>
        <a class="button is-primary is-active">Active</a>
        <a class="button is-info is-active">Active</a>
        <a class="button is-success is-active">Active</a>
        <a class="button is-warning is-active">Active</a>
        <a class="button is-danger is-active">Active</a>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-active"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-active"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info is-active"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success is-active"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-warning is-active"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger is-active"</span><span class="nt">&gt;</span>Active<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <h4 class="subtitle">Disabled</h4>

    <div class="columns">
      <div class="column">
        <a class="button is-disabled">Disabled</a>
        <a class="button is-primary is-disabled">Disabled</a>
        <a class="button is-info is-disabled">Disabled</a>
        <a class="button is-success is-disabled">Disabled</a>
        <a class="button is-warning is-disabled">Disabled</a>
        <a class="button is-danger is-disabled">Disabled</a>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-disabled"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-disabled"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info is-disabled"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success is-disabled"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-warning is-disabled"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger is-disabled"</span><span class="nt">&gt;</span>Disabled<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <h4 class="subtitle">With Font Awesome icons</h4>

    <div class="columns">
      <div class="column">
        <p class="control">
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
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
            <span>Save</span>
          </a>
          <a class="button is-danger is-outlined">
            <span>Delete</span>
            <span class="icon is-small">
              <i class="fa fa-times"></i>
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-small">
            <span class="icon is-small">
              <i class="fa fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <a class="button">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <a class="button is-medium">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <a class="button is-large">
            <span class="icon is-medium">
              <i class="fa fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
        </p>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-github"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>GitHub<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>Twitter<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-check"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>Save<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span&gt;</span>Delete<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-times"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger is-outlined"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-times"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>Delete<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/a&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">Button group</h3>
    <div class="content">
      <p>If you want to <strong>group</strong> buttons together, use the <code>is-grouped</code> modifier on the <code>control</code> container:</p>
    </div>
    <div class="example">
      <div class="control is-grouped">
        <p class="control">
          <a class="button is-primary">
            Save changes
          </a>
        </p>
        <p class="control">
          <a class="button">
            Cancel
          </a>
        </p>
        <p class="control">
          <a class="button is-danger">
            Delete post
          </a>
        </p>
      </div>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control is-grouped"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
      Save changes
    <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
      Cancel
    <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger"</span><span class="nt">&gt;</span>
      Delete post
    <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre><button class="copy">Copy</button></figure>

    <hr>

    <h3 class="title">Button addons</h3>
    <div class="content">
      <p>If you want to use buttons as <strong>addons</strong>, use the <code>has-addons</code> modifier on the <code>control</code> container:</p>
    </div>
    <div class="example">
      <p class="control has-addons">
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-align-left"></i>
          </span>
          <span>Left</span>
        </a>
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-align-center"></i>
          </span>
          <span>Center</span>
        </a>
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-align-right"></i>
          </span>
          <span>Right</span>
        </a>
      </p>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-addons"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon is-small"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-align-left"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;span&gt;</span>Left<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon is-small"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-align-center"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;span&gt;</span>Center<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon is-small"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-align-right"</span><span class="nt">&gt;&lt;/i&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;span&gt;</span>Right<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>

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