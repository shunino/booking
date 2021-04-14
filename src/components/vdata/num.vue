<template>
  <div class="num-box">
    <div class="num-flex">
        <div class="num-txt">
          已补偿缴费
        </div>
        <div class="num-s">
          {{(mydata.payAmount/10000).toFixed(0)}}万元
        </div>
    </div>
    <div class="num-flex" style="margin-top: -5%;">
        <div class="num-all">
          {{(all/10000).toFixed(0)}}
        </div>
        <div class="num-all-txt">
          补偿总额（万元）
        </div>
    </div>
    <div class="num-flex">
        <div class="num-txt">
          未补偿缴费
        </div>
        <div class="num-s">
          {{(nopay/10000).toFixed(0)}}万元
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      all:'',
      nopay:''
    }
  },
  props: ['myid','mydata'],
  watch:{
    mydata:{
        handler:function(val,oldval){
          this.all = this.mydata.payAmount-this.mydata.noPayAmount;
          this.nopay = 0 - this.mydata.noPayAmount;
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
  },
  mounted () {
    //this.numInit();
    this.all = this.mydata.noPayAmount+this.mydata.payAmount;
    //debugger;
  },
  methods: {
    numInit() {
      $('.num-all').each(function(){
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        },{
          duration: 2500,
          easing: 'swing',
          step: function (now){
            $(this).text((now/10000).toFixed(2));
          }
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@font-face{font-family:electronicFont;src:url(../../assets/font/DS-DIGIT.TTF) format('truetype')}*/
  .num-box{
    width: 95%;
    height: 95%;
    display: flex;
  }
  .num-flex{
    width: 33.3%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .num-flex .num-txt{
    font-size: 14px;
    color:#1B85AB;
      font-weight: bold;
  }
  .num-flex .num-s{
   margin-top: 3%;
  }
  .num-flex .num-all{
    color: #01C9F8;
    font-size: 42px;
    font-family:electronicFont ;
  }
  .num-flex .num-all-txt{
    font-size: 15px;
    color:#1B85AB;
        font-weight: bold;
  }
</style>
