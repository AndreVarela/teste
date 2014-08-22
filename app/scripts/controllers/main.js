'use strict';

/**
 * @ngdoc function
 * @name bcpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcpApp
 */
angular.module('bcpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
