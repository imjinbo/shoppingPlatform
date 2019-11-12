<template>
	<div>
		<div class="parmamsSize" @click='skuShow = true'>
			<p>已选</p>
			<p>{{selName}}</p>
			<van-icon name="arrow" class='parmamsSizeIcon'/>
		</div>
		
		<van-sku
		  v-model="skuShow"
		  :sku="sku"
			:goods="goods"
			:goods-id="goodsId"
			:hide-stock="sku.hide_stock"
			:message-config="msgConfig"
			@sku-selected='select'
		/>
	</div>
</template>

<script>
	export default{
		name:"sizeInfo",
		props:{
			sizeInfoData:Array,
			buyOptionData:Array
		},
		data(){
			return {
				selName:'请选择商品规格',
				msgConfig:{},
				goodsId:"12",
				skuShow:false,
				sku:{
					tree: [],
					list: [],
				    price: '0', // 默认价格（单位元）
				    stock_num: 227, // 商品总库存
				    collection_id: 2261, // 无规格商品 
					none_sku: false, // 是否无规格商品
					hide_stock: false // 是否隐藏剩余库存
				},
				goods: {
				  // 商品标题
				  title: '测试商品',
				  // 默认商品 sku 缩略图
				  picture: ''
				}
			}
		},
		watch:{
			sizeInfoData(news,old){
				this.goods.picture = news[0].img_url;
			},
			buyOptionData(news,old){
				// 商品购买的sku分类
				news.forEach((t,i)=>{
					let listData = [];
					let list2Arr = [];
					//二级
					t.list.forEach((ti,ii)=>{
						listData.push({
							id:ti.prop_value_id + i,
							name:ti.name
						})
						//内部的价格
						let may = parseInt(ti.price.length != 0 ? ti.price.split('元')[0] : 0)*100;
						this.sku.list.push({
							id: ti.prop_value_id,
							price: may,
							stock_num:Number(JSON.stringify(ti.prop_value_id).slice(0,2)),
							s1:ti.prop_value_id,
							s2:ti.prop_value_id +ii + i,
						})
					})
					this.sku.tree.push({
						k:t.name,
						v:listData,
						k_s: i === 0 ? 's1' : 's2'
					})
				})
			}
				
		},
		methods:{
			select(data){
				if(this.sku.tree.length === 1){
					this.selName = data.skuValue.name ;
				}else{
					Object.keys(data.selectedSku).some(t=>{return data.selectedSku[t].length == 0}) 
					? (this.selName = data.skuValue.name) : (this.selName += data.skuValue.name);
				}
				Object.keys(data.selectedSku).every(t=>{return data.selectedSku[t].length == 0}) && (this.selName = '请选择商品规格');
			}
		}
	}
</script>

<style lang='scss' scoped>
	.parmamsSize {
		position: relative;
		.parmamsSizeIcon {
			position: absolute;
			top: 4px;
			right: 0;
		}
		>p{
			display: inline-block;
			margin: 0;
			font-size: 0.75rem;
			&:first-of-type{
				margin-right: 10px;
				color: rgba(0,0,0,.54);
			}
			&:last-of-type{
				color: rgba(0,0,0,.87);
			}
		}
	}
</style>
