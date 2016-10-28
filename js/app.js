var app = angular.module('MyApp', ['ui.bootstrap', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/categories');
    $stateProvider
        .state("categories", {
            templateUrl: 'templates/cat.html',
            url: '/categories',
            controller: 'mainCtrl'
        })

    .state('books', {
            templateUrl: 'templates/book.html',
            url: '/categories/:categoryID',
            controller: 'booksCtrl'
        })
        .state('books.detail', {
            templateUrl: 'templates/listdetails.html',
            url: '/:bookID',
            controller: 'detailsCtrl'
        })



}])

.factory('Items', function ItemsFactory($http) {
    return {
        getAll: function () {
            return $http({
                method: 'GET',
                url: 'data.json'
            });

        }
    }
})
