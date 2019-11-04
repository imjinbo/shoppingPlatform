import request from "@/utils/request"

//login登录
export function loginXhr(data){
	return request({
		url:"/login",
		method:"POST",
		data
	})
}
