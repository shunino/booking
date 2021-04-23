<style scoped> 
</style>
<style type="text/css">
 .box-card{
  width:100%;
  margin-top: 20px;
 }
 .d-box{
  width:60%;
 }
 .pay-box{
  width:100%; 
 }
 .myload{
  height: 300px;
  font-size: 30px;
 }
</style>
<template>
  <div class="commondiv">
    <el-dialog
      title="Order"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <div v-if="!payProgerss" class="pay-box">
        <Pay :nameArr="nameArr"></Pay>
      </div>
      <div v-if="payProgerss" class="myload flexc">
        Create Order......
      </div>   
    </el-dialog>
    <div class="d-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>FLIGHT</span>
        </div>
        <div class="text item">
          <OrderDetail :price="price"></OrderDetail>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>passange</span>
        </div>
        <div class="text item">
          <el-form :inline="true" v-for="(item,index) in user"  class="demo-form-inline">
            <el-form-item label="firstName">
              <el-input v-model="item.firstName" placeholder="firstName"></el-input>
            </el-form-item>
            <el-form-item label="lastName">
              <el-input v-model="item.lastName" placeholder="lastName"></el-input>
            </el-form-item>
            <el-form-item v-if="index==0">
              <el-button type="primary" @click="pushUser">add</el-button>
            </el-form-item>
            <el-form-item v-if="index!=0">
              <el-button type="warning" @click="popUser(index)">del</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <div @click="addOrder()"> <el-button class="width100 mt20" type="primary">Create Order</el-button></div>
    </div> 
  </div>
</template>

<script>
import Pay from '../components/flight/pay'
import OrderDetail from '../components/flight/orderDetail'
  export default {
    name: 'Home',
    data () {
      return {
        dialogVisible:false,
        user:[],
        payProgerss:true,
        nameArr:[],
        price:0
      }
    },
    mounted(){
     $('#mysearch').hide();
     this.pushUser();
    },
    methods:{
      handleClose(){
        this.dialogVisible = false;
        this.payProgerss = true;
      },
      addOrder(){
        let right = true;
        let self = this;
        this.nameArr = [];
        this.user.map(function(item){
          if(item.firstName==''||item.lastName=='') right= false;
          self.nameArr.push(item.firstName+' '+item.lastName);
        });
        if(!right){
          this.$message({
            message: 'Please fill in the passenger name',
            type: 'warning'
          });
          return;
        }
        this.dialogVisible = true;
        setTimeout(function(){
          self.payProgerss = false;
        },2000)
      },
      popUser(index){
        this.user.splice(index, 1);
        this.price = this.price-100;
      },
      pushUser(){
        let ob = {
           firstName:'',
           lastName:''
        }
        this.price = this.price+100;
        this.user.push(ob);
      }
    },
    components: {
     'Pay':Pay,
     'OrderDetail':OrderDetail
    }
  }
</script>


