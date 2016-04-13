(function() {
    var customersFactory = function($http) {
        var factory = {};
        factory.getCustomers = function() {
            return $http.get('http://localhost:3000/customers');
        }
        factory.getCustomer = function(customerId) {
            return $http.get('http://localhost:3000/customers/' + customerId)
        }
        return factory;
    }
    angular.module('customersApp').factory('customersFactory', customersFactory)
}())