import request from "@/utils/request"

// export function getProductDetails(data){
// 	return request({
// 		url:"/mi/v1/miproduct/view",
// 		method:"post",
// 		headers:{
// 			"Content-Type":"application/x-www-form-urlencoded"
// 		},
// 		data
// 	})
// }

export function getProductDetails(data){
	return request({
		url:"/getDetailsData",
		method:"post",
		headers:{
			"Content-Type":"application/x-www-form-urlencoded"
		},
		data
	})
}