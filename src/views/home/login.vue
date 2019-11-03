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
			  />
			  <van-field
				class='field'
			    v-model="password"
			    type="password"
			    placeholder="密码"
				right-icon='eye-o'
			  />
			</van-cell-group>
		</section>
		<section class="btnCont">
			<van-button class='btn' size='large ' type="primary" color='#ff6700'>登录</van-button>
			<van-button class='btn' size='large ' plain >注册</van-button>
		</section>
		<van-button class='returnBtn' @click='returnFn' size='small' plain icon="arrow-left" color='rgb(255, 103, 0)'/>
	</div>
</template>

<script>
	import logo from "@/assets/useLogo.vue"
	export default {
		name:"login",
		data(){
			return {
				username:"imjinbo",
				password:'imjinbo'
			}
		},
		components:{
			logo
		},
		methods:{
			returnFn(){
				this.$router.go(-1)
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
