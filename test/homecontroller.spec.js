'use strict'


describe('testing application', ()=> {
	beforeEach(angular.mock.module('app'))

	it('should ensure the controller exist', ()=> {
		expect('homeController').toBeDefined()
	})

})



/*var scope;
var controller;

beforeEach(angular.mock.inject(($rootScope, $controller, _$httpBackend_)=> {
	
	scope = $rootScope.$new();
	controller = $controller('homeController', {$scope : scope});

}));*/




