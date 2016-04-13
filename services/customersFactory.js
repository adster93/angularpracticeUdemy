(function() {
    var customersFactory = function() {
        var customers = [{
            id: 1,
            joined: '2000-12-02',
            name: 'John',
            city: 'Chandler',
            orderTotal: 9.9956,
            orders: [{
                id: 1,
                product: 'Shoes',
                total: 9.9956
            }]
        }, {
            id: 2,
            joined: '1965-01-25',
            name: 'Billy',
            city: 'Seattle',
            orderTotal: 14.5532,
            orders: [{
                id: 2,
                product: 'Baseball',
                total: 9.995
            }, {
                id: 3,
                product: 'Bat',
                total: 9.995
            }]
        }, {
            id: 3,
            joined: '1989-01-25',
            name: 'Alex',
            city: 'New York',
            orderTotal: 19.5532,
            orders: [{
                id: 4,
                product: 'Headphones',
                total: 44.99
            }]
        }, {
            id: 4,
            joined: '1920-01-25',
            name: 'Arnold',
            city: 'Chicago',
            orderTotal: 4.5532,
            orders: [{
                id: 5,
                product: 'Kindle',
                total: 101.50
            }]
        }]
        var factory = {};
        factory.getCustomers = function(){
        	return customers;
        }
        factory.getCustomer = function(customerId){
            for(i=0; i<customers.length; i++){
                if(customers[i].id === parseInt(customerId)){
                    return customers[i]
                }
            }
            return {}
        }
        return factory;
    }
    angular.module('customersApp').factory('customersFactory', customersFactory)
}())







