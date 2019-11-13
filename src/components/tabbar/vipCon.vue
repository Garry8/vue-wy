<template>
  <div class="registAll">
    <div class="regisIn">
      <h3>欢迎登录星选游</h3>
      <div class="areaOp">
        <input v-model="login" class="mobile" type="text" name="login" @blur="checkLogin()"  placeholder="账号" />
        <span v-show="flag" @click="clearAll()" class="errLo">清除</span>
      </div>

      <div class="areaOp">
        <input v-model="register" class="password" type="text" name="register" @blur="checkRes()" placeholder="密码 " />
        <span v-show="flagTo" @click="clearAllTo()" class="errLo">清除</span>
      </div>

      <div>
        <input class="login" type="button" @click="right()" value="登录" />
      </div>

      <div class="otherRe">
        <p>其他登录方式</p> 
        <img @click="moreGet()" src="../../images/oo-01.png" alt="">
        <img @click="moreGet()" src="../../images/oo-02.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      flag:false,
      flagTo:false,
      login:"",
      register:"",
      msgone:"",
      backData:[
        {  log: "admin",
           regi: "123"     
        }
      ]
    }
  },
  
  methods: {
    checkLogin(){
      this.flag = true
      if(this.login == ""){
          this.login = "账户名不能为空"
      }else{
           this.login = this.login
      }
    },
    checkRes(){
      this.flagTo = true
      if(this.register == ""){
          this.register = "密码不能为空"
      }else{
           this.register = this.register
      }
    },
    clearAll(){
      this.login = "";
      this.flag = false
    },
    clearAllTo(){
       this.register = "";
       this.flagTo = false
    },
    right(){
      if(this.login == this.backData[0].log && this.register == this.backData[0].regi){
        Toast("登录成功");
        // this.$store.state.boolnum = 1;
        
        this.$router.push("/home")
      }else{
        Toast("登录失败");
      }
    },
    moreGet(){
      Toast("更多接口待开发中...谢谢");
    },
  },
};
</script>

<style lang="scss" scoped>
.registAll {
  height: 100%;
  background-color: #fff;
  input::-webkit-input-placeholder {
    color: lightblue;
  }
  .regisIn {
    padding: 30% 4% 0;

    h3{
      margin-bottom: 40px;
    }
  }

.areaOp{
  height: 60px;
  line-height: 60px;
  position: relative;

  input{
    width: 100%;
    border: none;
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
    outline: none;
  }
}
  .errLo {
    position: absolute;
    right: 20px;
    font-size: 12px;
    color: #ccc;
  }
  
  .login {
    border: 0;
    width: 100%;
    height: 44px;
    margin-top: 15px;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 4px;
    background: #2f435e;
    color: #f2f2f2;
  }
  .login:hover {
    background: #385f9e;
  }
  .otherRe{
    margin-top: 80px;

    img{
      width: 30px;
      height: 30px;
      margin: 5px;
    }
  }
}
</style>