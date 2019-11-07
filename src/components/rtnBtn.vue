<template>
	<van-button class='returnBtn' @click='$router.go(-1)' size='small' plain icon="arrow-left" color='rgb(255, 103, 0)'/>
</template>

<script>
	export default{
		name:"rtnBtn"
	}
</script>

<style lang='scss' scoped>
	.returnBtn {
		position: fixed;
		bottom: 17px;
		left: 20px;
		border-radius: 6px;
		min-width: 30px;
	}
</style>
