const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();


//main page
router.get("/", function (req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            bugers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post("/api/burger", function (req, res) {
    burger.insertOne(req.body.burger_name,function(data){
        console.log(data);
        res.json({id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
    burger.updateOne(req.params.id,function(data){
        if(data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});



// Export routes for server.js to use.
module.exports = router;