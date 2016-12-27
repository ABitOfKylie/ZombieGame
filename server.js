const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
// const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const passport = require('passport');
// const validator = require('express-validator')
// const routes = require('./routes/routes.js')(app);
// *******************
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


// use morgan to log requests to the console 
app.use(morgan('dev'));
app.use(cookieParser('secret string')); // session used to require cookie parser, after ver. 1.?, no longer required
app.use(bodyParser.urlencoded({extended:true})); // many examples: pluralsight incl. use false
app.use(bodyParser.json());
// app.use(validator());
// app.use('/', routes);
// *******************DB Connection Set Up // how do you do both/either local host and heroku host

mongoose.connect("mongodb://localhost:27017/loveTest");
var db = mongoose.connection;
console.log(db, "hey you, over here");
console.log(db);

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log("MongoDB is connected!!!!!!!");
})

var User = require('./models/user');

// *******************  routes

require('./routes/routes.js')(app);

 // app.get('/', function(req, res) {
 //            res.render('home');
 //        });

 //******************** listener
var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Good things happen on Port: " + port);
	console.log('Magic happens at http://localhost:' + port);

});