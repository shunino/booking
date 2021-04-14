<style scoped>
  .mytop{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mytop .top-icon{
      /*height: 53px;
      width: 494px;*/
      display: flex;
      align-items: center;
  }
  .mytop .top-icon img{
    width: 100%;
    height: 100%;
  }
  .mytopD{
    width: 1400px;display: flex;height:100%;
    align-items: center;
    justify-content: space-between;
  }
  .top-txt{
      font-size: 16px;
    color: #243795;
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  .zxit{
        border-left: 2px solid #00A8FF;
    width: 50px;
    height: 38%;
    display: inline-block;
    text-align: center;
    color: #00A8FF;
    margin-left: 5px;
  }
</style>
<template>
       <div class="mytop">
        <div class="mytopD">
          <div class="top-icon ml10">
            <img class="pointer" @click="goto()" src="../../assets/vnew/logo2.png">
          </div>
           <div class="top-search mr10">
             <!-- <el-input
               placeholder="请输入内容"
               prefix-icon="el-icon-search"
               v-model="searchinput"
               @keyup.enter.native="search"
             >
             </el-input> -->
             <div class="head-left" v-show="hasLogin">
                <span style="justify-content: flex-end;margin-right: 5px;color: #00A8FF;">
                  Hi！{{user}}
                </span>
                <span id="personal">
                  <router-link style="color:#00A8FF;" to="/personal">个人中心</router-link>
                </span>
                <span style="width: 50px;" >
                  <span class="pointer zxit" @click="lexit" >退出</span>
                </span>
              </div>
              <div class="head-right mr10" v-show="!hasLogin">
                   <span @click="toLogin" class="top-txt pointer">登录</span>/<span @click="toRegister" class="top-txt pointer">注册</span>
              </div>
           </div>
         </div>
          <el-dialog
            title="登录"
            :visible.sync="dialogVisible"
            width="40%"
              >
            <div>
              <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1"  label-width="80px">
                <el-form-item label="登录名"  prop="username">
                  <el-input v-model="ruleForm1.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm1.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button  type="primary" @click="login()">登录</el-button>
                  <el-button  @click="dialogVisible = false">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-dialog>

          <el-dialog
            title="注册"
            :visible.sync="dialogVisible1"
            width="50%"
          >
            <div>
              <el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="80px">
                <el-form-item label="用户名称"  prop="username">
                  <el-input v-model="ruleForm2.username"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="mobile">
                  <el-input v-model="ruleForm2.mobile"></el-input>
                </el-form-item>
                <el-form-item label="邮件地址" prop="email">
                  <el-input v-model="ruleForm2.email"></el-input>
                </el-form-item>
                <!-- <el-form-item label="职业">
                  <el-input v-model="ruleForm2.profession"></el-input>
                </el-form-item>
                <el-form-item label="单位">
                  <el-input v-model="ruleForm2.company"></el-input>
                </el-form-item>
                <el-form-item label="所在城市">
                  <el-input v-model="ruleForm2.city"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="ruleForm2.address"></el-input>
                </el-form-item> -->
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm2.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password1">
                  <el-input type="password" v-model="ruleForm2.password1"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="register">注册</el-button>
                  <el-button  @click="dialogVisible1 = false">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-dialog>

       </div>
</template>

<script>
  $(function () {

  })
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:'',
      dialogVisible:false,
      dialogVisible1:false,
      hasLogin:false,
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
    }
  },
  watch: {
    '$route' (to, from) {
        let user = this.$getCookie('username');
        if(user){
          this.hasLogin = true;
          this.dialogVisible = false;
          this.user = this.$getCookie('username');
        }
      },
  },
  mounted(){
    let user = this.$getCookie('username');
    if(user){
      this.hasLogin = true;
      this.dialogVisible = false;
      this.user = this.$getCookie('username');
    }
    $('.head-left').find('span').removeClass('cur');
    $('#personal').addClass('cur');
  },
  methods:{
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
    goto(){
      this.$router.push({path:'/'})
    },
    toLogin(){
      this.$router.push({path:'/login'})
      //this.dialogVisible = true;
    },
    toRegister(){
      this.$router.push({path:'/register'})
      //this.dialogVisible1 = true;
    },
    login(name,pwd){
      // this.$setCookie('username','shu','55');
      // this.hasLogin = true;
      // this.dialogVisible = false;
      // this.$router.push({path:'/personal'});
      // this.user = this.$getCookie('username');
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
            self.hasLogin = true;
            self.dialogVisible1 = false;
            self.dialogVisible = false;
            self.user = this.$getCookie('username');
            self.$router.push({path:'/personal'});
            console.log(res);
          }).catch(err => {
            self.$message.error('账号名或密码错误！');
            console.log(err)
          })
        }
      });
    },
    register(){
      var self = this;
      this.$refs['ruleForm2'].validate((valid) => {
        if (valid) {
          self.$http.post('api/resshare/user/registryUser',{
            user:self.ruleForm2,
          }).then(res => {
           // self.login(self.ruleForm2.username,self.ruleForm2.password)
            self.dialogVisible1 = false;
            self.$message.success('注册成功！');
            console.log(res);
          }).catch(err => {
            console.log(err)
          })
        }
      });
    },
    lexit(){
      this.$setCookie('username','','-1');
      this.$setCookie('userid','','-1');
      this.$setCookie('token','','-1');
      this.hasLogin = false;
      this.$router.push({path:'/'})
    }
  }
  // methods:{
  //   search(){
  //     this.$alert('搜索失败', '提示', {
  //       confirmButtonText: '取消',
  //     });
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

