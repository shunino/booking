<style>
  .el-tag.el-tag--warning{
    background: #00A8FF;
    color: white;
  }
  .el-tag{
    height: 24px;
    width: 24px;
    padding: 0px;
    line-height: 24px;
  }
</style>
<template>
    <div class="myrank">
      <div class="rank-head">
        <span class="">排行榜</span>
       <!--  <span class="mr10 rankType" style="font-size: 14px;"><span @click="change('rankdown',1)" class="rankdown rank-type">下载量</span> <span @click="change('rankshare',2)"  class="rankshare rank-type">分享量</span><span @click="change('rankscore',3)" style="border-right: none;width: 50px;"  class="rankscore rank-type cur">积分</span> </span> -->
       <span style="width: 95px;"><el-select v-model="value" placeholder="请选择" @change="change">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></span>
      </div>
      <div class="rank-content">
        <ul class="rank-ul" style="overflow:auto">

          
          <li  v-for="(i,key) in tableData" class="rank-li">
            <div>
              <img class="span2" v-if="key==0" src="../../assets/vnew/one.png">
              <img class="span2" v-if="key==1" src="../../assets/vnew/two.png">
              <img class="span2" v-if="key==2" src="../../assets/vnew/three.png">
              <span class="span2" v-if="key>2">{{key+1}}</span>
             <!-- <el-tag style="background: none;border: none;color: gray" v-if="key>2">{{key+1}}</el-tag> -->
             <!--  <el-tag  type="warning" v-if="key<3">{{key+1}}</el-tag> -->
             <!--  <el-avatar class="span2 ml10" src="../../static/ata.jpg"></el-avatar> -->
              <span class="span3 ml10">{{i.username}}</span>
            </div>
             <div>
               <span class="span4 mr10">({{i.fen}})</span>
             </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        mynew:[],
        options: [{
          value: '3',
          label: '积分'
        }, {
          value: '1',
          label: '下载量'
        }, {
          value: '2',
          label: '分享量'
        }],
        value: '3',
        tableData:[],
        mysearch1:{
          sort:1,
          total:10,
        },
      }
    },
    mounted(){
      // this.mynew = [
      //   {
      //     username:'管理员',
      //     fen:'123'
      //   },
      //   {
      //     username:'石雨来',
      //     fen:'87'
      //   },
      //   {
      //     username:'张乐峰',
      //     fen:'85'
      //   },
      //   {
      //     username:'戴尚文',
      //     fen:'77'
      //   },
      //   {
      //     username:'赵浩帆',
      //     fen:'72'
      //   },
      //   {
      //     username:'李佳乐',
      //     fen:'55'
      //   },
      //   {
      //     username:'杨洋',
      //     fen:'20'
      //   },
      // ];
      this.getList(3);
    },
    methods: {
      change (type) {
        console.log(type);
        // $('.rank-type').removeClass('cur');
        // $('.'+type).addClass('cur');
        this.getList(type);
        //this.data.sort(this.randomsort);
      },
      randomsort (a, b) {
        return Math.random() > .5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
      },
      getList(sort) {
        let mysearch = {
          sort:sort,
          total:10
        };
        this.$http.post('api/resshare/user/rankUsers',mysearch).then(res => {
          this.tableData = res.data.data;
          for(let i in this.tableData ){
            if(sort==1){
              this.tableData[i].fen = this.tableData[i].downnum;
            } else if(sort==2){
              this.tableData[i].fen = this.tableData[i].sharenum;
            } else{
              this.tableData[i].fen = this.tableData[i].score;
            }
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.rank-ul{
  height: 248px;
}
.rank-head{
  width:100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  border-bottom: 2px solid #A5A5A5;
  justify-content: space-between;
  color: black;
  font-weight: bold;
  font-size: 20px;
}
.rank-li{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
.rank-li>div{
  display: flex;
  align-items: center;
}
.rank-li .span1{
}
.rank-li .span2{
    width: 20px;
  height: 20px;
}
.rank-li .span3{
}
.rank-li .span4{
  color: gray;
}
.rank-type{
  color: #04A5FF;
  border-right: 1px solid #04A5FF;
  width: 63px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
}
.cur{
  color: white;
}
</style>
