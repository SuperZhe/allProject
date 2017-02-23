app.controller('detailcontroller',["$scope","$stateParams","$http",function($scope,$stateParams,$http){
	$http({
       url:'message.json',
       type:'get',
       data: {
       	id: $stateParams.id
       }
	}).success(function(res){
		$scope.item = res.message[$stateParams.id];
		$scope.logo = res.userImg[$stateParams.id]
	});
}])