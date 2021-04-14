<style scoped>
.ga-map{
  width: 100%;
}
.ga-map .ga-head{
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  background: #416EFF;
  color: white;
}
.ga-map .ga-content{
  width: 100%;
  height: 300px;
  border:1px solid gray;
  position: relative;
}
.ga-content{
  height: 30px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.ga-content .ga-tab{
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.ga-content .ga-tab>span.cur{
  border-bottom: 2px solid #45C8DB;
}
.ga-content .ga-tab>span{
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-right: 1px solid #E4E7ED;
  display: inline-block;
  cursor: pointer;
}
</style>
<template>
  <div class="ga-map">
    <div class="ga-head">
      园区导航
    </div>
    <div class="ga-content">
        <img v-if="myimg=='nation'" style="width: 100%;height: 90%;" src="../../assets/map.png">
        <img v-if="myimg=='province'" style="width: 100%;height: 90%;" src="../../assets/map.png">
        <div class="ga-tab"><span @click="change('nation')" :class="myimg=='nation' ? 'cur' : ''">国家级</span><span :class="myimg=='province' ? 'cur' : ''" @click="change('province')" style="border-right: none;">省级</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myimg:'province'
      }
    },
    methods:{
      change(type){
        this.myimg = type;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

