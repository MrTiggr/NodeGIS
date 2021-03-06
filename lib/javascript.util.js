/*
  javascript.util is a port of selected parts of java.util to JavaScript which
  main purpose is to ease porting Java code to JavaScript.

  Copyright (C) 2011 by Björn Harrtell

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
(function() {
  var d = null;

  function f() {
    return function() {}
  }
  function g(a, b) {
    var c = a.split("."),
      e = window;
    !(c[0] in e) && e.execScript && e.execScript("var " + c[0]);
    for (var q; c.length && (q = c.shift());)!c.length && b !== void 0 ? e[q] = b : e = e[q] ? e[q] : e[q] = {}
  }
  g("javascript.util.version", "0.8.0");

  function h(a) {
    this.message = a || ""
  }
  g("javascript.util.OperationNotSupported", h);
  h.prototype = Error();
  h.prototype.name = "OperationNotSupported";
  h.prototype.name = h.prototype.name;

  function i(a) {
    this.message = a || ""
  }
  g("javascript.util.IndexOutOfBoundsException", i);
  i.prototype = Error();
  i.prototype.name = "IndexOutOfBoundsException";
  i.prototype.name = i.prototype.name;

  function j(a) {
    this.message = a || ""
  }
  g("javascript.util.NoSuchElementException", j);
  j.prototype = Error();
  j.prototype.name = "NoSuchElementException";
  j.prototype.name = j.prototype.name;

  function k(a) {
    this.message = a || ""
  }
  g("javascript.util.EmptyStackException", k);
  k.prototype = Error();
  k.prototype.name = "EmptyStackException";
  k.prototype.name = k.prototype.name;

  function l() {}
  g("javascript.util.Iterator", l);
  l.prototype.c = f();
  l.prototype.hasNext = l.prototype.c;
  l.prototype.next = f();
  l.prototype.next = l.prototype.next;
  l.prototype.remove = f();
  l.prototype.remove = l.prototype.remove;

  function m() {}
  g("javascript.util.Collection", m);
  m.prototype.add = f();
  m.prototype.add = m.prototype.add;
  m.prototype.g = f();
  m.prototype.isEmpty = m.prototype.g;
  m.prototype.d = f();
  m.prototype.iterator = m.prototype.d;
  m.prototype.size = f();
  m.prototype.size = m.prototype.size;
  m.prototype.e = f();
  m.prototype.toArray = m.prototype.e;
  m.prototype.remove = f();
  m.prototype.remove = m.prototype.remove;

  function n() {}
  g("javascript.util.List", n);
  n.prototype = new m;
  n.prototype.get = f();
  n.prototype.get = n.prototype.get;
  n.prototype.b = f();
  n.prototype.addAll = n.prototype.b;

  function o(a) {
    this.a = [];
    a instanceof m && this.b(a)
  }
  g("javascript.util.ArrayList", o);
  o.prototype = new n;
  o.prototype.a = d;
  o.prototype.add = function(a) {
    this.a.push(a);
    return !0
  };
  o.prototype.add = o.prototype.add;
  o.prototype.b = function(a) {
    for (a = a.d(); a.c();) this.add(a.next());
    return !0
  };
  o.prototype.addAll = o.prototype.b;
  o.prototype.d = function() {
    return new p(this)
  };
  o.prototype.iterator = o.prototype.d;
  o.prototype.get = function(a) {
    if (a < 0 || a >= this.size()) throw new i;
    return this.a[a]
  };
  o.prototype.get = o.prototype.get;
  o.prototype.g = function() {
    return this.a.length === 0
  };
  o.prototype.isEmpty = o.prototype.g;
  o.prototype.size = function() {
    return this.a.length
  };
  o.prototype.size = o.prototype.size;
  o.prototype.e = function() {
    for (var a = [], b = 0, c = this.a.length; b < c; b++) a.push(this.a[b]);
    return a
  };
  o.prototype.toArray = o.prototype.e;
  o.prototype.remove = function(a) {
    for (var b = !1, c = 0, e = this.a.length; c < e; c++) if (this.a[c] === a) {
      this.a.splice(c, 1);
      b = !0;
      break
    }
    return b
  };
  o.prototype.remove = o.prototype.remove;

  function p(a) {
    this.h = a
  }
  o.Iterator = p;
  p.prototype.h = d;
  p.prototype.position = 0;
  p.prototype.next = function() {
    if (this.position === this.h.size()) throw new j;
    return this.h.get(this.position++)
  };
  p.prototype.next = p.prototype.next;
  p.prototype.c = function() {
    return this.position < this.h.size() ? !0 : !1
  };
  p.prototype.hasNext = p.prototype.c;
  p.prototype.remove = function() {
    throw new h;
  };
  p.prototype.remove = p.prototype.remove;

  function r() {}
  g("javascript.util.Map", r);
  r.prototype.get = f();
  r.prototype.get = r.prototype.get;
  r.prototype.put = f();
  r.prototype.put = r.prototype.put;
  r.prototype.size = f();
  r.prototype.size = r.prototype.size;
  r.prototype.f = f();
  r.prototype.values = r.prototype.f;

  function s() {}
  g("javascript.util.Arrays", s);
  s.sort = function() {
    var a = arguments[0],
      b, c;
    if (arguments.length === 1) a.sort();
    else if (arguments.length === 2) c = arguments[1], a.sort(function(a, b) {
      return c.compare(a, b)
    });
    else if (arguments.length === 3) {
      b = a.slice(arguments[1], arguments[2]);
      b.sort();
      var e = a.slice(0, arguments[1]).concat(b, a.slice(arguments[2], a.length));
      a.splice(0, a.length);
      for (b = 0; b < e.length; b++) a.push(e[b])
    } else if (arguments.length === 4) {
      b = a.slice(arguments[1], arguments[2]);
      c = arguments[3];
      b.sort(function(a, b) {
        return c.compare(a, b)
      });
      e = a.slice(0, arguments[1]).concat(b, a.slice(arguments[2], a.length));
      a.splice(0, a.length);
      for (b = 0; b < e.length; b++) a.push(e[b])
    }
  };
  s.asList = function(a) {
    for (var b = new o, c = 0, e = a.length; c < e; c++) b.add(a[c]);
    return b
  };
  g("javascript.util.SortedMap", f());

  function t() {
    this.object = {}
  }
  g("javascript.util.HashMap", t);
  t.prototype.object = d;
  t.prototype.get = function(a) {
    return this.object[a] || d
  };
  t.prototype.get = t.prototype.get;
  t.prototype.put = function(a, b) {
    return this.object[a] = b
  };
  t.prototype.put = t.prototype.put;
  t.prototype.f = function() {
    var a = new o,
      b;
    for (b in this.object) this.object.hasOwnProperty(b) && a.add(this.object[b]);
    return a
  };
  t.prototype.values = t.prototype.f;
  t.prototype.size = function() {
    return this.f().size()
  };
  t.prototype.size = t.prototype.size;

  function u() {}
  g("javascript.util.Set", u);
  u.prototype.contains = f();
  u.prototype.contains = u.prototype.contains;
  g("javascript.util.SortedSet", f());

  function v(a) {
    this.a = [];
    a instanceof m && this.b(a)
  }
  g("javascript.util.TreeSet", v);
  v.prototype.a = d;
  v.prototype.contains = function(a) {
    for (var b = 0, c = this.a.length; b < c; b++) if (this.a[b].compareTo(a) === 0) return !0;
    return !1
  };
  v.prototype.contains = v.prototype.contains;
  v.prototype.add = function(a) {
    if (this.contains(a)) return !1;
    for (var b = 0, c = this.a.length; b < c; b++) if (this.a[b].compareTo(a) === 1) return this.a.splice(b, 0, a), !0;
    this.a.push(a);
    return !0
  };
  v.prototype.add = v.prototype.add;
  v.prototype.b = function(a) {
    for (a = a.d(); a.c();) this.add(a.next());
    return !0
  };
  v.prototype.addAll = v.prototype.b;
  v.prototype.size = function() {
    return this.a.length
  };
  v.prototype.size = v.prototype.size;
  v.prototype.g = function() {
    return this.a.length === 0
  };
  v.prototype.isEmpty = v.prototype.g;
  v.prototype.e = function() {
    for (var a = [], b = 0, c = this.a.length; b < c; b++) a.push(this.a[b]);
    return a
  };
  v.prototype.toArray = v.prototype.e;
  v.prototype.d = function() {
    return new w(this)
  };
  v.prototype.iterator = v.prototype.d;

  function w(a) {
    this.i = a
  }
  v.Iterator = w;
  w.prototype.i = d;
  w.prototype.position = 0;
  w.prototype.next = function() {
    if (this.position === this.i.size()) throw new j;
    return this.i.a[this.position++]
  };
  w.prototype.next = w.prototype.next;
  w.prototype.c = function() {
    return this.position < this.i.size() ? !0 : !1
  };
  w.prototype.hasNext = w.prototype.c;
  w.prototype.remove = function() {
    throw new h;
  };
  w.prototype.remove = w.prototype.remove;

  function x() {
    this.a = []
  }
  g("javascript.util.Stack", x);
  x.prototype = new n;
  x.prototype.a = d;
  x.prototype.push = function(a) {
    this.a.push(a);
    return a
  };
  x.prototype.push = x.prototype.push;
  x.prototype.pop = function() {
    if (this.a.length === 0) throw new k;
    return this.a.pop()
  };
  x.prototype.pop = x.prototype.pop;
  x.prototype.j = function() {
    if (this.a.length === 0) throw new k;
    return this.a[this.a.length - 1]
  };
  x.prototype.peek = x.prototype.j;
  x.prototype.empty = function() {
    return this.a.length === 0 ? !0 : !1
  };
  x.prototype.empty = x.prototype.empty;
  x.prototype.search = function(a) {
    return this.a.indexOf(a)
  };
  x.prototype.search = x.prototype.search;
  x.prototype.size = function() {
    return this.a.length
  };
  x.prototype.size = x.prototype.size;
  x.prototype.e = function() {
    for (var a = [], b = 0, c = this.a.length; b < c; b++) a.push(this.a[b]);
    return a
  };
  x.prototype.toArray = x.prototype.e;

  function y() {
    this.a = []
  }
  g("javascript.util.TreeMap", y);
  y.prototype.a = d;
  y.prototype.get = function(a) {
    for (var b = 0, c = this.a.length; b < c; b++) {
      var e = this.a[b];
      if (e.key.compareTo(a) === 0) return e.value
    }
    return d
  };
  y.prototype.get = y.prototype.get;
  y.prototype.put = function(a, b) {
    var c = this.get(a);
    if (c) {
      var e = c.value;
      c.value = b;
      return e
    }
    for (var e = {
      key: a,
      value: b
    }, q = 0, z = this.a.length; q < z; q++) if (c = this.a[q], c.key.compareTo(a) === 1) return this.a.splice(q, 0, e), d;
    this.a.push({
      key: a,
      value: b
    });
    return d
  };
  y.prototype.put = y.prototype.put;
  y.prototype.f = function() {
    for (var a = new o, b = 0, c = this.a.length; b < c; b++) a.add(this.a[b].value);
    return a
  };
  y.prototype.values = y.prototype.f;
  y.prototype.size = function() {
    return this.f().size()
  };
  y.prototype.size = y.prototype.size;
})();