<style scoped>
  .data-class{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    font-size: 13px;
    border: 1px solid #E4E4E4;
    border-top:3px solid #426EFF;
  }
  .class-intro{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  .class-con .con-head{
    height: 35px;
    background: #0C275D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .class-con .con-c{
    padding-left: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .class-con .con-c span{
    display: block;
    margin-top: 5px;
    color: gray;
    cursor: pointer;
  }
</style>
<template>
  <div class="data-class">
      <div class="class-intro">
        数据分类体系
<!--        （<span style="color: red;">全部</span>）-->
      </div>
    <div class="class-con" v-for="i in mydata">
      <div class="con-head">
        <span style="cursor: pointer;" @click="toSearch(i.value,'wu')">{{i.label}}（{{i.num}}）</span>
        <img class="dataClass" src="../../assets/d2.png">
        <img style="display: none" class="dataClass1" src="../../assets/d1.png">
      </div>
      <div class="con-c" >
        <span v-for="j in i.children" @click="toSearch(i.value,j.value)" >{{j.label}}（{{j.num}}）</span>
      </div>
    </div>
  </div>
</template>
<script>
  $(function () {
        $(document).on('click','.dataClass',function (e) {
          $(this).parent('.con-head').siblings('.con-c').css({height:'0'});
          $(this).hide();
          $(this).siblings('.dataClass1').show();
        });
      $(document).on('click','.dataClass1',function (e) {
        $(this).parent('.con-head').siblings('.con-c').css({height:'auto'});
        $(this).hide();
        $(this).siblings('.dataClass').show();
      });
  })

  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        mydata:[],
        mysearch:{
          searchWrap:{
            //userid:this.$userId,
            status:2
          },
          countperpage: 1000,
          pageno: 1,
        },
      }
    },
    mounted () {
      for(let i in this.$STATE1){
        let op = {};
            op.value = this.$STATE1[i].value;
            op.label = this.$STATE1[i].label;
            op.num=0;
            op.children = [];
            for(let j in this.$STATE1[i].children){
              let tt={};
              tt.value = this.$STATE1[i].children[j].value;
              tt.label = this.$STATE1[i].children[j].label;
              tt.num=0;
              op.children.push(tt);
            }
           this.mydata.push(op);
      }
      this.addNum();
    },
    methods:{
      toSearch(id1,id2){
        let ob = {
          type1:id1,
          type2:id2
        };
        this.$emit('search',ob);
      },
      addNum(){
        this.$http.post('api/resshare/datacenter/list',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          for(let i in this.tableData ){
            this.mydata[this.tableData[i].type1 -1].num++;
            this.mydata[this.tableData[i].type1 -1].children[this.tableData[i].type2 -1].num ++;
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

