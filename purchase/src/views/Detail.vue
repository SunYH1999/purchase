<template>
<div class="detail">
	<div class="img-part">
		<!-- 为了避免发送错误的请求，我们可以当data有src数据的时候，再创建图片 -->
		<img :src="'/img/item/' + data.src" alt="" v-if="data.src">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="origin-price">门市价{{data.originPrice}}元</span>
		<span class="buy-btn">立即购买</span>
	</div>
	<div class="sales-part">
		<li>支持立即退货</li>
		<li>支持随时退货</li>
		<li>销量{{data.sales}}</li>
	</div>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body">
			<h3>有效日期</h3>
			<p>{{data.validateTime}}</p>
			<h3>使用日期</h3>
			<p>{{data.useTime}}</p>
			<h3>使用规则</h3>
			<p v-for="(item, index) in data.rules" :key="index">{{item}}</p>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
.detail {
	.img-part {
		position: relative;
		color: #fff;
		img {
			width: 100%;
			display: block;
		}
		h1, p {
			position: absolute;
			left: 15px;
			bottom: 15px;
			font-size: 16px;
		}
		h1 {
			bottom: 40px;
			font-size: 24px;
		}
	}
	.price-part {
		background: #fff;
		padding: 0 10px;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #ccc;
		.price {
			color: $navColor;
			margin-right: 6px;
			strong {
				font-size: 36px;
				font-weight: normal;
			}
		}
		.buy-btn {
			padding: 8px 10px;
			color: #fff;
			background: #f60;
			font-size: 12px;
			float: right;
			margin-top: 16px;
			line-height: 1;
		}
	}
	.sales-part {
		@include clearfix;
		background: #fff;
		padding: 10px 0;
		li {
			width: (100%/2);
			color: yellowGreen;
			padding-left: 10px;
			box-sizing: border-box;
			float: left;
			line-height: 30px;
			height: 30px;
			&:last-child {
				color: #000;
			}
		}
	}
	.module {
		background: #fff;
		margin-top: 10px;
		.module-header {
			font-size: 22px;
			margin: 0 10px;
			border-bottom: 1px solid #ccc;
			padding: 15px 0 10px;
		}
		.module-body {
			padding: 15px 10px;
			font-size: 16px;
			line-height: 28px;
			h3 {
				font-size: 18px;
				color: #f60;
				padding: 12px 0 8px;
				font-weight: normal;
			}
		}
		.module-footer {
			color: skyblue;
			font-size: 16px;
			padding: 10px 0 15px;
			margin: 0 10px;
			border-top: 1px solid #ccc;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	// 数据
	data() {
		return {
			data: {}
		}
	},
	// 定义方法
	methods: {
		// 更新数据的方法
		updateData() {
			// 解构数据
			let { params } = this.$route;
			this.$http
				// 请求数据
				// .get('/data/product.json', {
				// 	params: {
				// 		id: this.$route.params.id
				// 	}
				// })
				.get('/data/product.json', { params })
				// 监听数据返回
				.then(({ data }) => this.data = data)
		}
	},
	// 组件创建完成的时候，要请求数据
	created() {
		// console.log(this.$route)
		// 更新数据
		this.updateData();
	},
	// // 监听路由的改变
	// beforeRouteEnter($route, $oldRoute, next) {
	// 	console.log(arguments)
	// 	next();
	// }
	// 通过watch属性监听
	watch: {
		$route($route) {
			// console.log(arguments)
			this.updateData();
		}
	}
}
</script>