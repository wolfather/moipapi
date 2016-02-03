'use strict'

describe('Testing the app.transform.value.js service', function() {
	beforeEach(angular.mock.module('app'))

	it('should have a working transformvalue first name service', inject(['transformvalue', 
		function(transformvalue) {
			expect(transformvalue.name(user.fullName).first()).toBe('israel');
		}
	]))

	it('should have a working transformvalue lastName service', inject(['transformvalue', 
		function(transformvalue) {
			expect(transformvalue.name(user.fullName).last()).toBe('soares');
		}
	]))

	it('should have a working transformvalue lastName service', inject(['transformvalue', 
		function(transformvalue) {
			expect(transformvalue.phone(user.cellphoneTypeOne).countryCode()).toBe('55');
		}
	]))

	it('should have a working transformvalue lastName service', inject(['transformvalue', 
		function(transformvalue) {
			expect(transformvalue.phone(user.cellphoneTypeOne).areaCode()).toBe('11');
		}
	]))

	it('should have a working transformvalue lastName service', inject(['transformvalue', 
		function(transformvalue) {
			expect(transformvalue.phone(user.cellphoneTypeOne).number()).toBe('123456789');
		}
	]))
})
