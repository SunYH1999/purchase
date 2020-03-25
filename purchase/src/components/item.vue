<template>
<div class="item">
	<router-link class="item-container" :to="'/detail/' + data.id" tag="div">
		<img :src="'/img/list/' + data.img" alt="">
		<div class="content">
			<h3>{{data.title}}</h3>
			<p>
				<span class="price">{{data.price}}元</span>
				<span class="orgin-price">门市价:{{data.originPrice}}元</span>
				<span class="sales">销量{{data.sales}}</span>
			</p>
		</div>
	</router-link>
</div>
</template>
<style type="text/css" scoped lang="scss">
@import '../base.scss';
.item {
	background: #fff;
	.item-container {
		margin: 0 10px;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
		display: flex;
	}
	img {
		width: 100px;
		height: 60.5px;
	}
	.content {
		flex: 1;
		padding-left: 10px;
		color: #666;
		h3 {
			height: 44px;
			font-size: 14px;
		}
		p {
			font-size: 12px;
		}
		.price {
			color: $navColor;
			margin-right: 4px;
		}
		.sales {
			float: right;
		}
	}
}
</style>
<script type="text/javascript">
// 接收数据
export default {
	// 注册数据
	props: ['data'],
	// created() {
	// 	console.log(this)
	// }
}
</script>