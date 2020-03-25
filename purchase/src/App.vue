<template>
<div class="app">
	<div class="header">
		<div class="go-back" @click="goBack">
			<span class="arrow"></span>
			<span class="arrow green"></span>
		</div>
		<h1>吃喝玩乐</h1>
		<div class="login">登录</div>
	</div>
	<!-- 不是详情页要显示搜索框 -->
	<div class="search" v-show="$route.fullPath.indexOf('/detail/') < 0">
		<input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入搜索关键字">
	</div>
    <router-view/>
    <!-- {{$store.state.search}} -->
</div>
</template>
<style lang="scss">
// 引入样式库
@import './base.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
.app {
	.header {
		background: $navColor;
		color: #fff;
		display: flex;
		line-height: 50px;
		height: 50px;
		h1 {
			flex: 1;
			font-size: 22px;
			text-align: center;
		}
		.login,
		.go-back {
			width: 60px;
			text-align: center;
		}
		.go-back {
			position: relative;
		}
		.arrow {
			position: absolute;
			top: 17px;
			left: 13px;
			@include arrow(8px, #fff, right);
			&.green {
				border-right-color: $navColor;
				left: 15px;
			}
		}
		.login {
			font-size: 14px;
		}
	}
	.search {
		display: flex;
		padding: 10px 20px;
		background: #fff;
		input {
			display: block;
			flex: 1;
			padding: 10px 20px;
			border: none;
			outline: none;
			background: #efefef;
			border-radius: 17px;
			font-size: 12px;
		}
	}
}

</style>
<script type="text/javascript">
export default {
	// 数据
	data() {
		return {
			msg: ''
		}
	},
	// 定义方法
	methods: {
		// 将数据存储在store中
		showSearchResult() {
			// 向store发送消息
			this.$store.commit('changeSearch', this.msg)
			// 清空msg
			this.msg = '';
		},
		goBack() {
			history.go(-1)
		}
	}
}
</script>
