const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get('/posts', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.post('/posts', async (req, res) => {
    const post = req.body;
    await Posts.create(post);

    res.json(post);
});

router.put('/posts/:id', async (req, res) => {
    const id = req.params.id;
    const { title, postText } = req.body;
    await Posts.update({ title, postText }, {
        where: { id }
    });

    res.json({ id, title, postText });
});

router.delete('/posts/:id', async (req, res) => {
    const id = req.params.id;
    await Posts.destroy({
        where: { id }
    });

    res.json({ id });
});


module.exports = router;