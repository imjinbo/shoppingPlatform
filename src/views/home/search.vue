<template>
	<div class="">
		
		<div class="topBar">
			<van-icon  name="arrow-left" class='iconLeft' @click='$router.go(-1)'/>
			
			<van-field size='small' v-model="value" placeholder="搜索商品名称"  class='filed'/>
			
			<van-icon name="search" class='iconRight'/>
		</div>
		<div class="hotCont">
			<span class="title">热门搜索</span>
			<img 
			class="titleImg" 
			:src='"http://"+item.img_url' 
			v-for='item in adList' 
			:key="item.id" 
			@click='$router.push("productDetails/" + item.action.path)'
			/>
			
			<div class="hotBtnCont">
				<van-button
				class='hotBtn'
				size='small'
				v-for='item in keyWordsList' 
				:key='item.word' 
				:style='{color:item.font_n,background:item.back_n,borderColor:item.border_n}'
				>
					{{item.word}}
				</van-button>
			</div>
			
			<p class="hotSort">常用分类</p>
			
			<div class="lastListCont">
				<van-button
				class='lastListBtn'
				size='mini'
				v-for='item in lastList' 
				:key='item.name' 
				>
					{{item.name}}
				</van-button>
			</div>
				
		</div>
	</div>
</template>

<script>
	import { getSearchData } from "@/api/others"
	export default {
		name: 'search',
		data() {
			return {
				value: '',
				adList:[],
				keyWordsList:[],
				lastList:[]
			}
		},
		mounted(){
			getSearchData().then(res=>{
				const allData = res.data.data;
				
				const listTitle = allData.ad_list[0].body.items;
				listTitle.forEach((t,i)=>{t.id = i})
				this.adList = listTitle;
				
				this.keyWordsList = allData.keywords.concat();
				
				this.lastList = allData.hot_class.concat();
			})
		}
	}
</script>

<style lang='scss' scoped>
	.topBar {
		display: flex;
		padding: 10px;
		background: #f2f2f2;
		.filed {
			padding: 0px 16px;
			display: inline-block;
			width: 88%;
		}
		.iconLeft {
			    padding: 2px;
		}
		.iconRight{
			    padding: 2px;
		}
	}
	
	.hotCont {
		padding: 10px 0;
		.title {
			font-size: 0.75rem;
			padding-left: 20px;
		}
		.titleImg {
			width: 100%;
			margin: 10px 0;
		}
		.hotBtnCont {
			padding: 0 20px;
			.hotBtn {
				margin-right: 14px;
				margin-bottom: 10px;
			}
		}
	}
	.hotSort {
		font-size: 0.75rem;
		padding-left: 20px;
	}
	.lastListCont {
		padding: 0 20px;
		.lastListBtn {
			margin-bottom: 4px;
			background: #f5f5f5;
			color: rgba(0,0,0,.54);
			&:nth-child(n + 15){
				display: none;
				/* background: red; */
			}
		}
	}
</style>
