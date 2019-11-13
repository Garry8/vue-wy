<template>
  <div class="appCont">
    <!--  head头部区域 -->
    <!-- 顶部的导航栏 -->
    <div class="h-con" v-show="flag">
      <mt-header fixed title v-show="true"></mt-header>
      <p @click="getBack()">〈 返回</p>
    </div>

    <!-- body内容区域 -->
    <!-- 中间的视图区 -->
    <transition>
      <!-- <scroll class="scCont"> -->
        <router-view></router-view>
      <!-- </scroll> -->
    </transition>

    <!-- footer 底部区域 -->
    <!-- 底部的导航栏 -->
    <nav class="mui-bar mui-bar-tab" v-show="Tflag">
      <router-link class="mui-tab-item-ww" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-item-ww" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
// import scroll from './components/common/scroll.vue'

export default {
  data() {
    return {
      scroll: null,
      flag: false,
      Tflag: true
    };
  },
  created() {
    // this.$store.state.boolnum = 0
    this.flag = this.$route.path === "/home" ? false : true;
    this.Tflag = this.$route.path !== "/home" ? false : true;
  },
  methods: {
    getBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home" || newVal === "/vip") {
        (this.flag = false), (this.Tflag = true);
      } else {
        (this.flag = true), (this.Tflag = false);
      }
    }
  },
  // components:{
  //   scroll
  // },
};
</script>


<style lang="scss" scoped>
.mint-header {
  // background-color:#eee;
  z-index: 20;
}
// 中间显示区域body
.appCont {
  height: 100%;
  position: relative;
  // padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

//给包裹的router-view加进场动画
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

//给包裹的router-view加出场动画
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

// 进场动画和出场动画的类型
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

// 处理滑块滑动的样式污染bug
.mui-bar-tab .mui-tab-item-ww.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-ww {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-ww .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-ww .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.h-con {
  p {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 21;
    color: #fff;
  }
}

// .scCont{
//   height: 1000px;
// }
</style>