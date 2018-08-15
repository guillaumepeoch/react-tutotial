const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

const carSchema = mongoose.Schema({
  brand:String,
  model:String,
  year:Number,
  avail:Boolean
});
const Car = mongoose.model('Car',carSchema);

const voiture = new Car({
  brand:'Ford',
  model:'Focus',
  year:'2015',
  avail:true
});

voiture.save(function(err,doc){
  if(err){
    return console.error(err);
  }
  console.log(doc);
})


// EXPRESS
/*
const express = require('express');
const app = express();

app.get('/',function(req,res){
  res.send('Yoyo!');
});

const port = process.env.PORT || 3001;
app.listen(port);
*/
