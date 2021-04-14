<template>
  <div id="app" >
<!--    <img src="./assets/logo.png">-->
<!--    <img style="position: absolute;-->
<!--    height: 100%;-->
<!--    width: 100%;-->
<!--    z-index: -1;" src="../static/1.jpg" />-->
    <div v-if="!vdata">
      <!-- <div style="width: 100%;display: flex;justify-content: center;background: #F9F9F9;">
        <div style="width: 1245px;background: white;display: flex;justify-content: center;flex-direction: column;"> -->
          <top></top>
       <!--  </div>
      </div> -->
      <myhead id="myhead"></myhead>
      <search id="mysearch"></search>
      <div id="mydiv" style="width: 100%;display: flex;justify-content: center;background: #F7F6FD;padding-bottom: 20px;">
        <div style="width: 1400px;display: flex;justify-content: center;flex-direction: column;height:100%;">
          
            <router-view/>
          
        </div>
      </div>
      <myfooter></myfooter>
    </div>
    <div v-if="vdata" class="vdataDiv" >
      
        <router-view/>
     
    </div>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Top from '@/components/home/top'
  import Search from '@/components/home/search'
  import Footer from '@/components/home/footer'

  $(function () {
    let win =  window.innerHeight;
    let he = win - 220 +'px';
    $('.commondiv').css({'minHeight':he});
    // window.console = (function () {
    //
    //   var c = {};
    //
    //   c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
    //
    //   return c;
    //
    // })();
  })
export default {
  name: 'App',
  components: {
    'myhead': Head,
    'top':Top,
    'myfooter': Footer,
    'search':Search
  },
  data () {
    return {
      vdata: false,
    }
  },
  updated () {
　　　　if(this.$route.query.isdata){
        this.vdata = true;
      } else{
       this.vdata = false;
      }

　　},
  mounted () {
    if(this.$route.query.isdata){
        this.vdata = true;
      } else{
       this.vdata = false;
      }
  }
}
</script>
<style>
  .vdataDiv{
    min-height: 768px;
      min-width: 1729px;
      position: relative;
      width: 100%;
      height: 100%;
  }
  .el-button--primary{
    background:#416EFF ;
    border-color:#416EFF ;
  }
   .el-tabs__item{
     font-size: 16px;
     color: #666666;
   }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .commondiv {
    display: flex;text-align: center;flex-direction: column;align-items: center;
  }
  .pointer{
    cursor: pointer;
  }
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
  html,body,#app{
    height: 100%;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
  .ml10{
    margin-left: 10px;
  }
  .mr10{
    margin-right: 10px;
  }
  .mb10{
    margin-bottom: 10px;
  }
  .mt10{
    margin-top: 10px;
  }
  .mt20{
    margin-top: 20px;
  }
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
  .center{
    text-align: center;
  }
  a{
    text-decoration: none;
    color: #00A8FF;
  }
  .mya{
    color:#7F7F7F;
    cursor: pointer;
  }
  .myhead{
    font-size: 20px;
  }
  .myborder{
    border-color: #426EFF;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin:0px;
  }
  *{
    /*font-size: 16px;*/
    font-family: Microsoft YaHei;
  }
</style>
