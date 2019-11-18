import VueRouter from 'vue-router'
import home from './components/tabbar/homeCon.vue'
import message from './components/tabbar/messageCon.vue'
import setting from './components/tabbar/settingCon.vue'
import vip from './components/tabbar/vipCon.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import newsSec from './components/news/newsSec.vue'
import newsThr from './components/news/newsThr.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import shopList from './components/shops/shopList.vue'
import swiperInfoOne from './components/swiper/swiperInfoOne.vue'
import swiperInfoTwo from './components/swiper/swiperInfoTwo.vue'
import swiperInfoThree from './components/swiper/swiperInfoThree.vue'
import swiperInfoFour from './components/swiper/swiperInfoFour.vue'


var router = new VueRouter({
  routes: [
    { path:'/' , redirect: '/home'},
    { path:'/home', component: home },
    { path:'/message', component: message },
    { path:'/setting', component: setting },
    { path:'/vip', component: vip },
    { path:'/home/newsList', component: newsList},
    // { path:'/home/newsInfo/:id', component: newsInfo},   // 将获得的id传到URL中,根据不同的id打开不同的新闻页面
    { path:'/home/newsInfo', component: newsInfo},
    { path:'/home/photoList', component: photoList},
    { path:'/home/photoInfo', component: photoInfo},
    { path:'/home/newsSec', component: newsSec},
    { path:'/home/newsThr', component: newsThr},
    { path:'/home/shopList',component: shopList},
    { path:'/home/swiperInfoOne/:id',component: swiperInfoOne,name:'swiperInfoOne'},
    { path:'/home/swiperInfoTwo/:id',component: swiperInfoTwo,name:'swiperInfoTwo'},
    { path:'/home/swiperInfoThree/:id',component: swiperInfoThree,name:'swiperInfoThree'},
    { path:'/home/swiperInfoFour/:id',component: swiperInfoFour,name:'swiperInfoFour'},
  ],
  linkActiveClass:"mui-active",
  scrollBehavior(to, from, savedPosition) {   // 处理浏览器跳转时回到页面顶部,并记住之前的页面位置
      if (savedPosition) {
          return savedPosition
      }
      return {x: 0, y: 0}
  },
})


// 向外暴露自己 并在index.js中被引用
export default router