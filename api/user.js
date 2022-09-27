import request from '../until/request.js'

const api = {
	getDetail: 'app/test/getUserInfo'
}

export function getDetail(parameter) {
	return request({
		url: api.getDetail,
		method: 'get',
		data: parameter
	})
}
