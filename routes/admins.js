var express = require('express');
var router = express.Router();

var Admin = require('../models/Admin');
//get All and get id
router.get('/:id?', function(req, res, next) {
  if(req.params.id) {
    Admin.getAdminById(req.params.id, function(err, rows){
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    })
  }else {
    Admin.getAllAdmin(function(err, rows) {
      if(err) {
        res.json(err);
      }else {
        res.json(rows);
      }
    });
  }
});
//Delete
router.delete('/:id?', function(req, res, next) {
    if(req.params.id) {
      Admin.deleteAdmin(req.params.id, function(err, rows){
        if(err) {
          res.json(err);
        }else {
          res.json(rows);
        }
      })
    }
  });

router.post('/', function(req, res, next) {
    Admin.addAdmin(req.body, function(err, rows){
        if(err) {
          res.json(err);
        }else {
          res.json(req.body);
        }
    })
  });

//update
router.put('/:id?', function(req, res, next) {
      Admin.updateAdmin(req.params.id, req.body, function(err, rows){
        if(err) {
          res.json(err);
        }else {
          res.json(rows);
        }
      })
  });
module.exports = router;
