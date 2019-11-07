<template>
  <div class="p-Info">
    <!-- <h3>这是pgotoInfo页面的内容</h3> -->
    <div class="n-Iyu">
      <div class="n-Itg">
        深海潜水:冒险者的蓝天
        <p>自媒体:#海里的弯儿</p>
      </div>
      <div class="n-Ireg"></div>
    </div>

    <div class="n-Iuh">
      <div class="n-Ifo">
        <img class="n-Itub" src="../../images/010.png" />
        <span class="pure">潜水爱好者</span>
        <span class="thr-op">10.2万推荐></span>
      </div>
    </div>

    <img src="../../images/10.png" />
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .p-Info{

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

  .n-Ireg {
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
      line-height: 26px;
    }
  }
  }
</style>