/**
 * Created by Administrator on 2017/8/20 0020.
 */
(function (angular) {
  'use strict';
  // 创建电影搜索模块
  angular
    .module('moviecat.search', [])
    .controller('SearchController', ['$scope', '$location', function ($scope, $location) {
      // 1 获取到文本框的值
      $scope.searchText = '';

      // 2 添加搜索方法
      $scope.search = function () {
        // 修改url，让电影列表模块中配置的路由规则，匹配当前的url
        // search?q=$scope.searchText
        if ($scope.searchText.trim() === '') {
          return;
        }
        $location.url('/search?q=' + $scope.searchText);
        console.log($scope.searchText);
      };
    }]);
})(angular);
