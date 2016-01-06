var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = require("../db_conf/connector");

router.get('/carlist/:limit/:page', function(req, res){
	var limit = parseInt(req.params.limit);
	var page = parseInt(req.params.page)-1;

	var skip = limit*page;

	console.log("Limit:"+limit);
	console.log("Page:"+page);

	var response = {};

	//console.log('get request');
	db.carlist.aggregate({$skip:skip},{$limit:limit}, function(err, docs){
		response.data = docs;
		db.carlist.count(function(err, docs){
			response.totalItems = docs;
			res.json(response);
		});
	});
});

router.post('/carlist', function(req, res){
	//console.log(req.body);
	db.carlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

router.delete('/carlist/:id', function(req, res){
	//console.log("Req: "+req+"  Respose: "+res);
	var id = req.params.id;
	//console.log(id);
	db.carlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.get('/carlist/:id', function(req, res){
	var id = req.params.id;
	//console.log(id);
	db.carlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.put('/carlist/', function(req, res){
	var car = req.body;
	console.log("Data received on server");
	var id = car._id;
	db.carlist.findAndModify({
			query: {_id: mongojs.ObjectId(id)},
			update: {$set: {brand: car.brand, modal: car.modal, price: car.price}},
			new: true
		},
		function(err, doc){
			res.json(doc);
		});
});





//contact list
router.get('/contactlist/:limit/:page', function(req, res){
	var limit = parseInt(req.params.limit);
	var page = parseInt(req.params.page)-1;

	var skip = limit*page;

	console.log("Limit:"+limit);
	console.log("Page:"+page);

	var response = {};

	//console.log('get request');
	db.contactlist.aggregate({$skip:skip},{$limit:limit}, function(err, docs){
		response.data = docs;
		db.contactlist.count(function(err, docs){
			response.totalItems = docs;
			res.json(response);
		});
	});
});

router.post('/contactlist', function(req, res){
	//console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

router.delete('/contactlist/:id', function(req, res){
	//console.log("Req: "+req+"  Respose: "+res);
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	});
});

router.put('/contactlist/', function(req, res){
	var id = req.body._id;
	console.log(req.body.name);
	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set:{
			name: req.body.name,
			email: req.body.email,
			number: req.body.number
		}},
		new: true}, function(err, doc){
		res.json(doc);
	});
});

module.exports = router;
