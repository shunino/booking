<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-detail{
    width: 70%;
  }
  .detail-head{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px dashed gray;
    font-size: 16px;
    font-weight: bold;
  }

  .detail-content>div{
    text-align: left;
    margin-top: 10px;
    font-size: 16px;
  }

  .detail-content{
    text-align: left;
    margin-top: 10px;
    font-size: 16px;
    text-indent: 20px;
    line-height: 35px;
  }

  .txt{
    line-height: 30px;
    text-align: left;
    text-indent: 30px;
    margin-top: 40px;
  }
</style>
<template>
  <div class="commondiv" :style="'minHeight:'+myheight">
    <div v-show="myis" class="new-detail ">
      <div class="detail-head">
       {{title}}
      </div>
      <div class="detail-content" id="newsDetailContent">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title:'',
        is:false,
        myis:true,
        contents:'',
        myheight:'auto',
      }
    },
    mounted () {
            $('#mysearch').hide();
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      console.log('rrr');
      console.log(this.$route.query);
      if(this.$route.query.id){
        this.getDetail(this.$route.query.id);
      } else{
        this.is=true;
        this.myis = false;
      }
    },
    methods:{
      getDetail(id){
        this.$http.post('api/resshare/maintain/getTechnology',{id:id,token:this.$token}).then(res => {
            this.title = res.data.data.title;
            $('#newsDetailContent').html(res.data.data.contents);
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>


