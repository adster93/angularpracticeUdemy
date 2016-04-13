(function() {
    var customersFactory = function($http) {
        var factory = {};
        factory.getCustomers = function() {
            return $http.get('http://localhost:3000/customers');
        }
        factory.getCustomer = function(customerId) {
            return $http.get('http://localhost:3000/customers/' + customerId)
        }
        factory.getOrders = function(){
            return $http.get('http://localhost:3000/orders')
        }
        factory.deleteCustomer = function(customerId){
            return $http.delete('http://localhost:3000/customers/' + customerId)
        }
        return factory;
    }
    angular.module('customersApp').factory('customersFactory', customersFactory)
}())