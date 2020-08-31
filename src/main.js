import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入字体图标库，直接引入地址,在其他vue组件中使用即可
import './assets/font/iconfont.css'

Vue.config.productionTip = false
//默认的地址
axios.defaults.baseURL = "http://localhost:7300/mock/5f2b715844dfa235147689cb";
//Vue.prototype.$http = axios;//简单粗暴
Vue.use(VueAxios,axios);

new Vue({
  router,
  render: h => h(App) //箭头函数,渲染  el和render要一起使用,el和template一起使用，render优先级高于template
}).$mount('#app')