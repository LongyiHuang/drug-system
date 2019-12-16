import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store' // vuex
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/global.css';
import '@/styles/reset.css';
import './filter' // 加载过滤器
import './permission' // 权限校验

Vue.config.productionTip = false;
Vue.use(ElementUI); // 注册element-ui

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')
