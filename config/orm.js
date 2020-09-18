const connection = require("../config/connection");

const orm = {
    selectAll: function(tableInput, cb) {
        const queryS = "SELECT * FROM ??";
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
    updateOne: function(id, cb) {
        const queryS = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(queryS, [id], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
        }
}

module.exports = orm;