/* jshint strict: true */
/* jslint vars: true */
/* jslint devel: true */
/* globals angular: false */

var partialPath = './build/html/partials/';

angular.module('app').config(function($routeProvider) {
	'use strict';
	
	$routeProvider
	.when('/', {
	templateUrl: 'partials/home.html',
		controller: 'homeController',
		controllerAs: 'home'/*,
		resolve: {
			user : function(user) {
				return user.create();
			}
		}*/
	})

	/*.when('/produto/:id?', {
		templateUrl: partialPath + 'product.html',
		controller: 'detailController',
		controllerAs: 'detail',
		resolve: {
			product : function(product, $route) {
				return product.byId($route.current.params.id);
			}
		}
	})*/

	.otherwise({redirect: '/'});

});







