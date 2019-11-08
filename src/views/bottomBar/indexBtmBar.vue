<template>
	<van-tabbar class='vansTabbar' active-color='#ff6700' inactive-color="#999" route>
	  <van-tabbar-item to='/' icon="wap-home-o">首页</van-tabbar-item>
	  <van-tabbar-item to='/sort' icon="apps-o">分类</van-tabbar-item>
	  <van-tabbar-item to='/shoppingCart' icon="cart-o">购物车</van-tabbar-item>
	  <van-tabbar-item to='/personalCenter' icon="manager-o">我的</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	
	export default {
		name: 'bottomBar',
		data(){
			return {
				name:"personalCenter"
			}
		}
	}
</script>

<style lang='scss' scoped>
	.vansTabbar {
		box-shadow: 0 0px 4px -1px rgba(0, 0, 0, 0.2);
	}
</style>
