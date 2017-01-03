// load the things we need
var mongoose = require('mongoose');
var User = require('./user');

var characterSchema = mongoose.Schema({
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Character', characterSchema);
