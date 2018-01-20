var express = require("express");
var router = express.Router();
var validUsers = require("../models/userlist-model");

router.get("/", function(req, res) {
  res.render("signup.ejs");
});

router.post("/", function(req, res) {
    var requestBody = req.body;
    // Check if request blank
    if(!requestBody.userName || !requestBody.password) {
        res.status('404');
        res.send('Received Wrong Details');
    } else {
        // Check if user is present already
        validUsers.filter(function(user) {
            if(user.name === requestBody.name){
                res.status('404'),
                res.send('User already present');
            }
        });
        // Add user in userList
        var newUser = {'name':requestBody.name, 'password':requestBody.password};
        validUsers.push(newUser);
        req.session.user = newUser;
        res.redirect('/dashboard');
    }
});

module.exports = router;
