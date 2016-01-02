var mongojs = require('mongojs');
var db = mongojs('contactlist', ['signon','carlist','contactlist']);
//var db = mongojs('mongodb://userprofile:userprofile@ds041404.mongolab.com:41404/userprofile', ['signon','carlist','contactlist']);
module.exports = db;