var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = require("../db_conf/connector");

router.get('/carlist', function(req, res){
	console.log('get request for car');

	db.carlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

router.post('/carlist', function(req, res){
	console.log(req.body);
	db.carlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

router.delete('/carlist/:id', function(req, res){
	//console.log("Req: "+req+"  Respose: "+res);
	var id = req.params.id;
	console.log(id);
	db.carlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.get('/carlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.carlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

router.put('/carlist/', function(req, res){
	var car = req.body;
	console.log("Data received on server");
	console.log(car);
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
router.get('/contactlist', function(req, res){
	console.log('get request');
	db.contactlist.find(function(err, docs){
		console.log("*******************************************");
		console.log(docs);
		res.json(docs);
	});
});

router.post('/contactlist', function(req, res){
	console.log(req.body);
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

module.exports = router;
