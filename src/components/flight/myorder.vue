<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <el-card @click.native="toDetail()" style="margin-top:10px;cursor: pointer;" class="box-card" v-for="o in 4" :key="o">
        <div slot="header" class="clearfix">
          <span>order detail</span>
        </div>
        <div class="text item">
          <OrderDetail></OrderDetail>
        </div>
      </el-card>
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

