<style scoped>
.per-content{
  width: 100%;
  display: flex;
  margin-top: 20px;
  min-height: 800px;
}
.per-left{
  width: 200px;
  display: flex;
  border-right: 1px solid #E4E7ED;
  flex-direction: column;
  padding-left: 15px;
}
.per-left .per-avater{
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.per-left .per-menu{
  width: 100%;
  align-items: center;
  justify-content: center;
}
.per-left .per-menu li{
  height: 44px;
  border-bottom: 1px solid #E4E7ED;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.per-left .per-menu li.cur{
    background: #416EFF;
  color: white;
}
  .per-center{
    padding: 10px 20px;
    width: 1000px;
  }

.per-left .per-menu .showdiv li.cur{
  color: #416EFF;
  background: white;
}
.per-left .per-menu .showdiv li{
  font-size: 14px;

}
</style>
<template>
  <div class="commondiv">
    <div class="per-content">
        <div class="per-left">
         <!-- <div class="per-avater">
           <img style="width:90%;height: 90%" src="../../static/ata.jpg">
         </div> -->
          <div class="per-menu">
              <ul>
<!--                <li style="display: none" v-show="isAdmin"  id="perHome" @click="changTab('perHome')">首页管理</li>-->
                <li  class="cur" id="perShare" @click="changTab('perShare')">我的共享</li>
                <li v-show="isAdmin"  id="perNews" @click="changTab('perNews')">新闻动态</li>
<!--                <li style="display: none" v-show="isAdmin"  id="perDatas" @click="changTab('perDatas')">数据中心</li>-->


                <li v-show="isAdmin"  id="perDemo" @click="changTab('perDemo')">专题展示</li>

                <div class="showdiv" style="display: none">
                  <li id="perDemo1" @click="changTab1('perDemo1')">大数据</li>
                  <li id="perDemo2" @click="changTab1('perDemo2')">预防监督</li>
                  <li id="perDemo3" @click="changTab1('perDemo3')">综合治理</li>
                  <li id="perDemo4" @click="changTab1('perDemo4')">监测预报</li>
                  <li class="showbo" v-show="isAdmin" id="perGarden" @click="changTab1('perGarden')">生态文明示范</li>
                  <li  class="showbo" v-show="isAdmin" id="perPop" @click="changTab1('perPop')" >科技推广</li>
                </div>

                <li style="border-bottom: none" v-show="isAdmin" id="perver" @click="changTab('perver')" >审核数据</li>

                <li v-show="isUser" id="perReposit" @click="changTab('perReposit')">我的收藏</li>
                <li v-show="isUser" id="perDown" @click="changTab('perDown')">下载历史</li>
                <li style="border-bottom: none" v-show="isUser" id="perIntro" @click="changTab('perIntro')">个人资料</li>
              </ul>
          </div>
        </div>
      <div class="per-center" >
          <share @upload="changDetail" @cshare="cshare" v-if="tabtype=='perShare'" class="perShare perCom"></share>
          <reposit v-if="tabtype=='perReposit'" class="perReposit perCom"></reposit>
          <down v-if="tabtype=='perDown'" class="perDown perCom"></down>
          <intro @changeName="changeName" v-if="tabtype=='perIntro'" class="perIntro perCom"></intro>
          <garden v-if="tabtype=='perGarden'" class="perGarden perCom"></garden>
          <verForm v-if="tabtype=='perver'" class="perver perCom"></verForm>
          <!--  admin      -->
          <homeForm v-if="tabtype=='perHome'" class="perHome perCom"></homeForm>

          <demoForm  v-if="tabtype=='perDemo1'" type="1" class="perDemo perCom"></demoForm>
          <demoForm  v-if="tabtype=='perDemo2'" type="2" class="perDemo perCom"></demoForm>
          <demoForm  v-if="tabtype=='perDemo3'" type="3" class="perDemo perCom"></demoForm>
          <demoForm  v-if="tabtype=='perDemo4'" type="4" class="perDemo perCom"></demoForm>

          <datasForm v-if="tabtype=='perDatas'" class="perDatas perCom"></datasForm>
          <newsForm v-if="tabtype=='perNews'" class="perNews perCom"></newsForm>
          <popForm v-if="tabtype=='perPop'" class="perPop perCom"></popForm>
          <!-- 内部组件  -->
          <shareForm :shareData="shareData" @upload="changDetail" v-if="tabtype=='shareForm'"></shareForm>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/home/Head'
import Footer from '@/components/home/footer'

import Garden from '@/components/personal/garden'
import Share  from '@/components/personal/share'
import Down from '@/components/personal/down'
import Intro from '@/components/personal/intro'
import Reposit from '@/components/personal/reposit'

import ShareForm from '@/components/personal/shareForm'

import HomeForm  from '@/components/personal/admin/homeForm'
import DemoForm  from '@/components/personal/admin/demoForm'
import DatasForm  from '@/components/personal/admin/datasForm'
import NewsForm  from '@/components/personal/admin/newsForm'
import PopForm  from '@/components/personal/admin/popularForm'

import VerForm  from '@/components/personal/admin/verify'
export default {
  name: 'Home',
  data () {
    return {
      tabtype:'perShare',
      isAdmin:true,
      isUser:true,
      shareData:{}
    }
  },
  mounted(){
          $('#mysearch').hide();
    var user = this.$getCookie('username');
    if(user=='admin'){
      this.isAdmin = true;
      this.isUser = false;
      // let tab = 'perNews';
      // $('.per-menu').find('ul li').removeClass('cur');
      // $('#'+tab).addClass('cur');
      // console.log(tab);
      // this.tabtype = tab;
    } else if(user=='shu'){
      this.isAdmin = true;
      this.isUser = true;
    } else{
      this.isAdmin = false;
      this.isUser = true;
    }
    $('.head-left').find('span').removeClass('cur');
    $('#personal').addClass('cur');
  },
  methods: {
    cshare(data){
      this.shareData = data;
      this.tabtype = 'shareForm';
    },
    changeName(name){
      console.log(name);
    },
    changTab1(tab) {
        $('.per-menu').find('ul .showdiv li').removeClass('cur');
        $('#'+tab).addClass('cur');
        console.log(tab);
        this.tabtype = tab;
    },
    changTab(tab) {
      if(tab=='perDemo'){
        $('.per-menu').find('ul li').removeClass('cur');
        $('#'+tab).addClass('cur');
        //this.tabtype = tab;
        if($(".showdiv").is(":hidden")){
          $(".showdiv").show();
        } else{
          $(".showdiv").hide();
        }
      } else {
        $('.per-menu').find('ul li').removeClass('cur');
        $('#'+tab).addClass('cur');
        console.log(tab);
        this.tabtype = tab;
        $(".showdiv").hide();
      }
    },
    changDetail(tab) {
      this.shareData={};
      this.tabtype = tab;
      console.log(this.tabtype);
    },
  },
  components: {
    'myhead': Head,
    'myfooter': Footer,
    'garden': Garden,
    'share': Share,
    'down': Down,
    'intro': Intro,
    'reposit': Reposit,
    'shareForm': ShareForm,
    'homeForm':HomeForm,
    'demoForm':DemoForm,
    'datasForm':DatasForm,
    'newsForm':NewsForm,
    'popForm':PopForm,
    'verForm':VerForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

