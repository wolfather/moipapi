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
	beforeEach(angular.mock.module('app'))

	var scope;
	var controller;

	beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_) {
		
		scope = $rootScope.$new();
		controller = $controller('homeController', {$scope : scope});

	}));

	it('should bring the form fields validates', function() {
		var user = {
			fullName: "israel",
			email: "so.israel@hotmail.com",
			cellphone: "11-9999-8889",
			cpf: "322.222.222-09",
			pass: "111",
			confirmpass: "111",
			agree: true
		};

		console.log('TESTE PARTICULAR: ', controller.name);
		
		expect(controller.name).toEqual('teste');
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
