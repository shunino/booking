<template>
    <div class="mydemo">
      <div class="demo-head">
          <span class="ml10">{{title}}</span>
        <span v-if="detail=='1'" style="cursor: pointer;" @click="more(title,type)" class="mr10">更多</span>
        <span v-if="detail!='1'" style="cursor: pointer;" @click="$commonGo('/show')" class="mr10">返回</span>
      </div>
      <div v-if="detail=='1'" class="demo-content">
          <div @click="goto(i.id)"  v-for="(i,key) in mydata" v-if="key<3" class="demo-list">
            <el-image
              style="width: 100%; height: 200px"
              :src="$URL+'/file/'+i.cover"
              :preview-src-list="[$URL+'/file/'+i.cover]"
              >
            </el-image>
            <div class="center mt10">{{i.name}}</div>
          </div>
      </div>

      <div v-if="detail!='1'" class="demo-content">
        <div @click="goto(i.id)"  v-for="i in mydata" class="demo-list">
          <el-image
            style="width: 100%; height: 200px"
            :src="$URL+'/file/'+i.cover"
            :preview-src-list="[$URL+'/file/'+i.cover]"
          >
          </el-image>
          <div class="center mt10">{{i.name}}</div>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        yydata:[]
      }
    },
    props:['title','mydata','detail','type'],
    mounted () {
      //debugger;
      this.yydata = this.mydata;
      console.log(this.mydata);
    },
    methods:{
      goto(id){
        if(this.title=='生态文明示范专题'){
          this.$router.push({path:'/gardenDetail',query:{id:id}});
        }
      },
      more(title,type){
        if(type!='5'){
          this.$router.push({path:'/showDetail',query:{title:title,type:type}});
        } else {
          this.$router.push({path:'/garden',query:{title:title}});
        }
      }
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
