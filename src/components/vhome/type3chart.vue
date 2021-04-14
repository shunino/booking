 <template>
 <div style="width:100%;height: 100%;">
    <div class="mytab">
      <span @click="changeC(1)" :class="type==1 ? 'cur' :'' ">降雨</span>
      <span @click="changeC(2)" :class="type==2 ? 'cur' :'' ">径流</span>
      <span @click="changeC(3)" :class="type==3 ? 'cur' :'' ">泥沙</span>
    </div>
    <div class="mychart rela" v-if="type==1">
      <span class="unit" style="bottom:10px;left:10px;">单位：mm</span> 
      <line3 myid="trtf5f5rt" :mydata="data1"></line3>
    </div>
    <div class="mychart rela" v-if="type!=1"> 
      <line2 :type="type" myid="tgh7" :mydata="dataq"></line2>
      <span class="unit" style="bottom:10px;left:10px;">单位：{{unit}}</span> 
    </div>
    <!-- <div class="mychart1" v-if="mydata.length==0"> 
      <span>此站点暂无数据！</span>
    </div> -->
    <!-- <div class="mychart" v-if="type==3"> 
      <line2 myid="sfyh6" :mydata="data3"></line2>
    </div> -->
 </div>
</template>

<script>
import Line2 from '@/components/vhome/line2'
import Line3 from '@/components/vhome/line3'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data1:[],
      dataq:[],
      data2:[],
      data3:[],
      type:1,
      left1:[],
      left2:[],
      rain2:[],
      unit:'mm'
    }
  },
  props: ['mydata','mocd'],
  watch:{
    mocd:{
        handler(newValue, oldValue) {
　　　　　　this.getLeft();
            this.getRain();
　　　　},
　　　　deep: true
    }
  },
  mounted () {
    //if(this.mydata.length!=0){
      this.getLeft();
      this.getRain();
      //this.init1();
    //}
  },
  methods: {
      getLeft(){
        this.$http.post('api/station/findJlnsLinesByMocd',{mocd:this.mocd,start:null,end:null,token:this.$Ctoken}).then(res => {
            let all = res.data.data;
            let num = Math.floor(Math.random()*10+1) * 3;
            // this.left1id = num +'yu';
            // this.left2id = num +'y66u';
            this.left1 = all;
            this.left2 = all;
            this.data2 = this.left1;
            this.data3 = this.left2;
            this.dataq = this.data2;
        }).catch(err => {
          console.log(err)
        })
      },
      getRain(){
        this.$http.post('api/station/findPptnSumLinesByMocd',{mocd:this.mocd,start:null,end:null,token:this.$Ctoken}).then(res => {
            let all = res.data.data;
            for(let i in all){
              all[i].mytime = all[i].gcrq;
              //console.log(self.timestampToTime(all[i].gcrq));
            }
            this.rain2 = all;
            this.data1 = this.rain2;
        }).catch(err => {
          console.log(err)
        })
      },
      init1(){
          this.data1 = this.rain2;
          this.data2 = this.left1;
          this.data3 = this.left2;
          this.dataq = this.data2;
      },
      init(){
        for(let i in this.mydata){
          if(this.mydata[i].type=='1'){
            this.data1.push(this.mydata[i]);
          } else if(this.mydata[i].type=='2'){
            this.data2.push(this.mydata[i]);
          } else if(this.mydata[i].type=='3'){
            this.data3.push(this.mydata[i]);
          }
        }
        this.dataq = this.data2;
      },
      changeC(type){
        if(type=="2"){
           this.unit = 'mm';
        } else if(type=="3"){
          this.unit = 't/hm²';
        }
        this.type=type;
      }
  },
   components: {
    'line2': Line2,
    'line3': Line3,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mychart1{
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mytab{
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
}
.rela{
  position: relative;
}
.unit{
  position: absolute;
  font-size: 12px;
}
.mytab span{
  display: inline-block;
  width: 100px;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
}
.mytab span.cur{
  border-bottom: 1px solid #45D7DA;
  color: #45D7DA;
}
.mychart{
  width: 100%;
  height: 90%;
}
</style>
