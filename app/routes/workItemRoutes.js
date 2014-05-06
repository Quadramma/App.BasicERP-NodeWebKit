var WorkItem = require('../models/flatfiledb')("WorkItem", 'db/workitems.db');


module.exports = function(app) {

    app.get('/api/workItems', function(req, res) {

        var list = WorkItem.getAll();
        console.log(list);
        res.json(list); // return all todos in JSON format
    });

    // create todo and send back all todos after creation
    app.post('/api/workItems', function(req, res) {

        WorkItem.put({
            name: req.body.name,
            description: req.body.description
        });
        res.json(WorkItem.getAll()); // return all todos in JSON format
    });

    // delete a todo
    app.delete('/api/workItems/:id', function(req, res) {
        var id = req.params.id;
        WorkItem.del(id, function() {
            res.json(WorkItem.getAll()); // return all todos in JSON format
        });
    });


}