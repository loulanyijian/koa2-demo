/**
 * 配置文件
 * 服务启动的端口号
 * DB连接的地址
 */
const config = {

  port: 3030,

  // database: 'mongodb://test:test@10.11.144.201/zhaosd'//陈征给的T1的数据库连接，谨慎操作
  database: 'mongodb://localhost/zhaosd'//本机mongdoDB
  // database: 'mongodb://localhost::27017/yunying'//下面这种也可以，上面的隐藏了mongodb默认的端口号
}

module.exports = config