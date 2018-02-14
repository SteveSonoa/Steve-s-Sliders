# An Introduction to Steve's Sequelized Sliders
ORDER UP! Create your own custom slider, and we'll serve it up! If it's popular enough, we'll add it to our regular menu! This app uses the Sequelize node package.

### How does it work?
This full stack Node JS app uses a basic MySQL database, Express for the server, and Handlebars as its template engine. It is currently deployed on Heroku. GET, POST, and PUT calls are handled by Sequelize. Updates are made by Ajax calls to the specified POST and PUT routes (found at [https://steves-sliders.herokuapp.com/api](https://steves-sliders.herokuapp.com/api)).

The page is styled with Bootstrap, Google Fonts, and additional custom CSS. Handlebars creates the front end using my designed HTML code with light jQuery for the form handling.

### Who will use this?
Small businesses who want an online menu would use this to show customers what is available to each and possibly call in orders. The updated Burger Of The Day would show the daily specials and be easily added to the regular menu if desired.

### What is the goal?
The goal is to update the prior Full Stack Node JS app to use Sequelize instead of vanilla MySQL. The requirements asked for a burger name to be added, then the user would click a button to "devour" the burger, sending it to the right side of the screen. I didn't think that made sense as a story, so I used the idea of a special menu vs. a regular daily menu instead. The functionality is the same.

# Deployment
Deployment on a node server is required. After uploading the files, you will need to create your own MySQL database and updated the config/connection.js file with your database login credentials.

# Screen Capture
![Screenshot](http://www.fullstacksteve.com/wp-content/uploads/2018/02/burgers-image.png)

# Credits
Steve Marshall, sole developer
* [Steve's Online Portfolio](http://fullstacksteve.com/)
* [Steve's LinkedIn Profile](https://www.linkedin.com/in/sonoa/)