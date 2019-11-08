import Vue from 'vue'
import store from '@/store/store'
import Router from "vue-router"
import { getCookie } from '@/utils/mockCk'
import getUserInfo from "@/api/login"
import { Notify } from 'vant';

Vue.use(Router)

const routerInit = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
		  topBar:()=>(import('@/views/topBar/indexTopBar.vue')),
		  default:()=>(import('@/views/home/Index.vue')),
		  bottomBar:()=>(import('@/views/bottomBar/indexBtmBar.vue'))
	  }
    },
	{
	  path: '/setting',
	  name: 'setting',
	  components: {
		  default:()=>(import('@/views/home/setting.vue'))
	  }
	},
	{
	  path: '/shoppingcart',
	  name: 'shoppingcart',
	  components: {
		  default:()=>(import('@/views/home/shoppingCart.vue')),
		   bottomBar:()=>(import('@/views/bottomBar/indexBtmBar.vue'))
	  }
	},
	{
	  path: '/productDetails/:productId',
	  name: 'productDetails',
	  components: {
		  default:()=>(import('@/views/home/productDetails.vue')),
	  }
	},
	{
	  path: '/personalcenter',
	  name: 'personalcenter',
	  components: {
		  default:()=>(import('@/views/home/PersonalCenter.vue')),
		  bottomBar:()=>(import('@/views/bottomBar/indexBtmBar.vue'))
	  }
	},
	{
	  path: '/login',
	  name: 'login',
	  components: {
		  default:()=>(import('@/views/home/login.vue')),
	  }
	},
	//登录后页面 Start
	{
	  path: '/orderList',
	  name: 'orderList',
	  components: {
		  default:()=>(import('@/views/home/orderList.vue')),
		  bottomBar:()=>(import('@/views/bottomBar/indexBtmBar.vue'))
	  }
	},
	//登录后页面 End
	{
	  path: '*',
	  name: '404',
	  components: {
		  default:()=>(import('@/views/home/404.vue')),
	  }
	}
  ]
})

//不需要登陆权限的页面
const noPermission = ['index','personalcenter','login','404','shoppingcart','setting','search']
// ,'shoppingcart'
routerInit.beforeEach((to,from,next)=>{
	//在全局前置路由拦截器中判断是否已经登录，如果已登录就去获取用户信息
	/*
	* 1. 先来判断要去往的地址是否为该用户允许
	* 	 a. 是。则直接过，检查是否已经登录
	* 		a1. 已经登录。则跳转到之前想要跳转的页面
	* 		a2. 还未登陆。跳转到login页面
	* 	 b. 否。则判断是否已经已经登录
	* 		b1. 没有登录。跳转到login页面
	* 		b2. 已经登录。验证通过，跳转想要去的页面
	*/
    const toLogin = to.name === 'login';
	const userToken = getCookie('alreadyLoginUser');
	
	if(routerInit.options.routes.some(t=>{return to.name !== t.name})){
		//has permission
		if(toLogin && userToken){
			//to login and has logged,go to the personal-centers
			Notify({ 
				color:"#fff",
				background : '#1989fa',
				message: '您已登陆，已重定向到个人中心页面。'
			});
			next('/personalcenter');
			return;
		}else {
			/*
			*	要去登录页面并且还未登陆，或者去想去的任何页面，
			*	检查是否是不需要权限的那些页面。
			* 	如果是的话，就直接跳；不是，那么就跳转到登陆页面
			*	1.去的不是login页面
			* 	2.没有登陆
			*/ 
		   if(userToken){
			   //已登录，那么意味着两种权限都通过
			   // const hasQuery = routerInit.currentRoute.query;
			   // hasQuery ? next(`${hasQuery.where}`) :next()
			   next()
		   }else {
			   //未登录查看是否是不需要登录权限的页面
			   noPermission.some(t=>{return to.name === t}) ? next() : next(`/login?where=${to.name}`)
		   }
		}
		
		
	}else {
		//not permission
		if(!userToken){
			const strLogin = toLogin ? `/login` : `/login?where=${to.name}`;
			toLogin ? next() : next({path:strLogin});
		}else {
			Notify({ type: 'primary', message: '您已登录，但是没有此页面权限，抱歉！' });
		}
	}
})


export default routerInit;