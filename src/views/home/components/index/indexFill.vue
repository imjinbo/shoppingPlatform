<template>
	<div class="fill">
		<img v-for="(item,index) in list" 
		:key="item.ad_position_id" 
		:width="computHeight(index)" 
		:style="computThree(index)" 
		v-lazy="'http://'+item.img_url"/>
	</div>
</template>

<script>
	export default {
		name: 'indexFill',
		props: {
			dataAll: Object
		},
		data() {
			return {
				list: [],
				styles:{}
			}
		},
		mounted() {
			const bodyData = this.dataAll.body;
			this.list = bodyData.items.concat()
		},
		methods: {
			computHeight(index) {
				//计算每一块的宽度
				const bodyData = this.dataAll.body;
				//统一宽度
				const winWidth = window.innerWidth >= 750 ? 750 : window.innerWidth;

				if (bodyData.items.length === 3) {
					//三张图片分布
					return (winWidth / 2) - 1
				}
				//一般分布
				return winWidth / bodyData.items.length - 1;
			},
			computThree(index){
				//值单一的用于三张图的格式对齐
				const bodyData = this.dataAll.body;
				return bodyData.items.length === 3 && index === 1 && {position:'absolute'};
			}
		}
	}
</script>

<style scoped lang='scss'>
	.fill {
		width: 100%;
		position: relative;
	}
</style>
