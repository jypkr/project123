const express = require('express');
const router = express.Router();
const {Users} = require('../models');

router.get('/users', async (req, res) => {
    const listOfUsers = await Users.findall();
    res.json(listOfPosts);
});

router.post('/users', async (req, res) => {
    const user = req.body;
    await Users.create(user);
    res.json(user);
});

module.exports = router;