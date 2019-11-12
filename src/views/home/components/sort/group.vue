<template>
	<div class="groupCont clearfloat">
		<div class="groupItem" v-for='item in allData.items' :key='item.product_name' @click='productDetail(item.action.path)'>
			<img v-lazy="'http://'+item.img_url"/>
			<p>{{item.product_name}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'group',
		props:{
			allData:Object
		},
		methods:{
			productDetail(productId){
				let splitArr = productId.split("/");
				this.$router.push('productDetails/' + splitArr[splitArr.length-1])
			}
		}
	}
</script>

<style lang='scss' scoped>
	.groupCont {
		padding: 0 10px;
		.groupItem {
			width: 50%;
			float: left;
			text-align: center;
			p{
				font-size: 0.75rem;
				color: rgba(0, 0, 0, 0.54);
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: pre;
			}
			img{
				width: 45%;
			}
		}
	}
</style>
