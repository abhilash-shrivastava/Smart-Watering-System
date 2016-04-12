'use strict';

define(['angular', './sample-module'], function(angular, controllers) {

    // Controller definition

    controllers.controller('PlantsCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

        $scope.form = {};

        $scope.addPlant = function () {

            var plant = {

                id: $scope.plants.length + 1,

                plantName: $scope.form.plantName,

                moistureLevel: $scope.form.moistureLevel

            };

            $rootScope.plants.push(plant);

            $scope.form = {};

        };

    }]);

});