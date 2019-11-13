import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from './router'

// 移除移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 刷新组件 
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
// 加载样式初始化
import 'normalize.css/normalize.css' 
import axios from 'axios'
Vue.prototype.$axios = axios;

 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
