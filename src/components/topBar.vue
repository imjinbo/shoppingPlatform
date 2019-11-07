<template>
	<van-nav-bar :title="titleText" left-text=" " left-arrow @click-left='tapLeft'>
	  <van-icon name="search" slot="right" />
	</van-nav-bar>
</template>

<script>
	export default {
		name:"topBar",
		props:{
			titleText:String,
			returnWhere:String
		},
		methods:{
			tapLeft(){
				//如果传递过来的有值，那么就使用push，否则使用go-1
				this.returnWhere ? this.$router.push(this.returnWhere) : this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>
