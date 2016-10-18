<template>
<xcontent>
  <span slot="title">Form</span>
    <h1 class="title">Form controls</h1>
    <h2 class="subtitle">
      All generic <strong>form controls</strong>, designed for consistency
    </h2>

    <hr>

    <div class="content">
      <p>The following form controls <strong>classes</strong> are supported:</p>
      <ul>
        <li><code>.label</code></li>
        <li><code>.input</code></li>
        <li><code>.textarea</code></li>
        <li><code>.select</code></li>
        <li><code>.checkbox</code></li>
        <li><code>.radio</code></li>
        <li><code>.button</code></li>
        <li><code>.help</code></li>
      </ul>
      <p>When combining several controls in a <strong>form</strong>, use the <code>.control</code> class as a <strong>container</strong>, to keep the spacing consistent.</p>
    </div>

    <div class="columns">
      <div class="column is-half">
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input">
        </p>
        <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <i class="fa fa-check"></i>
          <span class="help is-success">This username is available</span>
        </p>
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
          <i class="fa fa-warning"></i>
          <span class="help is-danger">This email is invalid</span>
        </p>
        <label class="label">Subject</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
        <label class="label">Message</label>
        <p class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </p>
        <p class="control">
          <label class="checkbox">
            <input type="checkbox">
            Remember me
          </label>
        </p>
        <p class="control">
          <label class="radio">
            <input type="radio" name="question">
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question">
            No
          </label>
        </p>
        <p class="control">
          <button class="button is-primary">Submit</button>
          <button class="button is-link">Cancel</button>
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Name<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Text input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Username<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon has-icon-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-success"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Text input"</span> <span class="na">value=</span><span class="s">"bulma"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-check"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"help is-success"</span><span class="nt">&gt;</span>This username is available<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon has-icon-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-danger"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Email input"</span> <span class="na">value=</span><span class="s">"hello@"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-warning"</span><span class="nt">&gt;&lt;/i&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"help is-danger"</span><span class="nt">&gt;</span>This email is invalid<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Subject<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"select"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;select&gt;</span>
      <span class="nt">&lt;option&gt;</span>Select dropdown<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>With options<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Message<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"textarea"</span> <span class="na">placeholder=</span><span class="s">"Textarea"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"checkbox"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span><span class="nt">&gt;</span>
    Remember me
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"radio"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"question"</span><span class="nt">&gt;</span>
    Yes
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"radio"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"question"</span><span class="nt">&gt;</span>
    No
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-link"</span><span class="nt">&gt;</span>Cancel<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button><button class="expand">Expand</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">Colors</h3>
    <div class="columns">
      <div class="column is-half">
        <p class="control">
          <input class="input is-primary" type="text" placeholder="Primary input">
        </p>
        <p class="control">
          <input class="input is-info" type="text" placeholder="Info input">
        </p>
        <p class="control">
          <input class="input is-success" type="text" placeholder="Success input">
        </p>
        <p class="control">
          <input class="input is-warning" type="text" placeholder="Warning input">
        </p>
        <p class="control">
          <input class="input is-danger" type="text" placeholder="Danger input">
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-primary"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Primary input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-info"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Info input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-success"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Success input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-warning"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Warning input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-danger"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Danger input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">Sizes</h3>
    <div class="columns">
      <div class="column is-half">
        <p class="control">
          <input class="input is-small" type="text" placeholder="Small input">
        </p>
        <p class="control">
          <input class="input" type="text" placeholder="Normal input">
        </p>
        <p class="control">
          <input class="input is-medium" type="text" placeholder="Medium input">
        </p>
        <p class="control">
          <input class="input is-large" type="text" placeholder="Large input">
        </p>
        <p class="control">
          <span class="select is-small">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
        <p class="control">
          <span class="select is-medium">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
        <p class="control">
          <span class="select is-large">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-small"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Small input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Normal input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-medium"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Medium input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-large"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Large input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">States</h3>
    <h4 class="subtitle">Loading</h4>
    <div class="columns">
      <div class="column is-half">
        <p class="control is-loading">
          <input class="input" type="text" placeholder="Loading input">
        </p>
        <p class="control is-loading">
          <textarea class="textarea" placeholder="Loading textarea"></textarea>
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control is-loading"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Loading input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control is-loading"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"textarea"</span> <span class="na">placeholder=</span><span class="s">"Loading textarea"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <h4 class="subtitle">Disabled</h4>
    <div class="columns">
      <div class="column is-half">
        <p class="control">
          <input class="input" type="text" placeholder="Disabled input" disabled="">
        </p>
        <p class="control">
          <textarea class="textarea" placeholder="Disabled textarea" disabled=""></textarea>
        </p>
        <p class="control">
          <label class="checkbox is-disabled">
            <input type="checkbox" disabled="">
            Remember me
          </label>
        </p>
        <p class="control">
          <label class="radio is-disabled">
            <input type="radio" name="question" disabled="">
            Yes
          </label>
          <label class="radio is-disabled">
            <input type="radio" name="question" disabled="">
            No
          </label>
        </p>
        <p class="control">
          <button class="button is-primary" disabled="">Submit</button>
          <button class="button" disabled="">Cancel</button>
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Disabled input"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"textarea"</span> <span class="na">placeholder=</span><span class="s">"Disabled textarea"</span> <span class="na">disabled</span><span class="nt">&gt;&lt;/textarea&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"checkbox is-disabled"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    Remember me
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"radio is-disabled"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"question"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    Yes
  <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"radio is-disabled"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"question"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    No
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary"</span> <span class="na">disabled</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button"</span> <span class="na">disabled</span><span class="nt">&gt;</span>Cancel<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <h4 class="subtitle">With Font Awesome icons</h4>
    <div class="columns">
      <div class="column is-half">
        <p class="control has-icon">
          <input class="input" type="email" placeholder="Email">
          <i class="fa fa-envelope"></i>
        </p>
        <p class="control has-icon">
          <input class="input" type="password" placeholder="Password">
          <i class="fa fa-lock"></i>
        </p>
        <p class="control">
          <button class="button is-success">
            Login
          </button>
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-envelope"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-lock"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-success"</span><span class="nt">&gt;</span>
    Login
  <span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <p class="control has-icon">
          <input class="input is-small" type="email" placeholder="Email">
          <i class="fa fa-envelope"></i>
        </p>
        <p class="control has-icon">
          <input class="input" type="email" placeholder="Email">
          <i class="fa fa-envelope"></i>
        </p>
        <p class="control has-icon">
          <input class="input is-medium" type="email" placeholder="Email">
          <i class="fa fa-envelope"></i>
        </p>
        <p class="control has-icon">
          <input class="input is-large" type="email" placeholder="Email">
          <i class="fa fa-envelope"></i>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-small" type="email" placeholder="Email">
          <i class="fa fa-check"></i>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input" type="email" placeholder="Email">
          <i class="fa fa-check"></i>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-medium" type="email" placeholder="Email">
          <i class="fa fa-check"></i>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-large" type="email" placeholder="Email">
          <i class="fa fa-check"></i>
        </p>
      </div>
      <div class="column is-half">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-small"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-envelope"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-envelope"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-medium"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-envelope"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-large"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-envelope"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon has-icon-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-small"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-check"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon has-icon-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-check"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon has-icon-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-medium"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-check"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-icon has-icon-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-large"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-check"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
      </div>
    </div>

    <hr>

    <h3 class="title">Form addons</h3>
    <div class="content">
      <p>If you want to <strong>attach</strong> controls together, use the <code>has-addons</code> modifier on the <code>control</code> container:</p>
    </div>
    <div class="example">
      <p class="control has-addons">
        <input class="input" type="text" placeholder="Find a repository">
        <a class="button is-info">
          Search
        </a>
      </p>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-addons"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Find a repository"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info"</span><span class="nt">&gt;</span>
    Search
  <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
    <div class="content">
      <p>You can attach inputs, buttons, and dropdowns <strong>only</strong>.</p>
      <p>Use the <code>is-expanded</code> modifier on the element you want to fill up the remaing space (in this case, the input):</p>
    </div>
    <div class="example">
<p class="control has-addons">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input is-expanded" type="text" placeholder="Amount of money">
  <a class="button">
    Transfer
  </a>
</p>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-addons"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"select"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;select&gt;</span>
      <span class="nt">&lt;option&gt;</span>$<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>£<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>€<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input is-expanded"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Amount of money"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
    Transfer
  <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
    <div class="content">
      <p>Use the <code>has-addons-centered</code> or the <code>has-addons-right</code> modifers to alter the <strong>alignment</strong>.</p>
    </div>
<div class="example">
<p class="control has-addons has-addons-centered">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="Amount of money">
  <a class="button is-primary">
    Transfer
  </a>
</p>
</div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-addons has-addons-centered"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"select"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;select&gt;</span>
      <span class="nt">&lt;option&gt;</span>$<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>£<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>€<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Amount of money"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
    Transfer
  <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>
<div class="example">
<p class="control has-addons has-addons-right">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="Amount of money">
  <a class="button is-primary">
    Transfer
  </a>
</p>
</div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control has-addons has-addons-right"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"select"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;select&gt;</span>
      <span class="nt">&lt;option&gt;</span>$<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>£<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>€<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
  <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Amount of money"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
    Transfer
  <span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre><button class="copy">Copy</button></figure>

    <hr>

    <h3 class="title">Form group</h3>
    <div class="content">
      <p>If you want to <strong>group</strong> controls together, use the <code>is-grouped</code> modifier on the <code>control</code> container:</p>
    </div>
    <div class="example">
<div class="control is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control is-grouped"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control is-expanded"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Find a repository"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info"</span><span class="nt">&gt;</span>
      Search
    <span class="nt">&lt;/a&gt;</span>
  <span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre><button class="copy">Copy</button></figure>
    <div class="content">
      <p>Add the <code>is-expanded</code> modifier on the control element you want to <strong>fill up the remaining space</strong>.</p>
    </div>

    <hr>

    <h3 class="title">Horizontal form</h3>
    <div class="content">
      <p>If you want a <strong>horizontal</strong> form control, use the <code>is-horizontal</code> modifier on the <code>control</code> container, in which you include:</p>
      <ul>
        <li>
          <code>control-label</code> for the side label
        </li>
        <li>
          <code>control</code> for the input/select/textarea container
        </li>
      </ul>
      <p>You can of course use <code>is-grouped</code> or <code>has-addons</code> for the child elements.</p>
    </div>
    <div class="control is-horizontal">
      <div class="control-label">
        <label class="label">From</label>
      </div>
      <div class="control is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Name">
        </p>
        <p class="control is-expanded">
          <input class="input" type="email" placeholder="Email">
        </p>
      </div>
    </div>
    <div class="control is-horizontal">
      <div class="control-label">
        <label class="label">Subject</label>
      </div>
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>General enquiry</option>
          </select>
        </div>
      </div>
    </div>
    <div class="control is-horizontal">
      <div class="control-label">
        <label class="label">Question</label>
      </div>
      <div class="control">
        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control is-horizontal"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control-label"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>From<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control is-grouped"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control is-expanded"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Name"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control is-expanded"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control is-horizontal"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control-label"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Subject<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"select is-fullwidth"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;select&gt;</span>
        <span class="nt">&lt;option&gt;</span>General enquiry<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;/select&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control is-horizontal"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control-label"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Question<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"textarea"</span> <span class="na">placeholder=</span><span class="s">"Explain how we can help you"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre><button class="copy">Copy</button></figure>
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