# 这个是初始的练习



待整理的内容  
√ 1.状态图标3个 分别是  星选--星游--星记
  2.设置图标   分别是  首页--个人管理
√ 3.banner图   分别是  首页第一推荐的banner  第二推荐的B  第三推荐的B
  4.需要的广告资料图   分别是    星选游记旅游相关的图片
√ 5.logo叫做星选游
  6.排版所涉及的装饰小图标






# 简单介绍一下代码的结构流程
# 1.首先是在index.html中调用将index.js打包好的bundle.js
entry: path.join(__dirname,'./src/index.js'),
  output: { 
    path: path.join(__dirname, './dist'), 
    filename: 'bundle.js' 
  },

# 2.然后在index.js导入App.vue,并使用render函数渲染到根路径的<div id="app"> 中
import App from './App.vue'
render: c => c(App),

# 3.在App.vue中主要分为头部/内容/底部区域  头部区域是顶部固定的导航栏  内容区域是展示版块-单页面展示  底部区域是底部选项栏  重点放在body区域,所以容器也放在这个里面<router-view></router-view>
 head 头部区域
 body 内容区域  <router-view></router-view>
 footer 底部区域 

# 4.底部选项栏中点击home标签 ,由router.js中设置好的路由跳转到homeCon的组件中 homeCon.vue的组件中有轮播图区域,还有图标的宫格区域 ,图标宫格区点击新闻图标 ,由router.js中设置好的路由跳转到newsList的组件中, newsList.vue的组件中根据vue-resource(类似Ajiax)请求后台API接口文档中的数据,并用v-for="item in newsList"循环 展示在newsList.vue的组件页面的列表中
  path:'/home', component: home 
 import newsList from './components/news/newsList.vue'
 v-for="item in newsList"
 path:'/home/newsList', component: newsList
 

# 5.在 newsList.vue的列表中有很多数据 ,先获取点击一条数据的id值,然后路由到该id值对应的newsinfo.vue详情页面
router-link :to="'/home/newsInfo' + item.id
path:'/home/newsInfo/:id', component: newsInfo


## 利用 concat 方法来拼接数据 例如将数据接收后拼接 再赋给comments 
this.comments = this.comments.concat( result.body.message )

## 发表评论
+ 1.首先在testarea输入框中进行双向数据绑定 v-model="msg" 
+ 2.然后在data里面定义 msg 为空 msg:''
+ 3.当用户填写好发表内容时候,点击达标评论的按钮时,在按钮绑定一个提交数据的方法 @click= "postCom"
+ 4.在method 中定义这个提交的方法,注意核心思想是将用户输入的内容用unshift方法添加在数据表格的第一条
+ 5.在写方法的时候注意要检验数据是否为空
+ 6.post请求要全局配置参数
+ 详见images图片里流程图5

## 引用mui的横向滚动切换栏slider时
+ 1.导入js文件import mui from "../../lib/MUI/js/mui.min.js";
+ 2.初始化js组件 并将它放在生命周期中最后一个  mounted()函数中
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
+ 2.去掉html代码片段中的mui-fullscreen属性
+ 3.去除webpack中的严格模式,终端中装包 cnpm install babel-plugin-transform-remove-strict-mode -D
+ 4.加上样式 chrome中独有的* {
  touch-action: pan-y;
}
+ 5.横向滚动切换栏与底部导航栏出现样式污染,需要手动将底部导航栏的样式进行重新粘贴并更改属性名字
