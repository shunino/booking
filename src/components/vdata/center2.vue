<template>
  <div class="center2">
    <div class="title">方案态势图</div>
    <div class="box2">
      <div class="stitle">方案审批数</div>
      <div class="scon">
        <div class="pro-box" v-for="i in mydata1">
          <div class="lab">{{i.name}}</div>
          <div class="pro"><el-progress :text-inside="true" :stroke-width="22" :format="myformat" percentage="0"></el-progress></div>
          <div class="num">{{i.count}}</div>
        </div>
      </div> 
    </div>
    <div class="box2">
      <div class="stitle">方案审批进度（%）</div>
      <div class="scon">
        <gauge :mydata="mydata2" myid="trtrt"></gauge>
      </div> 
    </div>
  </div>
</template>

<script>
import Gauge from '@/components/vdata/gauge'
export default {
  name: 'HelloWorld',
  components: {
    'gauge': Gauge,
  },
  data () {
    return {
      
    }
  },
  props: ['myid','mydata1','mydata2'],
  mounted () {
    debugger;
  },
  methods: {
    myformat(percentage) {
         return percentage === 100 ? '满' : `${percentage}%`;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {
        width: 10px;     

        height: 10px;

    }

::-webkit-scrollbar-thumb {

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: #1B2638;

    }

::-webkit-scrollbar-track {

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: #EDEDED;

}
.center2{
  width: 95%;
  height: 95%;
  font-weight: bold;
}
.title{
  width: 60%;
    height: 8%;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 0 50% 50% 0;
    color: #12E4D0;
    padding-left: 2%;
    background-color: rgba(255,255,255,0.1);
    font-size: 24px;
}
.box2{
  width:100%;
  height: 45%;
  margin-top: 1%;
  border: 1px solid #3254D9;
}
.box2 .stitle{
    width:100%;
    height: 23%;
    display: flex;
    align-items: center;
    color: #12E4D0;
    font-size: 18px;
    text-indent: 12px;
    border-bottom: 1px solid #3254D9;
}
.box2 .scon{
  height: 75%;
  overflow: auto;
}
.box2 .scon .pro-box{
  display: flex;
  margin-top: 2%;
}
.box2 .scon .lab{
  width: 20%;
  text-align: center;
  font-size: 18px;
}
.box2 .scon .pro{
  width: 70%;
}
.box2 .scon .num{
  margin-left: 2%;
}

</style>
