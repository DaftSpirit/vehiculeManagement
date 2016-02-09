var vehiculeMgmtApp = angular.module('vehiculeMgmtApp', [ 'ngRoute',
		'vehiculeMgmtControllers', 'vehiculeMgmtServices', 'vehiculeMgmtFilters' ]);

vehiculeMgmtApp.config([ '$routeProvider', function($routeProvider, $resourceProvider) {
	$routeProvider.when('/vehicules', {
		templateUrl : 'partials/vehicule-list.html',
		controller : 'VehiculeListCtrl'
	}).when('/edit/:vehiculeName', {
		templateUrl : 'partials/vehicule-edit.html',
		controller : 'VehiculeEditCtrl'
	}).when('/add', {
		templateUrl : 'partials/vehicule-add.html',
		controller : 'VehiculeAddCtrl'
	}).otherwise({
		redirectTo : '/vehicules'
	});
} ]);