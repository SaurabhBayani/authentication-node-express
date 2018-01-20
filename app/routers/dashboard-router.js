var express = require('express');
var router = express.Router();
function checkUserSignedIn(req, res, next) {
    if(req.session.user){
        next();
    } else {
        var error = new Error('Not logged in');
        next(error);
    }
}

router.get('/', checkUserSignedIn, function(req, res) {
    res.render('dashboard.ejs', {userName: req.session.user.userName});
});

module.exports = router;