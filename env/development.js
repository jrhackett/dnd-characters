var envFile = __dirname + '/env.json';
var jsonfile = require('jsonfile');

var envVars = jsonfile.readFileSync(envFile);

module.exports = {
    database_url: envVars["database_url"],
    facebookAuth: envVars["facebookAuth"],
    twitterAuth: envVars["twitterAuth"],
    googleAuth: envVars["googleAuth"]   
};