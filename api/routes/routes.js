'use strict';
module.exports = function(app) {
  var players = require('../controllers/playersController');
  var users = require('../controllers/usersController');

  // contactList Routes
  app.route('/players')
    .get(players.list_all_players)
    .post(players.add_a_player);

  app.route('/players/:id')
    .put(players.update_a_player)
    .delete(players.delete_a_player);

  app.route('/login')
    .post(users.auth);
};