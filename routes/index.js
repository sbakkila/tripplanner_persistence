var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var apiRouter = require('./api.js');


router.use('/api', apiRouter);

router.get('/', function(req, res, next) {
  res.render('index');
});

// router.post('/newhotel', function(req, res, next) {
//   Hotel.create(req.body)
//   .then(function(hotel) {
//     res.json(hotel)
//   })
//   .catch(next);
// });

module.exports = router;
