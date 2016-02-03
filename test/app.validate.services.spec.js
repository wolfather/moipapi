'use strict';

describe('Testing the app.validate.services.js', function() {
	beforeEach(angular.mock.module('app'))

	it('should have a working validateservice email service', 
		inject(['validateservice', function(validateservice) {
			expect(validateservice.validate.email.test(user.emailDotComDotBr)).toBeTruthy()
		}
	]))

	it('should have a working validateservice CPF service', 
		inject(['validateservice', function(validateservice) {
			expect(validateservice.validate.cpf.test(user.cpf)).toBeTruthy()
		}
	]))
	
	it('Validate the cellphone validation like 55-11-12345-6789', 
		inject(['validateservice', function(validateservice) {
			expect(validateservice.validate.cellPhone.test(user.cellphoneTypeOne)).toBeTruthy()
		}
	]))

	it('Validate the cellphone validation like 55-11-1234-5678', 
		inject(['validateservice', function(validateservice) {
			expect(validateservice.validate.cellPhone.test(user.cellphoneTypeTwo)).toBeTruthy()
		}
	]))

	it('Validate the email validation without .br in the end', 
		inject(['validateservice', function(validateservice) {
			expect(validateservice.validate.email.test(user.emailDotCom)).toBeTruthy()
		}
	]))

	it('Validate the email validation with .br in the end', 
		inject(['validateservice', function(validateservice) {
			expect(validateservice.validate.email.test(user.emailDotComDotBr)).toBeTruthy()
		}
	]))
})
