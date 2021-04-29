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
  <div class="commondiv" style="width:100%;">
    <el-dialog
      title="Order"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <div v-if="!payProgerss" class="pay-box">
        <Pay :cardDetail="flight" :price="price" :bookId="cardDetail.id" :nameArr="nameArr"></Pay>
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
          <OrderDetail :cardDetail="flight" :price="price"></OrderDetail>
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
        price:0,
        onePrice:0,
        flight:null,
        cardDetail:'',
        arr1:[],
        arr2:[]
      }
    },
    mounted(){
     $('#mysearch').hide();
     this.pushUser();
     this.flight= this.$route.query.flight;
     this.price = this.flight.price;
     this.onePrice = this.flight.price;
     this.getList11();
     this.getList12();
    },
    methods:{
      getList11(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/credit-card/list',{headers:{Authorization:auth}}).then(res => {
                self.arr2 = res.data;
                console.log(res);
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      getList12(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/customer-address/list',{headers:{Authorization:auth}}).then(res => {
                self.arr1 = res.data;
                console.log(res);
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      handleClose(){
        this.dialogVisible = false;
        this.payProgerss = true;
      },
      addOrder(){
        let right = true;
        let self = this;
        if(this.arr1.length==0 || this.arr2.length==0 ){
          this.$message.error('you should create email and card !');
          return;
        }
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
        self.toOrder();
        this.dialogVisible = true;
        setTimeout(function(){
          self.payProgerss = false; 
        },2000)
      },
      toOrder(){
          let auth = 'Bearer'+this.$getCookie('token');
          let self = this;
          let name=[];
          this.user.map(function(i){
            let q = i.firstName+' '+i.lastName;
            name.push(q);
          });
          let ob = [{
            "flightId": this.flight.flightId,
            "seatClass": this.flight.seatClass,
            "seats":this.user.length,
            "passengerNames": name
          }];
          self.$http.post(this.$host+'/api/booking',ob,{headers:{Authorization:auth}}).then(res => {
              self.cardDetail = res.data;
            }).catch(err => {
              console.log(err)
            })
      },
      popUser(index){
        this.user.splice(index, 1);
        this.price = (this.price/1-this.onePrice/1).toFixed(1);
      },
      pushUser(){
        let ob = {
           firstName:'',
           lastName:''
        }
        this.price = (this.price/1+this.onePrice/1).toFixed(1);
        this.user.push(ob);
      }
    },
    components: {
     'Pay':Pay,
     'OrderDetail':OrderDetail
    }
  }
</script>


