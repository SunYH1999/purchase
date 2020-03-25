import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 数据
	state: {
		search: ''
	},
	// 同步消息
	mutations: {
		// 修改搜索词
		changeSearch(state, search) {
			// 将search存储在state中
			state.search = search;
		}
	},
	actions: {

	}
})
