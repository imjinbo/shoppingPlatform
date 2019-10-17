<template>
	<van-tabs
	color = '#0bbbef'
	title-active-color = '#0bbbef'
	v-model="active"
	:swipeThreshold=swipeThreshold
	
	>
	  <van-tab title="推荐">推荐</van-tab>
	  <van-tab title="手机">手机</van-tab>
	  <van-tab title="声学">声学</van-tab>
	  <van-tab title="配件">配件</van-tab>
	  <van-tab title="生活">生活</van-tab>
	</van-tabs>
</template>

<script>
	export default{
		name:"indexTabs",
		data(){
			return {
				active:0,
				swipeThreshold:6
			}
		}
	}
</script>

<style>
</style>
