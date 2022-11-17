'use strict';

const mongoose = require('mongoose'),
  Player = mongoose.model('Players');

exports.list_all_players = function(req, res) {
  Player.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.add_a_player = function(req, res) {
  var new_player = new Player(req.body);
  new_player.save(function(err, player) {
    if (err)
      res.send(err);
    res.status(201);
    res.json("success");
  });
};