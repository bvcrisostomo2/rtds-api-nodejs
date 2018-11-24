var db = require('../dbconnection');
const uuidv4 = require('uuid/v4');
var moment = require('moment');

var Quotation = {
  // all Quotations
  getAllQuotations: function(callback) {
    return db.query(`SELECT * FROM quotation`, callback);
  },
  getQuotationById: function(id, callback) {
    return db.query('SELECT * FROM Quotation WHERE quote_id=?', [id], callback);
  },
  addQuote: function(Quotation, callback){
    var generated_id = uuidv4();
    console.log(generated_id);
      this.addQuotation(Quotation, generated_id, callback);
      this.addQuotationDetails(generated_id, Quotation, function(err, count){
        if (err){
            console.log(err);
        }
    });
  },
  addQuotation: function(Quotation, generated_id, callback) {
    var current_time = new Date();
    current_time.setDate(current_time.getDate() + 7)
    var quote_validity = current_time;
    return db.query('INSERT INTO Quotation(client_id, quote_validity, is_package, quote_status, package_id, generated_id) VALUES(?, ?, ?, ?, ?, ?)',
                                        [Quotation.client_id, quote_validity, Quotation.is_package, Quotation.quote_status, Quotation.package_id, generated_id], callback);
  },
  deleteQuotation: function(id, callback) {
    return db.query("DELETE FROM Quotation where generated_id=?", [id], callback);
  },
  updateQuotation: function(id, Quotation, callback){
    var current_time = Date();
    current_time.setDate(current_time.getDate() + 7)
    var quote_validity = current_time;
    return db.query("UPDATE Quotation SET quote_status=?, quote_validity=? where generated_id=?", 
                                      [Quotation.quote_status, quote_validity], callback);
  },
  addQuotationDetails: function(id, Quotation, callback){
    console.log(id);
    var generated_id = id;
    var count = Quotation.quotation_details.length;
    for (var x=0; x < count; x++){
        // return db.query('INSERT INTO quotation_detail(description, qty, unit_price, service_id, quote_id) VALUES(?,?,?,?,?)',
        //             [Quotation.quotation_details[x].description, Quotation.quotation_details[x].qty, Quotation.quotation_details[x].unit_price, Quotation.quotation_details[x].service_id, generated_id], callback)
        this.addQuotationDetail(generated_id, Quotation, x, function(err, count){
        if (err){
            console.log(err);
        }
        });
        console.log("current=" + x);
        console.log("count = " + count);
    }
  },
  addQuotationDetail: function(generated_id, Quotation, x, callback){
    console.log(generated_id);
    return db.query('INSERT INTO quotation_detail(description, qty, unit_price, service_id, quote_id) VALUES(?,?,?,?,?)',
                                                [Quotation.quotation_details[x].description, Quotation.quotation_details[x].qty, Quotation.quotation_details[x].unit_price, Quotation.quotation_details[x].service_id, generated_id], callback)
  }
};

module.exports = Quotation;
