<template>
	<div class="pCont">
		<span>—</span>
		<p class="pCont">{{allData.category_name}}</p>
		<span>—</span>
	</div>
</template>

<script>
	export default{
		name:'titleCont',
		props:{
			allData:Object
		}
	}
</script>

<style lang="scss" scoped>
	.pCont {
		text-align: center;
		p{
			font-size:0.8125rem;
			display: inline-block;
		}
		span{
			color: #e0e0e0;
			margin: 0 10px;
		}
	}
</style>
