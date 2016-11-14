/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	email: {
  		type: 'email',
  		required: true,
  		unique: true
  	},

  	password: {
  		type: 'string',
      required: true,
  	},

    active: {
      type: 'boolean',
      defaultsTo: true
    },

    isPasswordValid: function (password, cb) {
      bcrypt.compare(password, this.password, cb);
    }
  },

  beforeUpdate: function(values, cb) {
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return cb(err);
      values.password = hash;
      cb();
    });
  },
};
