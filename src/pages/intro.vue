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
<template>
  <div class="commondiv" style="min-height: 700px;">
    <div style="width: 95%;margin-top: 30px;display: flex;min-height: 700px;">
        <div class="in-left">
          <ul>
            <li @click="changeTab('intro')" :class="mytype=='intro' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>本站介绍</span><span style="margin-left: 15px;" class="gico"></span></li>
            <li @click="changeTab('questin')" :class="mytype=='questin' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>常见问题</span><span style="margin-left: 15px;" class="gico"></span></li>
            <li @click="changeTab('phone')" :class="mytype=='phone' ? 'cur' : ''"><span style="margin-right: 15px;" class="gico"></span><span>联系我们</span><span style="margin-left: 15px;" class="gico"></span></li>
          </ul>
        </div>
      <div class="in-content">
            <div v-show="mytype=='intro'">
              通过水土保持大数据建设，实现水土保持预防监督、重点治理、监测管理等现有信息系统整合集成，推进水土保持业务的信息化应用与体制创新。实现与贵州省水利云、全国水土保持信息管理系统以及其他相关部门信息平台的互联互通，消除信息“孤岛”，有效整合水土保持相关数据资源，推动贵州省水土保持政府数据开放共享，充分发挥贵州省水土保持数据资源价值。
            </div>
            <div v-show="mytype=='questin'">
              <div>1、浏览器及屏幕分辨率的要求？
                建议将电脑显示屏的分辨率调整为1280×720像素、16位或以上的色彩标准。为使您得到更好的浏览效果，建议使用较新的浏览器版本，且浏览器必须支持javascript脚本和支持中文GBK编码。</div>
              <div class="mt20">2、如何找到您要的信息？
                在首页“站内检索”栏输入需要查看信息的关键字进行搜索查看。</div>
              <div  class="mt20">3、如何与我们联系？
                您如果在浏览本站的过程中遇到问题或有任何建议，请联系我们，通过电话或者邮件，将您的问题或宝贵意见提供给我们，我们将及时为您解决问题。</div>


              　
            </div>
            <div v-show="mytype=='phone'">
              <div>主办单位：</div>
              <div  class="mt10">运行维护：</div>
              <div class="mt10">地址：</div>
              <div class="mt10">邮编：</div>
              <div class="mt10">电子信箱：</div>
              <div class="mt10">电话：</div>
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
        mytype:'intro'
      }
    },
    mounted(){
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      $('.head-left').find('span').removeClass('cur');
      $('#intro').addClass('cur');
            $('#mysearch').hide();
    },
    methods:{
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
