'use strict';
module.exports = function(app) {
  var players = require('../controllers/playersController');

  // contactList Routes
  app.route('/players')
    .get(players.list_all_players)
    .post(players.add_a_player);
};