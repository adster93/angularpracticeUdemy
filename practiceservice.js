(function(){
	var customersService = function(){
		var customers = []
		
		this.getCustomers = function(){
			return customers
		}
	}
	angular.module('customersApp')
		.service('customersService', customersService)

}())