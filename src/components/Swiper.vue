<template>
	<van-swipe :autoplay="3000" indicator-color="white">
		<van-swipe-item v-for='item in tabsImg'><img :src='"http://"+item.imgUrl' width="100%" height="auto" /></van-swipe-item>
	</van-swipe>
</template>
<script>
	export default {
		name: 'swiper',
		props: {
			tabsImg: Array
		}
	}
</script>

<style lang="scss" scoped>

</style>
