<template>
	<van-tabs class='vanTabs' color='rgb(237, 91, 0)' background="#f2f2f2" title-active-color='rgb(237, 91, 0)' v-model="active"
	 :swipeThreshold=swipeThreshold>
		<van-tab title="推荐">
			<van-skeleton title avatar :row="3" />
			<van-skeleton title avatar :row="3" />
			<van-skeleton title avatar :row="3" />
		</van-tab>
		<van-tab title="手机">
			<Swiper />
		</van-tab>
		<van-tab title="智能">
			<Swiper />
		</van-tab>
		<van-tab title="电视">
			<Swiper />
		</van-tab>
		<van-tab title="笔记本">
			<Swiper />
		</van-tab>
		<van-tab title="笔记本">
			<Swiper />
		</van-tab>

	</van-tabs>
</template>

<script>
	import Swiper from '@/components/Swiper.vue'
	export default {
		name: "indexTabs",
		data() {
			return {
				active: 0,
				swipeThreshold: 6
			}
		},
		components: {
			Swiper
		}
	}
</script>

<style lang="scss" scoped>
	.vanTabs {
		/deep/.van-tabs__wrap {
			position: fixed;
			top: 31px;
			left: 0;
			right: 0;
			width: 100%;
			height: 26px;
			box-shadow:0 2px 4px -1px rgba(0,0,0,.2);;
		}
		/deep/.van-tabs__content {
			margin: 56px 0;
		}

		/deep/ .van-tab {
			line-height: 26px;

			.van-ellipsis {
				font-size: 10px;
			}
		}
	}
</style>
