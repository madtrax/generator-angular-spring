(function() {
    'use strict';
    
	angular
		.module('app')
		.config(Routes);
	
	Routes.$inject = ['$routeProvider'];
    function Routes($routeProvider) {

    	$routeProvider.
	    	 when('/', {
	    	   templateUrl: 'templates/main/main.html',
	    	   controller:	'ApplicationCtrl',
	           controllerAs: 'app'
	       	 }).
	         otherwise({
	           redirectTo: '/'
	         });
    }
    
})();