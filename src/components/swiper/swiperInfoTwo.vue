<template>
  <div class="swipIn">
    <img class="topimg" src="../../images/008.png" alt />

    <div class="nIyu">
      <div class="nItg">
        爱丁堡大学的交换生体验之旅...
        <p>大不列颠及北爱尔兰联合王国之星</p>
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
          <span class="pure">Asce13</span>
          <span class="throp">3.1万推荐></span>
        </div>
      </div>
    </div>

    <div class="oneCont">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;想来好久没有写东西了，从爱丁堡大学回来的日子也都浑浑噩噩，不如试着写一篇游记吧，记录着一段美好的时光。（本人讲话写字时常有语病，写出来也是流水流水，亦不喜亲自卖萌，故更加可恶，大家谅解，看看图就好了）</p>
      <img class="conimg" src="../../images/1-1.jpeg" alt />
      <b>&nbsp;&nbsp;&nbsp;&nbsp;宿舍单人间</b>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;住进去就溜出来了，随手查了个音乐演出，在城堡附近，我也不知道怎么走，反正就是乱走。最后问了路也没找到，不过也只是想出来感受下气氛。大雾天，略有些潮湿，我只穿了一件衬衫，略显单薄。气温大概在二十度以下吧，想来还是naive了一点，以为最冷就二十度呗。对爱丁堡的第一印象也就是清清冷冷，道路似有无边的尽头，统一的建筑风格让人印象深刻也让人走投无路。偶尔掠过的车辆闪着黄灯，提醒我这里不是中世纪。冷风中，我只能缩紧骨骼，感受扑面的粉粉雨点。</p>
      <img class="conimg" src="../../images/1-3.jpeg" alt />
      <img class="conimg" src="../../images/1-4.jpeg" alt />
      <b>&nbsp;&nbsp;&nbsp;&nbsp;爱丁堡大学</b>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;学校就在皇家一英里上面，蛮中心的，星期三下午恰是放假，就溜到卡尔顿山Calton Hill了。山上风景着实不错，基本可以俯瞰整个爱丁堡城，虽未是爱丁堡最高峰亚瑟王座，可山上更多人文建筑，配上原方延绵的建筑，壮阔非凡。</p>
      <img class="conimg" src="../../images/1-5.png" alt />
      <img class="conimg" src="../../images/1-6.jpeg" alt />
      <img class="conimg" src="../../images/1-7.jpeg" alt />
      <p>&nbsp;&nbsp;&nbsp;&nbsp;大学里的图书馆</p>
      <img class="conimg" src="../../images/1-8.jpeg" alt />
      <img class="conimg" src="../../images/1-9.jpeg" alt />
      <p>&nbsp;&nbsp;&nbsp;&nbsp;艺术节期间,爱丁堡大学沸腾了。</p>
      <img class="conimg" src="../../images/1-10.jpeg" alt />
      <img class="conimg" src="../../images/1-11.jpeg" alt />
      <img class="conimg" src="../../images/1-12.jpeg" alt />
      <p>&nbsp;&nbsp;&nbsp;&nbsp;不知不觉已经到了吃饭的时间,这里的美食一样没让人失望。</p>
      <img class="conimg" src="../../images/1-13.jpeg" alt />
      <p>&nbsp;&nbsp;&nbsp;&nbsp;城市的街道十分干净,但天气一样不作美,微微的小雨夹杂着寒风,有一点让人觉得寒冷.。</p>
      <img class="conimg" src="../../images/1-15.jpeg" alt />
      <img class="conimg" src="../../images/1-16.jpeg" alt />
      <img class="conimg" src="../../images/1-14.jpeg" alt />
      
      
      <div class="end">-THE END-</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.swipIn {
  margin-top: 40px;
  // padding-bottom:0; 
  background-color: #fff;

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
    b{
      color:rgb(16, 208, 214);
    }
    .conimg{
      padding:6px;
      border-radius: 12px;
      width: 100%;
       height: 240px;
    }
    .end{
      padding: 10px;
      text-align: center;
      color: #ccc;
    }
  }
}
</style>