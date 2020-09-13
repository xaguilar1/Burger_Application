const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        const queryS = "SELECT * FROM" + tableInput + ";";
        connection.query(queryS, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(burger_name, cb) {
        const queryS = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(queryS, [burger_name], function(err, result) {
            if(err) { 
                throw err;
            }
            cb(result);
        })
    },
    upateOne: function(id, cb) {
        const queryS = "UPDATE burgers SET devoured = true WHERE id = ?"
        connection.query(queryS, [id], callback)
    }
}

module.exports = orm;