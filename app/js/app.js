var employeeList = angular.module('employeeList', 
  ['employeeList.controllers', 'employeeList.services']);

employeeList.config(function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'partials/view1.html',
    controller: 'MyCtrl1'
  })
  .when('/view2', {
    templateUrl: 'partials/view2.html',
    controller: 'MyCtrl2'
  })
  .otherwise({
    redirectTo: '/view1'
  });
});
