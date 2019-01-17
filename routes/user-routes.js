var router = require("express").Router();

router.get("/hello", function (req, res){
    console.log("hello")
    res.send("hello");
});

module.exports = router;

