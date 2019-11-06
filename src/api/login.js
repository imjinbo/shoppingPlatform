import request from "@/utils/request"

//login登录
export function loginXhr(data){
	return request({
		url:"/login",
		method:"POST",
		data
	})
}

//获取用户信息
export function getUserInfo(data){
	return request({
		url: `/getuserinfo?data=${data}`,
	})
}