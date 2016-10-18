<template>
<xcontent>
  <span slot="title">Title</span>
    <h1 class="title">Titles</h1>
    <h2 class="subtitle">
      Simple <strong>headings</strong> to add depth to your page
    </h2>
    <hr>
    <div class="columns">
      <div class="column">
        <p>There are <strong>2 types</strong> of heading:</p>
      </div>
      <div class="column">
        <p class="title">Title</p>
        <p class="subtitle">Subtitle</p>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;h1</span> <span class="na">class=</span><span class="s">"title"</span><span class="nt">&gt;</span>Title<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;h2</span> <span class="na">class=</span><span class="s">"subtitle"</span><span class="nt">&gt;</span>Subtitle<span class="nt">&lt;/h2&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column">
        <p>There are <strong>6 sizes</strong> available:</p>
      </div>
      <div class="column">
        <p class="title is-1">Title 1</p>
        <p class="title is-2">Title 2</p>
        <p class="title is-3">Title 3 (default size)</p>
        <p class="title is-4">Title 4</p>
        <p class="title is-5">Title 5</p>
        <p class="title is-6">Title 6</p>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;h1</span> <span class="na">class=</span><span class="s">"title is-1"</span><span class="nt">&gt;</span>Title 1<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;h2</span> <span class="na">class=</span><span class="s">"title is-2"</span><span class="nt">&gt;</span>Title 2<span class="nt">&lt;/h2&gt;</span>
<span class="nt">&lt;h3</span> <span class="na">class=</span><span class="s">"title is-3"</span><span class="nt">&gt;</span>Title 3<span class="nt">&lt;/h3&gt;</span>
<span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"title is-4"</span><span class="nt">&gt;</span>Title 4<span class="nt">&lt;/h4&gt;</span>
<span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"title is-5"</span><span class="nt">&gt;</span>Title 5<span class="nt">&lt;/h5&gt;</span>
<span class="nt">&lt;h6</span> <span class="na">class=</span><span class="s">"title is-6"</span><span class="nt">&gt;</span>Title 6<span class="nt">&lt;/h6&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <p class="subtitle is-1">Subtitle 1</p>
        <p class="subtitle is-2">Subtitle 2</p>
        <p class="subtitle is-3">Subtitle 3</p>
        <p class="subtitle is-4">Subtitle 4</p>
        <p class="subtitle is-5">Subtitle 5 (default size)</p>
        <p class="subtitle is-6">Subtitle 6</p>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;h1</span> <span class="na">class=</span><span class="s">"subtitle is-1"</span><span class="nt">&gt;</span>Subtitle 1<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;h2</span> <span class="na">class=</span><span class="s">"subtitle is-2"</span><span class="nt">&gt;</span>Subtitle 2<span class="nt">&lt;/h2&gt;</span>
<span class="nt">&lt;h3</span> <span class="na">class=</span><span class="s">"subtitle is-3"</span><span class="nt">&gt;</span>Subtitle 3<span class="nt">&lt;/h3&gt;</span>
<span class="nt">&lt;h4</span> <span class="na">class=</span><span class="s">"subtitle is-4"</span><span class="nt">&gt;</span>Subtitle 4<span class="nt">&lt;/h4&gt;</span>
<span class="nt">&lt;h5</span> <span class="na">class=</span><span class="s">"subtitle is-5"</span><span class="nt">&gt;</span>Subtitle 5<span class="nt">&lt;/h5&gt;</span>
<span class="nt">&lt;h6</span> <span class="na">class=</span><span class="s">"subtitle is-6"</span><span class="nt">&gt;</span>Subtitle 6<span class="nt">&lt;/h6&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column">
        <div class="content">
          <p>When you <strong>combine</strong> a title and a subtitle, they move closer together.</p>
          <p>As a rule of thumb, it is recommended to use a size difference of <strong>two</strong>. So if you use a <code>title is-1</code>, combine it with a <code>subtitle is-3</code>.</p>
        </div>
      </div>
      <div class="column">
        <div class="block">
          <p class="title is-1">Title 1</p>
          <p class="subtitle is-3">Subtitle 3</p>
        </div>
        <div class="block">
          <p class="title is-2">Title 2</p>
          <p class="subtitle is-4">Subtitle 4</p>
        </div>
        <div class="block">
          <p class="title is-3">Title 3</p>
          <p class="subtitle is-5">Subtitle 5</p>
        </div>
      </div>
      <div class="column">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"title is-1"</span><span class="nt">&gt;</span>Title 1<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"subtitle is-3"</span><span class="nt">&gt;</span>Subtitle 3<span class="nt">&lt;/p&gt;</span>

<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"title is-2"</span><span class="nt">&gt;</span>Title 2<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"subtitle is-4"</span><span class="nt">&gt;</span>Subtitle 4<span class="nt">&lt;/p&gt;</span>

<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"title is-3"</span><span class="nt">&gt;</span>Title 3<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"subtitle is-5"</span><span class="nt">&gt;</span>Subtitle 5<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
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