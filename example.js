var myApp = angular.module('plunker', ['ui.bootstrap']);

myApp.controller('dropDownController', ['$scope', function($scope) {
    $scope.status = {
            isopen: false
          };

          $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
          };
  }]);

