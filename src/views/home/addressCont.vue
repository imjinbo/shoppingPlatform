<template>
	<div>
		<van-nav-bar
		  title="设置"
		  left-arrow
		  @click-left="$router.go(-1)"
		/>
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  :disabled-list="disabledList"
		  disabled-text="以下地址超出配送范围"
		  @add="onAdd"
		  @edit="onEdit"
		/>
	</div>
</template>

<script>
	export default {
		name: 'addressCont',
		data() {
			return {
				chosenAddressId: '1',
				list: [{
						id: '1',
						name: '一号',
						tel: '13000000000',
						address: '北京市朝阳区世贸天阶 138 号东方通信大厦 7 楼 501 室'
					},
					{
						id: '2',
						name: '二号',
						tel: '1310000000',
						address: '北京市大兴区拱墅莫干山路 50 号'
					}
				],
				disabledList: [{
					id: '3',
					name: '三号',
					tel: '1320000000',
					address: '北京市丰台区复兴路 15 号'
				}]
			}
		},

		methods: {
			onAdd() {
				Toast('新增地址');
			},

			onEdit(item, index) {
				Toast('编辑地址:' + index);
			}
		}
	}
</script>

<style>
</style>
