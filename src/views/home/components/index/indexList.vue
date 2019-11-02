<template>
	<div class="liList">
		<van-row type="flex" justify="space-between">
			<div v-for="(item,index) in list" :key="item.ad_position_id" class="vanRowDiv">
				<img width="100%" v-lazy="item.img_url" />
				<h6 class="h6Sty">{{item.product_name}}</h6>
				<p class="p1Sty">{{item.product_brief}}</p>
				<p class="p2Sty">¥{{item.product_org_price}}起</p>
				<van-button color='#ea625b' size='small' class='btnSty' >立即购买</van-button>
			</div>
		</van-row>
	</div>
</template>

<script>
	export default{
		name:'indexList',
		props:{
			dataAll:Object,
			
		},
		data(){
			return {
				list:[]
			}
		},
		mounted() {
			const bodyData = this.dataAll.body;
			this.list = bodyData.items.concat()
		}
		
	}
</script>

<style  lang='scss' scoped>
	.liList {
		padding:  6px;
		padding-bottom: 0;
		.vanRowDiv {
			width: 49%;
			text-align: center;
		}
		.h6Sty {
			font-size: 14px;
			margin: 0;
			margin-top: 2px;
			font-weight: 400;
		}
		.p1Sty,.p2Sty{
			font-size: 12px;
			margin: 0;
			line-height: 18px;
		}
		.p1Sty{
			color: rgba(0,0,0,.54);
		}
		.p2Sty {
			color: #ea625b;
			font-size: 14px;
		}
		.btnSty {
			margin-top: 2px;
			margin-bottom: 6px;
		}
	}
</style>
