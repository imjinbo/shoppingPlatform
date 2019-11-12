import request from "@/utils/request"


/*由于要进行展示
* 但是proxy是跨域请求而又只能在开发环境中运行，
* 所以此处的请求一律mock处理
*/
//开发模式   ———————————————————— start
// export function getIndexData() {
// 	return request({
// 		method: 'post',
// 		url: "/mi/v1/home/page",
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 		}
// 	})
// }
//开发模式   ———————————————————— end

export function getIndexData() {
	return request({
		method: 'post',
		url: "/indexData",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	})
}
