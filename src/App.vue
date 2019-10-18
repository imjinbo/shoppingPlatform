<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Absout</router-link>
    </div> -->
		<router-view name='topBar' />
		<router-view />
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
