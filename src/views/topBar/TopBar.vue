<template>
	<indexBar class='indexBar'/>
</template>

<script>
	import indexBar from "./components/IndexBar.vue"
	
	export default {
		name: 'topBar',
		components:{
			indexBar
		}

	}
</script>

<style lang="scss" scoped>
	.indexBar{
		right: 0;
		z-index: 10;
		position: fixed;		top:0;
		left:0;
	}
</style>
