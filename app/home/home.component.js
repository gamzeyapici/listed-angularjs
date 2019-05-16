(function () {
    'use strict';

    function HomeController ($scope) {        
        $scope.currrentUser = {
            firstName:"home",
            lastName:"attribute from product"
        }
        $scope.currrentUser2 = {
            firstName:"Uğur",
            lastName:"KARAKAYA"
        }
        $scope.init = function () {}
    }

    angular.module('g-app')
        .component('home', {
            templateUrl: 'app/home/home.component.html',
            controller: HomeController
        }).config(function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home></home>'
            })
        });
})();