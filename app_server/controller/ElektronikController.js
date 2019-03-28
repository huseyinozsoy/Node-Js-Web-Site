var path = require("path");


module.exports.index = function(req,res){
    res.render("elektronik");
}

module.exports.bilgisayar = function(req,res){
    var kisiler = ['Ahmet','Merhmet','Ali'];
    res.render('bilgisayar',{mesaj: 'Merhaba Ben Controller',adlar: kisiler});
}

