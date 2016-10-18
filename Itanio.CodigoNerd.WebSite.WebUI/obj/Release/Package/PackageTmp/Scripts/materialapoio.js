!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = re.type(e);
        return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function i(e, t, n) {
        if (re.isFunction(t))
            return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return re.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (fe.test(t))
                return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== n
        })
    }
    function r(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function o(e) {
        var t = we[e] = {};
        return re.each(e.match(_e) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(),
        re.ready())
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ce, "-$1").toLowerCase();
            if (n = e.getAttribute(i),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Te.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, i) {
        if (re.acceptData(e)) {
            var r, o, a = re.expando, s = e.nodeType, u = s ? re.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof t)
                return l || (l = s ? e[a] = G.pop() || re.guid++ : a),
                u[l] || (u[l] = s ? {} : {
                    toJSON: re.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (i ? u[l] = re.extend(u[l], t) : u[l].data = re.extend(u[l].data, t)),
                o = u[l],
                i || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== n && (o[re.camelCase(t)] = n),
                "string" == typeof t ? (r = o[t],
                null == r && (r = o[re.camelCase(t)])) : r = o,
                r
        }
    }
    function d(e, t, n) {
        if (re.acceptData(e)) {
            var i, r, o = e.nodeType, a = o ? re.cache : e, s = o ? e[re.expando] : re.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--; )
                        delete i[t[r]];
                    if (n ? !l(i) : !re.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                l(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null )
            }
        }
    }
    function f() {
        return !0
    }
    function h() {
        return !1
    }
    function p() {
        try {
            return pe.activeElement
        } catch (e) {}
    }
    function m(e) {
        var t = Pe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, i, r = 0, o = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (i = n[r]); r++)
                !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
    }
    function v(e) {
        Ee.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function _(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function w(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function b(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
    }
    function x(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var n, i, r, o = re._data(e), a = re._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (i = 0,
                    r = s[n].length; r > i; i++)
                        re.event.add(t, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }
    function S(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !ne.noCloneEvent && t[re.expando]) {
                r = re._data(t);
                for (i in r.events)
                    re.removeEvent(t, i, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === n && t.text !== e.text ? (_(t).text = e.text,
            w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ee.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function T(t, n) {
        var i, r = re(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(),
        o
    }
    function C(e) {
        var t = pe
          , n = Ke[e];
        return n || (n = T(e, t),
        "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (Ze[0].contentWindow || Ze[0].contentDocument).document,
        t.write(),
        t.close(),
        n = T(e, t),
        Ze.detach()),
        Ke[e] = n),
        n
    }
    function j(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }
    function k(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--; )
            if (t = ft[r] + n,
            t in e)
                return t;
        return i
    }
    function F(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)
            i = e[a],
            i.style && (o[a] = re._data(i, "olddisplay"),
            n = i.style.display,
            t ? (o[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && Fe(i) && (o[a] = re._data(i, "olddisplay", C(i.nodeName)))) : (r = Fe(i),
            (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function D(e, t, n) {
        var i = ut.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function E(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += re.css(e, n + ke[o], !0, r)),
            i ? ("content" === n && (a -= re.css(e, "padding" + ke[o], !0, r)),
            "margin" !== n && (a -= re.css(e, "border" + ke[o] + "Width", !0, r))) : (a += re.css(e, "padding" + ke[o], !0, r),
            "padding" !== n && (a += re.css(e, "border" + ke[o] + "Width", !0, r)));
        return a
    }
    function N(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = et(e)
          , a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = tt(e, t, o),
            (0 > r || null == r) && (r = e.style[t]),
            it.test(r))
                return r;
            i = a && (ne.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + E(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function M(e, t, n, i, r) {
        return new M.prototype.init(e,t,n,i,r)
    }
    function A() {
        return setTimeout(function() {
            ht = void 0
        }),
        ht = re.now()
    }
    function O(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = ke[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function L(e, t, n) {
        for (var i, r = (_t[t] || []).concat(_t["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function P(e, t, n) {
        var i, r, o, a, s, u, l, c, d = this, f = {}, h = e.style, p = e.nodeType && Fe(e), m = re._data(e, "fxshow");
        n.queue || (s = re._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                re.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        l = re.css(e, "display"),
        c = "none" === l ? re._data(e, "olddisplay") || C(e.nodeName) : l,
        "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        ne.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
            mt.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;p = !0
                }
                f[i] = m && m[i] || re.style(e, i)
            } else
                l = void 0;
        if (re.isEmptyObject(f))
            "inline" === ("none" === l ? C(e.nodeName) : l) && (h.display = l);
        else {
            m ? "hidden"in m && (p = m.hidden) : m = re._data(e, "fxshow", {}),
            o && (m.hidden = !p),
            p ? re(e).show() : d.done(function() {
                re(e).hide()
            }),
            d.done(function() {
                var t;
                re._removeData(e, "fxshow");
                for (t in f)
                    re.style(e, t, f[t])
            });
            for (i in f)
                a = L(p ? m[i] : 0, i, d),
                i in m || (m[i] = a.start,
                p && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function H(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = re.camelCase(n),
            r = t[i],
            o = e[n],
            re.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            a = re.cssHooks[i],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function q(e, t, n) {
        var i, r, o = 0, a = yt.length, s = re.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (r)
                return !1;
            for (var t = ht || A(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n : (s.resolveWith(e, [l]),
            !1)
        }
        , l = s.promise({
            elem: e,
            props: re.extend({}, t),
            opts: re.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || A(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = re.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? l.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); a > o; o++)
            if (i = yt[o].call(l, e, c, l.opts))
                return i;
        return re.map(c, L, l),
        re.isFunction(l.opts.start) && l.opts.start.call(e, l),
        re.fx.timer(re.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(_e) || [];
            if (re.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Y(e, t, n, i) {
        function r(s) {
            var u;
            return o[s] = !0,
            re.each(e[s] || [], function(e, s) {
                var l = s(t, n, i);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                r(l),
                !1)
            }),
            u
        }
        var o = {}
          , a = e === Wt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function Q(e, t) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n),
        e
    }
    function $(e, t, n) {
        for (var i, r, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    u.unshift(a);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== u[0] && u.unshift(o),
        n[o]) : void 0
    }
    function W(e, t, n, i) {
        var r, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o],
                    !a)
                        for (r in l)
                            if (s = r.split(" "),
                            s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function R(e, t, n, i) {
        var r;
        if (re.isArray(t))
            re.each(t, function(t, r) {
                n || Ut.test(e) ? i(e, r) : R(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== re.type(t))
            i(e, t);
        else
            for (r in t)
                R(e + "[" + r + "]", t[r], n, i)
    }
    function B() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function z() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function U(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var G = []
      , J = G.slice
      , V = G.concat
      , X = G.push
      , Z = G.indexOf
      , K = {}
      , ee = K.toString
      , te = K.hasOwnProperty
      , ne = {}
      , ie = "1.11.1"
      , re = function(e, t) {
        return new re.fn.init(e,t)
    }
      , oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ae = /^-ms-/
      , se = /-([\da-z])/gi
      , ue = function(e, t) {
        return t.toUpperCase()
    }
    ;
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: X,
        sort: G.sort,
        splice: G.splice
    },
    re.extend = re.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || re.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); u > s; s++)
            if (null != (r = arguments[s]))
                for (i in r)
                    e = a[i],
                    n = r[i],
                    a !== n && (l && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1,
                    o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {},
                    a[i] = re.extend(l, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }
    ,
    re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !re.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e))
                return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e)
                    return te.call(e, t);
            for (t in e)
                ;
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && re.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0, a = e.length, s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i),
                    r !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (r = t.apply(e[o], i),
                        r === !1)
                            break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]),
                r !== !1); o++)
                    ;
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]),
                    r === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Z)
                    return Z.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; )
                e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i]; )
                    e[r++] = t[i++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++)
                i = !t(e[o], o),
                i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0, a = e.length, s = n(e), u = [];
            if (s)
                for (; a > o; o++)
                    r = t(e[o], o, i),
                    null != r && u.push(r);
            else
                for (o in e)
                    r = t(e[o], o, i),
                    null != r && u.push(r);
            return V.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t],
            t = e,
            e = r),
            re.isFunction(e) ? (n = J.call(arguments, 2),
            i = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || re.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }),
    re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var le = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, u, l, d, h, p, m;
            if ((t ? t.ownerDocument || t : Y) !== M && N(t),
            t = t || M,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (O && !i) {
                if (r = ye.exec(e))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && q(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (r[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = r[3]) && b.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (b.qsa && (!L || !L.test(e))) {
                    if (h = d = I,
                    p = t,
                    m = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = C(e),
                        (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        u = l.length; u--; )
                            l[u] = h + f(l[u]);
                        p = _e.test(e) && c(t.parentNode) || t,
                        m = l.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, p.querySelectorAll(m)),
                            n
                        } catch (g) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(ue, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[I] = !0,
            e
        }
        function r(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function h(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, u, l = [Q, o];
                if (a) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if (u = t[I] || (t[I] = {}),
                            (s = u[i]) && s[0] === Q && s[1] === o)
                                return l[2] = s[2];
                            if (u[i] = l,
                            l[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                t(e, n[r], i);
            return i
        }
        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, i, r)) && (a.push(o),
                l && t.push(s));
            return a
        }
        function v(e, t, n, r, o, a) {
            return r && !r[I] && (r = v(r)),
            o && !o[I] && (o = v(o, a)),
            i(function(i, a, s, u) {
                var l, c, d, f = [], h = [], p = a.length, v = i || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : g(v, f, e, s, u), _ = n ? o || (i ? e : p || r) ? [] : a : y;
                if (n && n(y, _, s, u),
                r)
                    for (l = g(_, h),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (d = l[c]) && (_[h[c]] = !(y[h[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = _.length; c--; )
                                (d = _[c]) && l.push(y[c] = d);
                            o(null , _ = [], l, u)
                        }
                        for (c = _.length; c--; )
                            (d = _[c]) && (l = o ? te.call(i, d) : f[c]) > -1 && (i[l] = !(a[l] = d))
                    }
                } else
                    _ = g(_ === a ? _.splice(p, _.length) : _),
                    o ? o(null , a, _, u) : K.apply(a, _)
            })
        }
        function y(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            }, a, !0), l = h(function(e) {
                return te.call(t, e) > -1
            }, a, !0), c = [function(e, n, i) {
                return !o && (i || n !== F) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i))
            }
            ]; r > s; s++)
                if (n = x.relative[e[s].type])
                    c = [h(p(c), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null , e[s].matches),
                    n[I]) {
                        for (i = ++s; r > i && !x.relative[e[i].type]; i++)
                            ;
                        return v(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function _(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , a = function(i, a, s, u, l) {
                var c, d, f, h = 0, p = "0", m = i && [], v = [], y = F, _ = i || o && x.find.TAG("*", l), w = Q += null == y ? 1 : Math.random() || .1, b = _.length;
                for (l && (F = a !== M && a); p !== b && null != (c = _[p]); p++) {
                    if (o && c) {
                        for (d = 0; f = e[d++]; )
                            if (f(c, a, s)) {
                                u.push(c);
                                break
                            }
                        l && (Q = w)
                    }
                    r && ((c = !f && c) && h--,
                    i && m.push(c))
                }
                if (h += p,
                r && p !== h) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (i) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || v[p] || (v[p] = X.call(u));
                        v = g(v)
                    }
                    K.apply(u, v),
                    l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return l && (Q = w,
                F = y),
                m
            }
            ;
            return r ? i(a) : a
        }
        var w, b, x, S, T, C, j, k, F, D, E, N, M, A, O, L, P, H, q, I = "sizzle" + -new Date, Y = e.document, Q = 0, $ = 0, W = n(), R = n(), B = n(), z = function(e, t) {
            return e === t && (E = !0),
            0
        }
        , U = "undefined", G = 1 << 31, J = {}.hasOwnProperty, V = [], X = V.pop, Z = V.push, K = V.push, ee = V.slice, te = V.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", ue = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$","g"), le = new RegExp("^" + ie + "*," + ie + "*"), ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]","g"), fe = new RegExp(se), he = new RegExp("^" + oe + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ne + ")$","i"),
            needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /[+~]/, we = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)","ig"), xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }
        ;
        try {
            K.apply(V = ee.call(Y.childNodes), Y.childNodes),
            V[Y.childNodes.length].nodeType
        } catch (Se) {
            K = {
                apply: V.length ? function(e, t) {
                    Z.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {},
        T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        N = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : Y, i = n.defaultView;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n,
            A = n.documentElement,
            O = !T(n),
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                N()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                N()
            })),
            b.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            b.getElementsByTagName = r(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            b.getById = r(function(e) {
                return A.appendChild(e).id = I,
                !n.getElementsByName || !n.getElementsByName(I).length
            }),
            b.getById ? (x.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            x.find.CLASS = b.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && O ? t.getElementsByClassName(e) : void 0
            }
            ,
            P = [],
            L = [],
            (b.qsa = ve.test(n.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + ie + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + ie + "*(?:value|" + ne + ")"),
                e.querySelectorAll(":checked").length || L.push(":checked")
            }),
            r(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + ie + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            })),
            (b.matchesSelector = ve.test(H = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(e) {
                b.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                P.push("!=", se)
            }),
            L = L.length && new RegExp(L.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = ve.test(A.compareDocumentPosition),
            q = t || ve.test(A.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            z = t ? function(e, t) {
                if (e === t)
                    return E = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === Y && q(Y, e) ? -1 : t === n || t.ownerDocument === Y && q(Y, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return E = !0,
                    0;
                var i, r = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
                if (o === s)
                    return a(e, t);
                for (i = e; i = i.parentNode; )
                    u.unshift(i);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (; u[r] === l[r]; )
                    r++;
                return r ? a(u[r], l[r]) : u[r] === Y ? -1 : l[r] === Y ? 1 : 0
            }
            ,
            n) : M
        }
        ,
        t.matches = function(e, n) {
            return t(e, null , null , n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && N(e),
            n = n.replace(de, "='$1']"),
            !(!b.matchesSelector || !O || P && P.test(n) || L && L.test(n)))
                try {
                    var i = H.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (r) {}
            return t(n, M, null , [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && N(e),
            q(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && N(e);
            var n = x.attrHandle[t.toLowerCase()]
              , i = n && J.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : b.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (E = !b.detectDuplicates,
            D = !b.sortStable && e.slice(0),
            e.sort(z),
            E) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return D = null ,
            e
        }
        ,
        S = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += S(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += S(t);
            return n
        }
        ,
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (c = g[I] || (g[I] = {}),
                                l = c[e] || [],
                                h = l[0] === Q && l[1],
                                f = l[0] === Q && l[2],
                                d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [Q, h, f];
                                        break
                                    }
                            } else if (y && (l = (t[I] || (t[I] = {}))[e]) && l[0] === Q)
                                f = l[1];
                            else
                                for (; (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [Q, f]),
                                d !== t)); )
                                    ;
                            return f -= r,
                            f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--; )
                            i = te.call(e, r[a]),
                            e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = j(e.replace(ue, "$1"));
                    return r[I] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null , i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null , o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            x.pseudos[w] = u(w);
        return d.prototype = x.filters = x.pseudos,
        x.setFilters = new d,
        C = t.tokenize = function(e, n) {
            var i, r, o, a, s, u, l, c = R[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = x.preFilter; s; ) {
                (!i || (r = le.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                u.push(o = [])),
                i = !1,
                (r = ce.exec(s)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(ue, " ")
                }),
                s = s.slice(i.length));
                for (a in x.filter)
                    !(r = pe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? t.error(e) : R(e, u).slice(0)
        }
        ,
        j = t.compile = function(e, t) {
            var n, i = [], r = [], o = B[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[I] ? i.push(o) : r.push(o);
                o = B(e, _(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        k = t.select = function(e, t, n, i) {
            var r, o, a, s, u, l = "function" == typeof e && e, d = !i && C(e = l.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && O && x.relative[o[1].type]) {
                    if (t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0],
                    !t)
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                !x.relative[s = a.type]); )
                    if ((u = x.find[s]) && (i = u(a.matches[0].replace(be, xe), _e.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        e = i.length && f(o),
                        !e)
                            return K.apply(n, i),
                            n;
                        break
                    }
            }
            return (l || j(e, d))(i, t, !O, n, _e.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        b.sortStable = I.split("").sort(z).join("") === I,
        b.detectDuplicates = !!E,
        N(),
        b.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    re.find = le,
    re.expr = le.selectors,
    re.expr[":"] = re.expr.pseudos,
    re.unique = le.uniqueSort,
    re.text = le.getText,
    re.isXMLDoc = le.isXML,
    re.contains = le.contains;
    var ce = re.expr.match.needsContext
      , de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , fe = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    re.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)
                return this.pushStack(re(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (re.contains(i[t], this))
                            return !0
                }));
            for (t = 0; r > t; t++)
                re.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var he, pe = e.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = re.fn.init = function(e, t) {
        var n, i;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : me.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof re ? t[0] : t,
                re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)),
                de.test(n[1]) && re.isPlainObject(t))
                    for (n in t)
                        re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (i = pe.getElementById(n[2]),
            i && i.parentNode) {
                if (i.id !== n[2])
                    return he.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = pe,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : re.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        re.makeArray(e, this))
    }
    ;
    ge.prototype = re.fn,
    he = re(pe);
    var ve = /^(?:parents|prev(?:Until|All))/
      , ye = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    re.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n)); )
                1 === r.nodeType && i.push(r),
                r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    re.fn.extend({
        has: function(e) {
            var t, n = re(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (re.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return re.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return re.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return re.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
            return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(n, i) {
            var r = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = re.filter(i, r)),
            this.length > 1 && (ye[e] || (r = re.unique(r)),
            ve.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var _e = /\S+/g
      , we = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || o(e) : re.extend({}, e);
        var t, n, i, r, a, s, u = [], l = !e.once && [], c = function(o) {
            for (n = e.memory && o,
            i = !0,
            a = s || 0,
            s = 0,
            r = u.length,
            t = !0; u && r > a; a++)
                if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
        }
        , d = {
            add: function() {
                if (u) {
                    var i = u.length;
                    !function o(t) {
                        re.each(t, function(t, n) {
                            var i = re.type(n);
                            "function" === i ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments),
                    t ? r = u.length : n && (s = i,
                    c(n))
                }
                return this
            },
            remove: function() {
                return u && re.each(arguments, function(e, n) {
                    for (var i; (i = re.inArray(n, u, i)) > -1; )
                        u.splice(i, 1),
                        t && (r >= i && r--,
                        a >= i && a--)
                }),
                this
            },
            has: function(e) {
                return e ? re.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                r = 0,
                this
            },
            disable: function() {
                return u = l = n = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, n) {
                return !u || i && !l || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                t ? l.push(n) : c(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }
    ,
    re.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return re.Deferred(function(n) {
                        re.each(t, function(t, o) {
                            var a = re.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? re.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            re.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                i[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = a.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = J.call(arguments), a = o.length, s = 1 !== a || e && re.isFunction(e.promise) ? a : 0, u = 1 === s ? e : re.Deferred(), l = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? J.call(arguments) : r,
                    i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                }
            }
            ;
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                i = new Array(a); a > r; r++)
                    o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, t)) : --s;
            return s || u.resolveWith(i, o),
            u.promise()
        }
    });
    var be;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e),
        this
    }
    ,
    re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--re.readyWait : !re.isReady) {
                if (!pe.body)
                    return setTimeout(re.ready);
                re.isReady = !0,
                e !== !0 && --re.readyWait > 0 || (be.resolveWith(pe, [re]),
                re.fn.triggerHandler && (re(pe).triggerHandler("ready"),
                re(pe).off("ready")))
            }
        }
    }),
    re.ready.promise = function(t) {
        if (!be)
            if (be = re.Deferred(),
            "complete" === pe.readyState)
                setTimeout(re.ready);
            else if (pe.addEventListener)
                pe.addEventListener("DOMContentLoaded", s, !1),
                e.addEventListener("load", s, !1);
            else {
                pe.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && pe.documentElement
                } catch (i) {}
                n && n.doScroll && !function r() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        a(),
                        re.ready()
                    }
                }()
            }
        return be.promise(t)
    }
    ;
    var xe, Se = "undefined";
    for (xe in re(ne))
        break;
    ne.ownLast = "0" !== xe,
    ne.inlineBlockNeedsLayout = !1,
    re(function() {
        var e, t, n, i;
        n = pe.getElementsByTagName("body")[0],
        n && n.style && (t = pe.createElement("div"),
        i = pe.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var e = pe.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ne.deleteExpando = !1
            }
        }
        e = null
    }(),
    re.acceptData = function(e) {
        var t = re.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
    ;
    var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ce = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando],
            !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    re.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = re.data(o),
                1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (i = a[n].name,
                        0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)),
                        u(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, e, t)
            }) : o ? u(o, e, re.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }),
    re.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = re._data(e, t),
            n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = re.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = re._queueHooks(e, t)
              , a = function() {
                re.dequeue(e, t)
            }
            ;
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return re._data(e, n) || re._data(e, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"),
                    re._removeData(e, n)
                })
            })
        }
    }),
    re.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = re.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [o])
            }
            ;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = re._data(o[a], e + "queueHooks"),
                n && n.empty && (i++,
                n.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ke = ["Top", "Right", "Bottom", "Left"]
      , Fe = function(e, t) {
        return e = t || e,
        "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
    }
      , De = re.access = function(e, t, n, i, r, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === re.type(n)) {
            r = !0;
            for (s in n)
                re.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0,
        re.isFunction(i) || (a = !0),
        l && (a ? (t.call(e, i),
        t = null ) : (l = t,
        t = function(e, t, n) {
            return l.call(re(e), n)
        }
        )),
        t))
            for (; u > s; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , Ee = /^(?:checkbox|radio)$/i;
    !function() {
        var e = pe.createElement("input")
          , t = pe.createElement("div")
          , n = pe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ne.leadingWhitespace = 3 === t.firstChild.nodeType,
        ne.tbody = !t.getElementsByTagName("tbody").length,
        ne.htmlSerialize = !!t.getElementsByTagName("link").length,
        ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML,
        e.type = "checkbox",
        e.checked = !0,
        n.appendChild(e),
        ne.appendChecked = e.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        n.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ne.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            ne.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = pe.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"),
            ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ne = /^(?:input|select|textarea)$/i
      , Me = /^key/
      , Ae = /^(?:mouse|pointer|contextmenu)|click/
      , Oe = /^(?:focusinfocus|focusoutblur)$/
      , Le = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, u, l, c, d, f, h, p, m, g = re._data(e);
            if (g) {
                for (n.handler && (u = n,
                n = u.handler,
                r = u.selector),
                n.guid || (n.guid = re.guid++),
                (a = g.events) || (a = g.events = {}),
                (c = g.handle) || (c = g.handle = function(e) {
                    return typeof re === Se || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = e),
                t = (t || "").match(_e) || [""],
                s = t.length; s--; )
                    o = Le.exec(t[s]) || [],
                    h = m = o[1],
                    p = (o[2] || "").split(".").sort(),
                    h && (l = re.event.special[h] || {},
                    h = (r ? l.delegateType : l.bindType) || h,
                    l = re.event.special[h] || {},
                    d = re.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && re.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, u),
                    (f = a[h]) || (f = a[h] = [],
                    f.delegateCount = 0,
                    l.setup && l.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))),
                    l.add && (l.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    re.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, u, l, c, d, f, h, p, m, g = re.hasData(e) && re._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(_e) || [""],
                l = t.length; l--; )
                    if (s = Le.exec(t[l]) || [],
                    h = m = s[1],
                    p = (s[2] || "").split(".").sort(),
                    h) {
                        for (d = re.event.special[h] || {},
                        h = (i ? d.delegateType : d.bindType) || h,
                        f = c[h] || [],
                        s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = o = f.length; o--; )
                            a = f[o],
                            !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || re.removeEvent(e, h, g.handle),
                        delete c[h])
                    } else
                        for (h in c)
                            re.event.remove(e, h + t[l], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle,
                re._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, u, l, c, d, f = [i || pe], h = te.call(t, "type") ? t.type : t, p = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || pe,
            3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."),
            h = p.shift(),
            p.sort()),
            a = h.indexOf(":") < 0 && "on" + h,
            t = t[re.expando] ? t : new re.Event(h,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = p.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : re.makeArray(n, [t]),
            l = re.event.special[h] || {},
            r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                if (!r && !l.noBubble && !re.isWindow(i)) {
                    for (u = l.delegateType || h,
                    Oe.test(u + h) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        c = s;
                    c === (i.ownerDocument || pe) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? u : l.bindType || h,
                    o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"),
                    o && o.apply(s, n),
                    o = a && s[a],
                    o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = h,
                !r && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                    c = i[a],
                    c && (i[a] = null ),
                    re.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    re.event.triggered = void 0,
                    c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, r, o, a = [], s = J.call(arguments), u = (re._data(this, "events") || {})[e.type] || [], l = re.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = re.event.handlers.call(this, e, u),
                t = 0; (r = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                        o = 0; s > o; o++)
                            i = t[o],
                            n = i.selector + " ",
                            void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(u) >= 0 : re.find(n, this, null , [u]).length),
                            r[n] && r.push(i);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[re.expando])
                return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ae.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new re.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || pe),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pe,
                r = i.documentElement,
                n = i.body,
                e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null , t) : re.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    re.removeEvent = pe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Se && (e[i] = null ),
        e.detachEvent(i, n))
    }
    ,
    re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e,
        t && re.extend(this, t),
        this.timeStamp = e && e.timeStamp || re.now(),
        void (this[re.expando] = !0)) : new re.Event(e,t)
    }
    ,
    re.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }),
    ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                re.event.simulate("change", this, e, !0)
            })),
            !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ne.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }),
                re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"),
            !Ne.test(this.nodeName)
        }
    }),
    ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        }
        ;
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = re._data(i, t);
                r || i.addEventListener(e, n, !0),
                re._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = re._data(i, t) - 1;
                r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0),
                re._removeData(i, t))
            }
        }
    }),
    re.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (o in e)
                    this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t,
            n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
            n = void 0) : (i = n,
            n = t,
            t = void 0)),
            i === !1)
                i = h;
            else if (!i)
                return this;
            return 1 === r && (a = i,
            i = function(e) {
                return re().off(e),
                a.apply(this, arguments)
            }
            ,
            i.guid = a.guid || (a.guid = re.guid++)),
            this.each(function() {
                re.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                re.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , He = / jQuery\d+="(?:null|\d+)"/g
      , qe = new RegExp("<(?:" + Pe + ")[\\s/>]","i")
      , Ie = /^\s+/
      , Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Qe = /<([\w:]+)/
      , $e = /<tbody/i
      , We = /<|&#?\w+;/
      , Re = /<(?:script|style|link)/i
      , Be = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ze = /^$|\/(?:java|ecma)script/i
      , Ue = /^true\/(.*)/
      , Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Ve = m(pe)
      , Xe = Ve.appendChild(pe.createElement("div"));
    Je.optgroup = Je.option,
    Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
    Je.th = Je.td,
    re.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, u = re.contains(e.ownerDocument, e);
            if (ne.html5Clone || re.isXMLDoc(e) || !qe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Xe.innerHTML = e.outerHTML,
            Xe.removeChild(o = Xe.firstChild)),
            !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (i = g(o),
                s = g(e),
                a = 0; null != (r = s[a]); ++a)
                    i[a] && S(r, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e),
                    i = i || g(o),
                    a = 0; null != (r = s[a]); a++)
                        x(r, i[a]);
                else
                    x(e, o);
            return i = g(o, "script"),
            i.length > 0 && b(i, !u && g(e, "script")),
            i = s = r = null ,
            o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, u, l, c, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
                if (o = e[p],
                o || 0 === o)
                    if ("object" === re.type(o))
                        re.merge(h, o.nodeType ? [o] : o);
                    else if (We.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")),
                        u = (Qe.exec(o) || ["", ""])[1].toLowerCase(),
                        c = Je[u] || Je._default,
                        s.innerHTML = c[1] + o.replace(Ye, "<$1></$2>") + c[2],
                        r = c[0]; r--; )
                            s = s.lastChild;
                        if (!ne.leadingWhitespace && Ie.test(o) && h.push(t.createTextNode(Ie.exec(o)[0])),
                        !ne.tbody)
                            for (o = "table" !== u || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 : s : s.firstChild,
                            r = o && o.childNodes.length; r--; )
                                re.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (re.merge(h, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        h.push(t.createTextNode(o));
            for (s && f.removeChild(s),
            ne.appendChecked || re.grep(g(h, "input"), v),
            p = 0; o = h[p++]; )
                if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o),
                s = g(f.appendChild(o), "script"),
                a && b(s),
                n))
                    for (r = 0; o = s[r++]; )
                        ze.test(o.type || "") && n.push(o);
            return s = null ,
            f
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = re.expando, u = re.cache, l = ne.deleteExpando, c = re.event.special; null != (n = e[a]); a++)
                if ((t || re.acceptData(n)) && (r = n[s],
                o = r && u[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    u[r] && (delete u[r],
                    l ? delete n[s] : typeof n.removeAttribute !== Se ? n.removeAttribute(s) : n[s] = null ,
                    G.push(r))
                }
        }
    }),
    re.fn.extend({
        text: function(e) {
            return De(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
            }, null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                t || 1 !== n.nodeType || re.cleanData(g(n)),
                n.parentNode && (t && re.contains(n.ownerDocument, n) && b(g(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(He, "") : void 0;
                if (!("string" != typeof e || Re.test(e) || !ne.htmlSerialize && qe.test(e) || !ne.leadingWhitespace && Ie.test(e) || Je[(Qe.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ye, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (re.cleanData(g(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null , e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                re.cleanData(g(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = V.apply([], e);
            var n, i, r, o, a, s, u = 0, l = this.length, c = this, d = l - 1, f = e[0], h = re.isFunction(f);
            if (h || l > 1 && "string" == typeof f && !ne.checkClone && Be.test(f))
                return this.each(function(n) {
                    var i = c.eq(n);
                    h && (e[0] = f.call(this, n, i.html())),
                    i.domManip(e, t)
                });
            if (l && (s = re.buildFragment(e, this[0].ownerDocument, !1, this),
            n = s.firstChild,
            1 === s.childNodes.length && (s = n),
            n)) {
                for (o = re.map(g(s, "script"), _),
                r = o.length; l > u; u++)
                    i = s,
                    u !== d && (i = re.clone(i, !0, !0),
                    r && re.merge(o, g(i, "script"))),
                    t.call(this[u], i, u);
                if (r)
                    for (a = o[o.length - 1].ownerDocument,
                    re.map(o, w),
                    u = 0; r > u; u++)
                        i = o[u],
                        ze.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ge, "")));
                s = n = null
            }
            return this
        }
    }),
    re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0),
                re(o[i])[t](n),
                X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ze, Ke = {};
    !function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, i;
            return n = pe.getElementsByTagName("body")[0],
            n && n.style ? (t = pe.createElement("div"),
            i = pe.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(pe.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(i),
            e) : void 0
        }
    }();
    var et, tt, nt = /^margin/, it = new RegExp("^(" + je + ")(?!px)[a-z%]+$","i"), rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null )
    }
    ,
    tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)),
        it.test(a) && nt.test(t) && (i = s.width,
        r = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = r,
        s.maxWidth = o)),
        void 0 === a ? a : a + ""
    }
    ) : pe.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }
    ,
    tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        it.test(a) && !rt.test(t) && (i = s.left,
        r = e.runtimeStyle,
        o = r && r.left,
        o && (r.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = i,
        o && (r.left = o)),
        void 0 === a ? a : a + "" || "auto"
    }
    ),
    !function() {
        function t() {
            var t, n, i, r;
            n = pe.getElementsByTagName("body")[0],
            n && n.style && (t = pe.createElement("div"),
            i = pe.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            o = a = !1,
            u = !0,
            e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null ) || {}).top,
            a = "4px" === (e.getComputedStyle(t, null ) || {
                width: "4px"
            }).width,
            r = t.appendChild(pe.createElement("div")),
            r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            r.style.marginRight = r.style.width = "0",
            t.style.width = "1px",
            u = !parseFloat((e.getComputedStyle(r, null ) || {}).marginRight)),
            t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            r = t.getElementsByTagName("td"),
            r[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            s = 0 === r[0].offsetHeight,
            s && (r[0].style.display = "",
            r[1].style.display = "none",
            s = 0 === r[0].offsetHeight),
            n.removeChild(i))
        }
        var n, i, r, o, a, s, u;
        n = pe.createElement("div"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = n.getElementsByTagName("a")[0],
        (i = r && r.style) && (i.cssText = "float:left;opacity:.5",
        ne.opacity = "0.5" === i.opacity,
        ne.cssFloat = !!i.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        ne.clearCloneStyle = "content-box" === n.style.backgroundClip,
        ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing,
        re.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == s && t(),
                s
            },
            boxSizingReliable: function() {
                return null == a && t(),
                a
            },
            pixelPosition: function() {
                return null == o && t(),
                o
            },
            reliableMarginRight: function() {
                return null == u && t(),
                u
            }
        }))
    }(),
    re.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = a[o];
        return r
    }
    ;
    var ot = /alpha\([^)]*\)/i
      , at = /opacity\s*=\s*([^)]*)/
      , st = /^(none|table(?!-c[ea]).+)/
      , ut = new RegExp("^(" + je + ")(.*)$","i")
      , lt = new RegExp("^([+-])=(" + je + ")","i")
      , ct = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , dt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ft = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = re.camelCase(t), u = e.style;
                if (t = re.cssProps[s] || (re.cssProps[s] = k(u, s)),
                a = re.cssHooks[t] || re.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                if (o = typeof n,
                "string" === o && (r = lt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)),
                o = "number"),
                null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"),
                ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, i)))))
                    try {
                        u[t] = n
                    } catch (l) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = re.camelCase(t);
            return t = re.cssProps[s] || (re.cssProps[s] = k(e.style, s)),
            a = re.cssHooks[t] || re.cssHooks[s],
            a && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = tt(e, t, i)),
            "normal" === o && t in dt && (o = dt[t]),
            "" === n || n ? (r = parseFloat(o),
            n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
                    return N(e, t, i)
                }) : N(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && et(e);
                return D(e, n, i ? E(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    ne.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
        }
    }),
    re.cssHooks.marginRight = j(ne.reliableMarginRight, function(e, t) {
        return t ? re.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }),
    re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[e + ke[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        nt.test(e) || (re.cssHooks[e + t].set = D)
    }),
    re.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (re.isArray(t)) {
                    for (i = et(e),
                    r = t.length; r > a; a++)
                        o[t[a]] = re.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return F(this, !0)
        },
        hide: function() {
            return F(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? re(this).show() : re(this).hide()
            })
        }
    }),
    re.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    re.fx = M.prototype.init,
    re.fx.step = {};
    var ht, pt, mt = /^(?:toggle|show|hide)$/, gt = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$","i"), vt = /queueHooks$/, yt = [P], _t = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , r = gt.exec(t)
              , o = r && r[3] || (re.cssNumber[e] ? "" : "px")
              , a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e))
              , s = 1
              , u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                r = r || [],
                a = +i || 1;
                do
                    s = s || ".5",
                    a /= s,
                    re.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / i) && 1 !== s && --u)
            }
            return r && (a = n.start = +a || +i || 0,
            n.unit = o,
            n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]),
            n
        }
        ]
    };
    re.Animation = re.extend(q, {
        tweener: function(e, t) {
            re.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                _t[n] = _t[n] || [],
                _t[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? yt.unshift(e) : yt.push(e)
        }
    }),
    re.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? re.extend({}, e) : {
            complete: n || !n && t || re.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !re.isFunction(t) && t
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            re.isFunction(i.old) && i.old.call(this),
            i.queue && re.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    re.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Fe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = re.isEmptyObject(e)
              , o = re.speed(t, n, i)
              , a = function() {
                var t = q(this, re.extend({}, e), o);
                (r || re._data(this, "finish")) && t.stop(!0)
            }
            ;
            return a.finish = a,
            r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            }
            ;
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = re.timers
                  , a = re._data(this);
                if (r)
                    a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && vt.test(r) && i(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                (t || !n) && re.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = re._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = re.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                re.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    re.each(["toggle", "show", "hide"], function(e, t) {
        var n = re.fn[t];
        re.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, r)
        }
    }),
    re.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        re.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    re.timers = [],
    re.fx.tick = function() {
        var e, t = re.timers, n = 0;
        for (ht = re.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || re.fx.stop(),
        ht = void 0
    }
    ,
    re.fx.timer = function(e) {
        re.timers.push(e),
        e() ? re.fx.start() : re.timers.pop()
    }
    ,
    re.fx.interval = 13,
    re.fx.start = function() {
        pt || (pt = setInterval(re.fx.tick, re.fx.interval))
    }
    ,
    re.fx.stop = function() {
        clearInterval(pt),
        pt = null
    }
    ,
    re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    re.fn.delay = function(e, t) {
        return e = re.fx ? re.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e, t, n, i, r;
        t = pe.createElement("div"),
        t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        i = t.getElementsByTagName("a")[0],
        n = pe.createElement("select"),
        r = n.appendChild(pe.createElement("option")),
        e = t.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px",
        ne.getSetAttribute = "t" !== t.className,
        ne.style = /top/.test(i.getAttribute("style")),
        ne.hrefNormalized = "/a" === i.getAttribute("href"),
        ne.checkOn = !!e.value,
        ne.optSelected = r.selected,
        ne.enctype = !!pe.createElement("form").enctype,
        n.disabled = !0,
        ne.optDisabled = !r.disabled,
        e = pe.createElement("input"),
        e.setAttribute("value", ""),
        ne.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        ne.radioValue = "t" === e.value
    }();
    var wt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = re.isFunction(e),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e,
                null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
            "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }),
    re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, u = 0 > r ? s : o ? r : 0; s > u; u++)
                        if (n = i[u],
                        !(!n.selected && u !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--; )
                        if (i = r[a],
                        re.inArray(re.valHooks.option.get(i), o) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
            }
        },
        ne.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var bt, xt, St = re.expr.attrHandle, Tt = /^(?:checked|selected)$/i, Ct = ne.getSetAttribute, jt = ne.input;
    re.fn.extend({
        attr: function(e, t) {
            return De(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }),
    re.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;

            try {
                return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Se ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(),
                i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? xt : bt)),
                void 0 === n ? i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t),
                null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : void re.removeAttr(e, t)) : void 0
            }
            catch (err)
            {
                console.log(err);
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(_e);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = re.propFix[n] || n,
                    re.expr.match.bool.test(n) ? jt && Ct || !Tt.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""),
                    e.removeAttribute(Ct ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    xt = {
        set: function(e, t, n) {
            return t === !1 ? re.removeAttr(e, n) : jt && Ct || !Tt.test(n) ? e.setAttribute(!Ct && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = St[t] || re.find.attr;
        St[t] = jt && Ct || !Tt.test(t) ? function(e, t, i) {
            var r, o;
            return i || (o = St[t],
            St[t] = r,
            r = null != n(e, t, i) ? t.toLowerCase() : null ,
            St[t] = o),
            r
        }
        : function(e, t, n) {
            return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    jt && Ct || (re.attrHooks.value = {
        set: function(e, t, n) {
            return re.nodeName(e, "input") ? void (e.defaultValue = t) : bt && bt.set(e, t, n)
        }
    }),
    Ct || (bt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    St.id = St.name = St.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    re.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: bt.set
    },
    re.attrHooks.contenteditable = {
        set: function(e, t, n) {
            bt.set(e, "" === t ? !1 : t, n)
        }
    },
    re.each(["width", "height"], function(e, t) {
        re.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    ne.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var kt = /^(?:input|select|textarea|button|object)$/i
      , Ft = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return De(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !re.isXMLDoc(e),
            o && (t = re.propFix[t] || t,
            r = re.propHooks[t]),
            void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }),
    ne.enctype || (re.propFix.enctype = "encoding");
    var Dt = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(_e) || []; u > s; s++)
                    if (n = this[s],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                        for (o = 0; r = t[o++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(_e) || []; u > s; s++)
                    if (n = this[s],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                        for (o = 0; r = t[o++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        a = e ? re.trim(i) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                re(this).toggleClass(e.call(this, n, this.className, t), t)
            }
            : function() {
                if ("string" === n)
                    for (var t, i = 0, r = re(this), o = e.match(_e) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    (n === Se || "boolean" === n) && (this.className && re._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
    re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }),
    re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Et = re.now()
      , Nt = /\?/
      , Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, i = null , r = re.trim(t + "");
        return r && !re.trim(r.replace(Mt, function(e, t, r, o) {
            return n && t && (i = 0),
            0 === i ? e : (n = r || t,
            i += !o - !r,
            "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
    }
    ,
    re.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null ;
        try {
            e.DOMParser ? (i = new DOMParser,
            n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t),
        n
    }
    ;
    var At, Ot, Lt = /#.*$/, Pt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, It = /^(?:GET|HEAD)$/, Yt = /^\/\//, Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, $t = {}, Wt = {}, Rt = "*/".concat("*");
    try {
        Ot = location.href
    } catch (Bt) {
        Ot = pe.createElement("a"),
        Ot.href = "",
        Ot = Ot.href
    }
    At = Qt.exec(Ot.toLowerCase()) || [],
    re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: qt.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, re.ajaxSettings), t) : Q(re.ajaxSettings, e)
        },
        ajaxPrefilter: I($t),
        ajaxTransport: I(Wt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, c, v, y, w, x = t;
                2 !== _ && (_ = 2,
                s && clearTimeout(s),
                l = void 0,
                a = i || "",
                b.readyState = e > 0 ? 4 : 0,
                r = e >= 200 && 300 > e || 304 === e,
                n && (y = $(d, b, n)),
                y = W(d, y, b, r),
                r ? (d.ifModified && (w = b.getResponseHeader("Last-Modified"),
                w && (re.lastModified[o] = w),
                w = b.getResponseHeader("etag"),
                w && (re.etag[o] = w)),
                204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state,
                c = y.data,
                v = y.error,
                r = !v)) : (v = x,
                (e || !x) && (x = "error",
                0 > e && (e = 0))),
                b.status = e,
                b.statusText = (t || x) + "",
                r ? p.resolveWith(f, [c, x, b]) : p.rejectWith(f, [b, x, v]),
                b.statusCode(g),
                g = void 0,
                u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? c : v]),
                m.fireWith(f, [b, x]),
                u && (h.trigger("ajaxComplete", [b, d]),
                --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var i, r, o, a, s, u, l, c, d = re.ajaxSetup({}, t), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? re(f) : re.event, p = re.Deferred(), m = re.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, _ = 0, w = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === _) {
                        if (!c)
                            for (c = {}; t = Ht.exec(a); )
                                c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return _ || (e = y[n] = y[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return _ || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > _)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            b.always(e[b.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return l && l.abort(t),
                    n(0, t),
                    this
                }
            };
            if (p.promise(b).complete = m.add,
            b.success = b.done,
            b.error = b.fail,
            d.url = ((e || d.url || Ot) + "").replace(Lt, "").replace(Yt, At[1] + "//"),
            d.type = t.method || t.type || d.method || d.type,
            d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(_e) || [""],
            null == d.crossDomain && (i = Qt.exec(d.url.toLowerCase()),
            d.crossDomain = !(!i || i[1] === At[1] && i[2] === At[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)),
            Y($t, d, t, b),
            2 === _)
                return b;
            u = d.global,
            u && 0 === re.active++ && re.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !It.test(d.type),
            o = d.url,
            d.hasContent || (d.data && (o = d.url += (Nt.test(o) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = Pt.test(o) ? o.replace(Pt, "$1_=" + Et++) : o + (Nt.test(o) ? "&" : "?") + "_=" + Et++)),
            d.ifModified && (re.lastModified[o] && b.setRequestHeader("If-Modified-Since", re.lastModified[o]),
            re.etag[o] && b.setRequestHeader("If-None-Match", re.etag[o])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", d.contentType),
            b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)
                b.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(f, b, d) === !1 || 2 === _))
                return b.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                b[r](d[r]);
            if (l = Y(Wt, d, t, b)) {
                b.readyState = 1,
                u && h.trigger("ajaxSend", [b, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    b.abort("timeout")
                }, d.timeout));
                try {
                    _ = 1,
                    l.send(v, n)
                } catch (x) {
                    if (!(2 > _))
                        throw x;
                    n(-1, x)
                }
            } else
                n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }),
    re.each(["get", "post"], function(e, t) {
        re[t] = function(e, n, i, r) {
            return re.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            re.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }),
    re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    re.fn.extend({
        wrapAll: function(e) {
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(re.isFunction(e) ? function(t) {
                re(this).wrapInner(e.call(this, t))
            }
            : function() {
                var t = re(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }
    ,
    re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    }
    ;
    var zt = /%20/g
      , Ut = /\[\]$/
      , Gt = /\r?\n/g
      , Jt = /^(?:submit|button|image|reset|file)$/i
      , Vt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = re.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional),
        re.isArray(e) || e.jquery && !re.isPlainObject(e))
            re.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                R(n, e[n], t, r);
        return i.join("&").replace(zt, "+")
    }
    ,
    re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Vt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Ee.test(e))
            }).map(function(e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Gt, "\r\n")
                }
            }).get()
        }
    }),
    re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && B() || z()
    }
    : B;
    var Xt = 0
      , Zt = {}
      , Kt = re.ajaxSettings.xhr();
    e.ActiveXObject && re(e).on("unload", function() {
        for (var e in Zt)
            Zt[e](void 0, !0)
    }),
    ne.cors = !!Kt && "withCredentials"in Kt,
    Kt = ne.ajax = !!Kt,
    Kt && re.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, o = e.xhr(), a = ++Xt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (r in e.xhrFields)
                            o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null ),
                    t = function(n, r) {
                        var s, u, l;
                        if (t && (r || 4 === o.readyState))
                            if (delete Zt[a],
                            t = void 0,
                            o.onreadystatechange = re.noop,
                            r)
                                4 !== o.readyState && o.abort();
                            else {
                                l = {},
                                s = o.status,
                                "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && i(s, u, l, o.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e),
                e
            }
        }
    }),
    re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = pe.head || re("head")[0] || pe.documentElement;
            return {
                send: function(i, r) {
                    t = pe.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null ,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null ,
                        n || r(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = []
      , tn = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || re.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    re.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
        t.converters["script json"] = function() {
            return a || re.error(r + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[r],
        e[r] = function() {
            a = arguments
        }
        ,
        i.always(function() {
            e[r] = o,
            t[r] && (t.jsonpCallback = n.jsonpCallback,
            en.push(r)),
            a && re.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    re.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null ;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || pe;
        var i = de.exec(e)
          , r = !n && [];
        return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r),
        r && r.length && re(r).remove(),
        re.merge([], i.childNodes))
    }
    ;
    var nn = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn)
            return nn.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (i = re.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        re.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && re.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var rn = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, u, l, c = re.css(e, "position"), d = re(e), f = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            o = re.css(e, "top"),
            u = re.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, u]) > -1,
            l ? (i = d.position(),
            a = i.top,
            r = i.left) : (a = parseFloat(o) || 0,
            r = parseFloat(u) || 0),
            re.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    re.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
            var t, n, i = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            return o ? (t = o.documentElement,
            re.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()),
            n = U(o),
            {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                re.nodeName(e[0], "html") || (n = e.offset()),
                n.top += re.css(e[0], "borderTopWidth", !0),
                n.left += re.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - re.css(i, "marginTop", !0),
                    left: t.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position"); )
                    e = e.offsetParent;
                return e || rn
            })
        }
    }),
    re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        re.fn[e] = function(i) {
            return De(this, function(e, i, r) {
                var o = U(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void (o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null )
        }
    }),
    re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = j(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t),
            it.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }),
    re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (i === !0 || r === !0 ? "margin" : "border");
                return De(this, function(t, n, i) {
                    var r;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a);
                }, t, o ? i : void 0, o, null )
            }
        })
    }),
    re.fn.size = function() {
        return this.length
    }
    ,
    re.fn.andSelf = re.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var on = e.jQuery
      , an = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = an),
        t && e.jQuery === re && (e.jQuery = on),
        re
    }
    ,
    typeof t === Se && (e.jQuery = e.$ = re),
    re
});
var B64 = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    lookup: null ,
    ie: /MSIE /.test(navigator.userAgent),
    ieo: /MSIE [67]/.test(navigator.userAgent),
    encode: function(e) {
        var t, n, i, r = B64.toUtf8(e), o = -1, a = r.length, s = [, , , ];
        if (B64.ie) {
            for (var u = []; ++o < a; )
                t = r[o],
                n = r[++o],
                s[0] = t >> 2,
                s[1] = (3 & t) << 4 | n >> 4,
                isNaN(n) ? s[2] = s[3] = 64 : (i = r[++o],
                s[2] = (15 & n) << 2 | i >> 6,
                s[3] = isNaN(i) ? 64 : 63 & i),
                u.push(B64.alphabet.charAt(s[0]), B64.alphabet.charAt(s[1]), B64.alphabet.charAt(s[2]), B64.alphabet.charAt(s[3]));
            return u.join("")
        }
        for (var u = ""; ++o < a; )
            t = r[o],
            n = r[++o],
            s[0] = t >> 2,
            s[1] = (3 & t) << 4 | n >> 4,
            isNaN(n) ? s[2] = s[3] = 64 : (i = r[++o],
            s[2] = (15 & n) << 2 | i >> 6,
            s[3] = isNaN(i) ? 64 : 63 & i),
            u += B64.alphabet[s[0]] + B64.alphabet[s[1]] + B64.alphabet[s[2]] + B64.alphabet[s[3]];
        return u
    },
    decode: function(e) {
        if (e.length % 4)
            throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");
        var t = B64.fromUtf8(e)
          , n = 0
          , i = t.length;
        if (B64.ieo) {
            for (var r = []; i > n; )
                t[n] < 128 ? r.push(String.fromCharCode(t[n++])) : t[n] > 191 && t[n] < 224 ? r.push(String.fromCharCode((31 & t[n++]) << 6 | 63 & t[n++])) : r.push(String.fromCharCode((15 & t[n++]) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]));
            return r.join("")
        }
        for (var r = ""; i > n; )
            r += t[n] < 128 ? String.fromCharCode(t[n++]) : t[n] > 191 && t[n] < 224 ? String.fromCharCode((31 & t[n++]) << 6 | 63 & t[n++]) : String.fromCharCode((15 & t[n++]) << 12 | (63 & t[n++]) << 6 | 63 & t[n++]);
        return r
    },
    toUtf8: function(e) {
        var t, n = -1, i = e.length, r = [];
        if (/^[\x00-\x7f]*$/.test(e))
            for (; ++n < i; )
                r.push(e.charCodeAt(n));
        else
            for (; ++n < i; )
                t = e.charCodeAt(n),
                128 > t ? r.push(t) : 2048 > t ? r.push(t >> 6 | 192, 63 & t | 128) : r.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128);
        return r
    },
    fromUtf8: function(e) {
        var t, n = -1, i = [], r = [, , , ];
        if (!B64.lookup) {
            for (t = B64.alphabet.length,
            B64.lookup = {}; ++n < t; )
                B64.lookup[B64.alphabet.charAt(n)] = n;
            n = -1
        }
        for (t = e.length; ++n < t && (r[0] = B64.lookup[e.charAt(n)],
        r[1] = B64.lookup[e.charAt(++n)],
        i.push(r[0] << 2 | r[1] >> 4),
        r[2] = B64.lookup[e.charAt(++n)],
        64 != r[2]) && (i.push((15 & r[1]) << 4 | r[2] >> 2),
        r[3] = B64.lookup[e.charAt(++n)],
        64 != r[3]); )
            i.push((3 & r[2]) << 6 | r[3]);
        return i
    }
}
  , base64_encode = function(e) {
    return B64.encode(e)
}
  , base64_decode = function(e) {
    return B64.decode(e)
}
;
try {
    module.exports = {
        base64_encode: base64_encode,
        base64_decode: base64_decode
    }
} catch (e) {}
this.JSON || (this.JSON = {}),
function() {
    "use strict";
    function f(e) {
        return 10 > e ? "0" + e : e
    }
    function quote(e) {
        return escapable.lastIndex = 0,
        escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, i, r, o, a, s = gap, u = t[e];
        switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)),
        "function" == typeof rep && (u = rep.call(t, e, u)),
        typeof u) {
        case "string":
            return quote(u);
        case "number":
            return isFinite(u) ? String(u) : "null";
        case "boolean":
        case "null":
            return String(u);
        case "object":
            if (!u)
                return "null";
            if (gap += indent,
            a = [],
            "[object Array]" === Object.prototype.toString.apply(u)) {
                for (o = u.length,
                n = 0; o > n; n += 1)
                    a[n] = str(n, u) || "null";
                return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]",
                gap = s,
                r
            }
            if (rep && "object" == typeof rep)
                for (o = rep.length,
                n = 0; o > n; n += 1)
                    i = rep[n],
                    "string" == typeof i && (r = str(i, u),
                    r && a.push(quote(i) + (gap ? ": " : ":") + r));
            else
                for (i in u)
                    Object.hasOwnProperty.call(u, i) && (r = str(i, u),
                    r && a.push(quote(i) + (gap ? ": " : ":") + r));
            return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}",
            gap = s,
            r
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
        var i;
        if (gap = "",
        indent = "",
        "number" == typeof n)
            for (i = 0; n > i; i += 1)
                indent += " ";
        else
            "string" == typeof n && (indent = n);
        if (rep = t,
        t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": e
        })
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n, i, r = e[t];
            if (r && "object" == typeof r)
                for (n in r)
                    Object.hasOwnProperty.call(r, n) && (i = walk(r, n),
                    void 0 !== i ? r[n] = i : delete r[n]);
            return reviver.call(e, t, r)
        }
        var j;
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
function(e) {
    "function" == typeof define && define.amd ? window.ijQuery ? define(["ijQuery"], e) : define(["jquery"], e) : e(window.ijQuery || jQuery)
}(function(e) {
    function t(e) {
        if (r.raw)
            return e;
        try {
            return decodeURIComponent(e.replace(i, " "))
        } catch (t) {}
    }
    function n(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
        e = t(e);
        try {
            return r.json ? JSON.parse(e) : e
        } catch (n) {}
    }
    var i = /\+/g
      , r = e.cookie = function(i, o, a) {
        if (void 0 !== o) {
            if (a = e.extend({}, r.defaults, a),
            "number" == typeof a.expires) {
                var s = a.expires
                  , u = a.expires = new Date;
                u.setDate(u.getDate() + s)
            }
            return o = r.json ? JSON.stringify(o) : String(o),
            document.cookie = [r.raw ? i : encodeURIComponent(i), "=", r.raw ? o : encodeURIComponent(o), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        for (var l = i ? void 0 : {}, c = document.cookie ? document.cookie.split("; ") : [], d = 0, f = c.length; f > d; d++) {
            var h = c[d].split("=")
              , p = t(h.shift())
              , m = h.join("=");
            if (i && i === p) {
                l = n(m);
                break
            }
            i || void 0 === (m = n(m)) || (l[p] = m)
        }
        return l
    }
    ;
    r.defaults = {},
    e.removeCookie = function(t, n) {
        return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !0) : !1
    }
}),
function($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g
      , meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }
      , hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(e) {
        if (null === e)
            return "null";
        var t, n, i, r, o = $.type(e);
        if ("undefined" !== o) {
            if ("number" === o || "boolean" === o)
                return String(e);
            if ("string" === o)
                return $.quoteString(e);
            if ("function" == typeof e.toJSON)
                return $.toJSON(e.toJSON());
            if ("date" === o) {
                var a = e.getUTCMonth() + 1
                  , s = e.getUTCDate()
                  , u = e.getUTCFullYear()
                  , l = e.getUTCHours()
                  , c = e.getUTCMinutes()
                  , d = e.getUTCSeconds()
                  , f = e.getUTCMilliseconds();
                return 10 > a && (a = "0" + a),
                10 > s && (s = "0" + s),
                10 > l && (l = "0" + l),
                10 > c && (c = "0" + c),
                10 > d && (d = "0" + d),
                100 > f && (f = "0" + f),
                10 > f && (f = "0" + f),
                '"' + u + "-" + a + "-" + s + "T" + l + ":" + c + ":" + d + "." + f + 'Z"'
            }
            if (t = [],
            $.isArray(e)) {
                for (n = 0; n < e.length; n++)
                    t.push($.toJSON(e[n]) || "null");
                return "[" + t.join(",") + "]"
            }
            if ("object" == typeof e) {
                for (n in e)
                    if (hasOwn.call(e, n)) {
                        if (o = typeof n,
                        "number" === o)
                            i = '"' + n + '"';
                        else {
                            if ("string" !== o)
                                continue;i = $.quoteString(n)
                        }
                        o = typeof e[n],
                        "function" !== o && "undefined" !== o && (r = $.toJSON(e[n]),
                        t.push(i + ":" + r))
                    }
                return "{" + t.join(",") + "}"
            }
        }
    }
    ,
    $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
        return eval("(" + str + ")")
    }
    ,
    $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
        var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + str + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    }
    ,
    $.quoteString = function(e) {
        return e.match(escape) ? '"' + e.replace(escape, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : (t = e.charCodeAt(),
            "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        }) + '"' : '"' + e + '"'
    }
}(window.ijQuery || jQuery),
function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length)
                return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"),
            n = new e.validator(t,this[0]),
            e.data(this[0], "validator", n),
            n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                n.settings.submitHandler && (n.submitButton = t.target),
                e(t.target).hasClass("cancel") && (n.cancelSubmit = !0),
                void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
            }),
            this.submit(function(t) {
                function i() {
                    var i;
                    return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),
                    n.settings.submitHandler.call(n, n.currentForm, t),
                    n.submitButton && i.remove(),
                    !1) : !0
                }
                return n.settings.debug && t.preventDefault(),
                n.cancelSubmit ? (n.cancelSubmit = !1,
                i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0,
                !1) : i() : (n.focusInvalid(),
                !1)
            })),
            n)
        },
        valid: function() {
            if (e(this[0]).is("form"))
                return this.validate().form();
            var t = !0
              , n = e(this[0].form).validate();
            return this.each(function() {
                t = t && n.element(this)
            }),
            t
        },
        removeAttrs: function(t) {
            var n = {}
              , i = this;
            return e.each(t.split(/\s/), function(e, t) {
                n[t] = i.attr(t),
                i.removeAttr(t)
            }),
            n
        },
        rules: function(t, n) {
            var i = this[0];
            if (t) {
                var r = e.data(i.form, "validator").settings
                  , o = r.rules
                  , a = e.validator.staticRules(i);
                switch (t) {
                case "add":
                    e.extend(a, e.validator.normalizeRule(n)),
                    delete a.messages,
                    o[i.name] = a,
                    n.messages && (r.messages[i.name] = e.extend(r.messages[i.name], n.messages));
                    break;
                case "remove":
                    if (!n)
                        return delete o[i.name],
                        a;
                    var s = {};
                    return e.each(n.split(/\s/), function(e, t) {
                        s[t] = a[t],
                        delete a[t]
                    }),
                    s
                }
            }
            var u = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
            if (u.required) {
                var l = u.required;
                delete u.required,
                u = e.extend({
                    required: l
                }, u)
            }
            return u
        }
    }),
    e.extend(e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            return !!e.trim("" + e(t).val())
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }),
    e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t),
        this.currentForm = n,
        this.init()
    }
    ,
    e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t),
            e.validator.format.apply(this, n)
        }
        : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)),
        n.constructor !== Array && (n = [n]),
        e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                return n
            })
        }),
        t)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e, t) {
                this.lastActive = e,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(e)).hide())
            },
            onfocusout: function(e, t) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e, t) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var n = e.data(this[0].form, "validator")
                      , i = "on" + t.type.replace(/^validate/, "");
                    n.settings[i] && n.settings[i].call(n, this[0], t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var n = this.groups = {};
                e.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)),
                    e.each(i, function(e, i) {
                        n[i] = t
                    })
                });
                var i = this.settings.rules;
                e.each(i, function(t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }),
                e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t),
                this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                e.extend(this.submitted, this.errorMap),
                this.invalid = e.extend({}, this.errorMap),
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                t = this.validationTargetFor(this.clean(t)),
                this.lastElement = t,
                this.prepareElement(t),
                this.currentElements = e(t);
                var n = this.check(t) !== !1;
                return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                n
            },
            showErrors: function(t) {
                if (t) {
                    e.extend(this.errorMap, t),
                    this.errorList = [];
                    for (var n in t)
                        this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null ,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t = 0;
                for (var n in e)
                    t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this
                  , n = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.replace(" ", ".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = e([]),
                this.toHide = e([]),
                this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var n = e(t).attr("type")
                  , i = e(t).val();
                return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i = e(t).rules(), r = !1, o = this.elementValue(t);
                for (var a in i) {
                    var s = {
                        method: a,
                        parameters: i[a]
                    };
                    try {
                        if (n = e.validator.methods[a].call(this, o, t, s.parameters),
                        "dependency-mismatch" === n) {
                            r = !0;
                            continue
                        }
                        if (r = !1,
                        "pending" === n)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n)
                            return this.formatAndAdd(t, s),
                            !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", u),
                        u
                    }
                }
                return r ? void 0 : (this.objectLength(i) && this.successList.push(t),
                !0)
            },
            customDataMessage: function(t, n) {
                return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e]
            },
            defaultMessage: function(t, n) {
                return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, n) {
                var i = this.defaultMessage(t, n.method)
                  , r = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)),
                this.errorList.push({
                    message: i,
                    element: t
                }),
                this.errorMap[t.name] = i,
                this.submitted[t.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t;
                for (e = 0; this.errorList[e]; e++) {
                    var n = this.errorList[e];
                    this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(n.element, n.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, n) {
                var i = this.errorsFor(t);
                i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""),
                this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))),
                !n && this.settings.success && (i.text(""),
                "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)),
                this.toShow = this.toShow.add(i)
            },
            errorsFor: function(t) {
                var n = this.idOrName(t);
                return this.errors().filter(function() {
                    return e(this).attr("for") === n
                })
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]),
                e
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                case "select":
                    return e("option:selected", n).length;
                case "input":
                    if (this.checkable(n))
                        return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            },
            dependTypes: {
                "boolean": function(e, t) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++,
                this.pending[e.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null ,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {}
              , i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }),
            n
        },
        attributeRules: function(t) {
            var n = {}
              , i = e(t)
              , r = i[0].getAttribute("type");
            for (var o in e.validator.methods) {
                var a;
                "required" === o ? (a = i.get(0).getAttribute(o),
                "" === a && (a = !0),
                a = !!a) : a = i.attr(o),
                /min|max/.test(o) && (null === r || /number|range|text/.test(r)) && (a = Number(a)),
                a ? n[o] = a : r === o && "range" !== r && (n[o] = !0)
            }
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength,
            n
        },
        dataRules: function(t) {
            var n, i, r = {}, o = e(t);
            for (n in e.validator.methods)
                i = o.data("rule-" + n.toLowerCase()),
                void 0 !== i && (r[n] = i);
            return r
        },
        staticRules: function(t) {
            var n = {}
              , i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}),
            n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(i, r) {
                if (r === !1)
                    return void delete t[i];
                if (r.param || r.depends) {
                    var o = !0;
                    switch (typeof r.depends) {
                    case "string":
                        o = !!e(r.depends, n.form).length;
                        break;
                    case "function":
                        o = r.depends.call(n, n)
                    }
                    o ? t[i] = void 0 !== r.param ? r.param : !0 : delete t[i]
                }
            }),
            e.each(t, function(i, r) {
                t[i] = e.isFunction(r) ? r(n) : r
            }),
            e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/),
                t[this] = [Number(n[0]), Number(n[1])]))
            }),
            e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }),
                t = n
            }
            return t
        },
        addMethod: function(t, n, i) {
            e.validator.methods[t] = n,
            e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t],
            n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, i) {
                if (!this.depend(i, n))
                    return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e))
                    return !1;
                var n = 0
                  , i = 0
                  , r = !1;
                e = e.replace(/\D/g, "");
                for (var o = e.length - 1; o >= 0; o--) {
                    var a = e.charAt(o);
                    i = parseInt(a, 10),
                    r && (i *= 2) > 9 && (i -= 9),
                    n += i,
                    r = !r
                }
                return n % 10 === 0
            },
            minlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || r >= i
            },
            maxlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || i >= r
            },
            rangelength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || n >= e
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            equalTo: function(t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(n).valid()
                }),
                t === r.val()
            },
            remote: function(t, n, i) {
                if (this.optional(n))
                    return "dependency-mismatch";
                var r = this.previousValue(n);
                if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}),
                r.originalMessage = this.settings.messages[n.name].remote,
                this.settings.messages[n.name].remote = r.message,
                i = "string" == typeof i && {
                    url: i
                } || i,
                r.old === t)
                    return r.valid;
                r.old = t;
                var o = this;
                this.startRequest(n);
                var a = {};
                return a[n.name] = t,
                e.ajax(e.extend(!0, {
                    url: i,
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: a,
                    success: function(i) {
                        o.settings.messages[n.name].remote = r.originalMessage;
                        var a = i === !0 || "true" === i;
                        if (a) {
                            var s = o.formSubmitted;
                            o.prepareElement(n),
                            o.formSubmitted = s,
                            o.successList.push(n),
                            delete o.invalid[n.name],
                            o.showErrors()
                        } else {
                            var u = {}
                              , l = i || o.defaultMessage(n, "remote");
                            u[n.name] = r.message = e.isFunction(l) ? l(t) : l,
                            o.invalid[n.name] = !0,
                            o.showErrors(u)
                        }
                        r.valid = a,
                        o.stopRequest(n, a)
                    }
                }, i)),
                "pending"
            }
        }
    }),
    e.format = e.validator.format
}(jQuery),
function(e) {
    var t = {};
    if (e.ajaxPrefilter)
        e.ajaxPrefilter(function(e, n, i) {
            var r = e.port;
            "abort" === e.mode && (t[r] && t[r].abort(),
            t[r] = i)
        });
    else {
        var n = e.ajax;
        e.ajax = function(i) {
            var r = ("mode"in i ? i : e.ajaxSettings).mode
              , o = ("port"in i ? i : e.ajaxSettings).port;
            return "abort" === r ? (t[o] && t[o].abort(),
            t[o] = n.apply(this, arguments),
            t[o]) : n.apply(this, arguments)
        }
    }
}(jQuery),
function(e) {
    e.extend(e.fn, {
        validateDelegate: function(t, n, i) {
            return this.bind(n, function(n) {
                var r = e(n.target);
                return r.is(t) ? i.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery);
var FormErrorPosition = function() {
    return this
}
;
FormErrorPosition.prototype.fixAllPositions = function(e) {
    var t, n = !1, i = this;
    e ? (t = e.find(".email-form"),
    n = !0) : (t = ijQuery.find(".block-inner > .page-element"),
    t = ijQuery(t).find(".email-form")),
    t.each(function() {
        var e = ijQuery(this);
        i.fixPosition(e, n)
    })
}
,
FormErrorPosition.prototype.fixPosition = function(e, t) {
    var n = e.find("button.submit-button");
    if (n.length)
        if (parseInt(n.css("left"), 10) >= e.width() / 2)
            e.addClass("error-on-left");
        else {
            var i, r = 0 - parseInt(e.find(".email-form-messagebox-wrapper").css("right"), 10), o = parseInt(e.parents(".page-element").css("left"), 10), a = e.width();
            i = t ? e.parents(".popup-inner").width() : e.parents(".block-inner").width(),
            a + o + r > i && e.addClass("error-on-left")
        }
}
,
Number.isFinite = Number.isFinite || function(e) {
    return "number" == typeof e && isFinite(e)
}
,
"undefined" == typeof ijQuery && (ijQuery = jQuery);
var InstapageFormController = function() {}
;
InstapageFormController.prototype.init = function() {
    var e = navigator.userAgent;
    this.is_mobile = !1,
    (e.match(/Iphone/i) || e.match(/Ipod/i) || e.match(/Android/i) || e.match(/J2ME/i) || e.match(/BlackBerry/i) || e.match(/iPhone|iPod/i) || e.match(/Opera Mini/i) || e.match(/IEMobile/i) || e.match(/Mobile/i) || e.match(/HTC/i)) && (this.is_mobile = !0);
    var t = this;
    
},
InstapageFormController.prototype.closeDim = function() {
    ijQuery(".notification").hide()
}
;
var _form_controller = new InstapageFormController;
_form_controller.init(),
ijQuery(document).ready(function() {
    setTimeout(function() {
        ijQuery(".social.tiles [id^=___plus]").width("58px"),
        ijQuery(".social.tiles [id^=___plus]").each(function(e, t) {
            ijQuery(t).children().first().width("58px")
        }),
        ijQuery(".social.lines [id^=___plus]").width("84px"),
        ijQuery(".social.lines [id^=___plus]").each(function(e, t) {
            ijQuery(t).children().first().width("84px")
        }),
        ijQuery(".social.buttons [id^=___plus]").width("58px"),
        ijQuery(".social.buttons [id^=___plus]").each(function(e, t) {
            ijQuery(t).children().first().width("58px")
        }),
        /^((?!chrome).)*safari/i.test(navigator.userAgent) && (ijQuery(".horizontal .IN-widget, .horizontal [id^=twitter-widget-]").css({
            display: "inline",
            "line-height": "",
            width: "auto"
        }),
        setTimeout(function() {
            ijQuery(".horizontal [id^=twitter-widget-]").css({
                width: "auto",
                display: "inline",
                "line-height": "",
                "float": "none"
            }),
            setTimeout(function() {
                ijQuery(".horizontal [id^=twitter-widget-]").css({
                    width: "58px",
                    "float": "left"
                }),
                ijQuery(".horizontal [id^=___plus]").parent().css({
                    "padding-top": "0px"
                })
            }, 100),
            ijQuery(".horizontal .IN-widget").css("width", "61px")
        }, 100))
    }, 1500),
    ijQuery("a").on("click", function(e) {
        function t() {
            if ("function" == typeof window.instapageAnchorClick)
                try {
                    window.instapageAnchorClick(o, s ? parseInt(s, 10) : null )
                } catch (e) {
                    window.console && console.log(e)
                }
        }
        function n(e) {
            function t() {
                o && window.__unique && (window.__unique.setConverted(),
                window.__unique.save()),
                "function" == typeof e && e()
            }
            var n, i = window.__conversions_settings || {}, r = u.attr("href"), o = !1;
            return i.links === !1 || Array.isArray(i.links) && i.links.indexOf(r) < 0 ? void t() : (n = iCopyKeenEvent("conversion", {
                conversion_type: "link",
                href: r
            }),
            iCreateTrackingPixel(iEncodePixelUrl.apply(iEncodePixelUrl, n)).load(function() {
                o = !0,
                t()
            }).error(t).appendTo(ijQuery("body")),
            !1)
        }
        function i(e) {
            var t = window.__variant;
            try {
                if (window.__unique && window.__unique.isConverted())
                    return "function" == typeof e && e(),
                    !0;
                if (window.__conversions_settings && window.__keen_io_called_parameters)
                    return n(e);
                "PROXY_SERVICES" !== __instapage_proxy_services && (__instapage_services = __instapage_proxy_services),
                2 === window.__mobile_version && is_new_mobile_visible() && t.indexOf("-mobile") < 0 && (t += "-mobile"),
                ijQuery.ajax({
                    url: __instapage_services + "/ajax/pageserver/stats/conversion/" + window.__page_id + "/" + window.__version + "/" + t + "/",
                    data: {
                        type: "link",
                        link: u.attr("href")
                    },
                    type: "post",
                    dataType: "json",
                    success: function() {
                        window.__unique && (window.__unique.setConverted(),
                        window.__unique.save()),
                        "function" == typeof e && e()
                    },
                    error: function(t, n, i) {
                        "function" == typeof e && e()
                    }
                })
            } catch (i) {
                "function" == typeof e && e()
            }
        }
        if (window.__preview)
            return !0;
        var r, o = this, a = ijQuery(this), s = o.getAttribute("data-wid"), u = "IMG" === a[0].nodeName ? a.parentsUntil(".page-element", "a") : a;
        return r = u.attr("href"),
        u.attr("href") && "#" === u.attr("href").substr(0, 1) ? !0 : ijQuery(u).hasClass("custom-twitter-widget") ? !0 : "_blank" === ijQuery(u).attr("target") || /mailto:/i.test(u.attr("href")) ? (i(),
        t(),
        u.hasClass("ip-stay-on-page") ? !1 : !0) : (i(function() {
            t(),
            u.hasClass("ip-stay-on-page") || setTimeout(function() {
                r && r.length > 0 && (window.location.href = u.attr("href"))
            }, 250)
        }),
        !1)
    })
}),
function(e, t) {
    "use strict";
    var n = function(t) {
        function n(t) {
            i.events.push(t),
            i.event = t,
            i.message = t.data;
            try {
                i.data = JSON.parse(t.data),
                "get" === i.data.message && "instapage-local-storage-iframe" === i.data.key ? (i.iframe_name_test = i.data.response,
                i.iframes.push(e.frames[i.data.response]),
                i.iframe = !0,
                "function" == typeof i.connectTestCallback && i.connectTestCallback()) : "get" === i.data.message && (i.local_data[i.data.key] = i.data.response)
            } catch (n) {}
        }
        var i = this;
        this.message = !1,
        this.data = !1,
        this.event = !1,
        this.events = [],
        this.iframes = [],
        this.options = t,
        this.local_data = {},
        e.addEventListener("message", n, !1)
    }
    ;
    n.prototype.connect = function(n) {
        var i, r;
        if (n)
            for (i = 0; i < this.iframes.length; i++)
                if (r = this.iframes[i],
                r === e) {
                    if ("get" === n.request)
                        return t.jStorage.get(n.key);
                    if ("set" === n.request)
                        return t.jStorage.set(n.key, n.val);
                    "setWithTime" === n.request && (t.jStorage.set(n.key, n.val),
                    t.jStorage.setTTL(n.key, n.time ? n.time : 0))
                } else
                    n.good = !0,
                    r.postMessage(n, "*")
    }
    ,
    n.prototype.get = function(e, t) {
        if ("undefined" != typeof __page_type && 2 === __page_type && !t)
            try {
                e = base64_decode(e)
            } catch (n) {}
        return !this.iframes && this.iframes.length > 0 || !e ? !1 : this.local_data[e] ? this.local_data[e] : (this.local_data[e] = this.connect({
            request: "get",
            key: e
        }),
        this.local_data[e] = this.local_data[e] ? this.local_data[e] : this.getData(e),
        this.local_data[e])
    }
    ,
    n.prototype.getData = function(e) {
        return this.data && this.data[e] ? this.data[e] : ""
    }
    ,
    n.prototype.getMessage = function() {
        return this.message
    }
    ,
    n.prototype.set = function(e, t, n) {
        if (!this.iframes && this.iframes.length > 0)
            return !1;
        if ("undefined" != typeof __page_type && 2 === __page_type && !n)
            try {
                e = base64_decode(e)
            } catch (i) {}
        this.connect({
            request: "set",
            key: e,
            val: t
        })
    }
    ,
    n.prototype.setWithTime = function(e, t, n, i) {
        if (!this.iframes && this.iframes.length > 0)
            return !1;
        if ("undefined" != typeof __page_type && 2 === __page_type && !n)
            try {
                e = base64_decode(e)
            } catch (r) {}
        this.connect({
            request: "setWithTime",
            key: e,
            val: t,
            time: i
        })
    }
    ,
    n.prototype.connectTest = function(n) {
        var i, r;
        r = this.iframes,
        i = t(n).attr("name"),
        this.iframes = [e.frames[i]],
        this.set("instapage-local-storage-iframe", i, !0),
        this.get("instapage-local-storage-iframe", !0),
        this.iframes = r
    }
    ,
    n.prototype.test = function() {
        return !this.iframes && this.iframes.length > 0 ? !1 : void this.connect({
            request: "test"
        })
    }
    ,
    n.prototype.fillForm = function() {
        var e = this;
        this.iframes && this.iframes.length > 0 && (t(".field-text input, .field-textarea textarea").each(function() {
            var n = t(this)
              , i = n.attr("name")
              , r = e.get(i);
            r ? n.val(r) : setTimeout(function() {
                r = e.get(i),
                n.val(r ? r : "")
            }, 100)
        }),
        t(".field-select select").each(function() {
            var n = t(this)
              , i = n.attr("name")
              , r = e.get(i);
            r ? n.find('[value="' + r + '"]').attr("selected", !0) : setTimeout(function() {
                r = e.get(i),
                r && n.find('[value="' + r + '"]').attr("selected", !0)
            }, 100)
        }),
        t(".field-radio input").each(function() {
            var n = t(this)
              , i = n.attr("name")
              , r = e.get(i);
            r ? r === n.attr("value") && n.attr("name") === i && n.selected(!0) : setTimeout(function() {
                r = e.get(i),
                r === n.attr("value") && n.attr("name") === i && n.prop("checked", !0)
            }, 100)
        }),
        t('.field-checkbox input[type="checkbox"]').each(function() {
            var n = t(this)
              , i = n.attr("name")
              , r = e.get(i);
            r ? r === n.attr("value") && n.attr("name") === i && n.selected(!0) : setTimeout(function() {
                r = e.get(i),
                r === n.attr("value") && n.attr("name") === i && (n.prop("checked", !0),
                n.parent().children(".hidden-checkbox").length && n.parent().children(".hidden-checkbox").val("yes"))
            }, 100)
        }))
    }
    ,
    n.prototype.saveConversionData = function(t, n) {
        var i = {
            page_id: t,
            variation: n,
            timestamp_created: Date.now(),
            timestamp_sent: null
        };
        e.__unique && e.__unique.isConverted() || (!e.__conversions_settings || e.__conversions_settings.external) && (e.__keen_io_called_parameters && (i.external_image = iEncodePixelUrl.apply(iEncodePixelUrl, iCopyKeenEvent("conversion", {
            type: "external"
        }))),
        this.iframes && this.iframes.length > 0 && (e.__unique && (e.__unique.setConverted(),
        e.__unique.save()),
        this.setWithTime("instapage_conversion_" + t, i, !0, 26784e5)))
    }
    ,
    n.prototype.conversionDataSent = function(e, t, n) {
        this.iframes && this.iframes.length > 0 && (t ? t.timestamp_sent = Date.now() : t = {
            page_id: e,
            variation: n,
            timestamp_created: Date.now(),
            timestamp_sent: null
        },
        this.setWithTime("instapage_conversion_" + e, t, !0, 26784e5))
    }
    ,
    n.prototype.getConversionData = function(e, t) {
        var n, i = this;
        this.iframes && this.iframes.length > 0 && (n = this.get("instapage_conversion_" + e, !0),
        n ? t(n) : setTimeout(function() {
            n = i.get("instapage_conversion_" + e, !0),
            t(n)
        }, 100))
    }
    ,
    e.ServerStorageLocal = n,
    t(document).ready(function() {
        function i() {
            e.InstapageLocalStorage || (e.InstapageLocalStorage = new n,
            e.InstapageLocalStorage.connectTestCallback = function() {
                this.saveConversionData(e.__page_id, e.__variant),
                "undefined" != typeof e.form_prepopulate_disable && e.form_prepopulate_disable || this.fillForm()
            }
            ),
            e.InstapageLocalStorage.connectTest(this)
        }
        t("iframe.instapage-noscrap").on("load", i)
    })
}(window, ijQuery || $),
function(e) {
    var t = e.ijQuery || e.jQuery
      , n = e.InstapageUniqueVisit = function(e, t) {
        this.cookie_name = e,
        t = t || {},
        t.cookie_name = t.cookie_name || e,
        t.responsive_mode = t.responsive_mode || null ,
        t.variant = t.variant || null ,
        t.reset = t.reset || {},
        t.cookie_expires = t.cookie_expires || 365,
        t.cookie_path = t.cookie_path || "/",
        this.configuration = "function" == typeof Object.freeze ? Object.freeze(t) : t,
        this.detectCookie()
    }
    ;
    n.FLAG_VISIT = 0,
    n.FLAG_CONVERSION = 1,
    n.FLAG_RESPONSIVE_MODE = 2,
    n.prototype.getPageId = function() {
        return this.page_id || (this.page_id = 0 | (/\d+/.exec(this.configuration.cookie_name) || []).pop()),
        this.page_id
    }
    ,
    n.prototype.getCurrentVariant = function() {
        return this.current_variant || (this.current_variant = this.configuration.variant || e.__variant,
        this.current_variant || (this.current_variant = t.cookie("instapage-variant-" + this.getPageId())),
        this.current_variant = (/^\w+/.exec(this.current_variant) || []).pop()),
        this.current_variant
    }
    ,
    n.prototype.setCookieObject = function(e) {
        this.cookie_object = e
    }
    ,
    n.prototype.getCookieObject = function() {
        return this.cookie_object || {}
    }
    ,
    n.prototype.hasBinaryFlag = function(e, t) {
        var n = this.getCookieObject()
          , i = n[t || this.getCurrentVariant()] || {};
        return i.b & 1 << e
    }
    ,
    n.prototype.updateBinaryFlag = function(e, t, n, i) {
        var r = this.getCookieObject()
          , o = r[i || this.getCurrentVariant()] || {};
        e = 1 << e,
        t ? o.b |= e : o.b &= ~e,
        o.d = n ? ~~(Date.now() / 1e3) : o.d,
        r[i || this.getCurrentVariant()] = o,
        this.setCookieObject(r)
    }
    ,
    n.prototype.checkResetDate = function(e) {
        var t, n = this.getCookieObject();
        return e = e || this.getCurrentVariant(),
        t = n[e],
        t && t.d && this.configuration.reset[e] ? t.d > this.configuration.reset[e] : !this.configuration.reset[e]
    }
    ,
    n.prototype.setVisited = function(e, t) {
        this.updateBinaryFlag(n.FLAG_VISIT, !0, !0, e),
        t || this.updateBinaryFlag(n.FLAG_CONVERSION, !1, !1, e)
    }
    ,
    n.prototype.isVisited = function(e) {
        return this.hasBinaryFlag(n.FLAG_VISIT, e) && this.checkResetDate(e) && !0
    }
    ,
    n.prototype.setConverted = function(e) {
        this.updateBinaryFlag(n.FLAG_CONVERSION, !0, !0, e)
    }
    ,
    n.prototype.isConverted = function(e) {
        return this.hasBinaryFlag(n.FLAG_CONVERSION, e) && this.checkResetDate(e) && !0
    }
    ,
    n.prototype.setResponsiveMode = function(e, t) {
        this.updateBinaryFlag(n.FLAG_RESPONSIVE_MODE, e, !1, t)
    }
    ,
    n.prototype.isResponsiveMode = function(e) {
        return this.hasBinaryFlag(n.FLAG_RESPONSIVE_MODE, e) && !0
    }
    ,
    n.prototype.detectCookie = function() {
        var e = t.cookie(this.cookie_name)
          , i = null ;
        try {
            if (i = JSON.parse(e),
            "object" == typeof i)
                return this.setCookieObject(i);
            throw i
        } catch (r) {
            this.setCookieObject({}),
            e && (this.updateBinaryFlag(n.FLAG_VISIT, !0, !1, this.getCurrentVariant()),
            this.setResponsiveMode(this.configuration.responsive_mode),
            this.save())
        }
    }
    ,
    n.prototype.save = function() {
        t.cookie(this.configuration.cookie_name, JSON.stringify(this.getCookieObject()), {
            expires: this.configuration.cookie_expires,
            path: this.configuration.cookie_path
        })
    }
}(window),
function(e, t, n) {
    function i(e) {
        var t = {}
          , i = /^jQuery\d+$/;
        return n.each(e.attributes, function(e, n) {
            n.specified && !i.test(n.name) && (t[n.name] = n.value)
        }),
        t
    }
    function r(e, t) {
        var i = this
          , r = n(i);
        if (i.value == r.attr("placeholder") && r.hasClass("placeholder"))
            if (r.data("placeholder-password")) {
                if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")),
                e === !0)
                    return r[0].value = t;
                r.focus()
            } else
                i.value = "",
                r.removeClass("placeholder"),
                i == a() && i.select()
    }
    function o() {
        var e, t = this, o = n(t), a = this.id;
        if ("" == t.value) {
            if ("password" == t.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (s) {
                        e = n("<input>").attr(n.extend(i(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": a
                    }).bind("focus.placeholder", r),
                    o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": a
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", a).show()
            }
            o.addClass("placeholder"),
            o[0].value = o.attr("placeholder")
        } else
            o.removeClass("placeholder")
    }
    function a() {
        try {
            return t.activeElement
        } catch (e) {}
    }
    var s, u, l = "placeholder"in t.createElement("input"), c = "placeholder"in t.createElement("textarea"), d = n.fn, f = n.valHooks, h = n.propHooks;
    l && c ? (u = d.placeholder = function() {
        return this
    }
    ,
    u.input = u.textarea = !0) : (u = d.placeholder = function() {
        var e = this;
        return e.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        e
    }
    ,
    u.input = l,
    u.textarea = c,
    s = {
        get: function(e) {
            var t = n(e)
              , i = t.data("placeholder-password");
            return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, t) {
            var i = n(e)
              , s = i.data("placeholder-password");
            return s ? s[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t,
            e != a() && o.call(e)) : i.hasClass("placeholder") ? r.call(e, !0, t) || (e.value = t) : e.value = t,
            i) : e.value = t
        }
    },
    l || (f.input = s,
    h.value = s),
    c || (f.textarea = s,
    h.value = s),
    n(function() {
        n(t).delegate("form", "submit.placeholder", function() {
            var e = n(".placeholder", this).each(r);
            setTimeout(function() {
                e.each(o)
            }, 10)
        })
    }),
    n(e).bind("beforeunload.placeholder", function() {
        n(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery);
var MobileHelper = function() {}
;
MobileHelper.prototype.initViewport = function(e, t) {
    function n() {
        s && (s = !1,
        o = setTimeout(i, 250))
    }
    function i() {
        var e, t, n, i, r;
        r = window.innerHeight > window.innerWidth ? 0 : 1,
        0 === r ? (t = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight,
        n = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) : (t = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight,
        n = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight),
        t && t > 0 && (i = t / l,
        e = document.getElementById("mobile-viewport"),
        e && (t > l ? e.setAttribute("content", "minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,width=" + t / i + ",height=" + n / i) : e.setAttribute("content", "minimum-scale=" + i + ",maximum-scale=" + i + ",initial-scale=" + i + ",width=" + t + ",height=" + n))),
        s = !0
    }
    function r() {
        var e;
        window.innerWidth && window.innerWidth > 0 && window.innerWidth < l && (e = document.getElementById("mobile-viewport"),
        e && e.setAttribute("content", "initial-scale=" + window.innerWidth / l))
    }
    var o, a, s = !0, u = navigator.userAgent, l = e;
    t ? (window.innerWidth < 400 || window.innerHeight < 400) && (l = 400,
    i(),
    ijQuery(window).off("orientationchange").on("orientationchange", n)) : (u.indexOf("Android") >= 0 && (a = parseFloat(u.slice(u.indexOf("Android") + 8))),
    !a || a > 4.3 ? (i(),
    ijQuery(window).off("orientationchange").on("orientationchange", n)) : r())
}
,
function() {
    "use strict";
    function e() {
        var e = !1;
        if ("localStorage"in window)
            try {
                window.localStorage.setItem("_tmptest", "tmpval"),
                e = !0,
                window.localStorage.removeItem("_tmptest")
            } catch (t) {}
        if (e)
            try {
                window.localStorage && (b = window.localStorage,
                T = "localStorage",
                k = b.jStorage_update)
            } catch (r) {}
        else if ("globalStorage"in window)
            try {
                window.globalStorage && (b = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname],
                T = "globalStorage",
                k = b.jStorage_update)
            } catch (o) {}
        else {
            if (x = document.createElement("link"),
            !x.addBehavior)
                return void (x = null );
            x.style.behavior = "url(#default#userData)",
            document.getElementsByTagName("head")[0].appendChild(x);
            try {
                x.load("jStorage")
            } catch (a) {
                x.setAttribute("jStorage", "{}"),
                x.save("jStorage"),
                x.load("jStorage")
            }
            var u = "{}";
            try {
                u = x.getAttribute("jStorage")
            } catch (l) {}
            try {
                k = x.getAttribute("jStorage_update")
            } catch (f) {}
            b.jStorage = u,
            T = "userDataBehavior"
        }
        s(),
        c(),
        n(),
        d(),
        "addEventListener"in window && window.addEventListener("pageshow", function(e) {
            e.persisted && i()
        }, !1)
    }
    function t() {
        var e = "{}";
        if ("userDataBehavior" == T) {
            x.load("jStorage");
            try {
                e = x.getAttribute("jStorage")
            } catch (t) {}
            try {
                k = x.getAttribute("jStorage_update")
            } catch (n) {}
            b.jStorage = e
        }
        s(),
        c(),
        d()
    }
    function n() {
        "localStorage" == T || "globalStorage" == T ? "addEventListener"in window ? window.addEventListener("storage", i, !1) : document.attachEvent("onstorage", i) : "userDataBehavior" == T && setInterval(i, 1e3)
    }
    function i() {
        var e;
        clearTimeout(j),
        j = setTimeout(function() {
            if ("localStorage" == T || "globalStorage" == T)
                e = b.jStorage_update;
            else if ("userDataBehavior" == T) {
                x.load("jStorage");
                try {
                    e = x.getAttribute("jStorage_update")
                } catch (t) {}
            }
            e && e != k && (k = e,
            r())
        }, 25)
    }
    function r() {
        var e, n = y.parse(y.stringify(w.__jstorage_meta.CRC32));
        t(),
        e = y.parse(y.stringify(w.__jstorage_meta.CRC32));
        var i, r = [], a = [];
        for (i in n)
            if (n.hasOwnProperty(i)) {
                if (!e[i]) {
                    a.push(i);
                    continue
                }
                n[i] != e[i] && "2." == String(n[i]).substr(0, 2) && r.push(i)
            }
        for (i in e)
            e.hasOwnProperty(i) && (n[i] || r.push(i));
        o(r, "updated"),
        o(a, "deleted")
    }
    function o(e, t) {
        e = [].concat(e || []);
        var n, i, r, o;
        if ("flushed" == t) {
            e = [];
            for (var a in C)
                C.hasOwnProperty(a) && e.push(a);
            t = "deleted"
        }
        for (n = 0,
        r = e.length; r > n; n++) {
            if (C[e[n]])
                for (i = 0,
                o = C[e[n]].length; o > i; i++)
                    C[e[n]][i](e[n], t);
            if (C["*"])
                for (i = 0,
                o = C["*"].length; o > i; i++)
                    C["*"][i](e[n], t)
        }
    }
    function a() {
        var e = (+new Date).toString();
        if ("localStorage" == T || "globalStorage" == T)
            try {
                b.jStorage_update = e
            } catch (t) {
                T = !1
            }
        else
            "userDataBehavior" == T && (x.setAttribute("jStorage_update", e),
            x.save("jStorage"));
        i()
    }
    function s() {
        if (b.jStorage)
            try {
                w = y.parse(String(b.jStorage))
            } catch (e) {
                b.jStorage = "{}"
            }
        else
            b.jStorage = "{}";
        S = b.jStorage ? String(b.jStorage).length : 0,
        w.__jstorage_meta || (w.__jstorage_meta = {}),
        w.__jstorage_meta.CRC32 || (w.__jstorage_meta.CRC32 = {})
    }
    function u() {
        h();
        try {
            b.jStorage = y.stringify(w),
            x && (x.setAttribute("jStorage", b.jStorage),
            x.save("jStorage")),
            S = b.jStorage ? String(b.jStorage).length : 0
        } catch (e) {}
    }
    function l(e) {
        if ("string" != typeof e && "number" != typeof e)
            throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == e)
            throw new TypeError("Reserved key name");
        return !0
    }
    function c() {
        var e, t, n, i, r = 1 / 0, s = !1, l = [];
        if (clearTimeout(_),
        w.__jstorage_meta && "object" == typeof w.__jstorage_meta.TTL) {
            e = +new Date,
            n = w.__jstorage_meta.TTL,
            i = w.__jstorage_meta.CRC32;
            for (t in n)
                n.hasOwnProperty(t) && (n[t] <= e ? (delete n[t],
                delete i[t],
                delete w[t],
                s = !0,
                l.push(t)) : n[t] < r && (r = n[t]));
            r != 1 / 0 && (_ = setTimeout(c, Math.min(r - e, 2147483647))),
            s && (u(),
            a(),
            o(l, "deleted"))
        }
    }
    function d() {
        var e, t;
        if (w.__jstorage_meta.PubSub) {
            var n, i = D, r = [];
            for (e = t = w.__jstorage_meta.PubSub.length - 1; e >= 0; e--)
                n = w.__jstorage_meta.PubSub[e],
                n[0] > D && (i = n[0],
                r.unshift(n));
            for (e = r.length - 1; e >= 0; e--)
                f(r[e][1], r[e][2]);
            D = i
        }
    }
    function f(e, t) {
        if (F[e])
            for (var n = 0, i = F[e].length; i > n; n++)
                try {
                    F[e][n](e, y.parse(y.stringify(t)))
                } catch (r) {}
    }
    function h() {
        if (w.__jstorage_meta.PubSub) {
            for (var e = +new Date - 2e3, t = 0, n = w.__jstorage_meta.PubSub.length; n > t; t++)
                if (w.__jstorage_meta.PubSub[t][0] <= e) {
                    w.__jstorage_meta.PubSub.splice(t, w.__jstorage_meta.PubSub.length - t);
                    break
                }
            w.__jstorage_meta.PubSub.length || delete w.__jstorage_meta.PubSub
        }
    }
    function p(e, t) {
        w.__jstorage_meta || (w.__jstorage_meta = {}),
        w.__jstorage_meta.PubSub || (w.__jstorage_meta.PubSub = []),
        w.__jstorage_meta.PubSub.unshift([+new Date, e, t]),
        u(),
        a()
    }
    function m(e, t) {
        for (var n, i = e.length, r = t ^ i, o = 0; i >= 4; )
            n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24,
            n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16),
            n ^= n >>> 24,
            n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16),
            r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ n,
            i -= 4,
            ++o;
        switch (i) {
        case 3:
            r ^= (255 & e.charCodeAt(o + 2)) << 16;
        case 2:
            r ^= (255 & e.charCodeAt(o + 1)) << 8;
        case 1:
            r ^= 255 & e.charCodeAt(o),
            r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16)
        }
        return r ^= r >>> 13,
        r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16),
        r ^= r >>> 15,
        r >>> 0
    }
    var g = "0.4.12"
      , v = window.jQuery || window.$ || (window.$ = {})
      , y = {
        parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(e) {
            return String(e).evalJSON()
        }
        || v.parseJSON || v.evalJSON,
        stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || v.toJSON
    };
    if ("function" != typeof y.parse || "function" != typeof y.stringify)
        throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var _, w = {
        __jstorage_meta: {
            CRC32: {}
        }
    }, b = {
        jStorage: "{}"
    }, x = null , S = 0, T = !1, C = {}, j = !1, k = 0, F = {}, D = +new Date, E = {
        isXML: function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        },
        encode: function(e) {
            if (!this.isXML(e))
                return !1;
            try {
                return (new XMLSerializer).serializeToString(e)
            } catch (t) {
                try {
                    return e.xml
                } catch (n) {}
            }
            return !1
        },
        decode: function(e) {
            var t, n = "DOMParser"in window && (new DOMParser).parseFromString || window.ActiveXObject && function(e) {
                var t = new ActiveXObject("Microsoft.XMLDOM");
                return t.async = "false",
                t.loadXML(e),
                t
            }
            ;
            return n ? (t = n.call("DOMParser"in window && new DOMParser || window, e, "text/xml"),
            this.isXML(t) ? t : !1) : !1
        }
    };
    v.jStorage = {
        version: g,
        set: function(e, t, n) {
            if (l(e),
            n = n || {},
            "undefined" == typeof t)
                return this.deleteKey(e),
                t;
            if (E.isXML(t))
                t = {
                    _is_xml: !0,
                    xml: E.encode(t)
                };
            else {
                if ("function" == typeof t)
                    return;
                t && "object" == typeof t && (t = y.parse(y.stringify(t)))
            }
            return w[e] = t,
            w.__jstorage_meta.CRC32[e] = "2." + m(y.stringify(t), 2538058380),
            this.setTTL(e, n.TTL || 0),
            o(e, "updated"),
            t
        },
        get: function(e, t) {
            return l(e),
            e in w ? w[e] && "object" == typeof w[e] && w[e]._is_xml ? E.decode(w[e].xml) : w[e] : "undefined" == typeof t ? null : t
        },
        deleteKey: function(e) {
            return l(e),
            e in w ? (delete w[e],
            "object" == typeof w.__jstorage_meta.TTL && e in w.__jstorage_meta.TTL && delete w.__jstorage_meta.TTL[e],
            delete w.__jstorage_meta.CRC32[e],
            u(),
            a(),
            o(e, "deleted"),
            !0) : !1
        },
        setTTL: function(e, t) {
            var n = +new Date;
            return l(e),
            t = Number(t) || 0,
            e in w ? (w.__jstorage_meta.TTL || (w.__jstorage_meta.TTL = {}),
            t > 0 ? w.__jstorage_meta.TTL[e] = n + t : delete w.__jstorage_meta.TTL[e],
            u(),
            c(),
            a(),
            !0) : !1
        },
        getTTL: function(e) {
            var t, n = +new Date;
            return l(e),
            e in w && w.__jstorage_meta.TTL && w.__jstorage_meta.TTL[e] ? (t = w.__jstorage_meta.TTL[e] - n,
            t || 0) : 0
        },
        flush: function() {
            return w = {
                __jstorage_meta: {
                    CRC32: {}
                }
            },
            u(),
            a(),
            o(null , "flushed"),
            !0
        },
        storageObj: function() {
            function e() {}
            return e.prototype = w,
            new e
        },
        index: function() {
            var e, t = [];
            for (e in w)
                w.hasOwnProperty(e) && "__jstorage_meta" != e && t.push(e);
            return t
        },
        storageSize: function() {
            return S
        },
        currentBackend: function() {
            return T
        },
        storageAvailable: function() {
            return !!T
        },
        listenKeyChange: function(e, t) {
            l(e),
            C[e] || (C[e] = []),
            C[e].push(t)
        },
        stopListening: function(e, t) {
            if (l(e),
            C[e]) {
                if (!t)
                    return void delete C[e];
                for (var n = C[e].length - 1; n >= 0; n--)
                    C[e][n] == t && C[e].splice(n, 1)
            }
        },
        subscribe: function(e, t) {
            if (e = (e || "").toString(),
            !e)
                throw new TypeError("Channel not defined");
            F[e] || (F[e] = []),
            F[e].push(t)
        },
        unsubscribe: function(e, t) {
            var n, i = [];
            if (e = (e || "").toString(),
            !e)
                throw new TypeError("Channel not defined");
            if (F[e]) {
                for (var r = 0, n = F[e].length; n > r; r++)
                    try {
                        F[e][r].toString() !== t.toString() && i.push(F[e][r])
                    } catch (o) {}
                return F[e] = i,
                !0
            }
            return !0
        },
        unsubscribeChannel: function(e) {
            if (e = (e || "").toString(),
            !e)
                throw new TypeError("Channel not defined");
            return F[e] ? (F[e] = !1,
            !0) : !1
        },
        publish: function(e, t) {
            if (e = (e || "").toString(),
            !e)
                throw new TypeError("Channel not defined");
            p(e, t)
        },
        reInit: function() {
            t()
        },
        noConflict: function(e) {
            return delete window.$.jStorage,
            e && (window.jStorage = this),
            this
        }
    },
    e()
}(),
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    function e() {
        return On.apply(null , arguments)
    }
    function t(e) {
        On = e
    }
    function n(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function r(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n)
            i.push(t(e[n], n));
        return i
    }
    function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function a(e, t) {
        for (var n in t)
            o(t, n) && (e[n] = t[n]);
        return o(t, "toString") && (e.toString = t.toString),
        o(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function s(e, t, n, i) {
        return Fe(e, t, n, i, !0).utc()
    }
    function u() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null ,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function l(e) {
        return null == e._pf && (e._pf = u()),
        e._pf
    }
    function c(e) {
        if (null == e._isValid) {
            var t = l(e);
            e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated),
            e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return e._isValid
    }
    function d(e) {
        var t = s(NaN);
        return null != e ? a(l(t), e) : l(t).userInvalidated = !0,
        t
    }
    function f(e, t) {
        var n, i, r;
        if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject),
        "undefined" != typeof t._i && (e._i = t._i),
        "undefined" != typeof t._f && (e._f = t._f),
        "undefined" != typeof t._l && (e._l = t._l),
        "undefined" != typeof t._strict && (e._strict = t._strict),
        "undefined" != typeof t._tzm && (e._tzm = t._tzm),
        "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC),
        "undefined" != typeof t._offset && (e._offset = t._offset),
        "undefined" != typeof t._pf && (e._pf = l(t)),
        "undefined" != typeof t._locale && (e._locale = t._locale),
        Pn.length > 0)
            for (n in Pn)
                i = Pn[n],
                r = t[i],
                "undefined" != typeof r && (e[i] = r);
        return e
    }
    function h(t) {
        f(this, t),
        this._d = new Date(null != t._d ? t._d.getTime() : NaN),
        Hn === !1 && (Hn = !0,
        e.updateOffset(this),
        Hn = !1)
    }
    function p(e) {
        return e instanceof h || null != e && null != e._isAMomentObject
    }
    function m(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }
    function g(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = m(t)),
        n
    }
    function v(e, t, n) {
        var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), a = 0;
        for (i = 0; r > i; i++)
            (n && e[i] !== t[i] || !n && g(e[i]) !== g(t[i])) && a++;
        return a + o
    }
    function y() {}
    function _(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function w(e) {
        for (var t, n, i, r, o = 0; o < e.length; ) {
            for (r = _(e[o]).split("-"),
            t = r.length,
            n = _(e[o + 1]),
            n = n ? n.split("-") : null ; t > 0; ) {
                if (i = b(r.slice(0, t).join("-")))
                    return i;
                if (n && n.length >= t && v(r, n, !0) >= t - 1)
                    break;
                t--
            }
            o++
        }
        return null
    }
    function b(e) {
        var t = null ;
        if (!qn[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = Ln._abbr,
                require("./locale/" + e),
                x(t)
            } catch (n) {}
        return qn[e]
    }
    function x(e, t) {
        var n;
        return e && (n = "undefined" == typeof t ? T(e) : S(e, t),
        n && (Ln = n)),
        Ln._abbr
    }
    function S(e, t) {
        return null !== t ? (t.abbr = e,
        qn[e] = qn[e] || new y,
        qn[e].set(t),
        x(e),
        qn[e]) : (delete qn[e],
        null )
    }
    function T(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Ln;
        if (!n(e)) {
            if (t = b(e))
                return t;
            e = [e]
        }
        return w(e)
    }
    function C(e, t) {
        var n = e.toLowerCase();
        In[n] = In[n + "s"] = In[t] = e
    }
    function j(e) {
        return "string" == typeof e ? In[e] || In[e.toLowerCase()] : void 0
    }
    function k(e) {
        var t, n, i = {};
        for (n in e)
            o(e, n) && (t = j(n),
            t && (i[t] = e[n]));
        return i
    }
    function F(t, n) {
        return function(i) {
            return null != i ? (E(this, t, i),
            e.updateOffset(this, n),
            this) : D(this, t)
        }
    }
    function D(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }
    function E(e, t, n) {
        return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }
    function N(e, t) {
        var n;
        if ("object" == typeof e)
            for (n in e)
                this.set(n, e[n]);
        else if (e = j(e),
        "function" == typeof this[e])
            return this[e](t);
        return this
    }
    function M(e, t, n) {
        var i = "" + Math.abs(e)
          , r = t - i.length
          , o = e >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }
    function A(e, t, n, i) {
        var r = i;
        "string" == typeof i && (r = function() {
            return this[i]()
        }
        ),
        e && (Wn[e] = r),
        t && (Wn[t[0]] = function() {
            return M(r.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (Wn[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        }
        )
    }
    function O(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function L(e) {
        var t, n, i = e.match(Yn);
        for (t = 0,
        n = i.length; n > t; t++)
            Wn[i[t]] ? i[t] = Wn[i[t]] : i[t] = O(i[t]);
        return function(r) {
            var o = "";
            for (t = 0; n > t; t++)
                o += i[t]instanceof Function ? i[t].call(r, e) : i[t];
            return o
        }
    }
    function P(e, t) {
        return e.isValid() ? (t = H(t, e.localeData()),
        $n[t] = $n[t] || L(t),
        $n[t](e)) : e.localeData().invalidDate()
    }
    function H(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (Qn.lastIndex = 0; i >= 0 && Qn.test(e); )
            e = e.replace(Qn, n),
            Qn.lastIndex = 0,
            i -= 1;
        return e
    }
    function q(e) {
        return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
    }
    function I(e, t, n) {
        ri[e] = q(t) ? t : function(e) {
            return e && n ? n : t
        }
    }
    function Y(e, t) {
        return o(ri, e) ? ri[e](t._strict, t._locale) : new RegExp(Q(e))
    }
    function Q(e) {
        return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
            return t || n || i || r
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function $(e, t) {
        var n, i = t;
        for ("string" == typeof e && (e = [e]),
        "number" == typeof t && (i = function(e, n) {
            n[t] = g(e)
        }
        ),
        n = 0; n < e.length; n++)
            oi[e[n]] = i
    }
    function W(e, t) {
        $(e, function(e, n, i, r) {
            i._w = i._w || {},
            t(e, i._w, i, r)
        })
    }
    function R(e, t, n) {
        null != t && o(oi, e) && oi[e](t, n._a, n, e)
    }
    function B(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }
    function z(e) {
        return this._months[e.month()]
    }
    function U(e) {
        return this._monthsShort[e.month()]
    }
    function G(e, t, n) {
        var i, r, o;
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        i = 0; 12 > i; i++) {
            if (r = s([2e3, i]),
            n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
            n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
            this._monthsParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[i].test(e))
                return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                return i;
            if (!n && this._monthsParse[i].test(e))
                return i
        }
    }
    function J(e, t) {
        var n;
        return "string" == typeof t && (t = e.localeData().monthsParse(t),
        "number" != typeof t) ? e : (n = Math.min(e.date(), B(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e)
    }
    function V(t) {
        return null != t ? (J(this, t),
        e.updateOffset(this, !0),
        this) : D(this, "Month")
    }
    function X() {
        return B(this.year(), this.month())
    }
    function Z(e) {
        var t, n = e._a;
        return n && -2 === l(e).overflow && (t = n[si] < 0 || n[si] > 11 ? si : n[ui] < 1 || n[ui] > B(n[ai], n[si]) ? ui : n[li] < 0 || n[li] > 24 || 24 === n[li] && (0 !== n[ci] || 0 !== n[di] || 0 !== n[fi]) ? li : n[ci] < 0 || n[ci] > 59 ? ci : n[di] < 0 || n[di] > 59 ? di : n[fi] < 0 || n[fi] > 999 ? fi : -1,
        l(e)._overflowDayOfYear && (ai > t || t > ui) && (t = ui),
        l(e).overflow = t),
        e
    }
    function K(t) {
        e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }
    function ee(e, t) {
        var n = !0;
        return a(function() {
            return n && (K(e + "\n" + (new Error).stack),
            n = !1),
            t.apply(this, arguments)
        }, t)
    }
    function te(e, t) {
        mi[e] || (K(t),
        mi[e] = !0)
    }
    function ne(e) {
        var t, n, i = e._i, r = gi.exec(i);
        if (r) {
            for (l(e).iso = !0,
            t = 0,
            n = vi.length; n > t; t++)
                if (vi[t][1].exec(i)) {
                    e._f = vi[t][0];
                    break
                }
            for (t = 0,
            n = yi.length; n > t; t++)
                if (yi[t][1].exec(i)) {
                    e._f += (r[6] || " ") + yi[t][0];
                    break
                }
            i.match(ti) && (e._f += "Z"),
            be(e)
        } else
            e._isValid = !1
    }
    function ie(t) {
        var n = _i.exec(t._i);
        return null !== n ? void (t._d = new Date(+n[1])) : (ne(t),
        void (t._isValid === !1 && (delete t._isValid,
        e.createFromInputFallback(t))))
    }
    function re(e, t, n, i, r, o, a) {
        var s = new Date(e,t,n,i,r,o,a);
        return 1970 > e && s.setFullYear(e),
        s
    }
    function oe(e) {
        var t = new Date(Date.UTC.apply(null , arguments));
        return 1970 > e && t.setUTCFullYear(e),
        t
    }
    function ae(e) {
        return se(e) ? 366 : 365
    }
    function se(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    function ue() {
        return se(this.year())
    }
    function le(e, t, n) {
        var i, r = n - t, o = n - e.day();
        return o > r && (o -= 7),
        r - 7 > o && (o += 7),
        i = De(e).add(o, "d"),
        {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }
    function ce(e) {
        return le(e, this._week.dow, this._week.doy).week
    }
    function de() {
        return this._week.dow
    }
    function fe() {
        return this._week.doy
    }
    function he(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    function pe(e) {
        var t = le(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    function me(e, t, n, i, r) {
        var o, a = 6 + r - i, s = oe(e, 0, 1 + a), u = s.getUTCDay();
        return r > u && (u += 7),
        n = null != n ? 1 * n : r,
        o = 1 + a + 7 * (t - 1) - u + n,
        {
            year: o > 0 ? e : e - 1,
            dayOfYear: o > 0 ? o : ae(e - 1) + o
        }
    }
    function ge(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    function ve(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function ye(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function _e(e) {
        var t, n, i, r, o = [];
        if (!e._d) {
            for (i = ye(e),
            e._w && null == e._a[ui] && null == e._a[si] && we(e),
            e._dayOfYear && (r = ve(e._a[ai], i[ai]),
            e._dayOfYear > ae(r) && (l(e)._overflowDayOfYear = !0),
            n = oe(r, 0, e._dayOfYear),
            e._a[si] = n.getUTCMonth(),
            e._a[ui] = n.getUTCDate()),
            t = 0; 3 > t && null == e._a[t]; ++t)
                e._a[t] = o[t] = i[t];
            for (; 7 > t; t++)
                e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[li] && 0 === e._a[ci] && 0 === e._a[di] && 0 === e._a[fi] && (e._nextDay = !0,
            e._a[li] = 0),
            e._d = (e._useUTC ? oe : re).apply(null , o),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[li] = 24)
        }
    }
    function we(e) {
        var t, n, i, r, o, a, s;
        t = e._w,
        null != t.GG || null != t.W || null != t.E ? (o = 1,
        a = 4,
        n = ve(t.GG, e._a[ai], le(De(), 1, 4).year),
        i = ve(t.W, 1),
        r = ve(t.E, 1)) : (o = e._locale._week.dow,
        a = e._locale._week.doy,
        n = ve(t.gg, e._a[ai], le(De(), o, a).year),
        i = ve(t.w, 1),
        null != t.d ? (r = t.d,
        o > r && ++i) : r = null != t.e ? t.e + o : o),
        s = me(n, i, r, a, o),
        e._a[ai] = s.year,
        e._dayOfYear = s.dayOfYear
    }
    function be(t) {
        if (t._f === e.ISO_8601)
            return void ne(t);
        t._a = [],
        l(t).empty = !0;
        var n, i, r, o, a, s = "" + t._i, u = s.length, c = 0;
        for (r = H(t._f, t._locale).match(Yn) || [],
        n = 0; n < r.length; n++)
            o = r[n],
            i = (s.match(Y(o, t)) || [])[0],
            i && (a = s.substr(0, s.indexOf(i)),
            a.length > 0 && l(t).unusedInput.push(a),
            s = s.slice(s.indexOf(i) + i.length),
            c += i.length),
            Wn[o] ? (i ? l(t).empty = !1 : l(t).unusedTokens.push(o),
            R(o, i, t)) : t._strict && !i && l(t).unusedTokens.push(o);
        l(t).charsLeftOver = u - c,
        s.length > 0 && l(t).unusedInput.push(s),
        l(t).bigHour === !0 && t._a[li] <= 12 && t._a[li] > 0 && (l(t).bigHour = void 0),
        t._a[li] = xe(t._locale, t._a[li], t._meridiem),
        _e(t),
        Z(t)
    }
    function xe(e, t, n) {
        var i;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n),
        i && 12 > t && (t += 12),
        i || 12 !== t || (t = 0),
        t) : t
    }
    function Se(e) {
        var t, n, i, r, o;
        if (0 === e._f.length)
            return l(e).invalidFormat = !0,
            void (e._d = new Date(NaN));
        for (r = 0; r < e._f.length; r++)
            o = 0,
            t = f({}, e),
            null != e._useUTC && (t._useUTC = e._useUTC),
            t._f = e._f[r],
            be(t),
            c(t) && (o += l(t).charsLeftOver,
            o += 10 * l(t).unusedTokens.length,
            l(t).score = o,
            (null == i || i > o) && (i = o,
            n = t));
        a(e, n || t)
    }
    function Te(e) {
        if (!e._d) {
            var t = k(e._i);
            e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond],
            _e(e)
        }
    }
    function Ce(e) {
        var t = new h(Z(je(e)));
        return t._nextDay && (t.add(1, "d"),
        t._nextDay = void 0),
        t
    }
    function je(e) {
        var t = e._i
          , r = e._f;
        return e._locale = e._locale || T(e._l),
        null === t || void 0 === r && "" === t ? d({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        p(t) ? new h(Z(t)) : (n(r) ? Se(e) : r ? be(e) : i(t) ? e._d = t : ke(e),
        e))
    }
    function ke(t) {
        var o = t._i;
        void 0 === o ? t._d = new Date : i(o) ? t._d = new Date(+o) : "string" == typeof o ? ie(t) : n(o) ? (t._a = r(o.slice(0), function(e) {
            return parseInt(e, 10)
        }),
        _e(t)) : "object" == typeof o ? Te(t) : "number" == typeof o ? t._d = new Date(o) : e.createFromInputFallback(t)
    }
    function Fe(e, t, n, i, r) {
        var o = {};
        return "boolean" == typeof n && (i = n,
        n = void 0),
        o._isAMomentObject = !0,
        o._useUTC = o._isUTC = r,
        o._l = n,
        o._i = e,
        o._f = t,
        o._strict = i,
        Ce(o)
    }
    function De(e, t, n, i) {
        return Fe(e, t, n, i, !1)
    }
    function Ee(e, t) {
        var i, r;
        if (1 === t.length && n(t[0]) && (t = t[0]),
        !t.length)
            return De();
        for (i = t[0],
        r = 1; r < t.length; ++r)
            (!t[r].isValid() || t[r][e](i)) && (i = t[r]);
        return i
    }
    function Ne() {
        var e = [].slice.call(arguments, 0);
        return Ee("isBefore", e)
    }
    function Me() {
        var e = [].slice.call(arguments, 0);
        return Ee("isAfter", e)
    }
    function Ae(e) {
        var t = k(e)
          , n = t.year || 0
          , i = t.quarter || 0
          , r = t.month || 0
          , o = t.week || 0
          , a = t.day || 0
          , s = t.hour || 0
          , u = t.minute || 0
          , l = t.second || 0
          , c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * s,
        this._days = +a + 7 * o,
        this._months = +r + 3 * i + 12 * n,
        this._data = {},
        this._locale = T(),
        this._bubble()
    }
    function Oe(e) {
        return e instanceof Ae
    }
    function Le(e, t) {
        A(e, 0, 0, function() {
            var e = this.utcOffset()
              , n = "+";
            return 0 > e && (e = -e,
            n = "-"),
            n + M(~~(e / 60), 2) + t + M(~~e % 60, 2)
        })
    }
    function Pe(e) {
        var t = (e || "").match(ti) || []
          , n = t[t.length - 1] || []
          , i = (n + "").match(Ti) || ["-", 0, 0]
          , r = +(60 * i[1]) + g(i[2]);
        return "+" === i[0] ? r : -r
    }
    function He(t, n) {
        var r, o;
        return n._isUTC ? (r = n.clone(),
        o = (p(t) || i(t) ? +t : +De(t)) - +r,
        r._d.setTime(+r._d + o),
        e.updateOffset(r, !1),
        r) : De(t).local()
    }
    function qe(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Ie(t, n) {
        var i, r = this._offset || 0;
        return null != t ? ("string" == typeof t && (t = Pe(t)),
        Math.abs(t) < 16 && (t = 60 * t),
        !this._isUTC && n && (i = qe(this)),
        this._offset = t,
        this._isUTC = !0,
        null != i && this.add(i, "m"),
        r !== t && (!n || this._changeInProgress ? tt(this, Ve(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        e.updateOffset(this, !0),
        this._changeInProgress = null )),
        this) : this._isUTC ? r : qe(this)
    }
    function Ye(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }
    function Qe(e) {
        return this.utcOffset(0, e)
    }
    function $e(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(qe(this), "m")),
        this
    }
    function We() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Pe(this._i)),
        this
    }
    function Re(e) {
        return e = e ? De(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 === 0
    }
    function Be() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function ze() {
        if ("undefined" != typeof this._isDSTShifted)
            return this._isDSTShifted;
        var e = {};
        if (f(e, this),
        e = je(e),
        e._a) {
            var t = e._isUTC ? s(e._a) : De(e._a);
            this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function Ue() {
        return !this._isUTC
    }
    function Ge() {
        return this._isUTC
    }
    function Je() {
        return this._isUTC && 0 === this._offset
    }
    function Ve(e, t) {
        var n, i, r, a = e, s = null ;
        return Oe(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (a = {},
        t ? a[t] = e : a.milliseconds = e) : (s = Ci.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
        a = {
            y: 0,
            d: g(s[ui]) * n,
            h: g(s[li]) * n,
            m: g(s[ci]) * n,
            s: g(s[di]) * n,
            ms: g(s[fi]) * n
        }) : (s = ji.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
        a = {
            y: Xe(s[2], n),
            M: Xe(s[3], n),
            d: Xe(s[4], n),
            h: Xe(s[5], n),
            m: Xe(s[6], n),
            s: Xe(s[7], n),
            w: Xe(s[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from"in a || "to"in a) && (r = Ke(De(a.from), De(a.to)),
        a = {},
        a.ms = r.milliseconds,
        a.M = r.months),
        i = new Ae(a),
        Oe(e) && o(e, "_locale") && (i._locale = e._locale),
        i
    }
    function Xe(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Ze(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function Ke(e, t) {
        var n;
        return t = He(t, e),
        e.isBefore(t) ? n = Ze(e, t) : (n = Ze(t, e),
        n.milliseconds = -n.milliseconds,
        n.months = -n.months),
        n
    }
    function et(e, t) {
        return function(n, i) {
            var r, o;
            return null === i || isNaN(+i) || (te(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."),
            o = n,
            n = i,
            i = o),
            n = "string" == typeof n ? +n : n,
            r = Ve(n, i),
            tt(this, r, e),
            this
        }
    }
    function tt(t, n, i, r) {
        var o = n._milliseconds
          , a = n._days
          , s = n._months;
        r = null == r ? !0 : r,
        o && t._d.setTime(+t._d + o * i),
        a && E(t, "Date", D(t, "Date") + a * i),
        s && J(t, D(t, "Month") + s * i),
        r && e.updateOffset(t, a || s)
    }
    function nt(e, t) {
        var n = e || De()
          , i = He(n, this).startOf("day")
          , r = this.diff(i, "days", !0)
          , o = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
        return this.format(t && t[o] || this.localeData().calendar(o, this, De(n)))
    }
    function it() {
        return new h(this)
    }
    function rt(e, t) {
        var n;
        return t = j("undefined" != typeof t ? t : "millisecond"),
        "millisecond" === t ? (e = p(e) ? e : De(e),
        +this > +e) : (n = p(e) ? +e : +De(e),
        n < +this.clone().startOf(t))
    }
    function ot(e, t) {
        var n;
        return t = j("undefined" != typeof t ? t : "millisecond"),
        "millisecond" === t ? (e = p(e) ? e : De(e),
        +e > +this) : (n = p(e) ? +e : +De(e),
        +this.clone().endOf(t) < n)
    }
    function at(e, t, n) {
        return this.isAfter(e, n) && this.isBefore(t, n)
    }
    function st(e, t) {
        var n;
        return t = j(t || "millisecond"),
        "millisecond" === t ? (e = p(e) ? e : De(e),
        +this === +e) : (n = +De(e),
        +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
    }
    function ut(e, t, n) {
        var i, r, o = He(e, this), a = 6e4 * (o.utcOffset() - this.utcOffset());
        return t = j(t),
        "year" === t || "month" === t || "quarter" === t ? (r = lt(this, o),
        "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (i = this - o,
        r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - a) / 864e5 : "week" === t ? (i - a) / 6048e5 : i),
        n ? r : m(r)
    }
    function lt(e, t) {
        var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()), o = e.clone().add(r, "months");
        return 0 > t - o ? (n = e.clone().add(r - 1, "months"),
        i = (t - o) / (o - n)) : (n = e.clone().add(r + 1, "months"),
        i = (t - o) / (n - o)),
        -(r + i)
    }
    function ct() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function dt() {
        var e = this.clone().utc();
        return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    function ft(t) {
        var n = P(this, t || e.defaultFormat);
        return this.localeData().postformat(n)
    }
    function ht(e, t) {
        return this.isValid() ? Ve({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function pt(e) {
        return this.from(De(), e)
    }
    function mt(e, t) {
        return this.isValid() ? Ve({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function gt(e) {
        return this.to(De(), e)
    }
    function vt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (t = T(e),
        null != t && (this._locale = t),
        this)
    }
    function yt() {
        return this._locale
    }
    function _t(e) {
        switch (e = j(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    function wt(e) {
        return e = j(e),
        void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }
    function bt() {
        return +this._d - 6e4 * (this._offset || 0)
    }
    function xt() {
        return Math.floor(+this / 1e3)
    }
    function St() {
        return this._offset ? new Date(+this) : this._d
    }
    function Tt() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function Ct() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    function jt() {
        return c(this)
    }
    function kt() {
        return a({}, l(this))
    }
    function Ft() {
        return l(this).overflow
    }
    function Dt(e, t) {
        A(0, [e, e.length], 0, t)
    }
    function Et(e, t, n) {
        return le(De([e, 11, 31 + t - n]), t, n).week
    }
    function Nt(e) {
        var t = le(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == e ? t : this.add(e - t, "y")
    }
    function Mt(e) {
        var t = le(this, 1, 4).year;
        return null == e ? t : this.add(e - t, "y")
    }
    function At() {
        return Et(this.year(), 1, 4)
    }
    function Ot() {
        var e = this.localeData()._week;
        return Et(this.year(), e.dow, e.doy)
    }
    function Lt(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    function Pt(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e),
        "number" == typeof e ? e : null ) : parseInt(e, 10)
    }
    function Ht(e) {
        return this._weekdays[e.day()]
    }
    function qt(e) {
        return this._weekdaysShort[e.day()]
    }
    function It(e) {
        return this._weekdaysMin[e.day()]
    }
    function Yt(e) {
        var t, n, i;
        for (this._weekdaysParse = this._weekdaysParse || [],
        t = 0; 7 > t; t++)
            if (this._weekdaysParse[t] || (n = De([2e3, 1]).day(t),
            i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
            this._weekdaysParse[t] = new RegExp(i.replace(".", ""),"i")),
            this._weekdaysParse[t].test(e))
                return t
    }
    function Qt(e) {
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Pt(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    function $t(e) {
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    function Wt(e) {
        return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
    }
    function Rt(e, t) {
        A(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function Bt(e, t) {
        return t._meridiemParse
    }
    function zt(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    function Ut(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    function Gt(e, t) {
        t[fi] = g(1e3 * ("0." + e))
    }
    function Jt() {
        return this._isUTC ? "UTC" : ""
    }
    function Vt() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function Xt(e) {
        return De(1e3 * e)
    }
    function Zt() {
        return De.apply(null , arguments).parseZone()
    }
    function Kt(e, t, n) {
        var i = this._calendar[e];
        return "function" == typeof i ? i.call(t, n) : i
    }
    function en(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }),
        this._longDateFormat[e])
    }
    function tn() {
        return this._invalidDate
    }
    function nn(e) {
        return this._ordinal.replace("%d", e)
    }
    function rn(e) {
        return e
    }
    function on(e, t, n, i) {
        var r = this._relativeTime[n];
        return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
    }
    function an(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
    }
    function sn(e) {
        var t, n;
        for (n in e)
            t = e[n],
            "function" == typeof t ? this[n] = t : this["_" + n] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    function un(e, t, n, i) {
        var r = T()
          , o = s().set(i, t);
        return r[n](o, e)
    }
    function ln(e, t, n, i, r) {
        if ("number" == typeof e && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return un(e, t, n, r);
        var o, a = [];
        for (o = 0; i > o; o++)
            a[o] = un(e, o, n, r);
        return a
    }
    function cn(e, t) {
        return ln(e, t, "months", 12, "month")
    }
    function dn(e, t) {
        return ln(e, t, "monthsShort", 12, "month")
    }
    function fn(e, t) {
        return ln(e, t, "weekdays", 7, "day")
    }
    function hn(e, t) {
        return ln(e, t, "weekdaysShort", 7, "day")
    }
    function pn(e, t) {
        return ln(e, t, "weekdaysMin", 7, "day")
    }
    function mn() {
        var e = this._data;
        return this._milliseconds = Ji(this._milliseconds),
        this._days = Ji(this._days),
        this._months = Ji(this._months),
        e.milliseconds = Ji(e.milliseconds),
        e.seconds = Ji(e.seconds),
        e.minutes = Ji(e.minutes),
        e.hours = Ji(e.hours),
        e.months = Ji(e.months),
        e.years = Ji(e.years),
        this
    }
    function gn(e, t, n, i) {
        var r = Ve(t, n);
        return e._milliseconds += i * r._milliseconds,
        e._days += i * r._days,
        e._months += i * r._months,
        e._bubble()
    }
    function vn(e, t) {
        return gn(this, e, t, 1)
    }
    function yn(e, t) {
        return gn(this, e, t, -1)
    }
    function _n(e) {
        return 0 > e ? Math.floor(e) : Math.ceil(e)
    }
    function wn() {
        var e, t, n, i, r, o = this._milliseconds, a = this._days, s = this._months, u = this._data;
        return o >= 0 && a >= 0 && s >= 0 || 0 >= o && 0 >= a && 0 >= s || (o += 864e5 * _n(xn(s) + a),
        a = 0,
        s = 0),
        u.milliseconds = o % 1e3,
        e = m(o / 1e3),
        u.seconds = e % 60,
        t = m(e / 60),
        u.minutes = t % 60,
        n = m(t / 60),
        u.hours = n % 24,
        a += m(n / 24),
        r = m(bn(a)),
        s += r,
        a -= _n(xn(r)),
        i = m(s / 12),
        s %= 12,
        u.days = a,
        u.months = s,
        u.years = i,
        this
    }
    function bn(e) {
        return 4800 * e / 146097
    }
    function xn(e) {
        return 146097 * e / 4800
    }
    function Sn(e) {
        var t, n, i = this._milliseconds;
        if (e = j(e),
        "month" === e || "year" === e)
            return t = this._days + i / 864e5,
            n = this._months + bn(t),
            "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(xn(this._months)),
        e) {
        case "week":
            return t / 7 + i / 6048e5;
        case "day":
            return t + i / 864e5;
        case "hour":
            return 24 * t + i / 36e5;
        case "minute":
            return 1440 * t + i / 6e4;
        case "second":
            return 86400 * t + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + i;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    function Tn() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
    }
    function Cn(e) {
        return function() {
            return this.as(e)
        }
    }
    function jn(e) {
        return e = j(e),
        this[e + "s"]()
    }
    function kn(e) {
        return function() {
            return this._data[e]
        }
    }
    function Fn() {
        return m(this.days() / 7)
    }
    function Dn(e, t, n, i, r) {
        return r.relativeTime(t || 1, !!n, e, i)
    }
    function En(e, t, n) {
        var i = Ve(e).abs()
          , r = dr(i.as("s"))
          , o = dr(i.as("m"))
          , a = dr(i.as("h"))
          , s = dr(i.as("d"))
          , u = dr(i.as("M"))
          , l = dr(i.as("y"))
          , c = r < fr.s && ["s", r] || 1 === o && ["m"] || o < fr.m && ["mm", o] || 1 === a && ["h"] || a < fr.h && ["hh", a] || 1 === s && ["d"] || s < fr.d && ["dd", s] || 1 === u && ["M"] || u < fr.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
        return c[2] = t,
        c[3] = +e > 0,
        c[4] = n,
        Dn.apply(null , c)
    }
    function Nn(e, t) {
        return void 0 === fr[e] ? !1 : void 0 === t ? fr[e] : (fr[e] = t,
        !0)
    }
    function Mn(e) {
        var t = this.localeData()
          , n = En(this, !e, t);
        return e && (n = t.pastFuture(+this, n)),
        t.postformat(n)
    }
    function An() {
        var e, t, n, i = hr(this._milliseconds) / 1e3, r = hr(this._days), o = hr(this._months);
        e = m(i / 60),
        t = m(e / 60),
        i %= 60,
        e %= 60,
        n = m(o / 12),
        o %= 12;
        var a = n
          , s = o
          , u = r
          , l = t
          , c = e
          , d = i
          , f = this.asSeconds();
        return f ? (0 > f ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (u ? u + "D" : "") + (l || c || d ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
    }
    var On, Ln, Pn = e.momentProperties = [], Hn = !1, qn = {}, In = {}, Yn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Qn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, $n = {}, Wn = {}, Rn = /\d/, Bn = /\d\d/, zn = /\d{3}/, Un = /\d{4}/, Gn = /[+-]?\d{6}/, Jn = /\d\d?/, Vn = /\d{1,3}/, Xn = /\d{1,4}/, Zn = /[+-]?\d{1,6}/, Kn = /\d+/, ei = /[+-]?\d+/, ti = /Z|[+-]\d\d:?\d\d/gi, ni = /[+-]?\d+(\.\d{1,3})?/, ii = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ri = {}, oi = {}, ai = 0, si = 1, ui = 2, li = 3, ci = 4, di = 5, fi = 6;
    A("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    A("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    A("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    C("month", "M"),
    I("M", Jn),
    I("MM", Jn, Bn),
    I("MMM", ii),
    I("MMMM", ii),
    $(["M", "MM"], function(e, t) {
        t[si] = g(e) - 1
    }),
    $(["MMM", "MMMM"], function(e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        null != r ? t[si] = r : l(n).invalidMonth = e
    });
    var hi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , pi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , mi = {};
    e.suppressDeprecationWarnings = !1;
    var gi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , vi = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]]
      , yi = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]]
      , _i = /^\/?Date\((\-?\d+)/i;
    e.createFromInputFallback = ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    A(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    A(0, ["YYYY", 4], 0, "year"),
    A(0, ["YYYYY", 5], 0, "year"),
    A(0, ["YYYYYY", 6, !0], 0, "year"),
    C("year", "y"),
    I("Y", ei),
    I("YY", Jn, Bn),
    I("YYYY", Xn, Un),
    I("YYYYY", Zn, Gn),
    I("YYYYYY", Zn, Gn),
    $(["YYYYY", "YYYYYY"], ai),
    $("YYYY", function(t, n) {
        n[ai] = 2 === t.length ? e.parseTwoDigitYear(t) : g(t)
    }),
    $("YY", function(t, n) {
        n[ai] = e.parseTwoDigitYear(t)
    }),
    e.parseTwoDigitYear = function(e) {
        return g(e) + (g(e) > 68 ? 1900 : 2e3)
    }
    ;
    var wi = F("FullYear", !1);
    A("w", ["ww", 2], "wo", "week"),
    A("W", ["WW", 2], "Wo", "isoWeek"),
    C("week", "w"),
    C("isoWeek", "W"),
    I("w", Jn),
    I("ww", Jn, Bn),
    I("W", Jn),
    I("WW", Jn, Bn),
    W(["w", "ww", "W", "WW"], function(e, t, n, i) {
        t[i.substr(0, 1)] = g(e)
    });
    var bi = {
        dow: 0,
        doy: 6
    };
    A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    C("dayOfYear", "DDD"),
    I("DDD", Vn),
    I("DDDD", zn),
    $(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = g(e)
    }),
    e.ISO_8601 = function() {}
    ;
    var xi = ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var e = De.apply(null , arguments);
        return this > e ? this : e
    })
      , Si = ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var e = De.apply(null , arguments);
        return e > this ? this : e
    });
    Le("Z", ":"),
    Le("ZZ", ""),
    I("Z", ti),
    I("ZZ", ti),
    $(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Pe(e)
    });
    var Ti = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {}
    ;
    var Ci = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/
      , ji = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ve.fn = Ae.prototype;
    var ki = et(1, "add")
      , Fi = et(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Di = ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    A(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    A(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    Dt("gggg", "weekYear"),
    Dt("ggggg", "weekYear"),
    Dt("GGGG", "isoWeekYear"),
    Dt("GGGGG", "isoWeekYear"),
    C("weekYear", "gg"),
    C("isoWeekYear", "GG"),
    I("G", ei),
    I("g", ei),
    I("GG", Jn, Bn),
    I("gg", Jn, Bn),
    I("GGGG", Xn, Un),
    I("gggg", Xn, Un),
    I("GGGGG", Zn, Gn),
    I("ggggg", Zn, Gn),
    W(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
        t[i.substr(0, 2)] = g(e)
    }),
    W(["gg", "GG"], function(t, n, i, r) {
        n[r] = e.parseTwoDigitYear(t)
    }),
    A("Q", 0, 0, "quarter"),
    C("quarter", "Q"),
    I("Q", Rn),
    $("Q", function(e, t) {
        t[si] = 3 * (g(e) - 1)
    }),
    A("D", ["DD", 2], "Do", "date"),
    C("date", "D"),
    I("D", Jn),
    I("DD", Jn, Bn),
    I("Do", function(e, t) {
        return e ? t._ordinalParse : t._ordinalParseLenient
    }),
    $(["D", "DD"], ui),
    $("Do", function(e, t) {
        t[ui] = g(e.match(Jn)[0], 10)
    });
    var Ei = F("Date", !0);
    A("d", 0, "do", "day"),
    A("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    A("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    A("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    A("e", 0, 0, "weekday"),
    A("E", 0, 0, "isoWeekday"),
    C("day", "d"),
    C("weekday", "e"),
    C("isoWeekday", "E"),
    I("d", Jn),
    I("e", Jn),
    I("E", Jn),
    I("dd", ii),
    I("ddd", ii),
    I("dddd", ii),
    W(["dd", "ddd", "dddd"], function(e, t, n) {
        var i = n._locale.weekdaysParse(e);
        null != i ? t.d = i : l(n).invalidWeekday = e
    }),
    W(["d", "e", "E"], function(e, t, n, i) {
        t[i] = g(e)
    });
    var Ni = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , Mi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Ai = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    A("H", ["HH", 2], 0, "hour"),
    A("h", ["hh", 2], 0, function() {
        return this.hours() % 12 || 12
    }),
    Rt("a", !0),
    Rt("A", !1),
    C("hour", "h"),
    I("a", Bt),
    I("A", Bt),
    I("H", Jn),
    I("h", Jn),
    I("HH", Jn, Bn),
    I("hh", Jn, Bn),
    $(["H", "HH"], li),
    $(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    $(["h", "hh"], function(e, t, n) {
        t[li] = g(e),
        l(n).bigHour = !0
    });
    var Oi = /[ap]\.?m?\.?/i
      , Li = F("Hours", !0);
    A("m", ["mm", 2], 0, "minute"),
    C("minute", "m"),
    I("m", Jn),
    I("mm", Jn, Bn),
    $(["m", "mm"], ci);
    var Pi = F("Minutes", !1);
    A("s", ["ss", 2], 0, "second"),
    C("second", "s"),
    I("s", Jn),
    I("ss", Jn, Bn),
    $(["s", "ss"], di);
    var Hi = F("Seconds", !1);
    A("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    A(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    A(0, ["SSS", 3], 0, "millisecond"),
    A(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    A(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    A(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    A(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    A(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    A(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    C("millisecond", "ms"),
    I("S", Vn, Rn),
    I("SS", Vn, Bn),
    I("SSS", Vn, zn);
    var qi;
    for (qi = "SSSS"; qi.length <= 9; qi += "S")
        I(qi, Kn);
    for (qi = "S"; qi.length <= 9; qi += "S")
        $(qi, Gt);
    var Ii = F("Milliseconds", !1);
    A("z", 0, 0, "zoneAbbr"),
    A("zz", 0, 0, "zoneName");
    var Yi = h.prototype;
    Yi.add = ki,
    Yi.calendar = nt,
    Yi.clone = it,
    Yi.diff = ut,
    Yi.endOf = wt,
    Yi.format = ft,
    Yi.from = ht,
    Yi.fromNow = pt,
    Yi.to = mt,
    Yi.toNow = gt,
    Yi.get = N,
    Yi.invalidAt = Ft,
    Yi.isAfter = rt,
    Yi.isBefore = ot,
    Yi.isBetween = at,
    Yi.isSame = st,
    Yi.isValid = jt,
    Yi.lang = Di,
    Yi.locale = vt,
    Yi.localeData = yt,
    Yi.max = Si,
    Yi.min = xi,
    Yi.parsingFlags = kt,
    Yi.set = N,
    Yi.startOf = _t,
    Yi.subtract = Fi,
    Yi.toArray = Tt,
    Yi.toObject = Ct,
    Yi.toDate = St,
    Yi.toISOString = dt,
    Yi.toJSON = dt,
    Yi.toString = ct,
    Yi.unix = xt,
    Yi.valueOf = bt,
    Yi.year = wi,
    Yi.isLeapYear = ue,
    Yi.weekYear = Nt,
    Yi.isoWeekYear = Mt,
    Yi.quarter = Yi.quarters = Lt,
    Yi.month = V,
    Yi.daysInMonth = X,
    Yi.week = Yi.weeks = he,
    Yi.isoWeek = Yi.isoWeeks = pe,
    Yi.weeksInYear = Ot,
    Yi.isoWeeksInYear = At,
    Yi.date = Ei,
    Yi.day = Yi.days = Qt,
    Yi.weekday = $t,
    Yi.isoWeekday = Wt,
    Yi.dayOfYear = ge,
    Yi.hour = Yi.hours = Li,
    Yi.minute = Yi.minutes = Pi,
    Yi.second = Yi.seconds = Hi,
    Yi.millisecond = Yi.milliseconds = Ii,
    Yi.utcOffset = Ie,
    Yi.utc = Qe,
    Yi.local = $e,
    Yi.parseZone = We,
    Yi.hasAlignedHourOffset = Re,
    Yi.isDST = Be,
    Yi.isDSTShifted = ze,
    Yi.isLocal = Ue,
    Yi.isUtcOffset = Ge,
    Yi.isUtc = Je,
    Yi.isUTC = Je,
    Yi.zoneAbbr = Jt,
    Yi.zoneName = Vt,
    Yi.dates = ee("dates accessor is deprecated. Use date instead.", Ei),
    Yi.months = ee("months accessor is deprecated. Use month instead", V),
    Yi.years = ee("years accessor is deprecated. Use year instead", wi),
    Yi.zone = ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ye);
    var Qi = Yi
      , $i = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }
      , Wi = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }
      , Ri = "Invalid date"
      , Bi = "%d"
      , zi = /\d{1,2}/
      , Ui = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }
      , Gi = y.prototype;
    Gi._calendar = $i,
    Gi.calendar = Kt,
    Gi._longDateFormat = Wi,
    Gi.longDateFormat = en,
    Gi._invalidDate = Ri,
    Gi.invalidDate = tn,
    Gi._ordinal = Bi,
    Gi.ordinal = nn,
    Gi._ordinalParse = zi,
    Gi.preparse = rn,
    Gi.postformat = rn,
    Gi._relativeTime = Ui,
    Gi.relativeTime = on,
    Gi.pastFuture = an,
    Gi.set = sn,
    Gi.months = z,
    Gi._months = hi,
    Gi.monthsShort = U,
    Gi._monthsShort = pi,
    Gi.monthsParse = G,
    Gi.week = ce,
    Gi._week = bi,
    Gi.firstDayOfYear = fe,
    Gi.firstDayOfWeek = de,
    Gi.weekdays = Ht,
    Gi._weekdays = Ni,
    Gi.weekdaysMin = It,
    Gi._weekdaysMin = Ai,
    Gi.weekdaysShort = qt,
    Gi._weekdaysShort = Mi,
    Gi.weekdaysParse = Yt,
    Gi.isPM = zt,
    Gi._meridiemParse = Oi,
    Gi.meridiem = Ut,
    x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10
              , n = 1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }),
    e.lang = ee("moment.lang is deprecated. Use moment.locale instead.", x),
    e.langData = ee("moment.langData is deprecated. Use moment.localeData instead.", T);
    var Ji = Math.abs
      , Vi = Cn("ms")
      , Xi = Cn("s")
      , Zi = Cn("m")
      , Ki = Cn("h")
      , er = Cn("d")
      , tr = Cn("w")
      , nr = Cn("M")
      , ir = Cn("y")
      , rr = kn("milliseconds")
      , or = kn("seconds")
      , ar = kn("minutes")
      , sr = kn("hours")
      , ur = kn("days")
      , lr = kn("months")
      , cr = kn("years")
      , dr = Math.round
      , fr = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
      , hr = Math.abs
      , pr = Ae.prototype;
    pr.abs = mn,
    pr.add = vn,
    pr.subtract = yn,
    pr.as = Sn,
    pr.asMilliseconds = Vi,
    pr.asSeconds = Xi,
    pr.asMinutes = Zi,
    pr.asHours = Ki,
    pr.asDays = er,
    pr.asWeeks = tr,
    pr.asMonths = nr,
    pr.asYears = ir,
    pr.valueOf = Tn,
    pr._bubble = wn,
    pr.get = jn,
    pr.milliseconds = rr,
    pr.seconds = or,
    pr.minutes = ar,
    pr.hours = sr,
    pr.days = ur,
    pr.weeks = Fn,
    pr.months = lr,
    pr.years = cr,
    pr.humanize = Mn,
    pr.toISOString = An,
    pr.toString = An,
    pr.toJSON = An,
    pr.locale = vt,
    pr.localeData = yt,
    pr.toIsoString = ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", An),
    pr.lang = Di,
    A("X", 0, 0, "unix"),
    A("x", 0, 0, "valueOf"),
    I("x", ei),
    I("X", ni),
    $("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    $("x", function(e, t, n) {
        n._d = new Date(g(e))
    }),
    e.version = "2.10.6",
    t(De),
    e.fn = Qi,
    e.min = Ne,
    e.max = Me,
    e.utc = s,
    e.unix = Xt,
    e.months = cn,
    e.isDate = i,
    e.locale = x,
    e.invalid = d,
    e.duration = Ve,
    e.isMoment = p,
    e.weekdays = fn,
    e.parseZone = Zt,
    e.localeData = T,
    e.isDuration = Oe,
    e.monthsShort = dn,
    e.weekdaysMin = pn,
    e.defineLocale = S,
    e.weekdaysShort = hn,
    e.normalizeUnits = j,
    e.relativeTimeThreshold = Nn;
    var mr = e;
    return mr
}),
function(e) {
    function t(t, n, i, r) {
        var o = {
            data: r || 0 === r || r === !1 ? r : n ? n.data : {},
            _wrap: n ? n._wrap : null ,
            tmpl: null ,
            parent: n || null ,
            nodes: [],
            calls: l,
            nest: c,
            wrap: d,
            html: f,
            update: h
        };
        return t && e.extend(o, t, {
            nodes: [],
            parent: n
        }),
        i && (o.tmpl = i,
        o._ctnt = o._ctnt || o.tmpl(e, o),
        o.key = ++b,
        (S.length ? _ : y)[b] = o),
        o
    }
    function n(t, r, o) {
        var a, s = o ? e.map(o, function(e) {
            return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + g + '="' + t.key + '" $2') : e : n(e, t, e._ctnt)
        }) : t;
        return r ? s : (s = s.join(""),
        s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, n, r, o) {
            a = e(r).get(),
            u(a),
            n && (a = i(n).concat(a)),
            o && (a = a.concat(i(o)))
        }),
        a ? a : i(s))
    }
    function i(t) {
        var n = document.createElement("div");
        return n.innerHTML = t,
        e.makeArray(n.childNodes)
    }
    function r(t) {
        return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, n, i, r, o, s, u) {
            var l, c, d, f = e.tmpl.tag[i];
            if (!f)
                throw "Unknown template tag: " + i;
            return l = f._default || [],
            s && !/\w$/.test(o) && (o += s,
            s = ""),
            o ? (o = a(o),
            u = u ? "," + a(u) + ")" : s ? ")" : "",
            c = s ? o.indexOf(".") > -1 ? o + a(s) : "(" + o + ").call($item" + u : o,
            d = s ? c : "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : d = c = l.$1 || "null",
            r = a(r),
            "');" + f[n ? "close" : "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null" : "true").split("$1a").join(d).split("$1").join(c).split("$2").join(r || l.$2 || "") + "__.push('"
        }) + "');}return __;")
    }
    function o(t, i) {
        t._wrap = n(t, !0, e.isArray(i) ? i : [v.test(i) ? i : e(i).html()]).join("")
    }
    function a(e) {
        return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function s(e) {
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)),
        t.innerHTML
    }
    function u(n) {
        function i(n) {
            function i(e) {
                e += l,
                a = c[e] = c[e] || t(a, y[a.parent.key + l] || a.parent)
            }
            var r, o, a, s, u = n;
            if (s = n.getAttribute(g)) {
                for (; u.parentNode && 1 === (u = u.parentNode).nodeType && !(r = u.getAttribute(g)); )
                    ;
                r !== s && (u = u.parentNode ? 11 === u.nodeType ? 0 : u.getAttribute(g) || 0 : 0,
                (a = y[s]) || (a = _[s],
                a = t(a, y[u] || _[u]),
                a.key = ++b,
                y[b] = a),
                x && i(s)),
                n.removeAttribute(g)
            } else
                x && (a = e.data(n, "tmplItem")) && (i(a.key),
                y[a.key] = a,
                u = e.data(n.parentNode, "tmplItem"),
                u = u ? u.key : 0);
            if (a) {
                for (o = a; o && o.key != u; )
                    o.nodes.push(n),
                    o = o.parent;
                delete a._ctnt,
                delete a._wrap,
                e.data(n, "tmplItem", a)
            }
        }
        var r, o, a, s, u, l = "_" + x, c = {};
        for (a = 0,
        s = n.length; s > a; a++)
            if (1 === (r = n[a]).nodeType) {
                for (o = r.getElementsByTagName("*"),
                u = o.length - 1; u >= 0; u--)
                    i(o[u]);
                i(r)
            }
    }
    function l(e, t, n, i) {
        return e ? void S.push({
            _: e,
            tmpl: t,
            item: this,
            data: n,
            options: i
        }) : S.pop()
    }
    function c(t, n, i) {
        return e.tmpl(e.template(t), n, i, this)
    }
    function d(t, n) {
        var i = t.options || {};
        return i.wrapped = n,
        e.tmpl(e.template(t.tmpl), t.data, i, t.item)
    }
    function f(t, n) {
        var i = this._wrap;
        return e.map(e(e.isArray(i) ? i.join("") : i).filter(t || "*"), function(e) {
            return n ? e.innerText || e.textContent : e.outerHTML || s(e)
        })
    }
    function h() {
        var t = this.nodes;
        e.tmpl(null , null , null , this).insertBefore(t[0]),
        e(t).remove()
    }
    var p, m = e.fn.domManip, g = "_tmplitem", v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, y = {}, _ = {}, w = {
        key: 0,
        data: {}
    }, b = 0, x = 0, S = [];
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, n) {
        e.fn[t] = function(i) {
            var r, o, a, s, u = [], l = e(i), c = 1 === this.length && this[0].parentNode;
            if (p = y || {},
            c && 11 === c.nodeType && 1 === c.childNodes.length && 1 === l.length)
                l[n](this[0]),
                u = this;
            else {
                for (o = 0,
                a = l.length; a > o; o++)
                    x = o,
                    r = (o > 0 ? this.clone(!0) : this).get(),
                    e(l[o])[n](r),
                    u = u.concat(r);
                x = 0,
                u = this.pushStack(u, t, l.selector)
            }
            return s = p,
            p = null ,
            e.tmpl.complete(s),
            u
        }
    }),
    e.fn.extend({
        tmpl: function(t, n, i) {
            return e.tmpl(this[0], t, n, i)
        },
        tmplItem: function() {
            return e.tmplItem(this[0])
        },
        template: function(t) {
            return e.template(t, this[0])
        },
        domManip: function(t, n, i) {
            if (t[0] && e.isArray(t[0])) {
                for (var r, o = e.makeArray(arguments), a = t[0], s = a.length, u = 0; s > u && !(r = e.data(a[u++], "tmplItem")); )
                    ;
                r && x && (o[2] = function(t) {
                    e.tmpl.afterManip(this, t, i)
                }
                ),
                m.apply(this, o)
            } else
                m.apply(this, arguments);
            return x = 0,
            !p && e.tmpl.complete(y),
            this
        }
    }),
    e.extend({
        tmpl: function(i, r, a, s) {
            var u, l = !s;
            if (l)
                s = w,
                i = e.template[i] || e.template(null , i),
                _ = {};
            else if (!i)
                return i = s.tmpl,
                y[s.key] = s,
                s.nodes = [],
                s.wrapped && o(s, s.wrapped),
                e(n(s, null , s.tmpl(e, s)));
            return i ? ("function" == typeof r && (r = r.call(s || {})),
            a && a.wrapped && o(a, a.wrapped),
            u = e.isArray(r) ? e.map(r, function(e) {
                return e ? t(a, s, i, e) : null
            }) : [t(a, s, i, r)],
            l ? e(n(s, null , u)) : u) : []
        },
        tmplItem: function(t) {
            var n;
            for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode); )
                ;
            return n || w
        },
        template: function(t, n) {
            return n ? ("string" == typeof n ? n = r(n) : n instanceof e && (n = n[0] || {}),
            n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", r(n.innerHTML))),
            "string" == typeof t ? e.template[t] = n : n) : t ? "string" != typeof t ? e.template(null , t) : e.template[t] || e.template(null , v.test(t) ? t : e(t)) : null
        },
        encode: function(e) {
            return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }),
    e.extend(e.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            y = {}
        },
        afterManip: function(t, n, i) {
            var r = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
            i.call(t, n),
            u(r),
            x++
        }
    })
}(jQuery);
