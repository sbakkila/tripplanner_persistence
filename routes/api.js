var express = require('express');
var router = express.Router();
var db = require('../models');
var Hotel = db.model('hotel');
var Activity = db.model('activity');
var Restaurant = db.model('restaurant');
var Day = db.model('day');
var daysRouter = require('./days.js');

router.get('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurants) {
    res.json(restaurants);
  })
  .catch(next);
});

router.get('/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activities) {
    res.json(activities);
  })
  .catch(next);
});

router.get('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels);
  })
  .catch(next);
});

router.post('/newAttraction', (req, res, next) => {
  var type = req.params.type;
  if(type === 'hotel'){
    days_hotels.create()
  } else if(type === 'restaurant'){

  } else if (type === 'activity'){

  }
})

router.use('/days', daysRouter);

module.exports = router;
