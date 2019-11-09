<template>
	<div>
		
		<component :is='compuModule(item.view_type)' v-for="item in childData" :key="item.ids" :allData='item.body'></component>
	</div>
</template>

<script>
	import fill from './fill.vue'
	import titleCont from './titleCont.vue'
	import group from './group.vue'
	
	export default{
		name:'rightCont',
		components:{
			fill,
			titleCont,
			group
		},
		props:{
			childData:Array
		},
		mounted(){
			this.childData.forEach((t,i)=>{t.ids = i;})
		},
		methods:{
			compuModule(type){
				return 		type === 'cells_auto_fill'
				 ? 'fill' : type === 'category_title'
				 ? 'titleCont': type === 'category_group'
				 && 'group';
			}
		}
		
	}
</script>

<style>
</style>
