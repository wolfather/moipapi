function postUserFn($http, POST_URL_USER) {
	'use strict';
	
	var self = this,
		_userInfo = function(data) {
		return {
			email: {
				address: data.email
			},
			person: {
				name: data.name.first(),
				lastName: data.name.last(),
				taxDocument: {
					type: 'CPF',
					number: data.cpf
				},
				birthDate: '1981-01-30',
				phone: {
					countryCode: data.phone.countryCode(),
					areaCode: data.phone.areaCode(),
					number: data.phone.number()
				}
			},
			type: 'MERCHANT'/*,
			'pass': '111',
			'confirmpass': '111',
			'agree': true*/
		};
	};

	$http.defaults.headers.post = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, JSON',
		'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
	};
	$http.defaults.useXDomain = true;	
	delete $http.defaults.headers.common['X-Requested-With'];

	this.create = function(userData) {
		console.log(angular.toJson(_userInfo(userData), 1));
		return $http({
			method: 'POST',
			url: POST_URL_USER.url,
			headers: {'Content-Type': 'application/json'},
			data: angular.toJson(_userInfo(userData), 1),
			//data: JSON.stringify(_userInfo(userData)),
			cache: false
		})
		.then(function(response) {
			console.log('parse reponse: ', angular.toJson(response));
			console.log('reponse: ', response);
			return response;
		
		}, function(error) {
			console.log('erro', error);
			return error;
		
		})/*.catch(function(e) {
			console.log('erro', e);
		})*/

	};
}

angular.module('app').service('postuserservice', 
	['$http', 'POST_URL_USER', postUserFn]);




