import Mock from 'mockjs'
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
 
 export default { vehicle,user,data }
