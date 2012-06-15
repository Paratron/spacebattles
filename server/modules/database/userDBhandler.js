/**
 * user database handler
 * ===========
 * This is the module to connect and work with the user database
 *
 * @author: Christian Piazzi <projects@piazzi.org>
 * @version: 1 15.06.2012
 */

// The main application script, ties everything together.

console.log('... starting');
var express = require('express');
var mongoose = require('mongoose');
var dbUser = require('../../dbmodels/user.js');
var user = mongoose.model('User', dbUser);
var handler = module.exports = express.createServer();

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum');



function setUser(params){

    var user = new User({
        user: ObjectId,
        name: 'params.name',
        email: 'params.email',
        login: 'params.login',
        password:'params.password'
    });
}

function getUser(params){
  //@ToDo

}

console.log('... running');