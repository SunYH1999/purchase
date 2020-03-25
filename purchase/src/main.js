import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装axios
import axios from 'axios';
// 安装
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
