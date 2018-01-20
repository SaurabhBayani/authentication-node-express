var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    // Destroy session
    req.session.destroy(function() {
        console.log('User logged out');
    })
    // Route to login page
    res.redirect('/login');
})

module.exports = router;