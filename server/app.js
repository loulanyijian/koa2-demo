const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const jsonp = require('koa-jsonp')
const onerror = require('koa-onerror');


const loggerAsync  = require('./middleware/logger-async')

const config = require('../config')
const routers = require('./routers/index')


const db = require('../server/db')

const app = new Koa()

// 配置请求使用jsonp
app.use(jsonp())

// 配置控制台日志中间件
app.use(convert(koaLogger()))

// 配置自写的日志中间件
// app.use(loggerAsync())

// 配置使用错误处理中间件
// app.use(convert(onerror()))
onerror(app);

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
app.use(convert(koaStatic(
  path.join(__dirname , './../static')
)))

//连接mongodb
try {
	const info = db.connectDatabase(config.database);
} catch (error) {
	console.error('Unable to connect to database');
}


// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

// 监听启动端口
app.listen( config.port )
console.log(`the server is start at port ${config.port}`)
