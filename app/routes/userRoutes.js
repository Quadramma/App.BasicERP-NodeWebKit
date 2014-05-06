var User = require('../models/flatfiledb')("User", 'db/users.db');

User.db.on('open', function() {

    var data = {
        username: "root",
        password: 123456,
        expirationDate: new Date(2015, 0, 1)
    };

    // User.put(data, function() {});



    console.log(User.getAll());

});

module.exports = function(app) {

    app.post('/api/user/validate', function(req, res) {

        var list = User.getAll();

        var rta = {
            ok: false,
            item: null
        };

        for (var x in list) {
            var item = list[x];

            //console.log("validate");
            //console.log(req.body);
            //console.log(item);

            if (item.username.toString().toLowerCase() == req.body.username.toString().toLowerCase() && item.password.toString().toLowerCase() == req.body.password.toString().toLowerCase()) {
                rta.ok = true;
                rta.item = {
                    username: item.username,
                    password: item.password,
                    expirationDate: item.expirationDate
                };
                delete rta.item.password;
            }
        }

        res.json(rta);
    });


}