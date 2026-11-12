/* Minimal runtime for the page template (sc-for / sc-if / {{ holes }} / DCLogic). */
(function () {
  'use strict';

  var HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;
  var WHOLE = /^\s*\{\{\s*([^}]*?)\s*\}\}\s*$/;

  function lookup(path, scope, vals) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    var parts = path.split('.');
    var cur;
    if (Object.prototype.hasOwnProperty.call(scope, parts[0])) cur = scope[parts[0]];
    else cur = vals[parts[0]];
    for (var i = 1; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function interpolate(str, scope, vals) {
    return str.replace(HOLE, function (_, p) {
      var v = lookup(p, scope, vals);
      return v == null ? '' : String(v);
    });
  }

  function bindEvents(el) {
    if (!el.__ev) return;
    el.__lis = el.__lis || {};
    Object.keys(el.__ev).forEach(function (t) {
      if (el.__lis[t]) return;
      el.__lis[t] = true;
      el.addEventListener(t, function (e) {
        var f = el.__ev && el.__ev[t];
        if (typeof f === 'function') f.call(el, e);
      });
    });
  }

  function build(node, scope, vals, out) {
    if (node.nodeType === 3) {
      out.appendChild(document.createTextNode(node.data.indexOf('{{') >= 0 ? interpolate(node.data, scope, vals) : node.data));
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.localName;

    if (tag === 'sc-for') {
      var m = WHOLE.exec(node.getAttribute('list') || '');
      var list = m ? lookup(m[1], scope, vals) : null;
      var as = node.getAttribute('as') || 'item';
      (list || []).forEach(function (item, i) {
        var s = Object.create(scope);
        s[as] = item;
        s.$index = i;
        Array.prototype.forEach.call(node.childNodes, function (c) { build(c, s, vals, out); });
      });
      return;
    }
    if (tag === 'sc-if') {
      var m2 = WHOLE.exec(node.getAttribute('value') || '');
      var cond = m2 ? lookup(m2[1], scope, vals) : false;
      if (cond) Array.prototype.forEach.call(node.childNodes, function (c) { build(c, scope, vals, out); });
      return;
    }

    var el = document.createElementNS(node.namespaceURI, node.localName);
    Array.prototype.forEach.call(node.attributes, function (a) {
      var name = a.name;
      var value = a.value;
      if (name.indexOf('hint-') === 0) return;
      var w = WHOLE.exec(value);
      if (/^on[a-z]+$/i.test(name) && w) {
        var fn = lookup(w[1], scope, vals);
        el.__ev = el.__ev || {};
        el.__ev[name.slice(2).toLowerCase()] = fn;
        return;
      }
      if (w) {
        var v = lookup(w[1], scope, vals);
        if (typeof v === 'function') return;
        if (v === false || v == null) {
          if (name.indexOf('aria-') === 0 && v === false) el.setAttribute(name, 'false');
          return;
        }
        el.setAttribute(name, v === true ? (name.indexOf('aria-') === 0 ? 'true' : '') : String(v));
        return;
      }
      el.setAttribute(name, value.indexOf('{{') >= 0 ? interpolate(value, scope, vals) : value);
    });
    if (tag === 'video' && el.hasAttribute('muted')) {
      el.muted = true;
      /* Looping preview videos: load and play only while on screen. */
      el.setAttribute('preload', 'none');
      el.removeAttribute('autoplay');
    }
    bindEvents(el);
    Array.prototype.forEach.call(node.childNodes, function (c) { build(c, scope, vals, el); });
    out.appendChild(el);
  }

  function patch(o, n) {
    Array.prototype.forEach.call(n.attributes, function (a) {
      if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value);
    });
    Array.prototype.slice.call(o.attributes).forEach(function (a) {
      if (!n.hasAttribute(a.name)) o.removeAttribute(a.name);
    });
    o.__ev = n.__ev;
    bindEvents(o);
    patchChildren(o, n);
  }

  function patchChildren(o, n) {
    var oc = Array.prototype.slice.call(o.childNodes);
    var nc = Array.prototype.slice.call(n.childNodes);
    nc.forEach(function (b, i) {
      var a = oc[i];
      if (!a) { o.appendChild(b); return; }
      if (a.nodeType !== b.nodeType || (a.nodeType === 1 && (a.localName !== b.localName || a.namespaceURI !== b.namespaceURI))) {
        o.replaceChild(b, a);
      } else if (a.nodeType === 3) {
        if (a.data !== b.data) a.data = b.data;
      } else if (a.nodeType === 1) {
        patch(a, b);
      }
    });
    for (var j = nc.length; j < oc.length; j++) o.removeChild(oc[j]);
  }

  function DCLogic(props) {
    this.props = props || {};
    this.state = {};
  }
  DCLogic.prototype.setState = function (p) {
    var next = typeof p === 'function' ? p(this.state) : p;
    Object.assign(this.state, next);
    if (this.__render) this.__render();
  };
  DCLogic.prototype.forceUpdate = function () { if (this.__render) this.__render(); };
  window.DCLogic = DCLogic;

  var io = null;
  function watchVideos(root) {
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(root.querySelectorAll('video[muted]'), function (v) { v.play().catch(function () {}); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
          else v.pause();
        });
      }, { rootMargin: '150px 0px' });
    }
    Array.prototype.forEach.call(root.querySelectorAll('video[muted]'), function (v) {
      if (!v.__watched) { v.__watched = true; io.observe(v); }
    });
  }

  window.DCMount = function (Component, tpl, root) {
    var comp = new Component({});
    var queued = false;
    function render() {
      var vals = comp.renderVals();
      var holder = document.createElement('div');
      Array.prototype.forEach.call(tpl.content.childNodes, function (c) { build(c, {}, vals, holder); });
      patchChildren(root, holder);
      watchVideos(root);
    }
    comp.__render = function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; render(); });
    };
    render();
    if (typeof comp.componentDidMount === 'function') comp.componentDidMount();
  };
})();
