angular.module('collection', ['ngRoute', 'firebase'])
 
.value('fbURL', 'https://scorching-fire-3850.firebaseio.com/potluck')
 
.factory('Collection', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
})
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
    .when('/edit/:itemId', {
      controller:'EditCtrl',
      templateUrl:'detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('ListCtrl', function($scope, Collection) {
  $scope.collection = Collection;
})
 
.controller('CreateCtrl', function($scope, $location, $timeout, Collection) {
  $scope.save = function() {
    Collection.$add($scope.item, function() {
      $timeout(function() { $location.path('/'); });
    });
  };
})
 
.controller('EditCtrl',
  function($scope, $location, $routeParams, $firebase, fbURL) {
    var itemUrl = fbURL + $routeParams.itemId;
    $scope.item = $firebase(new Firebase(itemUrl));
 
    $scope.destroy = function() {
      $scope.item.$remove();
      $location.path('/');
    };
 
    $scope.save = function() {
      $scope.item.$save();
      $location.path('/');
    };
});