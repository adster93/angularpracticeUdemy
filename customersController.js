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
//      .controller('CustomersController', function ($scope){
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
(function() {
    var CustomersController = function($scope, $log, customersFactory, appSettings) {
        $scope.sortBy = 'name'
        $scope.rev = false
        $scope.hello = 'hello'
        $scope.customers = []
        $scope.appSettings = appSettings;

        function init() {
            customersFactory.getCustomers().success(function(customers) {
                $scope.customers = customers
            }).error(function(data, status, headers, config) {
                //handle error
            })
        }
        init()
        $scope.doSort = function(propName) {
            $scope.sortBy = propName
            $scope.rev = !$scope.rev
        }
        $scope.deleteCustomer = function(propName){
            customersFactory.deleteCustomer(customerId)
            .success(function(status){
                if(status){
                    for(var i =0; i<$scope.customers.length; i++){
                        if($scope.customers[i].id === customerId){
                            $scope.customers.splic(i,1);
                            break;
                        }
                    }
                }
                else {
                    $window.alert('Unable to delete customer')
                }
            })
            .error(function(data, status, headers, config){
                //show error
            })
        }
    }
    angular.module('customersApp').controller('CustomersController', CustomersController)
}());










