'use strict';

/* Controllers */

var vehiculeMgmtControllers = angular.module('vehiculeMgmtControllers', []);

vehiculeMgmtControllers.controller('VehiculeListCtrl', [ '$scope', 'Vehicule',
		function($scope, Vehicule) {
			$scope.vehicules = Vehicule.query();
			$scope.orderProp = 'name';
			$scope.remove = function(vehiculeName){
				Vehicule.remove({name : vehiculeName});
				location.reload(true);
			};
		} ]);

vehiculeMgmtControllers.controller('VehiculeEditCtrl', [ '$scope', '$routeParams', 'Vehicule',
		function($scope, Vehicule, $routeParams) {
			$scope.vehicule = Vehicule.get({
				name : $routeParams.name
			});
			
			$scope.setName = function(name){
				$scope.vehiculeName = name;
			};
			
			$scope.setType = function(type){
				$scope.vehiculeType = type;
			};
			$scope.save = function(vehiculeName, vehiculeType){
				$scope.setName(vehiculeName);
				$scope.setType(vehiculeType);
				Vehicule.save({name : $scope.vehiculeName});
			};
			
		} ]);

vehiculeMgmtControllers.controller('VehiculeAddCtrl', [ '$scope', 'Vehicule',
		function($scope, Vehicule) {
			
			$scope.addNewVehicule = function(vName, vType) {
				Vehicule.save({name : vName, type : vType});
			};
		} ]);