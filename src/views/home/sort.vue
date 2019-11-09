<template>
	<div class="contents">
		<topBar titleText="分类"/>
		<van-tree-select
		  :height="heights"
		  :items="list"
		  :main-active-index.sync="activeIndex"
		>
		  <template slot="content">
		    <rightCont v-for='item in rightData' :key='item.id' v-show='activeIndex == item.id' :childData='item.data'/>
		  </template>
		</van-tree-select>
	</div>
</template>

<script>
	import topBar from "@/views/topBar/topBar.vue"
	import rightCont from "./components/sort/rightCont.vue"
	import { getSortList } from "@/api/others"
	
	export default {
		name:"sort",
		components:{
			topBar,
			rightCont
		},
		data(){
			return {
				list:[],
				heights:0,
				activeIndex:0,
				rightData:[]
			}
		},
		mounted(){
			this.heights = window.innerHeight - 96;
			getSortList().then(res=>{
				let allData = [];
				let chilData = [];
				res.data.data.forEach((t,i)=>{
					allData.push({
						text:t.category_name,
						dot:false,
						className:'leftBar'
					})
					
					chilData.push({
						id:i,
						data:t.category_list
					}) 
				})
				this.list = allData;
				this.rightData = chilData.concat();
			})
		}
		
	}
</script>

<style lang='scss' >
	.contents {
		margin-bottom: 20px;
	}
</style>
