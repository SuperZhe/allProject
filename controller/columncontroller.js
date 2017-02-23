app.controller('columncontroller',['$scope',function($scope){
	$scope.checked = 0;
	$scope.ischeck = function(index){
       $scope.checked = index;
	}
}])