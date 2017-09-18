/**
 * Created by Administrator on 2017/8/21 0021.
 */
(function (angular) {
  angular.module("moviecat.jsonp", [])
    .service("jsonpService", ["$window", function ($window) {
      var window = $window;
      var document = $window.document;
      this.jsonp = jsonp;

      function jsonp(url, options, callback) {
        url += "?";
        for (var attr in options) {
          url += attr + "=" + options[attr] + "&";
        }
        var cb = "v_" + (new Date() - 0);//给不同的时间戳，避免数据下一次走缓存
        url += "callback=" + cb;
        window[cb] = function (data) {
          callback(data);
          delete  window[cb];
          document.head.removeChild(script);
        }
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
      }

    }])
})(angular);