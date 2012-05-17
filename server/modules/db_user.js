/**
 * User-Database Module
 * ===========
 * This handle the database connections and input/output from the user database
 *
 *
 * @author: Christian Piazzi<programming@piazzi.org>
 * @version: 1 16.05.2012
 */

define(['./db_user'], function(db_user) {
    var mongo = require('mongodb'); // load the mongodbwrapper
    //connection to the database server
    mongo.connect('mongodb://localhost/db_user', function (err, conn) {
        console.log(conn);
        conn.collection("db_user", function (err, coll) {
        });
    });


    function insert(params){

       var slogin = params.login;
       var semail = params.email;
       var spassword = params.password;

       coll.insert({Login: slogin, Email: semail, Password: spassword}, function(){
            console.log("User added");
        });

    }

    function find(params){
        var nsearch = params.search;
        coll.find(nsearch, function (z, x){
            console.log("object found");
            console.log(x);
        });
        return console.log(x);

    }

});      //end require