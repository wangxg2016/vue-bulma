<template>
<xcontent>
  <span slot="title">Progress</span>
    <h1 class="title">Progress bars</h1>
    <h2 class="subtitle">
      Native HTML <strong>progress</strong> bars
    </h2>
    <hr>
    <h3 class="title">Component</h3>
    <div class="example">
      <progress-bar :value="15" :max="100"></progress-bar>
      <progress-bar :classname="'is-primary'" :value="30"></progress-bar>
      <progress-bar :classname="'is-danger'" :value="30"></progress-bar>
      <progress-bar :classname="'is-info'" :value="val" :max="200" title="保存数量 (个)" :readonly="false" :step="20" @change="update"></progress-bar>
      <progress-bar :classname="'is-danger is-medium'" :value="val2" title="剩余时间 (天)" :readonly="false" :step="1" @change="update2"></progress-bar>
      <progress-bar :classname="'is-primary is-small'" :value="val3" title="进度 (%)" :readonly="false" :step="0.1" @change="update3"></progress-bar>
    </div>
    <hr>
    <h3 class="title">Example</h3>
    <div class="example">
      <progress class="progress" value="15" max="100">15%</progress>
      <progress class="progress is-primary" value="30" max="100">30%</progress>
      <progress class="progress is-info" value="45" max="100">45%</progress>
      <progress class="progress is-success" value="60" max="100">60%</progress>
      <progress class="progress is-warning" value="75" max="100">75%</progress>
      <progress class="progress is-danger" value="90" max="100">90%</progress>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress"</span> <span class="na">value=</span><span class="s">"15"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>15%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-primary"</span> <span class="na">value=</span><span class="s">"30"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>30%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-info"</span> <span class="na">value=</span><span class="s">"45"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>45%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-success"</span> <span class="na">value=</span><span class="s">"60"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>60%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-warning"</span> <span class="na">value=</span><span class="s">"75"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>75%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-danger"</span> <span class="na">value=</span><span class="s">"90"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>90%<span class="nt">&lt;/progress&gt;</span></code></pre><button class="copy">Copy</button></figure>

    <hr>
    <h3 class="title">Sizes</h3>
    <div class="example">
      <progress class="progress is-small" value="15" max="100">15%</progress>
      <progress class="progress" value="30" max="100">30%</progress>
      <progress class="progress is-medium" value="45" max="100">45%</progress>
      <progress class="progress is-large" value="60" max="100">60%</progress>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-small"</span> <span class="na">value=</span><span class="s">"15"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>15%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress"</span> <span class="na">value=</span><span class="s">"30"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>30%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-medium"</span> <span class="na">value=</span><span class="s">"45"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>45%<span class="nt">&lt;/progress&gt;</span>
<span class="nt">&lt;progress</span> <span class="na">class=</span><span class="s">"progress is-large"</span> <span class="na">value=</span><span class="s">"60"</span> <span class="na">max=</span><span class="s">"100"</span><span class="nt">&gt;</span>60%<span class="nt">&lt;/progress&gt;</span></code></pre><button class="copy">Copy</button></figure>


</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
import { ProgressBar } from '../components/common'
export default {
  components: {
    ProgressBar,
    Xcontent
  },
  data () {
    return {
      val: 80,
      val2: 20,
      val3: 60
    }
  },
  methods: {
    update (val) {
      this.val = val
    },
    update2 (val) {
      this.val2 = val
    },
    update3 (val) {
      this.val3 = val
    }
  }
}
</script>
