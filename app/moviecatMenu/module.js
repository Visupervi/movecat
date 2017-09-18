/**
 * Created by Administrator on 2017/8/21 0021.
 */
(function (angular) {
  'use strict';

  angular
    .module('moviecat.directive', [])
    .directive('menuActive', ['$location', function ($location) {
      return {
        templateUrl: 'moviecatMenu/view.html',
        link: function ($scope, element, attribute) {
          // element是jqLite对象
          // console.log(element);

          var lis = element.find('li');

          // 思路：监视url的变化
          $scope.location = $location;
          $scope.$watch('location.url()', function (curVal, oldVal) {
            // console.log(curVal);
            // 1 获取到当前的url -> curVal
            for (var i = 0; i < lis.length; i++) {
              var curLi = lis.eq(i);

              var aLink = curLi.children().attr('href').slice(1);
              // console.log(a);
              if (curVal.indexOf(aLink) != -1) {
                // 先移除所有li元素中的 active
                lis.removeClass('active');
                // 再给当前元素添加 active
                curLi.addClass('active');
                break;
              }
            }
          });

          /* console.log(scope);
           console.log(element);
           console.log(attribute); */
        }
      };
    }]);

})(angular)