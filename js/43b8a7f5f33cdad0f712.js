! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}({
    2: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = document.getElementById("hamburger-menu-id"),
            o = document.getElementById("navbar-side-id"),
            i = document.getElementById("navbar-toggler-id"),
            c = document.getElementById("navbar-side-toggler-id"),
            a = document.getElementById("back-to-top-id");

        function l() {
            document.documentElement.scrollTop > 200 || document.body.scrollTop > 200 ? a.classList.add("o") : a.classList.remove("o")
        }
        a.addEventListener("click", (function() {
            var e, t;
            e = 0, t = 0, window.scrollTo(e, t)
        })), window.onscroll = l, l();
        var u = new Promise((function(e, t) {
                var n = new Image;
                n.onload = function() {
                    return e()
                }, n.onerror = function() {
                    return t()
                }, n.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
            })),
            d = document.getElementsByTagName("img"),
            s = "data-webp";
        u.catch((function() {
            s = "data-img"
        })).finally((function() {
            for (var e = 0; e < d.length; e++) t = d[e], new IntersectionObserver((function(e, t) {
                e.forEach((function(e) {
                    if (e.isIntersecting) {
                        var n = e.target,
                            r = n.getAttribute(s);
                        n.setAttribute("src", r), t.disconnect()
                    }
                }))
            })).observe(t);
            var t
        })), i.addEventListener("click", (function() {
            o.classList.toggle("tv"), r.classList.toggle("q")
        })), c.addEventListener("click", (function() {
            o.classList.toggle("tv"), r.classList.toggle("q")
        }))
    }
});