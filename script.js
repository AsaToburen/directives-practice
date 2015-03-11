

var app = angular.module('appDirect',  []);


app.directive('optIn', function() {
  return {
    templateUrl: 'opt-in.html',
    restrict: 'E',
    replace: false,
    transclude: true
  };
});


app.directive('loginForm', function() {
  return {
    restrict: 'E',
    template: '<opt-in><form method="POST" accept-charset="utf-8"><input type="text" name="firstName" placeholder="first name" id="" value="" /><input type="text" name="lastName" placeholder="last name" id="" value="" /><input type="text" name="email" placeholder="email"  id="email" value="" /><input type="submit" name="submit" value="Submit Your Info" /></form></opt-in>',
  };
});