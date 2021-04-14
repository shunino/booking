<style scoped>
.ga-img{
  width: 100%;
  display: flex;
  flex-direction: column;
}
  .img-box{
    width: 100%;
    height: 230px;
  }
  .img-text{
    width:100%;
    margin-left: 1%;
    text-align: left;
    display: flex;
    margin-top: 10px;
    height: 26px;
    display: flex;
    font-size: 14px;
    align-items: center;
  }
.img-text-head{
  width:100%;
  text-align: center;
  display: flex;
  margin-top: 10px;
  height: 26px;
  flex-direction: column;
}
.img-text .icon{
  width:20px;
  margin-right: 10px;
}
</style>
<template>
  <div class="ga-img pointer" @click="goto(mydata.id)">
     <div class="img-box">
       <img style="width:100%;height:100%;" :src="$URL+'/file/'+mydata.cover">
     </div>
    <div class="img-text-head">{{mydata.name}}</div>
    <div class="img-text"><span class="el-icon-location icon"></span><span>{{mydata.address}}</span></div>
    <div class="img-text"><span class="el-icon-film icon"></span><span>{{mydata.size}} km2</span></div>
    <div class="img-text"><span class="el-icon-notebook-2 icon"></span><span>流失面积 {{mydata.losssize}} km2</span></div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        small:null
      }
    },
    props:['mydata','type'],
    mounted(){
      if(this.type=='1'){
        this.small= true;
      } else{
        this.small= false;
      }
    },
    methods:{
      goto(id){
        this.$router.push({path:'/gardenDetail',query:{id:id}});
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

