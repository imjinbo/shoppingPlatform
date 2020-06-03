<template>
	<div class="content">
			<header class="header" @click='toLogin'>
				<div>
					<img width="100%" :src="userInfo.avatar" />
				</div>
				<div>
					<p class="title">{{userInfo.title}}</p>
					<p class="userId" v-if='isLogin'>{{userInfo.userId}}</p>
				</div>
			</header>
		<div>
			<!-- 中部 -->
			<section class="orderCont">
				<!-- 我的订单 -->
				<van-row type="flex" justify="space-between" class='order_mine borderLine'>
				  <van-col span="6">我的订单</van-col>
				  <router-link to='orderList'>
					  <van-col span="5.5" style='font-size: 12px;'>
						  全部订单
						  <van-icon name="arrow" color='#757575'/>
					  </van-col>
				  </router-link>
				</van-row>
				<van-row type="flex" justify="space-around" class='DST borderLine_G'>
				  <van-col span="6" class='DST_item'>
					  <img src='~@/assets/wallet2.png'/>
					  <span class="DST_text">代付款</span>
				  </van-col>
				  <van-col span="6" class='DST_item'>
					  <img src='~@/assets/car.png'/>
					  <span class="DST_text">待收货</span>
				  </van-col>
				  <van-col span="6" class='DST_item'>
					  <img src='~@/assets/nav-4.png'/>
					  <span class="DST_text">退换修</span>
				  </van-col>
				</van-row>
			</section>
			
			<section  class='borderLine_G' v-for='item in list' :key="item.id">
				<label class="labelList" v-for="(item2,index2) in item.list" :key="item2.id">
					<router-link :to='item2.path'>
						<van-row>
							<van-col class='vanImg' span="4"><img :src='item2.showImg'/></van-col>
							<van-col class='vanTitle'
							 :class="{borderLine : compuBorder(index2,item)}"
							 span="18" >
								<span class="btitle">{{item2.title}}</span>
							 </van-col>
							 
							<van-col class='vanBg' 
							:class="{borderLine : 
							compuBorder(index2,item)}" span="2">
								<van-icon name="arrow" color='#757575'/>
							</van-col>
						  
						</van-row>
					</router-link>
				</label>
				
			</section>
			
		</div>
	</div>
</template>

<script>
	import wallet from '@/assets/wallet.js'
	import crown from '@/assets/crown.js'
	import love from '@/assets/love.js'
	import shop from '@/assets/shop.js'
	import FMa from '@/assets/FMa.js'
	import gift from '@/assets/gift.png'
	import setting from '@/assets/setting.png'
	
	export default {
		name: "PersonCenter",
		data() {
			return {
				userInfo:{
					title:'登录/注册',
					avatar:require('@/assets/avatar.png'),
					userId:false
				},
				isLogin:false,
				list:[{
					id:1,list:[{
						id:1,
						showImg:crown,
						title:"会员中心",
						path:"/vipCenter"
					},{
						id:2,
						showImg:wallet,
						title:"我的优惠",
						path:"/myOffer"
					}]
				},{
					id:2,list:[{
						id:1,
						showImg:love,
						title:"服务中心",
						path:"/server"
					},{
						id:2,
						showImg:shop,
						title:"小米之家",
						path:"/mHome"
					}]
				},{
					id:3,list:[
					// 	{
					// 	id:1,
					// 	showImg:FMa,
					// 	title:"我的M码",
					// 	path:"/mMa"
					// },
					{
						id:2,
						showImg:gift,
						title:"礼物码兑换",
						path:"/gift"
					}]
				},{
					id:4,list:[{
						id:1,
						showImg:setting,
						title:"设置",
						path:"/setting"
					}]
				}]
			}
		},
		mounted() {
			/*
			* 1.判断是否已经登录。
			*   a. 已登录则获取存在session中的个人信息
			*   b. 未登录则继续使用avatar
			*/
			this.isLogin = JSON.parse(sessionStorage.getItem("userInfo")) || false;
			if(this.isLogin){
				this.userInfo = {
					userId:this.isLogin.id,
					avatar:this.isLogin.logo,
					title:this.isLogin.username
				}
			}
				
		},
		methods:{
			compuBorder(index2,item){
				return index2 === 0 && item.list[1];
			},
			toLogin(){
				//检查是否已经登录，如果已经登录则不做反应，未登录继续跳转
				// this.$store.state.user.userInfo
				!this.isLogin && this.$router.push('login').catch(rej=>rej);
				return;
			}
		}
	}
</script>

<style scoped lang='scss'>
	.borderLine{
		border-bottom: 1px solid rgba(0,0,0,.15);
	}
	.borderLine_G{
		border-bottom: 8px solid #f5f5f5;
	}
	.btitle {
		color: rgba(0, 0, 0, 0.87);
	}
	.content {
		margin-bottom: 50px;
	}
	.header {
		background: url('~@/assets/bgImg.png') center 0 #f37d0f;
		background-size: auto 100%;
		position: relative;
		height: 12vh;
		>div{
			position: absolute;
			top: 52%;
			transform: translate(-50%,-50%);
			&:first-of-type{
				background: #fff;
				left: 2.4rem;
				height: 2.4rem;
				width: 2.4rem;
				border-radius: 100px;
				border: 4px solid #ff993a;
				img{
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					border-radius: 100px;
				}
			}
			&:last-of-type{
				left: 6.8rem;
				font-size: 12px;
				.title,.userId{
					color: #fff;
					line-height: 6px;
				}
			}
		}
		
	}
	.labelList {
		background: #fff;
		display: block;
		.vanImg {
			padding: 4% 10px;
			text-align: center;
			img{
				width:60%
			}
		}
		.vanTitle{
			padding: 5% 0;
		}
		.vanBg{
			padding: 5% 0;
		}
	}
	.orderCont {
		.order_mine {
			transition: all .3s;
			padding: 2% 4%;
			&:active{
				opacity: 0.5;
			}
		}
		
		.DST {
			.DST_item {
				margin: 18px 0;
				text-align: center;
				img{
					width:26%;
					display: block;
					margin: 0 auto;
				}
				.DST_text {
					color:rgba(0,0,0,.87);
					font-size: 12px;
				}
			}
				
		}
	}
</style>
