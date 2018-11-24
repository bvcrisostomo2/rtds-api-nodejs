var express = require('express');
var router = express.Router();

var Service = require('../models/Service');

router.get('/:id?', function(req, res, next) {
  if(req.params.id) {
    Service.getServiceById(req.params.id, function(err, rows){
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    })
  }else {
    Service.getAllServices(function(err, rows) {
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    });
  }
});

router.post('/', function(req,res,next){
  Service.addService(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }else {
      res.json(req.body);
    }
  });
 });

router.delete('/:id?',function(req,res,next){
  Service.deleteService(req.params.id,function(err,count){
    if(err) {
      res.json(err);
    }else{
      res.json(count);
    }
  });
});

router.put('/:id?',function(req,res,next){
  Service.updateService(req.params.id,req.body,function(err,rows){
     if(err) {
       res.json(err);
     }else {
       res.json(rows);
     }
   });
});



module.exports = router;
