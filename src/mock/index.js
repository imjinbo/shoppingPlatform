import Mock from 'mockjs'

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

const vehicle = Mock.mock(
 '/api/vehicle','post', (req, res) =>{
    return  {
        code:200,
        data:[{
            id:1,
            licNumber:'陕A79898',
            color:1,
            buyTime:'2017-04-01'
 
        },{
            id:1,
            licNumber:'陕A79898',
            color:1,
            buyTime:'2017-04-01'
 
        }],
        message:'查询成功'
    }
} )

 const user = Mock.mock(
 '/api/user','get', (req, res) =>{
    return  {
        code:200,
        data:{
            id:1,
           sex:1,
            age:25,
            createTime:'2017-04-01'
        },
        message:'查询成功'
    }
} )
 
 // 1.setToken。怎么设置的
 // 2.store下登录的时候，成功后设置token。查看从哪个接口发送的
 // 3.loginByUsername。去到mock中查看，发现就是写死的数据
 
 
 //登录
const login = Mock.mock(
	'/login','post',(req,res)=>{
		
		//协议一定是小写
		const loginData = JSON.parse(req.body);
		//已在前台做了是否为空判断，这里不做处理
		if(loginData.username == 'imjinbo'){
			
			return loginData.password === "imjinbo" ? {
				rtnCode:200,
				message:"是波波波波波波波波波波波波，欢迎波！"
			} : {
				rtnCode:400,
				message:"密码错误!"
			};
		}else if(loginData.username == 'admin'){
			return loginData.password === "admin" ? {
				rtnCode:200,
				message:"登录成功！"
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

 export default { vehicle,user,data,login }