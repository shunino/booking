<style scoped>
.commondiv{
  display: flex;
  align-items: center;
  justify-content: center;
}
.per-box{
  width: 550px;
  height: 456px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.mform-div{
  width: 100%;
  height: 375px;
  display: flex;
  align-items: center;
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
    width: 294px;
    height: 37px;
    margin-left: -26px;
background:linear-gradient(90deg,rgba(85,145,255,1) 0%,rgba(28,145,226,1) 50%,rgba(88,101,185,1) 100%);
cursor: pointer;
}
</style>
<template>
  <div class="commondiv" style="position:relative;width:100%;">
    <div class="per-box">
      <div class="tool"><span>已有账号，</span><span class="cc">马上登录</span><span @click="goLogin()" class="cc tologin">返回登录页</span></div>
      <div class="title">忘记密码</div>
      <div class="mform-div">
        <div class="mform">
        <el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="80px">
                <el-form-item label="手机号码" prop="mobile">
                  <el-input placeholder="请输入手机号码" v-model="ruleForm2.mobile"></el-input>
                </el-form-item>
                <el-form-item label="邮件地址" prop="email">
                  <el-input placeholder="请输入邮件地址" v-model="ruleForm2.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input placeholder="请输入密码" type="password" v-model="ruleForm2.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password1">
                  <el-input placeholder="请再次输入密码" type="password" v-model="ruleForm2.password1"></el-input>
                </el-form-item>
                <el-form-item>
                  <span @click="register" class="msubmit">确认</span>
                  <!-- <el-button type="primary" @click="register">注册</el-button>
                  <el-button  @click="dialogVisible1 = false">取消</el-button> -->
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
        username: [
            { required: true, trigger: 'blur',validator: this.vcopy },
          ],
        mobile: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur"
          },
          {
            validator: function(rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("手机号格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
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
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    vcopy(rule, value, callback){
      if (!value || value === '') {
        callback(new Error('请输入用户名!'));
      }
      this.$http.post('api/resshare/user/checkUserId',{
        username:value,
      }).then(res => {
        if(!res.data.data){
          callback(new Error('用户名重复!'));
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
    mforget(){
      let self = this;
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          self.$http.post('api/resshare/user/forgetPassword',{
            email:self.ruleForm2.email,phone:self.ruleForm2.mobile,password:self.ruleForm2.password
          }).then(res => {
            self.$message.success('操作成功');
            console.log(res);
          }).catch(err => {
            console.log(err)
          })
        }
      });
    },
    register(){
      var self = this;
      self.$http.post('api/resshare/user/checkUser',{
        email:self.ruleForm2.email,phone:self.ruleForm2.mobile
      }).then(res => {
        let myda = res.data.data
        if(myda){
          self.mforget();
        } else {
          self.$message.error('手机号和邮箱不匹配！');
        }
      }).catch(err => {
        console.log(err)
      })
    },
  }
};
 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

