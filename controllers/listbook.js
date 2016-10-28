app.controller('booksCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
    //alert($stateParams.categoryID);
    $scope.books = [];
    $scope.booksInCategory = [];
    Items.getAll().then(
        function (response) {
            $scope.categoryID = $stateParams.categoryID;
            $scope.allData = response.data;
            $scope.books = $scope.allData.books;
            var numberofBooks = $scope.books.length;
            for (var i = 0; i < numberofBooks; i++) {
                if ($scope.books[i].cat_id == $scope.categoryID) {
                    $scope.booksInCategory.push($scope.books[i]);
                }
            }
        },
        function (err) {});
}]);
