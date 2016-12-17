const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/loveTest");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("we're connected!!!!!!!");
})

var userSchema = mongoose.Schema({ 
	username: { 
		type: String, 
		required: "User name is required", 
		trim: true 
	},
	email: {
	    type: String,
	    unique:true,
	    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
	},
	password: {
	    type: String,
	    trim: true,
	    required: "Password is Required",
	    validate: [
	      function(input) {
	        return input.length >= 6;
	      },
	      'Password should be longer.'
	    ]
  	},
  	userCreated: {
	    type: Date,
	    default: Date.now
	},
    lastUpdated: {
    	type: Date
    },

    swampQuestion: {
    	type: Number
    },
    swampScore:{
    	type: Number
    }

	// zhistory: {[
	// 	"Beach": {
	// 		question: Number,
	// 		score: Number
	// 	},
	// 	"Mansion": {
	// 		question: Number,
	// 		score: Number
	// 	},
	// 	"Swamp": {
	// 		question: 1,
	// 		score: 4
	// 	},
	// 	"Snow": {
	// 		question: Number,
	// 		score: Number
	// 	}
	// ]}
	
});	
	
	


module.exports = mongoose.model('User', userSchema);