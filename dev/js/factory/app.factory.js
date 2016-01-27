/* jshint strict: true */
/* jslint vars: true */
/* jslint devel: true */
/* globals angular: false */

/*
angular.module('app').factory('user', 
	['$http', 'POST_URL_USER', function($http, POST_URL_USER) {
	
	'use strict';

	$http.defaults.headers.put = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, JSONP',
		'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
	};
	$http.defaults.useXDomain = true;
	delete $http.defaults.headers.common['X-Requested-With'];

	return {
		create : function(user) {
			
			return $http({
				method: 'POST',
				url: POST_URL_USER.url,
				headers: {'Content-Type': 'application/json'},
				//data: JSON.stringify({body:user}),
				data: {body:user},
				cache: false

			}).then(function(response) {
				return response;
			
			}).catch(function(e) {
				console.log('erro', e);
			});

		}
	};

}]);
*/
