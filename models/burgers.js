    // * Inside `burger.js`, import `orm.js` into `burger.js`
    // * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
    // * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(thisVal, cb) {
    orm.insertOne("burgers", "burger_name", thisVal, function(res) {
      cb(res);
    });
  },
  updateOne: function(setValsObj, id, cb) {
    orm.updateOne("burgers", setValsObj, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
