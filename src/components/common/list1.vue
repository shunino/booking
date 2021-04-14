<template>
      <div class="list-content">
        <ul class="list-ul" style="overflow:auto">
          <li v-for="i in mydata" class="list-li pointer" @click="goto(i.id)">
            <span class="span1"></span>
            <span class="span4" :title="i.name">{{i.name}}</span>
          </li>
        </ul>
      </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data:true
      }
    },
    props: ['type','mydata'],
    created () {
    },
    methods:{
      goto(id){
        this.$router.push({path:'/DatasDetail1',query:{id:id}});
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-content{
    width: 100%;
    height: 100% ;
  }
  .list-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
  }
  .list-li>span{
    font-size: 13px;
    color: #808080;
  }
  .list-li .span1{
    width: 3px;
    height: 3px;
    background:#CCCCCC;
  }
  .list-li .span4{
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    margin-left: 5px;
  }
</style>
