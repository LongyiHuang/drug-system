// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/global.css';
import '@/styles/reset.css';
import VueLazyload from 'vue-lazyload' // 图片懒加载
import './mock/mockServer' // 加载mockServer即可,注意，上传组件的onProgress回调与此有冲突
import loading from '@/assets/loading.gif';
import store from './store' // vuex
import './filter' // 加载过滤器
import './permission' // 权限校验

Vue.config.productionTip = false

Vue.use(ElementUI); // 注册element-ui

Vue.use(VueLazyload, { // 注册图片懒加载
  loading
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

