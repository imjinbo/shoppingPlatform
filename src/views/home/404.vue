<template>
	
		<div class="page404" >
			<div  class='icon404'>
				<van-icon name="warn-o" size='100px' color='rgb(237, 91, 0)'/>
				<p class="line404">当前页面未完成或不存在</p>
				<router-link to='/'>
					<van-button size='small' type="primary">返回首页</van-button>
				</router-link>
				<van-button size='small' class='rtnPrev' type="info" v-on:click='rtnPrev'>返回上页</van-button>
			</div>
		</div>
</template>

<script>
	export default{
		name:"page404",
		data(){
			return {
				height:0
			}
		},
		mounted() {
			this.height = window.innerHeight
		},
		methods:{
			rtnPrev:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page404{
		text-align:center;
		.icon404 {
			position: fixed;
			top: 44%;
			left: 50%;
			transform:translate(-50%,-50%)
		}
		.line404 {
			margin-top: 4px;
		}
		.rtnPrev {
			margin-left: 10px;
		}
	}
</style>
