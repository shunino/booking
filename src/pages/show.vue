<template>
  <div class="commondiv">
    <div style="width: 95%;margin-top: 10px;">
      <demoList detail="1" type="1" :mydata="tableData1" title="大数据专题"></demoList>
      <demoList detail="1" type="2" :mydata="tableData2" title="预防监督专题" class="mt20"></demoList>
      <demoList detail="1" type="3" :mydata="tableData3" title="综合治理专题" class="mt20"></demoList>
      <demoList detail="1" type="4" :mydata="tableData4" title="监测预报专题" class="mt20"></demoList>
      <demoList detail="1" type="5" :mydata="tableData5" title="生态文明示范专题" class="mt20"></demoList>
      <popular little="true"></popular>
    </div>
  </div>
</template>

<script>
  import DemoList from '@/components/demo/list'
  import Popular from './popular'
  export default {
    name: 'Home',
    data () {
      return {
        mysearch:{
          searchKey: "",
          countperpage: 12,
          pageno: 1,
        },
        total:1,
        pageno: 1,
        tableData1:[],
        tableData2:[],
        tableData3:[],
        tableData4:[],
        tableData5:[],
      }
    },
    mounted(){
            $('#mysearch').hide();
      $('.head-left').find('span').removeClass('cur');
      $('#show').addClass('cur');
      this.getList();
      this.getGarden();
    },
    methods:{
      getGarden() {
        let mysearch = {l
          countperpage: 3,
          pageno: 1,
        };
        this.$http.post('api/resshare/maintain/listPark',mysearch).then(res => {
          //debugger;
          this.tableData5 = res.data.data.data;
          for(let i in this.tableData5 ){
            this.tableData5[i].createtime = this.tableData5[i].createtime.split('T')[0];
          }
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
    },
    components: {
      'demoList': DemoList,
      'popular': Popular
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
