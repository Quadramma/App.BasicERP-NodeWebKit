// server.js
// set up ========================
var express = require('express');
var app = express(); // create our app w/ express




// configuration =================
app.configure(function() {
    app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.bodyParser()); // pull information from html in POST
    app.use(express.methodOverride()); // simulate DELETE and PUT
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
        next();
    });
});


require('./app/routes/clientRoutes')(app);
require('./app/routes/proveedorRoutes')(app);
require('./app/routes/workItemRoutes')(app);
require('./app/routes/userRoutes')(app);
require('./app/routes/generalRoutes')(app);
// listen (start app with node server.js) ======================================
app.listen(1337);
console.log("App listening on port 1337");