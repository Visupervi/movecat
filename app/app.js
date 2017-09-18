(function (angular) {
  "use strict";
  // start your ride
//注入各种总服务，路由，首页，热映
  angular
    .module("moviecat", [
      //这个地方有一个大坑，就是注意加载顺序，顺序错了不会出结果
      "ngRoute",
      "moviecat.homepage",
      "moviecat.jsonp",
      "moviecat.detail",
      "moviecat.list",
      "moviecat.search",
      "moviecat.directive"
    ])
})(angular);
