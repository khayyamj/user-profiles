angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl'
	})
	.state('update',{
		url: '/update',
		templateUrl: './views/updateprofile.html',
		controller: 'updateProfileCtrl'
	});

	$urlRouterProvider.otherwise('/');

});
