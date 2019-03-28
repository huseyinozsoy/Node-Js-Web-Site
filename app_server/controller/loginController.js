var Kullanici = require('../models/kullanici');


module.exports.index = function(req,res){
    res.render('login');
}

module.exports.indexPost = function(req,res){
    
    console.log(req.body);
    res.render('home',{
        mail: req.body.mail,
        password : req.body.password
    });
}
module.exports.singupGet = function(req,res){
    res.render('logout');
}
module.exports.sinupPost = function(req,res){

    var yeniKullanici = new Kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        email: req.body.email,
        kullaniciAdi : req.body.kullaniciAdi,
        sifre:req.body.sifre
    });

    yeniKullanici.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect('kullanicilarListesi');
        }
    });
    /*
    console.log(yeniKullanici);

    res.render('logout');
    */
}

module.exports.kullanicilarListesi = function(req,res){
    Kullanici.find(function(err,results){
        res.render('kullanicilarListesi',{kullanicilar:results});
    });
};

module.exports.kullanicisil = function(req,res){

    Kullanici.findOneAndRemove({ad:req.params.ad},function(err,offer){
        if(err){
            console.log("Silme Hatası");
        }
        else{
            res.redirect('/login/kullanicilarListesi');
        }
    });
    //console.log(req.params.ad);

};