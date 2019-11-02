<template>
	<div>
		<header class="header">
			<div><img width="12%" :src="avatar" /></div>
			<div>
				<p>登录/注册</p>
			</div>
		</header>
		<div>
			<!-- 中部 -->
			<section>
				<!-- 我的订单 -->
				<div>
					<span>我的订单</span>
					<span>全部订单</span>
				</div>
				<van-row type="flex" justify="space-around">
				  <van-col span="6">代付款</van-col>
				  <van-col span="6">待收货</van-col>
				  <van-col span="6">退换修</van-col>
				</van-row>
			</section>
			
			<section v-for='item in list' :key="item.id">
				
				<label class="labelList" v-for="item2 in item.list" :key="item2.id">
					<img width='7%' :src='item2.showImg'/>
					<span>{{item2.title}}</span>
					<van-icon name="arrow" color='#757575'/>
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
		}
	}
</script>

<style scoped lang='scss'>
	/* :style="{background:'url(' + require('@/assets/bgImg.png') + ' ) center  #f37d0f'}" */
	.header {
		background: url('~@/assets/bgImg.png') center 0 #f37d0f;
		background-size: auto 100%;
	}
	.labelList {
		display: block;
	}
</style>
