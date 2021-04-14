<style scoped>
.ga-map{
  width: 100%;
}
.ga-map .ga-head{
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  background: #416EFF;
  color: white;
}
.ga-map .ga-content{
  width: 100%;
  height: 400px;
  position: relative;
}
.ga-content{
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.ga-content .ga-tab{
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.ga-content .ga-tab>span.cur{
  border-bottom: 2px solid #45C8DB;
}
.ga-content .ga-tab>span{
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-right: 1px solid #E4E7ED;
  display: inline-block;
  cursor: pointer;
}
.mymap{
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class="ga-map">
    <div class="ga-head">
      园区导航
    </div>
    <div class="ga-content">
      <div class="mymap" id="mymap1"></div>
      <div class="ga-tab"><span @click="change('nation')" :class="myimg=='nation' ? 'cur' : ''">国家级</span><span :class="myimg=='province' ? 'cur' : ''" @click="change('province')" style="border-right: none;">省级</span></div>
    </div>

<!--    <div class="ga-content">-->
<!--        <img v-if="myimg=='nation'" style="width: 100%;height: 90%;" src="../../assets/map.png">-->
<!--        <img v-if="myimg=='province'" style="width: 100%;height: 90%;" src="../../assets/map.png">-->
<!--        <div class="ga-tab"><span @click="change('nation')" :class="myimg=='nation' ? 'cur' : ''">国家级</span><span :class="myimg=='province' ? 'cur' : ''" @click="change('province')" style="border-right: none;">省级</span></div>-->
<!--    </div>-->
  </div>
</template>

<script>
  import BMap from 'AMap'
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myimg:'province',
        map:null
      }
    },
    props:['mydata'],
    mounted(){
      this.map = new AMap.Map('mymap1', {
        zoom: 6,
        //center:[120.34294,23.992865]
      });
      let self = this;
      this.map.on('complete', function() {
          self.addMaker1();
      });
      // setTimeout(function () {
      //   self.addMaker1();
      // },2000)
      // var toolbar = new AMap.ToolBar();
      // map.plugin(toolbar);
      AMap.plugin('AMap.DistrictSearch', function () {
        var districtSearch = new AMap.DistrictSearch({
          // 关键字对应的行政区级别，country表示国家
          level: 'country',
          //  显示下级行政区级数，1表示返回下一级行政区
          subdistrict: 1
        })
        
        // 搜索所有省/直辖市信息
        districtSearch.search('中国', function(status, result) {
          // 查询成功时，result即为对应的行政区信息
        })
      })
// 将创建的点标记添加到已有的地图实例：
    },
    methods:{
      addMaker1(){
        let marlist = [];
        for(let i in this.mydata){
          let marker = new AMap.Marker({
             size: new AMap.Size(30, 30),
             imageSize: new AMap.Size(30,30),
            icon: require("../../assets/vmap/s13.png"),  //图片ip
            position: new AMap.LngLat(this.mydata[i].lon,this.mydata[i].lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: this.mydata[i].name,
            extData:this.mydata[i].id,
            clickable: true
          });
          marlist.push(marker);
          let self = this;
          AMap.event.addListener(marker, 'click', function(e) {
            console.log(marker);
            let id = marker.w.extData;
            console.log(id);
            self.goto(id)
          });
        }
        this.map.add(marlist);
      },
      goto(id){
        this.$router.push({path:'/gardenDetail',query:{id:id}});
      },
      addMaker(){
        let text = [{
            lat: 107.782602,
            lon: 26.550783
          },
          {
            lat: 105.782602,
            lon: 26.550783
          },
          {
            lat: 106.782602,
            lon: 26.550783
          },
        ]
        let marlist = [];
        for(let i in text){
          let marker = new AMap.Marker({
            position: new AMap.LngLat(text[i].lat,text[i].lon),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '北京'
          });
          marlist.push(marker)
        }
        this.map.add(marlist);
      },
      change(type){
        this.myimg = type;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

