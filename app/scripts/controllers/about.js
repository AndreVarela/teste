'use strict';

/**
 * @ngdoc function
 * @name bcpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bcpApp
 */
angular.module('bcpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
