function createuserformFn(transformvalue, postuserservice) {
	this.submit = function(user) {
		//event.preventDefault();

		var _user = {},
			value = angular.copy(user);
		
		_user.email = value.email;
		_user.name = transformvalue.name(value.fullName);
		_user.cpf = transformvalue.cpf(value.cpf);
		_user.phone = transformvalue.phone(value.cellphone);

		//console.log(_user);

		postuserservice.create(_user);

		return false;
	};
}

angular.module('app').service('createuserform', 
	['transformvalue', 'postuserservice', createuserformFn]);
