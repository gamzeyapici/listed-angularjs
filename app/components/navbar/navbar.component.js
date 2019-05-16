(function () {
    var controller = function ($scope) {
        $scope.init = function(){

        }

    }

    angular.module('g-app')
        .component('navbar', {
            templateUrl: 'app/components/navbar/navbar.component.html',
            controller: controller
        }).config(function ($stateProvider) {
            $stateProvider.state('navbar', {                
                template: '<navbar></navbar>'
            })
        });
})();