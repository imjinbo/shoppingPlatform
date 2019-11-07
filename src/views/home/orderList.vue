<template>
	<div class="orderList">
		<topBar :titleText='titleText' :returnWhere='returnWhere'/>
		<van-tabs v-model="active" animated>
		  <van-tab title="全部">全部</van-tab>
		  <van-tab title="代付款">代付款</van-tab>
		  <van-tab title="待收货">待收货</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import topBar from "@/components/topBar.vue"
	export default{
		name:"orderList",
		components:{ topBar },
		data(){
			return {
				titleText:'我的订单',
				active:0,
				returnWhere:'personalCenter'
			}
		}
	}
</script>

<style>
</style>
