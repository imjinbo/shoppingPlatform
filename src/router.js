import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
		  topBar:()=>(import('@/views/topBar/TopBar.vue')),
		  default:()=>(import('./views/home/Home.vue')),
		  bottomBar:()=>(import('@/views/bottomBar/BottomBar.vue'))
	  }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
