// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var itemSchema = mongoose.Schema({

});


// create the model for users and expose it to our app
module.exports = mongoose.model('Item', itemSchema);
