const express = require('express');
const router  = express.Router();

const Topic = require('../models/topic');

router.get('/add', (req, res) => {
    res.render('add-topic');
});

router.post('/add', (req, res) => {
    Topic.create(req.body)
        .then(topic => {
            res.send(topic);
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;