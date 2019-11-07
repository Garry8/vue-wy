<template>
  <div class="newsListo">
    <!-- <h3>这是newList页面的内容</h3> -->

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" >
        <router-link to="/home/newsInfo">
          <img class="mui-media-object mui-pull-left" src="" />
          <div class="mui-media-body">
            <p class="pure">幸福</p>
            <p class="mui-ellipsis">
              <span>发表时间: 2022-12-12  12:12:12</span>
              <span>点击:9次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media" >
        <router-link to="/home/newsInfo">
          <img class="mui-media-object mui-pull-left" src="" />
          <div class="mui-media-body">
            <p class="pure">秋天的凉风</p>
            <p class="mui-ellipsis">
              <span>发表时间: 2022-12-12  12:12:12</span>
              <span>点击:3次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>

    <!-- 无API接口 先注释 1/4 -->
    <!-- 将得到的newsList[]数组中的数据进行循环遍历展示到li中,再由router-link跳转到newsInfo页面 获得到这个item的id  -->
    <!-- <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <p>{{ item.title }}</p>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.add_time | dateFormat('YYYY-MM-DD') }} }}</span>
              <span>点击:{{ item.click}} 次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul> -->

  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // <!-- 无API接口 先注释 2/4 -->
      // newsList: []
    };
  },

  // <!-- 无API接口 先注释 3/4 -->
  // created() {
  //   // 声明周期中的第一步
  //   this.getNewsList();
  // },

  methods: {
    //  <!-- 无API接口 先注释 4/4 -->
    //  获得后台API接口中的新闻文档数据方法,并将读取到的数据赋给newsList[]数组
    // getNewsList() {
    //   this.$http.get("").then(result => {
    //     if (result.body.status === 0) {
    //       this.newsList = result.body.message;
    //     } else {
    //       Toast("获取信息失败...");
    //     }
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
.newsListo{
  margin-top: 40px;

  .mui-table-view {
    li {
      .pure {
        font-size: 14px;
        color: lightsalmon;
      }
    }

    .mui-ellipsis {
      font-size: 12px;
      color: darkgray;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>