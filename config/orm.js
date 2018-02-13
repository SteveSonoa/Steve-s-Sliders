// * Import (require) `connection.js` into `orm.js`
// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
	//   * `selectAll()` 
	//   * `insertOne()` 
	//   * `updateOne()` 
// * Export the ORM object in `module.exports`.

var mysql = require('mysql');
var connection = require('./connection.js');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
	// tableName is a string
	selectAll: function(tableName, cb) {
		let q = "SELECT * FROM " + tableName + ";";

		// Load the SQL
		connection.query(q, function(err2, results) {
			if (err2) throw err2;
			// return the resulting data
			cb(results);
		});
	},

	// tableName, thisCol, and thisValue are strings
	insertOne: function(tableName, thisCol, thisValue, cb) {
		let q = "INSERT INTO " + tableName + " (" + thisCol + ") VALUES ('"+ thisValue +"');";

		// Load the SQL
		connection.query(q, function(err2, results) {
			if (err2) throw err2;
			cb(results);
		});
	},

	// tableName & whereValue are strings; setValues is an object.
	updateOne: function(tableName, setValues, whereValue, cb) {
		// Using objToSql above turns setValues into a string; whereValue is already a string of "key=value"
		let q = "UPDATE " + tableName + " SET " + objToSql(setValues) + " WHERE " + whereValue + ";" ;

		// Load the SQL
		connection.query(q, [setValues, whereValue], function(err2, results) {
			if (err2) throw err2;
			cb(results);
		});
	}
};

module.exports = orm;