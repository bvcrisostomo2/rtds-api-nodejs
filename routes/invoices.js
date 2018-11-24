var express = require('express');
var router = express.Router();

var Invoice = require('../models/Invoice');

router.get('/:id?', function(req, res, next) {
  if(req.params.id) {
    Invoice.getInvoiceById(req.params.id, function(err, rows){
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    })
  }else {
    Invoice.getAllInvoices(function(err, rows) {
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req,res,next){
  Invoice.addInvoice(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }else {
      res.json(req.body);
    }
  });
 });

router.delete('/:id?',function(req,res,next){
  Invoice.deleteInvoice(req.params.id,function(err,count){
    if(err) {
      res.json(err);
    }else{
      res.json(count);
    }
  });
});



module.exports = router;
