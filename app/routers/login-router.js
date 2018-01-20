var express = require('express');
var router = express.Router();
var validUsers = require('../models/userlist-model');

router.get('/', function(req, res){
    res.render('login.ejs');
});

router.post('/', function(req, res){
    res.redirect('/dashboard');
});

module.exports = router;