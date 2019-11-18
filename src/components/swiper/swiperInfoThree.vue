<template>
  <div class="swipIn">
    <scroll class="scCont" ref="scroll">
      <img class="topimg" src="../../images/009.jpg" alt />

      <div class="nIyu">
        <div class="nItg">
          塞纳河左岸到莱茵河畔古堡，12日浮光掠影...
          <p>畅游在古老文明的城市,它浓郁的艺术气息从莱茵河畔流淌到塞纳河边,它的从容是诗、是画、是流动的音乐</p>
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
            <span class="pure">海上云nn</span>
            <span class="throp">3.2万推荐></span>
          </div>
        </div>
      </div>

      <div class="oneCont">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;在法国王室生活气息浓厚的地区，森林遍地，盛产木材、葡萄酒，法国历代的国王、贵族在卢瓦尔河谷打造了一座又一座度假用的狩猎宫殿，甚至还不时举朝迁移至此。其中，香波堡是文艺复兴时期的集大成之作。</p>
        <img class="conimg" src="../../images/2-1.jpg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;香波城堡</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;香波城堡距巴黎一个半小时的车程，半路上便能远远地瞥见她白色的身影，渐近渐清的视觉享受会给您留下更加深刻的印象，日落时分的香波堡景色更美。香波堡是弗朗索瓦一世的绝世佳作，代表了他对梦想的执着和对艺术及奢华的热爱，巨大的白色城堡精雕细刻，周身共有365个壁炉，尖塔和钟楼直冲云霄，以示永恒。</p>
        <img class="conimg" src="../../images/2-2.jpg" alt />
        <img class="conimg" src="../../images/2-3.jpeg" alt />
        <img class="conimg" src="../../images/2-4.jpeg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;舍农索城堡</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;舍农索城堡建在谢尔河河床上一个老磨坊的两座石墩上。该城堡自1535年后就属于王室领地，它接受了革命战火的洗礼，里面的奇珍异宝流入黑市。如果说卢瓦河谷至壮观的城堡属香波堡，那么至美丽的城堡便该是水上城堡舍农索。</p>
        <img class="conimg" src="../../images/2-5.jpg" alt />
        <img class="conimg" src="../../images/2-6.jpg" alt />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;如果没有打卡执念，只能在香波堡跟舍农索选一个的话，我推荐舍农索。那里更美丽更有韵味更像属于公主和王子的城堡。我们从停车场往里走，大树蔽日，小黑鸭追光戏水，满眼绿色。林荫大道两旁的小屋子也是迷人至极，还没近身城堡已然贪恋美景不肯罢休了 城堡入口处一对狮身人面像，再往前，蓝天白云下，有一座美丽的城堡.</p>
        <img class="conimg" src="../../images/2-11.jpeg" alt />
        <img class="conimg" src="../../images/2-12.jpeg" alt />
        <img class="conimg" src="../../images/2-13.jpeg" alt />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;莫奈花园</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;1883年4月底画家莫奈乘火车经过小镇的时候，被那里的宁静氛围所深深吸引，于是决定在此定居。1890年，莫奈在吉维尼购置了自己的家，并且掘池种植睡莲。</p>
        <img class="conimg" src="../../images/2-7.jpg" alt />
        <img class="conimg" src="../../images/2-8.jpg" alt />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;在他的故居，原封不动地陈放着他的收藏品、各式居家用品等等。站在窗口放眼望去，是大师一百多年前，自己设计和打理的园子，充满了野趣，那五彩缤纷的色调，仿佛落入人间的调色板。</p>
        <img class="conimg" src="../../images/2-9.png" alt />
        <img class="conimg" src="../../images/2-10.jpeg" alt />

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
    width: 100%;
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