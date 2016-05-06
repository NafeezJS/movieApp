movieSaleApp = angular.module('movieSaleApp', ['ngResource', 'ngRoute']);
movieSaleApp.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});
movieSaleApp.factory('movieStubBookingsFactory', function ($resource) {
    return $resource('/bookings');
});