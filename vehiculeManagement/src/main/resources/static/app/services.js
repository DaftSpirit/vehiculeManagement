var vehiculeMgmtServices = angular.module('vehiculeMgmtServices', [ 'ngResource' ]);

vehiculeMgmtServices.factory('Vehicule', [ '$resource', function($resource) {
	return $resource('vehicules/:vehicules.json', {}, {
		query : {
			method : 'GET',
			params : {},
			isArray : true
		},
		save : {
			method : 'POST',
			params : {}
		},
		remove : {
			method : 'DELETE',
			params : {name}
		}
	
	});
} ]);