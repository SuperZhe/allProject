app.controller('homecontroller',['$scope','$http','$interval',function($scope,$http,$interval){
	$http({
       url:'test.json'
	}).success(function(res){
       $scope.list = res.data.list;
       $scope.partner = res.data.partner;
	});
	$scope.showIndex = 0;
	// $scope.showFn=function(index){
	// 	$scope.show
	// }
	var timer = $interval(function(){
		$scope.showIndex++;
		if($scope.showIndex==3){
			$scope.showIndex=0;
		} 
	},2000);
	$scope.hot = 0;
	$scope.isShow = function(index){
        $scope.hot = index;
	}
	
}])