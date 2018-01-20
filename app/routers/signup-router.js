var express = require("express");
var router = express.Router();
var validUsers = require("../models/userlist-model");

router.get("/", function(req, res) {
  res.render("signup.ejs");
});

router.post("/", function(req, res) {
  res.send("POST route on things.");
});

module.exports = router;
