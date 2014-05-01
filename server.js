// server.js

// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var flatfile = require('flat-file-db');


// configuration =================


app.configure(function() {
    app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.bodyParser()); // pull information from html in POST
    app.use(express.methodOverride()); // simulate DELETE and PUT
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
});


// define db model =================
var FlatFileDb = function(name, filename) {
    var name = name;
    var db = flatfile(filename);
    var self = {
        db: db,
        put: function(data, cb) {
            var index = db.keys().length;
            data.id = index;
            db.put(index, data, cb);
        },
        get: function(id) {
            return db.get(id);
        },
        getAll: function() {
            var keys = db.keys();
            var data = [];
            for (var x in keys) {
                data.push(db.get(keys[x]));
            }
            return data;
        },
        del: function(id, cb) {
            db.del(id, cb);
        },
        has: function(id) {
            return db.has(id);
        }
    }
    return self;
};

Todo = new FlatFileDb("Todo", 'db/todo.db')

//db
Todo.db.on('open', function() {
    console.log("Reading todos");
    console.log(Todo.getAll());
});


// routes ======================================================================


// api ---------------------------------------------------------------------
// get all todos
app.get('/api/todos', function(req, res) {
    var todos = Todo.getAll();
    res.json(todos); // return all todos in JSON format
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {
    var text = req.body.text;
    Todo.put({
        text: text
    });
    res.json(Todo.getAll()); // return all todos in JSON format
});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
    var id = req.params.todo_id;
    Todo.del(id, function() {
        res.json(Todo.getAll()); // return all todos in JSON format
    });
});


// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


// listen (start app with node server.js) ======================================
app.listen(1337);
console.log("App listening on port 1337");