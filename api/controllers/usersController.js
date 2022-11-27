'use strict';

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose'),
Users = mongoose.model('Users');

exports.auth = function(req, res) {
  const info = req.body;
  Users.findOne(req.body, (err, user) => {
    if(!user) return res.json({auth: false});

    const token = jwt.sign({userId: user.id}, process.env.SECRET, {
      expiresIn: 300
    });

    res.json({
      auth: true,
      token
    });
  })
};