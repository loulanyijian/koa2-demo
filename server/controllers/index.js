/**
 * [测试路由，没有static的时候，走这个路由，有static的话，走static]
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
module.exports = async ( ctx ) => {
  const title = 'home'
  ctx.body = title
  // await ctx.render('index', {
  //   title
  // })
}