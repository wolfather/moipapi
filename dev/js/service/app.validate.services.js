function validateServiceFn() {
	'use strict';
	
	this.validate = {
		cpf : /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/,
		cellPhone : /^[0-9]{2}\-[0-9]{2}\-[0-9]{4,5}\-[0-9]{4}$/,
		email: /^([a-zA-Z]|[0-9])+(\.)?([a-zA-Z]|[0-9])+\@([a-zA-Z]|[0-9])+\.([a-zA-Z]{2,4})+\.?([a-zA-Z]{2,3})?$/
	};
}

angular.module('app').service('validateservice', 
	[validateServiceFn]);
