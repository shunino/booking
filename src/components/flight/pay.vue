<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <OrderDetail :cardDetail="cardDetail" :price="price"></OrderDetail>
      <el-divider></el-divider>
      <div style="text-align: left;font-size: 20px;">passange: 
        <span>
          <span>{{nameArr}}</span>
        </span></div>
       <el-divider></el-divider>
      <div style="text-align: left;font-size: 20px;">
        <span>card：</span>
        <el-radio-group v-model="cardValue">
          <el-radio v-for="i in cardList" :label="i.id" border>{{i.creditCardNumber}}</el-radio>
        </el-radio-group>
      </div>
       <el-divider></el-divider>
      <!--  <div style="text-align: left;font-size: 14px;">
        <span>Bonus：</span>
         <el-switch
          v-model="bonus"
          active-color="#13ce66"
          inactive-color="gray">
        </el-switch>
        <span>（discription）</span>
       </div> -->
        <!-- <el-divider></el-divider> -->
      <div> <el-button @click="toPay" class="width100 mt20" type="primary">Payment</el-button></div>
  </div>
</template>

<script>
import OrderDetail from './orderDetail'
  export default {
    methods: {
     
    },
    props:['nameArr','bookId','cardDetail','price'],
    components: {
     'OrderDetail':OrderDetail
    },
    data () {
      return {
        cardList: [],
        cardValue:null,
        bonus: true,
        form: {}
      }
    },
    mounted(){
     this.getList();
    },
    methods:{
      getList(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/credit-card/list',{headers:{Authorization:auth}}).then(res => {
                self.cardList = res.data;
                self.cardValue =self.cardList[0].id;
                console.log(res);
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      toPay(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
         const loading = this.$loading({
            lock: true,
            text: 'Payments......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
         let ob = {
          id:this.bookId,
          creditCardId:this.cardValue
         };
          self.$http.post(this.$host+'/api/booking/payment/'+this.bookId+'?creditCardId='+ob.creditCardId,null,{headers:{Authorization:auth}}).then(res => {
               setTimeout(() => {
                  loading.close();
                  self.$router.push({path:'/success'});
                }, 2000);
            }).catch(err => {
              console.log(err)
            })
         
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

