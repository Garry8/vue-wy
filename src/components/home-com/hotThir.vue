<template>
  <div>
    <div class="secHot">
      <div class="shArea">
        <div class="shLeft">
          <p>{{hotThirdText && hotThirdText[2].title}}</p>
          <span>{{hotThirdText && hotThirdText[2].toText}}</span>
        </div>

        <img :src="hotThirdText && hotThirdText[2].imgurl" />
      </div>

      <div class="boArea">
        <div class="boLeft">
          <span class="boTag">No.3</span>
          <span class="boTitle">星选精选</span>
        </div>

        <div class="boRight">
          <span class="bolTitle">
            <span>{{hotThirdText && hotThirdText[2].seeTimes}}</span><b>浏览</b>
          </span>
          <span class="bolTitle">
            <span>{{hotThirdText && hotThirdText[2].likeTimes}}</span><b>喜欢</b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["hotThirdText"],
};
</script>

<style lang="scss" scoped>
.secHot {
  // height: 180px;
  background-color: #fff;
}
.shArea {
  position: relative;
  width: 94%;
  margin: 10px auto 0;
  height: 120px;
  // background-color: tan;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shLeft {
  margin-top: 10px;
  flex: 1;
}

.shLeft p {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  position: absolute;
  top: 10%;
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.shArea span {
  margin-top:10px;
  font-size: 14px;
  color: #999;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;  
  -webkit-line-clamp: 3;  
  -webkit-box-orient: vertical;
}

.shArea img {
  width: 120px;
  height: 100px;
  border-radius: 6px;
  background-color: cyan;
}

.boArea {
  width: 94%;
  margin: 0 auto;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.boTitle {
  font-size: 12px;
  color: #dd90e4;
  border: 1px solid #dd90e4;
  border-radius: 4px;
}

.boLeft {
  display: flex;
  align-items: center;
}

.boTag {
  display: inline-block;
  font-size: 12px;
  text-align: center;
  color: #fff;
  margin-right: 10px;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #769aff;
}

.boRight {
  font-size: 12px;
}

.bolTitle {
  font-size: 12px;
  margin-right: 4px;
}

.bolTitle span {
  padding-right: 4px;
  color: #ffc90e;
}
</style>