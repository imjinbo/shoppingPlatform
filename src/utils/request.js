import axios from "axios"

//创建axios自定义实例
const instance = axios.create({
	headers:{},
	timeout:5000
	// baseURL: 'location:8080',
});

//调用实例，将其封装并导出
export default function (data){
	return instance({
		method: data.method|| 'GET',
		url: data.url,
		parmas:data.parmas || '',
		data:data.data,
		headers: {
			'Content-Type': data.header || 'application/json',
		}
	})
}
