<template>
  <div class="hotLi">
    <div class="topArea">
      <span class="tTitle">每日新选</span>
    </div>

    <div class="hotSec">
      <img class="bodyImage" :src="hotListText && hotListText[3].imgurl" />
      <img class="bodyImage" :src="hotListText && hotListText[4].imgurl"  />
    </div>

    <div class="hotTitOne">
        <!-- <div class="hotOny"></div> -->
        <img class="hotOny" :src="hotListText && hotListText[3].authorImg" />
        <span>{{ hotListText && hotListText[3].author}}</span>
    </div>

    <div class="hotTitTwo">
        <!-- <div class="hotTwe"></div> -->
        <img class="hotTwe" :src="hotListText && hotListText[4].authorImg" />
        <span>{{ hotListText && hotListText[4].author}}</span>
    </div>

  </div>
</template>

<script>
export default {
  props:["hotListText"],
};
</script>

<style lang="scss" scoped>
.hotLi {
  height: 176px;
  margin-top: 10px;
  background-color: #fff;
  position: relative;

  .topArea {
    width: 94%;
    margin: 0 auto;
    padding-top: 6px;
  }

  .tTitle {
    margin-left: 4px;
    font-size: 18px;
    font-weight: 800;
    color: #333;
  }

  .hotSec {
    width: 94%;
    height: 120px;
    border-radius: 6px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;

    img {
      width: 49%;
      border-radius: 6px;
      background-color: lightsalmon;
    }
  }

  .hotTitOne{
    width: 100%;
    height:20px;
    // background-color: #fff;
    position: absolute;
    left: 4%;
    bottom:12%;
    display: flex;
    

    .hotOny{
      // display: inline-block;
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 10px;
      // background: url("../../images/2011.png");
    }

    span{
      font-size: 12px;
      font-weight: 600;
      padding-left: 8px;
      color: #fff;
      line-height: 20px;
    }
  }

  .hotTitTwo{
    width: 100%;
    height:20px;
    // background-color: #fff;
    position: absolute;
    left: 52%;
    bottom:12%;
    display: flex;

    .hotTwe{
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 10px;
      // background: url("../../images/2022.png");
    }

    span{
      font-size: 12px;
      font-weight: 600;
      padding-left: 8px;
      color: #fff;
      line-height: 20px;
    }
  }
}
</style>