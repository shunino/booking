<template>
  <div class="commondiv" style="min-height: 700px;">
    <div style="width: 95%;margin-top: 10px;">
      <demoList detail="true" :mydata="tableData1" title="大数据专题"></demoList>
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
        type:null,
        tableData1:[],
      }
    },
    mounted(){
            $('#mysearch').hide();
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      $('.head-left').find('span').removeClass('cur');
      $('#show').addClass('cur');
      if(this.$route.query.type){
        this.type = this.$route.query.type;
      }
      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
          let tableData = res.data.data.data;
          for(let i in tableData ){
            tableData[i].createtime = tableData[i].createtime.split('T')[0];
            if(tableData[i].typeflag==this.type){
              this.tableData1.push(tableData[i]);
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
