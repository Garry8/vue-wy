<template>
  <div class="pho-odiv">
    <!-- 横向滚动的区域 注意如果要获取后台数据的话 就保留一个a标签并更改为vue-resource 并利用插值表达式 methods里的方法 created起始加载 -->
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">推荐</a>
        <a class="mui-control-item">热点</a>
        <a class="mui-control-item">北京</a>
        <a class="mui-control-item">社会</a>
        <a class="mui-control-item">娱乐</a>
        <a class="mui-control-item">科技</a>
      </div>
    </div>

    <!-- 图片展示区  同样需要请求后台数据 先注释-->
    <!-- <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url" />
      </li>
    </ul>-->

    <ul class="img-odiv">
      <!-- 注意这里要指定渲染成li标签,不然会丢掉样式,用tag="li" -->
      <router-link to="/home/photoInfo" tag="li">
        <img src="../../images/10.png" />
        <div class="l-odiv">
          <h1 class="title">深海潜水:冒险者的蓝天</h1>
          <div class="body">不同于浅海中的体验,深海潜水主要应对的是周围环境的变化莫测,随时注意身旁数米远的环境情况,需要多名潜水员互相下潜...</div>
        </div>
      </router-link>

      <li>
        <img src="../../images/20.png" />
        <div class="l-odiv">
          <h1 class="title">伽蓝清晨:云雾之歌</h1>
          <div class="body">伽蓝的清晨仿佛一个活泼跳跃的精灵,在云雾的瞬息万变中翩翩起舞,映照着第一缕阳光,仿佛世界开始重新焕发出生机,与其自然的形象交融...</div>
        </div>
      </li>

      <li>
        <img src="../../images/30.png" />
        <div class="l-odiv">
          <h1 class="title">北欧列国的湖泊之旅</h1>
          <div class="body">远处的风景还未消散,柏刚的小村就已经进入缤纷的夜景之中,很多游客的小艇载着笑容缓缓而归...</div>
        </div>
      </li>

      <li>
        <img src="../../images/40.png" />
        <div class="l-odiv">
          <h1 class="title">火山与星空的交接</h1>
          <div class="body">杜比尔火山石一座古老的火山群之一,北极的星光同样不会忽略这个可爱又莽撞的小孩,静谧的夜空与他来一场不期而遇的握手之礼...</div>
        </div>
      </li>

      <li>
        <img src="../../images/50.png" />
        <div class="l-odiv">
          <h1 class="title">岩石里的世界</h1>
          <div class="body">在这个无声的世界中,充满着一个个安静的生命,他们没有外部世界喧闹,在时间的流逝中静静的谱写着自己的历史...</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 用滚动插件需要导入相关的js文件
import mui from "../../lib/MUI/js/mui.min.js";

export default {
  data() {
    return {};
  },
  mounted() {
    // 初始化滚动的js组件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.pho-odiv {
  // 适配滚动的bug
  * {
    touch-action: pan-y;
  }

  // img[lazy="loading"]{
  //   width: 40px;
  //   height: 300px;
  //   margin: auto;
  // }

  .img-odiv {
    padding: 8px;

    li {
      list-style: none;
      background-color: #ddd;
      margin-bottom: 8px;
      text-align: center;
      position: relative;
      box-shadow: 0 0 4px #999;

      img {
        width: 100%;
        vertical-align: middle;
      }

      .l-odiv {
        color: #fff;
        text-align: left;
        position: absolute;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        max-height: 84px;

        .title {
          font-size: 14px;
        }
        .body {
          font-size: 12px;
        }
      }
    }
  }
}
</style>