(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	$scope.listado=["Fernando Herrera","Melissa Florez", "Mauricio Hoyos","Erlis Alandete","Carlos Usme"];
	
	$scope.listadoProfesores={
		profesores:[{
			nombre:"Mauricio Hoyos",
			edad: 27,
			clase:"PEE"
		},{
			nombre:"Erlency Alandete",
			edad: 24,
			clase:"Ingenieria de Software"
		},{
			nombre:"Oscar Duvan Florez",
			edad: 29,
			clase:"DevOps"
		}]
	}

	$scope.listaNumeros=[1,2,3,4,5,6,7,8,9,10];

}]);





})();
