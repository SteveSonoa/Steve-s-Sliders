var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    // Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.
    db.Burger.findAll().then(function(results) {
      var burgerObject = {
        burgers: results
      };
      res.render("index", burgerObject);
    });
  });

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    // Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.
    db.Burger.findAll().then(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
    
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      res.end();
    });
    
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/burgers/:id", function(req, res) {
    
    db.Burger.update({
      devoured: true
    }, {
      where: { id: req.params.id }
    
    }).then(function(results) {
      res.end();
    });
    
  });
};
