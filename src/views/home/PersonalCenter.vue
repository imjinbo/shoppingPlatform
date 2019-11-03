<template>
	<div style=" margin-bottom: 50px;">
			<router-link to='/login'>
				<header class="header">
					<div><img width="32%" :src="avatar" /></div>
					<div>
							<p class="title">登录/注册</p>
					</div>
				</header>
			</router-link>
		<div>
			<!-- 中部 -->
			<section class="orderCont">
				<!-- 我的订单 -->
				<van-row type="flex" justify="space-between" class='order_mine borderLine'>
				  <van-col span="6">我的订单</van-col>
				  <van-col span="5.5" style='font-size: 12px;'>
					  全部订单
					  <van-icon name="arrow" color='#757575'/>
				  </van-col>
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
					<van-row>
						<van-col class='vanImg' span="4"><img :src='item2.showImg'/></van-col>
						<van-col class='vanTitle'
						 :class="{borderLine : compuBorder(index2,item)}"
						 span="18" >
							<span>{{item2.title}}</span>
						 </van-col>
						 
						<van-col class='vanBg' 
						:class="{borderLine : 
						compuBorder(index2,item)}" span="2">
							<van-icon name="arrow" color='#757575'/>
						</van-col>
					  
					</van-row>
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
				avatar: '',
				list:[{
					id:1,list:[{
						id:1,
						showImg:crown,
						title:"会员中心"
					},{
						id:2,
						showImg:wallet,
						title:"我的优惠"
					}]
				},{
					id:2,list:[{
						id:1,
						showImg:love,
						title:"服务中心"
					},{
						id:2,
						showImg:shop,
						title:"小米之家"
					}]
				},{
					id:3,list:[{
						id:1,
						showImg:FMa,
						title:"我的M码"
					},{
						id:2,
						showImg:gift,
						title:"礼物码兑换"
					}]
				},{
					id:4,list:[{
						id:1,
						showImg:setting,
						title:"设置"
					}]
				}]
			}
		},
		mounted() {
			this.avatar = require('@/assets/avatar.png');
		},
		methods:{
			compuBorder(index2,item){
				return index2 === 0 && item.list[1];
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
				left: 25%;
			}
			&:last-of-type{
				left: 28%;
				font-size: 12px;
				.title{
					color: #fff;
				}
			}
		}
		
	}
	.labelList {
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
			padding: 2% 4%;
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
