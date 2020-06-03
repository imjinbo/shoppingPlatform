<template>
	<div id="app">
	
		<router-view name='topBar' />
		
		<transition name="fade">
			<keep-alive include='indexTabs,sort,shoppingCart'>
				<router-view class="middle"/>
			</keep-alive>
		</transition>
		
		<router-view name='bottomBar' />
	</div>

	<!-- <my-component
    v-if="if"
    v-show="show"
    v-model="value"
    ref="ref"
    :key="key"
    :text="text"
    @input="onInput"
    @change="onChange"
  /> 
  标签的 Props 应该有统一的顺序，依次为指令、属性和事件。
  -->

</template>


<script>
	export default {
		name: "app"

		// mixins: [],

		// components: {},

		// props: {},

		// data() {},

		// computed: {},

		// watch: {},

		// created(){},

		// mounted(){},

		// destroyed(){},

		// methods:{}
	}
</script>
<style scoped>
	#app {
		border: none;
	}
	.middle {
		position: relative;
		 transition: all .1s;
		 right: 0;
		 left: 0;
	}
	.fade-enter-active {
		left:8px;
	}
	.fade-enter /* .fade-leave-active below version 2.1.8 */ {
	 
	}
</style>
