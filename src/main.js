import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { 
	Button,
	Tabbar,
	TabbarItem,
	NavBar,
	Icon,
	Row, Col,
	Tab, Tabs,
} from 'vant';
Vue.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(NavBar)
.use(Icon)
.use(Row)
.use(Col)
.use(Tab)
.use(Tabs)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)
// .use(Tabbar)


import "./styles/index.scss" //base Css 自定义css，可以覆盖muse-ui的样式

//todo vue基础框架  入口文件  router  vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
