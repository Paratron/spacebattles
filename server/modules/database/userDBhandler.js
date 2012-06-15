/**
 * user database handler
 * ===========
 * This is the module to connect and work with the user database
 *
 * @author: Christian Piazzi <projects@piazzi.org>
 * @version: 1 15.06.2012
 */

// The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
var handler = module.exports = express.createServer();

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum');