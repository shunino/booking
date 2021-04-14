<template>
  <div style="width: 100%;text-align: left">
    <el-form  :model="ruleForm2"  ref="ruleForm2" label-width="80px">
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
      <el-form-item>
        <el-button type="primary" @click="register">修改</el-button>
      </el-form-item>
    </el-form>
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
            { required: true, message: '请输入电话号码', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
          ],
          // password: [
          //   { required: true, message: '请输入密码', trigger: 'blur' },
          // ],
          // password1: [
          //   {required: true,validator: this.validatePass, trigger: 'blur' },
          // ],
        },
      };
    },
    mounted(){
        this.getInfo();
    },
    methods: {
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
      getInfo(){
        let self  = this;
        this.$http.post('api/resshare/user/getUserById',{
          userid:this.$userId,
          token:this.$token
        }).then(res => {
          let myda = res.data.data;
          self.ruleForm2 = myda;
          // self.ruleForm2['username'] = myda.username;
          // self.ruleForm2['mobile'] = myda.mobile;
          // self.ruleForm2['email'] = myda.email;
          // self.ruleForm2['userid'] = myda.userid;
          console.log(res);
          console.log('43434');
        }).catch(err => {
          console.log(err)
        })
      },
      register(){
        var self = this;
        this.$refs['ruleForm2'].validate((valid) => {
          if (valid) {
            self.$http.post('api/resshare/user/updateUser',{
              user:{username:self.ruleForm2.username,mobile:self.ruleForm2.mobile,email:self.ruleForm2.email,userid:self.ruleForm2.userid},token:this.$token
            }).then(res => {
              self.$message({
                message: '修改成功！' ,
                type: 'success'
              });
              self.$setCookie('username',self.ruleForm2.username,'55');
             //
              console.log(res);
            }).catch(err => {
              console.log(err)
            })
          }
        });
      },
    }
  }
</script>
