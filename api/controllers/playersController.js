'use strict';
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose'),
Player = mongoose.model('Players');

function validateJWT (req, res) {
  return new Promise((resolve, reject) => {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) reject('Invalid Credentials');
  
      resolve(decoded.userId);
    })
  })
}

exports.list_all_players = function(req, res) {
  validateJWT(req, res)
  .then(user => {
    Player.find({}, function(err, contact) {
      if (err)
        res.send(err);
      res.json(contact);
    });
  })
  .catch(err => res.send(err));
};

exports.add_a_player = function(req, res) {
  validateJWT(req, res)
  .then(user => {
    var new_player = new Player(req.body);

    if(!new_player.photo) {
      new_player.photo = "data:image/webp;base64,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";
    }

    new_player.save(function(err, player) {
      if (err)
        res.send(err);
      res.status(201);
      res.json("success");
    });
  })
  .catch(err => res.send(err));
};

exports.update_a_player = function(req, res) {
  validateJWT(req, res)
  .then(user => {
    let updated_player = req.body;

    if(!updated_player.name || !updated_player.overall || !updated_player.nacionality || !updated_player.club_id || !updated_player.main_position) {
      res.status(400);
      res.send({ error: 'Required fields missing' });
      return;
    }

    if(!updated_player.photo) {
      updated_player.photo = "data:image/webp;base64,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";
    }

    Player.findOneAndUpdate({_id: req.params.id}, updated_player, {new: true}, function(err, player) {
      if (err)
        res.send(err);
      res.status(204);
      res.json({ message: 'success' });
    });
  })
  .catch(err => res.send(err));
};

exports.delete_a_player = function(req, res) {
  validateJWT(req, res)
  .then(user => {
    Player.findById(req.params.id, function(err, player) {
      if(!player){
        res.send({"error": "No player found with provided id."})
      }
      else {
        Player.remove({
          _id: req.params.id
        }, function(err, player) {
          if (err)
            res.send(err);
          res.status(200);
          res.json({ message: 'success' });
        });
      }
    })
  })
  .catch(err => res.send(err));
};