/**
 * Created by Administrator on 2017/8/21 0021.
 */
(function (angular) {
  "use strict";
  angular.module("moviecat.detail", [])
    .config(["$routeProvider", function ($routeProvider) {
      $routeProvider
        .when("/details/:id", {
          templateUrl: "moviedetail/view.html",
          controller: "DetailCtrl"
        })

    }])
    .controller("DetailCtrl", ["$scope", "$routeParams", "jsonpService", function ($scope, $routeParams, jsonpService) {
      var id = $routeParams.id;
      // console.log(id);
      // console.log($routeParams);

      jsonpService.jsonp("https://api.douban.com/v2/movie/subject/" + id,
        {},
        function (data) {
          console.log(data);
          $scope.data = data;
          $scope.$apply();

        }
      )

    }])
})(angular);