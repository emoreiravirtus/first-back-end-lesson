'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlayerSchema = new Schema({
  name: {
    type: String,
    required: 'enter name'
  },
  overall: {
    type: Number,
    required: 'enter overall'
  },
  nacionality: {
    type: String,
    required: 'enter nacionality'
  },
  club_id: {
    type: Number,
    required: 'enter club_id'
  },
  main_position: {
    type: String,
    required: 'enter main_position'
  },
  photo: {
    type: String
  },
});

module.exports = mongoose.model('Players', PlayerSchema);