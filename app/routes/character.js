var User = require('../models/user');
var Character = require('../models/character');

module.exports = function(app, passport) {

    // =============================================================================
    // CHARACTER ROUTES ============================================================
    // =============================================================================

    // INDEX ========================
    // show all characters for that user
    app.get('/character/all', function(req, res) {
        Character.find({user:req.user})
            .exec(function (err, characters) {
              if (err) return console.log(err);
                res.render('character/index.ejs', {
                    user : req.user,
                    char : characters
                });
            });
    });

    // CREATE ========================
    // show the new character form
    app.get('/character/new', function(req, res) {
        res.render('character/form.ejs', {
            user: req.user
        });
    });

    // process the new character form
    app.post('/character/new', function(req, res) {
        var newCharacter = Character();
        newCharacter.name = req.body.name;
        newCharacter.user = req.user;
        req.user.characters.push(newCharacter);
        newCharacter.save(function(err) {
            req.user.save(function(err) {
                res.redirect('/');
            });
        });
    });

    // READ ========================
    app.get('/character/:id', function(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                res.render('character/show.ejs', {
                    user: req.user,
                    char: character
                });
            }
        });
    });

    // UPDATE ========================
    // show the edit view
    app.get('/character/:id/edit', function(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                res.render('character/edit.ejs', {
                    user: req.user,
                    char: character
                });
            }
        });
    });

    //process the character edits
    app.put('/character/:id/edit', function(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                character.name = req.body.name;
                character.class = req.body.class;
                character.save(function(err) {
                    res.render('character/show.ejs', {
                        user: req.user,
                        char: character
                    });
                });
            }
        });
    });

    // DELETE ========================

    app.delete('/character/:id/edit', function(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                character.remove(function(err, character) {
                    if(err) {
                        console.log('DELETE Error: There was a problem deleting: ' + err);
                    } else {
                        res.redirect('/');
                    }
                });
            }
        });
    });
};