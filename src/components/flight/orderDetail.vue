<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .f-box{
   /* box-shadow: rgb(0 0 0 / 8%) 0px 0px 2px 0px, rgb(0 0 0 / 16%) 0px 1px 4px 0px;
    border: 1px solid rgb(192, 202, 213);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);*/
    cursor: pointer;
    width: 100%;
    height: 150px;
    position: relative;
  }
  .content{
    width: 100%;
    display: flex;
    height: 100%;
  }
  .foot{
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .content .left{
    width: 75%;
  }
  .content .left .head{
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-align: left;
    padding-left: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  .content .left .main{
    width: 100%;
    height:calc( 100% - 38px );
    display: flex;
    padding-top: 7px;
  }
  .content .left .main .m-left{
    width: 20%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: center;*/
  }
  .content .left .main .m-left img{
    width: 30px;
    height:30px;
  }
  .content .left .main .m-right{
    width: 80%;
    height:100%;
    text-align: left;
    padding-right: 10px;
  }
  .content .left .main .m-right el-steps{
    width: 80%;
    height:100%;
  }
  .content .right{
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-left: 1px solid gray;
    justify-content: center;
  }

</style>
<style type="text/css">
  /*.el-step.is-horizontal:last-child{
   max-width: 12% !important;
  }*/
  .el-step__title{
    line-height: unset;
  }
</style>
<template>
  <div class="width100">
    <div class="f-box">
      <div class="content">
        <div class="left">
          <div class="head">
            <span>Nonstop</span>
            <span style="color: gray;">{{cardDetail.timeLong}} {{cardDetail.miles}}m</span>
          </div>
          <div class="main">
            <div class="m-left">
             <div><img src="../../assets/llogo.png"></div>
             <div>{{cardDetail.airlineName}}</div>
            </div>
            <div class="m-right">
              <el-steps :active="1" >
                <el-step :title="cardDetail.departureTime" :description="cardDetail.departureAirportName" icon="el-icon-s-promotion"></el-step>
                <el-step :title="cardDetail.arrivalTime" :description="cardDetail.destinationAirportName" icon="el-icon-s-promotion">></el-step>
              </el-steps>
              <!--  <el-steps :active="1" >
                <el-step title="11:43a" description="DTA" icon="el-icon-s-promotion"></el-step>
                <el-step title="13:45p" description="CCK" icon="el-icon-minus">></el-step>
                <el-step title="14:45p" description="ATL" icon="el-icon-s-promotion">></el-step>
              </el-steps> -->
            </div>
          </div>
        </div>
        <div class="right">
          <div style="font-weight: bold;">TOTAL PRICE</div>
          <div style="color: rgb(0, 170, 0);font-size: 28px;">${{price}}</div>
          <div v-if="passage" style="font-size: 14px;color: gray;">passage：{{passage}}</div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        
      }
    },
    props:['passage','price','cardDetail'],
    mounted(){
     $('#mysearch').hide();
    },
    methods:{
      
    },
  }
</script>


