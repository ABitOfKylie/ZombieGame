var User = require('../models/user');
var express = require('express');
var bcrypt = require('bcrypt');
var zCollection = require('../models/zombiescript')
var salt = 10;
module.exports = function(app) {
        app.get('/', function(req, res) {
            res.render('home');
        });

        app.get('/signup', function(req, res) {
            res.render('signup');
        });


         app.post('/signup', function(req, res) {
            var user = new User({username: req.body.username, email: req.body.email});
            bcrypt.genSalt(salt, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    user.password = hash;
                    user.save(function(err, response) {
                        if (err) throw err;
                        console.log('We saved: ', res);
                        res.redirect('/zChoice');
                    });
                });
            });
        });

    

        app.get('/signin', function(req, res) {
            res.render('signin');
        });

        app.post('/signin', function(req, res) {
            User.findOne({email: req.body.email}, function(err, result) {
                console.log(err, result);
                if (result === null) {
                    return res.redirect('/signin');
                }
                else{
                    bcrypt.compare(req.body.password, result.password, function(err, result) {
                        console.log(result);
                        if(err) res.redirect('/signin');

                        return res.redirect('/zChoice');
                    })
                }
            })
        });


        app.get('/end', function(req, res) {
            res.render('end');

        });


        app.get("/zChoice", function(req, res) {
            res.render('zChoice');
        });
        


		app.get("/swamp", function( req, res){
			res.render('swamp',{
				Question: zCollection.zombie1.questions[0].question,
                answer1: zCollection.zombie1.questions[0].responses[0].response,
                answer2: zCollection.zombie1.questions[0].responses[1].response,
                answer3: zCollection.zombie1.questions[0].responses[2].response,
				answer4: zCollection.zombie1.questions[0].responses[3].response
			});
		}); 

        app.get('/questionFill', function(req, res){
            User.find(swampQuestion, callback)


        });

        app.get("/snow", function(req, res) {
            res.render('snow',{
                Question:zCollection.zombie2.questions[0].question,
                answer1: zCollection.zombie2.questions[0].responses[0].response,
                answer2: zCollection.zombie2.questions[0].responses[1].response,
                answer3: zCollection.zombie2.questions[0].responses[2].response,
                answer4: zCollection.zombie2.questions[0].responses[3].response

            });
        
        });

        app.get("/mansion", function(req, res) {
            res.render('mansion',{
                Question: zCollection.zombie3.questions[0].question,
                answer1: zCollection.zombie3.questions[0].responses[0].response,
                answer2: zCollection.zombie3.questions[0].responses[1].response,
                answer3: zCollection.zombie3.questions[0].responses[2].response,
                answer4: zCollection.zombie3.questions[0].responses[3].response

            });
        });
		app.get("/beach", function(req, res) {
		    res.render('beach',{
                Question: zCollection.zombie4.questions[0].question,
                answer1: zCollection.zombie4.questions[0].responses[0].response,
                answer2: zCollection.zombie4.questions[0].responses[1].response,
                answer3: zCollection.zombie4.questions[0].responses[2].response,
                answer4: zCollection.zombie4.questions[0].responses[3].response

            });
		});

}; //this is final closing bracket -
