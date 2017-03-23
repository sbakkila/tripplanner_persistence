var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
},
  {
    classMethods: {
      findHighest: function(){
        var days = Day.findAll();
        var max = 0;
        days.forEach(function(ele){
          if(ele.number > max){
            max = ele.number;
          }
        });
        return max;
      }
    }
  }
);

module.exports = Day;
