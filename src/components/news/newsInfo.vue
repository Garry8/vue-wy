<template>
  <div class="n-Info">
    <!-- <h3>这是newsinfo页面的内容</h3> -->
    <div class="n-Iyu">
      <div class="n-Itg">
        {{mainList && mainList[0].oneTitle}}
        <p>{{mainList && mainList[0].lessTitle}}</p>
      </div>
      <span class="bTag">星游精选</span>
    </div>

    <div class="n-Iuh">
      <div class="n-Ifo">
        <img class="n-Itub" src="../../images/010.png" />
        <span class="pure">{{mainList && mainList[0].author}}</span>
        <span class="thr-op">{{mainList && mainList[0].seeTimes}}万推荐></span>
      </div>
    </div>

    <img class="n-Ione" :src="mainList && mainList[0].img" />
    <!-- <img class="n-Ione" src="../../images/10241.png" /> -->


    <div class="cont-mes">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;据了解，8月中下旬开始，广州昌岗朝圣一带的环卫工人发现，周边河涌里有很多共享单车，疑似是被人故意扔下去的。环卫工人们将单车打捞上来，并告知了昌岗街朝圣居委会。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;扔了一次之后，李某并未作罢，又于半夜扔车进河涌。根据后来环卫工人的打捞情况，李某至少扔了近90辆共享单车，每次有几十辆。接到环卫工人的反馈后，街道居委会把情况反馈至昌岗派出所，并提供了监控影像资料。警方随即加强了对附近一带的巡逻，还在河涌旁蹲守，终于在近日，将试图第4次扔共享单车进河涌的李某抓获。据环卫工人袁师傅介绍，自共享单车出现以来，单车被人为扔入或不慎掉入河涌的现象虽然时有发生，但是就其所负责的区域来看，还未出现如此严重的状况。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;哈啰出行方面表示，扔共享单车进入河涌是违法行为，希望更多人向环卫工人学习，也为他们着想，不做如此损人不利己的事情。</p>
    </div>

    <div class="end">-THE END-</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$router.params.id,  // 将url地址中传递过来的id值,挂载到data身上  注意这里的$rou不行就换成$router :id就用这种 如果是?id 就用query
      mainList:"",
    };
  },
  created() {
    this.getMainText();
  },
  methods: {
    getMainText(){
      this.$http
        .get("http://localhost:8080/getDateTwo/mainTextServlet")
        .then(result => {
          if (result.status === 200) {
            this.mainList = result.data;
          } else {
            Toast("获取数据失败");
          }
        });
    }
  },
};
</script>

<style lang="scss" >
.n-Info {
  margin-top: 40px;
  background-color: #fff;

  .n-Iyu {
    width: 100%;
    display: inline-block;
    position: relative;
  }

  .n-Itg {
    float: left;
    font-size: 18px;
    font-weight: 700;
    color: #191919;
    padding: 4% 4% 0;
    letter-spacing: 0.5px;

    p {
      font-size: 12px;
      font-weight: 300;
      color: #999;
    }
  }

  .bTag {
    font-size: 12px;
    margin-right: 6px;
    color: #ffc90e;
    border: 1px solid #ffc90e;
    border-radius: 4px;
    float: right;
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
  }

  .n-ItopTu {
    width: 92%;
    margin: 0 auto;
    height: 60px;
    border: 1px solid #ccc;
  }

  .n-Ione {
    width: 100%;
    height: 260px;
  }

  .n-Iuh {
    width: 90%;
    height: 50px;
    margin: 0 auto 4%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 10px #e2e2e2;
    position: relative;
  }

  .n-Ifo {
    width: 96%;
    line-height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .n-Itub {
    width: 40px;
    height: 40px;
  }

  .pure {
    color: rgb(150, 190, 216);
    font-weight: 400;
    font-size: 14px;
  }

  .thr-op {
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: rgb(194, 194, 194);
  }

  .cont-mes {
    padding: 2% 4%;
    p {
      margin: 10px;
      line-height: 24px;
      font-size: 14px;
      color: #444;
      word-break: break-word;
    }

  }
    .end{
      padding: 10px;
      text-align: center;
      color: #ccc;
    }
}
</style>