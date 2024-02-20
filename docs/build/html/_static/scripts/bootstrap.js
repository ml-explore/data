/*! For license information please see bootstrap.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
    d : (e, i) => {
      for (var n in i)
        t.o(i, n) && !t.o(e, n) &&
            Object.defineProperty(e, n, {enumerable : !0, get : i[n]})
    },
    o : (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    r : t => {
      "undefined" != typeof Symbol && Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {value : "Module"}),
          Object.defineProperty(t, "__esModule", {value : !0})
    }
  },
      e = {};
  t.r(e), t.d(e, {
    afterMain : () => E,
    afterRead : () => v,
    afterWrite : () => C,
    applyStyles : () => $,
    arrow : () => J,
    auto : () => a,
    basePlacements : () => l,
    beforeMain : () => y,
    beforeRead : () => _,
    beforeWrite : () => A,
    bottom : () => s,
    clippingParents : () => d,
    computeStyles : () => it,
    createPopper : () => Dt,
    createPopperBase : () => St,
    createPopperLite : () => $t,
    detectOverflow : () => _t,
    end : () => h,
    eventListeners : () => st,
    flip : () => bt,
    hide : () => wt,
    left : () => r,
    main : () => w,
    modifierPhases : () => O,
    offset : () => Et,
    placements : () => g,
    popper : () => f,
    popperGenerator : () => Lt,
    popperOffsets : () => At,
    preventOverflow : () => Tt,
    read : () => b,
    reference : () => p,
    right : () => o,
    start : () => c,
    top : () => n,
    variationPlacements : () => m,
    viewport : () => u,
    write : () => T
  });
  var i = {};
  t.r(i), t.d(i, {
    Alert : () => Oe,
    Button : () => ke,
    Carousel : () => ri,
    Collapse : () => yi,
    Dropdown : () => Vi,
    Modal : () => xn,
    Offcanvas : () => Vn,
    Popover : () => fs,
    ScrollSpy : () => Ts,
    Tab : () => Ks,
    Toast : () => lo,
    Tooltip : () => hs
  });
  var n = "top", s = "bottom", o = "right", r = "left", a = "auto",
      l = [ n, s, o, r ], c = "start", h = "end", d = "clippingParents",
      u = "viewport", f = "popper", p = "reference",
      m = l.reduce(
          (function(t, e) {
            return t.concat([ e + "-" + c, e + "-" + h ])
          }),
          []),
      g = [].concat(l, [ a ]).reduce(
          (function(t, e) {
            return t.concat([ e, e + "-" + c, e + "-" + h ])
          }),
          []),
      _ = "beforeRead", b = "read", v = "afterRead", y = "beforeMain",
      w = "main", E = "afterMain", A = "beforeWrite", T = "write",
      C = "afterWrite", O = [ _, b, v, y, w, E, A, T, C ];
  function x(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }
  function k(t) {
    if (null == t)
      return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window
    }
    return t
  }
  function L(t) {
    return t instanceof k(t).Element || t instanceof Element
  }
  function S(t) {
    return t instanceof k(t).HTMLElement || t instanceof HTMLElement
  }
  function D(t) {
    return "undefined" != typeof ShadowRoot &&
        (t instanceof k(t).ShadowRoot || t instanceof ShadowRoot)
  }
  const $ = {
    name : "applyStyles",
    enabled : !0,
    phase : "write",
    fn : function(t) {
      var e = t.state;
      Object.keys(e.elements).forEach((function(t) {
        var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
        S(s) && x(s) &&
            (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
              var e = n[t];
              !1 === e ? s.removeAttribute(t)
                       : s.setAttribute(t, !0 === e ? "" : e)
            })))
      }))
    },
    effect : function(t) {
      var e = t.state, i = {
        popper : {
          position : e.options.strategy,
          left : "0",
          top : "0",
          margin : "0"
        },
        arrow : {position : "absolute"},
        reference : {}
      };
      return Object.assign(e.elements.popper.style, i.popper),
             e.styles = i,
             e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
             function() {
               Object.keys(e.elements).forEach((function(t) {
                 var n = e.elements[t], s = e.attributes[t] || {},
                     o = Object
                             .keys(
                                 e.styles.hasOwnProperty(t) ? e.styles[t]
                                                            : i[t])
                             .reduce(
                                 (function(t, e) {
                                   return t[e] = "", t
                                 }),
                                 {});
                 S(n) && x(n) &&
                     (Object.assign(n.style, o),
                      Object.keys(s).forEach((function(t) {
                        n.removeAttribute(t)
                      })))
               }))
             }
    },
    requires : [ "computeStyles" ]
  };
  function I(t) {
    return t.split("-")[0]
  }
  var N = Math.max, P = Math.min, M = Math.round;
  function j() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands)
        ? t.brands
              .map((function(t) {
                return t.brand + "/" + t.version
              }))
              .join(" ")
        : navigator.userAgent
  }
  function F() {
    return !/^((?!chrome|android).)*safari/i.test(j())
  }
  function H(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(), s = 1, o = 1;
    e && S(t) &&
        (s = t.offsetWidth > 0 && M(n.width) / t.offsetWidth || 1,
         o = t.offsetHeight > 0 && M(n.height) / t.offsetHeight || 1);
    var r = (L(t) ? k(t) : window).visualViewport, a = !F() && i,
        l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
        c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s,
        d = n.height / o;
    return {
      width: h, height: d, top: c, right: l + h, bottom: c + d, left: l, x: l,
          y: c
    }
  }
  function B(t) {
    var e = H(t), i = t.offsetWidth, n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width),
           Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft, y: t.offsetTop, width: i, height: n
    }
  }
  function W(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e))
      return !0;
    if (i && D(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n))
          return !0;
        n = n.parentNode || n.host
      } while (n)
    }
    return !1
  }
  function z(t) {
    return k(t).getComputedStyle(t)
  }
  function R(t) {
    return [ "table", "td", "th" ].indexOf(x(t)) >= 0
  }
  function q(t) {
    return ((L(t) ? t.ownerDocument : t.document) || window.document)
        .documentElement
  }
  function V(t) {
    return "html" === x(t)
        ? t
        : t.assignedSlot || t.parentNode || (D(t) ? t.host : null) || q(t)
  }
  function Y(t) {
    return S(t) && "fixed" !== z(t).position ? t.offsetParent : null
  }
  function K(t) {
    for (var e = k(t), i = Y(t); i && R(i) && "static" === z(i).position;)
      i = Y(i);
    return i &&
            ("html" === x(i) || "body" === x(i) && "static" === z(i).position)
        ? e
        : i || function(t) {
            var e = /firefox/i.test(j());
            if (/Trident/i.test(j()) && S(t) && "fixed" === z(t).position)
              return null;
            var i = V(t);
            for (D(i) && (i = i.host);
                 S(i) && [ "html", "body" ].indexOf(x(i)) < 0;) {
              var n = z(i);
              if ("none" !== n.transform || "none" !== n.perspective ||
                  "paint" === n.contain ||
                  -1 !== [ "transform", "perspective" ].indexOf(n.willChange) ||
                  e && "filter" === n.willChange ||
                  e && n.filter && "none" !== n.filter)
                return i;
              i = i.parentNode
            }
            return null
          }(t) || e
  }
  function Q(t) {
    return [ "top", "bottom" ].indexOf(t) >= 0 ? "x" : "y"
  }
  function X(t, e, i) {
    return N(t, P(e, i))
  }
  function U(t) {
    return Object.assign({}, {top : 0, right : 0, bottom : 0, left : 0}, t)
  }
  function G(t, e) {
    return e.reduce(
        (function(e, i) {
          return e[i] = t, e
        }),
        {})
  }
  const J = {
    name : "arrow",
    enabled : !0,
    phase : "main",
    fn : function(t) {
      var e, i = t.state, a = t.name, c = t.options, h = i.elements.arrow,
             d = i.modifiersData.popperOffsets, u = I(i.placement), f = Q(u),
             p = [ r, o ].indexOf(u) >= 0 ? "height" : "width";
      if (h && d) {
        var m =
                function(t, e) {
          return U("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:G(t,l))
        }(c.padding, i),
            g = B(h), _ = "y" === f ? n : r, b = "y" === f ? s : o,
            v = i.rects.reference[p] + i.rects.reference[f] - d[f] -
            i.rects.popper[p],
            y = d[f] - i.rects.reference[f], w = K(h),
            E = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
            A = v / 2 - y / 2, T = m[_], C = E - g[p] - m[b],
            O = E / 2 - g[p] / 2 + A, x = X(T, O, C), k = f;
        i.modifiersData[a] = ((e = {})[k] = x, e.centerOffset = x - O, e)
      }
    },
    effect : function(t) {
      var e = t.state, i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
          ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
          W(e.elements.popper, n) && (e.elements.arrow = n)
    },
    requires : [ "popperOffsets" ],
    requiresIfExists : [ "preventOverflow" ]
  };
  function Z(t) {
    return t.split("-")[1]
  }
  var tt = {top : "auto", right : "auto", bottom : "auto", left : "auto"};
  function et(t) {
    var e, i = t.popper, a = t.popperRect, l = t.placement, c = t.variation,
           d = t.offsets, u = t.position, f = t.gpuAcceleration, p = t.adaptive,
           m = t.roundOffsets, g = t.isFixed, _ = d.x, b = void 0 === _ ? 0 : _,
           v = d.y, y = void 0 === v ? 0 : v,
           w = "function" == typeof m ? m({x : b, y}) : {x : b, y};
    b = w.x, y = w.y;
    var E = d.hasOwnProperty("x"), A = d.hasOwnProperty("y"), T = r, C = n,
        O = window;
    if (p) {
      var x = K(i), L = "clientHeight", S = "clientWidth";
      x === k(i) && "static" !== z(x = q(i)).position && "absolute" === u &&
          (L = "scrollHeight", S = "scrollWidth"),
          (l === n || (l === r || l === o) && c === h) &&
          (C = s,
           y -=
           (g && x === O && O.visualViewport ? O.visualViewport.height : x[L]) -
               a.height,
           y *= f ? 1 : -1),
          l !== r && (l !== n && l !== s || c !== h) ||
          (T = o,
           b -=
           (g && x === O && O.visualViewport ? O.visualViewport.width : x[S]) -
               a.width,
           b *= f ? 1 : -1)
    }
    var D, $ = Object.assign({position : u}, p && tt),
           I = !0 === m ? function(t, e) {
             var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
             return {
               x: M(i * s) / s || 0, y: M(n * s) / s || 0
             }
           }({x : b, y}, k(i)) : {x : b, y};
    return b = I.x, y = I.y,
           f ? Object.assign(
                   {},
                   $,
                   ((D = {})[C] = A ? "0" : "",
                    D[T] = E ? "0" : "",
                    D.transform = (O.devicePixelRatio || 1) <= 1
                        ? "translate(" + b + "px, " + y + "px)"
                        : "translate3d(" + b + "px, " + y + "px, 0)",
                    D))
             : Object.assign(
                   {},
                   $,
                   ((e = {})[C] = A ? y + "px" : "",
                    e[T] = E ? b + "px" : "",
                    e.transform = "",
                    e))
  }
  const it = {
    name : "computeStyles",
    enabled : !0,
    phase : "beforeWrite",
    fn : function(t) {
      var e = t.state, i = t.options, n = i.gpuAcceleration,
          s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o,
          a = i.roundOffsets, l = void 0 === a || a, c = {
            placement : I(e.placement),
            variation : Z(e.placement),
            popper : e.elements.popper,
            popperRect : e.rects.popper,
            gpuAcceleration : s,
            isFixed : "fixed" === e.options.strategy
          };
      null != e.modifiersData.popperOffsets &&
          (e.styles.popper =
               Object.assign({}, e.styles.popper, et(Object.assign({}, c, {
                               offsets : e.modifiersData.popperOffsets,
                               position : e.options.strategy,
                               adaptive : r,
                               roundOffsets : l
                             })))),
          null != e.modifiersData.arrow &&
          (e.styles.arrow =
               Object.assign({}, e.styles.arrow, et(Object.assign({}, c, {
                               offsets : e.modifiersData.arrow,
                               position : "absolute",
                               adaptive : !1,
                               roundOffsets : l
                             })))),
          e.attributes.popper = Object.assign(
              {}, e.attributes.popper, {"data-popper-placement" : e.placement})
    },
    data : {}
  };
  var nt = {passive : !0};
  const st = {
    name : "eventListeners",
    enabled : !0,
    phase : "write",
    fn : function() {},
    effect : function(t) {
      var e = t.state, i = t.instance, n = t.options, s = n.scroll,
          o = void 0 === s || s, r = n.resize, a = void 0 === r || r,
          l = k(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach((function(t) {
        t.addEventListener("scroll", i.update, nt)
      })),
             a && l.addEventListener("resize", i.update, nt), function() {
               o && c.forEach((function(t) {
                 t.removeEventListener("scroll", i.update, nt)
               })),
                   a && l.removeEventListener("resize", i.update, nt)
             }
    },
    data : {}
  };
  var ot = {left : "right", right : "left", bottom : "top", top : "bottom"};
  function rt(t) {
    return t.replace(/left|right|bottom|top/g, (function(t) {
                       return ot[t]
                     }))
  }
  var at = {start : "end", end : "start"};
  function lt(t) {
    return t.replace(/start|end/g, (function(t) {
                       return at[t]
                     }))
  }
  function ct(t) {
    var e = k(t);
    return {
      scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset
    }
  }
  function ht(t) {
    return H(q(t)).left + ct(t).scrollLeft
  }
  function dt(t) {
    var e = z(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n)
  }
  function ut(t) {
    return [ "html", "body", "#document" ].indexOf(x(t)) >= 0
        ? t.ownerDocument.body
        : S(t) && dt(t) ? t
                        : ut(V(t))
  }
  function ft(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = ut(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = k(n),
        r = s ? [ o ].concat(o.visualViewport || [], dt(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(ft(V(r)))
  }
  function pt(t) {
    return Object.assign(
        {},
        t,
        {left : t.x, top : t.y, right : t.x + t.width, bottom : t.y + t.height})
  }
  function mt(t, e, i) {
    return e===u?pt(function(t,e){var i=k(t),n=q(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=F();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+ht(t),y:l}}(t,i)):L(e)?function(t,e){var i=H(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):pt(function(t){var e,i=q(t),n=ct(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=N(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=N(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ht(t),l=-n.scrollTop;return"rtl"===z(s||i).direction&&(a+=N(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(q(t)))
  }
  function gt(t) {
    var e, i = t.reference, a = t.element, l = t.placement, d = l ? I(l) : null,
           u = l ? Z(l) : null, f = i.x + i.width / 2 - a.width / 2,
           p = i.y + i.height / 2 - a.height / 2;
    switch (d) {
      case n:
        e = {x : f, y : i.y - a.height};
        break;
      case s:
        e = {x : f, y : i.y + i.height};
        break;
      case o:
        e = {x : i.x + i.width, y : p};
        break;
      case r:
        e = {x : i.x - a.width, y : p};
        break;
      default:
        e = { x : i.x, y : i.y }
    }
    var m = d ? Q(d) : null;
    if (null != m) {
      var g = "y" === m ? "height" : "width";
      switch (u) {
        case c:
          e[m] = e[m] - (i[g] / 2 - a[g] / 2);
          break;
        case h:
          e[m] = e[m] + (i[g] / 2 - a[g] / 2)
      }
    }
    return e
  }
  function _t(t, e) {
    void 0 === e && (e = {});
    var i = e, r = i.placement, a = void 0 === r ? t.placement : r,
        c = i.strategy, h = void 0 === c ? t.strategy : c, m = i.boundary,
        g = void 0 === m ? d : m, _ = i.rootBoundary, b = void 0 === _ ? u : _,
        v = i.elementContext, y = void 0 === v ? f : v, w = i.altBoundary,
        E = void 0 !== w && w, A = i.padding, T = void 0 === A ? 0 : A,
        C = U("number" != typeof T ? T : G(T, l)), O = y === f ? p : f,
        k = t.rects.popper, D = t.elements[E ? O : y],
        $ =
            function(t, e, i, n) {
          var s="clippingParents"===e?function(t){var e=ft(V(t)),i=["absolute","fixed"].indexOf(z(t).position)>=0&&S(t)?K(t):t;return L(i)?e.filter((function(t){return L(t)&&W(t,i)&&"body"!==x(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=mt(t,i,n);return e.top=N(s.top,e.top),e.right=P(s.right,e.right),e.bottom=P(s.bottom,e.bottom),e.left=N(s.left,e.left),e}),mt(t,r,n));
          return a.width = a.right - a.left, a.height = a.bottom - a.top,
                 a.x = a.left, a.y = a.top, a
        }(L(D) ? D : D.contextElement || q(t.elements.popper), g, b, h),
        I = H(t.elements.reference),
        M = gt(
            {reference : I, element : k, strategy : "absolute", placement : a}),
        j = pt(Object.assign({}, k, M)), F = y === f ? j : I, B = {
          top : $.top - F.top + C.top,
          bottom : F.bottom - $.bottom + C.bottom,
          left : $.left - F.left + C.left,
          right : F.right - $.right + C.right
        },
        R = t.modifiersData.offset;
    if (y === f && R) {
      var Y = R[a];
      Object.keys(B).forEach((function(t) {
        var e = [ o, s ].indexOf(t) >= 0 ? 1 : -1,
            i = [ n, s ].indexOf(t) >= 0 ? "y" : "x";
        B[t] += Y[i] * e
      }))
    }
    return B
  }
  const bt = {
    name : "flip",
    enabled : !0,
    phase : "main",
    fn : function(t) {
      var e = t.state, i = t.options, h = t.name;
      if (!e.modifiersData[h]._skip) {
        for(var d=i.mainAxis,u=void 0===d||d,f=i.altAxis,p=void 0===f||f,_=i.fallbackPlacements,b=i.padding,v=i.boundary,y=i.rootBoundary,w=i.altBoundary,E=i.flipVariations,A=void 0===E||E,T=i.allowedAutoPlacements,C=e.options.placement,O=I(C),x=_||(O!==C&&A?function(t){if(I(t)===a)return[];var e=rt(t);return[lt(t),e,lt(e)]}(C):[rt(C)]),k=[C].concat(x).reduce((function(t,i){return t.concat(I(i)===a?function(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,c=i.allowedAutoPlacements,h=void 0===c?g:c,d=Z(n),u=d?a?m:m.filter((function(t){return Z(t)===d})):l,f=u.filter((function(t){return h.indexOf(t)>=0}));0===f.length&&(f=u);var p=f.reduce((function(e,i){return e[i]=_t(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[I(i)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}(e,{placement:i,boundary:v,rootBoundary:y,padding:b,flipVariations:A,allowedAutoPlacements:T}):i)}),[]),L=e.rects.reference,S=e.rects.popper,D=new Map,$=!0,N=k[0],P=0;P<k.length;P++){
          var M = k[P], j = I(M), F = Z(M) === c, H = [ n, s ].indexOf(j) >= 0,
              B = H ? "width" : "height", W = _t(e, {
                                            placement : M,
                                            boundary : v,
                                            rootBoundary : y,
                                            altBoundary : w,
                                            padding : b
                                          }),
              z = H ? F ? o : r
              : F   ? s
                    : n;
          L[B] > S[B] && (z = rt(z));
          var R = rt(z), q = [];
          if (u && q.push(W[j] <= 0),
              p && q.push(W[z] <= 0, W[R] <= 0),
              q.every((function(t) {
                return t
              }))) {
            N = M, $ = !1;
            break
          }
          D.set(M, q)
        }
        if ($)
          for (var V = function(t) {
                 var e = k.find((function(e) {
                   var i = D.get(e);
                   if (i)
                     return i.slice(0, t).every((function(t) {
                       return t
                     }))
                 }));
                 if (e)
                   return N = e, "break"
               }, Y = A ? 3 : 1; Y > 0 && "break" !== V(Y); Y--)
            ;
        e.placement !== N &&
            (e.modifiersData[h]._skip = !0, e.placement = N, e.reset = !0)
      }
    },
    requiresIfExists : [ "offset" ],
    data : {_skip : !1}
  };
  function vt(t, e, i) {
    return void 0 === i && (i = {x : 0, y : 0}), {
      top: t.top - e.height - i.y, right: t.right - e.width + i.x,
          bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x
    }
  }
  function yt(t) {
    return [ n, o, s, r ].some((function(e) {
      return t[e] >= 0
    }))
  }
  const wt = {
    name : "hide",
    enabled : !0,
    phase : "main",
    requiresIfExists : [ "preventOverflow" ],
    fn : function(t) {
      var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = _t(e, {elementContext : "reference"}),
          a = _t(e, {altBoundary : !0}), l = vt(r, n), c = vt(a, s, o),
          h = yt(l), d = yt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets : l,
        popperEscapeOffsets : c,
        isReferenceHidden : h,
        hasPopperEscaped : d
      },
      e.attributes.popper = Object.assign(
          {},
          e.attributes.popper,
          {"data-popper-reference-hidden" : h, "data-popper-escaped" : d})
    }
  },
        Et = {
          name : "offset",
          enabled : !0,
          phase : "main",
          requires : [ "popperOffsets" ],
          fn : function(t) {
            var e = t.state, i = t.options, s = t.name, a = i.offset,
                l = void 0 === a ? [ 0, 0 ] : a,
                c = g.reduce(
                    (function(t, i) {
                      return t[i] = function(t, e, i) {
                        var s = I(t), a = [ r, n ].indexOf(s) >= 0 ? -1 : 1,
                            l = "function" == typeof i
                            ? i(Object.assign({}, e, {placement : t}))
                            : i,
                            c = l[0], h = l[1];
                        return c = c || 0, h = (h || 0) * a,
                               [ r, o ].indexOf(s) >= 0 ? {x : h, y : c}
                                                        : {x : c, y : h}
                      }(i, e.rects, l), t
                    }),
                    {}),
                h = c[e.placement], d = h.x, u = h.y;
            null != e.modifiersData.popperOffsets &&
                (e.modifiersData.popperOffsets.x += d,
                 e.modifiersData.popperOffsets.y += u),
                e.modifiersData[s] = c
          }
        },
        At = {
          name : "popperOffsets",
          enabled : !0,
          phase : "read",
          fn : function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = gt({
              reference : e.rects.reference,
              element : e.rects.popper,
              strategy : "absolute",
              placement : e.placement
            })
          },
          data : {}
        },
        Tt = {
          name : "preventOverflow",
          enabled : !0,
          phase : "main",
          fn : function(t) {
            var e = t.state, i = t.options, a = t.name, l = i.mainAxis,
                h = void 0 === l || l, d = i.altAxis, u = void 0 !== d && d,
                f = i.boundary, p = i.rootBoundary, m = i.altBoundary,
                g = i.padding, _ = i.tether, b = void 0 === _ || _,
                v = i.tetherOffset, y = void 0 === v ? 0 : v,
                w = _t(e, {
                  boundary : f,
                  rootBoundary : p,
                  padding : g,
                  altBoundary : m
                }),
                E = I(e.placement), A = Z(e.placement), T = !A, C = Q(E),
                O = "x" === C ? "y" : "x", x = e.modifiersData.popperOffsets,
                k = e.rects.reference, L = e.rects.popper,
                S = "function" == typeof y
                ? y(Object.assign({}, e.rects, {placement : e.placement}))
                : y,
                D = "number" == typeof S
                ? {mainAxis : S, altAxis : S}
                : Object.assign({mainAxis : 0, altAxis : 0}, S),
                $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement]
                                           : null,
                M = {x : 0, y : 0};
            if (x) {
              if (h) {
                var j,
                    F = "y" === C ? n : r, H = "y" === C ? s : o,
                    W = "y" === C ? "height" : "width", z = x[C], R = z + w[F],
                    q = z - w[H], V = b ? -L[W] / 2 : 0,
                    Y = A === c ? k[W] : L[W], U = A === c ? -L[W] : -k[W],
                    G = e.elements.arrow,
                    J = b && G ? B(G) : {width : 0, height : 0},
                    tt = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : {top : 0, right : 0, bottom : 0, left : 0},
                    et = tt[F], it = tt[H], nt = X(0, k[W], J[W]),
                    st = T ? k[W] / 2 - V - nt - et - D.mainAxis
                           : Y - nt - et - D.mainAxis,
                    ot = T ? -k[W] / 2 + V + nt + it + D.mainAxis
                           : U + nt + it + D.mainAxis,
                    rt = e.elements.arrow && K(e.elements.arrow),
                    at = rt ? "y" === C ? rt.clientTop || 0 : rt.clientLeft || 0
                            : 0,
                    lt = null != (j = null == $ ? void 0 : $[C]) ? j : 0,
                    ct = z + ot - lt,
                    ht = X(b ? P(R, z + st - lt - at) : R, z, b ? N(q, ct) : q);
                x[C] = ht, M[C] = ht - z
              }
              if (u) {
                var dt, ut = "x" === C ? n : r, ft = "x" === C ? s : o,
                        pt = x[O], mt = "y" === O ? "height" : "width",
                        gt = pt + w[ut], bt = pt - w[ft],
                        vt = -1 !== [ n, r ].indexOf(E),
                        yt = null != (dt = null == $ ? void 0 : $[O]) ? dt : 0,
                        wt = vt ? gt : pt - k[mt] - L[mt] - yt + D.altAxis,
                        Et = vt ? pt + k[mt] + L[mt] - yt - D.altAxis : bt,
                        At = b && vt ? function(t, e, i) {
                          var n = X(t, e, i);
                          return n > i ? i : n
                        }(wt, pt, Et) : X(b ? wt : gt, pt, b ? Et : bt);
                x[O] = At, M[O] = At - pt
              }
              e.modifiersData[a] = M
            }
          },
          requiresIfExists : [ "offset" ]
        };
  function Ct(t, e, i) {
    void 0 === i && (i = !1);
    var n, s, o = S(e), r = S(e) && function(t) {
      var e = t.getBoundingClientRect(), i = M(e.width) / t.offsetWidth || 1,
          n = M(e.height) / t.offsetHeight || 1;
      return 1 !== i || 1 !== n
    }(e), a = q(e), l = H(t, r, i), c = {scrollLeft : 0, scrollTop : 0}, h = {
      x : 0,
      y : 0
    };
    return (o || !o && !i) &&
               (("body" !== x(e) || dt(a)) &&
                    (c = (n = e) !== k(n) && S(n) ? {
                      scrollLeft : (s = n).scrollLeft,
                      scrollTop : s.scrollTop
                    }
                                                  : ct(n)),
                S(e) ? ((h = H(e, !0)).x += e.clientLeft, h.y += e.clientTop)
                     : a && (h.x = ht(a))),
    {
      x: l.left + c.scrollLeft - h.x, y: l.top + c.scrollTop - h.y,
          width: l.width, height: l.height
    }
  }
  function Ot(t) {
    var e = new Map, i = new Set, n = [];
    function s(t) {
      i.add(t.name),
          [].concat(t.requires || [], t.requiresIfExists || [])
              .forEach((function(t) {
                if (!i.has(t)) {
                  var n = e.get(t);
                  n && s(n)
                }
              })),
          n.push(t)
    }
    return t.forEach((function(t) {
      e.set(t.name, t)
    })),
           t.forEach((function(t) {
             i.has(t.name) || s(t)
           })),
           n
  }
  var xt = {placement : "bottom", modifiers : [], strategy : "absolute"};
  function kt() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some((function(t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    }))
  }
  function Lt(t) {
    void 0 === t && (t = {});
    var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i,
        s = e.defaultOptions, o = void 0 === s ? xt : s;
    return function(t, e, i) {
      void 0 === i && (i = o);
      var s, r,
          a = {
            placement : "bottom",
            orderedModifiers : [],
            options : Object.assign({}, xt, o),
            modifiersData : {},
            elements : {reference : t, popper : e},
            attributes : {},
            styles : {}
          },
          l = [], c = !1, h = {
            state : a,
            setOptions : function(i) {
              var s = "function" == typeof i ? i(a.options) : i;
              d(), a.options = Object.assign({}, o, a.options, s),
                   a.scrollParents = {
                     reference : L(t)       ? ft(t)
                         : t.contextElement ? ft(t.contextElement)
                                            : [],
                     popper : ft(e)
                   };
              var r, c,
                  u =
                      function(t) {
                    var e = Ot(t);
                    return O.reduce(
                        (function(t, i) {
                          return t.concat(e.filter((function(t) {
                            return t.phase === i
                          })))
                        }),
                        [])
                  }((r = [].concat(n, a.options.modifiers),
                      c = r.reduce(
                          (function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                              options : Object.assign({}, i.options, e.options),
                              data : Object.assign({}, i.data, e.data)
                            })
                                                 : e,
                                   t
                          }),
                          {}),
                      Object.keys(c).map((function(t) {
                        return c[t]
                      }))));
              return a.orderedModifiers = u.filter((function(t) {
                return t.enabled
              })),
                     a.orderedModifiers.forEach((function(t) {
                       var e = t.name, i = t.options, n = void 0 === i ? {} : i,
                           s = t.effect;
                       if ("function" == typeof s) {
                         var o = s(
                             {state : a, name : e, instance : h, options : n});
                         l.push(o || function() {})
                       }
                     })),
                     h.update()
            },
            forceUpdate : function() {
              if (!c) {
                var t = a.elements, e = t.reference, i = t.popper;
                if (kt(e, i)) {
                  a.rects = {
                    reference : Ct(e, K(i), "fixed" === a.options.strategy),
                    popper : B(i)
                  },
                  a.reset = !1, a.placement = a.options.placement,
                  a.orderedModifiers.forEach((function(t) {
                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                  }));
                  for (var n = 0; n < a.orderedModifiers.length; n++)
                    if (!0 !== a.reset) {
                      var s = a.orderedModifiers[n], o = s.fn, r = s.options,
                          l = void 0 === r ? {} : r, d = s.name;
                      "function" == typeof o &&
                          (a = o({
                                 state : a,
                                 options : l,
                                 name : d,
                                 instance : h
                               }) ||
                               a)
                    } else
                      a.reset = !1, n = -1
                }
              }
            },
            update :
                (s =
                     function() {
                       return new Promise((function(t) {
                         h.forceUpdate(), t(a)
                       }))
                     },
                 function() {
                   return r || (r = new Promise((function(t) {
                                  Promise.resolve().then((function() {
                                    r = void 0, t(s())
                                  }))
                                }))),
                          r
                 }),
            destroy : function() {
              d(), c = !0
            }
          };
      if (!kt(t, e))
        return h;
      function d() {
        l.forEach((function(t) {
          return t()
        })),
            l = []
      }
      return h.setOptions(i).then((function(t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t)
      })),
             h
    }
  }
  var St = Lt(),
      Dt = Lt({defaultModifiers : [ st, At, it, $, Et, bt, Tt, J, wt ]}),
      $t = Lt({defaultModifiers : [ st, At, it, $ ]});
  const It = new Map, Nt = {
    set(t, e, i) {
      It.has(t) || It.set(t, new Map);
      const n = It.get(t);
      n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(n.keys())[0]}.`)
    },
    get : (t, e) => It.has(t) && It.get(t).get(e) || null,
    remove(t, e) {
      if (!It.has(t))
        return;
      const i = It.get(t);
      i.delete(e), 0 === i.size && It.delete(t)
    }
  },
        Pt = "transitionend",
        Mt = t =>
            (t && window.CSS && window.CSS.escape &&
                 (t = t.replace(
                      /#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))),
             t),
        jt = t => { t.dispatchEvent(new Event(Pt)) },
        Ft = t => !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Ht = t => Ft(t)                      ? t.jquery ? t[0] : t
      : "string" == typeof t && t.length > 0 ? document.querySelector(Mt(t))
                                             : null,
        Bt =
            t => {
              if (!Ft(t) || 0 === t.getClientRects().length)
                return !1;
              const e = "visible" ===
                  getComputedStyle(t).getPropertyValue("visibility"),
                    i = t.closest("details:not([open])");
              if (!i)
                return e;
              if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i)
                  return !1;
                if (null === e)
                  return !1
              }
              return e
            },
        Wt = t => !t || t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled ? t.disabled
                             : t.hasAttribute("disabled") &&
               "false" !== t.getAttribute("disabled")),
        zt =
            t => {
              if (!document.documentElement.attachShadow)
                return null;
              if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
              }
              return t instanceof ShadowRoot ? t
                  : t.parentNode             ? zt(t.parentNode)
                                             : null
            },
        Rt = () => {}, qt = t => { t.offsetHeight },
        Vt = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
        Yt = [], Kt = () => "rtl" === document.documentElement.dir,
        Qt =
            t => {
              var e;
              e =
                  () => {
                    const e = Vt();
                    if (e) {
                      const i = t.NAME, n = e.fn[i];
                      e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t,
                      e.fn[i].noConflict = () =>
                          (e.fn[i] = n, t.jQueryInterface)
                    }
                  },
              "loading" === document.readyState
                  ? (Yt.length ||
                         document.addEventListener("DOMContentLoaded", (() => {
                                                     for (const t of Yt)
                                                       t()
                                                   })),
                     Yt.push(e))
                  : e()
            },
        Xt = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
        Ut = (t, e, i = !0) => {
          if (!i)
            return void Xt(t);
          const n =
              (t => {
                if (!t)
                  return 0;
                let {transitionDuration : e, transitionDelay : i} =
                    window.getComputedStyle(t);
                const n = Number.parseFloat(e), s = Number.parseFloat(i);
                return n || s
                    ? (e = e.split(",")[0],
                       i = i.split(",")[0],
                       1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                    : 0
              })(e) +
              5;
          let s = !1;
          const o = ({
            target : i
          }) => { i === e && (s = !0, e.removeEventListener(Pt, o), Xt(t)) };
          e.addEventListener(Pt, o), setTimeout((() => {s || jt(e)}), n)
        }, Gt = (t, e, i, n) => {
          const s = t.length;
          let o = t.indexOf(e);
          return -1 === o ? !i && n ? t[s - 1] : t[0]
                          : (o += i ? 1 : -1,
                             n && (o = (o + s) % s),
                             t[Math.max(0, Math.min(o, s - 1))])
        }, Jt = /[^.]*(?=\..*)\.|.*/, Zt = /\..*/, te = /::\d+$/, ee = {};
  let ie = 1;
  const ne = {mouseenter : "mouseover", mouseleave : "mouseout"},
        se = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll"
        ]);
  function oe(t, e) {
    return e && `${e}::${ie++}` || t.uidEvent || ie++
  }
  function re(t) {
    const e = oe(t);
    return t.uidEvent = e, ee[e] = ee[e] || {}, ee[e]
  }
  function ae(t, e, i = null) {
    return Object.values(t).find(
        (t => t.callable === e && t.delegationSelector === i))
  }
  function le(t, e, i) {
    const n = "string" == typeof e, s = n ? i : e || i;
    let o = ue(t);
    return se.has(o) || (o = t), [ n, s, o ]
  }
  function ce(t, e, i, n, s) {
    if ("string" != typeof e || !t)
      return;
    let [o, r, a] = le(e, i, n);
    if (e in ne) {
      const t = t => function(e) {
        if (!e.relatedTarget ||
            e.relatedTarget !== e.delegateTarget &&
                !e.delegateTarget.contains(e.relatedTarget))
          return t.call(this, e)
      };
      r = t(r)
    }
    const l = re(t), c = l[a] || (l[a] = {}), h = ae(c, r, o ? i : null);
    if (h)
      return void (h.oneOff = h.oneOff && s);
    const d = oe(r, e.replace(Jt, "")), u = o ? function(t, e, i) {
      return function n(s) {
        const o = t.querySelectorAll(e);
        for (let {target : r} = s; r && r !== this; r = r.parentNode)
          for (const a of o)
            if (a === r)
              return pe(s, {delegateTarget : r}),
                     n.oneOff && fe.off(t, s.type, e, i), i.apply(r, [ s ])
      }
    }(t, i, r) : function(t, e) {
      return function i(n) {
        return pe(n, {delegateTarget : t}), i.oneOff && fe.off(t, n.type, e),
               e.apply(t, [ n ])
      }
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s,
    u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
  }
  function he(t, e, i, n, s) {
    const o = ae(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
  }
  function de(t, e, i, n) {
    const s = e[i] || {};
    for (const [o, r] of Object.entries(s))
      o.includes(n) && he(t, e, i, r.callable, r.delegationSelector)
  }
  function ue(t) {
    return t = t.replace(Zt, ""), ne[t] || t
  }
  const fe = {
    on(t, e, i, n) {
      ce(t, e, i, n, !1)
    },
    one(t, e, i, n) {
      ce(t, e, i, n, !0)
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t)
        return;
      const [s, o, r] = le(e, i, n), a = r !== e, l = re(t), c = l[r] || {},
                   h = e.startsWith(".");
      if (void 0 === o) {
        if (h)
          for (const i of Object.keys(l))
            de(t, l, i, e.slice(1));
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(te, "");
          a && !e.includes(s) || he(t, l, r, n.callable, n.delegationSelector)
        }
      } else {
        if (!Object.keys(c).length)
          return;
        he(t, l, r, o, s ? i : null)
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t)
        return null;
      const n = Vt();
      let s = null, o = !0, r = !0, a = !1;
      e !== ue(e) && n &&
          (s = n.Event(e, i),
           n(t).trigger(s),
           o = !s.isPropagationStopped(),
           r = !s.isImmediatePropagationStopped(),
           a = s.isDefaultPrevented());
      const l = pe(new Event(e, {bubbles : o, cancelable : !0}), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l),
             l.defaultPrevented && s && s.preventDefault(), l
    }
  };
  function pe(t, e = {}) {
    for (const [i, n] of Object.entries(e))
      try {
        t[i] = n
      } catch (e) {
        Object.defineProperty(t, i, {configurable : !0, get : () => n})
      }
    return t
  }
  function me(t) {
    if ("true" === t)
      return !0;
    if ("false" === t)
      return !1;
    if (t === Number(t).toString())
      return Number(t);
    if ("" === t || "null" === t)
      return null;
    if ("string" != typeof t)
      return t;
    try {
      return JSON.parse(decodeURIComponent(t))
    } catch (e) {
      return t
    }
  }
  function ge(t) {
    return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
  }
  const _e = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${ge(e)}`, i)
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${ge(e)}`)
    },
    getDataAttributes(t) {
      if (!t)
        return {};
      const e = {},
            i = Object.keys(t.dataset).filter(
                (t => t.startsWith("bs") && !t.startsWith("bsConfig")));
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
        e[i] = me(t.dataset[n])
      }
      return e
    },
    getDataAttribute : (t, e) => me(t.getAttribute(`data-bs-${ge(e)}`))
  };
  class be {
    static get Default() {
      return {}
    }
    static get DefaultType() {
      return {}
    }
    static get NAME() {
      throw new Error(
          'You have to implement the static method "NAME", for each component!')
    }
    _getConfig(t) {
      return t = this._mergeConfigObj(t), t = this._configAfterMerge(t),
             this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
      return t
    }
    _mergeConfigObj(t, e) {
      const i = Ft(e) ? _e.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default, ..."object" == typeof i ? i : {},
            ...Ft(e) ? _e.getDataAttributes(e) : {},
            ..."object" == typeof t ? t : {}
      }
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
              o = Ft(e)       ? "element"
            : null == (i = e) ? `${i}`
                              : Object.prototype.toString.call(i)
                                    .match(/\s([a-z]+)/i)[1]
                                    .toLowerCase();
        if (!new RegExp(s).test(o))
          throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${
                  n}" provided type "${o}" but expected type "${s}".`)
      }
      var i
    }
  }
  class ve extends be {
    constructor(t, e) {
      super(),
          (t = Ht(t)) &&
          (this._element = t,
           this._config = this._getConfig(e),
           Nt.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      Nt.remove(this._element, this.constructor.DATA_KEY),
          fe.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this))
        this[t] = null
    }
    _queueCallback(t, e, i = !0) {
      Ut(t, e, i)
    }
    _getConfig(t) {
      return t = this._mergeConfigObj(t, this._element),
             t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    static getInstance(t) {
      return Nt.get(Ht(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
    }
    static get VERSION() {
      return "5.3.2"
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`
    }
  }
  const ye =
            t => {
              let e = t.getAttribute("data-bs-target");
              if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith("."))
                  return null;
                i.includes("#") && !i.startsWith("#") &&
                    (i = `#${i.split("#")[1]}`),
                    e = i && "#" !== i ? Mt(i.trim()) : null
              }
              return e
            },
        we = {
          find : (t, e = document.documentElement) => [].concat(
              ...Element.prototype.querySelectorAll.call(e, t)),
          findOne : (t, e = document.documentElement) =>
              Element.prototype.querySelector.call(e, t),
          children :
              (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
          parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n;)
              i.push(n), n = n.parentNode.closest(e);
            return i
          },
          prev(t, e) {
            let i = t.previousElementSibling;
            for (; i;) {
              if (i.matches(e))
                return [ i ];
              i = i.previousElementSibling
            }
            return []
          },
          next(t, e) {
            let i = t.nextElementSibling;
            for (; i;) {
              if (i.matches(e))
                return [ i ];
              i = i.nextElementSibling
            }
            return []
          },
          focusableChildren(t) {
            const e =
                [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]'
                ].map((t => `${t}:not([tabindex^="-"])`))
                    .join(",");
            return this.find(e, t).filter((t => !Wt(t) && Bt(t)))
          },
          getSelectorFromElement(t) {
            const e = ye(t);
            return e && we.findOne(e) ? e : null
          },
          getElementFromSelector(t) {
            const e = ye(t);
            return e ? we.findOne(e) : null
          },
          getMultipleElementsFromSelector(t) {
            const e = ye(t);
            return e ? we.find(e) : []
          }
        },
        Ee = (t, e = "hide") => {
          const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
          fe.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
                  if ([ "A", "AREA" ].includes(this.tagName) &&
                          i.preventDefault(),
                      Wt(this))
                    return;
                  const s =
                      we.getElementFromSelector(this) || this.closest(`.${n}`);
                  t.getOrCreateInstance(s)[e]()
                }))
        }, Ae = ".bs.alert", Te = `close${Ae}`, Ce = `closed${Ae}`;
  class Oe extends ve {
    static get NAME() {
      return "alert"
    }
    close() {
      if (fe.trigger(this._element, Te).defaultPrevented)
        return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback((() => this._destroyElement()), this._element, t)
    }
    _destroyElement() {
      this._element.remove(), fe.trigger(this._element, Ce), this.dispose()
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Oe.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }
  Ee(Oe, "close"), Qt(Oe);
  const xe = '[data-bs-toggle="button"]';
  class ke extends ve {
    static get NAME() {
      return "button"
    }
    toggle() {
      this._element.setAttribute(
          "aria-pressed", this._element.classList.toggle("active"))
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = ke.getOrCreateInstance(this);
        "toggle" === t && e[t]()
      }))
    }
  }
  fe.on(document, "click.bs.button.data-api", xe, (t => {
          t.preventDefault();
          const e = t.target.closest(xe);
          ke.getOrCreateInstance(e).toggle()
        })),
      Qt(ke);
  const Le = ".bs.swipe", Se = `touchstart${Le}`, De = `touchmove${Le}`,
        $e = `touchend${Le}`, Ie = `pointerdown${Le}`, Ne = `pointerup${Le}`,
        Pe = {endCallback : null, leftCallback : null, rightCallback : null},
        Me = {
          endCallback : "(function|null)",
          leftCallback : "(function|null)",
          rightCallback : "(function|null)"
        };
  class je extends be {
    constructor(t, e) {
      super(), this._element = t,
               t && je.isSupported() &&
          (this._config = this._getConfig(e),
           this._deltaX = 0,
           this._supportPointerEvents = Boolean(window.PointerEvent),
           this._initEvents())
    }
    static get Default() {
      return Pe
    }
    static get DefaultType() {
      return Me
    }
    static get NAME() {
      return "swipe"
    }
    dispose() {
      fe.off(this._element, Le)
    }
    _start(t) {
      this._supportPointerEvents
          ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
          : this._deltaX = t.touches[0].clientX
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
          (this._deltaX = t.clientX - this._deltaX),
          this._handleSwipe(), Xt(this._config.endCallback)
    }
    _move(t) {
      this._deltaX = t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40)
        return;
      const e = t / this._deltaX;
      this._deltaX = 0,
      e && Xt(e > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
      this._supportPointerEvents
          ? (fe.on(this._element, Ie, (t => this._start(t))),
             fe.on(this._element, Ne, (t => this._end(t))),
             this._element.classList.add("pointer-event"))
          : (fe.on(this._element, Se, (t => this._start(t))),
             fe.on(this._element, De, (t => this._move(t))),
             fe.on(this._element, $e, (t => this._end(t))))
    }
    _eventIsPointerPenTouch(t) {
      return this._supportPointerEvents &&
          ("pen" === t.pointerType || "touch" === t.pointerType)
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
    }
  }
  const Fe = ".bs.carousel", He = ".data-api", Be = "next", We = "prev",
        ze = "left", Re = "right", qe = `slide${Fe}`, Ve = `slid${Fe}`,
        Ye = `keydown${Fe}`, Ke = `mouseenter${Fe}`, Qe = `mouseleave${Fe}`,
        Xe = `dragstart${Fe}`, Ue = `load${Fe}${He}`, Ge = `click${Fe}${He}`,
        Je = "carousel", Ze = "active", ti = ".active", ei = ".carousel-item",
        ii = ti + ei, ni = {ArrowLeft : Re, ArrowRight : ze}, si = {
          interval : 5e3,
          keyboard : !0,
          pause : "hover",
          ride : !1,
          touch : !0,
          wrap : !0
        },
        oi = {
          interval : "(number|boolean)",
          keyboard : "boolean",
          pause : "(string|boolean)",
          ride : "(boolean|string)",
          touch : "boolean",
          wrap : "boolean"
        };
  class ri extends ve {
    constructor(t, e) {
      super(t, e), this._interval = null, this._activeElement = null,
                   this._isSliding = !1, this.touchTimeout = null,
                   this._swipeHelper = null,
                   this._indicatorsElement =
                       we.findOne(".carousel-indicators", this._element),
                   this._addEventListeners(),
                   this._config.ride === Je && this.cycle()
    }
    static get Default() {
      return si
    }
    static get DefaultType() {
      return oi
    }
    static get NAME() {
      return "carousel"
    }
    next() {
      this._slide(Be)
    }
    nextWhenVisible() {
      !document.hidden && Bt(this._element) && this.next()
    }
    prev() {
      this._slide(We)
    }
    pause() {
      this._isSliding && jt(this._element), this._clearInterval()
    }
    cycle() {
      this._clearInterval(), this._updateInterval(),
          this._interval =
              setInterval((() => this.nextWhenVisible()), this._config.interval)
    }
    _maybeEnableCycle() {
      this._config.ride &&
          (this._isSliding ? fe.one(this._element, Ve, (() => this.cycle()))
                           : this.cycle())
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0)
        return;
      if (this._isSliding)
        return void fe.one(this._element, Ve, (() => this.to(t)));
      const i = this._getItemIndex(this._getActive());
      if (i === t)
        return;
      const n = t > i ? Be : We;
      this._slide(n, e[t])
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }
    _configAfterMerge(t) {
      return t.defaultInterval = t.interval, t
    }
    _addEventListeners() {
      this._config.keyboard &&
          fe.on(this._element, Ye, (t => this._keydown(t))),
          "hover" === this._config.pause &&
          (fe.on(this._element, Ke, (() => this.pause())),
           fe.on(this._element, Qe, (() => this._maybeEnableCycle()))),
          this._config.touch && je.isSupported() &&
          this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      for (const t of we.find(".carousel-item img", this._element))
        fe.on(t, Xe, (t => t.preventDefault()));
      const t = {
        leftCallback : () => this._slide(this._directionToOrder(ze)),
        rightCallback : () => this._slide(this._directionToOrder(Re)),
        endCallback : () => {
          "hover" === this._config.pause &&
              (this.pause(),
               this.touchTimeout && clearTimeout(this.touchTimeout),
               this.touchTimeout = setTimeout(
                   (() => this._maybeEnableCycle()),
                   500 + this._config.interval))
        }
      };
      this._swipeHelper = new je(this._element, t)
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName))
        return;
      const e = ni[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t)
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement)
        return;
      const e = we.findOne(ti, this._indicatorsElement);
      e.classList.remove(Ze), e.removeAttribute("aria-current");
      const i =
          we.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(Ze), i.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t)
        return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval
    }
    _slide(t, e = null) {
      if (this._isSliding)
        return;
      const i = this._getActive(), n = t === Be,
            s = e || Gt(this._getItems(), i, n, this._config.wrap);
      if (s === i)
        return;
      const o = this._getItemIndex(s), r = e => fe.trigger(this._element, e, {
        relatedTarget : s,
        direction : this._orderToDirection(t),
        from : this._getItemIndex(i),
        to : o
      });
      if (r(qe).defaultPrevented)
        return;
      if (!i || !s)
        return;
      const a = Boolean(this._interval);
      this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o),
                    this._activeElement = s;
      const l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c), qt(s), i.classList.add(l), s.classList.add(l),
          this._queueCallback(
              (() => {
                s.classList.remove(l, c),
                s.classList.add(Ze),
                i.classList.remove(Ze, c, l),
                this._isSliding = !1,
                r(Ve)
              }),
              i,
              this._isAnimated()),
          a && this.cycle()
    }
    _isAnimated() {
      return this._element.classList.contains("slide")
    }
    _getActive() {
      return we.findOne(ii, this._element)
    }
    _getItems() {
      return we.find(ei, this._element)
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null)
    }
    _directionToOrder(t) {
      return Kt() ? t === ze ? We : Be : t === ze ? Be : We
    }
    _orderToDirection(t) {
      return Kt() ? t === We ? ze : Re : t === We ? Re : ze
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = ri.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        } else
          e.to(t)
      }))
    }
  }
  fe.on(document, Ge, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
          const e = we.getElementFromSelector(this);
          if (!e || !e.classList.contains(Je))
            return;
          t.preventDefault();
          const i = ri.getOrCreateInstance(e),
                n = this.getAttribute("data-bs-slide-to");
          return n ? (i.to(n), void i._maybeEnableCycle())
              : "next" === _e.getDataAttribute(this, "slide")
              ? (i.next(), void i._maybeEnableCycle())
              : (i.prev(), void i._maybeEnableCycle())
        })),
      fe.on(window, Ue, (() => {
              const t = we.find('[data-bs-ride="carousel"]');
              for (const e of t)
                ri.getOrCreateInstance(e)
            })),
      Qt(ri);
  const ai = ".bs.collapse", li = `show${ai}`, ci = `shown${ai}`,
        hi = `hide${ai}`, di = `hidden${ai}`, ui = `click${ai}.data-api`,
        fi = "show", pi = "collapse", mi = "collapsing",
        gi = `:scope .${pi} .${pi}`, _i = '[data-bs-toggle="collapse"]',
        bi = {parent : null, toggle : !0},
        vi = {parent : "(null|element)", toggle : "boolean"};
  class yi extends ve {
    constructor(t, e) {
      super(t, e), this._isTransitioning = !1, this._triggerArray = [];
      const i = we.find(_i);
      for (const t of i) {
        const e = we.getSelectorFromElement(t),
              i = we.find(e).filter((t => t === this._element));
        null !== e && i.length && this._triggerArray.push(t)
      }
      this._initializeChildren(),
          this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle()
    }
    static get Default() {
      return bi
    }
    static get DefaultType() {
      return vi
    }
    static get NAME() {
      return "collapse"
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let t = [];
      if (this._config.parent &&
              (t = this._getFirstLevelChildren(
                           ".collapse.show, .collapse.collapsing")
                       .filter((t => t !== this._element))
                       .map((t => yi.getOrCreateInstance(t, {toggle : !1})))),
          t.length && t[0]._isTransitioning)
        return;
      if (fe.trigger(this._element, li).defaultPrevented)
        return;
      for (const e of t)
        e.hide();
      const e = this._getDimension();
      this._element.classList.remove(pi), this._element.classList.add(mi),
          this._element.style[e] = 0,
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          this._isTransitioning = !0;
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
          (() => {
            this._isTransitioning = !1,
            this._element.classList.remove(mi),
            this._element.classList.add(pi, fi),
            this._element.style[e] = "",
            fe.trigger(this._element, ci)
          }),
          this._element,
          !0),
          this._element.style[e] = `${this._element[i]}px`
    }
    hide() {
      if (this._isTransitioning || !this._isShown())
        return;
      if (fe.trigger(this._element, hi).defaultPrevented)
        return;
      const t = this._getDimension();
      this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
      qt(this._element), this._element.classList.add(mi),
      this._element.classList.remove(pi, fi);
      for (const t of this._triggerArray) {
        const e = we.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([ t ], !1)
      }
      this._isTransitioning = !0, this._element.style[t] = "",
      this._queueCallback(
          (() => {
            this._isTransitioning = !1,
            this._element.classList.remove(mi),
            this._element.classList.add(pi),
            fe.trigger(this._element, di)
          }),
          this._element,
          !0)
    }
    _isShown(t = this._element) {
      return t.classList.contains(fi)
    }
    _configAfterMerge(t) {
      return t.toggle = Boolean(t.toggle), t.parent = Ht(t.parent), t
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width"
                                                                     : "height"
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const t = this._getFirstLevelChildren(_i);
      for (const e of t) {
        const t = we.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([ e ], this._isShown(t))
      }
    }
    _getFirstLevelChildren(t) {
      const e = we.find(gi, this._config.parent);
      return we.find(t, this._config.parent).filter((t => !e.includes(t)))
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
              i.setAttribute("aria-expanded", e)
    }
    static jQueryInterface(t) {
      const e = {};
      return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
             this.each((function() {
               const i = yi.getOrCreateInstance(this, e);
               if ("string" == typeof t) {
                 if (void 0 === i[t])
                   throw new TypeError(`No method named "${t}"`);
                 i[t]()
               }
             }))
    }
  }
  fe.on(document, ui, _i, (function(t) {
          ("A" === t.target.tagName ||
           t.delegateTarget && "A" === t.delegateTarget.tagName) &&
              t.preventDefault();
          for (const t of we.getMultipleElementsFromSelector(this))
            yi.getOrCreateInstance(t, {toggle : !1}).toggle()
        })),
      Qt(yi);
  const wi = "dropdown", Ei = ".bs.dropdown", Ai = ".data-api", Ti = "ArrowUp",
        Ci = "ArrowDown", Oi = `hide${Ei}`, xi = `hidden${Ei}`,
        ki = `show${Ei}`, Li = `shown${Ei}`, Si = `click${Ei}${Ai}`,
        Di = `keydown${Ei}${Ai}`, $i = `keyup${Ei}${Ai}`, Ii = "show",
        Ni = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Pi = `${Ni}.${Ii}`, Mi = ".dropdown-menu",
        ji = Kt() ? "top-end" : "top-start",
        Fi = Kt() ? "top-start" : "top-end",
        Hi = Kt() ? "bottom-end" : "bottom-start",
        Bi = Kt() ? "bottom-start" : "bottom-end",
        Wi = Kt() ? "left-start" : "right-start",
        zi = Kt() ? "right-start" : "left-start", Ri = {
          autoClose : !0,
          boundary : "clippingParents",
          display : "dynamic",
          offset : [ 0, 2 ],
          popperConfig : null,
          reference : "toggle"
        },
        qi = {
          autoClose : "(boolean|string)",
          boundary : "(string|element)",
          display : "string",
          offset : "(array|string|function)",
          popperConfig : "(null|object|function)",
          reference : "(string|element|object)"
        };
  class Vi extends ve {
    constructor(t, e) {
      super(t, e), this._popper = null, this._parent = this._element.parentNode,
                   this._menu = we.next(this._element, Mi)[0] ||
          we.prev(this._element, Mi)[0] || we.findOne(Mi, this._parent),
                   this._inNavbar = this._detectNavbar()
    }
    static get Default() {
      return Ri
    }
    static get DefaultType() {
      return qi
    }
    static get NAME() {
      return wi
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (Wt(this._element) || this._isShown())
        return;
      const t = {relatedTarget : this._element};
      if (!fe.trigger(this._element, ki, t).defaultPrevented) {
        if (this._createPopper(),
            "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
          for (const t of [].concat(...document.body.children))
            fe.on(t, "mouseover", Rt);
        this._element.focus(), this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Ii), this._element.classList.add(Ii),
            fe.trigger(this._element, Li, t)
      }
    }
    hide() {
      if (Wt(this._element) || !this._isShown())
        return;
      const t = {relatedTarget : this._element};
      this._completeHide(t)
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
      this._inNavbar = this._detectNavbar(),
      this._popper && this._popper.update()
    }
    _completeHide(t) {
      if (!fe.trigger(this._element, Oi, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            fe.off(t, "mouseover", Rt);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Ii),
            this._element.classList.remove(Ii),
            this._element.setAttribute("aria-expanded", "false"),
            _e.removeDataAttribute(this._menu, "popper"),
            fe.trigger(this._element, xi, t)
      }
    }
    _getConfig(t) {
      if ("object" == typeof (t = super._getConfig(t)).reference &&
          !Ft(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
        throw new TypeError(`${
            wi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t
    }
    _createPopper() {
      if (void 0 === e)
        throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      "parent" === this._config.reference ? t = this._parent
          : Ft(this._config.reference)
          ? t = Ht(this._config.reference)
          : "object" == typeof this._config.reference &&
              (t = this._config.reference);
      const i = this._getPopperConfig();
      this._popper = Dt(t, this._menu, i)
    }
    _isShown() {
      return this._menu.classList.contains(Ii)
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend"))
        return Wi;
      if (t.classList.contains("dropstart"))
        return zi;
      if (t.classList.contains("dropup-center"))
        return "top";
      if (t.classList.contains("dropdown-center"))
        return "bottom";
      const e = "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? Fi : ji : e ? Bi : Hi
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }
    _getOffset() {
      const {offset : t} = this._config;
      return "string" == typeof t
          ? t.split(",").map((t => Number.parseInt(t, 10)))
          : "function" == typeof t ? e => t(e, this._element)
                                   : t
    }
    _getPopperConfig() {
      const t = {
        placement : this._getPlacement(),
        modifiers : [
          {
            name : "preventOverflow",
            options : {boundary : this._config.boundary}
          },
          {name : "offset", options : {offset : this._getOffset()}}
        ]
      };
      return (this._inNavbar || "static" === this._config.display) &&
                 (_e.setDataAttribute(this._menu, "popper", "static"),
                  t.modifiers = [ {name : "applyStyles", enabled : !1} ]),
      {
        ...t, ...Xt(this._config.popperConfig, [ t ])
      }
    }
    _selectMenuItem({key : t, target: e}) {
      const i =
          we.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu)
              .filter((t => Bt(t)));
      i.length && Gt(i, e, t === Ci, !i.includes(e)).focus()
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Vi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
    static clearMenus(t) {
      if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
        return;
      const e = we.find(Pi);
      for (const i of e) {
        const e = Vi.getInstance(i);
        if (!e || !1 === e._config.autoClose)
          continue;
        const n = t.composedPath(), s = n.includes(e._menu);
        if (n.includes(e._element) || "inside" === e._config.autoClose && !s ||
            "outside" === e._config.autoClose && s)
          continue;
        if (e._menu.contains(t.target) &&
            ("keyup" === t.type && "Tab" === t.key ||
             /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        const o = {relatedTarget : e._element};
        "click" === t.type && (o.clickEvent = t), e._completeHide(o)
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key, n = [ Ti, Ci ].includes(t.key);
      if (!n && !i)
        return;
      if (e && !i)
        return;
      t.preventDefault();
      const s = this.matches(Ni)
          ? this
          : we.prev(this, Ni)[0] || we.next(this, Ni)[0] ||
              we.findOne(Ni, t.delegateTarget.parentNode),
            o = Vi.getOrCreateInstance(s);
      if (n)
        return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
    }
  }
  fe.on(document, Di, Ni, Vi.dataApiKeydownHandler),
      fe.on(document, Di, Mi, Vi.dataApiKeydownHandler),
      fe.on(document, Si, Vi.clearMenus), fe.on(document, $i, Vi.clearMenus),
      fe.on(document, Si, Ni, (function(t) {
              t.preventDefault(), Vi.getOrCreateInstance(this).toggle()
            })),
      Qt(Vi);
  const Yi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Yi}`, Xi = {
    className : "modal-backdrop",
    clickCallback : null,
    isAnimated : !1,
    isVisible : !0,
    rootElement : "body"
  },
        Ui = {
          className : "string",
          clickCallback : "(function|null)",
          isAnimated : "boolean",
          isVisible : "boolean",
          rootElement : "(element|string)"
        };
  class Gi extends be {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isAppended = !1,
               this._element = null
    }
    static get Default() {
      return Xi
    }
    static get DefaultType() {
      return Ui
    }
    static get NAME() {
      return Yi
    }
    show(t) {
      if (!this._config.isVisible)
        return void Xt(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && qt(e), e.classList.add(Ki),
          this._emulateAnimation((() => {Xt(t)}))
    }
    hide(t) {
      this._config.isVisible
          ? (this._getElement().classList.remove(Ki),
             this._emulateAnimation((() => {this.dispose(), Xt(t)})))
          : Xt(t)
    }
    dispose() {
      this._isAppended &&
          (fe.off(this._element, Qi),
           this._element.remove(),
           this._isAppended = !1)
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className,
        this._config.isAnimated && t.classList.add("fade"), this._element = t
      }
      return this._element
    }
    _configAfterMerge(t) {
      return t.rootElement = Ht(t.rootElement), t
    }
    _append() {
      if (this._isAppended)
        return;
      const t = this._getElement();
      this._config.rootElement.append(t),
          fe.on(t, Qi, (() => {Xt(this._config.clickCallback)})),
          this._isAppended = !0
    }
    _emulateAnimation(t) {
      Ut(t, this._getElement(), this._config.isAnimated)
    }
  }
  const Ji = ".bs.focustrap", Zi = `focusin${Ji}`, tn = `keydown.tab${Ji}`,
        en = "backward", nn = {autofocus : !0, trapElement : null},
        sn = {autofocus : "boolean", trapElement : "element"};
  class on extends be {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isActive = !1,
               this._lastTabNavDirection = null
    }
    static get Default() {
      return nn
    }
    static get DefaultType() {
      return sn
    }
    static get NAME() {
      return "focustrap"
    }
    activate() {
      this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
           fe.off(document, Ji),
           fe.on(document, Zi, (t => this._handleFocusin(t))),
           fe.on(document, tn, (t => this._handleKeydown(t))),
           this._isActive = !0)
    }
    deactivate() {
      this._isActive && (this._isActive = !1, fe.off(document, Ji))
    }
    _handleFocusin(t) {
      const {trapElement : e} = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = we.focusableChildren(e);
      0 === i.length                         ? e.focus()
          : this._lastTabNavDirection === en ? i[i.length - 1].focus()
                                             : i[0].focus()
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
          (this._lastTabNavDirection = t.shiftKey ? en : "forward")
    }
  }
  const rn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        an = ".sticky-top", ln = "padding-right", cn = "margin-right";
  class hn {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t)
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
          this._setElementAttributes(this._element, ln, (e => e + t)),
          this._setElementAttributes(rn, ln, (e => e + t)),
          this._setElementAttributes(an, cn, (e => e - t))
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, ln),
          this._resetElementAttributes(rn, ln),
          this._resetElementAttributes(an, cn)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
          this._element.style.overflow = "hidden"
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(
          t, (t => {
            if (t !== this._element && window.innerWidth > t.clientWidth + n)
              return;
            this._saveInitialAttribute(t, e);
            const s = window.getComputedStyle(t).getPropertyValue(e);
            t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
          }))
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && _e.setDataAttribute(t, e, i)
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t => {
                                        const i = _e.getDataAttribute(t, e);
                                        null !== i
                                            ? (_e.removeDataAttribute(t, e),
                                               t.style.setProperty(e, i))
                                            : t.style.removeProperty(e)
                                      }))
    }
    _applyManipulationCallback(t, e) {
      if (Ft(t))
        e(t);
      else
        for (const i of we.find(t, this._element))
          e(i)
    }
  }
  const dn = ".bs.modal", un = `hide${dn}`, fn = `hidePrevented${dn}`,
        pn = `hidden${dn}`, mn = `show${dn}`, gn = `shown${dn}`,
        _n = `resize${dn}`, bn = `click.dismiss${dn}`,
        vn = `mousedown.dismiss${dn}`, yn = `keydown.dismiss${dn}`,
        wn = `click${dn}.data-api`, En = "modal-open", An = "show",
        Tn = "modal-static", Cn = {backdrop : !0, focus : !0, keyboard : !0},
        On = {
          backdrop : "(boolean|string)",
          focus : "boolean",
          keyboard : "boolean"
        };
  class xn extends ve {
    constructor(t, e) {
      super(t, e), this._dialog = we.findOne(".modal-dialog", this._element),
                   this._backdrop = this._initializeBackDrop(),
                   this._focustrap = this._initializeFocusTrap(),
                   this._isShown = !1, this._isTransitioning = !1,
                   this._scrollBar = new hn, this._addEventListeners()
    }
    static get Default() {
      return Cn
    }
    static get DefaultType() {
      return On
    }
    static get NAME() {
      return "modal"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown || this._isTransitioning ||
          fe.trigger(this._element, mn, {relatedTarget : t}).defaultPrevented ||
          (this._isShown = !0,
           this._isTransitioning = !0,
           this._scrollBar.hide(),
           document.body.classList.add(En),
           this._adjustDialog(),
           this._backdrop.show((() => this._showElement(t))))
    }
    hide() {
      this._isShown && !this._isTransitioning &&
          (fe.trigger(this._element, un).defaultPrevented ||
           (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(An),
            this._queueCallback(
                (() => this._hideModal()), this._element, this._isAnimated())))
    }
    dispose() {
      fe.off(window, dn), fe.off(this._dialog, dn), this._backdrop.dispose(),
          this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new Gi({
        isVisible : Boolean(this._config.backdrop),
        isAnimated : this._isAnimated()
      })
    }
    _initializeFocusTrap() {
      return new on({trapElement : this._element})
    }
    _showElement(t) {
      document.body.contains(this._element) ||
          document.body.append(this._element),
          this._element.style.display = "block",
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.scrollTop = 0;
      const e = we.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0), qt(this._element),
          this._element.classList.add(An),
          this._queueCallback(
              (() => {
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                fe.trigger(this._element, gn, {relatedTarget : t})
              }),
              this._dialog,
              this._isAnimated())
    }
    _addEventListeners() {
      fe.on(
          this._element,
          yn,
          (t => {
               "Escape" === t.key &&
               (this._config.keyboard ? this.hide()
                                      : this._triggerBackdropTransition())})),
          fe.on(
              window,
              _n,
              (() => {
                   this._isShown && !this._isTransitioning &&
                   this._adjustDialog()})),
          fe.on(
              this._element,
              vn,
              (t => {fe.one(
                   this._element,
                   bn,
                   (e => {
                        this._element === t.target &&
                        this._element === e.target &&
                        ("static" !== this._config.backdrop
                             ? this._config.backdrop && this.hide()
                             : this._triggerBackdropTransition())}))}))
    }
    _hideModal() {
      this._element.style.display = "none",
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"), this._isTransitioning = !1,
      this._backdrop.hide((() => {
        document.body.classList.remove(En),
        this._resetAdjustments(),
        this._scrollBar.reset(),
        fe.trigger(this._element, pn)
      }))
    }
    _isAnimated() {
      return this._element.classList.contains("fade")
    }
    _triggerBackdropTransition() {
      if (fe.trigger(this._element, fn).defaultPrevented)
        return;
      const t = this._element.scrollHeight >
          document.documentElement.clientHeight,
            e = this._element.style.overflowY;
      "hidden" === e || this._element.classList.contains(Tn) ||
          (t || (this._element.style.overflowY = "hidden"),
           this._element.classList.add(Tn),
           this._queueCallback(
               (() => {
                 this._element.classList.remove(Tn),
                 this._queueCallback(
                     (() => {this._element.style.overflowY = e}), this._dialog)
               }),
               this._dialog),
           this._element.focus())
    }
    _adjustDialog() {
      const t = this._element.scrollHeight >
          document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(), i = e > 0;
      if (i && !t) {
        const t = Kt() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`
      }
      if (!i && t) {
        const t = Kt() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "",
      this._element.style.paddingRight = ""
    }
    static jQueryInterface(t, e) {
      return this.each((function() {
        const i = xn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t])
            throw new TypeError(`No method named "${t}"`);
          i[t](e)
        }
      }))
    }
  }
  fe.on(document, wn, '[data-bs-toggle="modal"]', (function(t) {
          const e = we.getElementFromSelector(this);
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              fe.one(
                  e,
                  mn,
                  (t => {
                       t.defaultPrevented ||
                       fe.one(e, pn, (() => {Bt(this) && this.focus()}))}));
          const i = we.findOne(".modal.show");
          i && xn.getInstance(i).hide(), xn.getOrCreateInstance(e).toggle(this)
        })),
      Ee(xn), Qt(xn);
  const kn = ".bs.offcanvas", Ln = ".data-api", Sn = `load${kn}${Ln}`,
        Dn = "show", $n = "showing", In = "hiding", Nn = ".offcanvas.show",
        Pn = `show${kn}`, Mn = `shown${kn}`, jn = `hide${kn}`,
        Fn = `hidePrevented${kn}`, Hn = `hidden${kn}`, Bn = `resize${kn}`,
        Wn = `click${kn}${Ln}`, zn = `keydown.dismiss${kn}`,
        Rn = {backdrop : !0, keyboard : !0, scroll : !1}, qn = {
          backdrop : "(boolean|string)",
          keyboard : "boolean",
          scroll : "boolean"
        };
  class Vn extends ve {
    constructor(t, e) {
      super(t, e), this._isShown = !1,
                   this._backdrop = this._initializeBackDrop(),
                   this._focustrap = this._initializeFocusTrap(),
                   this._addEventListeners()
    }
    static get Default() {
      return Rn
    }
    static get DefaultType() {
      return qn
    }
    static get NAME() {
      return "offcanvas"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown ||
          fe.trigger(this._element, Pn, {relatedTarget : t}).defaultPrevented ||
          (this._isShown = !0,
           this._backdrop.show(),
           this._config.scroll || (new hn).hide(),
           this._element.setAttribute("aria-modal", !0),
           this._element.setAttribute("role", "dialog"),
           this._element.classList.add($n),
           this._queueCallback(
               (() => {
                 this._config.scroll && !this._config.backdrop ||
                     this._focustrap.activate(),
                 this._element.classList.add(Dn),
                 this._element.classList.remove($n),
                 fe.trigger(this._element, Mn, {relatedTarget : t})
               }),
               this._element,
               !0))
    }
    hide() {
      this._isShown &&
          (fe.trigger(this._element, jn).defaultPrevented ||
           (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(In),
            this._backdrop.hide(),
            this._queueCallback(
                (() => {
                  this._element.classList.remove(Dn, In),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || (new hn).reset(),
                  fe.trigger(this._element, Hn)
                }),
                this._element,
                !0)))
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new Gi({
        className : "offcanvas-backdrop",
        isVisible : t,
        isAnimated : !0,
        rootElement : this._element.parentNode,
        clickCallback : t
            ? () => {"static" !== this._config.backdrop ? this.hide() : fe.trigger(this._element, Fn)}
            : null
      })
    }
    _initializeFocusTrap() {
      return new on({trapElement : this._element})
    }
    _addEventListeners() {
      fe.on(
          this._element,
          zn,
          (t => {
               "Escape" === t.key &&
               (this._config.keyboard ? this.hide()
                                      : fe.trigger(this._element, Fn))}))
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Vn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }
  fe.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function(t) {
          const e = we.getElementFromSelector(this);
          if ([ "A", "AREA" ].includes(this.tagName) && t.preventDefault(),
              Wt(this))
            return;
          fe.one(e, Hn, (() => {Bt(this) && this.focus()}));
          const i = we.findOne(Nn);
          i && i !== e && Vn.getInstance(i).hide(),
              Vn.getOrCreateInstance(e).toggle(this)
        })),
      fe.on(window, Sn, (() => {
              for (const t of we.find(Nn))
                Vn.getOrCreateInstance(t).show()
            })),
      fe.on(window, Bn, (() => {
              for (const t of we.find(
                       "[aria-modal][class*=show][class*=offcanvas-]"))
                "fixed" !== getComputedStyle(t).position &&
                    Vn.getOrCreateInstance(t).hide()
            })),
      Ee(Vn), Qt(Vn);
  const Yn = {
    "*" : [ "class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i ],
    a : [ "target", "href", "title", "rel" ],
    area : [],
    b : [],
    br : [],
    col : [],
    code : [],
    div : [],
    em : [],
    hr : [],
    h1 : [],
    h2 : [],
    h3 : [],
    h4 : [],
    h5 : [],
    h6 : [],
    i : [],
    img : [ "src", "srcset", "alt", "title", "width", "height" ],
    li : [],
    ol : [],
    p : [],
    pre : [],
    s : [],
    small : [],
    span : [],
    sub : [],
    sup : [],
    strong : [],
    u : [],
    ul : []
  },
        Kn = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href"
        ]),
        Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Xn =
            (t, e) => {
              const i = t.nodeName.toLowerCase();
              return e.includes(i)
                  ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue))
                  : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
            },
        Un = {
          allowList : Yn,
          content : {},
          extraClass : "",
          html : !1,
          sanitize : !0,
          sanitizeFn : null,
          template : "<div></div>"
        },
        Gn = {
          allowList : "object",
          content : "object",
          extraClass : "(string|function)",
          html : "boolean",
          sanitize : "boolean",
          sanitizeFn : "(null|function)",
          template : "string"
        },
        Jn = {
          entry : "(string|element|function|null)",
          selector : "(string|element)"
        };
  class Zn extends be {
    constructor(t) {
      super(), this._config = this._getConfig(t)
    }
    static get Default() {
      return Un
    }
    static get DefaultType() {
      return Gn
    }
    static get NAME() {
      return "TemplateFactory"
    }
    getContent() {
      return Object.values(this._config.content)
          .map((t => this._resolvePossibleFunction(t)))
          .filter(Boolean)
    }
    hasContent() {
      return this.getContent().length > 0
    }
    changeContent(t) {
      return this._checkContent(t),
             this._config.content = {...this._config.content, ...t}, this
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content)
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({selector : e, entry : i}, Jn)
    }
    _setContent(t, e, i) {
      const n = we.findOne(i, t);
      n &&
          ((e = this._resolvePossibleFunction(e)) ? Ft(e)
                   ? this._putElementInTemplate(Ht(e), n)
                   : this._config.html ? n.innerHTML = this._maybeSanitize(e)
                                       : n.textContent = e
                                                  : n.remove())
    }
    _maybeSanitize(t) {
      return this._config.sanitize ? function(t, e, i) {
        if (!t.length)
          return t;
        if (i && "function" == typeof i)
          return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
        for (const t of s) {
          const i = t.nodeName.toLowerCase();
          if (!Object.keys(e).includes(i)) {
            t.remove();
            continue
          }
          const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
          for (const e of n)
            Xn(e, s) || t.removeAttribute(e.nodeName)
        }
        return n.body.innerHTML
      }(t, this._config.allowList, this._config.sanitizeFn) : t
    }
    _resolvePossibleFunction(t) {
      return Xt(t, [ this ])
    }
    _putElementInTemplate(t, e) {
      if (this._config.html)
        return e.innerHTML = "", void e.append(t);
      e.textContent = t.textContent
    }
  }
  const
      ts = new Set([ "sanitize", "allowList", "sanitizeFn" ]),
      es = "fade", is = "show", ns = ".modal", ss = "hide.bs.modal",
      os = "hover", rs = "focus", as = {
        AUTO : "auto",
        TOP : "top",
        RIGHT : Kt() ? "left" : "right",
        BOTTOM : "bottom",
        LEFT : Kt() ? "right" : "left"
      },
      ls = {
        allowList : Yn,
        animation : !0,
        boundary : "clippingParents",
        container : !1,
        customClass : "",
        delay : 0,
        fallbackPlacements : [ "top", "right", "bottom", "left" ],
        html : !1,
        offset : [ 0, 6 ],
        placement : "top",
        popperConfig : null,
        sanitize : !0,
        sanitizeFn : null,
        selector : !1,
        template :
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title : "",
        trigger : "hover focus"
      },
      cs = {
        allowList : "object",
        animation : "boolean",
        boundary : "(string|element)",
        container : "(string|element|boolean)",
        customClass : "(string|function)",
        delay : "(number|object)",
        fallbackPlacements : "array",
        html : "boolean",
        offset : "(array|string|function)",
        placement : "(string|function)",
        popperConfig : "(null|object|function)",
        sanitize : "boolean",
        sanitizeFn : "(null|function)",
        selector : "(string|boolean)",
        template : "string",
        title : "(string|element|function)",
        trigger : "string"
      };
  class hs extends ve {
    constructor(t, i) {
      if (void 0 === e)
        throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t, i), this._isEnabled = !0, this._timeout = 0,
                   this._isHovered = null, this._activeTrigger = {},
                   this._popper = null, this._templateFactory = null,
                   this._newContent = null, this.tip = null,
                   this._setListeners(),
                   this._config.selector || this._fixTitle()
    }
    static get Default() {
      return ls
    }
    static get DefaultType() {
      return cs
    }
    static get NAME() {
      return "tooltip"
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle() {
      this._isEnabled &&
          (this._activeTrigger.click = !this._activeTrigger.click,
           this._isShown() ? this._leave() : this._enter())
    }
    dispose() {
      clearTimeout(this._timeout),
          fe.off(this._element.closest(ns), ss, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
              "title", this._element.getAttribute("data-bs-original-title")),
          this._disposePopper(), super.dispose()
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled)
        return;
      const t = fe.trigger(this._element, this.constructor.eventName("show")),
            e = (zt(this._element) ||
                 this._element.ownerDocument.documentElement)
                    .contains(this._element);
      if (t.defaultPrevented || !e)
        return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const {container : n} = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (n.append(i),
               fe.trigger(
                   this._element, this.constructor.eventName("inserted"))),
          this._popper = this._createPopper(i),
          i.classList.add(is),
          "ontouchstart" in document.documentElement)
        for (const t of [].concat(...document.body.children))
          fe.on(t, "mouseover", Rt);
      this._queueCallback(
          (() => {
            fe.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            this._isHovered = !1
          }),
          this.tip,
          this._isAnimated())
    }
    hide() {
      if (this._isShown() &&
          !fe.trigger(this._element, this.constructor.eventName("hide"))
               .defaultPrevented) {
        if (this._getTipElement().classList.remove(is),
            "ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            fe.off(t, "mouseover", Rt);
        this._activeTrigger.click = !1, this._activeTrigger[rs] = !1,
        this._activeTrigger[os] = !1, this._isHovered = null,
        this._queueCallback(
            (() => {
                 this._isWithActiveTrigger() ||
                 (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  fe.trigger(
                      this._element, this.constructor.eventName("hidden")))}),
            this.tip,
            this._isAnimated())
      }
    }
    update() {
      this._popper && this._popper.update()
    }
    _isWithContent() {
      return Boolean(this._getTitle())
    }
    _getTipElement() {
      return this.tip ||
                 (this.tip = this._createTipElement(
                      this._newContent || this._getContentForTemplate())),
             this.tip
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e)
        return null;
      e.classList.remove(es, is),
          e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = (t => {
                  do {
                    t += Math.floor(1e6 * Math.random())
                  } while (document.getElementById(t));
                  return t
                })(this.constructor.NAME)
                    .toString();
      return e.setAttribute("id", i), this._isAnimated() && e.classList.add(es),
             e
    }
    setContent(t) {
      this._newContent = t,
      this._isShown() && (this._disposePopper(), this.show())
    }
    _getTemplateFactory(t) {
      return this._templateFactory
                 ? this._templateFactory.changeContent(t)
                 : this._templateFactory = new Zn({
                     ...this._config,
                     content : t,
                     extraClass :
                         this._resolvePossibleFunction(this._config.customClass)
                   }),
                   this._templateFactory
    }
    _getContentForTemplate() {
      return {
        ".tooltip-inner": this._getTitle()
      }
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
          t.delegateTarget, this._getDelegateConfig())
    }
    _isAnimated() {
      return this._config.animation ||
          this.tip && this.tip.classList.contains(es)
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(is)
    }
    _createPopper(t) {
      const e = Xt(this._config.placement, [ this, t, this._element ]),
            i = as [e.toUpperCase()];
      return Dt(this._element, t, this._getPopperConfig(i))
    }
    _getOffset() {
      const {offset : t} = this._config;
      return "string" == typeof t
          ? t.split(",").map((t => Number.parseInt(t, 10)))
          : "function" == typeof t ? e => t(e, this._element)
                                   : t
    }
    _resolvePossibleFunction(t) {
      return Xt(t, [ this._element ])
    }
    _getPopperConfig(t) {
      const e = {
        placement : t,
        modifiers : [
          {
            name : "flip",
            options : {fallbackPlacements : this._config.fallbackPlacements}
          },
          {name : "offset", options : {offset : this._getOffset()}},
          {
            name : "preventOverflow",
            options : {boundary : this._config.boundary}
          },
          {
            name : "arrow",
            options : {element : `.${this.constructor.NAME}-arrow`}
          },
          {
            name : "preSetPlacement",
            enabled : !0,
            phase : "beforeMain",
            fn : t => {
              this._getTipElement().setAttribute(
                  "data-popper-placement", t.state.placement)
            }
          }
        ]
      };
      return {
        ...e, ...Xt(this._config.popperConfig, [ e ])
      }
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          fe.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (t => {this._initializeOnDelegatedTarget(t).toggle()}));
        else if ("manual" !== e) {
          const t = e === os ? this.constructor.eventName("mouseenter")
                             : this.constructor.eventName("focusin"),
                i = e === os ? this.constructor.eventName("mouseleave")
                             : this.constructor.eventName("focusout");
          fe.on(this._element, t, this._config.selector, (t => {
                  const e = this._initializeOnDelegatedTarget(t);
                  e._activeTrigger["focusin" === t.type ? rs : os] = !0,
                                                               e._enter()
                })),
              fe.on(this._element, i, this._config.selector, (t => {
                      const e = this._initializeOnDelegatedTarget(t);
                      e._activeTrigger["focusout" === t.type ? rs : os] =
                          e._element.contains(t.relatedTarget),
                                                                    e._leave()
                    }))
        }
      this._hideModalHandler = () => { this._element && this.hide() },
      fe.on(this._element.closest(ns), ss, this._hideModalHandler)
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
          (this._element.getAttribute("aria-label") ||
               this._element.textContent.trim() ||
               this._element.setAttribute("aria-label", t),
           this._element.setAttribute("data-bs-original-title", t),
           this._element.removeAttribute("title"))
    }
    _enter() {
      this._isShown() || this._isHovered
          ? this._isHovered = !0
          : (this._isHovered = !0,
             this._setTimeout(
                 (() => {this._isHovered && this.show()}),
                 this._config.delay.show))
    }
    _leave() {
      this._isWithActiveTrigger() ||
          (this._isHovered = !1,
           this._setTimeout(
               (() => {this._isHovered || this.hide()}),
               this._config.delay.hide))
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(t) {
      const e = _e.getDataAttributes(this._element);
      for (const t of Object.keys(e))
        ts.has(t) && delete e[t];
      return t = {...e, ..."object" == typeof t && t ? t : {}},
             t = this._mergeConfigObj(t), t = this._configAfterMerge(t),
             this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
      return t.container = !1 === t.container ? document.body : Ht(t.container),
             "number" == typeof t.delay &&
                 (t.delay = {show : t.delay, hide : t.delay}),
             "number" == typeof t.title && (t.title = t.title.toString()),
             "number" == typeof t.content && (t.content = t.content.toString()),
             t
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return t.selector = !1, t.trigger = "manual", t
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null),
          this.tip && (this.tip.remove(), this.tip = null)
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = hs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  Qt(hs);
  const ds = {
    ...hs.Default,
    content : "",
    offset : [ 0, 8 ],
    placement : "right",
    template :
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger : "click"
  },
        us = {...hs.DefaultType, content : "(null|string|element|function)"};
  class fs extends hs {
    static get Default() {
      return ds
    }
    static get DefaultType() {
      return us
    }
    static get NAME() {
      return "popover"
    }
    _isWithContent() {
      return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(), ".popover-body": this._getContent()
      }
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = fs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  Qt(fs);
  const ps = ".bs.scrollspy", ms = `activate${ps}`, gs = `click${ps}`,
        _s = `load${ps}.data-api`, bs = "active", vs = "[href]",
        ys = ".nav-link", ws = `${ys}, .nav-item > ${ys}, .list-group-item`,
        Es = {
          offset : null,
          rootMargin : "0px 0px -25%",
          smoothScroll : !1,
          target : null,
          threshold : [ .1, .5, 1 ]
        },
        As = {
          offset : "(number|null)",
          rootMargin : "string",
          smoothScroll : "boolean",
          target : "element",
          threshold : "array"
        };
  class Ts extends ve {
    constructor(t, e) {
      super(t, e),
          this._targetLinks = new Map, this._observableSections = new Map,
          this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
          ? null
          : this._element,
          this._activeTarget = null, this._observer = null,
          this._previousScrollData = {visibleEntryTop : 0, parentScrollTop : 0},
          this.refresh()
    }
    static get Default() {
      return Es
    }
    static get DefaultType() {
      return As
    }
    static get NAME() {
      return "scrollspy"
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(),
          this._observer ? this._observer.disconnect()
                         : this._observer = this._getNewObserver();
      for (const t of this._observableSections.values())
        this._observer.observe(t)
    }
    dispose() {
      this._observer.disconnect(), super.dispose()
    }
    _configAfterMerge(t) {
      return t.target = Ht(t.target) || document.body,
             t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
             "string" == typeof t.threshold &&
                 (t.threshold =
                      t.threshold.split(",").map((t => Number.parseFloat(t)))),
             t
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
          (fe.off(this._config.target, gs),
           fe.on(this._config.target, gs, vs, (t => {
                   const e = this._observableSections.get(t.target.hash);
                   if (e) {
                     t.preventDefault();
                     const i = this._rootElement || window,
                           n = e.offsetTop - this._element.offsetTop;
                     if (i.scrollTo)
                       return void i.scrollTo({top : n, behavior : "smooth"});
                     i.scrollTop = n
                   }
                 })))
    }
    _getNewObserver() {
      const t = {
        root : this._rootElement,
        threshold : this._config.threshold,
        rootMargin : this._config.rootMargin
      };
      return new IntersectionObserver((t => this._observerCallback(t)), t)
    }
    _observerCallback(t) {
      const e = t => this._targetLinks.get(`#${t.target.id}`),
            i =
                t => {
                  this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                  this._process(e(t))
                },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e(o));
          continue
        }
        const t =
            o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if (i(o), !n)
            return
        } else
          s || t || i(o)
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map, this._observableSections = new Map;
      const t = we.find(vs, this._config.target);
      for (const e of t) {
        if (!e.hash || Wt(e))
          continue;
        const t = we.findOne(decodeURI(e.hash), this._element);
        Bt(t) &&
            (this._targetLinks.set(decodeURI(e.hash), e),
             this._observableSections.set(e.hash, t))
      }
    }
    _process(t) {
      this._activeTarget !== t &&
          (this._clearActiveClass(this._config.target),
           this._activeTarget = t,
           t.classList.add(bs),
           this._activateParents(t),
           fe.trigger(this._element, ms, {relatedTarget : t}))
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        we.findOne(".dropdown-toggle", t.closest(".dropdown"))
            .classList.add(bs);
      else
        for (const e of we.parents(t, ".nav, .list-group"))
          for (const t of we.prev(e, ws))
            t.classList.add(bs)
    }
    _clearActiveClass(t) {
      t.classList.remove(bs);
      const e = we.find(`${vs}.${bs}`, t);
      for (const t of e)
        t.classList.remove(bs)
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Ts.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  fe.on(window, _s, (() => {
          for (const t of we.find('[data-bs-spy="scroll"]'))
            Ts.getOrCreateInstance(t)
        })),
      Qt(Ts);
  const
      Cs = ".bs.tab",
      Os = `hide${Cs}`, xs = `hidden${Cs}`, ks = `show${Cs}`, Ls = `shown${Cs}`,
      Ss = `click${Cs}`, Ds = `keydown${Cs}`, $s = `load${Cs}`,
      Is = "ArrowLeft", Ns = "ArrowRight", Ps = "ArrowUp", Ms = "ArrowDown",
      js = "Home", Fs = "End", Hs = "active", Bs = "fade", Ws = "show",
      zs = ".dropdown-toggle", Rs = `:not(${zs})`,
      qs =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Vs = `.nav-link${Rs}, .list-group-item${Rs}, [role="tab"]${Rs}, ${qs}`,
      Ys = `.${Hs}[data-bs-toggle="tab"], .${Hs}[data-bs-toggle="pill"], .${
          Hs}[data-bs-toggle="list"]`;
  class Ks extends ve {
    constructor(t) {
      super(t),
          this._parent =
              this._element.closest('.list-group, .nav, [role="tablist"]'),
          this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
           fe.on(this._element, Ds, (t => this._keydown(t))))
    }
    static get NAME() {
      return "tab"
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t))
        return;
      const e = this._getActiveElem(),
            i = e ? fe.trigger(e, Os, {relatedTarget : t}) : null;
      fe.trigger(t, ks, {relatedTarget : e}).defaultPrevented ||
          i && i.defaultPrevented ||
          (this._deactivate(e, t), this._activate(t, e))
    }
    _activate(t, e) {
      t &&
          (t.classList.add(Hs),
           this._activate(we.getElementFromSelector(t)),
           this._queueCallback(
               (() => {
                    "tab" === t.getAttribute("role")
                        ? (t.removeAttribute("tabindex"),
                           t.setAttribute("aria-selected", !0),
                           this._toggleDropDown(t, !0),
                           fe.trigger(t, Ls, {relatedTarget : e}))
                        : t.classList.add(Ws)}),
               t,
               t.classList.contains(Bs)))
    }
    _deactivate(t, e) {
      t &&
          (t.classList.remove(Hs),
           t.blur(),
           this._deactivate(we.getElementFromSelector(t)),
           this._queueCallback(
               (() => {
                    "tab" === t.getAttribute("role")
                        ? (t.setAttribute("aria-selected", !1),
                           t.setAttribute("tabindex", "-1"),
                           this._toggleDropDown(t, !1),
                           fe.trigger(t, xs, {relatedTarget : e}))
                        : t.classList.remove(Ws)}),
               t,
               t.classList.contains(Bs)))
    }
    _keydown(t) {
      if (![Is, Ns, Ps, Ms, js, Fs].includes(t.key))
        return;
      t.stopPropagation(), t.preventDefault();
      const e = this._getChildren().filter((t => !Wt(t)));
      let i;
      if ([ js, Fs ].includes(t.key))
        i = e[t.key === js ? 0 : e.length - 1];
      else {
        const n = [ Ns, Ms ].includes(t.key);
        i = Gt(e, t.target, n, !0)
      }
      i && (i.focus({preventScroll : !0}), Ks.getOrCreateInstance(i).show())
    }
    _getChildren() {
      return we.find(Vs, this._parent)
    }
    _getActiveElem() {
      return this._getChildren().find((t => this._elemIsActive(t))) || null
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e)
        this._setInitialAttributesOnChild(t)
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t), i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
          i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
          e || t.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(t, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(t)
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = we.getElementFromSelector(t);
      e &&
          (this._setAttributeIfNotExists(e, "role", "tabpanel"),
           t.id &&
               this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown"))
        return;
      const n = (t, n) => {
        const s = we.findOne(t, i);
        s && s.classList.toggle(n, e)
      };
      n(zs, Hs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e)
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i)
    }
    _elemIsActive(t) {
      return t.classList.contains(Hs)
    }
    _getInnerElement(t) {
      return t.matches(Vs) ? t : we.findOne(Vs, t)
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Ks.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  fe.on(document, Ss, qs, (function(t) {
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              Wt(this) || Ks.getOrCreateInstance(this).show()
        })),
      fe.on(window, $s, (() => {
              for (const t of we.find(Ys))
                Ks.getOrCreateInstance(t)
            })),
      Qt(Ks);
  const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Us = `mouseout${Qs}`,
        Gs = `focusin${Qs}`, Js = `focusout${Qs}`, Zs = `hide${Qs}`,
        to = `hidden${Qs}`, eo = `show${Qs}`, io = `shown${Qs}`, no = "hide",
        so = "show", oo = "showing",
        ro = {animation : "boolean", autohide : "boolean", delay : "number"},
        ao = {animation : !0, autohide : !0, delay : 5e3};
  class lo extends ve {
    constructor(t, e) {
      super(t, e), this._timeout = null, this._hasMouseInteraction = !1,
                   this._hasKeyboardInteraction = !1, this._setListeners()
    }
    static get Default() {
      return ao
    }
    static get DefaultType() {
      return ro
    }
    static get NAME() {
      return "toast"
    }
    show() {
      fe.trigger(this._element, eo).defaultPrevented ||
          (this._clearTimeout(),
           this._config.animation && this._element.classList.add("fade"),
           this._element.classList.remove(no),
           qt(this._element),
           this._element.classList.add(so, oo),
           this._queueCallback(
               (() => {
                 this._element.classList.remove(oo),
                 fe.trigger(this._element, io),
                 this._maybeScheduleHide()
               }),
               this._element,
               this._config.animation))
    }
    hide() {
      this.isShown() &&
          (fe.trigger(this._element, Zs).defaultPrevented ||
           (this._element.classList.add(oo),
            this._queueCallback(
                (() => {
                  this._element.classList.add(no),
                  this._element.classList.remove(oo, so),
                  fe.trigger(this._element, to)
                }),
                this._element,
                this._config.animation)))
    }
    dispose() {
      this._clearTimeout(),
          this.isShown() && this._element.classList.remove(so), super.dispose()
    }
    isShown() {
      return this._element.classList.contains(so)
    }
    _maybeScheduleHide() {
      this._config.autohide &&
          (this._hasMouseInteraction || this._hasKeyboardInteraction ||
           (this._timeout =
                setTimeout((() => {this.hide()}), this._config.delay)))
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e
      }
      if (e)
        return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i || this._element.contains(i) ||
          this._maybeScheduleHide()
    }
    _setListeners() {
      fe.on(this._element, Xs, (t => this._onInteraction(t, !0))),
          fe.on(this._element, Us, (t => this._onInteraction(t, !1))),
          fe.on(this._element, Gs, (t => this._onInteraction(t, !0))),
          fe.on(this._element, Js, (t => this._onInteraction(t, !1)))
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = lo.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }
  function co(t) {
    "loading" != document.readyState
        ? t()
        : document.addEventListener("DOMContentLoaded", t)
  }
  Ee(lo), Qt(lo), co((function() {
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map((function(t) {
          return new hs(t, {delay : {show : 500, hide : 100}})
        }))
  })),
      co((function() {
        document.getElementById("pst-back-to-top")
            .addEventListener("click", (function() {
                                document.body.scrollTop = 0,
                                document.documentElement.scrollTop = 0
                              }))
      })),
      co((function() {
        var t = document.getElementById("pst-back-to-top"),
            e = document.getElementsByClassName("bd-header")[0]
                    .getBoundingClientRect();
        window.addEventListener("scroll", (function() {
                                  this.oldScroll > this.scrollY&& this.scrollY >
                                          e.bottom
                                      ? t.style.display = "block"
                                      : t.style.display = "none",
                                        this.oldScroll = this.scrollY
                                }))
      })),
      window.bootstrap = i
})();
//# sourceMappingURL=bootstrap.js.map