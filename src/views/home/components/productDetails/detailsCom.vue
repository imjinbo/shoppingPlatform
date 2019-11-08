<template>
	<div class="imgCont clearfloat">
		<img class="imgItem" :src='item.body.img_url' v-for='item in allData' :key='item.block_id' />
		<!-- {{detailsData}} -->
	</div>
</template>

<script>
	export default{
		name:"detailsCom",
		props:{
			detailsData:Array
		},
		data(){
			return {
				allData:{}
			}
		},
		watch:{
			'detailsData'(news,old){
				this.allData = this.detailsData.filter(t=>{
					return t.view_type === "image_w_1080" || t.view_type === "video_view"
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.imgCont {
		.imgItem{
			float: left;
			width: 100%;
		}
	}
	
</style>
