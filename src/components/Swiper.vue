<template>
	<van-swipe :autoplay="3000" indicator-color="white" :height="swiperHeight">
	  <van-swipe-item>1111111111111</van-swipe-item>
	  <van-swipe-item>2222222222222</van-swipe-item>
	  <van-swipe-item>3333333333333</van-swipe-item>
	  <van-swipe-item>4444444444444</van-swipe-item>
	</van-swipe>
</template>
<script>
	export default{
		name:'swiper',
		data(){
			return {
				swiperHeight:140
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
