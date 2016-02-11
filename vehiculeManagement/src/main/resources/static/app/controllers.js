'use strict';

/* Controllers */

var vehiculeMgmtControllers = angular.module('vehiculeMgmtControllers', []);

vehiculeMgmtControllers.controller('VehiculeListCtrl', [ '$scope', 'Vehicule',
		function($scope, Vehicule) {
			$scope.vehicules = Vehicule.query();
			$scope.orderProp = 'name';
			$scope.remove = function(vehiculeName){
				alert(vehiculeName);
				Vehicule.remove({name : vehiculeName});
			};
		} ]);

vehiculeMgmtControllers.controller('VehiculeEditCtrl', [ '$scope', '$routeParams', 'Vehicule',
		function($scope, Vehicule, $routeParams) {
			$scope.vehicule = Vehicule.get({
				name : $routeParams.name
			}, function(vehicule){
				$scope.vehiculeName = vehicule.name;
				$scope.vehiculeType = vehicule.type;
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
				Vehicule.save({name : $scope.vehiculeName, type : $scope.vehiculeType});
			};
			
		} ]);

vehiculeMgmtControllers.controller('VehiculeAddCtrl', [ '$scope', 'Vehicule',
		function($scope, Vehicule) {
			$scope.newVehicule = {name : 'default', type : 'car'};
			
			$scope.setName = function(name) {
				$scope.newVehicule.name = name;
			};
			
			$scope.setType = function(type) {
				$scope.newVehicule.type = type;
			};
			
			$scope.addNewVehicule = function(name, type) {
				$scope.setName(name);
				$scope.setType(type);
				Vehicule.save($scope.newVehicule);
			};
		} ]);