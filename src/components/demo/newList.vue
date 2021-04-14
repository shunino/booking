<style scoped>
  .list-box{
    width: 100%;
  }
  .list-box .list-title{
   width: 100%;
    height: 36px;
    font-size: 18px;
    line-height: 36px;
    text-indent: 12px;
    border-bottom: 1px solid #E4E4E4;
  }
  .list-ul{
    padding-left: 12px;
    min-height: 600px;
  }
  .list-ul .list-li{
    border-bottom: 1px solid #E4E4E4;
    display: flex;
    padding: 12px;
    justify-content: space-between;
    cursor: pointer;
  }
  .list-ul .list-li .li-txt{
    margin-bottom:10px; 
  }
  .li-right{
    width: 150px;
    height:150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E4E4E4;
  }
  .eflex{
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100;
  }
</style>
<template>
    <div class="list-box">
      <div class="list-title">数据列表</div>
      <div class="list-ul">
        <div v-if="tableData.length!=0" class="list-li" v-for="i in tableData" @click=goto(i.mapservice,i.id,i.imageparams,i.imageheight,i.imagewidth,i.coverlayerflag)>
          <div class="li-left">
              <div class="li-txt">数据名称：{{i.name}}</div>
              <div v-if="type<5" class="li-txt">数据摘要：{{i.summary}}</div>
              <div v-if="type==5" class="li-txt">数据地址：{{i.address}}</div>
              <div class="li-txt">上传时间：{{i.createtime}}</div>
          </div>
          <div class="li-right">
            <!-- <img style="width:100%;height:100%;" :src="$URL+'/file/'+mydata.cover"> -->
            <img style="width:100%;height:100%;" :src="$URL+'/file/'+i.cover">
          </div>
        </div>
        <div class="eflex" v-if="tableData.length==0">数据加载中......</div>
      </div>
      <div class="center" style="margin-top:10px;margin-bottom:10px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="mysearch.pageno"
          :page-size="mysearch.countperpage"
          layout="total, prev, pager, next, jumper"
          :total=total>
        </el-pagination>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        mysearch:{
          searchKey: "",
          countperpage: 5,
          pageno: 1,
        },
        total:1,
        pageno: 1,
        tableData:[],
        tableData1:[],
        tableData2:[],
        tableData3:[],
        tableData4:[],
        tableData5:[],
      }
    },
    props:['type'],
    watch:{
      type:{
          handler(newValue, oldValue) {
            this.tableData = [];
            if(newValue<5) this.getList1(newValue);
            else {
              this.getGarden();
              let self = this;
              //self.tableData = self.tableData5;
            } 
  　　　　　
  　　　　},
  　　　　deep: true
      }
    },
    mounted () {
      // this.getList();
      this.tableData = [];
      if(this.type<5) this.getList1(this.type);
      else {
        this.getGarden();
      } 
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.mysearch.pageno = val;
        this.getList1(this.type);
        console.log(`当前页: ${val}`);
      },
      getList1(type) {
        this.mysearch.typeflag = type;
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
          let tableData = res.data.data.data;
          this.total= res.data.data.total
          for(let i in tableData ){
            tableData[i].createtime = tableData[i].createtime.split('T')[0];
          }
          this.tableData =tableData;
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      getGarden() {
        let mysearch = {
          countperpage: 3,
          pageno: 1,
        };
        this.$http.post('api/resshare/maintain/listPark',mysearch).then(res => {
          //debugger;
          this.tableData5 = res.data.data.data;
          for(let i in this.tableData5 ){
            this.tableData5[i].createtime = this.tableData5[i].createtime.split('T')[0];
          }
          this.tableData = this.tableData5;
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      getList() {
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
          let tableData = res.data.data.data;
          for(let i in tableData ){
            tableData[i].createtime = tableData[i].createtime.split('T')[0];
            if(tableData[i].typeflag=='1'){
              this.tableData1.push(tableData[i]);
            } else if(tableData[i].typeflag=='2'){
              this.tableData2.push(tableData[i]);
            } else if(tableData[i].typeflag=='3'){
              this.tableData3.push(tableData[i]);
            } else if(tableData[i].typeflag=='4'){
              this.tableData4.push(tableData[i]);
            }
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      goto(link,id,imageparams,height,width,coverlayerflag){
        console.log(link);
        if(this.type==5){
          this.$router.push({path:'/gardenDetail',query:{id:id}});
        } else {
          this.$router.push({path:'/olmap',query:{id:id}});
          //window.open(link);
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mydemo{
    width: 100%;
  }
  .demo-head{
    width:100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    background: #E6EEFB;
    border-left: 3px solid #416EFF;
  }
  .demo-content{
    display: flex;
    width: 99.8%;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
  .demo-list{
    display: flex;
    flex-direction: column;
    width: 32%;
    margin-top: 20px;
    margin-left: 1%;
  }
</style>
