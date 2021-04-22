<style scoped>
  .f-box{
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 2px 0px, rgb(0 0 0 / 16%) 0px 1px 4px 0px;
    border: 1px solid rgb(192, 202, 213);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    width: 700px;
    height: 150px;
    margin-top: 20px;
    position: relative;
  }
  .content{
    width: 100%;
    display: flex;
    height: 80%;
    border-bottom:1px solid gray;
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
        margin-top: -5px;
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
  .buy{
    position: absolute;
    top:48px;
    right: 20px;
    display: none;
  }
  .f-box:hover .buy{
    display: block;
  }
</style>
<template>
  <div class="commondiv">
   <div class="width:80%">
     <div class="f-box" v-for="i in 5">
        <div class="content">
          <div class="left">
            <div class="head">
              <span>Nonstop</span>
              <span style="color: gray;">1h 58m</span>
            </div>
            <div class="main">
              <div class="m-left">
               <div><img src="../assets/llogo.png"></div>
               <div>SIC</div>
              </div>
              <div class="m-right">
                <el-steps :active="1" >
                  <el-step title="11:43a" description="DTA" icon="el-icon-s-promotion"></el-step>
                  <el-step title="14:45p" description="ATL" icon="el-icon-s-promotion">></el-step>
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
            <div style="font-weight: bold;">BASIC ECONOMY</div>
            <div style="color: rgb(0, 170, 0);font-size: 28px;">$100</div>
            <div style="font-size: 14px;color: gray;">one-way</div>
          </div>
        </div>
        <div class="foot">
          <span><i class="el-icon-check mr-10"></i> Free cancellation available</span>
        </div>
        <div class="buy" @click="toBuy()">
          <el-button type="primary">主要按钮</el-button>
        </div>
      </div>
   </div>
  </div>
</template>
<style>
::-webkit-scrollbar {
        width: 10px;     

        height: 10px;

    }

::-webkit-scrollbar-thumb {

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: #A5A5A5;

    }

::-webkit-scrollbar-track {

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: white;

}
</style>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
  
    }
  },
  mounted(){
   $('#mysearch').show();
  },
  methods:{
    toBuy(){
      this.$router.push({path:'/flight'});
    }
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
