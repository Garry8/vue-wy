<template>
  <div class="newSer">
    <div class="topArea">
      <span class="tTitle">最新动态</span>
    </div>

    <li v-for="item in newser" :key="item.id">
      <div class="ltitle">
        <img :src="item.authorimg" />
        <div class="rigText">
          <p class="tpName">{{item.author}}</p>
          <p class="tpText">
            6小时前
            <span>{{item.autotext}}</span>
          </p>
        </div>
      </div>

      <p class="miTitle">{{item.text}}</p>

      <div class="middleText">
        <!-- <vue-preview v-for="item in list" :key="item.src" :slides="item" @close="handleClose"></vue-preview> -->

        <!-- <vue-preview :slides="listOne" @close="handleClose"></vue-preview> -->
        <div class="middWe">
          <img :src="item.oneimg" />
          <img :src="item.twoimg" />
          <img :src="item.threeimg" />
          <img :src="item.fourimg" />
          <img :src="item.fiveimg" />
          <img :src="item.siximg" />
        </div>
      </div>

      <div class="bRight">
        <div class="brTitle">
          <span>{{item.seeTimes}}</span>
          <b>浏览</b>
        </div>
        <div class="brTitle">
          <span>{{item.likeTimes}}</span>
          <b>喜欢</b>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.yid,
      newser: [],
      list: [],
      listOne: [],
      listTwo: [],
      listThree: [],
    };
  },
  mounted() {
    this.getnewText();
    // this.getnewOneText();
  },
  methods: {
    handleClose() {
      console.log("close event");
    },
    getnewText() {
      this.$http
        .get("http://localhost:8080/getDateTwo/PineServlet")
        .then(result => {
          if (result.status === 200) {
            this.newser = result.data;

            for (var i = 0; i < this.newser.length; i++) {
              var one = this.newser[i].oneimg;
              var two = this.newser[i].twoimg;
              var three = this.newser[i].threeimg;
              var four = this.newser[i].fourimg;
              var five = this.newser[i].fiveimg;
              var six = this.newser[i].siximg;

              // 将第i个变量push进去
              this.list.push([
                { src: one, w: 600, h: 400, msrc: one },
                { src: two, w: 600, h: 400, msrc: two },
                { src: three, w: 600, h: 400, msrc: three },
                { src: four, w: 600, h: 400, msrc: four },
                { src: five, w: 600, h: 400, msrc: five },
                { src: six, w: 600, h: 400, msrc: six }
              ]);
            }
            this.listOne = this.list[0];
            this.listTwo = this.list[1];
            this.listThree = this.list[2];
          } else {
            Toast("获取数据失败");
          }
        });
    }
    // getnewOneText() {
    //   this.$http
    //     .get("http://localhost:8080/getDateTwo/oImgServlet")
    //     .then(result => {
    //       if (result.status === 200) {
    //         result.data.forEach(item => {
    //           (item.w = 600), (item.h = 400), (item.msrc = item.src);
    //         });
    //         this.list = result.data;
    //       } else {
    //         Toast("获取数据失败");
    //       }
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.newSer {
  // height: 420px;  // 这个高度不用给,v-for循环可以自适应高度的,相反给了的话就会出现定位的问题
  background-color: #fff;
  margin-top: 10px;

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    display: block;
    margin: 6px 0 4px;
    background-color: #fff;
  }

  .topArea {
    width: 94%;
    margin: 0 auto;
    padding-top: 6px;
  }

  .tTitle {
    margin: 4px;
    font-size: 18px;
    font-weight: 800;
    color: #333;
  }

  .ltitle {
    width: 94%;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;

    .rigText {
      p {
        margin: 0 10px;
      }
      .tpName {
        font-size: 15px;
        color: #666;
      }
      .tpText {
        font-size: 12px;
        color: #9999;

        span {
          padding-left: 8px;
          color: limegreen;
        }
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      // background: url("../../images/50.png");
    }
  }

  .miTitle {
    width: 92%;
    margin: 4px auto;
    padding-top: 10px;
    color: #333;
    font-weight: 600;
  }

  // .middleText {
  //   /deep/ .my-gallery {
  //     //deep深层作用选择器
  //     display: flex;
  //     flex-wrap: wrap; //默认换行
  //     justify-content: center;

  //     width: 98%;
  //     margin: 4px auto;

  //     figure {
  //       width: 31%;
  //       margin: 2px;
  //       img {
  //         width: 100%;
  //         border-radius: 5px;
  //       }
  //     }
  //   }
    // }

    .middWe{
      // width: 98%;
      margin: 12px 0 0 12px;

      img{
        width: 31%;
        margin: 2px 1px;
        vertical-align: middle;
        border-radius: 5px;
      }

    }
  

  .bRight {
    width: 92%;
    margin: 0 auto;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
  }

  .brTitle {
    font-size: 12px;
    margin: 2px 3%;

    span {
      padding-right: 4px;
      color: #ffc90e;
    }

    b {
      color: #333;
    }
  }
}
</style>