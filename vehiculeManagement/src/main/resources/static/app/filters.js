angular.module('vehiculeMgmtFilters', []).filter('type', function() {
  return function(input) {
	  switch(input) {
	    case 'car':
	        return 'img/car.png';
	        break;
	    case 'bike':
	        return 'img/bike.gif';
	        break;
	    case 'moto':
	        return 'img/moto.jpg';
	        break;
	} 
  };
});
