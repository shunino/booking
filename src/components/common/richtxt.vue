<style>
  .ql-toolbar.ql-snow + .ql-container.ql-snow{
    height: 500px;
  }
</style>
<template>
 <!--  <quill-editor
    style="width:100%;height: 50%;"
    class="quill"
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
    @change="onEditorChange($event)">
  </quill-editor> -->
  <!-- <el-input
  placeholder="请输入内容"
  v-model="content"
  
  clearable>
</el-input> -->

   <textarea class="textarea1" rows="20" cols="20"></textarea>
<!--    <div class="ql-container ql-snow">-->
<!--      <div class="ql-editor" id="contt" >-->
<!--      </div>-->
<!--    </div>-->
<!--    <el-button @click="save()">保存</el-button>-->
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillRedefine } from 'vue-quill-editor-upload'
export default {
  components: {
    quillEditor,
    quillRedefine
  },
  data() {
    return {
      content: '',
      editorOption: {}
    }
  },
  watch: {
    '$route' (to, from) {
        //tinymce.init({ selector: 'textarea', language: "zh_CN" });
      },
  },
  mounted() {
    let self = this;
    tinymce.init({
    selector: '.textarea1',
    plugins: 'image',
    toolbar: 'image',
    language: "zh_CN",
    images_upload_handler: function (blobInfo, succFun, failFun) {
            var xhr, formData;
            var file = blobInfo.blob();//转化为易于理解的file对象
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', self.$URL+'/upload');
            xhr.onload = function() {
                var json;
                if (xhr.status != 200) {
                    failFun('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                // if (!json || typeof json.location != 'string') {
                //     failFun('Invalid JSON: ' + xhr.responseText);
                //     return;
                // }
                succFun(self.$URL+'/file/'+json.data.fileid);
            };
            formData = new FormData();
            formData.append('file', file, file.name );//此处与源文档不一样
            xhr.send(formData);
        }
    });
    //tinymce.init({ selector: 'textarea', language: "zh_CN",plugins: "imagetools" });
    console.log(this.editorOption)
  },
  methods: {
    onEditorReady(editor) { // 准备编辑器
    },
    save(){
      $('#contt').html(this.content);
        console.log(this.content);
    },
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){
      this.$emit('toClick',tinyMCE.activeEditor.getContent());
      console.log('change0');
    }, // 内容改变事件
    clearContent(){
        tinymce.activeEditor.setContent('');
        this.content='';
    },
    getContent(){
      return tinyMCE.activeEditor.getContent();
    },
    init(content){
      //debugger;
      //tinyMCE.activeEditor.getContent() 
      tinymce.activeEditor.setContent(content);
      this.content = content;
    }
  },
}
</script>
