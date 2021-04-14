<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-detail{
    display: flex;
    border-top:3px solid #60BFD8;
    width: 96%;
    padding-top: 30px;
    margin-top: 20px;
  }
  .new-detail .left{
    width: 79%;
    margin-left: 1%;
    display: flex;
    text-align: left;
    flex-direction: column;
    font-size: 16px;
  }
  .new-detail .left>div{
    margin-top: 20px;
  }
  .new-detail .left .title{
    font-size: 20px;
    color: #60BFD8;
  }
  .new-detail .left .attribute{
    font-size: 14px;
    color: gray;
  }
  .new-detail .left .ctxt{
    font-size: 16px;
    font-weight: bold;
  }
  .new-detail .right{
    width: 18%;
    margin-left: 1%;
    margin-right: 1%;
  }
  .news-head{
    text-align: left;
    border-bottom: 3px solid #60BFD8;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }

</style>
<style>
  .fujian .el-table th{
    background: #CCCCCC;
    color: black;
  }
  .benshu .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
    border-right: 0px solid #EBEEF5;
  }
  .benshu .el-table thead{
    display: none;
  }
</style>
<template>
  <div class="commondiv">
    <div class="new-detail">
      <div class="left">
        <div class="title" style="margin-top: 0px;">神木侵蚀与环境试验站气象观测数据集（2003-2018年）</div>
        <div class="attribute">数据贡献者：樊军(西北农林科技大学)</div>
        <div>多重人格,麦田圈,穿越,金字塔,Shazaam</div>
<!--        <div>-->
<!--          <img src="../assets/22.png">-->
<!--        </div>-->
        <div class="ctxt">上传时间：2019.05.21</div>
        <div class="ctxt">主题词（3个）：主题词：	气温，空气湿度，风速 </div>
        <div class="ctxt"><span>数据分类体系：	应用气象学</span> <span style="margin-left: 200px;">位置区别：陕西省</span></div>
        <div class="ctxt" style="display: flex;">
          <div>数据描述：</div>
          <div style="width: 900px;margin-left: 10px;">数据集是2003-2018年神木侵蚀与环境试验站气象观测数据集，数据内容包括逐日的平均气温、最低气温、最高气温、空气湿度、风速，太阳辐射，气压等数据。可为研究该区域的相关科研人员提供基础的气象数据服务。</div>
        </div>
        <div class="ctxt" >
          <div>数据使用声明</div>
          <div class="mt20" style="width: 900px;font-weight: 400;text-indent: 20px;">为尊重知识产权、保障数据贡献者和服务者的权益，请数据使用者在基于本数据所产生的研究成果（包括项目评估报告、验收报告，以及学术论文或毕业论文等） 中标注数据来源，并按照[文献引用方式]标注需引用的参考文献，同时将可公开成果提交到“国家地球系统科学数据共享服务平台”。
            数据来源参考以下规范：
            中文表达方式：国家科技基础条件平台-国家地球系统科学数据共享服务平台-黄土高原科学数据中心(http://loess.geodata.cn)；
            英文表达方式：Loess Plateau Data Center, National Earth System Science Data Sharing Infrastructure, National Science & Technology Infrastructure of China (http://loess.geodata.cn)。
            致谢方式参考以下规范：
            中文致谢方式：“感谢国家科技基础条件平台-国家地球系统科学数据共享服务平台-黄土高原科学数据中心(http://loess.geodata.cn)”提供数据支撑。
            英文致谢方式：Acknowledgement for the data support from "Loess Plateau Data Center, National Earth System Science Data Sharing Infrastructure, National Science & Technology Infrastructure of China. (http://loess.geodata.cn)".</div>
        </div>
        <div class="ctxt" >
          <div>法律责任</div>
          <div class="mt20" style="width: 900px;font-weight: 400;text-indent: 20px;">为尊重知识产权、保障数据贡献者和服务者的权益，请数据使用者在基于本数据所产生的研究成果（包括项目评估报告、验收报告，以及学术论文或毕业论文等） 中标注数据来源，并按照[文献引用方式]标注需引用的参考文献，同时将可公开成果提交到“国家地球系统科学数据共享服务平台”。
            · 本平台对其发布的或数据贡献者贡献的数据产品或服务及平台上发布的相关信息的全部内容拥有版权等知识产权，受法律保护。
            · 未经本平台书面许可，任何单位及个人不得以任何方式或理由对上述数据产品、服务、信息、材料的任何部分进行复制、修改、抄录、传播及销售。
            · 凡侵犯本平台版权等知识产权的，本平台必依法追究其法律责任，特此郑重声明！</div>
        </div>
        <div class="ctxt fujian">
          <div class="news-head">数据附件</div>
          <el-table
            :data="tableData"
            stripe
            border
            class="mt20"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="文件名"
             >
            </el-table-column>
            <el-table-column
              prop="weight"
              label="文件大小"
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="small">
                  下载
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
<!--        <div class="ctxt benshu">-->
<!--          <div class="news-head">使用本数据的用户</div>-->
<!--          <el-table-->
<!--            :data="tableData1"-->
<!--            border-->
<!--            class="mt20"-->
<!--            style="width: 100%">-->
<!--            <el-table-column-->
<!--              prop="name"-->
<!--              label="名字"-->
<!--            >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="colleage"-->
<!--              label="大学"-->
<!--            >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="explain"-->
<!--              label="解释"-->
<!--            >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="date"-->
<!--              label="时间"-->
<!--            >-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--          <el-pagination-->
<!--            small-->
<!--            style="margin-top: 10px;margin-left: -10px;"-->
<!--            layout="prev, pager, next"-->
<!--            :total="50">-->
<!--          </el-pagination>-->
<!--        </div>-->
      </div>
      <div class="right">
          <div class="roursel">
            <carousel style="width: 100%;height: 200px;"></carousel>
          </div>
          <div class="newlist mt20">
            <div class="news-head">相关数据资源</div>
            <mylist :mydata="data1"  type="data"></mylist>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from '@/components/home/carousel'
  import List from '@/components/common/list1'
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        tableData:[],
        tableData1:[],
        data1:[]
      }
    },
    mounted(){
      this.data1 =[
        {
          title:'贵州省1km分辨率NDVI数据集（2001-2010年）',
          date:'2019-09-24',
        },
        {
          title:'云贵丘陵沟壑区主要植物及种子相关特征数据集（2003-2015年）',
          date:'2019-09-22',
        },
        {
          title:'土壤侵蚀模型地形因子计算工具（2.0版）（2000年）',
          date:'2019-09-21',
        },
        {
          title:'中国北方地区沙漠化治理区划图（1981年）“眼睛”观测研究太阳活动',
          date:'2019-09-12',
        },
        {
          title:'云贵高原90米分辨率坡度图',
          date:'2019-09-08',
        },
        {
          title:'云贵高原90米分辨率LS因子图(2012年）',
          date:'2019-09-06',
        },
        {
          title:'研究发现目前已知全球最深海底泥火山',
          date:'2019-09-01',
        },
        {
          title:'国科学家赴北极研究气候变化',
          date:'2019-09-01',
        },
        {
          title:'美国调查报告：中国正在打赢治理空气污染的战争 不详 2018/03/16 08:58新华网',
          date:'2019-09-01',
        },
        {
          title:'国家大数据综合试验区有望开建 侯云龙 2018/03/07 09:14经济参考报',
          date:'2019-09-01',
        },
      ];
      let ob = {
        name:'贵州省水土资源成果（2017-2020）.jpg',
        weight:'500M'
      }
      let ob1 = {
        name:'小若123',
        colleage:'武汉大学',
        explain:'其他用途 黄图高原中***',
        date:'2017-01-05'
      }
      for(let i=0;i<2;i++){
        this.tableData.push(ob);
      }
      for(let i=0;i<4;i++){
        this.tableData1.push(ob1);
      }
    },
    components: {
      'carousel': Carousel,
      'mylist': List,
    }
  }
</script>


