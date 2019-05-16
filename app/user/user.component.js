(function () {
    'use strict';

    function UsersController($scope, $http, $state, $window) {

        $scope.users = [];
        $scope.selectedIndex = null;
        $scope.selectedUser = null;

        $scope.selectedPerson = function (user, index) {
            $scope.selectedIndex = index;
            $scope.selectedUser = user;            
        };


        getUser().then(function (response) {
            $scope.users = response.data;
        }).catch(function (err) {            
        })

        function getUser() {
            return $http.get("https://jsonplaceholder.typicode.com/users")
        }
    }

    angular.module('g-app')
        .component('users', {
            templateUrl: 'app/user/user.component.html',
            controller: ['$scope', '$http', '$window', UsersController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('users', {
                url: '/users',
                template: '<users></users>'
            });
        }]);
})();