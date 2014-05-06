var flatfile = require('flat-file-db');

module.exports = function(name, filename) {
    var name = name;
    var db = flatfile(filename);
    var self = {
        db: db,
        put: function(data, cb) {
            var index = db.keys().length;
            data.id = index;
            data.active = true;
            db.put(index, data, cb);
        },
        update: function(index, data, cb) {
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
                var index = keys[x];
                var item = db.get(index);
                item.id = index;
                if (item.active) {
                    data.push(item);
                }
            }
            return data;
        },
        getAllInactives: function() {
            var keys = db.keys();
            var data = [];
            for (var x in keys) {
                var index = keys[x];
                var item = db.get(index);
                item.id = index;
                if (!item.active) {
                    data.push(item);
                }
            }
            return data;
        },
        del: function(id, cb) {
            var item = db.get(id);
            item.active = false;
            db.put(id, item);
            cb();
            //db.del(id, cb);
        },
        has: function(id) {
            return db.has(id);
        }
    };
    return self;
};