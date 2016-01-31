'use strict'
module.exports = function() {
	var dir = './dev/jade/'
	var dirpartial = dir + 'partials/'
	return {
		compile: {
			options: {
				pretty: false,
				debug: false,
				timestamp: '<%= new Date().getTime() %>'
			},
			files: {
				'./build/html/index.html': [dir + 'index.jade'],
				'./build/html/partials/home.html': [dirpartial + 'home.jade']
			}
		}
	}
}
