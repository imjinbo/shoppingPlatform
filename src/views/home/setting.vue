<template>
	<div class="content">
		<van-nav-bar
		  title="设置"
		  left-arrow
		  @click-left="tapReturn"
		/>
		<ul class="listUl">
			<li v-if='loginOutShow' class="listLi" @click='$router.push("/addressCont")'>地址管理</li>
			<li class="listLi" @click='userInfoShow = true'>关于本项目</li>
			<van-dialog
			  v-model="userInfoShow"
			  title="关于本项目"
			  closeOnClickOverlay
			>
			 <div class="userInfo">
				 <p class="li1">此为个人演示项目，不做商业用途。</p>
				 <p class="li2">Github地址：</p>
				 <p class="li3">https://github.com/imjinbo/shoppingPlatform</p>
			 </div>
			</van-dialog>
		</ul>
		<van-row class="btnCont" type="flex" justify="space-around" v-if='loginOutShow'>
		  <van-button span="6" type="info" @click='switchAccount'>切换账号</van-button>
		  <van-button span="6" type="danger" @click='loginOutFn'>退出登录</van-button>
		</van-row>
	</div>
</template>

<script>
	import { getCookie,delCookie } from "@/utils/mockCk"
	export default {
		name:"setting",
		data(){
			return {
				loginOutShow:false,
				userInfoShow:false
			}
		},
		mounted(){
			//是否登录，是否显示退出
			getCookie('alreadyLoginUser') && (this.loginOutShow = true);
		},
		methods:{	
			tapReturn(){
				this.$router.go(-1)
			},
			loginOutFn(){
				/*
				*	退出需要清理的内容：
				* 	1. sessionStorage
				* 	2. cookie
				* 	3. vuex
				* 	最后退出到个人中心
				*/
			   
			    this.$toast({
					message: '正在退出...',
					forbidClick: true,
					duration:600,
					onClose:()=>{
						this.$toast.success({message:'成功退出',duration:600});
						this.$router.push("/personalcenter")
					}
				});
			   
			   sessionStorage.removeItem("userInfo");
			   delCookie('alreadyLoginUser');
			   this.$store.commit('user/loginOut');
			},
			switchAccount(){
				this.$toast({
					message: '切换账号功能暂未实现',
					duration:1000,
				});
			}
		}
	}
</script>

<style lang='scss' scoped>
	.content {
		height: -webkit-fill-available;
		position: relative;
		.rtnBtn {
			bottom: 60px;
		}
		.listUl{
			li{
				padding: 10px 25px;
				border-bottom: 1px solid rgba(111, 111, 111, 0.15);
			}
		}
		.btnCont {
			position: fixed;
			bottom: 30px;
			width: 100%;
			button{
				border-radius: 4px;
			}
		}
		.userInfo {
			padding: 10px 24px;
			font-size: 14px;
			.li1{
				
			}
			.li2{
				margin-bottom: 0;
				
			}
			.li3{
				margin: 0;
				font-size: 12px;
				color:#969799;
				margin-bottom: 12px;
			}
		}
	}
	
</style>
