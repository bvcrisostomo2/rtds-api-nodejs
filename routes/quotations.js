var express = require('express');
var router = express.Router();

var Quotation = require('../models/Quotation');

router.get('/:id?', function(req, res, next) {
  if(req.params.id) {
    Quotation.getQuotationById(req.params.id, function(err, rows){
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    })
  }else {
    Quotation.getAllQuotations(function(err, rows) {
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req,res,next){
  Quotation.addQuote(req.body,function(err,id){
    if(err)
    {
      res.json(err);
    }else {
      res.json(req.body);
    }
  });
 });

router.delete('/:id?',function(req,res,next){
  Quotation.deleteQuotation(req.params.id,function(err,count){
    if(err) {
      res.json(err);
    }else{
      res.json(count);
    }
  });
});

router.put('/:id?',function(req,res,next){
  Quotation.updateQuotation(req.params.id,req.body,function(err,rows){
     if(err) {
       res.json(err);
     }else {
       res.json(rows);
     }
   });
});



module.exports = router;
