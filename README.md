# empty_project
空项目模板架构

一、目录结构说明
  api:后台接口目录，封装ajax请求类（普通请求类+mock请求类）。接口以模块分类.调用接口时，按需导入指定模块的api方法即可。
      如：import {reqLogin} from '../../api/login'。

  common:公共目录。存放公共的css、js、图片和文件资源。

  commponents:组件目录，组件按模块分类。

  fiters: vue过滤器目录，已导入，可全局使用，可扩展。

  mock: mock数据。data.json写模拟返回的数据（mockjs.com可查看如何生成随机数据），mockServer.js写接口。
        导入：import {reqMockDemo} from '../../api/mock'
        调用：reqMockDemo().then(response => {
                 console.log(response)
             })

  pages: 页面目录。按路由模块分类。一级路由的页面放pages下。二级路由放对应的路由模块文件下下。

  router: 路由目录。目前没分类，可按业务模块分类。

  store: vuex目录。目前没分类。推荐公共数据可以存放在这里。

二、项目配置文件/src/common/js/config.js
    可配置登录方式、可配置头部背景色、logo。


三、登录、注册、授权功能集成
    框架将陆续集成了登录（密码登录、微信登录、短信登录）、注册、登录权限、找回密码、文件上传下载、系统消息等基础功能。
    开发人员会遇到域名代理问题。这个想后端开发人员拿到代理IP写入config/index.js中的proxy即可。


四、上传组件封装
    封装了element的上传组件，已联调了后端文件微服务的上传、删除两个接口。暴露3种上传样式，分别为文件列表、图片列表、头像上传。

    文件列表样式：引用Upload组件
        <upload :file-list="fileList"/>
    图片列表样式：引用UploadBtn组件，需传入file-type="picture-card"。可传入file-list。（展示已上传的文件列表）
        <upload-btn file-type="picture-card" ></upload-btn>
    头像样式：引用UploadBtn组件，需传入file-type="avatar"。
       <upload-btn file-type="avatar" ></upload-btn>

    传参：
      1、file-list。（展示的文件列表）
      2、readonly。（只展示，不能上传）
      3、file-type。（上传组件样式，目前支持文件列表、图片列表、头像上传等样式）
      4、onUploadSuccess。（上传成功回调函数 onUploadSuccess (file, fileList) ）
      5、onUploadFailed。（上传失败回调函数 onUploadFailed (file, fileList) ）



