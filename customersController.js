//option1

// app.controller('CustomersController', function ($scope){
//         $scope.sortBy = 'name'
//         $scope.rev = false
//         $scope.hello = 'hello'
        
//         $scope.customers= [{joined: '2000-12-02', name:'John', city: 'Chandler', orderTotal: 9.9956}, {joined:'1965-01-25', name:'Billy', city: 'Seattle', orderTotal: 14.5532}, {joined:'1989-01-25', name:'Alex', city: 'New York', orderTotal: 19.5532}, {joined:'1920-01-25', name:'Arnold', city: 'Chicago', orderTotal: 4.5532}, {joined:'1979-01-25', name:'Jen', city: 'Nashville', orderTotal: 43.5532}]
//         $scope.doSort = function(propName){
//             $scope.sortBy=propName
//             $scope.rev= !scope.rev
//         }
//     })

//option2
// (function(){
//  angular.module('customersApp')
//  	.controller('CustomersController', function ($scope){
//         $scope.sortBy = 'name'
//         $scope.rev = false
//         $scope.hello = 'hello'
        
//         $scope.customers= [{joined: '2000-12-02', name:'John', city: 'Chandler', orderTotal: 9.9956}, {joined:'1965-01-25', name:'Billy', city: 'Seattle', orderTotal: 14.5532}, {joined:'1989-01-25', name:'Alex', city: 'New York', orderTotal: 19.5532}, {joined:'1920-01-25', name:'Arnold', city: 'Chicago', orderTotal: 4.5532}, {joined:'1979-01-25', name:'Jen', city: 'Nashville', orderTotal: 43.5532}]
//         $scope.doSort = function(propName){
//             $scope.sortBy=propName
//             $scope.rev= !scope.rev
//         }
//     })
// }());

//option 3

(function(){

 var CustomersController = function($scope){
 	 $scope.sortBy = 'name'
        $scope.rev = false
        $scope.hello = 'hello'
		 $scope.customers= [
        {
        	id: 1, 
        	joined: '2000-12-02', 
        	name:'John', 
        	city: 'Chandler', 
        	orderTotal: 9.9956, 
    		orders: [{
    			id: 1,
    			product: 'Shoes',
    			total: 9.9956
    		}
    	]
    }, 
    	{
    		id: 2, 
    		joined:'1965-01-25', 
    		name:'Billy', 
    		city: 'Seattle', 
    		orderTotal: 14.5532,
    		orders: [
    		{
    			id: 2,
    			product: 'Baseball',
    			total: 9.995
    		},
    		{
    			id: 3,
    			product: 'Bat',
    			total: 9.995
    		}
    	]
    }, 
        {
        	id: 3, 
        	joined:'1989-01-25', 
        	name:'Alex', 
        	city: 'New York', 
        	orderTotal: 19.5532,
        	orders: [
        	{
        		id: 4,
        		product: 'Headphones',
        		total: 44.99
        	}
        ]
    }, 
        {
        	id: 4, 
        	joined:'1920-01-25', 
        	name:'Arnold', 
        	city: 'Chicago', 
        	orderTotal: 4.5532,
        	orders: [
        	{
        		id: 5,
        		product: 'Kindle',
        		total: 101.50
        	}
        ]
    }
]        
        $scope.doSort = function(propName){
            $scope.sortBy=propName
            $scope.rev= !$scope.rev
        }
    }
  angular.module('customersApp')
 	.controller('CustomersController', CustomersController)
       
}());

