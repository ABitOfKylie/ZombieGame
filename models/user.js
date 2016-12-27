const mongoose = require('mongoose');

var userSchema = mongoose.Schema({ 
	username: { 
		type: String, 
		// required: "User name is required", 
		required: true
		// trim: true 
	},
	email: {
	    type: String,
	    unique:true
	    // match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
	},
	password: {
	    type: String,
	    // trim: true,
	    required:true
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
    },
	snowQuestion: {
		type:Number	
	},	
	snowScore: {
		type: Number
	},
	mansionQuestion: {
		type:Number	
	},	
	mansionScore: {
		type: Number
	},
	BeachQuestion: {
		type:Number	
	},	
	BeachScore: {
		type: Number
	},	
});	
	
	


module.exports = mongoose.model('User', userSchema);