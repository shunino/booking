<style type="text/css">
  .anchorBL{
    display: none;
  }
</style>
<template>
  <div style="width: 100%;height: 100%;position: relative;">
    <div :id="myid" style="width: 100%;height: 100%;">
      
    </div>
    <div class="tulie">
        <span @click="backt1()" class="el-icon-caret-left
 micon icon1"></span>
  <span @click="backt2()" class="el-icon-caret-right
 micon icon2" ></span>
        <div class="imgdiv">
          <img src="../../assets/vmap/s1.png" />
          <span class="txt">观测站（国家级）</span>
        </div>
         <div class="imgdiv">
          <img src="../../assets/vmap/s2.png" />
          <span class="txt">观测站（省级）</span>
        </div>
         <div class="imgdiv">
          <img src="../../assets/vmap/s3.png" />
          <span class="txt">观测站（公告）</span>
        </div>
         <div class="imgdiv">
          <img src="../../assets/vmap/j1.png" />
          <span class="txt">径流场（国家级）</span>
        </div>
         <div class="imgdiv">
          <img src="../../assets/vmap/j2.png" />
          <span class="txt">径流场（省级）</span>
        </div>
         <div class="imgdiv">
          <img src="../../assets/vmap/j3.png" />
          <span class="txt">径流场（公告）</span>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      mymap:null
    }
  },
  props: ['myid','mydata'],
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　　this.initMap();
　　　　},
　　　　deep: true
    }
  },
  mounted () {
    if(this.mydata.length!=0){
      this.initMap();
    }
  },
  methods: {
    backt1(){
        $('.imgdiv').hide();
        $('.icon1').hide();
        $('.icon2').show();
        $('.tulie').animate({width:'30px'});
    },
    backt2(){
        $('.tulie').animate({width:'340px'},function(){
          $('.imgdiv').show();
        });
        $('.icon1').show();
        $('.icon2').hide(); 
    },
    initMap () {
     // 百度地图API功能
        this.mymap = new BMap.Map(this.myid);    // 创建Map实例
        this.mymap.centerAndZoom(new BMap.Point(106.63,26.65), 7);  // 初始化地图,设置中心点坐标和地图级别
        // 编写自定义函数,创建标注
        //开启鼠标滚轮缩放功能，仅对PC上有效
        this.mymap.enableScrollWheelZoom(true);

        // 将控件（平移缩放控件）添加到地图上
        this.mymap.addControl(new BMap.NavigationControl());

        //设备地图颜色
        var mapStyle={
            style:"midnight"
        };
        this.mymap.setMapStyle(mapStyle);
        //添加标注
        //debugger;
        this.addMarker(this.mydata);
    },
    addMarker(points) {
        var point, marker;
        // 创建标注对象并添加到地图   
        for (var i = 0, pointsLen = points.length; i < pointsLen; i++) {
            point = new BMap.Point(points[i].lgtd, points[i].lttd);
            var myIcon;
            // 判断正常或者故障，根据不同装填显示不同Icon 
            if (points[i].zhgc == "1") {
                let imgs = '';
                if(points[i].gjj==1&&points[i].ggxm==1){
                  imgs="s13";
                } else if(points[i].gjj==1){
                  imgs="s1";
                } else if(points[i].ggxm==1){
                  imgs="s3";
                } else if(points[i].sjzj==1){
                  imgs="s2";
                }
               // debugger;
                myIcon = new BMap.Icon(require("../../assets/vmap/"+imgs+".png"), new BMap.Size(30, 30), {
                    // 指定定位位置
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置    
                    //imageOffset: new BMap.Size(0, -12 * 25) 
                });
            } else {
              let imgs = '';
                if(points[i].gjj=='1'&&points[i].ggxm=='1'){
                  imgs='j13';
                } else if(points[i].gjj=='1'){
                  imgs='j1';
                } else if(points[i].ggxm=='1'){
                  imgs='j3';
                } else if(points[i].sjzj=='1'){
                  imgs='j2';
                } 
                myIcon = new BMap.Icon(require("../../assets/vmap/"+imgs+".png"), new BMap.Size(30, 30), {
                    // 指定定位位置
                    //offset: new BMap.Size(16, 32),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, -12 * 25)   
                });
            };
            //myIcon.setSize(30,30);
            // 创建一个图像标注实例
            marker = new BMap.Marker(point, {
                icon: myIcon,
                title : points[i].monm,
            });
            // 将覆盖物添加到地图上
            this.mymap.addOverlay(marker);

            //给标注点添加点击事件
            let self = this;
            (function() {
                var thePoint = points[i];
                marker.addEventListener("click", function() {
                    self.changeStation(thePoint);
                });
            })();
        }
    },
    changeStation(val){
      this.$emit('changeMap',val);
      console.log(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon2{
  display: none;
}
.tulie{
  width: 340px;
  height: 100px;
  background: white;
  bottom: 0px;
  left: 0px;
  position: absolute;
  z-index: 100;
  flex-wrap: wrap;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
}
.tulie .imgdiv{
  display: flex;
  flex-direction: column;
  width: 29%;
  margin-left: 2%;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 12px;
}
.tulie .imgdiv img{
  width: 26px;
  height: 30px;
}

.micon{
  color: black;
  font-size: 26px;
  position: absolute;
  right: 0px;
  top:34px;
  cursor: pointer;
}
</style>
