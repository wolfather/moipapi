module.exports = function( grunt ) {
	var cfg = {
		//connect 		: require('./grunttasksconfigs/livereload.config'),
		compass 		: require('./grunttasksconfigs/compass.config'),
		jade 			: require('./grunttasksconfigs/jade.config'),
		ngannotate 		: require('./grunttasksconfigs/ngannotate.config'),
		karma 			: require('./grunttasksconfigs/karma.config')
		/*cssmin 			: require('./grunttasksconfigs/cssmin.config'),
		uglify 			: require('./grunttasksconfigs/uglify.config'),
		concat 			: require('./grunttasksconfigs/concat.config'),
		watch 			: require('./grunttasksconfigs/watch.config')*/
	}

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jade: cfg.jade(),
		compass : cfg.compass(),
		ngAnnotate: cfg.ngannotate(),
		karma: cfg.karma(),
		//connect: cfg.connect(),
		/*cssmin: cfg.cssmin(),
		uncss: cfg.uncss(),
		uglify: cfg.uglify(),
		concat: cfg.concat(),
		watch: cfg.watch()*/
	})

	grunt.loadNpmTasks('grunt-karma')
	grunt.loadNpmTasks('grunt-contrib-jade')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-ng-annotate')
	grunt.loadNpmTasks('grunt-contrib-compass')
	//grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-watch')


	// Default task(s).
	grunt.registerTask('tdd', ['karma'])
	grunt.registerTask('html', ['jade'])
	grunt.registerTask('ng', ['ngAnnotate'])
	grunt.registerTask('csscompass', ['compass'])
	//grunt.registerTask('cssminify', ['cssmin'])
	//grunt.registerTask('css', ['compass', 'cssmin'])
	grunt.registerTask('jsmin', ['uglify'])
	grunt.registerTask('js', ['ngAnnotate', 'concat', 'uglify'])
	//grunt.registerTask('fronttasks', ['jade', 'compass', 'cssmin', 'ngAnnotate', 'concat', 'uglify'])
	grunt.registerTask('default', ['connect'])
}
