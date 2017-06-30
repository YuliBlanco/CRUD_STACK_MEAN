var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'conController'
		})

		.when('/contactos', {
			templateUrl:'templates/list.html',
			controller:'conController'
		})

		.when('/contactos/create', {
			templateUrl:'templates/add.html',
			controller:'conController'
		})
		.when('/contactos/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'conController'
		})
		.when('/contactos/:id/show', {
			templateUrl:'templates/show.html',
			controller:'conController'
		});

});