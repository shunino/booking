<style scoped>
  .myfirst{
    text-align: left;
    width: 800px;
  }
  .myfirst ul{
    list-style: inside;
  }
  .myfirst ul li{
    margin-top: 5px;
  }
  .myfirst>div{
    margin-top: 20px;
  }
</style>
<style>
  .homeForm .el-dialog__body{
      padding-top: 0px;
  }
  .homeForm .el-upload__tip{
    margin-top: 30px;
  }
  .homeForm .el-dialog__header{
    height: 0px;
  }
</style>
<template>
  <div class="homeForm">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="数据名称"
        prop="name"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="60%"
      >
      <div style="text-align: left">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible:false,
        activeName: 'first',
        tableData: [],
        form: {
          name: '',
        },
        fileList2: [
          {name: 'food.jpeg', url: '../../../../static/1.jpg'},
          {name: 'food2.jpeg', url: '../../../../static/1.jpg'}
        ]
      };
    },
    created(){
      this.tableData = [{
        name: '轮播图',
        type:'1'
      }];
      //this.tableData.push(a);
      // for(let i=0;i<4;i++){
      //   this.tableData.push(a);
      // }
    },
    methods: {
      handleEdit(tab, event) {
        this.dialogVisible = true;
      },
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
