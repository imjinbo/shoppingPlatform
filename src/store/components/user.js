import vuex from "vuex"
import { loginXhr,getUserInfo } from "@/api/login"
import { setCookie,setLimitCookie } from "@/utils/mockCk"

export default {
	namespaced: true,//开启命名空间
	state:{
		alreadyToken:'',
		userInfo:{}
	},
	mutations:{
		userLogin(state,token){
			state.alreadyToken = token
		},
		setUserInfo(state,rtnData){
			state.userInfo = rtnData;
		}
	},
	actions:{
		userLogin(store,sendData){
			/*
			*	1. 被触发，sendData为账户密码
			* 	2. 创建promise对象，调用api进行发送
			* 	3. 数据返回后，判断是否登录成功；
			* 		a. 成功则将返回的token存入cookie，同时存入vuex，最后调用resolve回传参数信息
			*   	b. 失败则resolve回失败信息
			*/
			return new Promise((resolve,reject)=>{
				loginXhr(sendData).then(res=>{
					
					const REQDATA = res.data;
					if(REQDATA.rtnCode === 200){
						//在cookie中存入所成功登录的token
						store.commit("userLogin",setCookie('alreadyLoginUser',REQDATA.user))
						
						//登陆成功之后立刻通过token去获取个人用户信息，之后存入vuex
						resolve(res);
						store.dispatch('getUserInfo',REQDATA.user)
						.then((res)=>{console.log(res)})
						.catch((rej)=>{console.log(rej)})
						
					}else {
						//未通过的情况下，只得以先用这样来抛出结果
						resolve(res);
					}
				})
			})
		},
		getUserInfo({state,commit},userToken){
			return new Promise((resolve,reject)=>{
				getUserInfo(userToken).then(res=>{
					resolve(res.data)
					commit('setUserInfo',res.data);
					sessionStorage.setItem('userInfo',JSON.stringify(res.data))
				}).catch(()=>{
					reject("未获取到该用户信息")
				})
			})
		}
	},
	getters:{
		//相当于组件中的计算属性
		getUserInfoer:(store)=>{
			return store.alreadyToken
		}
	}
}