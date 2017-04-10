// MAIN CONTROLLER

function mainController($scope) {

  $scope.user = {};
  $scope.names = [];
  $scope.addSubmit=function(){
    $scope.names.push({
      lastName: $scope.user.lastName,
      firstName: $scope.user.firstName,
      email: $scope.user.email
    });
    console.log($scope.user);
  };
}
