smokesignals = {
    convert: function(c, e) {
        e = {};
        c.on = function(d, a) {
            (e[d] = e[d] || []).push(a);
            return c
        };
        c.once = function(d, a) {
            function b() {
                a.apply(c.off(d, b), arguments)
            }
            b.h = a;
            return c.on(d, b)
        };
        c.off = function(d, a) {
            for (var b = e[d], f = 0; a && b && b[f]; f++) b[f] != a && b[f].h != a || b.splice(f--, 1);
            f || delete e[d];
            return c
        };
        c.emit = function(d) {
            for (var a = e[d], b = 0; a && a[b];) a[b++].apply(c, a.slice.call(arguments, 1));
            return c
        };
        return c
    }
};