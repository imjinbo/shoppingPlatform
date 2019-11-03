import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mockData from './mock/index'

import { 
	Button,
	Icon,
	Field ,
	Tabbar, TabbarItem,
	NavBar,
	Row, Col,
	Tab, Tabs,
	Swipe, SwipeItem,
	Skeleton,
	Lazyload,
	Cell,
	CellGroup
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
.use(Swipe)
.use(SwipeItem)
.use(Field )
.use(Skeleton)
.use(Lazyload)
.use(Cell)
.use(CellGroup)
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
