'use strict';

var mongoose = require('mongoose')

//创建mongo连接
module.exports = {
	connectDatabase(uri) {
		return new Promise((resolve, reject) => {
			mongoose.connection
				.on('error', error => reject(error))
				.on('close', () => console.log('Database connection closed.'))
				.once('open', () => resolve(mongoose.connections[0]));

			mongoose.connect(uri);
		});
	}
}