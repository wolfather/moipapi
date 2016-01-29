module.exports = function() {
	var jsfolder 	= 'dev/js/'

	return {
		options: {
			mangle: true,
			beautify: false,
			angular: true,
			compress: {
				drop_console: true
			},
			except:['angular', 
					'Angular', 
					'ng', 
					'jQuery',
					'jQ',
					'$']
		},
		min: {
			files: {
				'build/js/app.min.js':[jsfolder + 'app.js']
			}
		}
	}

}
