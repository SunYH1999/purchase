<template>
<div class="list">
	<ul class="order">
		<li v-for="item in orders" :key="item.id" @click="listOrder(item.id)">
			<span>{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<!-- 渲染商品 -->
	<Item v-for="item in dealList" :data="item" :key="item.id"></Item>
	<!-- 是否显示该元素与是否有未显示的成员有关 -->
	<div class="load-more" @click="showOther" v-show="others.length">
		<span>查看其它{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 引入库文件
@import '../base.scss';
.list {
	.order {
		display: flex;
		background: #fff;
		li {
			flex: 1;
			text-align: center;
			font-size: 12px;
			color: #333;
			line-height: 30px;
			height: 30px;
			border-right: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			&:last-child {
				border-right: none;
			}
			.arrow {
				@include arrow(4px);
				position: relative;
				top: -2px;
				left: 2px;
			}
		}
	}
	.load-more {
		background: #fff;
		color: $navColor;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		border-bottom: 1px solid #ccc;
		.arrow {
			@include arrow(8px, $navColor);
			position: relative;
			top: 0px;
			left: 4px;
			.white {
				position: absolute;
				border-top-color: #fff;
				top: -10px;
				left: -8px;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Item from '../components/item.vue';
export default {
	// 注册组件
	components: { Item },
	// 数据
	data() {
		return {
			// 排序数据
			orders: [
				{ text: '价格排序', id: 'price' },
				{ text: '销量排序', id: 'sales' },
				{ text: '好评排序', id: 'evaluate' },
				{ text: '优惠排序', id: 'discount' }
			],
			// 数据列表
			list: [],
			// 剩余未显示的数据
			others: []
		}
	},
	// 计算属性数据
	computed: {
		// 过滤list数据
		dealList() {
			// 对list数组过过滤
			// 标题包含搜索词
			return this.list.filter(item => item.title.indexOf(this.$store.state.search) >= 0);
		}
	},
	// 定义方法
	methods: {
		// 将others中的数据，存储在list中
		showOther() {
			this.list = this.list.concat(this.others);
			// 所有的数据都显示了
			this.others = [];
		},
		// 列表数据排序
		listOrder(id) {
			// 是否是优惠排序
			if (id === 'discount') {
				return this.list.sort((a, b) => {
					// 原价 减去 现价 就是优惠的额度
					// a的优惠价： a.originPrice - a.price
					// b的优惠价： b.originPrice - b.price
					// 升序：a的优惠价 - b的优惠价
					// return (a.originPrice - a.price) - (b.originPrice - b.price)
					// 降序：b的优惠价 - a的优惠价
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				})
			} 
			// else {
			// 	// 对商品的排序，就是对list数组的排序
			// 	this.list.sort((a, b) => {
			// 		// 根据id属性排序
			// 		// 升序
			// 		// return a[id] - b[id]
			// 		// 降序
			// 		return b[id] - a[id]
			// 	})
			// }
			// 对商品的排序，就是对list数组的排序
			this.list.sort((a, b) => {
				// 根据id属性排序
				// 升序
				// return a[id] - b[id]
				// 降序
				return b[id] - a[id]
			})
			// console.log(id)
		}
	},
	// 组件创建完成
	created() {
		// console.log(this.$route)
		// 请求数据
		this.$http
			.get('/data/list.json?id=' + this.$route.params.id)
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.list = data.slice(0, 3)
				// 存储剩余未显示的数据
				this.others = data.slice(3);
			})
	}
}
</script>