<style scoped>
.commondiv{
  display: flex;
  align-items: center;
  justify-content: center;
}
.per-box{
  width: 465px;
  height: 509px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.mform-div{
  width: 100%;
  height: 426px;
  display: flex;
  /*align-items: center;*/
 /* justify-content: center;*/
  flex-direction: column;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 9px 1px rgba(14,14,14,0.07);
}
.tool{
  width: 100%;
  height: 40px;
 display: flex;
 align-items: center;
  color: #6A6A6A;
  font-size: 12px;
  justify-content: flex-end;
  background:#F7F6FD;
  box-shadow:none;
}
.title{
  width: 100%;
  height: 40px;
  background: ;
  line-height: 40px;
  text-align: center;
  background: #0648A2;
  color: white;
}
.mform{
  width: 400px;
  height: 400px;
  margin-top: 46px;
}
.cc{
  color: #F76423;
}
.tologin{
  width: 78px;
  border-left: 1px solid #6A6A6A;
  text-align: center;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
  cursor: pointer;
}
.msubmit{
  display: inline-block;
    line-height: 37px;
    text-align: center;
    color: white;
    width: 100%;
    height: 37px;
background:linear-gradient(90deg,rgba(85,145,255,1) 0%,rgba(28,145,226,1) 50%,rgba(88,101,185,1) 100%);
cursor: pointer;
}
</style>
<template>
  <div class="commondiv" style="position:relative;width:100%;">
    <div class="per-box">
  <!--     <div class="tool"><span>已有账号，</span><span class="cc">马上登录</span><span @click="goLogin()" class="cc tologin">返回登录页</span></div> -->
      <div class="title">Create Your Account</div>
      <div class="mform-div">
        <div class="mform">
        <el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="160px">
                <el-form-item label="firstName"  prop="firstName">
                  <el-input placeholder="firstName" v-model="ruleForm2.firstName"></el-input>
                </el-form-item>
                <el-form-item label="lastName" prop="lastName">
                  <el-input placeholder="lastName" v-model="ruleForm2.lastName"></el-input>
                </el-form-item>
                <el-form-item label="email" prop="email">
                  <el-input placeholder="email" v-model="ruleForm2.email"></el-input>
                </el-form-item>
                <el-form-item label="password" prop="password">
                  <el-input placeholder="password" type="password" v-model="ruleForm2.password"></el-input>
                </el-form-item>
                <el-form-item label="confirm password" prop="password1">
                  <el-input placeholder="password" type="password" v-model="ruleForm2.password1"></el-input>
                </el-form-item>
                <el-form-item style="text-align:right;">
                  <span @click="register" class="msubmit">Create Account</span>
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
      ruleForm2:{},
      rules2:{
        firstName: [
            { required: true, trigger: 'blur'},
          ],
        lastName: [
          { required: true, trigger: 'blur'},
        ],
        email: [
          { required: true, message: 'please enter email', trigger: 'blur' },
          { type: 'email', message: 'please enter correct email', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'please enter password', trigger: 'blur' },
        ],
        password1: [
          {required: true,validator: this.validatePass, trigger: 'blur' },
        ],
      },
    };
  },
  mounted() {
      let he = document.body.clientHeight - 190 + 'px';  
      $('.commondiv').css({'height':he});
      $('#myhead').hide();
      $('#mysearch').hide();
  },
  methods: {
    validatePass(rule, value, callback){
      console.log(rule,value,callback);
      if (!value || value === '') {
        callback(new Error('please enter password！'));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error('The two passwords do not match!'));
      } else {
        callback();
      }
    },
    vcopy(rule, value, callback){
      if (!value || value === '') {
        callback(new Error('please enter name!'));
      }
      this.$http.post('api/resshare/user/checkUserId',{
        username:value,
      }).then(res => {
        if(!res.data.data){
          callback(new Error('Duplicate name!'));
        } else{
          callback();
        }
        console.log(res);
      }).catch(err => {
        console.log(err)
      })
    },
    goLogin(){
      this.$router.push({path:'/login'});
    },
    register(){
      var self = this;
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          self.$http.post('/ips/api/account',{
             "email": self.ruleForm2.email,
            "firstName": self.ruleForm2.firstName,
            "lastName": self.ruleForm2.lastName,
            "password": self.ruleForm2.password
          }).then(res => {
           // self.login(self.ruleForm2.username,self.ruleForm2.password)
            self.$message.success('success');
            console.log(res);
          }).catch(err => {
            console.log(err)
          })
        }
      });
    },
  }
};
 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

