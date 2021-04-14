<template>
 <div class="round-box">
    <div class="round" v-for="i in mydata">
      <div class="round-sum"><img src="../../assets/vdata/round.png"><span class="cnum">{{i.value}}</span></div>
      <div class="round-text">{{i.name}}</div>
      <div v-if="i.unit" class="round-text" style="margin-top:0;">单位：{{i.unit}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['myid','mydata'],
  mounted () {
    this.numInit();
    $('.round-sum').height($('.round-sum').width());
  },
  methods: {
    numInit() {
      $('.cnum').each(function(){
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        },{
          duration: 2500,
          easing: 'swing',
          step: function (now){
            $(this).text(now.toFixed(0));
          }
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round-box{
    width: 95%;
    height: 95%;
    background: none;
    display: -webkit-inline-box;
    overflow: auto;
  }
  .round{
    width: 33.3%;
    height:72%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .round .round-sum{
    width: 70%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
  .round .round-sum img{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0px;
    left:0px;
  }
  .round .round-text{
    width: 70%;
    text-align: center;
    margin-top: 10%;
    white-space: nowrap;
  }
</style>
