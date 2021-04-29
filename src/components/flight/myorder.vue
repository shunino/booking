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
      >
      <div class="pay-box" v-if="curOrder">
        <Pay :cardDetail="curOrder.items[0]" :price="curOrder.items[0].price" :bookId="curOrder.id" :nameArr="curOrder.items[0].passengerNames"></Pay>
      </div>
    </el-dialog>
    <el-card  style="margin-top:10px;cursor: pointer;" class="box-card" v-for="i in orderList">
        <div slot="header" class="clearfix">
          <span>order Number：{{i.id}}</span>
        </div>
        <div class="text item f-box">
          <div v-if="i.status=='paid'" class="payed">payment success</div>
          <div v-if="i.status=='canceled'" class="canceled">canceled</div>
          <div v-if="i.status=='unpaid'" class="cancel" @click="cancel(i.id)">
            <el-button type="warning">cancel</el-button>
          </div>
          <div v-if="i.status=='unpaid'" class="buy" @click="payment(i)">
            <el-button type="primary">payment</el-button>
          </div>
          <OrderDetail v-if="i.items" :cardDetail="i.items[0]" :price="i.items[0].price" :passage="i.items[0].passengerNames"></OrderDetail>
        </div>
      </el-card>
  </div>
</template>

<script>
import OrderDetail from './orderDetail'
import Pay from './pay'
  export default {
    
    components: {
     'OrderDetail':OrderDetail,
     'Pay':Pay,
    },
    data() {
      return {
        dialogVisible:false,
        orderList:[],
        payId:'',
        curOrder:null
      };
    },
    mounted() {
     this.getList();
    },
    methods: {
      getList(){
        let self = this;
        let auth = 'Bearer'+this.$getCookie('token');
        this.$http.get(this.$host+'/api/booking/list',{headers:{Authorization:auth}}).then(res => {
                self.orderList = res.data;
                self.orderList.map(function(i){
                  if(i.items){
                     i.items[0].price = i.items[0].price.toFixed(1);
                  } 
                });
                console.log(res);
              }).catch(err => {
                // self.$message.error('email or password is error!');
                console.log(err)
              })
      },
      handleClose(){
        this.dialogVisible = false;
      },
      payment(curOrder){
        let self = this;
        this.curOrder = curOrder;
        this.dialogVisible = true;
      },
      cancel(id){
        this.$alert('CANCEL are you sure?', 'cancel', {
          confirmButtonText: 'yes',
          callback: action => {
            console.log(action);
            if(action!='cancel')
            this.toCancel(id);
          }
        });
      },
      toCancel(id){
         let auth = 'Bearer'+this.$getCookie('token');
          let self = this;
          self.$http.post(this.$host+'/api/booking/cancel/'+id,null,{headers:{Authorization:auth}}).then(res => {
               self.$message.success('cancel success');
               this.getList();
            }).catch(err => {
              console.log(err)
            })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

