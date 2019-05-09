(function () {
    var controller = function ($scope) {
        $scope.user = 'Home Page';
        // $scope.init=function(){}        

        $scope.collapsed = true;
        $scope.toggleCollapsed = function () {
            $scope.collapsed = !$scope.collapsed;
        };

    }

    angular.module('app')
        .component('user', {
            templateUrl: 'app/user/user.component.html',
            controller: controller
        }).config(function ($stateProvider) {
            $stateProvider.state('user', {
                url: '/',
                template: '<user></user>'
            })
        });
})();