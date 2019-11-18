<template>
  <div class="swipIn">
    <scroll class="scCont" ref="scroll">
      <img class="topimg" src="../../images/007.png" alt />

      <div class="nIyu">
        <div class="nItg">
          北欧迷人海岸线:风景如画一般,令人陶醉...
          <p>怡人的风景,是一道亮丽的光线</p>
          <div>
            <span class="bTag">星游精选</span>
            <span class="boTitle">星选精选</span>
          </div>
        </div>
      </div>

      <div class="bitTag">
        <div class="nIuh">
          <div class="nIfo">
            <img class="nItub" src="../../images/010.png" />
            <span class="pure">maomao8</span>
            <span class="throp">3.6万推荐></span>
          </div>
        </div>
      </div>

      <div class="oneCont">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;今天从Hvolsvollur出发，终点是南部海岸Vik镇。因为昨天抢出来一点时间，今天又没有预订付费项目，时间安排就比较宽裕，游览地点相对可以更加深入细致。</p>
        <img class="conimg" src="../../images/0-01.jpg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;塞里雅兰(Seljalandsfoss)瀑布后的水帘洞</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;丰盛的早餐过后,我们一行来到了位于GPS位置 N63.614542 W19.994711. 这是一个瀑布群 - 间隔比较大而已。瀑布附近是个自助收费的停车场 - 如果再往北500米左右，在一个campsite沿路有一个空地可以免费停车。</p>
        <img class="conimg" src="../../images/0-011.jpg" alt />
        <img class="conimg" src="../../images/0-02.jpg" alt />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;300米外隐藏在岩石中的一处瀑布。</p>
        <img class="conimg" src="../../images/0-022.jpg" alt />
        <img class="conimg" src="../../images/0-03.jpg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;Rutshellir Cave</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;这是一处对外开放的历史遗迹 - 标识牌旁的栅栏门是关闭的，你需要拨开门栓开门进去，记得进去后把门栓插回去。这个遗迹可以追溯到岛上最初的岩穴居民 - 周围山腰石壁周围有几百处人工开凿的岩洞，据说是原住民经营南面的农场时居住的地方，后来曾作为锻造工具的车间和庙宇。GPS位置 N63.5226327 W19.574869</p>
        <img class="conimg" src="../../images/0-05.jpg" alt />
        <img class="conimg" src="../../images/0-06.jpg" alt />
        <img class="conimg" src="../../images/0-07.jpg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;迪霍拉里 Dyrholaey</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;下面就是Kirkjufjara 黑沙滩， 和这里隔水相望。第二天下午我们在黑沙滩看这边，黑沙滩上这个孤零零的岩石不见了踪影 - 想来还是视角的问题吧，从沙滩那端看过来不明显了。</p>
        <img class="conimg" src="../../images/0-08.jpg" alt />
        <img class="conimg" src="../../images/0-09.jpg" alt />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;门洞石海岬</p>
        <img class="conimg" src="../../images/0-10.jpg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;Vik镇</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;晚上8点赶到Vik，从Guesthouse Gelleri房间里望出去，小镇上的红顶教堂在夕阳下很鲜亮。旅馆实际上是老夫妇俩的 Airbnb ，我们将要在这里住两晚,第一晚看起来是被中国人包了。老太太为我们第二晚需要换房间反复道歉,看看房型和朝向后欣然同意。</p>
        <img class="conimg" src="../../images/0-11.jpg" alt />
        <img class="conimg" src="../../images/0-12.jpg" alt />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;夏天傍晚的圣诞老人。</p>

        <div class="end">-THE END-</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "../common/scroll.vue";
export default {
  components: {
    scroll
  }
};
</script>

<style lang="scss" scoped>
.swipIn {
  height: 100%;
  margin-top: 40px;
  padding-bottom: 50px;
  // padding-bottom:0;
  background-color: #fff;
  .scCont {
    height: 100%;
    // overflow: hidden;
  }
  .topimg {
    height: 240px;
  }

  .nIyu {
    width: 100%;
    display: inline-block;
    position: relative;
  }

  .nItg {
    float: left;
    // width: 96%;

    font-size: 18px;
    font-weight: 700;
    color: #191919;
    padding: 4% 2% 2%;
    letter-spacing: 0.5px;

    p {
      font-size: 12px;
      margin: 6px auto;
      font-weight: 300;
      color: #999;
      margin-bottom: 0;
    }
  }

  .bTag {
    font-size: 12px;
    margin-right: 6px;
    color: #ffc90e;
    border: 1px solid #ffc90e;
    border-radius: 4px;
  }
  .boTitle {
    font-size: 12px;
    margin-right: 6px;
    color: #82d2bf;
    border: 1px solid #82d2bf;
    border-radius: 4px;
  }
  .nIreg {
    float: right;
    width: 30px;
    height: 12px;
    background-color: #808080;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
  }

  .bitTag {
    height: 60px;
  }
  .nIuh {
    width: 90%;
    height: 50px;
    margin: 0 auto 4%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 10px #e2e2e2;
    position: relative;
  }

  .nIfo {
    width: 96%;
    line-height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .nItub {
    width: 40px;
    height: 40px;
  }

  .pure {
    color: rgb(150, 190, 216);
    font-weight: 400;
    font-size: 14px;
  }

  .throp {
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: rgb(194, 194, 194);
  }

  .oneCont {
    p {
      margin: 10px;
      line-height: 24px;
      font-size: 14px;
      color: #444;
      word-break: break-word;
    }
    b {
      color: rgb(16, 208, 214);
    }
    .conimg {
      padding: 6px;
      border-radius: 12px;
      width: 100%;
      height: 240px;
    }
    .end {
      padding: 10px;
      text-align: center;
      color: #ccc;
    }
  }
}
</style>