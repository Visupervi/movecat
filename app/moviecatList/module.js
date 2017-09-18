/**
 * Created by Administrator on 2017/8/20 0020.
 */
(function (angular) {
  "use strict";
  angular.module("moviecat.list", [])
    .config(["$routeProvider", function ($routeProvider) {
      $routeProvider
        .when("/:movieType/:curPage?", {//双路由设置匹配规则更好的匹配
          templateUrl: "moviecatList/view.html",
          controller: "movieListCtrl"
        })
    }])
    .controller("movieListCtrl", ["$scope", "$http", "jsonpService", "$routeParams", "$route", function ($scope, $http, jsonpService, $routeParams, $route) {
      var COUNT = 5;
      var curPage = $routeParams.curPage || "1";
      $scope.curPage = curPage;//这个参数用来记录当前页码数，用于下一页、上一页
      // console.log(curPage);
      var urlObj = {
        count: COUNT,
        start: (curPage - 1) * COUNT,
        q: $routeParams.q
      }
      jsonpService.jsonp("https://api.douban.com/v2/movie/" + $routeParams.movieType, urlObj, function (data) {
        $scope.data = data;
        $scope.totalPage = Math.ceil(data.total / COUNT);
        $scope.$apply();
      })

      $scope.goPage = function (curPage) {
        if (curPage <= 0 || curPage > $scope.totalPage) {
          return;
        }
        $route.updateParams({
          curPage: curPage
        });
      }
    }])
})(angular);

