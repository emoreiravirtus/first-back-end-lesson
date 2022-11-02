'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'enter firstName'
  },
  lastName: {
    type: String,
    required: 'enter lastName'
  },
  email: {
    type: String,
    required: 'enter email'
  },
  favoriteColor: {
    type: String,
    required: 'Enter favoriteColor'
  },
  birthday: {
    type: String,
    required: 'Enter birthday'
  },
});

module.exports = mongoose.model('Contacts', ContactSchema);