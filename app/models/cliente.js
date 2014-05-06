//var FlatFileDb = require('flatfiledb.js');

module.exports = function(instance) {
    var self = instance;
    self.db.on('open', function() {
        console.log("Reading clientes");
        console.log(Todo.getAll());
    });
    return self
}();