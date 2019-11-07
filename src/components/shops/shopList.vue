<template>
  <div class="s-list">
    <!-- <h3>这是shop页面的内容</h3> -->

    <div class="s-Item">
      <img src="../../images/bx.png" alt />
      <h1 class="title">小米烘干机</h1>
      <div class="info">
        <p class="price">
          <span class="now">2999</span>
          <span class="old">3999</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下60件</span>
        </p>
      </div>
    </div>

    <div class="s-Item">
      <img src="../../images/dgd.png" alt />
      <h1 class="title">小米录音器</h1>
      <div class="info">
        <p class="price">
          <span class="now">199</span>
          <span class="old">299</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下18件</span>
        </p>
      </div>
    </div>

    <div class="s-Item">
      <img src="../../images/ghd.png" alt />
      <h1 class="title">小米剃须刀</h1>
      <div class="info">
        <p class="price">
          <span class="now">169</span>
          <span class="old">269</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下12件</span>
        </p>
      </div>
    </div>

    <div class="s-Item">
      <img src="../../images/kf.png" alt />
      <h1 class="title">小米饮水机</h1>
      <div class="info">
        <p class="price">
          <span class="now">699</span>
          <span class="old">899</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下45件</span>
        </p>
      </div>
    </div>

    <div class="s-Item">
      <img src="../../images/mt.png" alt />
      <h1 class="title">小米马桶</h1>
      <div class="info">
        <p class="price">
          <span class="now">1999</span>
          <span class="old">2599</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下96件</span>
        </p>
      </div>
    </div>

    <div class="s-Item">
      <img src="../../images/rqz.png" alt />
      <h1 class="title">小米燃气灶</h1>
      <div class="info">
        <p class="price">
          <span class="now">1699</span>
          <span class="old">1899</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下60件</span>
        </p>
      </div>
    </div>

    <div class="s-Item">
      <img src="../../images/ssh.png" alt />
      <h1 class="title">小米烧水壶</h1>
      <div class="info">
        <p class="price">
          <span class="now">99</span>
          <span class="old">129</span>
        </p>
        <p class="sell">
          <span class="now">热卖中</span>
          <span class="old">剩下120件</span>
        </p>
      </div>
    </div>

   
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.s-list {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;

  .s-Item {
    width: 49%;
    border: 1px solid #e2e2e2;
    box-shadow: 1px 1px 10px #e2e2e2;
    margin: 4px 0;

    img {
      width: 100%;
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      padding: 4px 0 0 4px;
    }

    .info {
      p{
        margin: 0;
        padding:2px 4px;
      }

      .price{
        .now{
          font-size: 16px;
          color: red;
          font-weight: 600;
          padding: 2px 6px 0 0;
        }

        .old{
          font-size: 12px;
          color: #cccccc;
          text-decoration: line-through;
        }
      }

      .sell{
        font-size: 12px;
        display: flex;
        justify-content: space-between;

        .now{
          color: lightcoral;
        }
      }
    }
  }
}
</style>