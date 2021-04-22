<style scoped>
.per-content{
  width: 100%;
  display: flex;
  margin-top: 20px;
  min-height: 800px;
}
.per-left{
  width: 200px;
  display: flex;
  border-right: 1px solid #E4E7ED;
  flex-direction: column;
  padding-left: 15px;
}
.per-left .per-avater{
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.per-left .per-menu{
  width: 100%;
  align-items: center;
  justify-content: center;
}
.per-left .per-menu li{
  height: 44px;
  border-bottom: 1px solid #E4E7ED;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.per-left .per-menu li.cur{
    background: #416EFF;
  color: white;
}
  .per-center{
    padding: 10px 20px;
    width: 1000px;
  }

.per-left .per-menu .showdiv li.cur{
  color: #416EFF;
  background: white;
}
.per-left .per-menu .showdiv li{
  font-size: 14px;

}
</style>
<template>
  <div class="commondiv">
    <div class="per-content">
        <div class="per-left">
          <div class="per-menu">
              <ul>
                <li  class="cur" id="info" @click="changTab('info')">我的信息</li>
                <li   id="myorder" @click="changTab('myorder')">我的订单</li>
                <li  id="card" @click="changTab('card')">信用卡</li>
              </ul>
          </div>
        </div>
      <div class="per-center" >   
          <Card  v-if="tabtype=='card'" class="card"></Card>
          <Info  v-if="tabtype=='info'" class="info"></Info>
          <Myorder  v-if="tabtype=='myorder'" class="myorder"></Myorder>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '../components/flight/info'
import Card from '../components/flight/card'
import Myorder from '../components/flight/myorder'
export default {
  name: 'Home',
  data () {
    return {
      tabtype:'info',
      isAdmin:true,
      isUser:true,
      shareData:{}
    }
  },
  mounted(){
    $('#mysearch').hide();
    var user = this.$getCookie('username');
    $('.head-left').find('span').removeClass('cur');
    $('#personal').addClass('cur');
  },
  methods: {
    changTab(tab) {
      this.tabtype = tab;
        $('.per-menu').find('ul li').removeClass('cur');
        $('#'+tab).addClass('cur');
    },
  },
  components: {
    'Card': Card,
    'Info':Info,
    'Myorder':Myorder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

