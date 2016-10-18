# Vue-Bulma

> 轻量级高性能MVVM Admin UI框架

Demo网址：[https://admin-c79b5.firebaseapp.com/admin/index](https://admin-c79b5.firebaseapp.com/admin/index) 


# Screenshot

<img src="https://raw.githubusercontent.com/wangxg2016/vue-bulma/master/screenshot/charts.jpg" width="100%" />
<img src="https://raw.githubusercontent.com/wangxg2016/vue-bulma/master/screenshot/progressbar.jpg" width="100%" />

## Build Setup

``` bash
# 安装依赖包
npm install

# 开发模式运行在 localhost:8080
npm run dev

# 打包项目
npm run build
打包前注意将node_modules\moment\locale\目录下除zh-cn.js的文件全部删除，否则打包后文件将会很大

# 运行测试
npm run unit
```

## manifest 缓存

> 为了让前端飞，我们还需要进行manifest缓存。示例文件为web.manifest，通过设定甚至可以进行整站缓存，如果需要使用该设定，请记住每次代码更新的同时也需要修改一下该文件避免加载出错。 

## 引入

- [Bulma](https://github.com/jgthms/bulma)
- [Vue](http://vuejs.org/)
- [vuex](http://vuex.vuejs.org)
- [vue-router](http://router.vuejs.org)
- [vue-resource](https://github.com/vuejs/vue-resource)

## 特别提示

> 本项目构建中已使用eslint，力求代码排版标准化方便阅读，建议不要在设置里取消该设定。
> 本项目不含jQuery库，原因可参考pagination组件，通过vue仅使用一行代码即实现了复杂的分页页码处理，vue强大的数据驱动模型带来了全新的前端设计方式。