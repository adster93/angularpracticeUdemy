(function(){
	var customersFactory = function(){
		var customers = [];
		var factory = {}
		factory.getCustomers = function(){
			return customers;
		};
		return factory;
	}
}())
//or

(function(){
	var customersFactory = function(){
		var customers = []
		return {
			getCustomers: function(){
				return customers
			}
		}
	}
	angular.module('customersApp')
		.factory('customersFactory', customersFactory)
}())