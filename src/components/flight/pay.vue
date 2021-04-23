<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <OrderDetail price="100"></OrderDetail>
      <el-divider></el-divider>
      <div style="text-align: left;font-size: 20px;">passange: 
        <span v-for="i in nameArr">
          <span>{{i}},</span>
        </span></div>
       <el-divider></el-divider>
      <div style="text-align: left;font-size: 20px;">
        <span>card：</span>
        <el-radio-group>
          <el-radio label="cardName1"></el-radio>
          <el-radio label="cardName2"></el-radio>
        </el-radio-group>
      </div>
       <el-divider></el-divider>
       <div style="text-align: left;font-size: 14px;">
        <span>Bonus：</span>
         <el-switch
          v-model="bonus"
          active-color="#13ce66"
          inactive-color="gray">
        </el-switch>
        <span>（discription）</span>
       </div>
        <el-divider></el-divider>
      <div> <el-button @click="toPay" class="width100 mt20" type="primary">Payment</el-button></div>
  </div>
</template>

<script>
import OrderDetail from './orderDetail'
  export default {
    methods: {
     
    },
    props:['nameArr'],
    components: {
     'OrderDetail':OrderDetail
    },
    methods:{
      toPay(){
         const loading = this.$loading({
            lock: true,
            text: 'Payments......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
            this.$router.push({path:'/success'});
          }, 2000);
      },
    },
    data() {
      return {
        bonus: true,
        form: {}
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

