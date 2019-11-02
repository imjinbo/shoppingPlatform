<template>
	
	<van-skeleton title :row="20" :loading="loading">
		<!-- 骨骼框架预展示 -->
		  <van-tabs
			class='vanTabs' 
			color='rgb(237, 91, 0)' 
			background="#f2f2f2" 
			title-active-color='rgb(237, 91, 0)' 
			:model="active"
			:swipeThreshold=swipeThreshold
		  >
			<van-tab v-for="item in vanTabs" :key="item.id" :title="item.title">
				<Swiper :tabsImg='tabsImg'/>
				<indexCont :indexContData="indexContData"/>
			</van-tab>
		  </van-tabs>
		  
	</van-skeleton>

</template>

<script>
	import Swiper from '@/components/Swiper.vue'
	import indexCont from './components/index/indexCont.vue'
	import request from '@/utils/request'
	
	export default {
		name: "indexTabs",
		data() {
			return {
				active: 0,
				swipeThreshold: 6,
				vanTabs:[],
				tabsImg:[],
				indexContData:[],
				loading:true
			}
		},
		components: {
			Swiper,
			indexCont
		},
		mounted(){
			const _this = this;
			request().then(res=>{
				this.loading = false;
				//获取到远程数据
				//1.先将tabs标题展示出来
				//2.获取到当前的轮播图并传递给子组件
				//3.之后将剩余的当前页面的数据传递给indexCont组件
				const allData = res.data;
				allData.data.tabs.forEach(item=>{
					_this.vanTabs.push({
						title:item.name,
						id:item.page_id,
					})
				})
				
				allData.data.data.sections.forEach(item=>{
					//轮播图CDN资源
					item.view_type === "gallery" && item.body.items.forEach(imgItem=>{
						_this.tabsImg.push({
							imgUrl:imgItem.img_url,
							width:imgItem.w,
							height:imgItem.h,
						})
					})
				})
				//在此直接进行concat，实现深拷贝
				allData.data.data.sections.shift()
				_this.indexContData = allData.data.data.sections.concat()
			})
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
			box-shadow:0 2px 4px -1px rgba(0,0,0,.2);
			z-index: 10;
		}
		/deep/.van-tabs__content {
			margin-top: 57px;
			margin-bottom: 50px;
		}

		/deep/ .van-tab {
			line-height: 26px;

			.van-ellipsis {
				font-size: 10px;
			}
		}
	}
</style>
