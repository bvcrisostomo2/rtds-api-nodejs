var db = require('../dbconnection');
var passwordHash = require('password-hash');
const uuidv4 = require('uuid/v4');

var Service = {
  // all Services
  getAllServices: function(callback) {
    return db.query(`SELECT * FROM service`, callback);
  },
  getServiceById: function(id, callback) {
    return db.query('SELECT * FROM service WHERE service_id=?', [id], callback);
  },
  addService: function(Service, callback) {
    return db.query('INSERT INTO service(service_name, service_cat, default_price) VALUES(?, ?, ?)',
                                        [Service.service_name,Service.service_cat,Service.default_price], callback);
  },
  deleteService: function(id, callback) {
    return db.query("DELETE FROM service where public_id=?", [id], callback);
  },
  updateService: function(id, Service, callback){
    return db.query("UPDATE client SET service_name=?, service_cat=?, default_price=?, where service_id=?", 
                                      [Service.service_name,Service.service_cat,Service.default_price], callback);
  }
};

module.exports = Service;
