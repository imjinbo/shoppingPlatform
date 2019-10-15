import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/material-icons.css' //icon加载 来自掘金

import MuseUI from 'muse-ui' //muse-ui加载
import 'muse-ui/dist/muse-ui.css';

import "./styles/index.scss" //base Css 自定义css，可以覆盖muse-ui的样式


//todo vue基础框架  入口文件  router  vuex

Vue.config.productionTip = false;
Vue.use(MuseUI) //muse.css使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
