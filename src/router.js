import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
		  topBar:()=>(import('@/views/topBar/TopBar.vue')),
		  default:()=>(import('@/views/home/IndexTab.vue')),
		  bottomBar:()=>(import('@/views/bottomBar/BottomBar.vue'))
	  }
    },
	{
	  path: '/personalcenter',
	  name: 'personalcenter',
	  components: {
		  default:()=>(import('@/views/home/PersonalCenter.vue')),
		  bottomBar:()=>(import('@/views/bottomBar/BottomBar.vue'))
	  }
	},
	{
	  path: '*',
	  name: '404',
	  components: {
		  default:()=>(import('@/views/home/404.vue')),
	  }
	}
  ]
})
