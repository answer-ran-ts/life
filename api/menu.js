import request from '../until/request.js'

const api = {
	getMenu: 'app/test/menu'
}

export function getMenu(parameter) {
	return request({
		url: api.getMenu,
		method: 'get',
		data: parameter
	})
}
