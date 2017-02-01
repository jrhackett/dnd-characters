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
                console.log('PUT Error: There was a problem retrieving: ' + err);
            } else {
                character.name = req.body.name;
                character.class = req.body.class;
                character.level = req.body.level;
                character.race = req.body.race;
                character.background = req.body.background;
                character.alignment = req.body.alignment;

                character.stats.strength.value = req.body.stats_strength_value;
                character.stats.strength.modifier = req.body.stats_strength_modifier;
                // character.stats.strength.saving_throw.proficient = req.body.stats_strength_saving_throw_proficient;
                // character.stats.strength.saving_throw.value = req.body.stats_strength_saving_throw_value;
                // character.stats.strength.athletics.proficient = req.body.stats_athletics_proficient;
                // character.stats.strength.athletics.value = req.body.stats_athletics_value;

                character.stats.dexterity.value = req.body.stats_dexterity_value;
                character.stats.dexterity.modifier = req.body.stats_dexterity_modifier;
                // character.stats.dexterity.saving_throw.proficient = req.body.stats_dexterity_saving_throw_proficient;
                // character.stats.dexterity.saving_throw.value = req.body.stats_dexterity_saving_throw_value;
                // character.stats.dexterity.sleight_of_hand.proficient = req.body.stats_dexterity_sleight_of_hand_proficient;
                // character.stats.dexterity.sleight_of_hand.value = req.body.stats_dexterity_sleight_of_hand_value;
                // character.stats.dexterity.stealth.proficient = req.body.stats_dexterity_stealth_proficient;
                // character.stats.dexterity.stealth.value = req.body.stats_dexterity_stealth_value;

                character.stats.constitution.value = req.body.stats_constitution_value;
                character.stats.constitution.modifier = req.body.stats_constitution_modifier;
                // character.stats.constitution.saving_throw.proficient = req.body.stats_constitution_saving_throw_proficient;
                // character.stats.constitution.saving_throw.value = req.body.stats_constitution_saving_throw_value;

                character.stats.wisdom.value = req.body.stats_wisdom_value;
                character.stats.wisdom.modifier = req.body.stats_wisdom_modifier;
                // character.stats.wisdom.saving_throw.proficient = req.body.stats_wisdom_saving_throw_proficient;
                // character.stats.wisdom.saving_throw.value = req.body.stats_wisdom_saving_throw_value;
                // character.stats.wisdom.animal_handling.proficient = req.body.stats_animal_handling_proficient;
                // character.stats.wisdom.animal_handling.value = req.body.stats_animal_handling_value;
                // character.stats.wisdom.insight.proficient = req.body.stats_insight_proficient;
                // character.stats.wisdom.insight.value = req.body.stats_insight_value;
                // character.stats.wisdom.medicine.proficient = req.body.stats_medicine_proficient;
                // character.stats.wisdom.medicine.value = req.body.stats_medicine_value;
                // character.stats.wisdom.perception.proficient = req.body.stats_perception_proficient;
                // character.stats.wisdom.perception.value = req.body.stats_perception_value;
                // character.stats.wisdom.survival.proficient = req.body.stats_survival_proficient;
                // character.stats.wisdom.survival.value = req.body.stats_survival_value;

                character.stats.intelligence.value = req.body.stats_intelligence_value;
                character.stats.intelligence.modifier = req.body.stats_intelligence_modifier;
                // character.stats.intelligence.saving_throw.proficient = req.body.stats_intelligence_saving_throw_proficient;
                // character.stats.intelligence.saving_throw.value = req.body.stats_intelligence_saving_throw_value;
                // character.stats.intelligence.arcana.proficient = req.body.stats_arcana_proficient;
                // character.stats.intelligence.arcana.value = req.body.stats_arcana_value;
                // character.stats.intelligence.history.proficient = req.body.stats_history_proficient;
                // character.stats.intelligence.history.value = req.body.stats_history_value;
                // character.stats.intelligence.investigation.proficient = req.body.stats_investigation_proficient;
                // character.stats.intelligence.investigation.value = req.body.stats_investigation_value;
                // character.stats.intelligence.nature.proficient = req.body.stats_nature_proficient;
                // character.stats.intelligence.nature.value = req.body.stats_nature_value;
                // character.stats.intelligence.religion.proficient = req.body.stats_religion_proficient;
                // character.stats.intelligence.religion.value = req.body.stats_religion_value;

                character.stats.charisma.value = req.body.stats_charisma_value;
                character.stats.charisma.modifier = req.body.stats_charisma_modifier;
                // character.stats.charisma.saving_throw.proficient = req.body.stats_charisma_saving_throw_proficient;
                // character.stats.charisma.saving_throw.value = req.body.stats_charisma_saving_throw_value;
                // character.stats.charisma.deception.proficient = req.body.stats_deception_proficient;
                // character.stats.charisma.deception.value = req.body.stats_deception_value;
                // character.stats.charisma.intimidation.proficient = req.body.stats_intimidation_proficient;
                // character.stats.charisma.intimidation.value = req.body.stats_intimidation_value;
                // character.stats.charisma.performance.proficient = req.body.stats_performance_proficient;
                // character.stats.charisma.performance.value = req.body.stats_performance_value;
                // character.stats.charisma.persuasion.proficient = req.body.stats_persuasion_proficient;
                // character.stats.charisma.persuasion.value = req.body.stats_persuasion_value;

                character.save(function(err) {
                    if(err) {
                        console.log('SAVE Error: ' + err);
                    } else {
                        res.render('character/show.ejs', {
                            user: req.user,
                            char: character
                        });
                    }
                });
            }
        });
    });

    // DELETE ========================

    app.delete('/character/:id/edit', function(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (err) {
                console.log('DELETE Error: There was a problem retrieving: ' + err);
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