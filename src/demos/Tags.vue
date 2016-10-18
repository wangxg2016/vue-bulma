<template>
<xcontent>
  <span slot="title">Tags</span>
    <h1 class="title">Tags</h1>
    <h2 class="subtitle">
      Small <strong>tag labels</strong> to insert anywhere
    </h2>

    <hr>

    <div class="columns">
      <div class="column is-4">
        By default, a <strong>tag</strong> is a 24px high label.
      </div>
      <div class="column is-2">
        <span class="tag">
          Tag label
        </span>
      </div>
      <div class="column is-6">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag"</span><span class="nt">&gt;</span>
  Tag label
<span class="nt">&lt;/span&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <div class="columns">
      <div class="column is-4">
        There are <strong>6 different colors</strong> available.
      </div>
      <div class="column is-2">
        <p class="control">
          <span class="tag is-dark">
            Dark
          </span>
        </p>
        <p class="control">
          <span class="tag is-primary">
            Primary
          </span>
        </p>
        <p class="control">
          <span class="tag is-info">
            Info
          </span>
        </p>
        <p class="control">
          <span class="tag is-success">
            Success
          </span>
        </p>
        <p class="control">
          <span class="tag is-warning">
            Warning
          </span>
        </p>
        <span class="tag is-danger">
          Danger
        </span>
      </div>
      <div class="column is-6">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-dark"</span><span class="nt">&gt;</span>Dark<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-primary"</span><span class="nt">&gt;</span>Primary<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-info"</span><span class="nt">&gt;</span>Info<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-success"</span><span class="nt">&gt;</span>Success<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-warning"</span><span class="nt">&gt;</span>Warning<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-danger"</span><span class="nt">&gt;</span>Danger<span class="nt">&lt;/span&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <div class="columns">
      <div class="column is-4">
        And <strong>3 additional</strong> sizes.
      </div>
      <div class="column is-2">
        <p class="control">
          <span class="tag is-dark is-small">
            Small
          </span>
        </p>
        <p class="control">
          <span class="tag is-primary is-medium">
            Medium
          </span>
        </p>
        <p class="control">
          <span class="tag is-info is-large">
            Large
          </span>
        </p>
      </div>
      <div class="column is-6">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-dark is-small"</span><span class="nt">&gt;</span>Small<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-primary is-medium"</span><span class="nt">&gt;</span>Medium<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-info is-large"</span><span class="nt">&gt;</span>Large<span class="nt">&lt;/span&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <div class="columns">
      <div class="column is-4">
        You can also append a <strong>delete button</strong>.
      </div>
      <div class="column is-2">
        <p class="control">
          <span class="tag is-info is-small">
            Foo
            <button class="delete is-small"></button>
          </span>
        </p>
        <p class="control">
          <span class="tag is-success">
            Bar
            <button class="delete is-small"></button>
          </span>
        </p>
        <p class="control">
          <span class="tag is-warning is-medium">
            Hello
            <button class="delete is-small"></button>
          </span>
        </p>
        <p class="control">
          <span class="tag is-danger is-large">
            World
            <button class="delete"></button>
          </span>
        </p>
      </div>
      <div class="column is-6">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-info is-small"</span><span class="nt">&gt;</span>
  Foo
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete is-small"</span><span class="nt">&gt;&lt;/button&gt;</span>
<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-success"</span><span class="nt">&gt;</span>
  Bar
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete is-small"</span><span class="nt">&gt;&lt;/button&gt;</span>
<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-warning is-medium"</span><span class="nt">&gt;</span>
  Hello
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete is-small"</span><span class="nt">&gt;&lt;/button&gt;</span>
<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"tag is-danger is-large"</span><span class="nt">&gt;</span>
  World
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"delete"</span><span class="nt">&gt;&lt;/button&gt;</span>
<span class="nt">&lt;/span&gt;</span></code></pre><button class="copy">Copy</button></figure>
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