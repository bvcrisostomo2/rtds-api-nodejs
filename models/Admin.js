var db = require('../dbconnection');

var Admin = {
  // all products
  getAllAdmin: function(callback) {
    return db.query(`SELECT * FROM admin`, callback);
  },
  getAdminById: function(id, callback) {
    return db.query('SELECT * FROM admin WHERE admin_id=?', [id], callback);
  },
  
  addAdmin: function(Admin,callback) {
    return db.query('INSERT INTO admin(admin_firstname, admin_lastname, admin_email, admin, password) VALUES(?, ?, ?, ?, ?)'
                                      ,[Admin.admin_firstname,Admin.admin_lastname,Admin.admin_email,Admin.admin,Admin.password], callback);
    // return db.query('INSERT INTO admin(admin_firstname) VALUES(?)',[Admin.admin_firstname], callback);
  },
  deleteAdmin: function(id, callback) {
    return db.query("DELETE FROM admin where admin_id=?", [id], callback);
  },
  updateAdmin: function(id, Admin, callback){
    return db.query("UPDATE admin SET admin_firstname=?, admin_lastname=?, admin_email=?, admin=?, password=? where admin_id=?", [Admin.admin_firstname,Admin.admin_lastname,Admin.admin_email,Admin.admin,Admin.password, id], callback);
  }
};

module.exports = Admin;
