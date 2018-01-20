var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var signupRouter = require('./routers/signup-router');
var loginRouter = require('./routers/login-router');
var dashboardRouter = require('./routers/dashboard-router');
var logoutRouter = require('./routers/logout-router');
var validUsers = require('./models/userlist-model');
var session = require('express-session');

/* Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: "Your secret key"}));

/* Routers */
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/logout', logoutRouter)

app.get('/', function(req, res) {
    res.redirect('/login');
});

/* 404 */
app.get('*',function(req, res){
    res.status('404');
    res.send('404 - Landed on  wrong page')
});

var listener = app.listen(8080, function() {
    console.log('Server Running on port: ' + listener.address().port);
    console.log('----------------------------------------------------');
});