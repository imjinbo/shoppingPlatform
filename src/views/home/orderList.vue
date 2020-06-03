<template>
	<div class="orderList contents">
		<topBar :titleText='titleText' :returnWhere='returnWhere'/>
		<van-tabs v-model="active" animated>
		  <van-tab class='vanTab' title="全部">全部</van-tab>
		  <van-tab class='vanTab' title="代付款">代付款</van-tab>
		  <van-tab class='vanTab' title="待收货">待收货</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import topBar from "@/views/topBar/topBar.vue"
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

<style lang="scss" scoped>
	/deep/ .vanTab {
		text-align: center;
	}
</style>
