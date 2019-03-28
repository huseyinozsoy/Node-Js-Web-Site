var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kullanciSchema = new Schema({
  ad:  String,
  soyad: String,
  email: String,
  kullaniciAdi:{type:String,required:true,unique:true},
  sifre: {type:String, required:true}
},{collection:"kullanicilar"});

var Kullanici = mongoose.model("Kullanici",kullanciSchema);

module.exports = Kullanici;