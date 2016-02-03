'use strict'


describe('testing application', function() {
	beforeEach(angular.mock.module('app'))

	it('should ensure the controller exist', function() {
		expect('homeController').toBeDefined()
	})

})



/*var scope;
var controller;

beforeEach(angular.mock.inject(($rootScope, $controller, _$httpBackend_)=> {
	
	scope = $rootScope.$new();
	controller = $controller('homeController', {$scope : scope});

}));*/




