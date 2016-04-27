app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){

	$scope.helloWorld = "Hello, AngularJS!";

	$scope.posts= suggestions.posts;

	$scope.addSuggestion = function(){
		//si está vacio o caracter vacio
		if(!$scope.title || $scope.title === "") {
			return;
		}

		//añadir uno más
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
		});

		//limpiar la entrada
		$scope.title = '';

	};

	$scope.upVote = function(post){
		post.upvotes += 1;
	};

}]);