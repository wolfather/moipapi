angular.module('app').directive('messagebox', ['$document', function($document) {
	return {
		restrict: 'A',
		template: '<div class="success-response-box" data-so="emailconfirmed" data-channelid="{{channelid}}"><h3 class="success-response-box-title">Usuário cadastrado com sucesso</h3><dl class="success-response-box-definition"><dt class="success-response-box-definition-title">Nome:</dt><dd class="success-response-box-definition-description">{{name}} {{lastname}}</dd></dl><dl class="success-response-box-definition"><dt class="success-response-box-definition-title">CPF:</dt><dd class="success-response-box-definition-description">{{taxDocumentnumber}}</dd></dl><dl class="success-response-box-definition"><dt class="success-response-box-definition-title">E-mail:</dt><dd class="success-response-box-definition-description">{{emailaddress}}<strong data-ng-show="{{emailconfirmed}}">(endereço confirmado)</strong></dd></dl><dl class="success-response-box-definition"><dt class="success-response-box-definition-title">Seu nome de usuário:</dt><dd class="success-response-box-definition-description untouchable">{{login}}</dd></dl><p class="success-response-box-text"><a class="success-response-box-link" href="{{linkhref}}" target="_blank" rel="external" title="clique aqui para ativar a sua conta." data-createdAt="{{createdAt}}">clique aqui para ativar a sua conta.</a></p></div>',
		scope: {
			channelid: '=',
			name: '=',
			lastname: '=',
			taxDocumentnumber: '=',
			emailaddress: '=',
			emailconfirmed: '=',
			login: '=',
			linkhref: '=',
			createdAt: '=',
		}
	};
}])
