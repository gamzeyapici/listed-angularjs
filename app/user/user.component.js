(function () {
    var controller = function ($scope) {
        $scope.user = 'Uğur KARAKAYA';
        $scope.init=function(){
        }        
    }

    angular.module('app')
        .component('user', {
            templateUrl: 'app/user/user.component.html',
            controller: controller
        }).config(function($stateProvider){
            $stateProvider.state('user', {
                url: '/',
                template: '<user></user>'                
            })
        });
})();