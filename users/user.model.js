const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { 
			type: String, 
			unique: true, 
			required: true 
		},
		hash: { 
			type: String, 
			required: true 
		},
    given_name: { 
			type: String, 
			required: true 
		},
		family_name: { 
			type: String, 
			required: true 
		},
		picture: { 
			type: String, 
			required: false 
		},
		title: { 
			type: String, 
			required: false 
		},
		field: { 
			type: String, 
			required: false 
		},
		industry: { 
			type: String, 
			required: false 
		},
		bookmarked: { 
			type: Array, 
			required: false 
		},
		contacted: { 
			type: Array, 
			required: false 
		},
		createdDate: { 
			type: Date, 
			default: Date.now 
		}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);