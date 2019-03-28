var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

var mongoDb = 'mongodb://localhost:27017/NodeProje';
mongoose.connect(mongoDb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("baglandı"+ mongoDb);
});
/*
exports.test = function(req,res) {
  res.render('test');
};
*/