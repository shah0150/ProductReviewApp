app.controller('detailsCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {


    Items.getAll().then(
        function (response) {
            $scope.allData;
            $scope.bookID = $stateParams.bookID;
            $scope.allData = response.data;
            $scope.books = $scope.allData.books;
            var numBooks = $scope.books.length;
            for (var i = 0; i < numBooks; i++) {
                if ($scope.books[i]._id == $scope.bookID) {
                    $scope.title = $scope.books[i].title;
                    $scope.shortDescription = $scope.books[i].short_description;
                    $scope.longDescription = $scope.books[i].long_description;
                    $scope.price = $scope.books[i].price;
                    $scope.rating = $scope.books[i].rating;
                }
            }
        },
        function (err) {});
}]);
