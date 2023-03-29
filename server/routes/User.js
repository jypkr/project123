const express = require('express');
const router = express.Router(); // Create a router object
const { Users } = require('../models');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/users', async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});

router.post('/users', async (req, res) => {
    const user = req.body;
    await Users.create(user);

    res.json(user);
});

module.exports = router;
