<template>
  <div class="hotTopOne">
    <div class="topArea">
      <span class="tTitle">星选之冠</span>
      <span class="tIma">No.1</span>
    </div>

    <img class="bodyImage" :src="hotOneText && hotOneText[0].imgurl"  />

    <div class="bottleArea">
      <div class="bLeft">
        <img class="bAuthorIma" :src="hotOneText && hotOneText[0].authorImg">
        <span class="bTitle">{{hotOneText && hotOneText[0].author}}</span>
        <span class="bTag">星游精选</span>
      </div>

      <div class="bRight">
        <span class="brTitle">
          <span>{{hotOneText && hotOneText[0].seeTimes}}</span><b>浏览</b>
        </span>
        <span class="brTitle">
          <span>{{hotOneText && hotOneText[0].likeTimes}}</span><b>喜欢</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["hotOneText"],
};
</script>

<style lang="scss" scoped>
.hotTopOne {
  height: 260px;
  background-color: #fff;

  .topArea {
    width: 94%;
    margin: 44px auto 0;
    height: 40px;
    // background-color: tan;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tTitle {
    padding-left: 4px;
    font-size: 18px;
    font-weight: 800;
    color: #333;
  }

  .tIma {
    font-size: 12px;
    text-align: center;
    color: #fff;
    margin-right: 10px;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    background-color: #ffc90e;
  }

  .bodyImage {
    width: 94%;
    display: block;
    margin: 0 auto;
    height: 180px;
    border-radius: 6px;
    // background-color: lightblue;
    // background: url("../../images/hotone.png");
  }

  .bottleArea {
    width: 94%;
    margin: 0 auto;
    height: 40px;
    // background-color: tan;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bLeft {
    display: flex;
    align-items: center;
  }

  .bAuthorIma {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: lightgreen;
    border-radius: 10px;
    // background: url("../../images/haid.png");
  }

  .bTitle {
    font-size: 12px;
    padding-left: 6px;
    font-weight: 600;
    color: #333;
  }

  .bTag {
    font-size: 12px;
    margin-left: 10px;
    color: #ffc90e;
    border: 1px solid #ffc90e;
    border-radius: 4px;
  }

  .bRight {
    font-size: 12px;
  }

  .brTitle {
    font-size: 12px;
    margin-right: 4px;

    span {
      padding-right: 4px;
      color: #ffc90e;
    }

    b{
      color:#333;
    }
  }
}
</style>