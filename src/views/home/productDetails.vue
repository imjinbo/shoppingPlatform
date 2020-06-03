<template>
	<div class="productDetails">
		<div class="swiperCont">
			<div class="swiperBtnCont">
				<van-button 
					size='small' 
					class='swiperBtn' 
					color='rgba(0,0,0,.6)' 
					round type="info" 
					icon='arrow-left'
					@click='$router.go(-1)'>
				</van-button>
			</div>
			<van-swipe :autoplay="3000" indicator-color="white" >
				<van-swipe-item v-for='item in swiperImg' :key='item.img_url'>
					<img width="100%" v-lazy="'http://'+item.img_url"/>
				</van-swipe-item>
			</van-swipe>
		</div>
		<van-skeleton title :row="20" :loading="loading">
			<!-- 骨骼框架预展示 -->
		</van-skeleton>
		<!-- 轮播下的价格 -->
		<!-- <div>2699</div> -->
		
		<div class="content" v-show='!loading'>
			<!-- 商品基本简述 -->
			<div class="brief">
				<div class="briefTitle clearfloat">
					<img :src='this.product_info.double11'/>
					<h4>{{this.product_info.title}}</h4>
				</div>
				<div class="desc">
					<span v-html='product_info.desc'>{{product_info.desc}}</span>
				</div>
				<p class="price">¥{{product_info.price}}</p>
				<ul class="sizeInfo ">
					<!-- clearfloat -->
					<li v-for='item in product_info.sizeInfo' :key='item.value'>
						<img :src='item.icon'/>
						<p>{{item.top_title}}</p>
						<p>{{item.bottom_title}}</p>
					</li>
				</ul>
			</div>
			
			<!-- 商品的基本信息描述 -->
			<div class='parmams gray'>
				<!-- 商品规格选择 -->
					<sizeInfo 
					:sizeInfoData='sizeInfoData' 
					:buyOptionData='buyOptionData' 
					:sizeShow='sizeShow'
					@buySendFn='buySendFn'
					@skuShow='skuShowFn'/>
				<!-- 收货地址 -->
					<selectAddress />
				<!-- 服务说明 -->
			</div>
			
			<!-- 可能会插入的广告活动 -->
			<div></div>
			
			<!-- 可能会有的推荐套餐 -->
			<div>
				
			</div>
			
			<!-- 评价横向滚动 -->
			<div class="assess">
				<assess :assessData='product_info.assess'/>
			</div>
			
			<!-- 更多评论按钮 -->
			<div class="moreAssess">
				<router-link  to='moreAssess'>更多评论</router-link>
			</div>
			
			<!-- 商品图文详情 -->
			<div>
				<detailsCom :detailsData='product_info.details'/>
			</div>
		</div>
		
		<!-- 底部悬浮 -->
		<div>
			<van-goods-action  class="fixBottom">
			  <van-goods-action-icon icon="wap-home-o" text="首页" @click='$router.push("/")'/>
			  <van-goods-action-icon icon="cart-o" text="购物车" @click='$router.push("/shoppingCart")'/>
			  <!-- <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" /> -->
			  <van-goods-action-button type="danger" text="立即购买" @click="buyFn"/>
			</van-goods-action>
		</div>
		
		<van-dialog
		  v-model="dialogShow"
		  class='dialog'
		  title="提示信息"
		  show-cancel-button
		  :showCancelButton=false
		  @confirm='finish'
		>
			<p>{{dialogMessage}}</p>
			页面将在
			<van-count-down
				class='dialogMes'
				format="ss"
				:time="4000"
				@finish='finish'
			  />
			  后返回
		</van-dialog>
	</div>
</template>

<script>
	import selectAddress from "./components/productDetails/selectAddress.vue"
	import assess from "./components/productDetails/assess.vue"
	import sizeInfo from "./components/productDetails/sizeInfo.vue"
	import detailsCom from "./components/productDetails/detailsCom.vue"
	import { getProductDetails } from "@/api/products"
	
	export default {
		name :'productDetails',
		components:{
			sizeInfo,
			selectAddress,
			assess,
			detailsCom
		},
		data(){
			let productId = this.$route.params.productId
			return {
				loading:true,
				productId:productId,
				swiperImg:[],
				product_info:{
					double11:'',
					title:"",
					desc:'',
					price:"",
					sizeInfo:[],
					assess:{},
					details:[]
				},
				sizeInfoData:[],
				buyOptionData:[],
				selectDet:{},
				sizeShow:false,
				dialogShow:false,
				dialogMessage:''
			}
		},
		mounted(){
			getProductDetails({
				client_id: this.productId,
				channel_id: '',
				webp: 1,
				commodity_id:this.productId
			}).then(res=>{
				const allData = res.data.data;
				if(!allData){
					this.dialogMessage = res.data.description;
					this.dialogShow = true;
					return false;
				}
				
				const productInfo = allData.product_info;
				
				// console.log(allData)
				// 轮播图
				let swipers = allData.goods_info[0].gallery_v3;
				this.swiperImg = swipers ? swipers.concat() : [];
				// console.log(this.swiperImg)
				// 双11的logo
				this.product_info.double11 = productInfo.price_tips.img_url;
				// titie
				this.product_info.title =  productInfo.name;
				// desc
				this.product_info.desc =  productInfo.product_desc;
				
				// 价格  从 buyOption找到最低价格
				// let storePrice = allData.buy_option[0].name == '版本' ? allData.buy_option[0].list : allData.buy_option[1].list;
				this.product_info.price = this.computPrice(allData.goods_info);
				
				
				// 带图的规格参数
				let listHas = allData.goods_info[0].class_parameters.list;
				this.product_info.sizeInfo = listHas && listHas.concat().filter(t=>{
					return t.is_page_show
				})
				//评论
				this.product_info.assess = allData.goods_share_datas;
				
				//图文详情
				
				if(allData.goods_tpl_datas){
					this.product_info.details = allData.goods_tpl_datas[productInfo.page_id].sections.concat();
				}else {
					let tabsView = allData.view_content.descTabsView.descTabsView;
					this.product_info.details = tabsView[0].tabContent.concat(tabsView[1].tabContent)
				}
				
				//商品sku
				this.sizeInfoData = allData.goods_info.concat();
				
				//sku类型
				this.buyOptionData = allData.buy_option.concat();
				this.loading = false;
			})
			
		},
		methods:{
			computPrice(storePrice){
				//计算价格
				storePrice.sort((a,b)=>{
					return parseFloat(a.price) - parseFloat(b.price)
				})
				return parseFloat(storePrice[0].price);
			},
			buyFn(even){
				/*
				* 1. 若delect中没有数据，那么就触发选择规格
				* 2. 传递sku并跳转,并且传递已选择的商品详情
				* 3. 在这里由于数据过多，而放到了session中。
				* 4. 正式场景中最终付款将由后台来判断商品是否有效
				* 5. 就不往下写了
				* */
				if(!this.selectDet.goodsId){
					this.sizeShow = true
					return ;
				}
				
				let sendData = {
					selectData:this.selectDet.selectedSkuComb,
					allData:this.sizeInfoData
				}
				// sessionStorage.setItem('sendData',JSON.stringify(sendData))
				// this.$router.push('/order');
			},
			buySendFn(data){
				this.selectDet = Object.assign(data);
				this.buyFn('下级事件')
			},
			skuShowFn(cnt){
				//动态改变父级的show状态
				this.sizeShow = cnt
			},
			finish(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.gray{
		background: #fafafa;
	}
	.dialog {
		text-align: center;
		.dialogMes {
			display: inline-block;
			margin-bottom: 20px;
		}	
	}
	
	.productDetails {
		.swiperCont {
			position: relative;
			min-height: 22%;
			.swiperBtnCont {
				position: fixed;
				top: 10px;
				left: 20px;
				z-index: 10;
				.swiperBtn {
					min-width: 16px;
				}
			}
		}
		.content {
			margin-bottom: 50px;
			.brief{
				padding: 2% 5%;
				.briefTitle {
					h4{
						float: left;
						margin: 0;
						font-weight: 500;
						font-size: 1.125rem;
					}
					img {
						float: left;
						width: 7vh;
						margin-right: 10px;
					}
				}
				.desc {
					font-size: 76%;
					text-indent: 10px;
					color:rgba(0,0,0,.54);
					line-height: 18px;
				}
				.price {
					color: #ff6700;
					font-size: 1.3rem;
					margin: 6px 0;
				}
				.sizeInfo {
					display: flex;
					overflow-x: scroll;
					li{
						border-right: 1px solid #ECECEC;
						text-align: center;
						min-width: 76px;
						padding: 5px;
						p{
							margin: 0;
							font-size: 12px;
							&:last-of-type{
								font-size: 10px;
								color: #676767;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: pre;
							}
						}	
						img{
							width: 20px;
						}
					}
					
				}
			}
			.parmams {
				border-radius: 5px;
				width: 86%;
				margin: 0 auto;
				padding: 10px;
			}
			.moreAssess {
				margin: 10px;
				text-align: center;
			}
			
		}
	}
</style>
