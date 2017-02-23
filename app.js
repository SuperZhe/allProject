var app = angular.module('qmgj',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'view/home.html',
		controller:'homecontroller'
	})
	.state('column',{
		url:'/column',
		templateUrl:'view/column.html',
		controller:'columncontroller'
	})
	.state('circle',{
		url:'/circle',
		templateUrl:'view/circle.html',
		controller:'circlecontroller'
	})
	.state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'logincontroller'
	})
	.state('signin',{
		url:'/signin',
		templateUrl:'view/signin.html',
		controller:'signincontroller'
	})
	.state('itemlist',{
		url:'/itemlist',
		templateUrl:'view/itemlist.html',
		controller:'itemlistcontroller'
	})
	.state('detail',{
		url:"/detail/:id",
		templateUrl:'view/detail.html',
		controller:'detailcontroller'
	})
	
}]);
app.controller('bodyCtrl', ['$scope','$http',function($scope,$http){
	$http({
		url:"test.json",
		type:"get"
	}).success(function(res){
		$scope.list = res.data.list;
	});
	$scope.showIndex = 1;
	$scope.cbcFn = function(index){
		$scope.showIndex = index;
	}
}])