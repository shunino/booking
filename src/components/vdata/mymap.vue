<template>
 <div :id="myid" style="width:100%;height: 100%;">

 </div>
</template>

<script>
import BMap from 'AMap'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      map:null
    }
  },
  props: ['myid','mydata'],
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　　this.addMaker();
　　　　},
　　　　deep: true
    }
  },
  mounted () {
   this.map = new BMap.Map(this.myid, {
        zoom: 7,
        center:[106.95666666666666,26.888055555555557]
      });
    let self = this;
    var styleName = "amap://styles/" + 'dark';
    this.map.setMapStyle(styleName);
    setTimeout(function () {
      if(self.mydata.length!=0)
      self.addMaker();
    },1000)
  },
  methods: {
    addMaker(){
        //debugger;
        let marlist = [];
        for(let i in this.mydata){
          let marker = new AMap.Marker({
            position: new AMap.LngLat(this.mydata[i].lgtd,this.mydata[i].lttd),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: this.mydata[i].monm,
            extData:this.mydata[i].mocd,
            clickable: true
          });
          marlist.push(marker);
          let self = this;
          AMap.event.addListener(marker, 'click', function(e) {
            console.log(marker);
            let id = marker.w.extData;
            let name = marker.w.title;
            console.log(id);
            self.$emit('myclick',id,name);
          });
        }
        this.map.add(marlist);
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
