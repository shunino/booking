<template>
 <div class="base-box" style="width:100%;height: 100%;">
    <div class="title"> <span >{{mydata.monm}}</span></div>
    <div class="box-div">设备运行情况：<span  v-if="mydata.state=='1'" class="status">正常</span>
      <span style="color:red;" v-if="mydata.state=='2'" class="status">异常</span>
    </div>
    <div class="box-div">站点介绍：</div>
    <div class="detail">{{mydata.remark}}</div>
    <!-- <img style="width:30px;height:30px;" src="../../assets/vmap/s13.png"> -->
 </div>
</template>

<script>
import Pie1 from '@/components/vhome/pie1'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data:[],
      type:1
    }
  },
  props: ['mydata'],
  methods: {
      changeC(type){
        this.type=type;
      }
  },
   components: {
    'pie1': Pie1,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base-box{
  padding: 20px;
  padding-top: 0px;
  font-size: 18px;
}
.base-box div{
  margin-top: 10px;
}
.base-box .title{
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}
.box-div{
 
  text-indent: 10px;
}
.detail{
  font-size: 16px;
  text-indent: 10px;
  line-height: 30px;
}
.status{
  color: #44D6D9;
  font-weight: bold;
  font-size: 20px;
}
</style>
