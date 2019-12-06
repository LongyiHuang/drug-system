/**
* Description: 富文本编辑器
*
* Created by longyihuang on 2019/11/6
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="editor">
    <div ref="toolbar" class="toolbar">
    </div>
    <div ref="editor" class="text">
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor';
  import ajax from "../../api/ajax";
  export default {
    name: "Editor",
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      showEdit: {
        type: Boolean,
        default: true
      },
      editable: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
      this.seteditor();
      this.editor.txt.html(this.value);
      this.setEditable(this.editable);
    },

    watch: {
      value (newValue) {
        console.log(newValue)
        this.editor.txt.html(newValue || '');
      }
    },

    methods: {
      seteditor () {
        this.editor = new E(this.$refs.toolbar, this.$refs.editor)
        this.editor.customConfig.uploadImgShowBase64 = false; // base 64 存储图片
        this.editor.customConfig.uploadImgServer = ajax.BASE_URL + '/frameworks/photos/upload';// 配置服务器端地址
        this.editor.customConfig.uploadImgHeaders = {
          token: localStorage.getItem('token') // 获取token
        }; // 自定义 header
        this.editor.customConfig.uploadFileName = 'file'; // 后端接受上传文件的参数名
        this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024; // 将图片大小限制为 2M
        this.editor.customConfig.uploadImgMaxLength = 1; // 限制一次最多上传 1 张图片
        this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000; // 设置超时时间
        this.editor.customConfig.zIndex = 100;
        this.editor.customConfig.debug = process.env.NODE_ENV !== 'production';
        this.editor.customConfig.showLinkImg = false;
        // 配置菜单
        this.editor.customConfig.menus = [
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'emoticon', // 表情
          'image', // 插入图片
          'table', // 表格
          'video', // 插入视频
          'undo', // 撤销
          'redo' // 重复
        ]

        this.editor.customConfig.uploadImgHooks = {
          fail: (xhr, editor, result) => {
            // 插入图片失败回调
          },
          success: (xhr, editor, result) => {
            // 图片上传成功回调
          },
          timeout: (xhr, editor) => {
            // 网络超时的回调
            this.$message.error('图片上传超时');
          },
          error: (xhr, editor) => {
            // 图片上传错误的回调
          },
          customInsert: (insertImg, result, editor) => {
            console.log(result)
            if (result.success) {
              let url = result.data.rows[0].url;
              insertImg(url)
            }
          }
        }
        // 监听富文本变化
        this.editor.customConfig.onchange = (html) => {
          this.$emit('change', html) // 将内容同步到父组件中
        }

        // 创建富文本编辑器
        this.editor.create()
      },

      /**
       * 控制输入框禁用
       * @param edit
       */
      setEditable (edit) {
        this.editor.$textElem.attr('contenteditable', edit)
      },

      /**
       * 清空编辑器
       */
      clearEditor () {
        this.editor.txt.clear();
      },
      /**
       * 获取html文本内容
       */
      getHtml () {
        return this.editor.txt.html();
      },

      /**
       * 获取纯文本内容
       */
      getContent () {
        return this.editor.txt.text();
      },

      /**
       * 获取json文本内容
       */
      getJson () {
        return this.editor.txt.getJSON();
      }

    }


  }
</script>

<style lang='scss' scoped>
  .editor {
    border: 1px solid #666;
    .toolbar {
      border-bottom: 1px solid #666;
    }
    .text {
      min-height: 400px;
    }
  }

</style>
