'use strict';

const mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts');

exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.add_a_contact = function(req, res) {
  var new_contact = new Contact(req.body);
  new_contact.save(function(err, contact) {
    if (err)
      res.send(err);
    res.status(201);
    res.json({ "newContactId": contact.id });
  });
};

exports.read_a_contact = function(req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.update_a_contact = function(req, res) {
  Contact.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, contact) {
    if (err)
      res.send(err);
    res.status(204);
    res.json({ message: 'Contact successfully updated' });
  });
};

exports.delete_a_contact = function(req, res) {
  Contact.remove({
    _id: req.params.id
  }, function(err, contact) {
    if (err)
      res.send(err);
    res.status(200);
    res.json({ message: 'Contact successfully deleted' });
  });
};