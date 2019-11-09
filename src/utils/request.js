import axios from "axios"

//创建axios自定义实例
const instance = axios.create({
	headers:{},
	timeout:5000
	// baseURL: 'location:8080',
});

//调用实例，将其封装并导出
export default function (data){
	let formData = new FormData();
	const istrue = data.headers && data.headers['Content-Type'] === 'application/x-www-form-urlencoded';
	
	if(istrue){
		data.data && Object.keys(data.data).forEach(t=>{ 		
			formData.append(t,data.data[t]) 	
		})
	}
	
	//判断传递的属性是什么。是form还是普通的json
	let sendData = istrue ? formData : data.data
	
	// data.method ? data.method.toLowerCase() === 'get' 
	return instance({
		method: data.method|| 'GET',
		url: data.url,
		parmas:data.parmas || '',
		data:sendData,							//回填数据
		headers: data.headers
	})
}
