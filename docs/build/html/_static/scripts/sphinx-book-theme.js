!function(e) {
  var t = {};
  function n(r) {
    if (t[r])
      return t[r].exports;
    var o = t[r] = {i : r, l : !1, exports : {}};
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable : !0, get : r})
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value : "Module"}),
        Object.defineProperty(e, "__esModule", {value : !0})
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t)
      return e;
    if (4 & t && "object" == typeof e && e && e.__esModule)
      return e;
    var r = Object.create(null);
    if (n.r(r),
        Object.defineProperty(r, "default", {enumerable : !0, value : e}),
        2 & t && "string" != typeof e)
      for (var o in e)
        n.d(r, o, function(t) {
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
  }, n.p = "", n(n.s = 0)
}([
  function(e, t, n) {
    e.exports = n(1)
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    n.p;
    var r = e => {
      "loading" != document.readyState ? e()
          : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", e)
          : document.attachEvent("onreadystatechange", (function() {
                                   "complete" == document.readyState && e()
                                 }))
    };
    window.initThebeSBT =
        () => {
          var e = document.querySelector("section h1");
          e.nextElementSibling.classList.contains("thebe-launch-button") ||
              e.insertAdjacentHTML(
                  "afterend", "<button class='thebe-launch-button'></button>"),
              initThebe()
        },
    window.toggleFullScreen =
        () => {
          var e = document.fullscreenElement &&
                  null !== document.fullscreenElement ||
              document.webkitFullscreenElement &&
                  null !== document.webkitFullscreenElement;
          let t = document.documentElement;
          e ? (console.log("[SBT]: Exiting full screen"),
               document.exitFullscreen ? document.exitFullscreen()
                                       : document.webkitExitFullscreen &&
                       document.webkitExitFullscreen())
            : (console.log("[SBT]: Entering full screen"),
               t.requestFullscreen
                   ? t.requestFullscreen()
                   : t.webkitRequestFullscreen && t.webkitRequestFullscreen())
        },
    r(() => {
      var e = [];
      let t = new IntersectionObserver(
          (t, n) => {
            t.forEach(t => {
              if (t.isIntersecting)
                e.push(t.target);
              else
                for (let n = 0; n < e.length; n++)
                  if (e[n] === t.target) {
                    e.splice(n, 1);
                    break
                  }
            }),
            e.length > 0 ? document.querySelector("div.bd-sidebar-secondary")
                               .classList.add("hide")
                         : document.querySelector("div.bd-sidebar-secondary")
                               .classList.remove("hide")
          },
          {rootMargin : "0px 0px -33% 0px"});
      let n = [];
      ["marginnote",
       "sidenote",
       "margin",
       "margin-caption",
       "full-width",
       "sidebar",
       "popout"]
          .forEach(
              e => {n.push(
                  "." + e,
                  ".tag_" + e,
                  "." + e.replace("-", "_"),
                  ".tag_" + e.replace("-", "_"))}),
          document.querySelectorAll(n.join(", ")).forEach(e => {t.observe(e)}),
          new IntersectionObserver((e, t) => {
            e[0].boundingClientRect.y < 0
                ? document.body.classList.add("scrolled")
                : document.body.classList.remove("scrolled")
          }).observe(document.querySelector(".sbt-scroll-pixel-helper"))
    }),
    r((function() {
      var e = [
        ".bd-header-announcement",
        ".bd-header",
        ".bd-header-article",
        ".bd-sidebar-primary",
        ".bd-sidebar-secondary",
        ".bd-footer-article",
        ".bd-footer-content",
        ".bd-footer"
      ].join(",");
      document.querySelectorAll(e).forEach(e => {e.classList.add("noprint")})
    }))
  }
]);
//# sourceMappingURL=sphinx-book-theme.js.map