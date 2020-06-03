<template>
	<div class="imgCont clearfloat">
		<img class="imgItem"  v-lazy='"http://"+ (item.body ? item.body.img_url : item.img_url) ' v-for='item in allData' :key='item.block_id' />
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
				if(news[0].viewType == "plainView"){
					let sendArr = [];
					
					news.forEach((t,i)=>{
						sendArr.push({
							block_id:i,
							img_url:t.plainView.img
						})
					})
					this.allData = sendArr;
					
				}else {
					let arr  = [],sendData = [];
					let showData = this.detailsData.find(t=>{return t.view_type === "product_info_tab"})
					let showData2 = showData.body.items.map(t=>{return t.page_info;});
					showData2.forEach((t,i)=>{if(i!=0){return}; arr = arr.concat(t)})
					arr.forEach((t,i)=>{
						try{
							t.body.img_url.split('https://')[1];
						}catch(e){
							return false;
						}
						sendData.push({
							block_id:i,
							img_url:t.body.img_url.split('https://')[1]
						})
					})
					this.allData = sendData;
				}
				
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
