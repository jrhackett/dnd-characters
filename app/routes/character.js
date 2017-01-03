var User = require('../models/user');
var Character = require('../models/character');

module.exports = function(app, passport) {

    // =============================================================================
    // CHARACTER ROUTES ============================================================
    // =============================================================================

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
    app.put('/character/:id/edit', function(req, res) {

    });

    // DELETE ========================
    app.get('/character/:id/delete', function(req, res) {
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