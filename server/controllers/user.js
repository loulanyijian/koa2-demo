/**
 * user 主Controller，接收前端的请求，处理了之后，返回数据
 * @type {[type]}
 */
const userService = require('./../services/user')

module.exports = {

  /**
   * 获取列表
   * @param  {obejct} ctx 上下文对象
   */
  async getList( ctx ) {
    let r = await userService.getList(ctx)
    ctx.body = r
  },

  //创建
  async creat( ctx ) {
    let r = await userService.creat(ctx)
    ctx.body = r
  },

  //更新
  async update( ctx ) {
    let r = await userService.update(ctx)
    ctx.body = r
  },

  //删除
  async del( ctx ) {
    let r = await userService.del(ctx)
    ctx.body = r
  },
}
