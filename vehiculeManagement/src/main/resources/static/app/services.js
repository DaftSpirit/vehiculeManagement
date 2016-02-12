var vehiculeMgmtServices = angular.module('vehiculeMgmtServices', [ 'ngResource' ]);

vehiculeMgmtServices.factory('Vehicule', [ '$resource', function($resource) {
	return $resource('vehicules/', {}, {
		query : {
			method : 'GET',
			params : {},
			isArray : true
		},
		save : {
			method : 'POST',
			templateUrl : {name}
		},
		remove : {
			method : 'DELETE',
			templateUrl : {name}
		},
		get : {
			method : 'GET',
			templateUrl : {name}
 		}
		
	
	});
} ]);