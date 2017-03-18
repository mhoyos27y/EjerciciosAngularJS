app.controller('estudiantesCtrl', ['$scope','$http', function ($scope,$http) {
	
	$scope.listaEstudiantes={};

	$http.get('json/estudiantes.json').then(function(response){
		$scope.listaEstudiantes=response.data.listaEstudiantesJSON
	},function(response){
		console.log("Se ha presentado un error en tiempo de ejecucion: "+ response);
	});
}])