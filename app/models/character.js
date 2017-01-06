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
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Character', characterSchema);
