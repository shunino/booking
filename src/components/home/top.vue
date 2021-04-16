<style scoped>
  .mytop{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2076CF;
    color: white
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
    width:97%;display: flex;height:100%;
    align-items: center;
    justify-content: space-between;
  }
  .top-txt{
    font-size: 16px;
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
    margin-left: 5px;
  }
  .tab{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tabclick{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 3%;
    cursor: pointer;
  }
  .tabclick img{
    width: 30px;
  }
</style>
<template>
       <div class="mytop">
        <div class="mytopD">
          <div class="top-icon" style="width:20%;">
            <img class="pointer" @click="goto()" src="../../assets/booking/logo.png">
          </div>
          <div class="tab" style="width:60%;">
            <div class="tabclick">
              <div>
                <img src="../../assets/booking/position.png">
              </div>
              <div>TRAVEL</div>
            </div>
            <div class="tabclick">
              <div>
                <img src="../../assets/booking/air.png">
              </div>
              <div>FLIGHTS</div>
            </div>
          </div>
           <div class="top-search" style="width:20%;text-align:right;">
             <div class="head-left" v-show="hasLogin">
                <span style="justify-content: flex-end;margin-right: 5px;">
                  Hi！{{user}}
                </span>
                <span id="personal">
                  <router-link to="/personal" style="color:white;">个人中心</router-link>
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
    lexit(){
      this.$setCookie('username','','-1');
      this.$setCookie('userid','','-1');
      this.$setCookie('token','','-1');
      this.hasLogin = false;
      this.$router.push({path:'/'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

