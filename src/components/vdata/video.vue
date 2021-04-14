<template>
 <div class="round-box">
    <div class="round">
      <video ref="videoRef" style="width100%;height100%;" controls="controls">
      your browser does not support the video tag
      </video>
    </div>
    <div class="round">
     <video style="width100%;height100%;" src="/i/movie.ogg" controls="controls">
      your browser does not support the video tag
      </video>
    </div>
    <div class="round">
      <video style="width100%;height100%;" src="/i/movie.ogg" controls="controls">
      your browser does not support the video tag
      </video>
    </div>
   <div class="round">
     <video style="width100%;height100%;" src="/i/movie.ogg" controls="controls">
      your browser does not support the video tag
      </video>
    </div>
  </div>
</template>

<script>
import Hls from 'hls.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['myid'],
  mounted () {
    var hls = new Hls();
    debugger;
    hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
    hls.attachMedia(this.$refs.videoRef);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      this.$refs.videoRef.play();
    });
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
