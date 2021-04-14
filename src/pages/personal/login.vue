<style type="text/css">
  .login-box .el-form-item{
    text-align: left;
  }
  .login-box .el-form--label-top .el-form-item__label{
    padding: 0px;
  }
  .login-div .el-input__inner{
    border-radius: 0px;
      border: none;
      border-bottom: 1px solid #0E0E0E;
  }
  .login-div .el-form-item__label{
    font-weight: bold;
    color: black;
  }
</style>
<style scoped>
.commondiv{
  display: flex;
  align-items: center;
  justify-content: center;
}
.lbg{
  position: absolute;
  width: 100%;
  top:80px;
  left: 0px;
  bottom: 90px;
}
.login-box{
  position: absolute;
  top:210px;
  right: 80px;
  width:377px;
  height:436px;
  background:rgba(255,255,255,1);
  box-shadow:0px 13px 17px 4px rgba(14,14,14,0.26);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-div{
  width: 295px;
  height: 305px;
}
.login-div .title{
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: -30px;
}
.login-btn{
  display: inline-block;
  width:300px;
  height:40px;
  text-align: center;
  background:linear-gradient(90deg,rgba(113,131,248,1) 0%,rgba(72,90,205,1) 100%);
  border-radius:20px;
  color: white;
  cursor: pointer;
}
.spanform{
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: -8px;
}
.lspan{
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  color: #3E519F;
}
</style>
<template>
  <div class="commondiv" style="width:100%;">
    <img class="lbg" src="../../assets/lbg.png">
    <div class="login-box">
      <div class="login-div">
        <div class="title">欢迎登录！</div>
        <div class="myform">
          <el-form label-position="top" :model="ruleForm1" :rules="rules1" ref="ruleForm1"  label-width="80px">
                <el-form-item label="用户名"  prop="username">
                  <el-input placeholder="请输入用户名" v-model="ruleForm1.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input placeholder="请输入密码" type="password" v-model="ruleForm1.password"></el-input>
                </el-form-item>
                <div class="spanform">
                  <span @click="goto(1)" class="lspan">立即注册</span>
                  <span @click="goto(2)" class="lspan">忘记密码</span>
                  <!-- <el-button  type="primary" @click="login()">登录</el-button>
                  <el-button  @click="dialogVisible = false">取消</el-button> -->
                </div>
                <el-form-item>
                  <span class="login-btn" @click="login()">登录</span>
                  <!-- <el-button  type="primary" @click="login()">登录</el-button>
                  <el-button  @click="dialogVisible = false">取消</el-button> -->
                </el-form-item>
              </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm1:{
      },
      rules1:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  mounted() {
      let he = document.body.clientHeight - 170 + 'px';  
      $('.commondiv').css({'height':he});
      $('.lbg').css({'height':he});
      $('#mydiv').css({'paddingBottom':'0'})
      $('#myhead').hide();
      $('#mysearch').hide();
  },
  methods: {
    goto(type){
      if(type==1){
        this.$router.push({path:'/register'});
      } else {
        this.$router.push({path:'/forgetPwd'});
      }
    },
   login(name,pwd){
      let self =this;
      if(name){
        this.ruleForm1.username = name;
      }
      if(pwd){
        this.ruleForm1.password = pwd;
      }
      this.$refs['ruleForm1'].validate((valid) => {
        //debugger;
        if (valid) {
          self.$http.post('api/resshare/user/login',{ "username":self.ruleForm1.username,"password":self.ruleForm1.password}).then(res => {
            self.$setCookie('username',res.data.data.username,'55');
            self.$setCookie('userid',res.data.data.userid,'55');
            self.$setCookie('token',res.data.data.token,'55');
            // self.hasLogin = true;
            // self.dialogVisible1 = false;
            // self.dialogVisible = false;
            // self.user = this.$getCookie('username');
            self.$router.push({path:'/'});
            console.log(res);
          }).catch(err => {
            self.$message.error('账号名或密码错误！');
            console.log(err)
          })
        }
      });
    },
  }
};
 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

