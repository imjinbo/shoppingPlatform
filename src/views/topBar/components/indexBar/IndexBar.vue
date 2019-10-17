<template>
	<div>
		<van-row class='indexBar' type="flex" justify="space-between">
			<van-col span="8">
				<van-icon name="search" />
			</van-col>
			<van-col span="8">
				MEIZU
			</van-col>
			<van-col span="8">
				<van-icon name="shopping-cart-o" />
				<van-icon name="ellipsis" />
			</van-col>
		</van-row>

		<indexTab />
	</div>
</template>

<script>
	import indexTab from "@/views/home/IndexTab.vue"
	export default {
		name: "indexBar",
		components: {
			indexTab
		}
	}
</script>

<style lang="scss" scoped>
	.indexBar {
		padding: 0.875rem 0.5rem;

		>.van-col {
			&:first-of-type {
				text-align: left;
			}

			&:nth-of-type(2) {
				text-align: center;
			}

			&:last-of-type {
				text-align: right;

				>i:first-of-type {
					padding-right: 0.875rem;
				}
			}
		}
	}
</style>
