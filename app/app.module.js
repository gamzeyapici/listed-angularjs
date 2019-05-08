'use strict';
(function () {
    angular.module('app',
        ['ui.router']
    )
        .run(function () { })
        .component('product', {
            template: '<div>PRODUCT COMPONENT {{product}}</div>',
            controller: function ($scope) {
                $scope.product = 'Domates'
            }
        })
        .component('employee', {
            template: '<div>USER COMPONENT {{employee}}</div>',
            controller: function ($scope) {
                $scope.employee = 'Gamze Yapıcı'
            }
        })

})();