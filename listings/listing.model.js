const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	hostID: {
		type: String,
		// required: 'Host ID Required'
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	images: {
		type: Object,
		exterior: {
			type: String
		},
		kitchen: {
			type: String
		},
		commonArea: {
			type: String
		}
	},
	industry : { // Theme of industry
		type: String
	},
	amenities: {
		type: Object,
		businessUtilities: {
			type: Object,
			hasScanner: {
				type: Boolean
			},
			hasPrinter: {
				type: Boolean
			},
			hasShredder: {
				type: Boolean
			},
			hasFax: {
				type: Boolean
			},
			hasStationery: {
				type: Boolean
			},
			hasWhiteboard: {
				type: Boolean
			},
			internetSpeed: {
				type: Object,
				download: {
					type: Number
				},
				upload: {
					type: Number
				}
			}
		}
	},
	facilities: {
		type: Object,
		hasFirstAidKit: {
			type: Boolean
		},
		hasSecurityCameras: {
			type: Boolean
		},
		hasHeating: {
			type: Boolean
		},
		hasCooling: {
			type: Boolean
		},
		cleaningFrequency: {
			type: String
		},
		technology: {
			type: Array
		},
		exerciseEquipment: {
			type: Array
		},
		games: {
			type: Array
		},
		parking: {
			type: Array
		},
		bikeStorage: {
			type: Array
		},
		accessibility: {
			type: Array
		}
	},
	commonAreas: {
		type: Object,
		kitchen: {
			type: Array
		},
		bathroomCount: {
			type: Number
		},
		conferenceRoom: {
			type: Array
		},
		hasGymnasium: {
			type: Boolean
		}
	},
	rules: { // Restritions, allowances, etc.
		type: Object,
		allowsPets: {
			type: Boolean
		},
		allowsSmoking: {
			type: Boolean
		},
		allowsShoes: {
			type: Boolean
		},
		allowsEvents: {
			type: Boolean
		},
		allowsGuests: {
			type: Boolean
		}
	},
	location: {
		type: Object,
		coordinates: {
			type: Array,
			// required: 'Enter coordinates (Lon, Lat)'
		}
	},
	streetAdress: {
		type: String,
		// required: 'Street Address'
	},
	city: {
		type: String,
		// required: 'Enter City'
	},
	state: {
		type: String,
		// required: 'Enter XX State'
	},
	country: {
		type: String,
		// required: 'Enter Country'
	},
	workspaces: {
		type: Array,
		workspace: {
		type: Object,
			title: {
				type: String,
				required: 'Title Required'
			},
			description: {
				type: String
			},
			privacy: {
				type: String
			},
			availability: {
				type: Object,
				startDay: {
					type: String
				},
				endDay: {
					type: String
				},
				startTime: {
					type: String
				},
				endTime: {
					type: String
				}
			},
			rate: {
				type: Object,
				monthly: {
					type: Number
				},
				weekly: {
					type: Number
				},
				daily: {
					type: Number
				},
				hourly: {
					type: Number
				}
			},
			desk: {
				type: Object,
				width: {
					type: Number
				},
				depth: {
					type: Number
				},
				heightMax: {
					type: Number
				},
				heightMin: {
					type: Number
				}
			},
			windowDirection: {
				type: String
			},
			images: {
				type: Object,
				room: {
					type: String
				},
				desk: {
					type: String
				},
				view: {
					type: String
				}
			},
			room: {
				type: Object,
				width: {
					type: Number
				},
				depth: {
					type: Number
				},
				height: {
					type: Number
				},
				storage: {
					type: Array
				},
				floorNumber: {
					type: Number
				},
			},
			visitCount: {
				type: Number
			}
		}
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

module.exports = mongoose.model('Listing', schema);