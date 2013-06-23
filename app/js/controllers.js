var employeeList = angular.module('employeeList.controllers', []);
employeeList.controller('MyCtrl1', function ($scope, firstFactory) {
  $scope.employees = [];
  $scope.employees = firstFactory.getEmployees();
  $scope.addEmployee = function() {
    console.log('add');
    $scope.employees.push({
      name: $scope.newEmployee.name, 
      city: $scope.newEmployee.city,
      age: $scope.newEmployee.age
    });
  };
});
employeeList.controller('MyCtrl2', ['$scope', function ($scope) {
  
}]);