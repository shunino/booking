<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .in-left{
    width: 170px;
    height:700px;
    margin-right: 1%;
  }
  .in-left ul{
    background: #F2F2F2;
    height: 100%;
    overflow: hidden;
  }
  .in-left ul li{
    color: #868686;
    text-align: center;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin-top: 15px;
  }
  .in-left ul li.cur{
    color: #416EFF;
  }
  .in-left ul li.cur .gico{
    display: inline-block;
  }
  .in-content{
    width: 85%;
    text-align: left;
    text-indent: 20px;
    line-height: 25px;
  }
  .gico{
    width: 18px;
    height: 5px;
    border-radius: 10px;
    background: #416EFF;
    display: inline-block;
    display: none;
  }
</style>
<!--  #F2F2F2 #416EFF-->
<template>
  <div class="commondiv" :style="'minHeight:'+myheight">
    <div style="width: 95%;margin-top: 30px;display: flex">
        <div class="in-left">
          <ul>
            <li @click="changeTab('garden1')" :class="mytype=='garden1' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>园区概况</span><span style="margin-left: 15px;" class="gico"></span></li>
            <li @click="changeTab('garden2')" :class="mytype=='garden2' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>园区功能</span><span style="margin-left: 15px;" class="gico"></span></li>
            <li @click="changeTab('garden3')" :class="mytype=='garden3' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>园区管理</span><span style="margin-left: 15px;" class="gico"></span></li>
            <li @click="changeTab('garden4')" :class="mytype=='garden4' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>园区互动</span><span style="margin-left: 15px;" class="gico"></span></li>
          </ul >
        </div>
      <div class="in-content">
            <div id="pSurvey" v-show="mytype=='garden1'">

            </div>
            <div id="pFunction" v-show="mytype=='garden2'">

            </div>
            <div id="pManager" v-show="mytype=='garden3'">

            </div>
            <div id="pInteract" v-show="mytype=='garden4'">

            </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Carousel from '@/components/home/carousel'
  import Rank from '@/components/home/rank'
  import Footer from '@/components/home/footer'

  import Table from '@/components/news/table'
  import List from '@/components/news/list'
  import NewDetail from '@/components/news/detail'

  import DemoList from '@/components/demo/list'

  import CommonList from '@/components/common/list'

  import DataItem from '@/components/datas/item'
  import DataTag from '@/components/datas/tag'
  import DataClass from '@/components/datas/class'
  import DataItemHead from '@/components/datas/itemHead'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myheight:'auto',
        mytype:'garden1',
        mydata:{}
      }
    },
    mounted(){
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      //$('.head-left').find('span').removeClass('cur');
      //$('#intro').addClass('cur');
      this.getDetail(this.$route.query.id);
      $('#mysearch').hide();
    },
    methods:{
      getDetail(id){
        this.$http.post('api/resshare/maintain/getPark',{id:id,token:this.$token}).then(res => {
          this.mydata = res.data.data;
          this.mydata.createtime =  this.mydata.createtime.split('T')[0];
          $('#pSurvey').html(this.mydata.p_survey);
          $('#pInteract').html(this.mydata.p_interact);
          $('#pManager').html(this.mydata.p_manager);
          $('#pFunction').html(this.mydata.p_function);

        }).catch(err => {
          console.log(err)
        })
      },
      changeTab(type){
        this.mytype = type;
      }
    },
    components: {
      'myhead': Head,
      'carousel': Carousel,
      'rank': Rank,
      'myfooter': Footer,
      'newstable': Table,
      'mylist': List,
      'demoList': DemoList,
      'commonList': CommonList,
      'newDetail': NewDetail,
      'dataItem': DataItem,
      'dataTag': DataTag,
      'dataClass': DataClass,
      'dataItemHead': DataItemHead
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
