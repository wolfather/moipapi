/* jshint strict: true */
/* jslint vars: true */
/* jslint devel: true */
/* globals angular: false */


function homeFn(validateservice, createuserform) {
	'use strict';
	//pattern form fields validation
	this.validate = validateservice.validate;
	
	var self = this;
	this.successdata = '';

	//submit form user info
	this.submitcreateuser = function(user) {

		createuserform.submit(user).then(function(response) {
			
			self.successdata = response.data;

		});

	};

}

angular.module('app').controller('homeController', 
	['validateservice', 'createuserform', homeFn]);
