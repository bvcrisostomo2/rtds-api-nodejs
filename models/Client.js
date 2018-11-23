var db = require('../dbconnection');
var passwordHash = require('password-hash');
const uuidv4 = require('uuid/v4');

var Client = {
  // all Clients
  getAllClients: function(callback) {
    return db.query(`SELECT * FROM client`, callback);
  },
  getClientById: function(id, callback) {
    return db.query('SELECT * FROM client WHERE public_id=?', [id], callback);
  },
  addClient: function(Client, callback) {
    var hashedPassword = passwordHash.generate(Client.password);
    var public_id = uuidv4();
    return db.query('INSERT INTO client(client_firstname, client_lastname, client_email, client_landline, client_mobile, client_fax, client_address, public_id, password, admin) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                                        [Client.firstname, Client.lastname, Client.email, Client.landline, Client.mobile, Client.fax, Client.address, public_id, hashedPassword, false], callback);
  },
  deleteClient: function(id, callback) {
    return db.query("DELETE FROM client where public_id=?", [id], callback);
  },
  updateClient: function(id, Client, callback){
    return db.query("UPDATE client SET client_landline=?, client_email=?, client_mobile=?, client_fax=?, client_address=? where public_id=?", 
                                      [Client.landline, Client.email, Client.mobile, Client.fax, Client.address, id], callback);
  }
};

module.exports = Client;
