var express = require("express");
var router = express.Router();
var controller = require('../controller/ElektronikController');
/*
router.use(function(req,res,next){
    req.deneme = "merhaba";

    next();
});
*/
router.get('/', controller.index);
router.get('/bilgisayar', controller.bilgisayar);

//router'ı dışarda kullanabilmek için export ediyoruz.
module.exports = router;