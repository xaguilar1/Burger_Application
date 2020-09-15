const express = require("express");
const burgers = require("../models/burger.js")
const router = express.Router();


//main page
router.get("/", function (req, res) {
    burgers.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name,function(data){
        console.log(data);
        res.json({id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burgers.updateOne(req.params.id,function(data){
        if(data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});



// Export routes for server.js to use.
module.exports = router;