(function() {
	'use strict';

	angular
		.module('app')
		.service('ApplicationService', ApplicationService);

	ApplicationService.$inject = ['$http'];
	function ApplicationService($http) {

		var service = {};

		service.getConfig = function() { 
			return $http.get('config');
		};

		return service;
	}
	
})();