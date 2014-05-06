var Proveedor = require('../models/flatfiledb')("Proveedor", 'db/suppliers.db');
//var Proveedor = new FlatFileDb("Proveedor", 'db/suppliers.db');

module.exports = function(app) {

    app.get('/api/supplier', function(req, res) {

        var list = Proveedor.getAll();
        console.log(list);
        res.json(list); // return all todos in JSON format
    });

    // create todo and send back all todos after creation
    app.post('/api/supplier', function(req, res) {

        Proveedor.put({
            name: req.body.name,
            description: req.body.description
        });
        res.json(Proveedor.getAll()); // return all todos in JSON format
    });

    // delete a todo
    app.delete('/api/supplier/:id', function(req, res) {
        var id = req.params.id;
        Proveedor.del(id, function() {
            res.json(Proveedor.getAll()); // return all todos in JSON format
        });
    });


}