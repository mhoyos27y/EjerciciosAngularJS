app.controller('profesorCtrl', ['$scope','$http', function ($scope,$http) {
	
	$scope.lstProfesores={}

	$http.get('json/profesores.json').then(
			function(response) {								// person
				$scope.lstProfesores = response.data.listaProfesores;
			},
			function(response) {									// un error en la consola.
				console
					.log("Se ha presentado un error en tiempo de ejecucion: "
							+ response);
			});;
	
}])