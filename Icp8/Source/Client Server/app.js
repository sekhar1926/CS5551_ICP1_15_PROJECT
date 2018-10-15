'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.getinfo = function () {
            var ipaddress = document.getElementById("ipaddress").value;
            
            if (ipaddress != null) {
                var handler = $http.get('http://api.ipstack.com/'+ipaddress+'?access_key=c0ca9ee6ec152480cbd9fc4137aa8a03');
                handler.success(function (data) {
                    console.log(data);
                    $scope.city = data.city;
                    $scope.country_name=data.country_name;
                    $scope.continent_name =data.continent_name;
                    $scope.latitude =data.latitude;
                    $scope.longitude = data.longitude;
                    $scope.region_name = data.region_name;
                    $scope.zip =data.zip;
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }


    });
