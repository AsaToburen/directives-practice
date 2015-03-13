

var app = angular.module('appDirect',  []);

app.directive('optIn', function() {
  return {
    templateUrl: 'opt-in.html',
    restrict: 'E',
    replace: false,
    transclude: true
  };
});

