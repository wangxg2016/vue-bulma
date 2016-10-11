<template>
<xcontent>
  <span slot="title">Container</span>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="http://placehold.it/128x128" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<br>
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
<br>
<div class="notification">
  <button class="delete"></button>
  Lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
</div>

<div class="notification is-primary">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
</div>

<div class="notification is-info">
  <button class="delete"></button>
  Info lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
</div>

<div class="notification is-success">
  <button class="delete"></button>
  Success lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
</div>

<div class="notification is-warning">
  <button class="delete"></button>
  Warning lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
</div>

<div class="notification is-danger">
  <button class="delete"></button>
  Danger lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor sit amet,
  consectetur adipiscing elit
</div>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="http://placehold.it/300x225" alt="">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-32x32">
          <img src="http://placehold.it/64x64" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-5">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <small>11:09 PM - 1 Jan 2016</small>
    </div>
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
<style lang="less" scoped>
.example, .structure {
    border: 1px solid #ffdd57;
    border-top-right-radius: 3px;
    color: rgba(0, 0, 0, 0.7);
    padding: 15px 20px;
    position: relative;
    background-color:#fff;
}
.example:before, .structure:before {
    background: #ffdd57;
    border-radius: 3px 3px 0 0;
    bottom: 100%;
    content: "Example";
    display: inline-block;
    font-size: 7px;
    font-weight: bold;
    left: -1px;
    letter-spacing: 1px;
    padding: 3px 5px;
    position: absolute;
    text-transform: uppercase;
    vertical-align: top;
}
</style>