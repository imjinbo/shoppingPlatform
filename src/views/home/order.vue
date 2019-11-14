<template>
	<div class="contents">
		<topBar titleText='确认信息' />
		<van-card
		  num="2"
		  price="2.00"
		  desc="描述信息"  
		  title="商品标题"
		  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
		/>
	</div>
</template>

<script>
	import topBar from "@/views/topBar/topBar"
	
	export default{
		name:'order',
		components:{
			topBar
		},
		mounted() {
			process
		}
	}
</script>

<style>
</style>
