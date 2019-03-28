var express = require('express');

var router = express.Router();
var ctrlLogin = require('../controller/loginController');

router.get('/',ctrlLogin.index);
router.post('/',ctrlLogin.indexPost);
router.get('/singup',ctrlLogin.singupGet);
router.post('/singup',ctrlLogin.sinupPost);
router.get('/kullanicilarListesi',ctrlLogin.kullanicilarListesi);
router.get('/kullanicisil/:ad',ctrlLogin.kullanicisil);

module.exports = router;