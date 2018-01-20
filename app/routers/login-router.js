var express = require('express');
var router = express.Router();
var validUsers = require('../models/userlist-model');

router.get('/', function(req, res){
    res.render('login.ejs');
});

router.post('/', function(req, res){
    console.log(req.body);
    res.redirect('/dashboard');
});
module.exports = router;