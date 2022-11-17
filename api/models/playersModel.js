'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlayerSchema = new Schema({
  name: {
    type: String,
    required: 'enter firstName'
  },
  overall: {
    type: Number,
    required: 'enter lastName'
  },
  nacionality: {
    type: String,
    required: 'enter email'
  },
  club_id: {
    type: Number,
    required: 'Enter favoriteColor'
  },
  main_position: {
    type: String,
    required: 'Enter birthday'
  },
  photo: {
    type: String
  },
});

module.exports = mongoose.model('Players', PlayerSchema);