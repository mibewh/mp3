var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	 	.when('/', {
	 		templateUrl: 'partials/list.html',
	 		controller: 'ListCtrl'
	 	})
	 	.when('/gallery', {
	 		templateUrl: 'partials/gallery.html',
	 		controller: 'GalleryCtrl'
	 	})
	 	.when('/details/:rank', {
	 		templateUrl: 'partials/details.html',
	 		controller: 'DetailsCtrl'
	 	})
	 	.otherwise({
	 		redirectTo: '/'
	 	});
})
