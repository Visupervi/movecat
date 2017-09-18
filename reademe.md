##### Auglar个人项目
###### 使用jsop抓取豆瓣开发平台接口
```javascript
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

```
###### 以上是jsopn封装代码
##### 主要使用angular模块
1.路由模块
######　主要是实现路由配置，跳转不同的页面