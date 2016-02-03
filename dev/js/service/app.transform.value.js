function transformValuesFn() {
	
	this.name = function(name) {
		var _name = 'string' === typeof name ? name.split(' ') : 0;
		
		if(!!_name) {
			return {
				first: function() {
					return _name[0];
				},
				last: function() {
					//console.log('LAST NAME: ', _name.splice(1).join(' '));
					return _name.splice(1).join(' ');
				}
			};
		}
	};

	this.phone = function (date) {
		var _date = 'string' === typeof date ? date.replace(/[\-|\/|\s]+?/g, '') : 0;
		
		if(!!_date) {
			return {
				countryCode: function() {
					return _date.substr(0, 2);
				},
				areaCode: function() {
					return _date.substr(2, 2);
				},
				number: function() {
					return _date.substr(4);
				}
			};
		}

	};

	this.cpf = function (docNumber) {
		
		return 'string' === typeof docNumber ? docNumber.substr(0,3) + '.' + docNumber.substr(4, 3) + '.' + docNumber.substr(8, 3) + '-' + docNumber.substr(12) : 0;

	};
}

angular.module('app').service('transformvalue',
	[transformValuesFn]);
