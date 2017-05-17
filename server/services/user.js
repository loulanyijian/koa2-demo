/**
 * User主业务代码
 * @type {[type]}
 */
const User = require('./../models/user')

const user = {

	async getList(ctx) {
		let obj = {};
		//ctx.query只有在get请求的时候
		const data = ctx.query;
		console.log(data)
		if(data.key){ //模糊查询key
			obj.title = new RegExp(data.key,"i");
		}
		if(data.id){ //标准查询id
			obj.id = data.id 
		}
		let page = data.page*1 || 1
		let rows = data.rows*1 || 5
		let skipNum = (page-1)*rows;
		let allNum = await User.count(obj) // 查询总数
		/**
		 * limit 限制显示条数
		 * skip 跳过的条数，即从N开始
		 * sort 排序方式，-1为倒序
		 * @type {[type]}
		 */
		let result = await User.find(obj).limit(rows).skip(skipNum).sort({'updateTime':-1,"creatTime":-1})
		return {num:allNum,data:result}
	},

	async creat(ctx) {
		//ctx.request.body在post的请求的时候使用
		console.log(ctx.request.body)
		let id = new Date().getTime()

		let data = ctx.request.body
		data.id = id
		data.creatTime = id
		data.updateTime = id
		
		let user = new User(data)

		return await user.save();
	},

	async update(ctx) {
		let id = ctx.request.body.id;
		let title = ctx.request.body.title;
		return await User.find({id: id}, function (err, user) {
	        user[0].title = title;
	        user[0].updateTime = new Date().getTime();
	        user[0].save();
	    });
	},

	async del(ctx) {
		let id = ctx.request.body.id;
		id = id.split(',')
		return await User.remove({"id":{ $in: id}}) 
		/*return await User.find({id: id}, function (err, user) {
	        if (err) {
	        	console.log(err)
	            return;
	        }

	        if (user.length <= 0) {
	        	console.log('没找到')
	            return;
	        }

	        user[0].remove(function(err, data) {
	            if (err) {
	                return;
	            }

	            console.log(`data to remove ${data}`);
	        });
	    });*/
	}

}

module.exports = user