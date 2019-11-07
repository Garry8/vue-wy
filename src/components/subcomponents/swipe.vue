<template>
  <div>
    <!-- home页面中的轮播图插件 4秒一张 这个引用的是Mint-UI的框架 -->
    <div class="swipeDiv">
      <mt-swipe :auto="3000">
      <!-- 无API接口 先注释 1/4 -->
      <!-- 用v-for去循环请求后台得到的值的lunboList ,然后在通过for循环一个个显示 因取不到http后台的值 就注释了 -->
      <mt-swipe-item  v-for="item in lunboList" :key="item.id"> 
        <!-- <router-link :to="'/home/swiperInfoOne/' + item.nid" > -->
          <img @click="gotoPage(item.id)" :src="item.imgurl" alt="">
        <!-- </router-link> -->
      </mt-swipe-item>
    </mt-swipe>
    </div>
    
  </div>
</template>

<script>
export default {
  props:["lunboList"],
  data() {
    return {
      id:this.$route.params.id,
    }
  },
  methods: {
    gotoPage(id){
      if( id == 1){
        this.$router.push({name:"swiperInfoOne",params:{ id }})
      }else if(  id == 2 ){
        this.$router.push({name:"swiperInfoTwo",params:{ id }})
      }else if(  id == 3 ){
        this.$router.push({name:"swiperInfoThree",params:{ id }})
      }else if(  id == 4 ){
        this.$router.push({name:"swiperInfoFour",params:{ id }})
      }
        
      },
    }
  }

</script>

<style lang="scss" scoped>
.swipeDiv{
  width: 100%;
  height: 200px;
  border-radius: 0 0 200px 200px/0 0 20px 20px;

  .mint-swipe, .mint-swipe-items-wrap, .mint-swipe-items {
     // 轮播图高220px
    // height: 200px;
    border-radius: 0 0 200px 200px/0 0 20px 20px;

  .mint-swipe-item {
       // scss的样式写法 这里是写的轮播图里的样式 是CSS的拓展写法 第一个子元素 第二个子元素 第三个子元素
      &:nth-child(1) {
        background-color: red;
      }

      &:nth-child(2) {
        background-color: blue;
      }

      &:nth-child(3) {
        background-color: cyan;
      }

      &:nth-child(4) {
        background-color: tan;
      }

      img{
        width: 100%;
      }

    }

  }

  .mint-swipe-indicators{
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
    }


}
</style>