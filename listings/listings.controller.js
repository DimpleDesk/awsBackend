const express = require('express');
const router = express.Router();
const ListingService = require('./listing.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}