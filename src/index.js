//  用于导入硬包vue
import Vue from 'vue/dist/vue.js'

// 导入VueRouter路由  并使用use路由 导入抽离的router.js文件  导入APP.vue的组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import App from './App.vue'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局时间的过滤器
Vue.filter('dateFormat', function(dataStr,pattern = "YYYY-MM-DD HH:MM:SS"){
  return moment(dataStr).format(pattern)
})

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = ''   // 注意这个根路径需要手动去更改 更改后 这个get请求方法this.$http.get("").then(result =>{})中的get("")直接写成get("***/***/***")不用在最前面写 "/" 和根路径

// 导入图片缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入图片放大插件
import vueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
 
Vue.use(vueDirectiveImagePreviewer)


//全局设置 Post 时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true;

// 导入需要自定的样式文件 类似ListView
import './App.css'

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// 导入mui组件的css 注意先拷贝mui的文件在Lib目录下
import './lib/MUI/css/mui.css'






// 全局导入mint.ui 如果想压缩文件 可以进行部分按需导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入vuex
// import vuex from 'vuex'
// Vue.use(vuex)

// var store = new vuex.Store({
//   state:{
//     boolnum: 0,
//   }
// })


// 导入mui框架的部分组件 下面是局部引用button按钮  Header头部  Swipe SwipeItem轮播图 的ui模块 注意还要在babelrc中写一段代码 
// import { Button, Header, Swipe, SwipeItem, Lazyload } from 'mint-ui'
// Vue.component('mt-button', Button);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);

// // 先导入 在使用
// Vue.use(Lazyload);





var vm = new Vue({
  el: '#app',
  // store,
  // 将App.vue
  render: c => c(App),
  router: router,
})