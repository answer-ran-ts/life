const requireApi = require.context('.', false, /\.js$/)
const moduleObj = {}
requireApi.keys().forEach(item => {
  if (item === './index.js') return
  Object.assign(moduleObj, requireApi(item))
})

export default moduleObj
