var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var signupRouter = require('./routers/signup-router');
var loginRouter = require('./routers/login-router');
var dashboardRouuter = require('./routers/dashboard-router');
var validUsers = require('./models/userlist-model');

/* Middleware */
app.use(bodyParser.urlencoded({ extended: true }));

/* Routers */
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouuter);

app.get('/', function(req, res) {
    res.redirect('/login');
});

app.get('*',function(req, res){
    res.send('404 - Landed on  wrong page')
});

var listener = app.listen(8080, function() {
    console.log('Server Running on port: ' + listener.address().port);
    console.log('----------------------------------------------------');
});