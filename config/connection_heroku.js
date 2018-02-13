// * Inside the `connection.js` file, setup the code to connect Node to MySQL.
// * Export the connection.

var mysql = require('mysql');

var connection = mysql.createConnection({
	host:"us-cdbr-iron-east-05.cleardb.net",
	port:3306,
	user:"bc7dec658ddb05",
	password:"a48d7172",
	database:"heroku_49e09b6ea2ed2ef"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
