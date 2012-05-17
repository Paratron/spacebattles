/**
 * database test file
 * ===========
 * Testfile for the database system
 *
 *
 * @author: Christian Piazzi<programming@piazzi.org>
 * @version: 1 16.05.2012
 */

define(['./db_user'], function (db_user) {

    var tranfer = {
        login: "test" ,
        email: "holishitumsonst.com",
        password: "123nu"
    };


    db_user.insert(transfer);



});      //end require