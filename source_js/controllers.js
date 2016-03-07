//Use factory for universal functions (i.e. the getting of the json)
app.factory('helper', function($http) {
  return {
  	getMovies: function() {
  		return $http.get('../data/imdb250.json')
		.then(function(data) {
			return data.data; //data is just has request. data.data is the list of movies
		})
		.catch(function(err) {
			console.log(err);
		});
  	}
  };
});


app.controller('ListCtrl', ['$scope', '$http', 'helper', function($scope, $http, helper) {
   	helper.getMovies().then(function(data) {
   		$scope.movies = data;
	    $scope.order = false;
	    $scope.sortTypes=[
	    	{val: 'title', text: 'Movie Title'},
	    	{val: 'rank', text: 'IMDB Rank'}
	    ];
   	});
}]);

app.controller('GalleryCtrl', ['$scope', '$http', 'helper', function($scope, $http, helper) {
    helper.getMovies($scope, $http).then(function(data) {
   		$scope.movies = data;
    })
}]);

app.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', '$filter', 'helper', function($scope, $http, $routeParams, $filter, helper) {
    num = parseInt($routeParams.rank);
    if(num === null || num < 1 || num > 250) return; //Invalid input
    helper.getMovies().then(function(data) {
    	$scope.movies = data;
	    $scope.movie = $filter('filter')(data, {rank: num})[0]; //Get the movie of given rank
	    $scope.prev = num - 1;
	    $scope.next = num + 1;
    });
}]);