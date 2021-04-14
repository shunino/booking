<template>
 <div class="round-box">
    <div v-if="mydata.length==0" class="v-empty">此站点暂时无实时动态视频！</div>
    <div class="round" style="width:80%;margin-top:-15px;" v-if="mydata.length!=0">
        <video
          id="euziplayer"
          poster=""
          controls
          playsInline
          webkit-playsinline
          style="width:100%;height:100%;"
          v-if="reFresh"
        >
            <source :src="mysrc"  />
        </video>
    </div>
    <div class="round vct" style="width:20%;flex-wrap: wrap;height:100%;" v-if="mydata.length!=0">
        <div class="pointer zit" @click="changeV(item)" v-for="(item,index) in mydata"><!-- <span class="el-icon-video-camera-solid vcss"></span> -->{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import Hls from 'hls.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      reFresh:true,
       player:null,
       playUrl:'',
       playerOptions:[],
       playerOption: {
         // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
         autoplay: true, // 如果true,浏览器准备好时开始回放。
         muted: false, // 默认情况下将会消除任何音频。
         loop: false, // 导致视频一结束就重新开始。
         preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
         language: 'zh-CN',
         aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
         fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
         sources: [
           {
            type: 'application/x-mpegURL', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: 'http://hls01open.ys7.com/openlive/6284dd1c8b6340a383c8ca0d6f664173.hd.m3u8' // url地址
           }
         ],
         hls: true,
         //poster: 'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg', // 你的封面地址
         notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
         controlBar: {
          timeDivider: true,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
         }
        },
    }
  },
  props: ['mydata','mysrc'],
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　　this.init();
　　　　},
　　　　deep: true
    },
    mysrc:{
        handler(newValue, oldValue) {
　　　　　 this.init();
          this.reFresh= false
          this.$nextTick(()=>{
          this.reFresh = true;          
          })
　　　　},
    }
  },
  mounted () {
      if(this.mydata.length!=0){
        this.init();
      }
  },
  methods: {
    changeV(item){
      this.$emit('changeV',item);
    },
    init(){
        let arr = this.mydata;
        let self = this;
        setTimeout(function(){
          self.player = new EZUIPlayer('euziplayer');
        },'500');
    },
    onPlayerPlay(e){
      console.log(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-empty{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zit{
  margin-top: 5px;
}
.vct div{
 width: 100px;
 text-align: center;
}
.vcss{
  margin-right:15px;
  color: #0EF5F3;
}
.round-box{
    width: 95%;
    height: 95%;
    background: none;
    display: -webkit-inline-box;
    overflow: auto;
  }
  .round{
    width: 33.33%;
    height:100%;
    margin-left: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .round .round-sum{
    width: 70%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
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
  }
</style>
