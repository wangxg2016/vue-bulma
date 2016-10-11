<template>
<section class="page-content">
  <div class="page-inner">
    <div class="hero is-primary">
      <xtitle>表单</xtitle>
    </div>
    <div class="inner-content">
      <div class="list-block box">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-bussinessman"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">Name</div>
              <div class="item-input">
                <input type="text" placeholder="Your name">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-email"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">E-mail</div>
              <div class="item-input">
                <input type="email" placeholder="E-mail">
              </div>
              <div class="item-after">
                <a class="button">验证</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-unlock"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">Password</div>
              <div class="item-input">
                <input type="password" placeholder="Password" class="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-smile"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">Gender</div>
              <div class="item-input">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <!-- Date -->
        <li>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-calendar"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">Birth date</div>
              <div class="item-input">
                <input type="date" placeholder="Birth day" value="2014-04-30">
              </div>
            </div>
          </div>
        </li>
        <!-- Switch (Checkbox) -->
        <li>
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-success"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">Switch</div>
              <div class="item-input">
                <label class="label-switch">
                  <input type="checkbox">
                  <div class="checkbox"></div>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content">
            <div class="item-media">
              <i class="icon icon-form"></i>
            </div>
            <div class="item-inner">
              <div class="item-title label">Textarea</div>
              <div class="item-input">
                <textarea></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { Xtitle } from '../components/page'
export default {
  components: {
    Xtitle
  }
}
</script>