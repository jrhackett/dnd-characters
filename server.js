// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
	exphbs = require('express-handlebars'),
	app = express(),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose'),
	passport = require('passport'),
	flash = require('connect-flash'),
	path = require('path'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	methodOverride = require('method-override'),
	config = require('./config.js')

// configuration ===============================================================
mongoose.connect(config.database_url) // connect to our database

require('./passport')(passport, config) // pass passport for configuration

// set up our express application
app.use(morgan('dev')) // log every request to the console
app.use(cookieParser()) // read cookies (needed for auth)
app.use(bodyParser()) // get information from html forms
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/app'))

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// required for passport
app.use(session({ secret: config.session_secret })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes/index.js')(app, passport) // load our routes and pass in our app and fully configured passport
require('./app/routes/character.js')(app, passport)

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)