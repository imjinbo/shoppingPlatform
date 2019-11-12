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
					@click='rtnPage'>
				</van-button>
			</div>
			<van-swipe :autoplay="3000" indicator-color="white" >
				<van-swipe-item v-for='item in swiperImg' :key='item.img_url'>
					<img width="100%" v-lazy="'http://'+item.img_url"/>
				</van-swipe-item>
			</van-swipe>
		</div>
		
		<!-- 轮播下的价格 -->
		<!-- <div>2699</div> -->
		
		<div class="content">
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
					<sizeInfo :sizeInfoData='sizeInfoData' :buyOptionData='buyOptionData'/>
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
			<van-goods-action>
			  <van-goods-action-icon icon="wap-home-o" text="首页" @click='toPage("/")'/>
			  <van-goods-action-icon icon="cart-o" text="购物车" @click='toPage("/shoppingCart")'/>
			  <!-- <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" /> -->
			  <van-goods-action-button type="danger" text="立即购买"/>
			</van-goods-action>
		</div>
		
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
				buyOptionData:[]
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
				const productInfo = allData.product_info;
				
				// console.log(allData)
				// 轮播图
				this.swiperImg = allData.goods_info[0].gallery_v3.concat();
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
				this.product_info.sizeInfo = allData.goods_info[0].class_parameters.list.concat().filter(t=>{
					return t.is_page_show
				})
				//评论
				this.product_info.assess = allData.goods_share_datas;
				
				//图文详情
				this.product_info.details = allData.goods_tpl_datas[productInfo.page_id].sections.concat();
				
				//商品sku
				this.sizeInfoData = allData.goods_info.concat();
				
				//sku类型
				this.buyOptionData = allData.buy_option.concat();
				
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
			rtnPage(){
				// this.$router.push("/")
				// debugger
				// this.returnWhere ? this.$router.push(this.returnWhere) : 
				this.$router.go(-1);
			},
			toPage(data){
				this.$router.push(data)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.gray{
		background: #fafafa;
	}
	.productDetails {
		.swiperCont {
			position: relative;
			min-height: 22%;
			.swiperBtnCont {
				position: absolute;
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
