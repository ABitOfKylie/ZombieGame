const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
// const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const passport = require('passport');
// const expressValidator = require('express-validator')

// *******************
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


// use morgan to log requests to the console 
app.use(morgan('dev'));
app.use(cookieParser('secret string')); // session used to require cookie parser, after ver. 1.?, no longer required
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// *******************

// mongoose.connect("mongodb://localhost:27017/loveTest");
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log("we're connected!!!!!!!");
// })
var User = require('./models/user');

// *******************

require('./routes/routes.js')(app);

 app.get('/', function(req, res) {
            res.render('home');
        });
var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Good things happen on Port: " + port);
	console.log('Magic happens at http://localhost:' + port);

});