<template>
<section class=menu>
<div class="panel-block">
  <article class="media">
  <figure class="media-left">
    <p class="image is-48x48">
      <img class="is-rounded" src="../../assets/photo.jpg">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>James Bond</strong> <small>Military Intelligence, Section 6</small>
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
  <div class="media-right">
    <a><i class="fa fa-info-circle" aria-hidden="true"></i></a>
  </div>
  </article>
</div>
<aside class="menu">
  <div class="menu-container" v-for="(items, x) in menus">
    <p class="menu-label"><span class="icon is-small"><i :class="'fa fa-'+items.icon"></i></span><span v-text="items.title"></span></p>
    <ul class="menu-list">
      <li v-for="(item, y) in items.sub">
        <router-link v-if="!item.sub" :to="item.url"><span class="icon is-small"><i :class="'fa fa-'+item.icon"></i></span><span v-text="item.title"></span></router-link>
        <a v-if="!!item.sub" :class="{'menu-toggle':(x+'.'+y)===index}" @click="toggle(x+'.'+y)"><span class="icon is-small"><i :class="'fa fa-'+item.icon"></i></span><span v-text="item.title"></span><span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span></a>
        <div v-if="!!item.sub" class="menu-subcontainer" :style="{height: (x+'.'+y)===index ? (item.sub.length * 30 + 10) + 'px':'0'}">
        <ul>
          <li v-for="sub in item.sub">
            <router-link :to="sub.url"><span class="icon is-small"><i :class="'fa fa-'+(sub.icon?sub.icon:'caret-right')"></i></span><span v-text="sub.title"></span></router-link>
          </li>    
        </ul>
        </div>
      </li>
    </ul>
  </div>
</aside>
<a class="panel-block" @click="logout()"><span class="icon is-small"><i class="fa fa-power-off"></i></span><span>注销</span></a>
</section>
</template>
<script>
export default {
  data () {
    return {
      index: '',
      menus: [
        {
          title: '系统',
          icon: 'cogs',
          sub: [
            {title: '设置', icon: 'dashboard', url: '/setting'}
          ]
        },
        {
          title: '功能',
          icon: 'th',
          sub: [
            {title: '首页', icon: 'home', url: '/index'},
            {
              title: 'UI元件',
              icon: 'diamond',
              sub: [
                {title: 'Buttons', url: '/buttons'},
                {title: 'Card', url: '/card'},
                {title: 'Content', url: '/Content'},
                {title: 'Form', url: '/form'},
                {title: 'Icons', url: '/icons'},
                {title: 'Image', url: '/image'},
                {title: 'Level', url: '/level'},
                {title: 'MediaObject', url: '/mediaobject'},
                {title: 'Message', url: '/message'},
                {title: 'Nav', url: '/nav'},
                {title: 'Notifications', url: '/notifications'},
                {title: 'Panel', url: '/panel'},
                {title: 'Table', url: '/table'},
                {title: 'Tabs', url: '/tabs'},
                {title: 'Tags', url: '/tags'},
                {title: 'Title', url: '/title'}
              ]
            },
            {
              title: '功能组件',
              icon: 'puzzle-piece',
              sub: [
                {title: 'Ajax', url: '/ajax'},
                {title: 'Charts', url: '/charts'},
                {title: 'Collapse', url: '/collapse'},
                {title: 'Modal', url: '/modal'},
                {title: 'Pagination', url: '/pagination'},
                {title: 'Progress', url: '/progress'},
                {title: 'Rating', icon: 'star', url: '/rating'},
                {title: 'Timeline', url: '/timeline'},
                {title: 'Toast', url: '/toast'},
                {title: '404', url: '/notfound'}
              ]
            },
            {title: '关于', icon: 'cube', url: '/about'}
          ]
        }
      ]
    }
  },
  methods: {
    toggle (index) {
      this.index = (this.index === index) ? '' : index
    },
    logout () {
      this.$parent.showModal('logout', '注销', '您确定要注销吗？', 300)
    }
  }
}
</script>
<style lang="less">
#menu-toggle-switch{
  position:absolute;
  top:0;
  background-color:rgba(0,0,0,0.5);
  color:#ccc;
  padding:0 3px;
  right:-18px;
  z-index:-1;
}
section.menu {
  position:absolute;
  left:0;
  top:0;
  width:220px;
  bottom:0;
  background-color:#fafafa;
  box-shadow:1px 0 1px rgba(0,0,0,0.2);
  display:flex;
  flex-direction:column;
  z-index:10;
}
aside.menu{
  display:flex;
  flex-basis:auto;
  flex-direction:column;
  flex-grow:1;
  flex-shrink:1;
  padding:10px;
  overflow-x:hidden;
  overflow-y:auto;
}
section.menu .panel-block{
  display:block;
  flex-basis:auto;
  flex-direction:column;
  flex-grow:0;
  flex-shrink:0;
  line-height:20px;
  background-color:#eee;
  border-radius:0;
  box-shadow: 0 -1px 0 rgba(0,0,0,0.12);
  border-bottom:none;
}
section.menu .panel-block:first-child{
  box-shadow: 0 1px 0 rgba(0,0,0,0.12);
}
aside.menu .menu-container {
  margin-bottom:20px;
}
aside.menu .menu-label {
  font-weight:700;
}
aside.menu .menu-label .icon{
  vertical-align: bottom;
  margin-right:6px;
}
aside.menu a {
  position:relative;
  line-height:20px;
}
aside.menu li ul {
  margin: 5px 0 5px 18px;
}
aside.menu .menu-subcontainer {
  overflow: hidden;
  transition: all .3s;
}
section.menu a .icon {
  vertical-align: baseline;
  margin-right:5px;
}
aside.menu .icon.is-angle {
  position: absolute;
  margin-right:0;
  right: 10px;
  transition: transform .3s ease;
}
aside.menu .menu-toggle .icon.is-angle {
  transform: rotate(180deg);
}
</style>