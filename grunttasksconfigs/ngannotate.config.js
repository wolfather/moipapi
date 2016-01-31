module.exports = function() {
	var sourceFiles = [
		'./dev/components/angular/angular.min.js',
		'./dev/components/angular-route/angular-route.min.js',
		'./dev/components/angular-resource/angular-resource.min.js',
		'./dev/js/app.main.js',
		'./dev/js/service/app.validate.js',
		'./dev/js/service/app.validate.services.js',
		'./dev/js/service/app.post.createuser.service.js',
		'./dev/js/service/app.transform.value.js',
		'./dev/js/service/app.create.user.form.service.js',
		'./dev/js/value/app.http.posturluser.value.js',
		'./dev/js/value/app.httpvalue.js',
		'./dev/js/factory/app.factory.js',
		'./dev/js/directive/app.directive.messagebox.js',
		'./dev/js/controller/app.home.controller.js',
		'./dev/js/route/app.route.js'
	]

	return {
		options: {
			singleQuotes: true,
			sourceMap: false
		},
		target: {
			files: {
				'./dev/js/app.js': sourceFiles
			}
		}
	}
}
