(function() {
	'use strict';

	/* Init application */
	angular
		.module('app', ['ngAnimate', 'ngRoute', 'ngSanitize'<% if (properties.useAngularStrap) { %>, 'mgcrea.ngStrap'<% } %>]);



	/* Common application conroller */
	angular
		.module('app')
		.controller('ApplicationCtrl', ApplicationCtrl);

	ApplicationCtrl.$inject = ['$window', 'ConfService'];
	function ApplicationCtrl($window, ConfService) {

		var vm = this;

		vm.projectAuthor 	= null;
		vm.projectName		= null;

		vm.loadConfig = function() {
      ConfService
				.initConfig()
				.error(function() {
					vm.projectAuthor = vm.projectName = 'Error!';
				})
				.then(function(res) {
					vm.projectAuthor 	= res.data.projectAuthor 	|| 'Unknown';
					vm.projectName 		= res.data.projectName 		|| 'Unknown';
					vm.projectWebsite	= res.data.projectWebsite 	|| 'Unknown';
				});
		};

		vm.loadConfig();

		return vm;
	}
})();

