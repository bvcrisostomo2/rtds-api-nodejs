var mysql = require('mysql');

// var connection=mysql.createPool({
//    host:'us-cdbr-iron-east-05.cleardb.net',
//    user:'b389c3aa677910',
//    password:'b015c3a5',
//    database:'heroku_c1de6b675ba74c4'
// });

var connection=mysql.createPool({
   host:'localhost',
   user:'root',
   password:'admin',
   database:'sys'
});   

module.exports = connection;
