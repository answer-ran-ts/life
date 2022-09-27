import App from './App'
import Vue from 'vue'
import {
	VueAxios
} from './until/request.js'
import req from './api/index.js'
App.mpType = 'app'
Vue.config.productionTip = false
Vue.prototype.$req = req
Vue.use(VueAxios)
const app = new Vue({
	...App
})
app.$mount()
