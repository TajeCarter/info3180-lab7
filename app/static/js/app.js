// Your JavaScript Code here
var app = angular.module('myApp', []);
 app.controller('myCtrl', function($scope, $http) {
     $http.get("/api/thumbnails").then(function(response) {
         $scope.myData = response.data.thumbnails;
    });
 });