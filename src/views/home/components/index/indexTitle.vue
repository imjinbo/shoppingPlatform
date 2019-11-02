<template>
	<ul>
		<li v-for="(item,index) in list" :key="item.action_title">
			<p class="pStyle">{{item.action_title}} ></p>
		</li>
	</ul>
</template>

<script>
	export default{
		name:"indexTitle",
		props:{
			dataAll:Object
		},
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.list = this.dataAll.body.items.concat()
		}
	}
</script>

<style scoped lang="scss">
	.pStyle {
		text-align: center;
		margin: 10px;
		color: rgba(0,0,0,.6);
	}
</style>
