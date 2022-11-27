'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  user: {
    type: String,
    required: 'enter user'
  },
  password: {
    type: String,
    required: 'enter password'
  },
});

module.exports = mongoose.model('Users', UserSchema);