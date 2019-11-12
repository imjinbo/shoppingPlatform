<template>
	<div>
		<div class="imgCont" v-for='item in allData.items' :key='item.img_url'>
			<img width='100%' :src="'http://' + item.img_url"/>
		</div>
	</div>
</template>

<script>
	export default{
		name:'fill',
		props:{
			allData:Object
		}
	}
</script>

<style lang='scss' scoped>
	.imgCont {
		padding: 0 10px;
	}
</style>
