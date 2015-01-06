(function() {
	'use strict';

	angular
		.module('app')
		.controller('ApplicationCtrl', ApplicationCtrl);

	ApplicationCtrl.$inject = ['$window', 'ApplicationService'];
	
	function ApplicationCtrl($window, ApplicationService) {

		var vm = this;

		vm.projectAuthor 	= null;
		vm.projectName		= null;

		vm.loadConfig = function() { 
			ApplicationService
				.getConfig()
				.error(function() {
					vm.projectAuthor = vm.projectName = 'Error!';
				})
				.then(function(res) {
					vm.projectAuthor 	= res.data.projectAuthor 	|| 'Unknown';
					vm.projectName 		= res.data.projectName 		|| 'Unknown';
				});
		};

		vm.loadConfig();

		return vm;
	}

})();