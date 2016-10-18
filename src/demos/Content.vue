<template>
<xcontent>
  <span slot="title">Content</span>
    <h1 class="title">Content</h1>
    <h2 class="subtitle">
      A single class to handle WYSIWYG generated content, where only <strong>HTML tags</strong> are available
    </h2>

    <hr>

    <div class="content">
      <p>When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use <code>content</code> as container. It can handle almost any HTML tag:</p>
      <ul>
        <li><code>&lt;p&gt;</code> paragraphs</li>
        <li><code>&lt;ul&gt; &lt;ol&gt; &lt;dl&gt;</code> lists</li>
        <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings</li>
        <li><code>&lt;blockquotes&gt;</code> quotes</li>
        <li><code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code></li>
        <li><code>&lt;table&gt; &lt;tr&gt; &lt;th&gt; &lt;td&gt;</code> tables</li>
      </ul>
      <p>This <code>content</code> class can be used in <em>any</em>, whenever you just want to write some <strong>text</strong>. For example, it's used for the paragraph you're currently reading.</p>
    </div>

    <div class="example">
      <div class="content">
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
        <h2>Second level</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
        <h3>Third level</h3>
        <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
        <ol>
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
          <li>Donec a diam tellus.</li>
          <li>Aenean nec tortor orci.</li>
          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
          <li>Vivamus maximus ultricies pulvinar.</li>
        </ol>
        <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
        <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
        <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
        <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
        <h4>Fourth level</h4>
        <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
        <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
        <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
        <h5>Fifth level</h5>
        <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
        <h6>Sixth level</h6>
        <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
        
      </div>
    </div>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"content"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;h1&gt;</span>Hello World<span class="nt">&lt;/h1&gt;</span>
  <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;h2&gt;</span>Second level<span class="nt">&lt;/h2&gt;</span>
  <span class="nt">&lt;p&gt;</span>Curabitur accumsan turpis pharetra <span class="nt">&lt;strong&gt;</span>augue tincidunt<span class="nt">&lt;/strong&gt;</span> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;ul&gt;</span>
    <span class="nt">&lt;li&gt;</span>In fermentum leo eu lectus mollis, quis dictum mi aliquet.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Morbi eu nulla lobortis, lobortis est in, fringilla felis.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Ut non enim metus.<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
  <span class="nt">&lt;h3&gt;</span>Third level<span class="nt">&lt;/h3&gt;</span>
  <span class="nt">&lt;p&gt;</span>Quisque ante lacus, malesuada ac auctor vitae, congue <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>non ante<span class="nt">&lt;/a&gt;</span>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;ol&gt;</span>
    <span class="nt">&lt;li&gt;</span>Donec blandit a lorem id convallis.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Cras gravida arcu at diam gravida gravida.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Integer in volutpat libero.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Donec a diam tellus.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Aenean nec tortor orci.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Quisque aliquam cursus urna, non bibendum massa viverra eget.<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;</span>Vivamus maximus ultricies pulvinar.<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ol&gt;</span>
  <span class="nt">&lt;blockquote&gt;</span>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.<span class="nt">&lt;/blockquote&gt;</span>
  <span class="nt">&lt;p&gt;</span>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <span class="nt">&lt;em&gt;</span>justo sodales<span class="nt">&lt;/em&gt;</span> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;h4&gt;</span>Fourth level<span class="nt">&lt;/h4&gt;</span>
  <span class="nt">&lt;p&gt;</span>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;h5&gt;</span>Fifth level<span class="nt">&lt;/h5&gt;</span>
  <span class="nt">&lt;p&gt;</span>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;h6&gt;</span>Sixth level<span class="nt">&lt;/h6&gt;</span>
  <span class="nt">&lt;p&gt;</span>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre><button class="copy">Copy</button></figure>

    <hr>

    <h3 class="title">Sizes</h3>
    <div class="content">
      <p>You can use the <code>is-medium</code> and <code>is-large</code> modifiers to change the font size.</p>
    </div>
    <div class="example">
      <div class="content is-medium">
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
        <h2>Second level</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
      </div>
    </div>
    <div class="example">
      <div class="content is-large">
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
        <h2>Second level</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
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