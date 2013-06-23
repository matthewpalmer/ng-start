var employeeList = angular.module('employeeList.services', []);
employeeList.factory('firstFactory', function () {
  var employees = [
    {name: 'john smith', city:'sydney', age: 19},
    {name: 'john apple', city:'new york', age: 34},
    {name: 'john gruber', city:'san francisco', age:24}
  ];
  var factory = {};
  factory.getEmployees = function() {
    return employees;
  }
  return factory;
});