var Cliente = require('../models/flatfiledb')("Cliente", 'db/clientes.db');
//var Cliente = new FlatFileDb("Cliente", 'db/clientes.db');

module.exports = function(app) {

    app.get('/api/client/list', function(req, res) {

        var list = Cliente.getAll();

        console.log("ACTIVES")
        console.log(list);

        var inactives = Cliente.getAllInactives();
        console.log("INACTIVES");
        console.log(inactives);

        res.json(list); // return all todos in JSON format
    });


    app.post('/api/client/create', function(req, res) {
        console.log("CREATE");
        console.log(req.body);

        Cliente.put(req.body);
        res.json(Cliente.getAll()); // return all todos in JSON format
    });

    app.post('/api/client/update', function(req, res) {

        console.log("UPDATE");
        console.log(req.body);


        Cliente.update(req.body.id, req.body);
        res.json(Cliente.getAll());
    });

    // delete a todo
    app.delete('/api/client/delete/:id', function(req, res) {
        var id = req.params.id;
        Cliente.del(id, function() {
            res.json(Cliente.getAll()); // return all todos in JSON format
        });
    });


}