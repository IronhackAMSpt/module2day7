const express = require('express');
const router  = express.Router();
const Message = require('../models/message');

/* GET home page */
router.get('/', (req, res, next) => {
  Message.find({})
    .then(messages => {
      //console.log(JSON.stringify(messages));
      res.render('allmessages', {allmsg: messages})
      //res.send(messages);
    })
    .catch(err => {
      if (err) console.log(err);
    })
  //res.render('message');
});

router.get('/single/:messageid', (req, res) => {
  Message.findOne({_id: req.params.messageid})
    .then(message => {
      console.log(message);
      res.render('singlemessage', message);
      res.send(message);
    })
    .catch(err => {
      if (err) console.log(err);
    })

})

module.exports = router;
