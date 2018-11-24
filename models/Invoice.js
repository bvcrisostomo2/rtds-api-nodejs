var db = require('../dbconnection');
var passwordHash = require('password-hash');
const uuidv4 = require('uuid/v4');

var Invoice = {
  // all Invoice
  getAllInvoices: function(callback) {
    return db.query(`SELECT * FROM invoice`, callback);
  },
  getInvoiceById: function(id, callback) {
    return db.query('SELECT * FROM invoice WHERE invoice_id=?', [id], callback);
  },
  addInvoice: function(Invoice, callback) {
    return db.query('INSERT INTO invoice(invoice_no, date_created, quote_id) VALUES(?, ?, ?)',
                                        [Invoice.invoice_no,Invoice.date_created,Invoice.quote_id], callback);
  },
  deleteInvoice: function(id, callback) {
    return db.query("DELETE FROM invoice where invoice_id=?", [id], callback);
  },
};

module.exports = Invoice;
