'use strict';


app
  .controller('AuthenticationCtrl', function ($scope, $http,$state, MessageBoard) {
    $scope.main = {
      title: 'Message Board app',
      parent_url: "http://127.0.0.1:8000/",
      base_url: "http://127.0.0.1:8000/api/v1/",
    };

    $scope.userLogin=function(){
      var data={
        "grant_type":"password",
        "username":$scope.email,
        "password":$scope.passowrd,
        "client_id": "cG0YXtBEHDoaX0s92Y0plUuOI0ZyhGJXTFXeEqLq",
        "client_secret": "AzF1gJfOUKdtn5WxSWq52kk3PupmNLkMCOD35GQqGapVd5vyLdKO6HPDY5Cx3sehH6DwlqDKnZWRHdEIJ3Nxu3N5MMBYX3aEpo4PrQg0f7WIfyzTS5UX8TNxCt20hJdc"
      }

      MessageBoard.user_login($scope.main.parent_url+'o/token/', data).then(function(response){
        window.localStorage.setItem('token', response.data.access_token);
        $state.go('message');
      }).catch(function(error_response){

      });
    }



    $scope.userSingUp=function(){
      var request_data = {
        	"first_name": $scope.firstname,
            "last_name": $scope.lastname,
            "email": $scope.email,
            "username": $scope.username,
            "password":$scope.password
        }
        console.log(request_data)
        MessageBoard.user_logsignUp($scope.main.base_url+'create-user/', request_data).then(function(response){
          //window.localStorage.setItem('token', response.data.access_token);
          console.log(response)
          $state.go('message');
        }).catch(function(error_response){

        });

    }


})
