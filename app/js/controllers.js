var employeeList = angular.module('employeeList.controllers', []);
employeeList.controller('MyCtrl1', function ($scope, firstFactory) {
  $scope.employees = [];
  $scope.employees = firstFactory.getEmployees();
  $scope.addEmployee = function() {
    $scope.employees.push({
      name: $scope.newEmployee.name, 
      city: $scope.newEmployee.city,
      age: $scope.newEmployee.age
    });
  };
});
employeeList.controller('MyCtrl2', function ($scope) {
  
});