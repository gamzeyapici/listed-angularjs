(function () {
    var controller = function ($scope, $http) {
        $scope.home = 'Home Page';
        // $scope.init=function(){}        

        $scope.collapsed = true;
        $scope.toggleCollapsed = function () {
            $scope.collapsed = !$scope.collapsed;
        };


        getUser().then(function (response) {
            $scope.products = response.data;
        }).catch(function (err) {
            debugger;
        })

        debugger;

        function getUser() {
            return $http.get("app/product.json")
        }

    }

    angular.module('app')
        .component('home', {
            templateUrl: 'app/home/home.component.html',
            controller: controller
        }).config(function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home></home>'
            })
        });
})();