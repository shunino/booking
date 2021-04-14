<style type="text/css">
  .vpro .el-progress-bar__innerText{
  color: #393E44;
 }
 /*.el-progress-bar__inner{
    display: flex;
    align-items: center;
    justify-content: center;
  }*/
</style>
<template>
   <div class="vpro" style="width:94%;height: 100%;">
      <div class="vpdiv">
        <div class="label">省级：</div>
        <el-progress class="cpc" color="#E26B52" :stroke-width="22" :text-inside="true"  :format="myformat1" :percentage="(mydata[0].accepted / mydata[0].total) * 100"></el-progress>
        <div>共{{mydata[0].total}}</div>
      </div>
      <div class="vpdiv">
        <div class="label">市级：</div>
        <el-progress class="cpc" color="#C63ED3" :stroke-width="22" :text-inside="true"  :format="myformat2" :percentage="(mydata[1].accepted / mydata[1].total) * 100"></el-progress>
        <div>共{{mydata[1].total}}</div>
      </div>
      <div class="vpdiv">
        <div class="label">县级：</div>
        <el-progress class="cpc" color="#45D7DA" :stroke-width="22" :text-inside="true"  :format="myformat3" :percentage="(mydata[2].accepted / mydata[2].total) * 100"></el-progress>
        <div>共{{mydata[2].total}}</div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  props: ['mydata'],
  mounted () {
    //this.loadChart();
  },
  methods: {
    myformat1(percentage) {
       return '已验收'+this.mydata[0].accepted;
    },
     myformat2(percentage) {
       return '已验收'+this.mydata[1].accepted;
    },
     myformat3(percentage) {
       return '已验收'+this.mydata[2].accepted;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vpdiv{
  display: flex;
  align-items: center;
  height: 30%;
  font-size: 20px;
  margin-left:1%;
}
.cpc{
  width: 60%;
  margin-right: 2%;
  margin-left: 2%;
}
</style>
