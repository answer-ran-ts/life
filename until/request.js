import Vue from 'vue'
import axios from 'axios'
import {
	VueAxios
} from './axios'
// 创建 axios 实例
const request = axios.create({
	// API 请求的默认前缀
	baseURL: 'http://127.0.0.1:4523/m1/1656390-0-default/',
	timeout: 60000 // 请求超时时间
})


// 异常拦截处理器
const errorHandler = (error) => {
	if (error.response) {
		const data = error.response.data
		const token = 'dasdasdas'
		if (error.response.status === 403) {
			console.log('错误');
		}
		if (error.response.status === 401) {
			console.log('错误');
		}
	}
	return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config) => {
	const token = 'dasdasdas'
	// 让每个请求携带自定义 token 请根据实际情况自行修改,本项目采用JWT认证
	if (token) {
		config.headers.Authorization = 'Bearer ' + token
	}
	return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
	if (response.data && response.data.status === 2) {
		console.log('错误');
	}
	return response.data
}, errorHandler)

request.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		console.log(config)
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};

				settle(resolve, reject, response);
			}
		})
	}).catch((e)=>{})
}



const installer = {
	vm: {},
	install(Vue) {
		Vue.use(VueAxios, request)
	}
}

export default request

export {
	installer as VueAxios, request as axios
}
