<template>
	<div class="parmamsAdd">
		<div class="parmamsSize" @click='show = true'>
			<p>送至</p>
			<p>北京市 朝阳区</p>
			<span>有现货</span>
			<van-icon name="arrow" class='parmamsSizeIcon'/>
		</div>
		<van-action-sheet 
			v-model="show" 
			title="收货地址"
		>
			<div class="bottomWhite">
				<van-row
					type="flex" 
					class='addressLi' 
					v-for="(item,index) in list" 
					:key='item.address' 
					:class="{'active':active === index}" 
					@click='changeShow(index)'
				>
				  <van-col span="3" class='icon'><van-icon name="location" /></van-col>
				  <van-col span="18">
					  <p class="title">{{item.name}}  </p>
					  <span class="city">{{item.city}}</span>
					  <p class="address">{{item.address}}</p>
				  </van-col>
				</van-row>
			</div>
		
		</van-action-sheet>
	</div>
</template>

<script>
	export default{
		name:"selectAddress",
		data(){
			return {
				show:false,
				active:1,
				list:[{
					name:'大猩猩',
					city:'北京',
					address:"东城区东华门外30号"
				},{
					name:'大猩猩',
					city:'北京',
					address:"东城区东华门外32号"
				}]
			}
		},
		methods:{
			changeShow(index){
				this.active = index;
				this.show = false;
				
			}
		}
	}
</script>

<style lang='scss' scoped>
	.parmamsAdd {
		margin-top: 10px;
	}
	.bottomWhite {
		min-height: 56vh;
	}
	.parmamsSize {
		position: relative;
		.parmamsSizeIcon {
			position: absolute;
			top: 4px;
			right: 0;
		}
		>p{
			display: inline-block;
			margin: 0;
			font-size: 0.75rem;
			margin-right: 10px;
			&:first-of-type{
				color: rgba(0,0,0,.54);
			}
			&:last-of-type{
				color: rgba(0,0,0,.87);
			}
		}
		span {
			color: #f56600;
			font-size: 12px;
		}
	}
	.addressLi {
		margin-bottom: 10px;
		.icon {
			text-align: center;
			i{
				position: relative;
				top: 10px;
			}
		}
		.title {
			margin: 0;
			display: inline;
			font-size: 14px;
		}
		.address{
			margin: 0;
			font-size: 12px;
			color:rgba(0,0,0,.54);
		}
		.city{
			font-size: 14px;
		}
		&.active{
			color: #f56600;
			.address {
				color: #f56600 !important;
			}
		}
	}
	
</style>
