'use strict';

// 集团登录控制器
app.controller('SigninFormController', ['$scope', '$http', '$state', '$rootScope',
    function($scope, $http, $state, $rootScope) {
        var width_pswd,
            width_code,
            smsid = '',
            _remember;

        $scope.user = {};
        $scope.authError = null;

        $scope.login = function() {
            $scope.authError = null;
            var param = {
                userType: 3
            };
            if ($scope.login_with_pswd) {
                var url = app.url.login;
                param.telephone = $scope.user.telephone;
                param.password = $scope.user.password;
            } else {
                var url = app.url.loginByCode;
                param.telephone = $scope.user.telephone;
                param.smsid = smsid || utils.localData('smsid');
                param.verifyCode = $scope.user.ranCode;
            }

            $http({
                url: url,
                method: 'post',
                data: param
            }).then(function(response) {
                if (response.data.resultCode === 1) {
                } else {
                    $scope.authError = response.data.resultMsg;
                }
            }, function(x) {
                $scope.authError = '服务器错误';
            });
        };
    }
]);
