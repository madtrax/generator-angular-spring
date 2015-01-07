(function() {
	'use strict';
	
	angular
		.module('app')
		.service('ConfService', ConfService);

	ConfService.$inject = ['$http'];
	function ConfService($http) {
		
		var service 		= {};

		service.initConfig	= function() {
			return $http.get('config');
		};
		
		return service;
	}

})();