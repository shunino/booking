<template>
 <div style="width:100%;height: 100%;">
    <div class="num-box" style="height: 30%;">
      <div class="num" style="color:#45D7DA;">{{mydata[0]}}</div>
      <div class="lable">个县</div>
    </div>
    <div class="num-box">
      <div class="num" style="color:#E26B52 ;" :title="mydata[1].toFixed(2)">{{mydata[1].toFixed(2)}}</div>
      <div class="lable">治理面积</div>
      <div>（平方公里）</div>
    </div>
    <div class="num-box">
      <div class="num" style="color:#C63ED3;" :title="mydata[2]" >{{mydata[2]}}</div>
      <div class="lable">投资金额</div>
      <div>（万元）</div>
    </div>
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
.num-box{
  width: 100%;
  height: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.num-box .num{
  font-size: 35px;
  font-weight: bold;
  width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
</style>
