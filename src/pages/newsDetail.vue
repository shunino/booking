<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
  .ql-align-center{
    text-align: center;
  }
</style>
<style scoped>
  .new-detail{
    width: 70%;
  }
  .detail-head{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px dashed gray;
    font-size: 18px;
    font-weight: bold;
  }

  .detail-content{
    text-align: left;
    margin-top: 10px;
    font-size: 16px;
    text-indent: 20px;
        line-height: 35px;
  }

  /*.detail-content p{*/
  /*  text-align: left !important;*/
  /*}*/

  .txt{
    line-height: 30px;
    text-align: left;
    text-indent: 30px;
    margin-top: 40px;
  }
</style>
<template>
  <div class="commondiv" :style="'minHeight:'+myheight">
    <div v-show="is" class="new-detail ">
      <div class="detail-head">
        中国科学家领衔发现脉冲星自转状态突变导致星风云亮度变化
      </div>
      <div class="detail-content">
        <div style="font-size: 18px;text-align: center;">脉冲星是高速转动的强磁场中子星</div>
        <div class="key">
          关键词：脉冲星
        </div>
        <div class="zai">
          摘要：
          中国卫星导航与位置服务第八届年会暨中国北斗应用大会10日在河南省郑州市开幕。北斗卫星导航系统总设计师杨长风在开幕式上介绍，北斗卫星导航系统作为全球四大卫星导航的核心供应商，2018年年底正式向全球提供基本卫星导航服务；目前实现了全国一张网，提供了优质的高精度服务，开展了行业与区域应用；2020年前将如期完成北斗全球的全面建设，实现中国北斗、世界北斗、一流北斗的发展目标。
        </div>
        <div class="txt">
          脉冲星及脉冲星风云系统的示意图，中间的橙色部分代表脉冲星（仅为示意绘制，天体大小不反映实际比例）。中科院高能所/供图



          中新网北京8月27日电 (记者 孙自法) 记者27日从中国科学院高能物理研究所(中科院高能所)获悉，该所葛明玉副研究员、卢方军研究员带领的国际合作研究小组最新发现：位于大麦哲伦云星系中编号为PSR B0540-69的脉冲星，在自转减速率突然变大之后的一年多时间里，其星风云的X射线亮度逐渐增加了相当的比例。



          这是天文学家第一次观测到脉冲星自转状态突变导致脉冲星风云亮度变化的现象，为研究脉冲星自转减速机制、脉冲星磁场结构以及脉冲星风云的基本物理性质提供了重要的观测依据。由中国科学家领衔的这一重要天文发现成果相关论文，已获国际权威期刊《自然·天文学》在线发表。



          脉冲星是高速转动的强磁场中子星，是大质量恒星寿命晚期发生超新星爆发的过程中形成的，其半径只有10千米左右，而典型磁场约为一万亿高斯，相当于地球磁场的两万亿倍。根据脉冲星经典辐射理论，高速自转的脉冲星通过磁偶极辐射释放能量，同时自转减慢。但越来越多的理论家认为，高速旋转的磁场也会产生以接近光速向外运动的星风，这是导致脉冲星自转减慢的主要原因。脉冲星风和周围环境作用，会形成空间尺度为几光年(地球到太阳距离的十万倍左右)的脉冲星风云，著名的蟹状星云就是这样一个脉冲星风云。



          2011年12月，天文学家发现脉冲星PSR B0540-69的自转减速率突然增加约36%，然后保持稳定。此前，虽然在多颗脉冲星中也观测到这类脉冲星自转减速率突变的现象，但与之不同的是，PSR B0540-69脉冲星在自转减速率突变后，并没有表现出脉冲辐射特征的显著变化，其起因成为未解之谜。



          中科院高能所牵头的国际合作研究小组通过分析多颗X射线天文卫星对PSR B0540-69的观测数据发现，在该脉冲星发生自转减慢速率突变之后，围绕在其周围的脉冲星风云的亮度在约400天内逐渐增加了32±8%，与该脉冲星自转减速率的突变幅度相当。对比分析PSR B0540-69脉冲辐射和星风云辐射的特性，研究组认为，导致脉冲星自转减慢率突变的主要原因是脉冲星磁极区域的磁场升高。由于磁极区域磁场的变化和星风的强度直接相关，但对X射线脉冲辐射区的影响不大，因此可以合理地解释所有的观测现象。



          研究小组最新发表的这一重要天文发现成果，首次在观测上建立了从脉冲星自转减速率突变，星风增强到星风云变亮的时间和逻辑关系，也证明星风是导致该脉冲星自转变慢的主要原因。同时，星风云增亮的时标还表明，星风云中的磁场为约0.8毫高斯，这个直接测量值与之前在能量均分假设下推算的数值相当。
        </div>
        <div class="mt10" style="height: 300px;">
          <img style="width: 100%;height: 100%;" src="../../static/12.jpg">
        </div>
      </div>
    </div>

    <div v-show="myis" class="new-detail ">
      <div class="detail-head">
       {{title}}
      </div>
      <div class="detail-content" id="newsDetailContent">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title:'',
        is:false,
        myis:true,
        contents:'',
        myheight:'auto',
      }
    },
    mounted () {
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
            $('#mysearch').hide();
      console.log('rrr');
      console.log(this.$route.query);
      if(this.$route.query.id){
        this.getDetail(this.$route.query.id);
      } else{
        this.is=true;
        this.myis = false;
      }
    },
    methods:{
      getDetail(id){
        this.$http.post('api/resshare/maintain/getNews',{id:id,token:this.$token}).then(res => {
            this.title = res.data.data.title;
            $('#newsDetailContent').html(res.data.data.contents);
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>


