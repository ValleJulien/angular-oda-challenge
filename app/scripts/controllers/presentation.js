'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:PresentationCtrl
 * @description
 * # PresentationCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('PresentationCtrl', ['$scope','$http', '$location', function ($scope, $http, $location) {

    $scope.$on('$viewContentLoaded', function(event) {
      event.preventDefault();

      $http.get('http://localhost:8000/content/presentation').then(
        function(response) {
          console.log(response);
          $scope.pageContent = response.data.data.content;
        },
        function(response){
          console.log(response);
        }
      );
    });

  }]);
