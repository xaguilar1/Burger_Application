const orm = require("../config/orm.js");

const burgers = {
    selectAll: function (cb) {
        orm.selectAll('burgers', cb)
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, cb)
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, cb)
    }
};

module.exports = burgers;