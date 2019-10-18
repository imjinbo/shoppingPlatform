<template>
	<!-- <div class="home"> -->
		<indexTab />
	<!-- </div> -->
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	import indexTab from "@/views/home/components/IndexTab.vue"
	export default {
		name: 'home',
		components: {
			indexTab
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		// margin-top: 31px;
	}
</style>
