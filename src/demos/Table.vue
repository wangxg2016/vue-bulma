<template>
<xcontent>
  <span slot="title">Table</span>

    <h1 class="title">Tables</h1>
    <h2 class="subtitle">The inevitable HTML <strong>table</strong>, with special case cells</h2>

    <hr>

    <div class="example">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Open source projects</th>
            <th>Year started</th>
            <th colspan="3">Links</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th>Open source projects</th>
            <th>Year started</th>
            <th colspan="3">Links</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td class="is-icon">
              <i class="fa fa-android"></i>
            </td>
            <td>
              <a href="#">Android</a>
            </td>
            <td>
              2003
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-globe"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="is-icon">
              <i class="fa fa-firefox"></i>
            </td>
            <td>
              <a href="#">Firefox</a>
            </td>
            <td>
              2003
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-globe"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="is-icon">
              <i class="fa fa-linux"></i>
            </td>
            <td>
              <a href="#">Linux</a>
            </td>
            <td>
              2003
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-globe"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="is-icon">
              <i class="fa fa-wordpress"></i>
            </td>
            <td>
              <a href="#">WordPress</a>
            </td>
            <td>
              2003
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </td>
            <td class="is-icon">
              <a href="#">
                <i class="fa fa-globe"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;table</span> <span class="na">class=</span><span class="s">"table"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;thead&gt;</span>
    <span class="nt">&lt;tr&gt;</span>
      <span class="nt">&lt;th&gt;</span>Name<span class="nt">&lt;/th&gt;</span>
      <span class="nt">&lt;th&gt;</span>Instrument<span class="nt">&lt;/th&gt;</span>
      <span class="nt">&lt;th&gt;&lt;/th&gt;</span>
      <span class="nt">&lt;th&gt;&lt;/th&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
  <span class="nt">&lt;/thead&gt;</span>
  <span class="nt">&lt;tfoot&gt;</span>
    <span class="nt">&lt;tr&gt;</span>
      <span class="nt">&lt;th&gt;</span>Name<span class="nt">&lt;/th&gt;</span>
      <span class="nt">&lt;th&gt;</span>Instrument<span class="nt">&lt;/th&gt;</span>
      <span class="nt">&lt;th&gt;&lt;/th&gt;</span>
      <span class="nt">&lt;th&gt;&lt;/th&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
  <span class="nt">&lt;/tfoot&gt;</span>
  <span class="nt">&lt;tbody&gt;</span>
    <span class="nt">&lt;tr&gt;</span>
      <span class="nt">&lt;td&gt;</span>Misty Abbott<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td&gt;</span>Bass Guitar<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-instagram"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;tr&gt;</span>
      <span class="nt">&lt;td&gt;</span>John Smith<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td&gt;</span>Rhythm Guitar<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-instagram"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;tr&gt;</span>
      <span class="nt">&lt;td&gt;</span>Robert Mikels<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td&gt;</span>Lead Guitar<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-instagram"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;tr&gt;</span>
      <span class="nt">&lt;td&gt;</span>Karyn Holmberg<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td&gt;</span>Drums<span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
      <span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">"is-icon"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-instagram"</span><span class="nt">&gt;&lt;/i&gt;</span>
        <span class="nt">&lt;/a&gt;</span>
      <span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
  <span class="nt">&lt;/tbody&gt;</span>
<span class="nt">&lt;/table&gt;</span></code></pre><button class="copy">Copy</button><button class="expand">Expand</button></figure>

    <hr>

    <h3 class="title">Modifiers</h3>

    <div class="columns">
      <div class="column">
        <p>Add <strong>borders</strong> to all the cells.</p>
      </div>
      <div class="column">
        <code>table is-bordered</code>
      </div>
      <div class="column is-half">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <p>Add <strong>stripes</strong> to the table.</p>
      </div>
      <div class="column">
        <code>table is-striped</code>
      </div>
      <div class="column is-half">
        <table class="table is-striped">
          <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
            <tr>
              <td>Five</td>
              <td>Six</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>Eight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <p>Make the cells <strong>narrower</strong>.</p>
      </div>
      <div class="column">
        <code>table is-narrow</code>
      </div>
      <div class="column is-half">
        <table class="table is-narrow">
          <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
            <tr>
              <td>Five</td>
              <td>Six</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>Eight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <p>You can <strong>combine</strong> all three modifiers.</p>
      </div>
      <div class="column">
        <code>table is-bordered is-striped is-narrow</code>
      </div>
      <div class="column is-half">
        <table class="table is-bordered is-striped is-narrow">
          <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
            <tr>
              <td>Five</td>
              <td>Six</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>Eight</td>
            </tr>
          </tbody>
        </table>
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