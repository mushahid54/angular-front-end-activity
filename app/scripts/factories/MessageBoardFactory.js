'use strict';

app
  .factory('MessageBoard', function ($http, $q) {

    return {
      user_login:function(url,data) {
        return $http({
          method  : 'POST',
          url     : url,
          data    : data,
          transformRequest: function(obj) {
              var str = [];
              for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
            },
          headers : { "Content-Type": "application/x-www-form-urlencoded"}
        });
      },
      user_logsignUp: function (url,data) {
        return $http({
          method  : 'POST',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json"}
        });
      },
      get_messages: function (url,token) {
        return $http({
          method  : 'GET',
          url     : url,
          headers : { "Content-Type": "application/json", "Authorization": "bearer "+token  }
        });
      },
      delete_message: function(url, data) {
        return $http({
          method  : 'DELETE',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json",  }
        });
      },

      delete_all_messages: function(url, data) {
        return $http({
          method  : 'DELETE',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json",  }
        });
      },

      create_message: function(url, data,token) {
        return $http({
          method  : 'POST',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json", "Authorization": "bearer "+token  }
        });
      },

      get_users: function (url) {
        return $http({
          method  : 'GET',
          url     : url,
          headers : { "Content-Type": "application/json"  }
        });
      },

      get_chat_message: function (url, token) {
        return $http({
          method  : 'GET',
          url     : url,
          headers : { "Content-Type": "application/json", "Authorization": "bearer "+token}
        });
      }

    }
  });
