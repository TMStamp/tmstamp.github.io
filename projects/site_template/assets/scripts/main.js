var app = angular.module('templateSite', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
    $scope.isCollapsed = true;
});

app.controller('DropdownCtrl', function($scope) {
 
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
}); 