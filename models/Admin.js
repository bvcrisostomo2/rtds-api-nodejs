var db = require('../dbconnection');
var passwordHash = require('password-hash');
const uuidv4 = require('uuid/v4');

var Admin = {
  // all products
  getAllAdmin: function(callback) {
    return db.query(`SELECT * FROM admin`, callback);
  },
  getAdminById: function(id, callback) {
    return db.query('SELECT * FROM admin WHERE public_id=?', [id], callback);
  },
  
  addAdmin: function(Admin,callback) {
    var hashedPassword = passwordHash.generate(Admin.password);
    var public_id = uuidv4();
    return db.query('INSERT INTO admin(admin_firstname, admin_lastname, admin_email, password, public_id) VALUES(?, ?, ?, ?, ?)'
                                      ,[Admin.firstname, Admin.lastname, Admin.email, hashedPassword, public_id], callback);
  },
  deleteAdmin: function(id, callback) {
    return db.query("DELETE FROM admin where public_id=?", [id], callback);
  },
  updateAdmin: function(id, Admin, callback){
    if(Admin.password != null){
      var hashedPassword = passwordHash.generate(Admin.password);
    }
    return db.query("UPDATE admin SET admin_firstname=?, admin_lastname=?, admin_email=?, password=? where public_id=?", [Admin.firstname,Admin.lastname,Admin.email, Admin.password, id], callback);
  }
};

module.exports = Admin;
