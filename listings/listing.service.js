const db = require('_helpers/db');
const Listing = db.Listing;

module.exports = {
    getAll,
    getById,
};

async function getAll() {
    return await Listing.find();
}

async function getById(id) {
    return await Listing.findById(id);
}