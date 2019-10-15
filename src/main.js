import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//todo vue基础框架  入口文件  router  vuex

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
