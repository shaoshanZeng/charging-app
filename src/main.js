import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// 导入路由
import router from './router'
import store from './store'

// 移除移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 刷新组件 
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// 加载样式初始化
// import 'vant/lib/index.css';
import 'normalize.css/normalize.css'
import '@/assets/styles/common.css'
 
import axios from 'axios'
Vue.prototype.$axios = axios;

import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true
});

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
