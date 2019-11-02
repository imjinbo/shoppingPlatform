<template>
	<div class='line' :style="{backgroundColor:bgColor,height:bgHeight}" ></div>
</template>

<script>
export default {
	name:'indexLine',
	props:{
		dataAll:Object
	},
	data(){
		return {
			bgColor:"#fff",
			bgHeight:0
		}
	},
	mounted() {
		this.bgColor = this.dataAll.body.line_color;
		this.bgHeight = this.dataAll.body.line_height/3 + "px";
	}
}
</script>

<style scoped lang='scss'>

</style>
