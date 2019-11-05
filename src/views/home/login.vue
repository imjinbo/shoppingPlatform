<template>
	<div>
		<header class="header">
			<logo />
			<h3 class="h3">Mock账号登录</h3>
		</header>
		<section class="fieldCont">
			<van-cell-group>
			  <van-field
				class='field'
			    v-model="username"
			    clearable
			    placeholder="邮箱/手机号码"
				@keyup.enter='loginFn'
			  />
			  <van-field
				class='field'
			    v-model="password"
			    type="password"
			    placeholder="密码"
				right-icon='eye-o'
				@keyup.enter='loginFn'
			  />
			</van-cell-group>
		</section>
		<section class="btnCont">
			<van-button 
			class='btn' 
			size='large ' 
			type="primary" 
			color='#ff6700' 
			loading-text='验证中...'
			:loading=loginBtn
			:disabled=loginBtn
			
			@click='loginFn'>登录</van-button>
			<van-button class='btn' size='large ' plain @click='resgistered'>注册</van-button>
		</section>
		<van-button class='returnBtn' @click='$router.go(-1)' size='small' plain icon="arrow-left" color='rgb(255, 103, 0)'/>
	</div>
</template>

<script>
	import logo from "@/assets/useLogo.vue"
	
	export default {
		name:"login",
		data(){
			return {
				username:"admin",
				password:'admin',
				loginBtn:false
			}
		},
		components:{ logo },
		methods:{
			loginFn(){
				this.loginBtn = true;
				const sendData = {
					username : this.username,
					password : this.password
				};
				/* 
				* 1. 调用登录方法传送账户密码，接着去触发vuex中的userLogin方法
				* 2. 数据返回之后，判断登录是否有问题
				*/
				this.$store.dispatch("user/userLogin",sendData)
				.then((res)=>{
					this.loginBtn = false;
					const REQDATA = res.data;
					this.$notify({ 
						color:"#fff",
						background:REQDATA.rtnCode === 200 ? (this.username === 'imjinbo' ? '#1989fa' :"#ff6700") : '#ff2841',
						message: REQDATA.message
					});
				})
			},
			resgistered(){
				this.$store.dispatch("test").then(res=>{
					
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		margin-top: 10%;
		text-align: center;
		.h3 {
			margin: 0;
			font-weight: 400;
		}
	}
	.fieldCont {
		padding: 5%;
		.field {
			border-bottom: 1px solid rgba(0, 0, 0, 0.15);	
		}
	}
	.btnCont {
		padding:0 5%;
		.btn{
			height: 42px;
			line-height: 42px;
			border-radius: 6px;
			display: block;
			margin-bottom: 10px;
			&:last-of-type{
				border: 1px solid rgba(0, 0, 0, 0.15);	
			}
		}
	}
	.returnBtn {
		position: fixed;
		bottom: 17px;
		left: 20px;
		border-radius: 6px;
		min-width: 30px;
	}
</style>
