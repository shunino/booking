<style scoped>
.info-box{
  width:100%;
}
.flexs{
  display: flex;
  justify-content: space-between;
}
.tleft{
  text-align: left;
}
</style>
<template>
  <div class="info-box">
    <div v-if="isList" class="card-list">
      <div class="text-left" style="text-align: left;"><el-button type="primary" @click="create">Create Email</el-button></div>
      <el-card @click.native="toDetail(i.id)" style="margin-top:10px;cursor: pointer;" class="box-card" v-for="i in listData" :key="i">
        <div slot="header" class="clearfix flexs">
          <span>postalCode：{{i.postalCode}}</span>
          <el-button type="warning" v-on:click.stop="del(i.id)">delete</el-button>
        </div>
        <div class="text item tleft">
          address：{{i.line1 +' '+ i.line2}}
        </div>
      </el-card>
    </div>
    <el-form v-if="!isList" ref="form" :model="form" label-width="120px">
       <div class="text-left" style="text-align: left;"><el-button type="primary" @click="back">Back EmailList</el-button></div>
         <!--  <el-form-item class="mt20" label="country">
            <el-input :disabled="isEdit" v-model="form.country"></el-input>
          </el-form-item>
           <el-form-item class="mt20" label="city">
            <el-input :disabled="isEdit" v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item class="mt20" label="region">
            <el-input :disabled="isEdit" v-model="form.region"></el-input>
          </el-form-item> -->
          <el-form-item class="mt20" label="address1">
            <el-input :disabled="isEdit" v-model="form.line1"></el-input>
          </el-form-item>
          <el-form-item label="address2">
            <el-input :disabled="isEdit" v-model="form.line2"></el-input>
          </el-form-item>
          <el-form-item label="postalCode">
            <el-input :disabled="isEdit" v-model="form.postalCode"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-if="!isEdit" type="primary" @click="modify">sure</el-button>
          </el-form-item>
        </el-form>
      </div>
</template>

<script>
  export default {
    data() {
      return {
        isList:true,
        form: {},
        listData:[],
        isEdit:false
      };
    },
    mounted() {
     this.getList();
    },
    methods: {
      del(id){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.delete(this.$host+'/api/customer-address/'+id,{headers:{Authorization:auth}}).then(res => {
               self.$message.success('delete success');
               self.getList();
              }).catch(err => {
                self.$message.error('email was linked by card');
                console.log(err)
              })
      },
      toDetail(id){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/customer-address/'+id,{headers:{Authorization:auth}}).then(res => {
                self.isEdit = true;
                self.isList = false;
                self.form = res.data;
                console.log(res);
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      getList(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/customer-address/list',{headers:{Authorization:auth}}).then(res => {
                self.listData = res.data;
                console.log(res);
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      create(val) {
        this.isList = false;
      },
      back(){
        this.isList = true;
        this.isEdit = false;
        this.form={};
      },
      modify(val) {
        let self = this;
        let auth = 'Bearer'+self.$getCookie('token');
        let para = {
            "country":'amer',
            "city":'amer',
            "region":'amer',
            "postalCode": this.form.postalCode,
            "line1": this.form.line1,
            "line2": this.form.line2
        };
        this.$http.post(this.$host+'/api/customer-address',para,{headers:{Authorization:auth}}).then(res => {
                console.log(res);
                self.$message.success('success');
                self.getList();
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

