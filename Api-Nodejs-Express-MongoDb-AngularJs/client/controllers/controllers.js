myApp.controller('conController', function($scope,$route,$routeParams,$http){
	$scope.getContactos = function(){
		$http.get('/api/contactos').then(function(response){
			$scope.contactos = response.data;
		});
	};
	$scope.showContactos = function(){
		var id = $routeParams.id;
		$http.get('/api/contactos/'+ id).then(function(response){
			$scope.contactos = response.data;
		});
	};
	$scope.addContactos = function(){
		//var id = $routeParams.id;
		$http.post('/api/contactos/', $scope.contactos).then(function(response){
			//$scope.contactos = response.data;
			window.location.href = '/';
		});
	};
	$scope.updateContactos = function(){
		var id = $routeParams.id;
		$http.put('/api/contactos/'+ id , $scope.contactos).then(function(response){
			//$scope.contactos = response.data;
			window.location.href = '/';
		});
	};
	$scope.deleteContactos = function(id){
		var id = id;
		$http.delete('/api/contactos/'+ id).then(function(response){
			$route.reload();
		});
	};
});