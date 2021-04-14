<style type="text/css">
/* @import url(http://127.0.0.1:8080/static/arcgis4.9/arcgis_js_api/library/4.9/dijit/themes/claro/claro.css);*/
  @import url('http://58.42.237.169:8081/other/static/arcgis4.9/arcgis_js_api/library/4.9/esri/css/main.css');
  /*.ol-attribution,.ol-zoom { display: none;}*/
  .esri-ui{display: none;}
  .myback{
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 100;
  }
</style>
<template>
  <div class="commondiv" style="min-height: 720px;position:relative;height:100%;">
     <el-button class="myback primary" @click="getback" type="primary"><span class="el-icon-back mr10"></span>返回专题展示</el-button>
    <div v-show="myload" class="myload">加载中......</div>
    <div :style="'width:'+width+'px;height:'+height+'px'" v-if="tool!=''" class="img-box" ><img style="width:100%;height:100%;" :src="$URL+'/file/'+tool"></div>
    <div id="viewDiv" style="width:1400px;height:720px;min-height: 720px;"></div>
    <!-- <div id="viewDiv" style="width:1400px;height:720px;min-height: 720px;"></div> -->
    <!-- <div id="map" ref="rootmap" style="width:100%;height:500px;"></div> -->
  </div>
</template>
<script>
import esriLoader from 'esri-loader'
export default {
  data() {
    return {
      map: null,
      tool:'',
      myload:true,
      width:500,
      height:200,
      type:'',
    };
  },
  mounted() {
    let self = this;
    //setTimeout(function(){
      self.init1();
   // },1000);
    $('#mysearch').hide();
  },
  methods: {
    init1(){
      let id = this.$route.query.id;
      this.$http.post('api/resshare/maintain/getSpecial',{id:id}).then(res => {
          let myda = res.data.data;
          this.init(myda.mapservice,myda.imageparams,myda.imagewidth,myda.imageheight,myda.typeflag)
        }).catch(err => {
          console.log(err)
        })
    },
    getback(){
        this.$router.push({path:'/show',query:{type:this.type}});
    },
    init(link,imageparams,width,height,type){
      // let link = this.$route.query.link;
      // let imageparams = this.$route.query.imageparams;
      this.width = width;
      this.height = height;
       this.type = type;
      let coverlayerflag = this.$route.query.coverlayerflag;
      let tileMapUrl = "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer";
      let options = {
        url:"http://58.42.237.169:8081/other/static/arcgis4.9/arcgis_js_api/library/4.9/dojo/dojo.js"
      }
      this.tool = imageparams;
          esriLoader.loadModules ([
                "esri/Map",
                "esri/Basemap",
                "esri/layers/TileLayer",
                "esri/views/MapView",
                "esri/layers/MapImageLayer",
            ],options)
            .then (([
                       Map, Basemap,TileLayer,MapView,MapImageLayer
                    ]) => {
            let layer1 = new TileLayer({
              url: tileMapUrl
            });
            let baseMap = new Basemap({
              baseLayers: [layer1],
              title: "Custom Basemap",
              id: "myBasemap"
            })
            var map = new Map({
              basemap: baseMap,
              //layers: [layer]
            });

            // Add the map to a MapView
            const view = new MapView({
              container: "viewDiv",
              map: map,
              center: [106.63,26.65],
              zoom: 7,
            });
          //let link  = 'http://222.85.224.99:8901/arcgis/rest/services/shuibao/baselayers/MapServer/16';
          let arr = link.split('/');
          let len = arr.length - 1;
          let liarr = [];
          for(let i=0;i<len;i++){
            liarr.push(arr[i]);
          }
          let li = liarr.join('/');
          var layer = new MapImageLayer({
            id:'545f',
            url: li,
            sublayers: [
                        {
                            id: arr[len],
                            visible:true
                        },  
                    ]
          }); 
          map.add(layer);
          this.myload = false;
        }, reason => {
            console.log (reason);
        })
    }
  }
};
 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-box{
  width: 200px;
  height: 500px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 2;
}
.myload{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top:0px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
</style>
