<template>
  <div class="commondiv">
    <div style="width: 95%;margin-top: 30px;min-height: 700px;">
      <div style="">
        <mymap1 :mydata="tableData" style="width: 100%;"></mymap1>
<!--        <div style="width: 60%;margin-left: 1%;height: 100%;margin-top: 40px;" >-->
<!--          <myimg type="1" :mydata="tableData[0]" style="width: 100%;height: 145px;margin-bottom: 10px;" ></myimg>-->
<!--          <myimg type="1" :mydata="tableData[1]" style="width: 100%;height: 145px" ></myimg>-->
<!--        </div>-->
      </div>
      <div style="margin-top: 40px;display: flex;justify-content: space-between;">
        <myimg1 v-for="(item,index) in tableData" v-if="index<3" type="2" :mydata="item"
               style="width: 30%;" ></myimg1>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Carousel from '@/components/home/carousel'
  import Rank from '@/components/home/rank'
  import Footer from '@/components/home/footer'

  import Map1 from '@/components/garden/map1'
  import Img1 from '@/components/garden/img1'

  import Map from '@/components/garden/map'
  import Img from '@/components/garden/img'

  export default {
    name: 'Home',
    data () {
      return {
        mysearch:{
        //  userid:this.$userId,
          countperpage: 12,
          pageno: 1,
        },
        tableData:[]
      }
    },
    mounted(){
      $('.head-left').find('span').removeClass('cur');
      $('#garden').addClass('cur');
      this.getList();
            $('#mysearch').hide();
    },
    methods:{
      getList() {
        console.log(this.mysearch);
        this.$http.post('api/resshare/maintain/listPark',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          this.pageno = res.data.data.pageno;
          this.total = res.data.data.total;
          for(let i in this.tableData ){
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
    },
    components: {
      'myhead': Head,
      'carousel': Carousel,
      'rank': Rank,
      'myfooter': Footer,
      'mymap': Map,
      'myimg': Img,
      'mymap1': Map1,
      'myimg1': Img1,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
