<template>

    <div class="sw-pic">
      <scroll class="scCont" ref="scroll">
        <swiper :lunboList="lunboList"></swiper>

        <!-- 图标宫格区 -->
        <div class="iconArea">
          <!-- LOGO区域  因Logo单独放在外层区域会造成页面跳转的问题-->
          <div class="topLogo"></div>
          <div class="iconDi">
            <router-link to="/home/shopList">
              <div class="xingAre">
                <img src="../../images/xing-1.png" />
                <p>星选</p>
              </div>
            </router-link>
            <div class="xingAre">
              <img src="../../images/you-1.png" />
              <p>星游</p>
            </div>
            <div class="xingAre">
              <img src="../../images/ji-1.png" />
              <p>星记</p>
            </div>
          </div>
        </div>

        <!-- 热度一 -->
        <router-link to="/home/newsInfo">
          <hotOne :hotOneText="hotText"></hotOne>
        </router-link>

        <!-- 热度二 -->
        <hotSec :hotTwoText="hotText"></hotSec>

        <!-- 热度三 -->
        <hotThir :hotThirdText="hotText"></hotThir>

        <!-- 热度表 -->
        <hotLi :hotListText="hotText"></hotLi>

        <!-- 列表图 -->
        <newSer></newSer>
        <newSor></newSor>
        <newSpr></newSpr>
        <div class="end">我是有底线的</div>
      </scroll>

       <div class="backTop" @click="backTop"></div>
    </div>
  
</template>

<script>
// 导入mui中的弹窗提示组件 主要是用于vue-resource请求失败的弹窗提醒
import { Toast } from "mint-ui";
import scroll from "../common/scroll.vue"

import swiper from "../subcomponents/swipe.vue";
import hotOne from "../home-com/hotOne.vue";
import hotSec from "../home-com/hotSec.vue";
import hotThir from "../home-com/hotThir.vue";
import hotLi from "../home-com/hotListAll.vue";
import newSer from "../home-com/newSer.vue";
import newSor from "../home-com/newSor.vue";
import newSpr from "../home-com/newSpr.vue";

export default {
  data() {
    return {
      // scroll: null,
      lunboList: "",
      hotText:"",
    };
  },

  created() {
    this.getLunbo();
    this.getHotText();
    this.$bus.$on('imgload',() =>{
      this.$refs.scroll.scrollHeight = 600
    })
  },
  methods: {
    getLunbo() {
      // 从接口中获取轮播图的数据
      this.$http
        .get("http://localhost:8080/getDataOne/dataServlet001")
        .then(result => {
          if (result.status === 200) {
            this.lunboList = result.data;
          } else {
            Toast("获取数据失败");
          }
        });
    },
    getHotText() {
      this.$http
        .get("http://localhost:8080/getDataOne/hotListServlet")
        .then(result => {
          if (result.status === 200) {
            this.hotText = result.data;
          } else {
            Toast("获取数据失败");
          }
        });
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
  },
  components: {
    hotOne,
    hotSec,
    hotThir,
    hotLi,
    swiper,
    newSer,
    newSor,
    newSpr,
    scroll,
  }
};
</script>

<style lang="scss" >
// 页面F12查找到的.class元素, 并设置该样式
.sw-pic {
  position: fixed;
  top:0;
  right: 0;
  left:0;
  bottom:50px;

  .topLogo {
    z-index: 12;
    width: 120px;
    height: 50px;
    position: absolute;
    top: -255%;
    left: 50%;
    transform: translateX(-50%);
    // background-color: #fff;
    background: url("../../images/logo.png");
  }

  .iconArea {
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    border-radius: 6px;
    margin: 0 auto;
    background-color: #fff;

    .iconDi {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        list-style: none;
        margin: 0 30px;
        width: 80px;
        height: 64px;
        // background-color: tan;
      }

      p{
        font-size: 12px;
      }
    }
  }

  // .hotOne{
  //   width: 94%;
  //   height: 160px;
  //   border-radius: 6px;
  //   margin: 40px auto 0;
  //   background-color:lightblue;
  // }

  .hotList {
    width: 94%;
    height: 100px;
    border-radius: 6px;
    margin: 10px auto;
    background-color: lightpink;
  }

  .xingAre {
    position: relative;

    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
      margin-top: 6px;
    }

    p {
      position: absolute;
      left: 50%;
      top: 62%;
      transform: translateX(-50%);
      font-size: 12px;
    }
  }

  .scCont{
    height: 100%;
    overflow: hidden;
  }

  .end{
      padding: 8px;
      text-align: center;
      color: #ccc;
      font-size: 14px;
    }

    .backTop{
  width: 50%;
  margin: 0 auto;
  height: 20px;
  opacity: 0;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 28;
  
}
}
</style>