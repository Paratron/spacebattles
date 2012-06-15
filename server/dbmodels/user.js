/**
* user model
* ===========
* This is the scheme for the user database
*
* @author: Christian Piazzi <projects@piazzi.org>
* @version: 1 15.06.2012
*/


var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    user: ObjectId,
    name: {type: String},
    email: {type: String},
    login: {type: Sting},
    password: {type: String}
});

module.exports = mongoose.model('User', userSchema);