import Mock from 'mockjs'
import admin from "@/assets/admin.png"
import drago from "@/assets/drago.png"

//data
import indexData from "./mockData/indexData"
import proDetailsData from "./mockData/proDetailsData"
import searchData from "./mockData/searchData"
import sortData from "./mockData/sortData"
import youLikeData from "./mockData/youLikeData"

//配置step，拦截Ajax时候的行为
Mock.setup({
    timeout: '400-1000'
})

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
 const rtnToken = {
 	 imjinbo:{
 		 token:"imjinbo`sToken",
 	 },
 	 admin:{
 		 token:"admin`sToken",
 	 }
 }
 
 const rtnMessage = {
	 imjinbo:{
		 username:"大金波",
		 level:0,
		 logo:drago,
		 id:'975636767'
	 },
	 admin:{
		 username:"管理员",
		 level:1,
		 logo:admin,
		 id:'860356609'
	 }
 }
 
 
 //登录
const login = Mock.mock(
	'/login','post',(req,res)=>{
		//协议一定是小写
		const loginData = JSON.parse(req.body);
		//已在前台做了是否为空判断，这里不做处理
		
		//根据传递进来的用户名称来查询是否有这个人的信息，返回token
		const user = rtnToken[loginData.username] && rtnToken[loginData.username].token
		
		if(loginData.username == 'imjinbo'){
			
			return loginData.password === "imjinbo" ? {
				rtnCode:200,
				message:"是波波波波波波波波波波波波，欢迎波！",
				user
			} : {
				rtnCode:400,
				message:"密码错误!"
			};
		}else if(loginData.username == 'admin'){
			return loginData.password === "admin" ? {
				rtnCode:200,
				message:"登录成功！",
				user
			} : {
				rtnCode:400,
				message:"密码错误!"
			};
		}else {
			return {
				rtnCode:400,
				message:"该账户不存在！"
			}
		}
		return {
			code:200,
			message:'成功！'
		}
	}
)

const getuserInfo = Mock.mock(
	/getuserinfo\?data\=\S*/,'get',req=>{
		
		const userToken = req.url.split("data=")[1];
		if(userToken === "admin`sToken"){
			return rtnMessage['admin'];
		}else if(userToken === "imjinbo`sToken"){
			return rtnMessage['imjinbo']
		}
	}
)


const getIndexData = Mock.mock(
	'/indexData','post',req=>{
		return indexData;
	}
)
const getDetailsData = Mock.mock(
	'/getDetailsData','post',req=>{
		return proDetailsData;
	}
)
const getSortList = Mock.mock(
	'/getSortList','post',req=>{
		return sortData;
	}
)
const getYouLike = Mock.mock(
	'/getYouLike','post',req=>{
		return youLikeData;
	}
)
const getSearchData = Mock.mock(
	'/getSearchData','post',req=>{
		return searchData;
	}
)
 export default { login,getuserInfo,getIndexData,getDetailsData,getSortList,getYouLike,getSearchData }