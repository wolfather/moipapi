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
			type: 'MERCHANT'
		}
	};
	
	this.create = function(userData) {
		var request = new XMLHttpRequest(),
			response;

		request.open('POST', POST_URL_USER.url),

		request.setRequestHeader('Content-Type', 'application/json'),
		
		request.overrideMimeType("text/plain; charset=utf-8"),

		request.send(JSON.stringify(_userInfo(userData))),

		request.onreadystatechange = function () {
			if (this.readyState === 4 && !!this.responseText) {
				//console.log((/\}\,\n\s\s\s\s\}\,/g).test(this.responseText));
				//console.log('RESPONSE: ', JSON.parse(response));
				
				response = this.responseText.replace(/\}\,\n\s\s\s\s\}\,/g, '}},');
				
				return JSON.parse(response);
			}
		};

	};


}

angular.module('app').service('postuserservice', 
	['$http', 'POST_URL_USER', postUserFn]);




