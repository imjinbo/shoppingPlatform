<template>
	<div class="indexCont">
		<component :is='renderType(item.view_type)' v-for="item in indexContData" :key="item.id" :dataAll="item"></component>
	</div>
</template>

<script>
	import indexLine from "./indexLine.vue"
	import indexFill from "./indexFill.vue"
	import indexList from "./indexList.vue"
	import indexTitle from "./indexTitle.vue"
	export default {
		name: "indexCont",
		components: {
			indexLine,
			indexFill,
			indexList,
			indexTitle
		},
		props: {
			indexContData: Array
		},
		beforeMount() {
			//1由于小米官网的接口返回的内容数据是序列化，是直接定好样式的，所以此处需要跟着他的内容去做适配
			'list_two_type13'
			'list_two_type1'
			'list_one_type2'
		},
		mounted() {},
		methods: {
			//判断当前传入的类型，之后进行判断出组件名称并return给component组件
			renderType(data) {
				return data.includes('line') ? "indexLine" :
					data.includes('fill') ? "indexFill" :
					data.includes('type') ? "indexList" :
					data.includes('title') && "indexTitle";
			}
		}

	}
</script>

<style lang='scss' scoped>
	.indexCont {
		background: #fff;
		padding-bottom: 20px 0;
	}
</style>
