var envFile = __dirname + '/env.json';
var jsonfile = require('jsonfile');

var envVars = jsonfile.readFileSync(envFile);

module.exports = {
    database_url: envVars["database_url"],
    session_secret: envVars["session_secret"],
    facebookAuth: envVars["facebookAuth"],
    twitterAuth: envVars["twitterAuth"],
    googleAuth: envVars["googleAuth"]   
};