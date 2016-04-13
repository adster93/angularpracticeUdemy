var express = require('express')
app = express()

app.configure(function(){
	app.use(express.static(__dirname, '/'))
})

app.get('/customers/:id', function(req, res){
	var customerId = parseInt(req.params.id)
	var data = {}
	for(var i =0; i<customers.length; i++){
		if(customers[i].id === customersId){
			data=customers[i]
			break;
		}
	}
	res.json(data)
})

app.get('/customers', function(req, res){
	res.json(customers)
});

app.listen(8081)

console.log('listening on port 8081')