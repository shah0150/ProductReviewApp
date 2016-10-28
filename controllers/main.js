app.controller('mainCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
    Items.getAll().then(
        function (response) {
            $scope.dataJson = response.data;
            console.log($scope.dataJson);
        },
        function (err) {});

}])
