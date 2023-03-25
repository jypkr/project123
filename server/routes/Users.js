const express = require('express');
const router = express.Router();
const {Users} = require('../models');

router.get('/users', async (req, res) => {
    const listOfUsers = await Users.findall();
    res.json(listOfUsers);
});

router.post('/users', async (req, res) => {
    const user = req.body;
    await Users.create(user);
    res.json(user);
});

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    await Users.destroy({
        where: { id }
    });

    res.json({ id });
});


module.exports = router;