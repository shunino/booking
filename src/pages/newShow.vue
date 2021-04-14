<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .da-left{
    width: 19%;
    margin-right: 1%;
  }
  .da-center{
    width: 80%;
  }
  .left-bottom .bottom-head{
      text-align: left;
    border-bottom: 3px solid #426EFF;
    height: 35px;
    line-height: 30px;
    font-weight: bold;
    font-size: 20px;
  }
  .list-li>span{
    font-size: 13px !important;
    color: gray;
  }
  .data-class{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    font-size: 16px;
    border: 1px solid #E4E4E4;
    border-top:3px solid #426EFF;
  }
  .class-intro{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  .class-con .con-head{
    height: 35px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 10px;
  }
  .class-con .con-head.cur{
    background: #0C275D;
    color: white;
  }
  .data-list{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    border: 1px solid #E4E4E4;
    border-top:3px solid #426EFF;
  }
</style>
<template>
  <div class="commondiv" style="min-height: 750px;">
    <div style="width: 95%;margin-top: 10px;display: flex">
        <div class="da-left" >
          <div class="left-top">
             <div class="data-class">
                <div class="class-intro">
                  专题分类体系
                </div>
                <div class="class-con">
                  <div class="con-head" :class="mytype=='1' ? 'cur' : ''">
                    <span style="cursor: pointer;" @click="changeType(1)">大数据专题</span>
                  </div>
                  <div class="con-head" :class="mytype=='2' ? 'cur' : ''">
                    <span style="cursor: pointer;" @click="changeType(2)">预防监督专题</span>
                  </div>
                  <div class="con-head" :class="mytype=='3' ? 'cur' : ''">
                    <span style="cursor: pointer;" @click="changeType(3)">综合治理专题</span>
                  </div>
                  <div class="con-head" :class="mytype=='4' ? 'cur' : ''">
                    <span style="cursor: pointer;" @click="changeType(4)">监测预报专题</span>
                  </div>
                   <div class="con-head" :class="mytype=='5' ? 'cur' : ''">
                    <span style="cursor: pointer;" @click="changeType(5)">生态文明示范专题</span>
                  </div>
                   <div class="con-head" :class="mytype=='6' ? 'cur' : ''">
                    <span style="cursor: pointer;" @click="changeType(6)">科技推广</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="da-center">
            <div class="data-list">
                <newList v-if="mytype<6" :type="mytype"></newList>
                <popular v-if="mytype==6"></popular>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import NewList from '@/components/demo/newList'
  import Popular from './popular'
  export default {
    name: 'Home',
    data () {
      return {
       mytype:'1'
      }
    },
    mounted(){
        $('.head-left').find('span').removeClass('cur');
        $('#show').addClass('cur');
        $('#mysearch').hide();
        if(this.$route.query.type){
          this.changeType(this.$route.query.type);
        }
    },
    methods:{
      changeType(type){
          this.mytype = type;
      }
    },
    components: {
      'newList': NewList,
      'popular': Popular,
    }
  }
</script>


