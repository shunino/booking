<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <OrderDetail></OrderDetail>
      <el-divider></el-divider>
      <div style="text-align: left;font-size: 20px;">passange: fdfdfsdfsdfsfew,gdfgdfgdfgfdgdg</div>
       <el-divider></el-divider>
      <div style="text-align: left;font-size: 20px;">
        <span>card：</span>
        <el-radio-group>
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </div>
       <el-divider></el-divider>
       <div style="text-align: left;font-size: 14px;">
         <el-switch
          v-model="value1"
          active-text="按月付费"
          >
        </el-switch>
        <span>（非犯得上犯得上犯得上犯得上反对）</span>
       </div>
        <el-divider></el-divider>
      <div> <el-button @click="toPay" class="width100 mt20" type="primary">pay</el-button></div>
  </div>
</template>

<script>
import OrderDetail from './orderDetail'
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components: {
     'OrderDetail':OrderDetail
    },
    methods:{
      toPay(){
         const loading = this.$loading({
            lock: true,
            text: '支付中......',
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
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

