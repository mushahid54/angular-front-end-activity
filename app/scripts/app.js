'use strict';

var app = angular
  .module('MessageBoardApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
      .state('message', {
        url: '/message_board',
        controller: 'MessageBoardCtrl',
        templateUrl: 'templates/message_board.html'
      })
      .state('homepage', {
        url: '/home',
        controller: 'AuthenticationCtrl',
        templateUrl: 'templates/Authentication.html'
      });


    }]);
