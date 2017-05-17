var mongoose = require('mongoose')

// 用户模型
const userSchema = new mongoose.Schema({
	id: String, 
	title: String, 
	creatTime:String,
	updateTime:String
});

module.exports =mongoose.model('User', userSchema)