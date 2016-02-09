'use strict';

/* Controllers */

var vehiculeMgmtControllers = angular.module('vehiculeMgmtControllers', []);

vehiculeMgmtControllers.controller('VehiculeListCtrl', [ '$scope', 'Vehicule',
		function($scope, Vehicule) {
			$scope.vehicules = Vehicule.query();
			$scope.orderProp = 'name';
			$scope.remove = function(name){
				Vehicule.remove(name, function(){});
			};
		} ]);

vehiculeMgmtControllers.controller('VehiculeEditCtrl', [ '$scope', '$routeParams', 'Vehicule',
		function($scope, Vehicule, $routeParams) {
			$scope.vehicule = Vehicule.get({
				vehiculeName : $routeParams.vehiculeName
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
			$scope.save = function(){
				Vehicule.save($scope.vehicule, function(){});
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