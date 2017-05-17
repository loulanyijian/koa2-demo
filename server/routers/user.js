/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userController = require('./../controllers/user')

/**
 * 支持restfull，路径地址，对应了Controller的方法
 * @type {[type]}
 */
const routers = router
  .get('/getList', userController.getList)
  .post('/creat', userController.creat)
  .post('/update', userController.update)
  .post('/del', userController.del)
 
  
module.exports = routers
