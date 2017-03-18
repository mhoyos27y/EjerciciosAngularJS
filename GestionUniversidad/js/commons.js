app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'paginas/home.html'

	}).when('/profesores', {
		templateUrl: 'paginas/profesores.html',
		controller:'profesorCtrl'
	})
	.when('/alumnos', {
		templateUrl: 'paginas/alumnos.html',
		controller:'estudiantesCtrl'
		
	})
});