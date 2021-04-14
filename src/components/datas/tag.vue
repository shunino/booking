<style scoped>
  .data-tag{
      display: flex;
      overflow: hidden;
    height: 64px;
      border-top:3px solid #426EFF;
  }
  .data-tag .tag-left{
      width: 20%;
      background: #F2F2F2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
  .data-tag .tag-center{
    display: flex;
    align-items: center;
    width: 74%;
    flex-wrap: wrap;
  }
  .data-tag .tag-right{
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1%;
  }
  .data-tag .tag-button{
    margin-left: 10px;
    min-width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border:1px solid #F2F2F2;
    font-size: 12px;
    cursor: pointer;
    margin-top: 10px;
  }
  .more{
    font-size: 14px;
    color: #77D1FF;
    cursor: pointer;
  }
  .tagcur{
    background: #416EFF;color: white;cursor: pointer;
  }
</style>
<template>
  <div>
    <div class="data-tag">
      <div class="tag-left">
        主题词：
      </div>
      <div class="tag-center">
        <span @click="toSearch(null,true)" class="tag-button tagcur" id="tag-all" >全部</span>
        <span style="cursor: pointer;" @click="toSearch(i)" :id="i" v-for="(key,i) in temp" class="tag-button">{{i}}</span>
      </div>
      <div class="tag-right">
        <span v-show="ismore" @click="more(1)" class="more">更多 <img src="../../assets/d3.png"></span>
        <span v-show="!ismore" @click="more(2)" class="more">收起 <img src="../../assets/d3.png"></span>
      </div>
    </div>

<!--    <div class="data-tag" style="border-top:1px solid #E4E7ED;border-bottom:1px solid #E4E7ED;">-->
<!--      <div class="tag-left">-->
<!--        空间位置：-->
<!--      </div>-->
<!--      <div class="tag-center">-->
<!--        <span class="tag-button" style="background: #416EFF;color: white;">全部</span>-->
<!--        <span v-for="i in data2" class="tag-button">{{i}}</span>-->
<!--      </div>-->
<!--      <div class="tag-right">-->
<!--        <span class="more">更多 <img src="../../assets/d3.png"></span>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        ismore:true,
        msg: 'Welcome to Your Vue.js App',
        data1:[],
        data2:[],
        temp:{},
        mysearch:{
          searchWrap:{
            status:2
          },
          countperpage: 6,
          pageno: 1,
        },
        mydata:[]
      }
    },
    mounted () {
      this.data1 = ['土地利用','水土流失预测','遥感影像'];
      this.data2 = ['安顺','贵阳','遵义'];
     // let self = this;
      //setTimeout(function () {
        this.getList();
     // },1000);
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/datacenter/list',this.mysearch).then(res => {
          this.mydata = res.data.data.data;
          for(let i in this.mydata ){
            this.mydata[i].createtime = this.mydata[i].createtime.split('T')[0];
          }
          console.log(res);
          this.getData();
        }).catch(err => {
          console.log(err)
        })
      },
      more(type){
        if(type==1){
          $('.data-tag').css({'height':'auto'});
          this.ismore = false;
        } else {
          $('.data-tag').css({'height':'64px'});
          this.ismore = true;
        }
      },
      toSearch(id1,all){
        $('.tag-center').find('span').removeClass('tagcur');
        if(all){
          $('#tag-all').addClass('tagcur');
        } else {
          $('#'+id1).addClass('tagcur');
        }
        let ob = {
          topic:id1
        };
        this.$emit('search',ob);
      },
      getData(){
        let temp = {};
        for(let i in this.mydata){
            let arr = this.mydata[i].themes.split(',');
            for(let j in arr){
              if(temp[arr[j]]){
                temp[arr[j]]++;
              } else {
                temp[arr[j]] = 1;
              }
            }
        }
        this.temp = temp;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

