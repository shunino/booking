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
      <div class="text-left" style="text-align: left;"><el-button type="primary" @click="create">Create Card</el-button></div>
      <el-card @click.native="toDetail(i.id)" style="margin-top:10px;cursor: pointer;" class="box-card" v-for="i in listData" >
        <div slot="header" class="clearfix flexs">
          <span>expirationTime：{{i.expirationYear+'-0'+i.expirationMonth}}</span>
          <el-button type="warning" v-on:click.stop="del(i.id)">delete</el-button>
        </div>
        <div class="text item tleft">
          creditCardNumber：{{i.creditCardNumber}}
        </div>
      </el-card>
    </div>
    <el-form v-if="!isList" ref="form" :model="form" label-width="140px">
       <div class="text-left" style="text-align: left;"><el-button type="primary" @click="back">Back CardList</el-button></div>
          <el-form-item style="text-align: left;" class="mt20" label="Address：">
            <el-select :disabled="isEdit"  v-model="form.customerAddressId" placeholder="请选择">
              <el-option
                v-for="i in addressOp"
                :key="i.id"
                :label="i.line1 +' '+ i.line2"
                :value="i.id">
              </el-option>
            </el-select>
          </el-form-item>
           <el-form-item class="mt20" label="creditCardNumber：">
            <el-input :disabled="isEdit" v-model="form.creditCardNumber"></el-input>
          </el-form-item>
          <el-form-item style="text-align: left;" label="expirationYear：">
            <el-date-picker
              v-model="form.expirationYear"
              type="year"
              :disabled="isEdit"
              value-format="yyyy"
              format="yyyy"
              placeholder="year">
            </el-date-picker>
          </el-form-item>
          <el-form-item style="text-align: left;" label="expirationMonth：">
             <el-date-picker
              v-model="form.expirationMonth"
              type="month"
              value-format="MM"
                    format="MM"
              :disabled="isEdit"
              placeholder="month">
            </el-date-picker>
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
        isEdit:false,
        addressOp:[]
      };
    },
    mounted() {
      this.getAddress();
      this.getList();
    },
    methods: {
      getAddress(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/customer-address/list',{headers:{Authorization:auth}}).then(res => {
                this.addressOp = res.data;
          }).catch(err => {
            // self.$message.error('email or password is error!');
            console.log(err)
          })
      },
      del(id){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.delete(this.$host+'/api/credit-card/'+id,{headers:{Authorization:auth}}).then(res => {
               self.$message.success('delete success');
               self.getList();
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      toDetail(id){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/credit-card/'+id,{headers:{Authorization:auth}}).then(res => {
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
        this.$http.get(this.$host+'/api/credit-card/list',{headers:{Authorization:auth}}).then(res => {
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
        this.$http.post(this.$host+'/api/credit-card',this.form,{headers:{Authorization:auth}}).then(res => {
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

