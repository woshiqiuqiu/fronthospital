import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap'
import  BaiduMap from 'vue-baidu-map'
import axios from 'axios'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import App from './App'


// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);

Vue.use(BaiduMap,{
  ak:'eGFTGmhOPsF9AEy5vV7qf15v3mOQo0Dz'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
let base_url = 'http://localhost:8080/'
axios.defaults.baseURL = base_url
Vue.prototype.$http = axios
//
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import router from './router' //引入路由配置
// import VueRouter from 'vue-router'
// import 'bootstrap3/dist/css/bootstrap.css'
// import 'bootstrap3/dist/js/bootstrap'
// import  BaiduMap from 'vue-baidu-map'
// // 导入 ElementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
//
// import store from './store' //引入 Vuex 状态管理
// import App from './App'
//
// // 安装路由
// Vue.use(VueRouter);
//
// // 安装 ElementUI
// Vue.use(ElementUI);
//
// Vue.use(BaiduMap,{
//   ak:'eGFTGmhOPsF9AEy5vV7qf15v3mOQo0Dz'
// });
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
//   router, //使用路由配置
//   store //使用 Vuex 进行状态管理
// }).$mount('#app')
