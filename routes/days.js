var express = require('express');
var router = express.Router();
var db = require('../models');
var Hotel = db.model('hotel');
var Activity = db.model('activity');
var Restaurant = db.model('restaurant');
var Day = db.model('day');

// index
router.get('/', (req, res, next) => {
  Day.findAll({ include: [Restaurant, Activity, Hotel]})
  .then(function(days){
    res.json(days);
  })
  .catch(next);
})

// read
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  Day.findOne({
    where: {id}
  })
  .then(function(day){
    res.json(day);
  })
  .catch(next);
})

//destroy
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  Day.findOne({
    where: {id}
  })
  .then(function(day){
    return day.destroy();
  })
  .then(function(){
    console.log('record successfully destroyed');
  })
  .catch(next);
})

// create
router.post('/', (req, res, next) => {
  console.log('day hit')
  Day.create(Day.findMax() + 1);
  res.json({})
})

module.exports = router;
