<template>
	<div class="contents">
		<topBar titleText="购物车"/>
		
		<div class="zeroCartCont">
			<van-row type="flex" justify="center">
			  <van-col span="3"><van-icon name="shopping-cart-o" size='170%' color='#D6D6D6'/></van-col>
			  <van-col span="6"><span class="zeroCartText">购物车还是空的</span></van-col>
			  <van-col span="3"><van-button @click='$router.push("/")' type="default" size='mini' class='ggBtn'>去逛逛</van-button></van-col>
			</van-row>
		</div>
		
		<div class="youLike">
			<img class="youLikeTitle" src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"/>
			<ul class="youLikeCont clearfloat">
				<li class="youLiskItem" v-for='item in likeList' :key='item.name' @click='productDetail(item.action.path)'>
					<img v-lazy="'http://'+item.image_url"/>
					<div class="likeTextCont">
						<p class="likeTitle">{{item.name}}</p>
						<p class="likePrice">¥{{item.price}}
							<span class="likeNone" v-if="item.price != item.market_price">¥{{item.market_price}}</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import topBar from "@/views/topBar/topBar.vue"
	import { getYourLike } from "@/api/others"
	export default {
		name:"shoppingCart",
		components:{
			topBar
		},
		data(){
			return {
				likeList:[]
			}
		},
		mounted() {
			getYourLike().then(res=>{
				this.likeList = res.data.data.recom_list;
			})
		},
		methods:{
			productDetail(productId){
				// let splitArr = productId.split("/");
				this.$router.push('productDetails/' + productId)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.content  {
		padding-bottom: 100px;
	}
	.zeroCartCont {
		background-color: #ebebeb;
		padding: 0.625rem 0;
		.zeroCartText {
			font-size: 0.75rem;
			color: #ABABAB;
		}
		.ggBtn {
			border-radius: 2px;
			background-color: #ebebeb;
			border: 1px solid #C8C8C8;
		}
	}
	.youLike {
		.youLikeTitle {
			width: 100%;
		}
		.youLikeCont {
			padding: 0 10px;
			.youLiskItem{
				text-overflow: ellipsis;
				overflow: hidden;
				float: left;
				width: 49%;
				&:nth-child(even){
					margin-left: 1%;
				}
				img{
					width: 100%;
				}
				.likeTextCont {
					padding: 10px;
					.likeTitle {
						margin: 0;
						font-size: 14px;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: pre;
					}
					.likePrice {
						color: #ff6700;
						margin: 0;
						.likeNone {
							color: rgba(0,0,0,.54);
							text-decoration:line-through;
							font-size: 0.625rem;
						}
					}
				}
				
			}
		}
	}
	
	
</style>
