app.controller('cursosCtrl', ['$scope','$http' function ($scope,$http) {
	$scope.listaCursos={};
	
	$http.get('json/cursos.json').then(function(response){
		$scope.listaCursos=response.data.listaCursos;
	}, function(response){
		console.log("datos sin retornar--> respuesta-->"+response);
	});
}]);