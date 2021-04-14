<template>
  <div class="data-bg">
    <img class="data-img" src="../assets/vdata/bg0.jpg">
      <div class="data-title" style="flex-direction: column;height:10%;">
        <div>站网监测大数据</div>
         <div style="font-size:18px;">{{adnm}}</div>
      </div>
      <div class="data-content">
        <div class="d-left">
          <!--国家规划-->
          <div class="c-box" style="height: 35%;">
            <div class="c-title" style="height: 22%">日降雨量 <div class="munit">单位：mm</div></div>
            <div class="c-content" style="height: 78%">
             
              <line3 type="1" :mydata="rain1" myid='4353434'></line3>
            </div>
          </div>
          <!---->
          <div class="c-box" style="height: 35%;">
            <div class="c-title" style="height: 18%">月度径流深 <div class="munit">单位：mm</div></div>
            <div class="c-content" style="height: 82%">
             <line4 type="1" :mydata="left1" :myid="left1id"></line4>
            </div>
          </div>

          <div class="c-box" style="height: 22.5%;">
            <div class="c-title" style="height: 24%">月度土壤流失 <div class="munit">单位：t/hm²</div></div>
            <div class="c-content" style="height: 76%">
              <line4 type="2" :mydata="left2" :myid="left2id"></line4>
            </div>
          </div>
        </div>
        <div class="d-center">
          <div class="c-box" style="height: 67%;">
            <div class="c-title" style="height: 9%"></div>
            <div class="c-content" style="height: 91%">
              <mymap @myclick="update" :mydata="stationData" myid='9980465'></mymap>
            </div>
          </div>

           <div class="c-box" style="height: 23%;">
              <div class="c-title" style="height: 23%">实时动态</div>
              <div class="c-content" style="height: 77%">
                <myvideo @changeV="changeV" :mysrc="mysrc" :mydata="videoData"></myvideo>
              </div>
            </div>
        </div>
        <div class="d-right">
            <div class="c-box" style="height: 66%;">
              <div class="c-title" style="height: 14%">雨量数据</div>
              <div class="c-content" style="height: 86%;flex-direction: column;">
                    <div style="width: 100%;height: 50%;">
                        <div style="width: 100%;height: 10%;display: flex;align-items: center;justify-content: center;position: relative;">
                          月累计降雨量 <div class="munit">单位：mm</div>
                        </div>
                        <div style="width: 100%;height: 90%;display: flex;align-items: center;justify-content: center;">
                          <line3 type="2" :mydata="rain2" myid='4353433434'></line3>
                        </div>
                    </div>
                    <div style="width: 100%;height: 50%">
                        <div style="width: 100%;height: 10%;display: flex;align-items: center;justify-content: center;position: relative;">
                          总径流深<div class="munit">单位：mm</div>
                        </div>
                         <div style="width: 100%;height: 90%;display: flex;align-items: center;justify-content: center;">
                          <div style="width: 92%;height: 90%;"><bar2 type="1" :mydata="right1" myid='44348'></bar2></div>
                        </div> 
                    </div>
              </div>
            </div>
            <div class="c-box" style="height: 27%;">
              <div class="c-title" style="height: 20%;position: relative;">累计土壤流失<div class="munit">单位：t/hm²</div></div>
              <div class="c-content" style="height: 80%">
                <div style="width: 92%;height: 100%;"><bar2 type="2" :mydata="right2" myid='3343'></bar2></div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Pie1 from '@/components/vdata/pie1'
import Pie3 from '@/components/vdata/pie3'
import Num from '@/components/vdata/num'
import Round from '@/components/vdata/round'
import Line1 from '@/components/vdata/line1'
import Line2 from '@/components/vdata/line2'
import Line3 from '@/components/vdata/line3'
import Line4 from '@/components/vdata/line4'
import Bar1 from '@/components/vdata/bar1'
import Bar2 from '@/components/vdata/bar2'
import Monitor from '@/components/vdata/monitor'
import Center2 from '@/components/vdata/center2'

import Mymap from '@/components/vdata/mymap'
import Mymap1 from '@/components/vdata/mymap1'
import Myvideo from '@/components/vdata/myvideo'

export default {
  name: 'Home',
  data () {
    return {
      stationData:[],
      mocd:16,
      adnm:'西秀区三股水小流域径流场',
      rain1:[],
      rain2:[],
      left1:[],
      left2:[],
      right1:{},
      right2:{},
      videoData:[],
      mysrc:'',
      left1id:'545t',
      left2id:'898d',
      ustoken:'BCC227FE39DE96E21390024F05886ACA'
    }
  },
  mounted () {
    this.getStation();
    this.getRain();
    this.getLeft();
    this.getRight();
    this.getVideo();
    this.ustoken = location.href.split('&')[1].split('=')[1];
  },
  methods: {
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y+M+D+h+m+s;
    },
    update(mocd,name){
      this.mocd = mocd;
      this.adnm = name;
      //this.getStation();
      //this.getStation();
      this.getRain();
      this.getLeft();
      this.getRight();
      this.getVideo();
        console.log('更新'+mocd);
    },
    getStation(){
      this.$http.post('api/station/findStations',{token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.stationData = all;
      }).catch(err => {
        console.log(err)
      })
    },
    getRain(){
      let self = this;
      this.$http.post('api/station/findPptnLinesByMocd',{mocd:this.mocd,start:null,end:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          for(let i in all){
            all[i].mytime = all[i].gcrq;
            //console.log(self.timestampToTime(all[i].gcrq));
          }
          this.rain1 = all;
      }).catch(err => {
        console.log(err)
      })

      this.$http.post('api/station/findPptnSumLinesByMocd',{mocd:this.mocd,start:null,end:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          for(let i in all){
            all[i].mytime = all[i].gcrq;
            //console.log(self.timestampToTime(all[i].gcrq));
          }
          this.rain2 = all;
      }).catch(err => {
        console.log(err)
      })
    },
    getLeft(){
      this.$http.post('api/station/findJlnsLinesByMocd',{mocd:this.mocd,start:null,end:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          let num = Math.floor(Math.random()*10+1) * 3;
          // this.left1id = num +'yu';
          // this.left2id = num +'y66u';
          this.left1 = all;
          this.left2 = all;
      }).catch(err => {
        console.log(err)
      })
    },
    getRight(){
      this.$http.post('api/station/findJlnsSumLinesByMocd',{mocd:this.mocd,start:null,end:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          let arr = all;
          let name = [];
          let cdata1 = [];
          let cdata2 = [];
          for(let i in arr){
            name.push(arr[i].bz);
            cdata1.push(arr[i].zjll);
            cdata2.push(arr[i].trlsl);
          }
          //debugger;
          this.right1 = {name:name,value:cdata1};
          this.right2 = {name:name,value:cdata2};
      }).catch(err => {
        console.log(err)
      })
    },
    getVideo(){
      this.$http.post('api/station/findSwcJcStationChannelById',{mocd:this.mocd,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.videoData = all;
          this.mysrc = all[0].url1;
          
      }).catch(err => {
        console.log(err)
      })
    },
    changeV(item){
      this.mysrc = item.url1;
    }
  },
  components: {
    'pie1': Pie1,
    'pie3': Pie3,
    'round': Round,
    'line1': Line1,
    'line2': Line2,
    'line3': Line3,
    'line4': Line4,
    'bar1': Bar1,
    'bar2': Bar2,
    'monitor': Monitor,
    'num': Num,
    'center2': Center2,
    'mymap': Mymap,
    'mymap1': Mymap1,
    'myvideo': Myvideo
  }
}
</script>
<style type="text/css">
  ::-webkit-scrollbar {
        width: 10px;     

        height: 10px;

    }

::-webkit-scrollbar-thumb {

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: #393E44;

    }

::-webkit-scrollbar-track {

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: #EDEDED;

}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.munit{
  position: absolute;
  bottom:0px;
  left: 2%;
  font-size: 12px;
  color: white;
}
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
  
  .pie-box{
    width: 95%;
    height: 95%;
    /*background: red;*/
  }
  .pie-title{
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
  .pie-con{
    width: 100%;
    height: 92%;
  }

  .data-bg{
    width: 100%;
    height: 100%;
  }
  .data-img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 0px;
    z-index: -1;
  }
  .data-title{
    width:100%;
    height: 8%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0EF5F3;
    font-size: 35px;
    font-weight: bold;
  }
  .data-content{
    position: absolute;
    top:8%;
    left: 3.5%;
    display: flex;
    color: white;
    height: 92%;
    width: 96%;
    
    /*border:1px solid red;*/
  }
  .d-left{
    width: 26.9%;
   /* border: 1px solid white;*/
    height: 100%;
  }
  .d-center{
    margin-left: 0.8%;
    width: 41.3%;
    /*border: 1px solid white;*/
    height: 100%;
  }
  .d-right{
    margin-left: 1.1%;
    width: 27%;
    /*border: 1px solid white;*/
    height: 100%;
  }
  .c-box{
    width: 100%; 
  }
  .c-box .c-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0EF5F3;
    font-size: 27px;
    font-weight: bold;
    position: relative;
  }
  .c-box .c-content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
</style>
