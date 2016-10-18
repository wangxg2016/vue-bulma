<template>
  <ul class="timeline">
    <slot></slot>
  </ul>
</template>
<style lang="less">
.timeline{
    position: relative;
    margin: 0 0 30px 0;
    padding: 0;
    list-style: none;
}
.timeline>li>.fa, .timeline>li>.glyphicon, .timeline>li>.ion {
    width: 30px;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    position: absolute;
    /*
    color: #666;
    background: #d2d6de;
    */
    border-radius: 50%;
    text-align: center;
    left: 18px;
    top: 0;
}
.timeline>li {
    position: relative;
    margin-right: 10px;
    margin-bottom: 15px;
}
.timeline>li>.timeline-item {
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 3px;
    margin-top: 0;
    background: #fff;
    color: #444;
    margin-left: 60px;
    margin-right: 15px;
    padding: 0;
    position: relative;
}
.timeline>li:before, .timeline>li:after {
    content: " ";
    display: table;
    box-sizing: border-box;
}
.timeline>li:after {
    clear: both;
}
.timeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #ddd;
    left: 31px;
    margin: 0;
    border-radius: 2px;
}
.timeline>li>.timeline-item>.time {
    color: #999;
    float: right;
    padding: 10px;
    font-size: 12px;
}
.timeline>li>.timeline-item>.timeline-header {
    margin: 0;
    color: #555;
    border-bottom: 1px solid #f4f4f4;
    padding: 10px;
    font-size: 16px;
    line-height: 1.1;
}
.timeline .time i{
    font-size: 15px !important;
}
.timeline>li>.timeline-item>.timeline-body, .timeline>li>.timeline-item>.timeline-footer {
    padding: 10px;
}
</style>
