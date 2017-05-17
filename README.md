## koa2+mongoDB 后端例子

> 本地git开发时间：2017-03-02，迁移到github时间：2017-05-17

### 数据库准备

本机安装上mongodb，教程自己百度，创建一个 `zhaosd` 的 Datbase
最好再安装一个可视化的mongoDB可视化查看工具，推荐使用robomongo

### 启动项目

* 升级node版本，至少7.6.0以上，要不然不支持

* 安装依赖

`npm install`
`node server/app.js`

* chrome打开`http://localhost:3030/`，操作界面，抓包查看请求，对应查看后台的代码

### 已有功能包括

* 分页查询、模糊查询、精确查询、按时间倒序
* 添加记录
* 更新记录
* 单条、批量删除记录
* get请求都支持callback key值的jsonp回调
* 控制台打印日志

----

### 要添加的功能

* 批量导出Excel
* 批量导入Excel添加
* 按天保存日志文件
* 使用模板引擎渲染数据

### 参考网址

* [koa2英文官网](http://koajs.com/)
* [koa2进阶学习笔记（必读！）](https://chenshenhai.github.io/koa2-note/)
* [nodejs版本快速升至最新版](http://www.jianshu.com/p/cfdfd3d04215)