<style scoped>
.info-box{
  width:100%;
}
.buy{
  position: absolute;
  top:48px;
  right: 20px;
  display: none;
  z-index: 100;
}
.cancel{
  position: absolute;
  top:48px;
  right: 140px;
  display: none;
  z-index: 100;
}
.f-box{
  position: relative;
}
.f-box:hover .buy{
  display: block;
}
.f-box:hover .cancel{
  display: block;
}
.canceled{
  width: 100%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.1);
  z-index: 100;
  position: absolute;
  color: white;
  font-size: 22px;
}
.payed{
  color: orange;
    position: absolute;
    /* top: -59px; */
    /* left: 5px; */
    z-index: 100;
    width: 185px;
    height: 60px;
    font-size: 22px;
    right: 20px;
    border: 20px;
    bottom: -30px;
}
</style>
<template>
  <div class="info-box">
     <el-dialog
      title="Order"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <div class="pay-box">
        <Pay :nameArr="nameArr"></Pay>
      </div>
    </el-dialog>
    <el-card  style="margin-top:10px;cursor: pointer;" class="box-card" v-for="i in orderList" :key="o">
        <div slot="header" class="clearfix">
          <span>order Number</span>
        </div>
        <div class="text item f-box">
          <div v-if="i.status==2" class="payed">payment success</div>
          <div v-if="i.status==3" class="canceled">canceled</div>
          <div v-if="i.status==1" class="cancel" @click="cancel()">
            <el-button type="warning">cancel</el-button>
          </div>
          <div v-if="i.status==1" class="buy" @click="payment()">
            <el-button type="primary">payment</el-button>
          </div>
          <OrderDetail price="100" :passage="passage"></OrderDetail>
        </div>
      </el-card>
  </div>
</template>

<script>
import OrderDetail from './orderDetail'
import Pay from './pay'
  export default {
    methods: {
      handleClose(){
        this.dialogVisible = false;
      },
      payment(){
        let self = this;
        this.dialogVisible = true;
      },
      cancel(){
        this.$alert('CANCEL are you sure?', 'cancel', {
          confirmButtonText: 'yes',
          callback: action => {
            this.$message({
              type: 'success',
              message: `CANCEL success`
            });
          }
        });
      }
    },
    components: {
     'OrderDetail':OrderDetail,
     'Pay':Pay
    },
    data() {
      return {
        orderList:[
          {
            status:1
          },
          {
            status:2
          },
          {
            status:3
          }
        ],
        dialogVisible:false,
        user:[],
        nameArr:[],
        passage:true,
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

