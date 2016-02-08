'use strict'

describe('Testing the app.transform.value.js service', function() {
	beforeEach(angular.mock.module('app'))

	it('should be working transformvalue first name service', 
		inject(['transformvalue', function(transformvalue) {
			expect(transformvalue.name(user.fullName).first()).toBe('israel');
		}
	]))

	it('should be working transformvalue lastName service', 
		inject(['transformvalue', function(transformvalue) {
			expect(transformvalue.name(user.fullName).last()).toBe('soares');
		}
	]))

	it('should be working transformvalue.phone(param).countryCode() service', 
		inject(['transformvalue', function(transformvalue) {
			expect(transformvalue.phone(user.cellphoneTypeOne).countryCode()).toBe('55');
		}
	]))

	it('should be working transformvalue.phone(param).areaCode() service', 
		inject(['transformvalue', function(transformvalue) {
			expect(transformvalue.phone(user.cellphoneTypeOne).areaCode()).toBe('11');
		}
	]))

	it('should be working transformvalue.phone(param).number() service', 
		inject(['transformvalue', function(transformvalue) {
			expect(transformvalue.phone(user.cellphoneTypeOne).number()).toBe('123456789');
		}
	]))

	it('should be working transformvalue.cpf(param) service', 
		inject(['transformvalue', function(transformvalue) {
			expect(transformvalue.cpf(user.cpf)).toBe('123.456.789-01');
		}
	]))
})
