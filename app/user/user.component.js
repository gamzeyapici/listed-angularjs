(function () {
    var controller = function ($scope, $document) {
        $scope.user = 'Uğur KARAKAYA';

        $scope.ahmet=function(){
                     
        }

    }

    angular.module('app')
        .component('user', {
            templateUrl: 'app/user/user.component.html',
            controller: controller
        });
})()