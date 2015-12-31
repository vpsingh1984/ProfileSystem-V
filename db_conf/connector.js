var mongojs = require('mongojs');
var db = mongojs('contactlist', ['signon','carlist','contactlist']);

module.exports = db;