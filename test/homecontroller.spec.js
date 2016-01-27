/*describe('testing service', function() {
	var Person;
	beforeEach(module('app'));
		beforeEach(inject(function (_validateServiceFn_) {
		Person = _validateServiceFn_;
	}));

	console.log(new Person());

	it('assigns a name', function () {
		//expect().to.have.property('name', 'Ben');
	});

});*/


describe('testing application', function() {
	beforeEach(module('app'))

	var scope;
	var controller;


	var user = {
		fullName: "israel",
		emailDotCom: "so.israel@hotmail.com",
		emailDotComDotBr: "so.israel@hotmail.com.br",
		cellphoneTypeOne: "55-11-12345-6789",
		cellphoneTypeTwo: "55-11-1234-5678",
		cpf: "322.222.222-09",
		pass: "111",
		confirmpass: "111",
		agree: true
	};

	beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_) {
		
		scope = $rootScope.$new();
		controller = $controller('homeController', {$scope : scope});

	}));

	it('Validate the cpf validation', function() {
		expect(controller.validate.cpf.test(user.cpf)).toBeTruthy();
	});
	
	it('Validate the cellphone validation like 55-11-1234-5678', function() {
		expect(controller.validate.cellPhone.test(user.cellphoneTypeOne)).toBeTruthy();
	});
	
	it('Validate the cellphone validation like 55-11-12345-6789', function() {
		expect(controller.validate.cellPhone.test(user.cellphoneTypeTwo)).toBeTruthy();
	});
	
	it('Validate the email validation without .br in the end', function() {
		expect(controller.validate.email.test(user.emailDotCom)).toBeTruthy();
	});

	it('Validate the email validation with .br in the end', function() {
		expect(controller.validate.email.test(user.emailDotComDotBr)).toBeTruthy();
	});


});


/*(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
 
    var htmlReporter = new jasmine.HtmlReporter();
 
    jasmineEnv.addReporter(htmlReporter);
 
    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };
 
    var currentWindowOnload = window.onload;
 
    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };
 
    function execJasmine() {
        jasmineEnv.execute();
    }
 
})();
*/
