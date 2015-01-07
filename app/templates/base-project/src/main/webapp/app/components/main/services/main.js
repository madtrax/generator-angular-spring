(function() {
	'use strict';

	angular
		.module('app')
		.service('MainService', MainService);

	MainService.$inject = ['$http'];
	function MainService($http) {

		var service = {};

		return service;
	}
	
})();