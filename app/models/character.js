// load the things we need
var mongoose = require('mongoose');
var User = require('./user');
var Spell = require('./spell');
var Item = require('./item');

var characterSchema = mongoose.Schema({
    name: { type: String, default: '' },
    class: { type: String, default: '' },
    level: { type: String, default: '' },
    race: { type: String, default: '' },
    background: { type: String, default: '' },
    alignment: { type: String, default: '' },
    stats: {
        armor_class: { type: Number, default: 0 },
        unarmored_armor_class: { type: Number, default: 0 },
        health: {
            max: { type: Number, default: 0 },
            temporary: { type: Number, default: 0 },
            current: { type: Number, default: 0 }
        },
        movement: { type: String, default: '0ft' },
        hit_dice: {
            max_d6: { type: Number, default: 0 },
            max_d8: { type: Number, default: 0 },
            max_d10: { type: Number, default: 0 },
            max_d12: { type: Number, default: 0 },
            current_d6: { type: Number, default: 0 },
            current_d8: { type: Number, default: 0 },
            current_d10: { type: Number, default: 0 },
            current_d12: { type: Number, default: 0 }
        },
        death_save: {
            failures: { type: Number, default: 0 },
            successes: { type: Number, default: 0 }
        },
        conditions: { type: String, default: '' },
        proficiency_bonus: { type: String, default: '+0' },
    	strength: {
    		value: { type: Number, default: 10 },
    		modifier: { type: String, default: '+0' },
    		saving_throw: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		athletics: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		}
    	},
    	dexterity: {
    		value: { type: Number, default: 10 },
    		modifier: { type: String, default: '+0' },
    		saving_throw: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		acrobatics: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		sleight_of_hand: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		stealth: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		}
    	},
    	constitution: {
    		value: { type: Number, default: 10 },
    		modifier: { type: String, default: '+0' },
    		saving_throw: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    	},
    	wisdom: {
    		value: { type: Number, default: 10 },
    		modifier: { type: String, default: '+0' },
    		saving_throw: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		animal_handling: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		insight: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		medicine: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		perception: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		survival: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		}
    	},
    	intelligence: {
    		value: { type: Number, default: 10 },
    		modifier: { type: String, default: '+0' },
    		saving_throw: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		arcana: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		history: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		investigation: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		nature: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		religion: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		}
    	},
    	charisma: {
    		value: { type: Number, default: 10 },
    		modifier: { type: String, default: '+0' },
    		saving_throw: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		deception: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		intimidation: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		performance: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		},
    		persuasion: {
    			proficient: { type: Boolean, default: false },
    			modifier: { type: String, default: '+0' }
    		}
    	},

    },
    items: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Item' } ],
    spells: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Spell' } ],
    feats: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Feat' } ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Character', characterSchema);
