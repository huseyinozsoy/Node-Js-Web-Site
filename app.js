var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();
var ejsLayouts = require("express-ejs-layouts");

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/app_server/views'));
var routeElktronik = require("./app_server/routes/elektronikRoute");
var bodyParser = require("body-parser");
var db = require("./app_server/models/db");


app.use(ejsLayouts);

app.use('/public', express.static(path.join(__dirname, 'public')));

/*
app.use(function(req,res,next){
    console.log("url....: "+req.url);
    console.log("time : "+Date.now());
    next();
});
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/elektronik', routeElktronik);

require('./app_server/routes/routeManager')(app);
/*
var Kullanici = require("./app_server/models/kullanici");

var yeniKullanici = new Kullanici({
    ad:  "Bayram",
    soyad: "Akay",
    kullaniciAdi:"bayramAkay",
    sifre: "1231"
});

yeniKullanici.save(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Layıt Basarılı.")
    }
});
*/
app.listen(8000);