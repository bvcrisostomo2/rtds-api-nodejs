var mysql = require('mysql');

var connection=mysql.createPool({
   host:'us-cdbr-iron-east-01.cleardb.net',
      user:'bac152dad8fb7e',
      password:'26b3e4f3',
      database:'heroku_6ab874f88a0cfdd'
});

// var connection=mysql.createPool({
//    host:'localhost',
//    user:'root',
//    password:'admin',
//    database:'sys'
// });   

module.exports = connection;
