const Router = require('koa-router')

const root = new Router()
const group = require('./controller/group')
const node = require('./controller/node')

root.get('/', ctx => {
  ctx.status = 200
})

root.get('/group', group.list)
root.post('/group', group.create)

root.get('/node', node.list)
root.post('/node', node.create)

module.exports = root
