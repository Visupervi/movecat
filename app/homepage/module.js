/**
 * Created by Administrator on 2017/8/20 0020.
 */
(function (angular) {
    angular.module("moviecat.homepage",[])
        .config(["$routeProvider",function ($routeProvider) {
            $routeProvider
                .when("/home_page",{
                    templateUrl:"homepage/view.html"
                });
        }])
})(angular);
