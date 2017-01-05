// load the things we need
var mongoose = require('mongoose');
var User = require('./user');

var characterSchema = mongoose.Schema({
    name: String,
    class: String,
    level: String,
    race: String,
    background: String,
    alignment: String,
    stats: {
    	strength: {
    		value: String,
    		modifier: String
    	},
    	dexterity: {
    		value: String,
    		modifier: String
    	},
    	constitution: {
    		value: String,
    		modifier: String
    	},
    	wisdom: {
    		value: String,
    		modifier: String
    	},
    	intelligence: {
    		value: String,
    		modifier: String
    	},
    	charisma: {
    		value: String,
    		modifier: String
    	}
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Character', characterSchema);
