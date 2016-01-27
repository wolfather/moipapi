'use strict'
module.exports = ()=> {
	//mudar esse caminho
	var jspath  = 'bower_components/';
	return {

		options: {
			separator: ';',
		},
		dist: {
			src: [
				jspath+'angular/angular.min.js', 
				jspath+'angular-route/angular-route.min.js', 
				jspath+'angular-animate/angular-animate.min.js'
			],
			dest: 'assets/js/aa.min.js',

		}

	}

}
