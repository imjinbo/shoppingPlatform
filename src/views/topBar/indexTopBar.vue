<template>
	<div class="tab">
		<van-row class='indexBar' type="flex" justify="space-between">
			<van-col span="2">
				<Router-link to='/'>
					<img :src="logo" />
				</Router-link>
			</van-col>
			<van-col span="18">
				<router-link class="searchTo" to='./'>
					<div class="clearfloat"><van-icon name="search" /><span>搜索商品名称</span></div>
				</router-link>
			</van-col>
			<van-col span="2">
				<Router-link to='/personalCenter'>
					<van-icon name="manager-o"/>
				</Router-link>
			</van-col>
		</van-row>

	</div>
</template>

<script>
	import logo from '@/assets/logo_mi.js'
	 
	export default {
		name: "indexBar",
		data() {
			return {
				value: '',
				logo:logo
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/styles/variable.scss';
	.tab {
		background-color: #f2f2f2;
			right: 0;
			z-index: 10;
			position: fixed;
			top:0;
			left:0;
		.indexBar {
			padding: 0.25rem 0.5rem;
			>.van-col {
				&:first-of-type {
					text-align: left;
					img{
						width: 22px;
						position: relative;
						left: 0.125rem;
						top: 2px;
					}
				}

				&:nth-of-type(2) {
					.searchTo div{
						padding: 4px 0.5rem;
						color: rgba(0,0,0,.3);
						background-color:#fff;
						span{
							font-size: 12px;
							float: left;
						}
						i{
							float: left;
						}
					}
				}

				&:last-of-type {
					position: relative;
					top: 2px;
				}
			}
		}
	}
</style>
