'use strict'
module.exports = function() {
	return {
		unit: {
			configFile: 'karma.conf.js',

			files: [
				{
					src: ['test/**/*.js'],

				}
			]
		},
		continuous: {
			configFile: 'karma.conf.js',
			singleRun: true,
			browsers: ['PhantomJS']
		}
	}

}
