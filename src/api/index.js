import request from "@/utils/request"

export function getIndexData() {
	return request({
		method: 'post',
		url: "/mi/v1/home/page",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	})
}

export function testFn(){
	return request({
		method:"post",
		url:"/api/vehicle"
	})
}
