module.exports = {
	publicPath: './',  
	lintOnSave: true,
	devServer:{
		proxy:{
			"/mi":{						//设置跨域变量代号
				target:"https://m.mi.com/",	//你想要代理的目标源链接
				changeOrigin:true,			//开启代理
				pathRewrite:{				//设置二级
					"^/api": "/",			
					"^/api2": "/body"
				},
				headers:{
					'Referer':'https://m.mi.com'
				}
			}
		}
	}
}