// ==UserScript==
// @name         WELearn网课助手
// @namespace    http://tampermonkey.net/
// @description  显示WE Learn随行课堂题目答案；支持班级测试；自动答题；刷时长；开放自定义参数
// @version      0.8.2
// @author       SSmJaE
// @license      GPL-3.0
// @compatible   Chrome
// @match        https://course.sflep.com/*
// @match        https://centercourseware.sflep.com/*
// @run-at       document-end
// @connect      localhost
// @connect      47.97.90.127
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @require      https://cdn.jsdelivr.net/npm/vue/dist/vue.js
// ==/UserScript==

!(function(e) {
    function t(t) {
        for (var n, o, a = t[0], i = t[1], s = 0, l = []; s < a.length; s++)
            (o = a[s]),
                Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]),
                (r[o] = 0);
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (c && c(t); l.length; ) l.shift()();
    }
    var n = {},
        r = { 0: 0 };
    function o(t) {
        if (n[t]) return n[t].exports;
        var r = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    (o.e = function() {
        return Promise.resolve();
    }),
        (o.m = e),
        (o.c = n),
        (o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (o.r = function(e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function(e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (o.r(n),
                Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
            )
                for (var r in e)
                    o.d(
                        n,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r),
                    );
            return n;
        }),
        (o.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return o.d(t, "a", t), t;
        }),
        (o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = ""),
        (o.oe = function(e) {
            throw (console.error(e), e);
        });
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        i = a.push.bind(a);
    (a.push = t), (a = a.slice());
    for (var s = 0; s < a.length; s++) t(a[s]);
    var c = i;
    o((o.s = 32));
})([
    function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a;
        }),
            n.d(t, "a", function() {
                return r;
            }),
            n.d(t, "b", function() {
                return o;
            }),
            n.d(t, "e", function() {
                return i;
            }),
            n.d(t, "d", function() {
                return s;
            });
        var r,
            o,
            a = { messages: [], USER_SETTINGS: {}, collapse: !0, showExamQueryButton: !1 };
        (r = "http://47.97.90.127/api/welearn"), (o = !1);
        var i = "0.8.2",
            s = 3e3;
    },
    function(e, t, n) {
        e.exports = n(20);
    },
    function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return s;
        }),
            n.d(t, "a", function() {
                return c;
            }),
            n.d(t, "b", function() {
                return u;
            }),
            n.d(t, "c", function() {
                return A;
            });
        var r = n(1),
            o = n.n(r),
            a = n(3),
            i = n(0);
        function s(e) {
            return new Promise(function(t) {
                return setTimeout(t, e);
            });
        }
        function c(e) {
            return l.apply(this, arguments);
        }
        function l() {
            return (l = Object(a.a)(
                o.a.mark(function e(t) {
                    var n,
                        r = arguments;
                    return o.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (
                                        "hr" ===
                                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : "normal")
                                    ) {
                                        e.next = 4;
                                        break;
                                    }
                                    if (null !== t && "" !== t) {
                                        e.next = 4;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (
                                        (i.c.messages.push({ info: String(t), type: n }),
                                        !i.c.USER_SETTINGS.autoSlide)
                                    ) {
                                        e.next = 9;
                                        break;
                                    }
                                    return (e.next = 8), s(10);
                                case 8:
                                    document.querySelector("#container-messages").scrollBy(0, 1e3);
                                case 9:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            )).apply(this, arguments);
        }
        function u(e, t) {
            function n(e, t) {
                return parseInt(window.getComputedStyle(e)[t]);
            }
            var r,
                o,
                a,
                i,
                s = !1,
                c = n(t, "left"),
                l = n(t, "top"),
                u = window.innerWidth,
                A = window.innerHeight;
            e.addEventListener(
                "mousedown",
                function(c) {
                    (e.style.cursor = "grabbing"),
                        (s = !0),
                        (r = c.clientX),
                        (o = c.clientY),
                        (a = n(t, "width")),
                        (i = n(t, "height"));
                },
                !1,
            ),
                document.addEventListener("mousemove", function(e) {
                    if (!0 === s) {
                        var n = e.clientX,
                            d = e.clientY,
                            f = c + (n - r),
                            p = l + (d - o);
                        f <= 0 && (f = 0),
                            p <= 0 && (p = 0),
                            f >= u - a && (f = u - a),
                            p >= A - i && (p = A - i),
                            (t.style.left = f + "px"),
                            (t.style.top = p + "px");
                    }
                }),
                e.addEventListener(
                    "mouseup",
                    function() {
                        (e.style.cursor = "grab"), (s = !1), (c = n(t, "left")), (l = n(t, "top"));
                    },
                    !1,
                ),
                document.body.addEventListener(
                    "keydown",
                    function(r) {
                        "Escape" === r.key &&
                            ((e.style.cursor = "grab"),
                            (s = !1),
                            (c = n(t, "left")),
                            (l = n(t, "top")));
                    },
                    !1,
                );
        }
        function A() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "请求异常，稍后再试";
            return function(t, n, r) {
                var o = r.value;
                return (
                    (r.value = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                        var a = o.apply(this, n);
                        return (
                            a.catch(function(t) {
                                c("".concat(e), "error");
                            }),
                            a
                        );
                    }),
                    r
                );
            };
        }
    },
    function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise(function(o, a) {
                    var i = e.apply(t, n);
                    function s(e) {
                        r(i, o, a, s, c, "next", e);
                    }
                    function c(e) {
                        r(i, o, a, s, c, "throw", e);
                    }
                    s(void 0);
                });
            };
        }
        n.d(t, "a", function() {
            return o;
        });
    },
    function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return (
                (t.toString = function() {
                    return this.map(function(t) {
                        var n = (function(e, t) {
                            var n = e[1] || "",
                                r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var o =
                                        ((i = r),
                                        (s = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                                        (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                            s,
                                        )),
                                        "/*# ".concat(c, " */")),
                                    a = r.sources.map(function(e) {
                                        return "/*# sourceURL="
                                            .concat(r.sourceRoot || "")
                                            .concat(e, " */");
                                    });
                                return [n]
                                    .concat(a)
                                    .concat([o])
                                    .join("\n");
                            }
                            var i, s, c;
                            return [n].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                    }).join("");
                }),
                (t.i = function(e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r)
                        for (var a = 0; a < this.length; a++) {
                            var i = this[a][0];
                            null != i && (o[i] = !0);
                        }
                    for (var s = 0; s < e.length; s++) {
                        var c = [].concat(e[s]);
                        (r && o[c[0]]) ||
                            (n && (c[2] ? (c[2] = "".concat(n, " and ").concat(c[2])) : (c[2] = n)),
                            t.push(c));
                    }
                }),
                t
            );
        };
    },
    function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i;
        });
        var r = n(14),
            o = n(0);
        function a(e) {
            return e.startsWith("/") ? o.a + e : e;
        }
        function i(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { method: "GET", headers: {}, body: "" },
                n = "object" === Object(r.a)(t.body) ? JSON.stringify(t.body) : t.body;
            return new Promise(function(r, o) {
                GM_xmlhttpRequest({
                    url: a(e),
                    method: t.method,
                    headers: t.headers,
                    data: n,
                    timeout: 5e3,
                    responseType: "json",
                    onload: function(e) {
                        var t = e.status;
                        t >= 200 && t <= 300 ? r(e) : o(e);
                    },
                    onabort: function(e) {
                        return o(e);
                    },
                    onerror: function(e) {
                        return o(e);
                    },
                    ontimeout: function(e) {
                        return o(e);
                    },
                });
            });
        }
    },
    function(e, t, n) {
        (e.exports = (function() {
            "use strict";
            function e(t) {
                return (e =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  "function" == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          })(t);
            }
            function t(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            }
            function r(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
            }
            function o() {
                return (o =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function a(e) {
                return (a = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function i(e, t) {
                return (i =
                    Object.setPrototypeOf ||
                    function(e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function s() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    );
                } catch (e) {
                    return !1;
                }
            }
            function c(e, t, n) {
                return (c = s()
                    ? Reflect.construct
                    : function(e, t, n) {
                          var r = [null];
                          r.push.apply(r, t);
                          var o = new (Function.bind.apply(e, r))();
                          return n && i(o, n.prototype), o;
                      }).apply(null, arguments);
            }
            function l(e, t) {
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? (function(e) {
                          if (void 0 === e)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called",
                              );
                          return e;
                      })(e)
                    : t;
            }
            function u(e, t, n) {
                return (u =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function(e, t, n) {
                              var r = (function(e, t) {
                                  for (
                                      ;
                                      !Object.prototype.hasOwnProperty.call(e, t) &&
                                      null !== (e = a(e));

                                  );
                                  return e;
                              })(e, t);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, t);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(e, t, n || e);
            }
            var A = function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t];
                    });
                },
                d = function(e) {
                    return Array.prototype.slice.call(e);
                },
                f = function(e) {
                    console.warn("".concat("SweetAlert2:", " ").concat(e));
                },
                p = function(e) {
                    console.error("".concat("SweetAlert2:", " ").concat(e));
                },
                g = [],
                m = function(e, t) {
                    var n;
                    (n = '"'
                        .concat(
                            e,
                            '" is deprecated and will be removed in the next major release. Please use "',
                        )
                        .concat(t, '" instead.')),
                        -1 === g.indexOf(n) && (g.push(n), f(n));
                },
                w = function(e) {
                    return "function" == typeof e ? e() : e;
                },
                h = function(e) {
                    return e && "function" == typeof e.toPromise;
                },
                y = function(e) {
                    return h(e) ? e.toPromise() : Promise.resolve(e);
                },
                M = function(e) {
                    return e && Promise.resolve(e) === e;
                },
                b = Object.freeze({
                    cancel: "cancel",
                    backdrop: "backdrop",
                    close: "close",
                    esc: "esc",
                    timer: "timer",
                }),
                v = function(t) {
                    return (
                        t instanceof Element ||
                        (function(t) {
                            return "object" === e(t) && t.jquery;
                        })(t)
                    );
                },
                N = function(e) {
                    var t = {};
                    for (var n in e) t[e[n]] = "swal2-" + e[n];
                    return t;
                },
                x = N([
                    "container",
                    "shown",
                    "height-auto",
                    "iosfix",
                    "popup",
                    "modal",
                    "no-backdrop",
                    "no-transition",
                    "toast",
                    "toast-shown",
                    "toast-column",
                    "show",
                    "hide",
                    "close",
                    "title",
                    "header",
                    "content",
                    "html-container",
                    "actions",
                    "confirm",
                    "deny",
                    "cancel",
                    "footer",
                    "icon",
                    "icon-content",
                    "image",
                    "input",
                    "file",
                    "range",
                    "select",
                    "radio",
                    "checkbox",
                    "label",
                    "textarea",
                    "inputerror",
                    "validation-message",
                    "progress-steps",
                    "active-progress-step",
                    "progress-step",
                    "progress-step-line",
                    "loader",
                    "loading",
                    "styled",
                    "top",
                    "top-start",
                    "top-end",
                    "top-left",
                    "top-right",
                    "center",
                    "center-start",
                    "center-end",
                    "center-left",
                    "center-right",
                    "bottom",
                    "bottom-start",
                    "bottom-end",
                    "bottom-left",
                    "bottom-right",
                    "grow-row",
                    "grow-column",
                    "grow-fullscreen",
                    "rtl",
                    "timer-progress-bar",
                    "timer-progress-bar-container",
                    "scrollbar-measure",
                    "icon-success",
                    "icon-warning",
                    "icon-info",
                    "icon-question",
                    "icon-error",
                ]),
                T = N(["success", "warning", "info", "question", "error"]),
                E = function() {
                    return document.body.querySelector(".".concat(x.container));
                },
                j = function(e) {
                    var t = E();
                    return t ? t.querySelector(e) : null;
                },
                D = function(e) {
                    return j(".".concat(e));
                },
                I = function() {
                    return D(x.popup);
                },
                k = function() {
                    var e = I();
                    return d(e.querySelectorAll(".".concat(x.icon)));
                },
                C = function() {
                    var e = k().filter(function(e) {
                        return Ae(e);
                    });
                    return e.length ? e[0] : null;
                },
                O = function() {
                    return D(x.title);
                },
                L = function() {
                    return D(x.content);
                },
                S = function() {
                    return D(x.image);
                },
                z = function() {
                    return D(x["progress-steps"]);
                },
                B = function() {
                    return D(x["validation-message"]);
                },
                _ = function() {
                    return j(".".concat(x.actions, " .").concat(x.confirm));
                },
                Q = function() {
                    return j(".".concat(x.actions, " .").concat(x.deny));
                },
                U = function() {
                    return j(".".concat(x.loader));
                },
                Y = function() {
                    return j(".".concat(x.actions, " .").concat(x.cancel));
                },
                P = function() {
                    return D(x.actions);
                },
                G = function() {
                    return D(x.header);
                },
                R = function() {
                    return D(x.footer);
                },
                q = function() {
                    return D(x["timer-progress-bar"]);
                },
                F = function() {
                    return D(x.close);
                },
                H = function() {
                    var e = d(
                            I().querySelectorAll(
                                '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
                            ),
                        ).sort(function(e, t) {
                            return (e = parseInt(e.getAttribute("tabindex"))) >
                                (t = parseInt(t.getAttribute("tabindex")))
                                ? 1
                                : e < t
                                ? -1
                                : 0;
                        }),
                        t = d(
                            I().querySelectorAll(
                                '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                            ),
                        ).filter(function(e) {
                            return "-1" !== e.getAttribute("tabindex");
                        });
                    return (function(e) {
                        for (var t = [], n = 0; n < e.length; n++)
                            -1 === t.indexOf(e[n]) && t.push(e[n]);
                        return t;
                    })(e.concat(t)).filter(function(e) {
                        return Ae(e);
                    });
                },
                W = function() {
                    return !J() && !document.body.classList.contains(x["no-backdrop"]);
                },
                J = function() {
                    return document.body.classList.contains(x["toast-shown"]);
                },
                Z = function() {
                    return I().hasAttribute("data-loading");
                },
                V = { previousBodyPadding: null },
                K = function(e, t) {
                    if (((e.textContent = ""), t)) {
                        var n = new DOMParser().parseFromString(t, "text/html");
                        d(n.querySelector("head").childNodes).forEach(function(t) {
                            e.appendChild(t);
                        }),
                            d(n.querySelector("body").childNodes).forEach(function(t) {
                                e.appendChild(t);
                            });
                    }
                },
                X = function(e, t) {
                    if (!t) return !1;
                    for (var n = t.split(/\s+/), r = 0; r < n.length; r++)
                        if (!e.classList.contains(n[r])) return !1;
                    return !0;
                },
                $ = function(t, n, r) {
                    if (
                        ((function(e, t) {
                            d(e.classList).forEach(function(n) {
                                -1 === A(x).indexOf(n) &&
                                    -1 === A(T).indexOf(n) &&
                                    -1 === A(t.showClass).indexOf(n) &&
                                    e.classList.remove(n);
                            });
                        })(t, n),
                        n.customClass && n.customClass[r])
                    ) {
                        if ("string" != typeof n.customClass[r] && !n.customClass[r].forEach)
                            return f(
                                "Invalid type of customClass."
                                    .concat(r, '! Expected string or iterable object, got "')
                                    .concat(e(n.customClass[r]), '"'),
                            );
                        oe(t, n.customClass[r]);
                    }
                };
            function ee(e, t) {
                if (!t) return null;
                switch (t) {
                    case "select":
                    case "textarea":
                    case "file":
                        return ie(e, x[t]);
                    case "checkbox":
                        return e.querySelector(".".concat(x.checkbox, " input"));
                    case "radio":
                        return (
                            e.querySelector(".".concat(x.radio, " input:checked")) ||
                            e.querySelector(".".concat(x.radio, " input:first-child"))
                        );
                    case "range":
                        return e.querySelector(".".concat(x.range, " input"));
                    default:
                        return ie(e, x.input);
                }
            }
            var te,
                ne = function(e) {
                    if ((e.focus(), "file" !== e.type)) {
                        var t = e.value;
                        (e.value = ""), (e.value = t);
                    }
                },
                re = function(e, t, n) {
                    e &&
                        t &&
                        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                        t.forEach(function(t) {
                            e.forEach
                                ? e.forEach(function(e) {
                                      n ? e.classList.add(t) : e.classList.remove(t);
                                  })
                                : n
                                ? e.classList.add(t)
                                : e.classList.remove(t);
                        }));
                },
                oe = function(e, t) {
                    re(e, t, !0);
                },
                ae = function(e, t) {
                    re(e, t, !1);
                },
                ie = function(e, t) {
                    for (var n = 0; n < e.childNodes.length; n++)
                        if (X(e.childNodes[n], t)) return e.childNodes[n];
                },
                se = function(e, t, n) {
                    n || 0 === parseInt(n)
                        ? (e.style[t] = "number" == typeof n ? "".concat(n, "px") : n)
                        : e.style.removeProperty(t);
                },
                ce = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
                    (e.style.opacity = ""), (e.style.display = t);
                },
                le = function(e) {
                    (e.style.opacity = ""), (e.style.display = "none");
                },
                ue = function(e, t, n) {
                    t ? ce(e, n) : le(e);
                },
                Ae = function(e) {
                    return !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length));
                },
                de = function(e) {
                    return !!(e.scrollHeight > e.clientHeight);
                },
                fe = function(e) {
                    var t = window.getComputedStyle(e),
                        n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                        r = parseFloat(t.getPropertyValue("transition-duration") || "0");
                    return n > 0 || r > 0;
                },
                pe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = q();
                    Ae(n) &&
                        (t && ((n.style.transition = "none"), (n.style.width = "100%")),
                        setTimeout(function() {
                            (n.style.transition = "width ".concat(e / 1e3, "s linear")),
                                (n.style.width = "0%");
                        }, 10));
                },
                ge = function() {
                    return "undefined" == typeof window || "undefined" == typeof document;
                },
                me = '\n <div aria-labelledby="'
                    .concat(x.title, '" aria-describedby="')
                    .concat(x.content, '" class="')
                    .concat(x.popup, '" tabindex="-1">\n   <div class="')
                    .concat(x.header, '">\n     <ul class="')
                    .concat(x["progress-steps"], '"></ul>\n     <div class="')
                    .concat(x.icon, " ")
                    .concat(T.error, '"></div>\n     <div class="')
                    .concat(x.icon, " ")
                    .concat(T.question, '"></div>\n     <div class="')
                    .concat(x.icon, " ")
                    .concat(T.warning, '"></div>\n     <div class="')
                    .concat(x.icon, " ")
                    .concat(T.info, '"></div>\n     <div class="')
                    .concat(x.icon, " ")
                    .concat(T.success, '"></div>\n     <img class="')
                    .concat(x.image, '" />\n     <h2 class="')
                    .concat(x.title, '" id="')
                    .concat(x.title, '"></h2>\n     <button type="button" class="')
                    .concat(x.close, '"></button>\n   </div>\n   <div class="')
                    .concat(x.content, '">\n     <div id="')
                    .concat(x.content, '" class="')
                    .concat(x["html-container"], '"></div>\n     <input class="')
                    .concat(x.input, '" />\n     <input type="file" class="')
                    .concat(x.file, '" />\n     <div class="')
                    .concat(
                        x.range,
                        '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="',
                    )
                    .concat(x.select, '"></select>\n     <div class="')
                    .concat(x.radio, '"></div>\n     <label for="')
                    .concat(x.checkbox, '" class="')
                    .concat(
                        x.checkbox,
                        '">\n       <input type="checkbox" />\n       <span class="',
                    )
                    .concat(x.label, '"></span>\n     </label>\n     <textarea class="')
                    .concat(x.textarea, '"></textarea>\n     <div class="')
                    .concat(x["validation-message"], '" id="')
                    .concat(x["validation-message"], '"></div>\n   </div>\n   <div class="')
                    .concat(x.actions, '">\n     <div class="')
                    .concat(x.loader, '"></div>\n     <button type="button" class="')
                    .concat(x.confirm, '"></button>\n     <button type="button" class="')
                    .concat(x.deny, '"></button>\n     <button type="button" class="')
                    .concat(x.cancel, '"></button>\n   </div>\n   <div class="')
                    .concat(x.footer, '"></div>\n   <div class="')
                    .concat(x["timer-progress-bar-container"], '">\n     <div class="')
                    .concat(x["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
                    .replace(/(^|\n)\s*/g, ""),
                we = function(e) {
                    gn.isVisible() && te !== e.target.value && gn.resetValidationMessage(),
                        (te = e.target.value);
                },
                he = function(e) {
                    var t,
                        n =
                            !!(t = E()) &&
                            (t.parentNode.removeChild(t),
                            ae(
                                [document.documentElement, document.body],
                                [x["no-backdrop"], x["toast-shown"], x["has-column"]],
                            ),
                            !0);
                    if (ge()) p("SweetAlert2 requires document to initialize");
                    else {
                        var r = document.createElement("div");
                        (r.className = x.container), n && oe(r, x["no-transition"]), K(r, me);
                        var o,
                            a,
                            i,
                            s,
                            c,
                            l,
                            u,
                            A,
                            d,
                            f = "string" == typeof (o = e.target) ? document.querySelector(o) : o;
                        f.appendChild(r),
                            (function(e) {
                                var t = I();
                                t.setAttribute("role", e.toast ? "alert" : "dialog"),
                                    t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
                                    e.toast || t.setAttribute("aria-modal", "true");
                            })(e),
                            (function(e) {
                                "rtl" === window.getComputedStyle(e).direction && oe(E(), x.rtl);
                            })(f),
                            (a = L()),
                            (i = ie(a, x.input)),
                            (s = ie(a, x.file)),
                            (c = a.querySelector(".".concat(x.range, " input"))),
                            (l = a.querySelector(".".concat(x.range, " output"))),
                            (u = ie(a, x.select)),
                            (A = a.querySelector(".".concat(x.checkbox, " input"))),
                            (d = ie(a, x.textarea)),
                            (i.oninput = we),
                            (s.onchange = we),
                            (u.onchange = we),
                            (A.onchange = we),
                            (d.oninput = we),
                            (c.oninput = function(e) {
                                we(e), (l.value = c.value);
                            }),
                            (c.onchange = function(e) {
                                we(e), (c.nextSibling.value = c.value);
                            });
                    }
                },
                ye = function(t, n) {
                    t instanceof HTMLElement
                        ? n.appendChild(t)
                        : "object" === e(t)
                        ? Me(t, n)
                        : t && K(n, t);
                },
                Me = function(e, t) {
                    e.jquery ? be(t, e) : K(t, e.toString());
                },
                be = function(e, t) {
                    if (((e.textContent = ""), 0 in t))
                        for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
                    else e.appendChild(t.cloneNode(!0));
                },
                ve = (function() {
                    if (ge()) return !1;
                    var e = document.createElement("div"),
                        t = {
                            WebkitAnimation: "webkitAnimationEnd",
                            OAnimation: "oAnimationEnd oanimationend",
                            animation: "animationend",
                        };
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n])
                            return t[n];
                    return !1;
                })(),
                Ne = function(e, t) {
                    var n = P(),
                        r = U(),
                        o = _(),
                        a = Q(),
                        i = Y();
                    t.showConfirmButton || t.showDenyButton || t.showCancelButton || le(n),
                        $(n, t, "actions"),
                        xe(o, "confirm", t),
                        xe(a, "deny", t),
                        xe(i, "cancel", t),
                        (r.innerHTML = t.loaderHtml),
                        t.buttonsStyling
                            ? (function(e, t, n, r) {
                                  if (
                                      (oe([e, t, n], x.styled),
                                      r.confirmButtonColor &&
                                          (e.style.backgroundColor = r.confirmButtonColor),
                                      r.denyButtonColor &&
                                          (t.style.backgroundColor = r.denyButtonColor),
                                      r.cancelButtonColor &&
                                          (n.style.backgroundColor = r.cancelButtonColor),
                                      !Z())
                                  ) {
                                      var o = window
                                          .getComputedStyle(e)
                                          .getPropertyValue("background-color");
                                      (e.style.borderLeftColor = o), (e.style.borderRightColor = o);
                                  }
                              })(o, a, i, t)
                            : ae([o, a, i], x.styled),
                        t.reverseButtons &&
                            (n.insertBefore(i, r), n.insertBefore(a, r), n.insertBefore(o, r));
                };
            function xe(e, t, n) {
                var r;
                ue(
                    e,
                    n["show".concat(((r = t), r.charAt(0).toUpperCase() + r.slice(1)), "Button")],
                    "inline-block",
                ),
                    K(e, n["".concat(t, "ButtonText")]),
                    e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]),
                    (e.className = x[t]),
                    $(e, n, "".concat(t, "Button")),
                    oe(e, n["".concat(t, "ButtonClass")]);
            }
            var Te = function(e, t) {
                    var n = E();
                    if (n) {
                        !(function(e, t) {
                            "string" == typeof t
                                ? (e.style.background = t)
                                : t ||
                                  oe([document.documentElement, document.body], x["no-backdrop"]);
                        })(n, t.backdrop),
                            !t.backdrop &&
                                t.allowOutsideClick &&
                                f(
                                    '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
                                ),
                            (function(e, t) {
                                t in x
                                    ? oe(e, x[t])
                                    : (f(
                                          'The "position" parameter is not valid, defaulting to "center"',
                                      ),
                                      oe(e, x.center));
                            })(n, t.position),
                            (function(e, t) {
                                if (t && "string" == typeof t) {
                                    var n = "grow-".concat(t);
                                    n in x && oe(e, x[n]);
                                }
                            })(n, t.grow),
                            $(n, t, "container");
                        var r = document.body.getAttribute("data-swal2-queue-step");
                        r &&
                            (n.setAttribute("data-queue-step", r),
                            document.body.removeAttribute("data-swal2-queue-step"));
                    }
                },
                Ee = {
                    promise: new WeakMap(),
                    innerParams: new WeakMap(),
                    domCache: new WeakMap(),
                },
                je = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
                De = function(e) {
                    if (!Le[e.input])
                        return p(
                            'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                                e.input,
                                '"',
                            ),
                        );
                    var t = Oe(e.input),
                        n = Le[e.input](t, e);
                    ce(n),
                        setTimeout(function() {
                            ne(n);
                        });
                },
                Ie = function(e, t) {
                    var n = ee(L(), e);
                    if (n)
                        for (var r in ((function(e) {
                            for (var t = 0; t < e.attributes.length; t++) {
                                var n = e.attributes[t].name;
                                -1 === ["type", "value", "style"].indexOf(n) &&
                                    e.removeAttribute(n);
                            }
                        })(n),
                        t))
                            ("range" === e && "placeholder" === r) || n.setAttribute(r, t[r]);
                },
                ke = function(e) {
                    var t = Oe(e.input);
                    e.customClass && oe(t, e.customClass.input);
                },
                Ce = function(e, t) {
                    (e.placeholder && !t.inputPlaceholder) || (e.placeholder = t.inputPlaceholder);
                },
                Oe = function(e) {
                    var t = x[e] ? x[e] : x.input;
                    return ie(L(), t);
                },
                Le = {};
            (Le.text = Le.email = Le.password = Le.number = Le.tel = Le.url = function(t, n) {
                return (
                    "string" == typeof n.inputValue || "number" == typeof n.inputValue
                        ? (t.value = n.inputValue)
                        : M(n.inputValue) ||
                          f(
                              'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                                  e(n.inputValue),
                                  '"',
                              ),
                          ),
                    Ce(t, n),
                    (t.type = n.input),
                    t
                );
            }),
                (Le.file = function(e, t) {
                    return Ce(e, t), e;
                }),
                (Le.range = function(e, t) {
                    var n = e.querySelector("input"),
                        r = e.querySelector("output");
                    return (
                        (n.value = t.inputValue), (n.type = t.input), (r.value = t.inputValue), e
                    );
                }),
                (Le.select = function(e, t) {
                    if (((e.textContent = ""), t.inputPlaceholder)) {
                        var n = document.createElement("option");
                        K(n, t.inputPlaceholder),
                            (n.value = ""),
                            (n.disabled = !0),
                            (n.selected = !0),
                            e.appendChild(n);
                    }
                    return e;
                }),
                (Le.radio = function(e) {
                    return (e.textContent = ""), e;
                }),
                (Le.checkbox = function(e, t) {
                    var n = ee(L(), "checkbox");
                    (n.value = 1), (n.id = x.checkbox), (n.checked = Boolean(t.inputValue));
                    var r = e.querySelector("span");
                    return K(r, t.inputPlaceholder), e;
                }),
                (Le.textarea = function(e, t) {
                    if (((e.value = t.inputValue), Ce(e, t), "MutationObserver" in window)) {
                        var n = parseInt(window.getComputedStyle(I()).width),
                            r =
                                parseInt(window.getComputedStyle(I()).paddingLeft) +
                                parseInt(window.getComputedStyle(I()).paddingRight);
                        new MutationObserver(function() {
                            var t = e.offsetWidth + r;
                            I().style.width = t > n ? "".concat(t, "px") : null;
                        }).observe(e, { attributes: !0, attributeFilter: ["style"] });
                    }
                    return e;
                });
            var Se = function(e, t) {
                    var n = L().querySelector("#".concat(x.content));
                    t.html
                        ? (ye(t.html, n), ce(n, "block"))
                        : t.text
                        ? ((n.textContent = t.text), ce(n, "block"))
                        : le(n),
                        (function(e, t) {
                            var n = L(),
                                r = Ee.innerParams.get(e),
                                o = !r || t.input !== r.input;
                            je.forEach(function(e) {
                                var r = x[e],
                                    a = ie(n, r);
                                Ie(e, t.inputAttributes), (a.className = r), o && le(a);
                            }),
                                t.input && (o && De(t), ke(t));
                        })(e, t),
                        $(L(), t, "content");
                },
                ze = function() {
                    for (var e = k(), t = 0; t < e.length; t++) le(e[t]);
                },
                Be = function() {
                    for (
                        var e = I(),
                            t = window.getComputedStyle(e).getPropertyValue("background-color"),
                            n = e.querySelectorAll(
                                "[class^=swal2-success-circular-line], .swal2-success-fix",
                            ),
                            r = 0;
                        r < n.length;
                        r++
                    )
                        n[r].style.backgroundColor = t;
                },
                _e = function(e, t) {
                    (e.textContent = ""),
                        t.iconHtml
                            ? K(e, Qe(t.iconHtml))
                            : "success" === t.icon
                            ? K(
                                  e,
                                  '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ',
                              )
                            : "error" === t.icon
                            ? K(
                                  e,
                                  '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ',
                              )
                            : K(e, Qe({ question: "?", warning: "!", info: "i" }[t.icon]));
                },
                Qe = function(e) {
                    return '<div class="'.concat(x["icon-content"], '">').concat(e, "</div>");
                },
                Ue = [],
                Ye = function() {
                    return E() && E().getAttribute("data-queue-step");
                },
                Pe = function(e, t) {
                    var n = z();
                    if (!t.progressSteps || 0 === t.progressSteps.length) return le(n);
                    ce(n), (n.textContent = "");
                    var r = parseInt(
                        void 0 === t.currentProgressStep ? Ye() : t.currentProgressStep,
                    );
                    r >= t.progressSteps.length &&
                        f(
                            "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
                        ),
                        t.progressSteps.forEach(function(e, o) {
                            var a = (function(e) {
                                var t = document.createElement("li");
                                return oe(t, x["progress-step"]), K(t, e), t;
                            })(e);
                            if (
                                (n.appendChild(a),
                                o === r && oe(a, x["active-progress-step"]),
                                o !== t.progressSteps.length - 1)
                            ) {
                                var i = (function(e) {
                                    var t = document.createElement("li");
                                    return (
                                        oe(t, x["progress-step-line"]),
                                        e.progressStepsDistance &&
                                            (t.style.width = e.progressStepsDistance),
                                        t
                                    );
                                })(t);
                                n.appendChild(i);
                            }
                        });
                },
                Ge = function(e, t) {
                    var n = G();
                    $(n, t, "header"),
                        Pe(0, t),
                        (function(e, t) {
                            var n = Ee.innerParams.get(e);
                            if (n && t.icon === n.icon && C()) $(C(), t, "icon");
                            else if ((ze(), t.icon))
                                if (-1 !== Object.keys(T).indexOf(t.icon)) {
                                    var r = j(".".concat(x.icon, ".").concat(T[t.icon]));
                                    ce(r), _e(r, t), Be(), $(r, t, "icon"), oe(r, t.showClass.icon);
                                } else
                                    p(
                                        'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                                            t.icon,
                                            '"',
                                        ),
                                    );
                        })(e, t),
                        (function(e, t) {
                            var n = S();
                            if (!t.imageUrl) return le(n);
                            ce(n, ""),
                                n.setAttribute("src", t.imageUrl),
                                n.setAttribute("alt", t.imageAlt),
                                se(n, "width", t.imageWidth),
                                se(n, "height", t.imageHeight),
                                (n.className = x.image),
                                $(n, t, "image");
                        })(0, t),
                        (function(e, t) {
                            var n = O();
                            ue(n, t.title || t.titleText),
                                t.title && ye(t.title, n),
                                t.titleText && (n.innerText = t.titleText),
                                $(n, t, "title");
                        })(0, t),
                        (function(e, t) {
                            var n = F();
                            K(n, t.closeButtonHtml),
                                $(n, t, "closeButton"),
                                ue(n, t.showCloseButton),
                                n.setAttribute("aria-label", t.closeButtonAriaLabel);
                        })(0, t);
                },
                Re = function(e, t) {
                    (e.className = "".concat(x.popup, " ").concat(Ae(e) ? t.showClass.popup : "")),
                        t.toast
                            ? (oe([document.documentElement, document.body], x["toast-shown"]),
                              oe(e, x.toast))
                            : oe(e, x.modal),
                        $(e, t, "popup"),
                        "string" == typeof t.customClass && oe(e, t.customClass),
                        t.icon && oe(e, x["icon-".concat(t.icon)]);
                },
                qe = function(e, t) {
                    !(function(e, t) {
                        var n = I();
                        se(n, "width", t.width),
                            se(n, "padding", t.padding),
                            t.background && (n.style.background = t.background),
                            Re(n, t);
                    })(0, t),
                        Te(0, t),
                        Ge(e, t),
                        Se(e, t),
                        Ne(0, t),
                        (function(e, t) {
                            var n = R();
                            ue(n, t.footer), t.footer && ye(t.footer, n), $(n, t, "footer");
                        })(0, t),
                        "function" == typeof t.onRender && t.onRender(I());
                },
                Fe = function() {
                    return _() && _().click();
                },
                He = function() {
                    var e = I();
                    e || gn.fire(), (e = I());
                    var t = P(),
                        n = _(),
                        r = U();
                    ce(t),
                        le(n),
                        oe([e, t], x.loading),
                        ce(r),
                        e.setAttribute("data-loading", !0),
                        e.setAttribute("aria-busy", !0),
                        e.focus();
                },
                We = {},
                Je = function() {
                    return new Promise(function(e) {
                        var t = window.scrollX,
                            n = window.scrollY;
                        (We.restoreFocusTimeout = setTimeout(function() {
                            We.previousActiveElement && We.previousActiveElement.focus
                                ? (We.previousActiveElement.focus(),
                                  (We.previousActiveElement = null))
                                : document.body && document.body.focus(),
                                e();
                        }, 100)),
                            void 0 !== t && void 0 !== n && window.scrollTo(t, n);
                    });
                },
                Ze = function() {
                    if (We.timeout)
                        return (
                            (function() {
                                var e = q(),
                                    t = parseInt(window.getComputedStyle(e).width);
                                e.style.removeProperty("transition"), (e.style.width = "100%");
                                var n = parseInt(window.getComputedStyle(e).width),
                                    r = parseInt((t / n) * 100);
                                e.style.removeProperty("transition"),
                                    (e.style.width = "".concat(r, "%"));
                            })(),
                            We.timeout.stop()
                        );
                },
                Ve = function() {
                    if (We.timeout) {
                        var e = We.timeout.start();
                        return pe(e), e;
                    }
                },
                Ke = {
                    title: "",
                    titleText: "",
                    text: "",
                    html: "",
                    footer: "",
                    icon: void 0,
                    iconHtml: void 0,
                    toast: !1,
                    animation: !0,
                    showClass: {
                        popup: "swal2-show",
                        backdrop: "swal2-backdrop-show",
                        icon: "swal2-icon-show",
                    },
                    hideClass: {
                        popup: "swal2-hide",
                        backdrop: "swal2-backdrop-hide",
                        icon: "swal2-icon-hide",
                    },
                    customClass: void 0,
                    target: "body",
                    backdrop: !0,
                    heightAuto: !0,
                    allowOutsideClick: !0,
                    allowEscapeKey: !0,
                    allowEnterKey: !0,
                    stopKeydownPropagation: !0,
                    keydownListenerCapture: !1,
                    showConfirmButton: !0,
                    showDenyButton: !1,
                    showCancelButton: !1,
                    preConfirm: void 0,
                    confirmButtonText: "OK",
                    confirmButtonAriaLabel: "",
                    confirmButtonColor: void 0,
                    denyButtonText: "No",
                    denyButtonAriaLabel: "",
                    denyButtonColor: void 0,
                    cancelButtonText: "Cancel",
                    cancelButtonAriaLabel: "",
                    cancelButtonColor: void 0,
                    buttonsStyling: !0,
                    reverseButtons: !1,
                    focusConfirm: !0,
                    focusDeny: !1,
                    focusCancel: !1,
                    showCloseButton: !1,
                    closeButtonHtml: "&times;",
                    closeButtonAriaLabel: "Close this dialog",
                    loaderHtml: "",
                    showLoaderOnConfirm: !1,
                    imageUrl: void 0,
                    imageWidth: void 0,
                    imageHeight: void 0,
                    imageAlt: "",
                    timer: void 0,
                    timerProgressBar: !1,
                    width: void 0,
                    padding: void 0,
                    background: void 0,
                    input: void 0,
                    inputPlaceholder: "",
                    inputValue: "",
                    inputOptions: {},
                    inputAutoTrim: !0,
                    inputAttributes: {},
                    inputValidator: void 0,
                    validationMessage: void 0,
                    grow: !1,
                    position: "center",
                    progressSteps: [],
                    currentProgressStep: void 0,
                    progressStepsDistance: void 0,
                    onBeforeOpen: void 0,
                    onOpen: void 0,
                    onRender: void 0,
                    onClose: void 0,
                    onAfterClose: void 0,
                    onDestroy: void 0,
                    scrollbarPadding: !0,
                },
                Xe = [
                    "allowEscapeKey",
                    "allowOutsideClick",
                    "buttonsStyling",
                    "cancelButtonAriaLabel",
                    "cancelButtonColor",
                    "cancelButtonText",
                    "closeButtonAriaLabel",
                    "closeButtonHtml",
                    "confirmButtonAriaLabel",
                    "confirmButtonColor",
                    "confirmButtonText",
                    "currentProgressStep",
                    "customClass",
                    "denyButtonAriaLabel",
                    "denyButtonColor",
                    "denyButtonText",
                    "footer",
                    "hideClass",
                    "html",
                    "icon",
                    "imageAlt",
                    "imageHeight",
                    "imageUrl",
                    "imageWidth",
                    "onAfterClose",
                    "onClose",
                    "onDestroy",
                    "progressSteps",
                    "reverseButtons",
                    "showCancelButton",
                    "showCloseButton",
                    "showConfirmButton",
                    "showDenyButton",
                    "text",
                    "title",
                    "titleText",
                ],
                $e = { animation: 'showClass" and "hideClass' },
                et = [
                    "allowOutsideClick",
                    "allowEnterKey",
                    "backdrop",
                    "focusConfirm",
                    "focusDeny",
                    "focusCancel",
                    "heightAuto",
                    "keydownListenerCapture",
                ],
                tt = function(e) {
                    return Object.prototype.hasOwnProperty.call(Ke, e);
                },
                nt = function(e) {
                    return $e[e];
                },
                rt = function(e) {
                    tt(e) || f('Unknown parameter "'.concat(e, '"'));
                },
                ot = function(e) {
                    -1 !== et.indexOf(e) &&
                        f('The parameter "'.concat(e, '" is incompatible with toasts'));
                },
                at = function(e) {
                    nt(e) && m(e, nt(e));
                },
                it = Object.freeze({
                    isValidParameter: tt,
                    isUpdatableParameter: function(e) {
                        return -1 !== Xe.indexOf(e);
                    },
                    isDeprecatedParameter: nt,
                    argsToParams: function(t) {
                        var n = {};
                        return (
                            "object" !== e(t[0]) || v(t[0])
                                ? ["title", "html", "icon"].forEach(function(r, o) {
                                      var a = t[o];
                                      "string" == typeof a || v(a)
                                          ? (n[r] = a)
                                          : void 0 !== a &&
                                            p(
                                                "Unexpected type of "
                                                    .concat(
                                                        r,
                                                        '! Expected "string" or "Element", got ',
                                                    )
                                                    .concat(e(a)),
                                            );
                                  })
                                : o(n, t[0]),
                            n
                        );
                    },
                    isVisible: function() {
                        return Ae(I());
                    },
                    clickConfirm: Fe,
                    clickDeny: function() {
                        return Q() && Q().click();
                    },
                    clickCancel: function() {
                        return Y() && Y().click();
                    },
                    getContainer: E,
                    getPopup: I,
                    getTitle: O,
                    getContent: L,
                    getHtmlContainer: function() {
                        return D(x["html-container"]);
                    },
                    getImage: S,
                    getIcon: C,
                    getIcons: k,
                    getCloseButton: F,
                    getActions: P,
                    getConfirmButton: _,
                    getDenyButton: Q,
                    getCancelButton: Y,
                    getHeader: G,
                    getFooter: R,
                    getTimerProgressBar: q,
                    getFocusableElements: H,
                    getValidationMessage: B,
                    isLoading: Z,
                    fire: function() {
                        for (
                            var e = this, t = arguments.length, n = new Array(t), r = 0;
                            r < t;
                            r++
                        )
                            n[r] = arguments[r];
                        return c(e, n);
                    },
                    mixin: function(e) {
                        return (function(n) {
                            !(function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function",
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, writable: !0, configurable: !0 },
                                })),
                                    t && i(e, t);
                            })(f, n);
                            var c,
                                A,
                                d =
                                    ((c = f),
                                    (A = s()),
                                    function() {
                                        var e,
                                            t = a(c);
                                        if (A) {
                                            var n = a(this).constructor;
                                            e = Reflect.construct(t, arguments, n);
                                        } else e = t.apply(this, arguments);
                                        return l(this, e);
                                    });
                            function f() {
                                return t(this, f), d.apply(this, arguments);
                            }
                            return (
                                r(f, [
                                    {
                                        key: "_main",
                                        value: function(t) {
                                            return u(a(f.prototype), "_main", this).call(
                                                this,
                                                o({}, e, t),
                                            );
                                        },
                                    },
                                ]),
                                f
                            );
                        })(this);
                    },
                    queue: function(e) {
                        var t = this;
                        Ue = e;
                        var n = function(e, t) {
                                (Ue = []), e(t);
                            },
                            r = [];
                        return new Promise(function(e) {
                            !(function o(a, i) {
                                a < Ue.length
                                    ? (document.body.setAttribute("data-swal2-queue-step", a),
                                      t.fire(Ue[a]).then(function(t) {
                                          void 0 !== t.value
                                              ? (r.push(t.value), o(a + 1, i))
                                              : n(e, { dismiss: t.dismiss });
                                      }))
                                    : n(e, { value: r });
                            })(0);
                        });
                    },
                    getQueueStep: Ye,
                    insertQueueStep: function(e, t) {
                        return t && t < Ue.length ? Ue.splice(t, 0, e) : Ue.push(e);
                    },
                    deleteQueueStep: function(e) {
                        void 0 !== Ue[e] && Ue.splice(e, 1);
                    },
                    showLoading: He,
                    enableLoading: He,
                    getTimerLeft: function() {
                        return We.timeout && We.timeout.getTimerLeft();
                    },
                    stopTimer: Ze,
                    resumeTimer: Ve,
                    toggleTimer: function() {
                        var e = We.timeout;
                        return e && (e.running ? Ze() : Ve());
                    },
                    increaseTimer: function(e) {
                        if (We.timeout) {
                            var t = We.timeout.increase(e);
                            return pe(t, !0), t;
                        }
                    },
                    isTimerRunning: function() {
                        return We.timeout && We.timeout.isRunning();
                    },
                });
            function st() {
                var e = Ee.innerParams.get(this);
                if (e) {
                    var t = Ee.domCache.get(this);
                    le(t.loader),
                        e.showConfirmButton
                            ? ce(t.confirmButton)
                            : e.showConfirmButton || e.showCancelButton || le(t.actions),
                        ae([t.popup, t.actions], x.loading),
                        t.popup.removeAttribute("aria-busy"),
                        t.popup.removeAttribute("data-loading"),
                        (t.confirmButton.disabled = !1),
                        (t.denyButton.disabled = !1),
                        (t.cancelButton.disabled = !1);
                }
            }
            var ct = function() {
                    null === V.previousBodyPadding &&
                        document.body.scrollHeight > window.innerHeight &&
                        ((V.previousBodyPadding = parseInt(
                            window
                                .getComputedStyle(document.body)
                                .getPropertyValue("padding-right"),
                        )),
                        (document.body.style.paddingRight = "".concat(
                            V.previousBodyPadding +
                                (function() {
                                    var e = document.createElement("div");
                                    (e.className = x["scrollbar-measure"]),
                                        document.body.appendChild(e);
                                    var t = e.getBoundingClientRect().width - e.clientWidth;
                                    return document.body.removeChild(e), t;
                                })(),
                            "px",
                        )));
                },
                lt = function() {
                    navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) ||
                        (I().scrollHeight > window.innerHeight - 44 &&
                            (E().style.paddingBottom = "".concat(44, "px")));
                },
                ut = function() {
                    var e,
                        t = E();
                    (t.ontouchstart = function(t) {
                        e = At(t.target);
                    }),
                        (t.ontouchmove = function(t) {
                            e && (t.preventDefault(), t.stopPropagation());
                        });
                },
                At = function(e) {
                    var t = E();
                    return (
                        e === t || !(de(t) || "INPUT" === e.tagName || (de(L()) && L().contains(e)))
                    );
                },
                dt = function() {
                    return !!window.MSInputMethodContext && !!document.documentMode;
                },
                ft = function() {
                    var e = E(),
                        t = I();
                    e.style.removeProperty("align-items"),
                        t.offsetTop < 0 && (e.style.alignItems = "flex-start");
                },
                pt = { swalPromiseResolve: new WeakMap() };
            function gt(e, t, n, r) {
                n
                    ? Mt(e, r)
                    : (Je().then(function() {
                          return Mt(e, r);
                      }),
                      We.keydownTarget.removeEventListener("keydown", We.keydownHandler, {
                          capture: We.keydownListenerCapture,
                      }),
                      (We.keydownHandlerAdded = !1)),
                    t.parentNode &&
                        !document.body.getAttribute("data-swal2-queue-step") &&
                        t.parentNode.removeChild(t),
                    W() &&
                        (null !== V.previousBodyPadding &&
                            ((document.body.style.paddingRight = "".concat(
                                V.previousBodyPadding,
                                "px",
                            )),
                            (V.previousBodyPadding = null)),
                        (function() {
                            if (X(document.body, x.iosfix)) {
                                var e = parseInt(document.body.style.top, 10);
                                ae(document.body, x.iosfix),
                                    (document.body.style.top = ""),
                                    (document.body.scrollTop = -1 * e);
                            }
                        })(),
                        "undefined" != typeof window &&
                            dt() &&
                            window.removeEventListener("resize", ft),
                        d(document.body.children).forEach(function(e) {
                            e.hasAttribute("data-previous-aria-hidden")
                                ? (e.setAttribute(
                                      "aria-hidden",
                                      e.getAttribute("data-previous-aria-hidden"),
                                  ),
                                  e.removeAttribute("data-previous-aria-hidden"))
                                : e.removeAttribute("aria-hidden");
                        })),
                    ae(
                        [document.documentElement, document.body],
                        [
                            x.shown,
                            x["height-auto"],
                            x["no-backdrop"],
                            x["toast-shown"],
                            x["toast-column"],
                        ],
                    );
            }
            function mt(e) {
                var t = I();
                if (t) {
                    e = wt(e);
                    var n = Ee.innerParams.get(this);
                    if (n && !X(t, n.hideClass.popup)) {
                        var r = pt.swalPromiseResolve.get(this);
                        ae(t, n.showClass.popup), oe(t, n.hideClass.popup);
                        var o = E();
                        ae(o, n.showClass.backdrop),
                            oe(o, n.hideClass.backdrop),
                            ht(this, t, n),
                            r(e);
                    }
                }
            }
            var wt = function(e) {
                    return void 0 === e
                        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                        : o({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e);
                },
                ht = function(e, t, n) {
                    var r = E(),
                        o = ve && fe(t),
                        a = n.onClose,
                        i = n.onAfterClose;
                    null !== a && "function" == typeof a && a(t),
                        o ? yt(e, t, r, i) : gt(e, r, J(), i);
                },
                yt = function(e, t, n, r) {
                    (We.swalCloseEventFinishedCallback = gt.bind(null, e, n, J(), r)),
                        t.addEventListener(ve, function(e) {
                            e.target === t &&
                                (We.swalCloseEventFinishedCallback(),
                                delete We.swalCloseEventFinishedCallback);
                        });
                },
                Mt = function(e, t) {
                    setTimeout(function() {
                        "function" == typeof t && t(), e._destroy();
                    });
                };
            function bt(e, t, n) {
                var r = Ee.domCache.get(e);
                t.forEach(function(e) {
                    r[e].disabled = n;
                });
            }
            function vt(e, t) {
                if (!e) return !1;
                if ("radio" === e.type)
                    for (
                        var n = e.parentNode.parentNode.querySelectorAll("input"), r = 0;
                        r < n.length;
                        r++
                    )
                        n[r].disabled = t;
                else e.disabled = t;
            }
            var Nt = (function() {
                    function e(n, r) {
                        t(this, e),
                            (this.callback = n),
                            (this.remaining = r),
                            (this.running = !1),
                            this.start();
                    }
                    return (
                        r(e, [
                            {
                                key: "start",
                                value: function() {
                                    return (
                                        this.running ||
                                            ((this.running = !0),
                                            (this.started = new Date()),
                                            (this.id = setTimeout(this.callback, this.remaining))),
                                        this.remaining
                                    );
                                },
                            },
                            {
                                key: "stop",
                                value: function() {
                                    return (
                                        this.running &&
                                            ((this.running = !1),
                                            clearTimeout(this.id),
                                            (this.remaining -= new Date() - this.started)),
                                        this.remaining
                                    );
                                },
                            },
                            {
                                key: "increase",
                                value: function(e) {
                                    var t = this.running;
                                    return (
                                        t && this.stop(),
                                        (this.remaining += e),
                                        t && this.start(),
                                        this.remaining
                                    );
                                },
                            },
                            {
                                key: "getTimerLeft",
                                value: function() {
                                    return (
                                        this.running && (this.stop(), this.start()), this.remaining
                                    );
                                },
                            },
                            {
                                key: "isRunning",
                                value: function() {
                                    return this.running;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                xt = {
                    email: function(e, t) {
                        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)
                            ? Promise.resolve()
                            : Promise.resolve(t || "Invalid email address");
                    },
                    url: function(e, t) {
                        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                            e,
                        )
                            ? Promise.resolve()
                            : Promise.resolve(t || "Invalid URL");
                    },
                };
            function Tt(e) {
                !(function(e) {
                    e.inputValidator ||
                        Object.keys(xt).forEach(function(t) {
                            e.input === t && (e.inputValidator = xt[t]);
                        });
                })(e),
                    e.showLoaderOnConfirm &&
                        !e.preConfirm &&
                        f(
                            "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request",
                        ),
                    (e.animation = w(e.animation)),
                    (function(e) {
                        (!e.target ||
                            ("string" == typeof e.target && !document.querySelector(e.target)) ||
                            ("string" != typeof e.target && !e.target.appendChild)) &&
                            (f('Target parameter is not valid, defaulting to "body"'),
                            (e.target = "body"));
                    })(e),
                    "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")),
                    he(e);
            }
            var Et = function(e) {
                var t = E(),
                    n = I();
                "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n);
                var r = window.getComputedStyle(document.body).overflowY;
                Ct(t, n, e),
                    It(t, n),
                    W() &&
                        (kt(t, e.scrollbarPadding, r),
                        d(document.body.children).forEach(function(e) {
                            e === E() ||
                                (function(e, t) {
                                    if ("function" == typeof e.contains) return e.contains(t);
                                })(e, E()) ||
                                (e.hasAttribute("aria-hidden") &&
                                    e.setAttribute(
                                        "data-previous-aria-hidden",
                                        e.getAttribute("aria-hidden"),
                                    ),
                                e.setAttribute("aria-hidden", "true"));
                        })),
                    J() ||
                        We.previousActiveElement ||
                        (We.previousActiveElement = document.activeElement),
                    "function" == typeof e.onOpen &&
                        setTimeout(function() {
                            return e.onOpen(n);
                        }),
                    ae(t, x["no-transition"]);
            };
            function jt(e) {
                var t = I();
                if (e.target === t) {
                    var n = E();
                    t.removeEventListener(ve, jt), (n.style.overflowY = "auto");
                }
            }
            var Dt,
                It = function(e, t) {
                    ve && fe(t)
                        ? ((e.style.overflowY = "hidden"), t.addEventListener(ve, jt))
                        : (e.style.overflowY = "auto");
                },
                kt = function(e, t, n) {
                    !(function() {
                        if (
                            ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
                                ("MacIntel" === navigator.platform &&
                                    navigator.maxTouchPoints > 1)) &&
                            !X(document.body, x.iosfix)
                        ) {
                            var e = document.body.scrollTop;
                            (document.body.style.top = "".concat(-1 * e, "px")),
                                oe(document.body, x.iosfix),
                                ut(),
                                lt();
                        }
                    })(),
                        "undefined" != typeof window &&
                            dt() &&
                            (ft(), window.addEventListener("resize", ft)),
                        t && "hidden" !== n && ct(),
                        setTimeout(function() {
                            e.scrollTop = 0;
                        });
                },
                Ct = function(e, t, n) {
                    oe(e, n.showClass.backdrop),
                        ce(t),
                        oe(t, n.showClass.popup),
                        oe([document.documentElement, document.body], x.shown),
                        n.heightAuto &&
                            n.backdrop &&
                            !n.toast &&
                            oe([document.documentElement, document.body], x["height-auto"]);
                },
                Ot = function(e) {
                    return e.checked ? 1 : 0;
                },
                Lt = function(e) {
                    return e.checked ? e.value : null;
                },
                St = function(e) {
                    return e.files.length
                        ? null !== e.getAttribute("multiple")
                            ? e.files
                            : e.files[0]
                        : null;
                },
                zt = function(t, n) {
                    var r = L(),
                        o = function(e) {
                            return _t[n.input](r, Qt(e), n);
                        };
                    h(n.inputOptions) || M(n.inputOptions)
                        ? (He(),
                          y(n.inputOptions).then(function(e) {
                              t.hideLoading(), o(e);
                          }))
                        : "object" === e(n.inputOptions)
                        ? o(n.inputOptions)
                        : p(
                              "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                                  e(n.inputOptions),
                              ),
                          );
                },
                Bt = function(e, t) {
                    var n = e.getInput();
                    le(n),
                        y(t.inputValue)
                            .then(function(r) {
                                (n.value =
                                    "number" === t.input ? parseFloat(r) || 0 : "".concat(r)),
                                    ce(n),
                                    n.focus(),
                                    e.hideLoading();
                            })
                            .catch(function(t) {
                                p("Error in inputValue promise: ".concat(t)),
                                    (n.value = ""),
                                    ce(n),
                                    n.focus(),
                                    e.hideLoading();
                            });
                },
                _t = {
                    select: function(e, t, n) {
                        var r = ie(e, x.select),
                            o = function(e, t, r) {
                                var o = document.createElement("option");
                                (o.value = r),
                                    K(o, t),
                                    n.inputValue.toString() === r.toString() && (o.selected = !0),
                                    e.appendChild(o);
                            };
                        t.forEach(function(e) {
                            var t = e[0],
                                n = e[1];
                            if (Array.isArray(n)) {
                                var a = document.createElement("optgroup");
                                (a.label = t),
                                    (a.disabled = !1),
                                    r.appendChild(a),
                                    n.forEach(function(e) {
                                        return o(a, e[1], e[0]);
                                    });
                            } else o(r, n, t);
                        }),
                            r.focus();
                    },
                    radio: function(e, t, n) {
                        var r = ie(e, x.radio);
                        t.forEach(function(e) {
                            var t = e[0],
                                o = e[1],
                                a = document.createElement("input"),
                                i = document.createElement("label");
                            (a.type = "radio"),
                                (a.name = x.radio),
                                (a.value = t),
                                n.inputValue.toString() === t.toString() && (a.checked = !0);
                            var s = document.createElement("span");
                            K(s, o),
                                (s.className = x.label),
                                i.appendChild(a),
                                i.appendChild(s),
                                r.appendChild(i);
                        });
                        var o = r.querySelectorAll("input");
                        o.length && o[0].focus();
                    },
                },
                Qt = function t(n) {
                    var r = [];
                    return (
                        "undefined" != typeof Map && n instanceof Map
                            ? n.forEach(function(n, o) {
                                  var a = n;
                                  "object" === e(a) && (a = t(a)), r.push([o, a]);
                              })
                            : Object.keys(n).forEach(function(o) {
                                  var a = n[o];
                                  "object" === e(a) && (a = t(a)), r.push([o, a]);
                              }),
                        r
                    );
                },
                Ut = function(e, t) {
                    var n = (function(e, t) {
                        var n = e.getInput();
                        if (!n) return null;
                        switch (t.input) {
                            case "checkbox":
                                return Ot(n);
                            case "radio":
                                return Lt(n);
                            case "file":
                                return St(n);
                            default:
                                return t.inputAutoTrim ? n.value.trim() : n.value;
                        }
                    })(e, t);
                    t.inputValidator
                        ? (e.disableInput(),
                          Promise.resolve()
                              .then(function() {
                                  return y(t.inputValidator(n, t.validationMessage));
                              })
                              .then(function(r) {
                                  e.enableButtons(),
                                      e.enableInput(),
                                      r ? e.showValidationMessage(r) : Gt(e, t, n);
                              }))
                        : e.getInput().checkValidity()
                        ? Gt(e, t, n)
                        : (e.enableButtons(), e.showValidationMessage(t.validationMessage));
                },
                Yt = function(e) {
                    e.closePopup({ isDenied: !0, value: !1 });
                },
                Pt = function(e, t) {
                    e.closePopup({ isConfirmed: !0, value: t });
                },
                Gt = function(e, t, n) {
                    t.showLoaderOnConfirm && He(),
                        t.preConfirm
                            ? (e.resetValidationMessage(),
                              Promise.resolve()
                                  .then(function() {
                                      return y(t.preConfirm(n, t.validationMessage));
                                  })
                                  .then(function(t) {
                                      Ae(B()) || !1 === t
                                          ? e.hideLoading()
                                          : Pt(e, void 0 === t ? n : t);
                                  }))
                            : Pt(e, n);
                },
                Rt = function(e, t, n) {
                    for (var r = H(), o = 0; o < r.length; o++)
                        return (
                            (t += n) === r.length ? (t = 0) : -1 === t && (t = r.length - 1),
                            r[t].focus()
                        );
                    I().focus();
                },
                qt = ["ArrowRight", "ArrowDown", "Right", "Down"],
                Ft = ["ArrowLeft", "ArrowUp", "Left", "Up"],
                Ht = ["Escape", "Esc"],
                Wt = function(e, t, n) {
                    var r = Ee.innerParams.get(e);
                    r.stopKeydownPropagation && t.stopPropagation(),
                        "Enter" === t.key
                            ? Jt(e, t, r)
                            : "Tab" === t.key
                            ? Zt(t, r)
                            : -1 !== [].concat(qt, Ft).indexOf(t.key)
                            ? Vt(t.key)
                            : -1 !== Ht.indexOf(t.key) && Kt(t, r, n);
                },
                Jt = function(e, t, n) {
                    if (
                        !t.isComposing &&
                        t.target &&
                        e.getInput() &&
                        t.target.outerHTML === e.getInput().outerHTML
                    ) {
                        if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                        Fe(), t.preventDefault();
                    }
                },
                Zt = function(e, t) {
                    for (var n = e.target, r = H(), o = -1, a = 0; a < r.length; a++)
                        if (n === r[a]) {
                            o = a;
                            break;
                        }
                    e.shiftKey ? Rt(0, o, -1) : Rt(0, o, 1),
                        e.stopPropagation(),
                        e.preventDefault();
                },
                Vt = function(e) {
                    if (-1 !== [_(), Q(), Y()].indexOf(document.activeElement)) {
                        var t =
                                -1 !== qt.indexOf(e)
                                    ? "nextElementSibling"
                                    : "previousElementSibling",
                            n = document.activeElement[t];
                        n && n.focus();
                    }
                },
                Kt = function(e, t, n) {
                    w(t.allowEscapeKey) && (e.preventDefault(), n(b.esc));
                },
                Xt = function(e, t, n) {
                    t.popup.onclick = function() {
                        var t = Ee.innerParams.get(e);
                        t.showConfirmButton ||
                            t.showDenyButton ||
                            t.showCancelButton ||
                            t.showCloseButton ||
                            t.input ||
                            n(b.close);
                    };
                },
                $t = !1,
                en = function(e) {
                    e.popup.onmousedown = function() {
                        e.container.onmouseup = function(t) {
                            (e.container.onmouseup = void 0), t.target === e.container && ($t = !0);
                        };
                    };
                },
                tn = function(e) {
                    e.container.onmousedown = function() {
                        e.popup.onmouseup = function(t) {
                            (e.popup.onmouseup = void 0),
                                (t.target === e.popup || e.popup.contains(t.target)) && ($t = !0);
                        };
                    };
                },
                nn = function(e, t, n) {
                    t.container.onclick = function(r) {
                        var o = Ee.innerParams.get(e);
                        $t
                            ? ($t = !1)
                            : r.target === t.container && w(o.allowOutsideClick) && n(b.backdrop);
                    };
                },
                rn = function(e) {
                    var t = o({}, Ke.showClass, e.showClass),
                        n = o({}, Ke.hideClass, e.hideClass),
                        r = o({}, Ke, e);
                    return (
                        (r.showClass = t),
                        (r.hideClass = n),
                        !1 === e.animation &&
                            ((r.showClass = {
                                popup: "swal2-noanimation",
                                backdrop: "swal2-noanimation",
                            }),
                            (r.hideClass = {})),
                        r
                    );
                },
                on = function(e, t, n) {
                    return new Promise(function(r) {
                        var o = function(t) {
                            e.closePopup({ isDismissed: !0, dismiss: t });
                        };
                        pt.swalPromiseResolve.set(e, r),
                            (t.confirmButton.onclick = function() {
                                return (function(e, t) {
                                    e.disableButtons(), t.input ? Ut(e, t) : Gt(e, t, !0);
                                })(e, n);
                            }),
                            (t.denyButton.onclick = function() {
                                return (function(e) {
                                    e.disableButtons(), Yt(e);
                                })(e);
                            }),
                            (t.cancelButton.onclick = function() {
                                return (function(e, t) {
                                    e.disableButtons(), t(b.cancel);
                                })(e, o);
                            }),
                            (t.closeButton.onclick = function() {
                                return o(b.close);
                            }),
                            (function(e, t, n) {
                                Ee.innerParams.get(e).toast
                                    ? Xt(e, t, n)
                                    : (en(t), tn(t), nn(e, t, n));
                            })(e, t, o),
                            (function(e, t, n, r) {
                                t.keydownTarget &&
                                    t.keydownHandlerAdded &&
                                    (t.keydownTarget.removeEventListener(
                                        "keydown",
                                        t.keydownHandler,
                                        { capture: t.keydownListenerCapture },
                                    ),
                                    (t.keydownHandlerAdded = !1)),
                                    n.toast ||
                                        ((t.keydownHandler = function(t) {
                                            return Wt(e, t, r);
                                        }),
                                        (t.keydownTarget = n.keydownListenerCapture ? window : I()),
                                        (t.keydownListenerCapture = n.keydownListenerCapture),
                                        t.keydownTarget.addEventListener(
                                            "keydown",
                                            t.keydownHandler,
                                            { capture: t.keydownListenerCapture },
                                        ),
                                        (t.keydownHandlerAdded = !0));
                            })(e, We, n, o),
                            n.toast && (n.input || n.footer || n.showCloseButton)
                                ? oe(document.body, x["toast-column"])
                                : ae(document.body, x["toast-column"]),
                            (function(e, t) {
                                "select" === t.input || "radio" === t.input
                                    ? zt(e, t)
                                    : -1 !==
                                          ["text", "email", "number", "tel", "textarea"].indexOf(
                                              t.input,
                                          ) &&
                                      (h(t.inputValue) || M(t.inputValue)) &&
                                      Bt(e, t);
                            })(e, n),
                            Et(n),
                            sn(We, n, o),
                            cn(t, n),
                            setTimeout(function() {
                                t.container.scrollTop = 0;
                            });
                    });
                },
                an = function(e) {
                    var t = {
                        popup: I(),
                        container: E(),
                        content: L(),
                        actions: P(),
                        confirmButton: _(),
                        denyButton: Q(),
                        cancelButton: Y(),
                        loader: U(),
                        closeButton: F(),
                        validationMessage: B(),
                        progressSteps: z(),
                    };
                    return Ee.domCache.set(e, t), t;
                },
                sn = function(e, t, n) {
                    var r = q();
                    le(r),
                        t.timer &&
                            ((e.timeout = new Nt(function() {
                                n("timer"), delete e.timeout;
                            }, t.timer)),
                            t.timerProgressBar &&
                                (ce(r),
                                setTimeout(function() {
                                    e.timeout.running && pe(t.timer);
                                })));
                },
                cn = function(e, t) {
                    if (!t.toast)
                        return w(t.allowEnterKey) ? void (ln(e, t) || Rt(0, -1, 1)) : un();
                },
                ln = function(e, t) {
                    return t.focusDeny && Ae(e.denyButton)
                        ? (e.denyButton.focus(), !0)
                        : t.focusCancel && Ae(e.cancelButton)
                        ? (e.cancelButton.focus(), !0)
                        : !(
                              !t.focusConfirm ||
                              !Ae(e.confirmButton) ||
                              (e.confirmButton.focus(), 0)
                          );
                },
                un = function() {
                    document.activeElement &&
                        "function" == typeof document.activeElement.blur &&
                        document.activeElement.blur();
                },
                An = function(e) {
                    delete e.params,
                        delete We.keydownHandler,
                        delete We.keydownTarget,
                        dn(Ee),
                        dn(pt);
                },
                dn = function(e) {
                    for (var t in e) e[t] = new WeakMap();
                },
                fn = Object.freeze({
                    hideLoading: st,
                    disableLoading: st,
                    getInput: function(e) {
                        var t = Ee.innerParams.get(e || this),
                            n = Ee.domCache.get(e || this);
                        return n ? ee(n.content, t.input) : null;
                    },
                    close: mt,
                    closePopup: mt,
                    closeModal: mt,
                    closeToast: mt,
                    enableButtons: function() {
                        bt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
                    },
                    disableButtons: function() {
                        bt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
                    },
                    enableInput: function() {
                        return vt(this.getInput(), !1);
                    },
                    disableInput: function() {
                        return vt(this.getInput(), !0);
                    },
                    showValidationMessage: function(e) {
                        var t = Ee.domCache.get(this);
                        K(t.validationMessage, e);
                        var n = window.getComputedStyle(t.popup);
                        (t.validationMessage.style.marginLeft = "-".concat(
                            n.getPropertyValue("padding-left"),
                        )),
                            (t.validationMessage.style.marginRight = "-".concat(
                                n.getPropertyValue("padding-right"),
                            )),
                            ce(t.validationMessage);
                        var r = this.getInput();
                        r &&
                            (r.setAttribute("aria-invalid", !0),
                            r.setAttribute("aria-describedBy", x["validation-message"]),
                            ne(r),
                            oe(r, x.inputerror));
                    },
                    resetValidationMessage: function() {
                        var e = Ee.domCache.get(this);
                        e.validationMessage && le(e.validationMessage);
                        var t = this.getInput();
                        t &&
                            (t.removeAttribute("aria-invalid"),
                            t.removeAttribute("aria-describedBy"),
                            ae(t, x.inputerror));
                    },
                    getProgressSteps: function() {
                        return Ee.domCache.get(this).progressSteps;
                    },
                    _main: function(e) {
                        !(function(e) {
                            for (var t in e) rt(t), e.toast && ot(t), at(t);
                        })(e),
                            We.currentInstance && We.currentInstance._destroy(),
                            (We.currentInstance = this);
                        var t = rn(e);
                        Tt(t),
                            Object.freeze(t),
                            We.timeout && (We.timeout.stop(), delete We.timeout),
                            clearTimeout(We.restoreFocusTimeout);
                        var n = an(this);
                        return qe(this, t), Ee.innerParams.set(this, t), on(this, n, t);
                    },
                    update: function(e) {
                        var t = I(),
                            n = Ee.innerParams.get(this);
                        if (!t || X(t, n.hideClass.popup))
                            return f(
                                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
                            );
                        var r = {};
                        Object.keys(e).forEach(function(t) {
                            gn.isUpdatableParameter(t)
                                ? (r[t] = e[t])
                                : f(
                                      'Invalid parameter to update: "'.concat(
                                          t,
                                          '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js',
                                      ),
                                  );
                        });
                        var a = o({}, n, r);
                        qe(this, a),
                            Ee.innerParams.set(this, a),
                            Object.defineProperties(this, {
                                params: {
                                    value: o({}, this.params, e),
                                    writable: !1,
                                    enumerable: !0,
                                },
                            });
                    },
                    _destroy: function() {
                        var e = Ee.domCache.get(this),
                            t = Ee.innerParams.get(this);
                        t &&
                            (e.popup &&
                                We.swalCloseEventFinishedCallback &&
                                (We.swalCloseEventFinishedCallback(),
                                delete We.swalCloseEventFinishedCallback),
                            We.deferDisposalTimer &&
                                (clearTimeout(We.deferDisposalTimer), delete We.deferDisposalTimer),
                            "function" == typeof t.onDestroy && t.onDestroy(),
                            An(this));
                    },
                }),
                pn = (function() {
                    function e() {
                        if ((t(this, e), "undefined" != typeof window)) {
                            "undefined" == typeof Promise &&
                                p(
                                    "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)",
                                ),
                                (Dt = this);
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                                r[o] = arguments[o];
                            var a = Object.freeze(this.constructor.argsToParams(r));
                            Object.defineProperties(this, {
                                params: {
                                    value: a,
                                    writable: !1,
                                    enumerable: !0,
                                    configurable: !0,
                                },
                            });
                            var i = this._main(this.params);
                            Ee.promise.set(this, i);
                        }
                    }
                    return (
                        r(e, [
                            {
                                key: "then",
                                value: function(e) {
                                    return Ee.promise.get(this).then(e);
                                },
                            },
                            {
                                key: "finally",
                                value: function(e) {
                                    return Ee.promise.get(this).finally(e);
                                },
                            },
                        ]),
                        e
                    );
                })();
            o(pn.prototype, fn),
                o(pn, it),
                Object.keys(fn).forEach(function(e) {
                    pn[e] = function() {
                        var t;
                        if (Dt) return (t = Dt)[e].apply(t, arguments);
                    };
                }),
                (pn.DismissReason = b),
                (pn.version = "10.0.2");
            var gn = pn;
            return (gn.default = gn), gn;
        })()),
            void 0 !== this &&
                this.Sweetalert2 &&
                (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
            "undefined" != typeof document &&
                (function(e, t) {
                    var n = e.createElement("style");
                    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
                        n.styleSheet.disabled || (n.styleSheet.cssText = t);
                    else
                        try {
                            n.innerHTML = t;
                        } catch (e) {
                            n.innerText = t;
                        }
                })(
                    document,
                    '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#3085d6 transparent #3085d6 transparent}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dd6b55;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}',
                );
    },
    function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? r(e, t)
                        : void 0
                );
            }
        }
        function a(e) {
            return (
                (function(e) {
                    if (Array.isArray(e)) return r(e);
                })(e) ||
                (function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                        return Array.from(e);
                })(e) ||
                o(e) ||
                (function() {
                    throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })()
            );
        }
        n.r(t),
            n.d(t, "pluginSettings", function() {
                return G;
            }),
            n.d(t, "retrieveAllQuestions", function() {
                return Y;
            }),
            n.d(t, "Requests", function() {
                return y;
            });
        var i = [
                {
                    title: "考试",
                    display: !0,
                    settings: [
                        {
                            id: "infiniteListening",
                            name: "无限听力",
                            type: "switch",
                            default: !0,
                            description: "允许无限次播放听力音频",
                        },
                    ],
                },
            ],
            s = [
                {
                    title: "练习答案",
                    display: !0,
                    settings: [
                        {
                            id: "showReference",
                            name: "显示参考",
                            type: "switch",
                            default: !0,
                            description: "是否显示听力、口语参考(适用视听说)",
                        },
                    ],
                },
                {
                    title: "自动答题-练习部分",
                    display: !0,
                    settings: [
                        {
                            id: "autoSolve",
                            name: "自动答题",
                            type: "switch",
                            default: !1,
                            description: "自动答题开关",
                        },
                        {
                            id: "solveInterval",
                            name: "答题间隔",
                            default: 1e3,
                            description: "单位毫秒；自动答题间隔",
                        },
                        {
                            id: "defaultBlankAnswer",
                            name: "默认填空",
                            default: "Default answer.",
                            description: "填空题没有固定|正确答案时，填入的默认值",
                        },
                    ],
                },
            ],
            c = [
                {
                    title: "时长相关",
                    display: !0,
                    settings: [
                        {
                            id: "autoRefresh",
                            name: "自动挂机",
                            type: "switch",
                            default: !1,
                            description: "是否定时切换下一页，仅用于刷时长",
                        },
                        {
                            id: "loopRefresh",
                            name: "循环挂机",
                            type: "switch",
                            default: !1,
                            description: "一遍刷完，是否跳转到开头；自动跳过封锁章节",
                        },
                        {
                            id: "randomRefresh",
                            name: "随机延时",
                            type: "switch",
                            default: !1,
                            description: "关闭将以上限为切换时长，开启将取上下限区间内随机时长",
                        },
                        {
                            id: "refreshIntervalMin",
                            name: "切换下限",
                            default: 5,
                            description:
                                "单位分钟；we learn允许一个页面最多挂30分钟，所以不要大于30",
                        },
                        {
                            id: "refreshIntervalMax",
                            name: "切换上限",
                            default: 10,
                            description: "单位分钟",
                        },
                    ],
                },
            ],
            l = n(3),
            u = n(1),
            A = n.n(u);
        function d(e, t) {
            return (
                (function(e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, s = e[Symbol.iterator]();
                                !(r = (i = s.next()).done) &&
                                (n.push(i.value), !t || n.length !== t);
                                r = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return n;
                    }
                })(e, t) ||
                o(e, t) ||
                (function() {
                    throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })()
            );
        }
        var f = n(2),
            p = n(0);
        function g(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        var m = n(14),
            w = n(5),
            h = function(e, t, n, r) {
                var o,
                    a = arguments.length,
                    i = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                if (
                    "object" ===
                        ("undefined" == typeof Reflect ? "undefined" : Object(m.a)(Reflect)) &&
                    "function" == typeof Reflect.decorate
                )
                    i = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i;
            },
            y = (function() {
                function e() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r, o, a, i, s, c, u;
                return (
                    (t = e),
                    (n = null),
                    (r = [
                        {
                            key: "simpleRequest",
                            value:
                                ((u = Object(l.a)(
                                    A.a.mark(function e(t) {
                                        var n,
                                            r,
                                            o,
                                            a = arguments;
                                        return A.a.wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (n =
                                                                    a.length > 1 && void 0 !== a[1]
                                                                        ? a[1]
                                                                        : 1),
                                                                p.b && console.log(t),
                                                                (e.next = 4),
                                                                Object(w.a)("/query/", {
                                                                    method: "POST",
                                                                    body: {
                                                                        questionId: t.questionId,
                                                                        question: t.question,
                                                                        queryType: n,
                                                                    },
                                                                })
                                                            );
                                                        case 4:
                                                            (r = e.sent),
                                                                (o = r.response),
                                                                Object(f.a)(t.question, "normal"),
                                                                M(o),
                                                                3 != o.status && this.fullPost(t);
                                                        case 9:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                        );
                                    }),
                                )),
                                function(e) {
                                    return u.apply(this, arguments);
                                }),
                        },
                        {
                            key: "fullPost",
                            value:
                                ((c = Object(l.a)(
                                    A.a.mark(function e(t) {
                                        var n,
                                            r = arguments;
                                        return A.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (n =
                                                                r.length > 1 && void 0 !== r[1]
                                                                    ? r[1]
                                                                    : 0),
                                                            (e.next = 3),
                                                            Object(w.a)("/query/", {
                                                                method: "POST",
                                                                body: {
                                                                    question: t,
                                                                    account:
                                                                        p.c.USER_SETTINGS
                                                                            .userAccount,
                                                                    queryType: n,
                                                                },
                                                            })
                                                        );
                                                    case 3:
                                                        M(e.sent.response);
                                                    case 5:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    }),
                                )),
                                function(e) {
                                    return c.apply(this, arguments);
                                }),
                        },
                        {
                            key: "collectAnswers",
                            value:
                                ((s = Object(l.a)(
                                    A.a.mark(function e(t) {
                                        return A.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            Object(w.a)("/collect/", {
                                                                method: "POST",
                                                                body: {
                                                                    account:
                                                                        p.c.USER_SETTINGS
                                                                            .userAccount,
                                                                    questions: t,
                                                                },
                                                            })
                                                        );
                                                    case 2:
                                                        Object(f.a)(
                                                            "当前页面答案收录成功，可以切换下一页手动点击查询按钮上传，或者上传其它练习的答案",
                                                            "info",
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    }),
                                )),
                                function(e) {
                                    return s.apply(this, arguments);
                                }),
                        },
                        {
                            key: "sendComment",
                            value:
                                ((i = Object(l.a)(
                                    A.a.mark(function e(t) {
                                        return A.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            Object(w.a)("/comment/", {
                                                                method: "POST",
                                                                body: {
                                                                    message: t,
                                                                    account:
                                                                        p.c.USER_SETTINGS
                                                                            .userAccount,
                                                                    time: new Date().toISOString(),
                                                                },
                                                            })
                                                        );
                                                    case 2:
                                                        Object(f.a)("留言成功", "info");
                                                    case 3:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    }),
                                )),
                                function(e) {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: "initial",
                            value:
                                ((a = Object(l.a)(
                                    A.a.mark(function e() {
                                        var t, n, r, o;
                                        return A.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            ((t = new Date()
                                                                .toISOString()
                                                                .slice(0, 10)),
                                                            (n = GM_getValue(
                                                                "LAST_CHECK_DATE",
                                                                "2020-01-01",
                                                            )),
                                                            !(t > n))
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 5),
                                                            Object(w.a)("/initial/", {
                                                                method: "POST",
                                                                body: { version: p.e },
                                                            })
                                                        );
                                                    case 5:
                                                        (r = e.sent),
                                                            (o = r.response).status &&
                                                                (Object(f.a)(o.message, "info"),
                                                                GM_setValue("LAST_CHECK_DATE", t));
                                                    case 8:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    }),
                                )),
                                function() {
                                    return a.apply(this, arguments);
                                }),
                        },
                        {
                            key: "updatePoints",
                            value:
                                ((o = Object(l.a)(
                                    A.a.mark(function e() {
                                        var t;
                                        return A.a.wrap(function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            Object(w.a)("/user/", {
                                                                method: "POST",
                                                                body: {
                                                                    account:
                                                                        p.c.USER_SETTINGS
                                                                            .userAccount,
                                                                },
                                                            })
                                                        );
                                                    case 2:
                                                        (t = e.sent),
                                                            (p.c.USER_SETTINGS.userPoints = parseInt(
                                                                t.responseText,
                                                                10,
                                                            ));
                                                    case 4:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    }),
                                )),
                                function() {
                                    return o.apply(this, arguments);
                                }),
                        },
                    ]),
                    n && g(t.prototype, n),
                    r && g(t, r),
                    e
                );
            })();
        function M(e) {
            console.log(e);
            var t = "";
            switch (e.status) {
                case 0:
                    t = "新增收录题目，未收录答案";
                    break;
                case 1:
                    (t = "新增收录题目，且收录答案"),
                        Object(f.a)(t, "info"),
                        Object(f.a)("用户".concat(p.c.USER_SETTINGS.userAccount, "积分+1"), "info");
                    break;
                case 2:
                    (t = "服务器已有题目，新增答案"),
                        Object(f.a)(t, "info"),
                        Object(f.a)("用户".concat(p.c.USER_SETTINGS.userAccount, "积分+1"), "info");
                    break;
                case 3:
                    t = "服务器已有答案，返回答案";
                    break;
                case 4:
                    t = "服务器已有题目，没有答案";
                    break;
                case 5:
                    t = "服务器没有题目，没有答案";
                    break;
                case 6:
                    t = "没有标答，返回最可能答案";
            }
            var n = e.answer;
            switch (e.status) {
                case 3:
                    Object(f.a)(n, "success");
                    break;
                case 4:
                case 5:
                    Object(f.a)("尚未收录答案", "error");
                    break;
                case 6:
                    for (var r = 0, o = Object.entries(n); r < o.length; r++) {
                        var a = d(o[r], 2),
                            i = a[0],
                            s = a[1];
                        Object(f.a)("".concat(s, " ").concat(i), "success");
                    }
            }
            p.c.messages && p.c.messages[p.c.messages.length - 1].info && Object(f.a)("", "hr");
        }
        function b() {
            unsafeWindow.PlaySound = function(e, t) {
                $("#hdPlay_" + t).val() <= 0 ||
                    ("" == soundfile
                        ? ((soundfile = resPath + "ItemRes/sound/" + e), createSoundPlayer())
                        : ((soundfile = resPath + "ItemRes/sound/" + e),
                          jwplayer("soundplayer").load([{ file: soundfile }])),
                    jwplayer("soundplayer").onBufferFull(function() {
                        clearTimeout(bufferingTimer);
                        var e = $("#btnPlay_" + t);
                        e.html(
                            '<span class=" fa fa-play-circle play_symble">无限次播放机会</span>',
                        ),
                            e.removeClass("loading");
                    }),
                    $("#btnPlay_" + t).val("正在加载"),
                    (bufferingTimer = setTimeout("PlayerExpireCheck('" + t + "', 0)", 1e3)),
                    $("#btnPlay_" + t).addClass("loading"),
                    jwplayer("soundplayer").play());
            };
        }
        h([Object(f.c)()], y, "simpleRequest", null),
            h([Object(f.c)()], y, "fullPost", null),
            h([Object(f.c)()], y, "collectAnswers", null),
            h([Object(f.c)("留言失败")], y, "sendComment", null);
        var v,
            N = A.a.mark(L),
            x = A.a.mark(S),
            T = A.a.mark(z),
            E = A.a.mark(B),
            j = A.a.mark(_);
        function D(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return I(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return I(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function I(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        !(function(e) {
            (e[(e.LISTENING = 0)] = "LISTENING"),
                (e[(e.READING_COMPREHENSION = 1)] = "READING_COMPREHENSION"),
                (e[(e.READING_COMPLETION = 2)] = "READING_COMPLETION"),
                (e[(e.ORDERING = 3)] = "ORDERING"),
                (e[(e.SINGLE_CHOICE = 4)] = "SINGLE_CHOICE");
        })(v || (v = {}));
        var k = !1;
        function C(e) {
            var t = /\s*(\d*)/.exec(e.querySelector(".test_number").textContent)[1];
            k && Object(f.a)(t);
        }
        function O(e, t) {
            var n,
                r = [],
                o = null,
                a = null;
            e &&
                e.matches('[class*="answer"]') &&
                (n =
                    e
                        .querySelector("p span")
                        .textContent.toUpperCase()
                        .charCodeAt(0) - 65);
            var i,
                s = D(t.querySelectorAll("label").entries());
            try {
                for (s.s(); !(i = s.n()).done; ) {
                    var c = d(i.value, 2),
                        l = c[0],
                        u = c[1],
                        A = u.textContent.replace(/\w*\)\s*/, "");
                    r.push(A),
                        e && l == n && ((o = A), (a = u.querySelector("input").getAttribute("id")));
                }
            } catch (e) {
                s.e(e);
            } finally {
                s.f();
            }
            return [r, a, o];
        }
        function L(e) {
            var t, n, r, o, a, i, s, c, l, u, f, p, g, m, w, h;
            return A.a.wrap(
                function(A) {
                    for (;;)
                        switch ((A.prev = A.next)) {
                            case 0:
                                (t = e.querySelector('a[href^="javascript:PlaySound"]')),
                                    (n = /'(.*?)'/.exec(t.getAttribute("href"))[1]),
                                    (r = "https://courseres.sflep.com/Test/ItemRes/sound/" + n),
                                    (t.querySelector("span").textContent = "无限次播放机会"),
                                    (o = D(e.querySelectorAll(".test_hov"))),
                                    (A.prev = 5),
                                    o.s();
                            case 7:
                                if ((a = o.n()).done) {
                                    A.next = 21;
                                    break;
                                }
                                return (
                                    (i = a.value),
                                    ((s = i.querySelector(
                                        'a[href^="javascript:PlaySound"]',
                                    )).querySelector("span").textContent = "无限次播放机会"),
                                    (c = /'(.*?)'/.exec(s.getAttribute("href"))[1]),
                                    (l = i
                                        .querySelector('input[name^="rd"][id$="_1"]')
                                        .getAttribute("name")),
                                    (u = "https://courseres.sflep.com/Test/ItemRes/sound/" + c),
                                    (f = i.querySelector('[class*="answer"]')),
                                    (p = O(f, i)),
                                    (g = d(p, 3)),
                                    (m = g[0]),
                                    (w = g[1]),
                                    (h = g[2]),
                                    C(i),
                                    (A.next = 19),
                                    {
                                        questionType: v.LISTENING,
                                        questionId: l,
                                        question: u,
                                        options: m,
                                        answerId: w,
                                        answer: h,
                                        context: r,
                                        file: null,
                                    }
                                );
                            case 19:
                                A.next = 7;
                                break;
                            case 21:
                                A.next = 26;
                                break;
                            case 23:
                                (A.prev = 23), (A.t0 = A.catch(5)), o.e(A.t0);
                            case 26:
                                return (A.prev = 26), o.f(), A.finish(26);
                            case 29:
                            case "end":
                                return A.stop();
                        }
                },
                N,
                null,
                [[5, 23, 26, 29]],
            );
        }
        function S(e) {
            var t, n, r, o, a, i, s, c, l, u, f, p, g;
            return A.a.wrap(
                function(A) {
                    for (;;)
                        switch ((A.prev = A.next)) {
                            case 0:
                                (t = e
                                    .querySelector(".col-md-8")
                                    .textContent.replace(/(.*?)following passage./, "")
                                    .trim()),
                                    (n = D(e.querySelectorAll(".col-md-4 .test_hov"))),
                                    (A.prev = 2),
                                    n.s();
                            case 4:
                                if ((r = n.n()).done) {
                                    A.next = 16;
                                    break;
                                }
                                return (
                                    (o = r.value),
                                    (a = o
                                        .querySelector('input[id^="rd"][id$="_1"]')
                                        .getAttribute("name")),
                                    (i = o
                                        .querySelector("div")
                                        .textContent.replace(/\d*\.\s*/, "")),
                                    (s = o.nextElementSibling),
                                    (c = O(s, o)),
                                    (l = d(c, 3)),
                                    (u = l[0]),
                                    (f = l[1]),
                                    (p = l[2]),
                                    (g = a.replace(/_.*$/, "")),
                                    C(o),
                                    (A.next = 14),
                                    {
                                        questionType: v.READING_COMPREHENSION,
                                        questionId: a,
                                        question: i,
                                        options: u,
                                        answerId: f,
                                        answer: p,
                                        context: t,
                                        file: g,
                                    }
                                );
                            case 14:
                                A.next = 4;
                                break;
                            case 16:
                                A.next = 21;
                                break;
                            case 18:
                                (A.prev = 18), (A.t0 = A.catch(2)), n.e(A.t0);
                            case 21:
                                return (A.prev = 21), n.f(), A.finish(21);
                            case 24:
                            case "end":
                                return A.stop();
                        }
                },
                x,
                null,
                [[2, 18, 21, 24]],
            );
        }
        function z(e) {
            var t, n, r, o, a, i, s, c;
            return A.a.wrap(function(l) {
                for (;;)
                    switch ((l.prev = l.next)) {
                        case 0:
                            (t = e.querySelector(".test_sty_3").textContent.trim()),
                                (n = []),
                                (r = ""),
                                "",
                                (a = D(e.querySelectorAll(".test_sty_5 span")));
                            try {
                                for (a.s(); !(i = a.n()).done; )
                                    (s = i.value), n.push(s.textContent);
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            return (
                                (c = e.querySelector('[class*="answer"]')) &&
                                    (r = c.textContent.replace(/.*：\s*/, "")),
                                (o = e
                                    .querySelector('input[id^="txt_"][id$="_1"]')
                                    .getAttribute("id")
                                    .replace(/_1$/, "")),
                                (l.next = 11),
                                {
                                    questionType: v.READING_COMPLETION,
                                    questionId: o,
                                    question: null,
                                    options: n,
                                    answerId: null,
                                    answer: r,
                                    context: t,
                                    file: null,
                                }
                            );
                        case 11:
                        case "end":
                            return l.stop();
                    }
            }, T);
        }
        function B(e) {
            var t, n, r, o, a, i, s, c;
            return A.a.wrap(
                function(l) {
                    for (;;)
                        switch ((l.prev = l.next)) {
                            case 0:
                                (t = e.querySelector(".test_sty_6").textContent.trim()),
                                    (n = D(e.querySelectorAll(".form-inline"))),
                                    (l.prev = 2),
                                    n.s();
                            case 4:
                                if ((r = n.n()).done) {
                                    l.next = 17;
                                    break;
                                }
                                return (
                                    (o = r.value),
                                    (a = ""),
                                    e.querySelector('[class*="answer"]') &&
                                        (a = o.nextElementSibling.textContent.replace(
                                            /(.*?)：\s*/,
                                            "",
                                        )),
                                    (i = o.textContent.replace(/\d*\.\s*(\w*?)J/, "")),
                                    (s = o.querySelector('select[id^="sl"]').getAttribute("id")),
                                    (c = s.replace(/_.{1,3}$/, "")),
                                    C(o),
                                    (l.next = 15),
                                    {
                                        questionType: v.ORDERING,
                                        questionId: s,
                                        question: i,
                                        options: [],
                                        answerId: null,
                                        answer: a,
                                        context: t,
                                        file: c,
                                    }
                                );
                            case 15:
                                l.next = 4;
                                break;
                            case 17:
                                l.next = 22;
                                break;
                            case 19:
                                (l.prev = 19), (l.t0 = l.catch(2)), n.e(l.t0);
                            case 22:
                                return (l.prev = 22), n.f(), l.finish(22);
                            case 25:
                            case "end":
                                return l.stop();
                        }
                },
                E,
                null,
                [[2, 19, 22, 25]],
            );
        }
        function _(e) {
            var t, n, r, o, a, i, s, c, l, u, f;
            return A.a.wrap(
                function(A) {
                    for (;;)
                        switch ((A.prev = A.next)) {
                            case 0:
                                (t = D(e.querySelectorAll(".test_hov"))), (A.prev = 1), t.s();
                            case 3:
                                if ((n = t.n()).done) {
                                    A.next = 14;
                                    break;
                                }
                                return (
                                    (r = n.value),
                                    (o = r
                                        .querySelector('input[name^="rd"][id$="_1"]')
                                        .getAttribute("name")),
                                    (a = r
                                        .querySelector("div")
                                        .textContent.replace(/\d*\.\s*/, "")),
                                    (i = r.querySelector('[class*="answer"]')),
                                    (s = O(i, r)),
                                    (c = d(s, 3)),
                                    (l = c[0]),
                                    (u = c[1]),
                                    (f = c[2]),
                                    C(r),
                                    (A.next = 12),
                                    {
                                        questionType: v.SINGLE_CHOICE,
                                        questionId: o,
                                        question: a,
                                        options: l,
                                        answerId: u,
                                        answer: f,
                                        context: null,
                                        file: null,
                                    }
                                );
                            case 12:
                                A.next = 3;
                                break;
                            case 14:
                                A.next = 19;
                                break;
                            case 16:
                                (A.prev = 16), (A.t0 = A.catch(1)), t.e(A.t0);
                            case 19:
                                return (A.prev = 19), t.f(), A.finish(19);
                            case 22:
                            case "end":
                                return A.stop();
                        }
                },
                j,
                null,
                [[1, 16, 19, 22]],
            );
        }
        function Q(e) {
            var t = null;
            return (
                e.querySelector('a[href^="javascript:PlaySound"]')
                    ? (t = v.LISTENING)
                    : e.querySelector(".col-md-8")
                    ? (t = v.READING_COMPREHENSION)
                    : e.querySelector(".test_sty_5")
                    ? (t = v.READING_COMPLETION)
                    : e.querySelector(".test_sty_6")
                    ? (t = v.ORDERING)
                    : e.querySelector('input[name^="rd"]') && (t = v.SINGLE_CHOICE),
                t
            );
        }
        function U() {
            return "none" == document.querySelector("#aSubmit").style.display;
        }
        function Y() {
            return P.apply(this, arguments);
        }
        function P() {
            return (P = Object(l.a)(
                A.a.mark(function e() {
                    var t, n, r, o, a, i, s, c, l, u;
                    return A.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        console.log(333),
                                            (p.c.messages = []),
                                            (t = []),
                                            (n = U()) || ((k = !0), b()),
                                            (r = D(document.querySelectorAll(".itemDiv"))),
                                            (e.prev = 6),
                                            r.s();
                                    case 8:
                                        if ((o = r.n()).done) {
                                            e.next = 51;
                                            break;
                                        }
                                        (a = o.value),
                                            (i = null),
                                            (s = Q(a)),
                                            (e.t0 = s),
                                            (e.next =
                                                e.t0 === v.LISTENING
                                                    ? 15
                                                    : e.t0 === v.READING_COMPREHENSION
                                                    ? 17
                                                    : e.t0 === v.READING_COMPLETION
                                                    ? 19
                                                    : e.t0 === v.ORDERING
                                                    ? 21
                                                    : e.t0 === v.SINGLE_CHOICE
                                                    ? 23
                                                    : 25);
                                        break;
                                    case 15:
                                        return (i = L), e.abrupt("break", 27);
                                    case 17:
                                        return (i = S), e.abrupt("break", 27);
                                    case 19:
                                        return (i = z), e.abrupt("break", 27);
                                    case 21:
                                        return (i = B), e.abrupt("break", 27);
                                    case 23:
                                        return (i = _), e.abrupt("break", 27);
                                    case 25:
                                        return (
                                            Object(f.a)("未知题目类型"), e.abrupt("continue", 49)
                                        );
                                    case 27:
                                        (c = D(i(a))), (e.prev = 28), c.s();
                                    case 30:
                                        if ((l = c.n()).done) {
                                            e.next = 41;
                                            break;
                                        }
                                        if (((u = l.value), !n)) {
                                            e.next = 36;
                                            break;
                                        }
                                        t.push(u), (e.next = 39);
                                        break;
                                    case 36:
                                        return y.simpleRequest(u), (e.next = 39), Object(f.d)(p.d);
                                    case 39:
                                        e.next = 30;
                                        break;
                                    case 41:
                                        e.next = 46;
                                        break;
                                    case 43:
                                        (e.prev = 43), (e.t1 = e.catch(28)), c.e(e.t1);
                                    case 46:
                                        return (e.prev = 46), c.f(), e.finish(46);
                                    case 49:
                                        e.next = 8;
                                        break;
                                    case 51:
                                        e.next = 56;
                                        break;
                                    case 53:
                                        (e.prev = 53), (e.t2 = e.catch(6)), r.e(e.t2);
                                    case 56:
                                        return (e.prev = 56), r.f(), e.finish(56);
                                    case 59:
                                        n && y.collectAnswers(t), console.log(444);
                                    case 61:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        null,
                        [
                            [6, 53, 56, 59],
                            [28, 43, 46, 49],
                        ],
                    );
                }),
            )).apply(this, arguments);
        }
        var G = [].concat(a(i), a(s), a(c));
    },
    function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return (
                t || (t = {}),
                "string" != typeof (e = e && e.__esModule ? e.default : e)
                    ? e
                    : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                      t.hash && (e += t.hash),
                      /["'() \t\n]/.test(e) || t.needQuotes
                          ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                          : e)
            );
        };
    },
    function(e, t, n) {
        "use strict";
        var r,
            o = function() {
                return (
                    void 0 === r &&
                        (r = Boolean(window && document && document.all && !window.atob)),
                    r
                );
            },
            a = (function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        e[t] = n;
                    }
                    return e[t];
                };
            })(),
            i = [];
        function s(e) {
            for (var t = -1, n = 0; n < i.length; n++)
                if (i[n].identifier === e) {
                    t = n;
                    break;
                }
            return t;
        }
        function c(e, t) {
            for (var n = {}, r = [], o = 0; o < e.length; o++) {
                var a = e[o],
                    c = t.base ? a[0] + t.base : a[0],
                    l = n[c] || 0,
                    u = "".concat(c, " ").concat(l);
                n[c] = l + 1;
                var A = s(u),
                    d = { css: a[1], media: a[2], sourceMap: a[3] };
                -1 !== A
                    ? (i[A].references++, i[A].updater(d))
                    : i.push({ identifier: u, updater: m(d, t), references: 1 }),
                    r.push(u);
            }
            return r;
        }
        function l(e) {
            var t = document.createElement("style"),
                r = e.attributes || {};
            if (void 0 === r.nonce) {
                var o = n.nc;
                o && (r.nonce = o);
            }
            if (
                (Object.keys(r).forEach(function(e) {
                    t.setAttribute(e, r[e]);
                }),
                "function" == typeof e.insert)
            )
                e.insert(t);
            else {
                var i = a(e.insert || "head");
                if (!i)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                    );
                i.appendChild(t);
            }
            return t;
        }
        var u,
            A =
                ((u = []),
                function(e, t) {
                    return (u[e] = t), u.filter(Boolean).join("\n");
                });
        function d(e, t, n, r) {
            var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
            if (e.styleSheet) e.styleSheet.cssText = A(t, o);
            else {
                var a = document.createTextNode(o),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
            }
        }
        function f(e, t, n) {
            var r = n.css,
                o = n.media,
                a = n.sourceMap;
            if (
                (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                a &&
                    btoa &&
                    (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */",
                    )),
                e.styleSheet)
            )
                e.styleSheet.cssText = r;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(r));
            }
        }
        var p = null,
            g = 0;
        function m(e, t) {
            var n, r, o;
            if (t.singleton) {
                var a = g++;
                (n = p || (p = l(t))), (r = d.bind(null, n, a, !1)), (o = d.bind(null, n, a, !0));
            } else
                (n = l(t)),
                    (r = f.bind(null, n, t)),
                    (o = function() {
                        !(function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(n);
                    });
            return (
                r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r((e = t));
                    } else o();
                }
            );
        }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
            var n = c((e = e || []), t);
            return function(e) {
                if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                    for (var r = 0; r < n.length; r++) {
                        var o = s(n[r]);
                        i[o].references--;
                    }
                    for (var a = c(e, t), l = 0; l < n.length; l++) {
                        var u = s(n[l]);
                        0 === i[u].references && (i[u].updater(), i.splice(u, 1));
                    }
                    n = a;
                }
            };
        };
    },
    function(e, t, n) {
        var r = n(9),
            o = n(25);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
        var a = { insert: "head", singleton: !1 };
        r(o, a);
        e.exports = o.locals || {};
    },
    function(e, t, n) {
        var r = n(9),
            o = n(27);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
        var a = { insert: "head", singleton: !1 };
        r(o, a);
        e.exports = o.locals || {};
    },
    function(e, t, n) {
        var r = n(9),
            o = n(29);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
        var a = { insert: "head", singleton: !1 };
        r(o, a);
        e.exports = o.locals || {};
    },
    function(e, t, n) {
        var r = n(9),
            o = n(31);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
        var a = { insert: "head", singleton: !1 };
        r(o, a);
        e.exports = o.locals || {};
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            return (r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e;
                      }
                    : function(e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        n.d(t, "a", function() {
            return r;
        });
    },
    function(e, t, n) {
        "use strict";
        t.a =
            "data:application/vnd.ms-fontobject;base64,jAsAAOQKAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAdC7BHAAAAAAAAAAAAAAAAAAAAAAAABAAaQBjAG8AbgBmAG8AbgB0AAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAQAGkAYwBvAG4AZgBvAG4AdAAAAAAAAAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzI8fUlKAAABfAAAAFZjbWFwtIcd+gAAAeQAAAGcZ2x5ZlSWxa8AAAOMAAAEoGhlYWQbRAwIAAAA4AAAADZoaGVhCNUEfAAAALwAAAAkaG10eBD3AAAAAAHUAAAAEGxvY2EDDAF+AAADgAAAAAptYXhwARYAjwAAARgAAAAgbmFtZT5U/n0AAAgsAAACbXBvc3QyoIw9AAAKnAAAAEYAAQAAA4D/gABcBPcAAAAABPcAAQAAAAAAAAAAAAAAAAAAAAQAAQAAAAEAABzBLnRfDzz1AAsEAAAAAADbluQGAAAAANuW5AYAAP9+BPcDgQAAAAgAAgAAAAAAAAABAAAABACDAAgAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQQ+AZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5gXnGQOA/4AAXAOBAIIAAAABAAAAAAAABAAAAAQAAAAE9wAABAAAAAAAAAUAAAADAAAALAAAAAQAAAFoAAEAAAAAAGIAAwABAAAALAADAAoAAAFoAAQANgAAAAgACAACAADmBeYo5xn//wAA5gXmKOcZ//8AAAAAAAAAAQAIAAgACAAAAAEAAgADAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAA0AAAAAAAAAAMAAOYFAADmBQAAAAEAAOYoAADmKAAAAAIAAOcZAADnGQAAAAMAAAAAALwBfgJQAAAAAgAA/34D9gOBAGwAeAAAJSYnJicmBgcGBw4BBwYHBicmBwYnJicuAicuAQcGBwYmJyYnJjY3Njc+ATU2JjYmLwEmNzY3NhcWFxY2Nz4CPwE+ATMWNzYXFhcWFxYXFj8BNhcWFxYGDwEOARcWBhUeARcWFx4BBwYHBgclPgE3LgEnDgEHHgEDdRUOLC0HEAcgHgUHAQoGAx9eXx4ECAcBIB0PBQ4GNTQSEwouLgsDESwsBAUBAwULDE8YDzIxDRk2NwYPBg8eHgEQAREPXl8dAwgIARIdGhASZxsPMDAJAxBXBwUBAQEBBQUrLQ8DCTAxBQb+fk1mAwJkTU1mAgFmGAgFEhECAQQPFQMNBjY3HwEBAQEeNzYSEBIIAwICFBUIBxJPUBESDSIkAwwGDx8fFAg9ERlVVRcKFhUCAgMIEw8QbxANAQEBHTc2FAgNEwsJKQwbU1IPEgtEBgwKESMRBg0EIyILEhBUUgcFqgFlS05mAwJlTUxmAAMAAP9/BPcDgABEAHwAfQAAJQ4BJyYvASYvASYvASYvASYvASYvASYvAS4BNTMnAzMUFh8BFh8BFh8BFh8BFh8BFh8BFh8BFhcWHwEWMzI2Nz4BJy4BATQmLwEmLwEuAS8BJi8BJi8CJicjIgYHDgEXHgE3PgEXMh8BFh8BFhcWFxYfARYfAR4BFSMXNyMDaDiBRRISDg4NEQ0NDA8PBhEQAjYsAg0NBS4xaoCnaDAtAgkKBw8PAzVBAxMTCREREA8QFAQFDg8KGhtRqz0RAQkLKwEOLi4CCwwCKGI5BxITDRARGyoVFAlRmEEWAQoIIxM3gUMUEgwPEA0PDgUEERADYUIBMDNqhqdpLSgpAQEBAgIDAwMEBQUFAwgIAR8tAQ4PBzuNS/3/AFGZQwQNDAkSEAM1JQIKCAUGBgYEBAUBAQIBAgM1OBIlCgwDAS9RmUIFDw8EMEwZAwcGBQUEBgUCATEvESUMCQsMKicBAgECAwMDBQECBgYCK1IBPI9N//8AAAAIAAD/wAPRA18APQBEAE0AUgBkAHAAeQCCAAABNgUeAQcXFgYHBgcGBxUGBwYmLwEGBwYnBwYiLwEGJyYnJi8BJi8BJjY3JyY0PwEnJjcxNjcnLgE3Njc2FwEjBgcXNzYFFRcWMxY3JwY3Bxc3JwEmBA8BHwE3PgE/ATY3PgEnNQUeARcOAQcuASc+ARcOARQWMjY0JiUHBg8BFzIXNgFz4gFeDRABAQEFBxVGMUcjoQ0YAxAuMgcIIgkYCRExQhwYCgcLBQQCFRUpAgkIHwUMBhUXag4OBT3fCwkBNwE3Qg0CS/4HBBEUKR5PNE8JjghJAoLw/qNtAmRbApPNPgJBEwYFAf7RNkgBAUg2NUgBAUg1HCYmOSUl/rQBejEBUAMEKAJ+4RcBEg0UJk0rg3dRRAbfPQUODmgUEAMBIgkIEi8BAQcDAwUDCAMyWiUDCRcJIAUOEjMtEQMYDaAkAQX+LikhUgEuGgEBBQEdTyx4CY4JRwKDCPb/BGhXATSeZQVteCZEIgKlAkc2NkcBAUc2Nkc6ASU5JiY5JQ4BH1ACDQJHAAAAABIA3gABAAAAAAAAABUAAAABAAAAAAABAAgAFQABAAAAAAACAAcAHQABAAAAAAADAAgAJAABAAAAAAAEAAgALAABAAAAAAAFAAsANAABAAAAAAAGAAgAPwABAAAAAAAKACsARwABAAAAAAALABMAcgADAAEECQAAACoAhQADAAEECQABABAArwADAAEECQACAA4AvwADAAEECQADABAAzQADAAEECQAEABAA3QADAAEECQAFABYA7QADAAEECQAGABABAwADAAEECQAKAFYBEwADAAEECQALACYBaQpDcmVhdGVkIGJ5IGljb25mb250Cmljb25mb250UmVndWxhcmljb25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAgEDAQQBBQAHc2V0dGluZwh6aG9uZ3poaQdodW9qaWFuAAAAAA==";
    },
    function(e, t, n) {
        "use strict";
        t.a =
            "data:font/woff;base64,d09GRgABAAAAAAegAAsAAAAACuQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8fUlKY21hcAAAAYAAAABhAAABnLSHHfpnbHlmAAAB5AAAA68AAASgVJbFr2hlYWQAAAWUAAAALwAAADYbRAwIaGhlYQAABcQAAAAdAAAAJAjVBHxobXR4AAAF5AAAABAAAAAQEPcAAGxvY2EAAAX0AAAACgAAAAoDDAF+bWF4cAAABgAAAAAfAAAAIAEWAI9uYW1lAAAGIAAAAUUAAAJtPlT+fXBvc3QAAAdoAAAANQAAAEYyoIw9eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BksWOcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT6XZG7438AQw9zI0AQUZgTJAQDztAxDeJztkLsNgDAMRJ/zQQixQDZIQYkYiIrJwxjBdigYgrOeZZ8sFwdkICqbkkAuBNOprrgfWdxPHLrPWgFabvUuvX8nl/jF7FOwzzLxa/W+v1u01AaWcasDy/UuA+IDALcSRgAAAHicbVNPb9xEFJ8345mxd22P7bXXm6TZDbtdO9vsev/bDZBESQMpSpdkF6pKICUCJSFEVCAhREAQmlbiRjlwoRcEQlUluPIB+AIc+gkq+AScyoldxht6As/4+T17nsf+/UEYockZeUrO0XvoFKFqEMrBOOMmyMDCID3DCIfRtJ4+jpM4WYV+HMRBEwJZxH7ez8t7eA1WoZu/qNOxBtOUCTBBXryijH5x+iZeXYUkglDuUwTykWfWG9ziC0XKIcNIaW+/qKgcFuYFNVm/5+QyUZQldr2uUCA0q+8URKdtzMQJE0wUi2CBLfb254mqgjM/aznvzIlWSyPWLU5BHpQuNQTRWm3KxmeDI4IPBoMjDEcFlTo2BkV4xGBxUkrXFpPYsRyVYOx6Knd2dm3HKF8mOhOlkquu2DM3b/qZvIcxUXPCet8yZM98EruqkctqNX3utZFwsptMz9gVmxlKpZx1rNdHnP4Eh9uvyq0PBzeOEJG4f6H8Re6gTfQZ+lwib0KYwvmfGUG/G5Kumy/B/0w/Dd1OSoikCHrPev7txkFYKadkStTlEr/zrMu/6C+CV/GTCjm+ev6S45imYRuGLgSzLRzXsWHQqH1y59Fxq4G1DBeC9NdJLqfZtiUsV6GmyMzODX9esUHLLoEZRTir48W3l7mTMyx77ornasNv1/OQUSu55Pya6+jCMoRJFdsib21Aq3vy5aN3G4s1CaBEkxCFUpoyWGqAKfgLX23/PUHDB9cUQ9cci/SrOKNSxpgiNQAYMOlfdaoZnUBz+GCDCqG0bswQzihVGMXQbtpVXcvqV8LpWkIoYMbw0ghe/HowmSCEVMnBr+Qx2UcrkoUBGqED9AH6BN1FCGIqZSolO5Wqlyq/CakfOCvLJHXBBcJxEga9NUld0pZpBFM3QIVxP4mp5+elG0KWyCqEQBFQSlmQrkjp6sstfCl/aYLVNHHznbgXVLl0i9/xY/jwD9gzrFS83Hu5vVX5wSgQK+pwtawVNLu9camQ4VmqYM+rYU0tUZ15/olp0pUnWQ0SSDYMvD3miu3Wiju9He2++gq+++f4x9v44E38zW+reD3HKIwfx9cBrsf9NPYvBcFytTr+BT5twy5RFvHZ7z44hhsMlu59PNxkT1aoaR67FoGypjpNAC5hJSrpvFElmq8tUNPpNmxSML6/DHQc1Z4bQTQrfwDmd+qn2n1tC99Tn06U41vQ++6Q3j4NNsv4Id6K4y2AND4P1eX0E0wo7WIDb6F/AHQqoOoAeJxjYGRgYABimYOCNvH8Nl8ZuFkYQOD2tCdsCPp/Hct35kYgl4OBCSQKABcZCpcAeJxjYGRgYG7438AQw/KdAQiAJCMDKmABAHF+BFsAAAAEAAAABAAAAAT3AAAEAAAAAAAAAAC8AX4CUAAAeJxjYGRgYGBhaGbgYAABJiDmAkIGhv9gPgMAFjkBpgB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBvTi1pCQzL52jKiM/L70qI5M9ozQ/KzMxj4EBAJBPCZYAAAA=";
    },
    function(e, t, n) {
        "use strict";
        t.a =
            "data:font/ttf;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzI8fUlKAAABfAAAAFZjbWFwtIcd+gAAAeQAAAGcZ2x5ZlSWxa8AAAOMAAAEoGhlYWQbRAwIAAAA4AAAADZoaGVhCNUEfAAAALwAAAAkaG10eBD3AAAAAAHUAAAAEGxvY2EDDAF+AAADgAAAAAptYXhwARYAjwAAARgAAAAgbmFtZT5U/n0AAAgsAAACbXBvc3QyoIw9AAAKnAAAAEYAAQAAA4D/gABcBPcAAAAABPcAAQAAAAAAAAAAAAAAAAAAAAQAAQAAAAEAABzBETxfDzz1AAsEAAAAAADbluQGAAAAANuW5AYAAP9+BPcDgQAAAAgAAgAAAAAAAAABAAAABACDAAgAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQQ+AZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5gXnGQOA/4AAXAOBAIIAAAABAAAAAAAABAAAAAQAAAAE9wAABAAAAAAAAAUAAAADAAAALAAAAAQAAAFoAAEAAAAAAGIAAwABAAAALAADAAoAAAFoAAQANgAAAAgACAACAADmBeYo5xn//wAA5gXmKOcZ//8AAAAAAAAAAQAIAAgACAAAAAEAAgADAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAA0AAAAAAAAAAMAAOYFAADmBQAAAAEAAOYoAADmKAAAAAIAAOcZAADnGQAAAAMAAAAAALwBfgJQAAAAAgAA/34D9gOBAGwAeAAAJSYnJicmBgcGBw4BBwYHBicmBwYnJicuAicuAQcGBwYmJyYnJjY3Njc+ATU2JjYmLwEmNzY3NhcWFxY2Nz4CPwE+ATMWNzYXFhcWFxYXFj8BNhcWFxYGDwEOARcWBhUeARcWFx4BBwYHBgclPgE3LgEnDgEHHgEDdRUOLC0HEAcgHgUHAQoGAx9eXx4ECAcBIB0PBQ4GNTQSEwouLgsDESwsBAUBAwULDE8YDzIxDRk2NwYPBg8eHgEQAREPXl8dAwgIARIdGhASZxsPMDAJAxBXBwUBAQEBBQUrLQ8DCTAxBQb+fk1mAwJkTU1mAgFmGAgFEhECAQQPFQMNBjY3HwEBAQEeNzYSEBIIAwICFBUIBxJPUBESDSIkAwwGDx8fFAg9ERlVVRcKFhUCAgMIEw8QbxANAQEBHTc2FAgNEwsJKQwbU1IPEgtEBgwKESMRBg0EIyILEhBUUgcFqgFlS05mAwJlTUxmAAMAAP9/BPcDgABEAHwAfQAAJQ4BJyYvASYvASYvASYvASYvASYvASYvAS4BNTMnAzMUFh8BFh8BFh8BFh8BFh8BFh8BFh8BFhcWHwEWMzI2Nz4BJy4BATQmLwEmLwEuAS8BJi8BJi8CJicjIgYHDgEXHgE3PgEXMh8BFh8BFhcWFxYfARYfAR4BFSMXNyMDaDiBRRISDg4NEQ0NDA8PBhEQAjYsAg0NBS4xaoCnaDAtAgkKBw8PAzVBAxMTCREREA8QFAQFDg8KGhtRqz0RAQkLKwEOLi4CCwwCKGI5BxITDRARGyoVFAlRmEEWAQoIIxM3gUMUEgwPEA0PDgUEERADYUIBMDNqhqdpLSgpAQEBAgIDAwMEBQUFAwgIAR8tAQ4PBzuNS/3/AFGZQwQNDAkSEAM1JQIKCAUGBgYEBAUBAQIBAgM1OBIlCgwDAS9RmUIFDw8EMEwZAwcGBQUEBgUCATEvESUMCQsMKicBAgECAwMDBQECBgYCK1IBPI9N//8AAAAIAAD/wAPRA18APQBEAE0AUgBkAHAAeQCCAAABNgUeAQcXFgYHBgcGBxUGBwYmLwEGBwYnBwYiLwEGJyYnJi8BJi8BJjY3JyY0PwEnJjcxNjcnLgE3Njc2FwEjBgcXNzYFFRcWMxY3JwY3Bxc3JwEmBA8BHwE3PgE/ATY3PgEnNQUeARcOAQcuASc+ARcOARQWMjY0JiUHBg8BFzIXNgFz4gFeDRABAQEFBxVGMUcjoQ0YAxAuMgcIIgkYCRExQhwYCgcLBQQCFRUpAgkIHwUMBhUXag4OBT3fCwkBNwE3Qg0CS/4HBBEUKR5PNE8JjghJAoLw/qNtAmRbApPNPgJBEwYFAf7RNkgBAUg2NUgBAUg1HCYmOSUl/rQBejEBUAMEKAJ+4RcBEg0UJk0rg3dRRAbfPQUODmgUEAMBIgkIEi8BAQcDAwUDCAMyWiUDCRcJIAUOEjMtEQMYDaAkAQX+LikhUgEuGgEBBQEdTyx4CY4JRwKDCPb/BGhXATSeZQVteCZEIgKlAkc2NkcBAUc2Nkc6ASU5JiY5JQ4BH1ACDQJHAAAAABIA3gABAAAAAAAAABUAAAABAAAAAAABAAgAFQABAAAAAAACAAcAHQABAAAAAAADAAgAJAABAAAAAAAEAAgALAABAAAAAAAFAAsANAABAAAAAAAGAAgAPwABAAAAAAAKACsARwABAAAAAAALABMAcgADAAEECQAAACoAhQADAAEECQABABAArwADAAEECQACAA4AvwADAAEECQADABAAzQADAAEECQAEABAA3QADAAEECQAFABYA7QADAAEECQAGABABAwADAAEECQAKAFYBEwADAAEECQALACYBaQpDcmVhdGVkIGJ5IGljb25mb250Cmljb25mb250UmVndWxhcmljb25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAgEDAQQBBQAHc2V0dGluZwh6aG9uZ3poaQdodW9qaWFuAAAAAA==";
    },
    function(e, t, n) {
        "use strict";
        t.a =
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8IS0tDQoyMDEzLTktMzA6IENyZWF0ZWQuDQotLT4NCjxzdmc+DQo8bWV0YWRhdGE+DQpDcmVhdGVkIGJ5IGljb25mb250DQo8L21ldGFkYXRhPg0KPGRlZnM+DQoNCjxmb250IGlkPSJpY29uZm9udCIgaG9yaXotYWR2LXg9IjEwMjQiID4NCiAgPGZvbnQtZmFjZQ0KICAgIGZvbnQtZmFtaWx5PSJpY29uZm9udCINCiAgICBmb250LXdlaWdodD0iNTAwIg0KICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIg0KICAgIHVuaXRzLXBlci1lbT0iMTAyNCINCiAgICBhc2NlbnQ9Ijg5NiINCiAgICBkZXNjZW50PSItMTI4Ig0KICAvPg0KICAgIDxtaXNzaW5nLWdseXBoIC8+DQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9InNldHRpbmciIHVuaWNvZGU9IiYjNTg4ODU7IiBkPSJNODg1LjE5Njk1OCAyNC40NzE4NTVjLTE0Ljc1MzE0MSA1LjQ2NDEyNi0yNS4xMzQ5ODEgOC43NDI2MDItMzQuOTcwNDA4IDEyLjU2NzQ5LTMwLjA1MjY5NSAxMS40NzQ2NjUtNTkuMDEyNTY0IDI0LjU4ODU2OC04OS42MTE2NzEgMzQuOTcwNDA4LTguNzQyNjAyIDIuNzMyMDYzLTIxLjMxMDA5MyAxLjYzOTIzOC0yOS41MDYyODItMi43MzIwNjMtMjEuMzEwMDkzLTEwLjM4MTg0LTQyLjA3Mzc3My0yMi40MDI5MTgtNjEuNzQ0NjI3LTM2LjA2MzIzNC02LjU1Njk1Mi00LjM3MTMwMS0xMi4wMjEwNzgtMTQuMjA2NzI4LTEzLjY2MDMxNi0yMi40MDI5MTgtNi41NTY5NTItMzYuMDYzMjM0LTExLjQ3NDY2NS03Mi42NzI4OC0xNS44NDU5NjYtMTA5LjI4MjUyNi0yLjczMjA2My0yMC43NjM2OC0xMi41Njc0OS0zMC4wNTI2OTUtMzMuODc3NTgzLTI5LjUwNjI4Mi02Mi44Mzc0NTIgMC41NDY0MTMtMTI1LjY3NDkwNSAwLjU0NjQxMy0xODguNTEyMzU3IDAtMjAuNzYzNjggMC0zMS42OTE5MzMgOC4xOTYxODktMzQuNDIzOTk2IDI4Ljk1OTg2OS00LjkxNzcxNCAzNi42MDk2NDYtMTAuOTI4MjUzIDcyLjY3Mjg4LTE1LjI5OTU1NCAxMDkuMjgyNTI2LTEuNjM5MjM4IDEyLjU2NzQ5LTYuMDEwNTM5IDIwLjIxNzI2Ny0xOC4wMzE2MTcgMjYuMjI3ODA2LTIwLjIxNzI2NyA5LjgzNTQyNy0zOC4yNDg4ODQgMjMuNDk1NzQzLTU4LjQ2NjE1MSAzMy4zMzExNy03LjEwMzM2NCAzLjgyNDg4OC0xOC4wMzE2MTcgNS40NjQxMjYtMjUuNjgxMzk0IDIuNzMyMDYzLTM1LjUxNjgyMS0xMi41Njc0OS02OS45NDA4MTctMjYuNzc0MjE5LTEwNC45MTEyMjUtNDAuNDM0NTM1LTI1LjEzNDk4MS05LjgzNTQyNy0zMi4yMzgzNDUtNy42NDk3NzctNDYuNDQ1MDc0IDE2LjM5MjM3OS0zMS4xNDU1MiA1My4wMDIwMjUtNjEuNzQ0NjI3IDEwNi4wMDQwNS05Mi4zNDM3MzUgMTU5LjAwNjA3NS0xNC4yMDY3MjggMjQuNTg4NTY4LTEzLjY2MDMxNiAzMC41OTkxMDcgOC43NDI2MDIgNDguMDg0MzExIDI5LjUwNjI4MiAyMy40OTU3NDMgNTkuNTU4OTc3IDQ1Ljg5ODY2MSA4OC41MTg4NDYgNjkuOTQwODE3IDUuNDY0MTI2IDQuMzcxMzAxIDkuMjg5MDE1IDE0LjIwNjcyOCA5LjI4OTAxNSAyMS4zMTAwOTMgMS4wOTI4MjUgMjAuMjE3MjY3LTMuMjc4NDc2IDQxLjUyNzM2IDAgNjEuMTk4MjE1IDMuODI0ODg4IDIxLjMxMDA5My00LjkxNzcxNCAzMi4yMzgzNDUtMjAuMjE3MjY3IDQzLjcxMzAxLTI3LjMyMDYzMiAxOS42NzA4NTUtNTIuNDU1NjEzIDQxLjUyNzM2LTc5LjIyOTgzMSA2MS4xOTgyMTUtMTUuODQ1OTY2IDEyLjAyMTA3OC0xOS42NzA4NTUgMjQuNTg4NTY4LTkuMjg5MDE1IDQyLjA3Mzc3MyAzMy4zMzExNyA1Ni4yODA1MDEgNjYuMTE1OTI4IDExMy4xMDc0MTQgOTguOTAwNjg2IDE2OS45MzQzMjggOS4yODkwMTUgMTUuODQ1OTY2IDIxLjMxMDA5MyAxOS4xMjQ0NDIgMzguMjQ4ODg0IDEyLjU2NzQ5IDM2LjA2MzIzNC0xNC4yMDY3MjggNzIuMTI2NDY3LTI4Ljk1OTg2OSAxMDguNzM2MTEzLTQyLjA3Mzc3MyA3LjY0OTc3Ny0yLjczMjA2MyAxOS42NzA4NTUtMS4wOTI4MjUgMjcuMzIwNjMyIDIuNzMyMDYzIDIwLjc2MzY4IDEwLjM4MTg0IDM5LjM0MTcwOSAyNC4wNDIxNTYgNjAuMTA1Mzg5IDM0LjQyMzk5NiAxMC45MjgyNTMgNS40NjQxMjYgMTQuNzUzMTQxIDEyLjAyMTA3OCAxNS44NDU5NjYgMjIuOTQ5MzMgNC45MTc3MTQgMzcuMTU2MDU5IDEwLjkyODI1MyA3NC4zMTIxMTggMTUuODQ1OTY2IDExMS40NjgxNzdDMzg2LjMyMjIyNiA4ODguMzUwMjIzIDM5Ny43OTY4OTIgODk2IDQxOC4wMTQxNTkgODk2YzYyLjgzNzQ1Mi0wLjU0NjQxMyAxMjUuNjc0OTA1LTAuNTQ2NDEzIDE4OC41MTIzNTcgMCAxOS42NzA4NTUgMCAzMC41OTkxMDctOC4xOTYxODkgMzIuNzg0NzU4LTI3Ljg2NzA0NCA0LjkxNzcxNC0zNi42MDk2NDYgMTAuOTI4MjUzLTcyLjY3Mjg4IDE1LjI5OTU1NC0xMDkuMjgyNTI2IDEuNjM5MjM4LTEzLjY2MDMxNiA2LjU1Njk1Mi0yMS44NTY1MDUgMTkuNjcwODU1LTI3Ljg2NzA0NCAxOS4xMjQ0NDItOC43NDI2MDIgMzcuMTU2MDU5LTE5LjY3MDg1NSA1NC42NDEyNjMtMzEuNjkxOTMzIDExLjQ3NDY2NS04LjE5NjE4OSAyMS4zMTAwOTMtOC4xOTYxODkgMzMuODc3NTgzLTIuNzMyMDYzIDMzLjg3NzU4MyAxNC4yMDY3MjggNjguMzAxNTc5IDI2Ljc3NDIxOSAxMDIuNzI1NTc1IDQwLjk4MDk0NyAxOS4xMjQ0NDIgNy42NDk3NzcgMzIuMjM4MzQ1IDMuODI0ODg4IDQyLjYyMDE4NS0xNC43NTMxNDEgMzEuMTQ1NTItNTUuMTg3Njc2IDYzLjkzMDI3OC0xMDkuODI4OTM5IDk1LjYyMjIxLTE2NC40NzAyMDIgMTIuNTY3NDktMjEuODU2NTA1IDEwLjkyODI1My0yOC45NTk4NjktOS4yODkwMTUtNDQuODA1ODM2LTI4Ljk1OTg2OS0yMi40MDI5MTgtNTcuOTE5NzM5LTQ1LjM1MjI0OC04Ny40MjYwMjEtNjcuNzU1MTY2LTkuODM1NDI3LTcuNjQ5Nzc3LTEyLjU2NzQ5LTE0Ljc1MzE0MS0xMS40NzQ2NjUtMjcuMzIwNjMyIDIuMTg1NjUxLTIyLjk0OTMzLTAuNTQ2NDEzLTQ2LjQ0NTA3NCAwLjU0NjQxMy02OS4zOTQ0MDQgMC41NDY0MTMtOC4xOTYxODkgNC4zNzEzMDEtMTguMDMxNjE3IDEwLjM4MTg0LTIyLjk0OTMzIDI4Ljk1OTg2OS0yNC4wNDIxNTYgNTkuMDEyNTY0LTQ2LjQ0NTA3NCA4OC41MTg4NDYtNjkuMzk0NDA0IDIwLjIxNzI2Ny0xNS44NDU5NjYgMjEuMzEwMDkzLTIyLjk0OTMzIDguNzQyNjAyLTQ0LjgwNTgzNi0zMi4yMzgzNDUtNTUuNzM0MDg4LTY0LjQ3NjY5LTExMC45MjE3NjQtOTcuMjYxNDQ4LTE2Ni4xMDk0NEM5MDEuMDQyOTI0IDM1Ljk0NjUyIDg5MS43NTM5MDkgMzAuNDgyMzk0IDg4NS4xOTY5NTggMjQuNDcxODU1ek01MTAuMzU3ODkzIDIwMy42OTUxOTdjOTguOTAwNjg2LTAuNTQ2NDEzIDE4MC44NjI1ODEgNzkuNzc2MjQ0IDE4MS40MDg5OTMgMTc3LjU4NDEwNSAwLjU0NjQxMyAxMDAuNTM5OTI0LTc5LjIyOTgzMSAxODEuOTU1NDA2LTE3OC42NzY5MyAxODIuNTAxODE5LTk5LjQ0NzA5OSAwLjU0NjQxMy0xODEuNDA4OTkzLTgwLjMyMjY1Ny0xODEuNDA4OTkzLTE3OS43Njk3NTVDMzMxLjEzNDU1MSAyODUuNjU3MDkyIDQxMi4wMDM2MiAyMDQuMjQxNjEgNTEwLjM1Nzg5MyAyMDMuNjk1MTk3eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPg0KDQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9Inpob25nemhpIiB1bmljb2RlPSImIzU4OTIwOyIgZD0iTTg3MS45NzA5OSA0NS4xMDg4NDJhNDI1Ljk2Njg2MiA0MjUuOTY2ODYyIDAgMCAwLTI1NC4xMTQ4MTEtNzkuODIwNTg1Yy0xMS45Mzk1MjYgMC4xNTcwOTktMjMuNzM2MjM0IDEuMDg1NDExLTM1LjUxODY2MiAyLjAxMzcyMy00LjgxMjk0MyAwLjQ1NzAxNS05LjQ1NDUwNSAxLjIyODIyOS0xNC4yODE3MjkgMS45OTk0NDMtOS4zMTE2ODggMS4yMjgyMjktMTguNDY2Mjc2IDIuMzEzNjQtMjcuNDYzNzY2IDQuMjg0NTE4LTUuNTg0MTU2IDAuOTI4MzEyLTExLjE2ODMxMiAyLjYxMzU1Ni0xNi40NTI1NTIgMy44NTYwNjctOC44NDAzOTEgMS45OTk0NDItMTcuNjgwNzgxIDQuMDEzMTY2LTI2LjIyMTI1NSA2LjYyNjcyMy00LjA0MTcyOSAxLjU0MjQyNy03LjkxMjA3OCAyLjg1NjM0Ni0xMi4xMTA5MDcgNC42MTI5OTgtMTAuMDgyOTAxIDMuMjQxOTUzLTE5Ljk5NDQyMSA2Ljc4MzgyMS0yOS40Nzc0ODkgMTAuNzgyNzA2LTIuMTcwODIzIDAuOTI4MzEyLTQuMjg0NTE5IDEuODU2NjI1LTYuMzU1MzcgMi42MTM1NTctMTEuMTY4MzEyIDUuMjQxMzk1LTIyLjM1MDkwNyAxMC42MjU2MDctMzMuMDQ3OTIyIDE2LjMzODI5OC0wLjQ1NzAxNSAwLjMxNDE5OC0wLjkyODMxMiAwLjQ1NzAxNS0xLjQyODE3MyAwLjc3MTIxM2E0MzUuNTkyNzQ4IDQzNS41OTI3NDggMCAwIDAtOTguODE1Mjg2IDc1LjQ5MzIyMmMtMC40NTcwMTUgMC40NzEyOTctMC45MjgzMTIgMS4wODU0MTEtMS40MjgxNzMgMS41NDI0MjctOC45OTc0OSA5LjI0MDI3OS0xNy42ODA3ODEgMTguNzk0NzU2LTI1LjkwNzA1NyAyOS4xMjA0NDYtMS43MTM4MDggMi4xNTY1NDEtMy4yNTYyMzQgNC4xNTU5ODMtNS4xMjcxNDEgNi42MjY3MjNhNDQ1Ljc2MTMzOSA0NDUuNzYxMzM5IDAgMCAwLTk0Ljk0NDkzNyAyNzUuNDgwMjc5aDEwNS4zNTYzMThsLTEyNy4zNzg3NDUgMjUyLjA4NjgwNkwwIDQwNC4yNTE0OTJoMTA0LjM1NjU5N2E1MzYuMDY0NzE0IDUzNi4wNjQ3MTQgMCAwIDEgOTIuNTc0MTctMzAxLjQ0NDQ2MyAyMi41NjUxMzIgMjIuNTY1MTMyIDAgMCAxIDEuOTg1MTYtMy42NTYxMjJjNS45Njk3NjMtOC44Njg5NTQgMTIuODUzNTU2LTE2Ljg5NTI4NiAxOS4xNjYwODEtMjUuMDUwMTU0IDIuNTU2NDMtMi45NTYzMTggNC42ODQ0MDctNi4wNDExNzIgNy4yNDA4MzctOS40MjU5NDEgOS4zNjg4MTUtMTEuNTM5NjM3IDE5LjczNzM1LTIyLjY1MDgyMyAyOS45OTE2MzItMzMuNDkwNjU2IDEuMTQyNTM4LTEuMTI4MjU3IDEuOTg1MTYtMS45NzA4NzkgMi44NTYzNDYtMi45NTYzMThBNTIyLjYxMTMyNSA1MjIuNjExMzI1IDAgMCAxIDM3NS42MDk0ODQtNjEuNTYxMzk1YzEuMTI4MjU3LTAuNzE0MDg2IDIuMTI3OTc4LTEuMTI4MjU3IDMuMzk5MDUyLTEuOTcwODc4IDEyLjM1MzY5Ni02Ljc1NTI1OCAyNS4xMzU4NDQtMTMuMDk2MzQ2IDM3LjkwMzcwOS0xOC43MjMzNDggMy4yNzA1MTYtMS40MjgxNzMgNi4zOTgyMTUtMi45NTYzMTggOS41MTE2MzItNC4yODQ1MTggMTEuMDgyNjIyLTQuNzg0Mzc5IDIyLjQzNjU5Ny04LjcyNjEzNyAzMy44MDQ4NTQtMTIuODUzNTU3IDUuMzk4NDk0LTEuOTcwODc5IDEwLjY1NDE3LTMuNjU2MTIzIDE2LjE4MTE5OS01LjQ4NDE4NCA5Ljk5NzIxMS0yLjk1NjMxOCAyMC4xNjU4MDItNS40ODQxODQgMzAuNTM0MzM4LTcuODgzNTE1IDYuODEyMzg1LTEuNjg1MjQ0IDEzLjQ4MTk1My0zLjM3MDQ4OCAyMC40MzcxNTUtNC43ODQzNzlhNjAuMzk3NDM0IDYwLjM5NzQzNCAwIDAgMSA4LjM2OTA5My0xLjk3MDg3OWM5Ljc5NzI2Ni0xLjgyODA2MSAxOS40NTE3MTUtMi42NzA2ODMgMjkuMTA2MTY1LTMuOTQxNzU3IDMuNTU2MTUxLTAuNzE0MDg2IDcuMTQwODY1LTEuMjcxMDc0IDEwLjUxMTM1Mi0xLjY4NTI0NCAxNy40NjY1NTUtMS42ODUyNDQgMzQuNzkwMjkzLTIuODU2MzQ2IDUyLjI1Njg0OC0yLjg1NjM0NiAxMDYuMDU2MTIzIDAgMjM0LjM2MzE4IDMzLjkzMzM4OSAzMTMuNzI2NzUxIDEwOC44NDEwNiAyMy43MjE5NTMgMjIuNTIyMjg3IDE5LjEwODk1NCA1My4zNzA4MjMgOC44MjYxMDkgNjQuNzEwNTE2LTE0LjAzODk0IDE1LjcwOTkwMi00Ny4xMjk3MDcgMjEuNzUxMDc0LTc4LjE2MzkwNi0wLjU5OTgzM3ogbTI5NC4zMDM1OTkgMzE4Ljc2ODIwMUE1MzMuOTUxMDE4IDUzMy45NTEwMTggMCAwIDEgMTA3NC40MTQ1MDUgNjY0LjQ2NDYwM2MtMC44NTY5MDQgMS40MjgxNzMtMS40MjgxNzMgMi45NTYzMTgtMi4xMjc5NzggNC4yODQ1MTgtNy41MjY0NzEgMTAuNTU0MTk4LTE1LjE5NTc2IDIwLjI2NTc3NC0yMy4wMDc4NjYgMzAuMjQ4NzAzYTMzLjU5MDYyOCAzMy41OTA2MjggMCAwIDAtMi41NTY0MjkgMy42NTYxMjMgNTI0LjczOTMwMyA1MjQuNzM5MzAzIDAgMCAxLTE5NS4wODg0MjQgMTQ5LjE3MjY2NGMtMi4yNzA3OTUgMC44NDI2MjItNC4xMTMxMzggMS45NzA4NzktNi4zOTgyMTUgMi44NTYzNDYtMTIuMDY4MDYxIDUuMDcwMDE0LTI0LjQyMTc1NyA5LjQ0MDIyMy0zNi45MTgyNzEgMTMuNzk2MTUtNC4yODQ1MTkgMS40MjgxNzMtOC44MTE4MjcgMy4wOTkxMzUtMTMuMjEwNiA0LjUxMzAyNy0xMC45Mzk4MDUgMy4zNzA0ODgtMjEuNzIyNTEgNi4wNDExNzItMzIuODQ3OTc3IDguNzI2MTM3LTYuMTEyNTggMS40MjgxNzMtMTIuMzUzNjk2IDIuOTU2MzE4LTE4LjQ1MTk5NSA0LjI4NDUxOC0yLjk4NDg4MSAwLjU3MTI2OS01LjgyNjk0NiAxLjQyODE3My04Ljk1NDY0NCAyLjExMzY5Ni04LjIyNjI3NiAxLjQyODE3My0xNi4zMjQwMTcgMi4xMTM2OTYtMjQuNzA3MzkyIDMuMjQxOTUzLTUuODI2OTQ2IDAuNzE0MDg2LTExLjQyNTM4NCAxLjU0MjQyNy0xNy4wMzgxMDMgMi4xMTM2OTYtMTMuOTEwNDA0IDEuNDI4MTczLTI3LjY3Nzk5MiAxLjk3MDg3OS00MS40MTcwMTUgMi4xMTM2OTYtMi41NTY0MyAwLTQuOTcwMDQyIDAuNDE0MTctNy41MjY0NzIgMC40MTQxNy0wLjQyODQ1MiAwLTAuODU2OTA0LTAuMTQyODE3LTEuMjg1MzU2LTAuMTQyODE3YTUxMS44MDAwNTYgNTExLjgwMDA1NiAwIDAgMS0yOTguMTczOTQ3LTk2LjExNjAzOWMtMjkuNDc3NDktMjAuOTc5ODYxLTI1LjUyMTQ1LTUwLjU4NTg4Ni0xMi4zMzk0MTQtNjUuNTI0NTc1IDkuMzY4ODE1LTEwLjYxMTMyNSAzNy45NjA4MzctMjUuNTkyODU5IDYxLjE0MDA4NC03LjkxMjA3OCA3My4yNzk1NTQgNTUuNDk4ODAxIDE2Mi4yNjkwMSA4MC41Nzc1MTcgMjUxLjc4Njg5IDc5LjgwNjMwNCAxMi44NTM1NTYtMC4xNTcwOTkgMjUuNzA3MTEzLTAuNzcxMjEzIDM4LjE2MDc4MS0xLjk5OTQ0MiAzLjg4NDYzLTAuMzE0MTk4IDcuNTk3ODgtMC45MjgzMTIgMTEuNDI1MzgzLTEuNTQyNDI3YTMwMy43MTUyNTggMzAzLjcxNTI1OCAwIDAgMCAzMC43Mi00LjkyNzE5N2M0LjI4NDUxOS0wLjc3MTIxMyA4Ljg1NDY3Mi0xLjk5OTQ0MiAxMy4wMzkyMTktMi44NTYzNDUgMTAuMDgyOTAxLTIuMzEzNjQgMTkuNzA4Nzg3LTQuNjI3MjggMjkuMzIwMzkxLTcuNjk3ODUzYTY4LjkzNzkwOCA2OC45Mzc5MDggMCAwIDAgOC45OTc0ODktMy4yMjc2N2MxMS4xNjgzMTItMy42OTg5NjggMjIuMDM2NzA5LTcuNTU1MDM1IDMyLjU3NjYyNS0xMi4xNjgwMzQgMS4yNDI1MS0wLjMxNDE5OCAyLjE3MDgyMy0xLjIyODIyOSAzLjI1NjIzNC0xLjU0MjQyN2E0MzUuNzQ5ODQ3IDQzNS43NDk4NDcgMCAwIDAgMTYzLjY2ODYyLTEyNS4xMDc5NSA5LjU2ODc1OSA5LjU2ODc1OSAwIDAgMSAwLjYyODM5Ni0wLjkyODMxMiA0NDYuNDMyNTggNDQ2LjQzMjU4IDAgMCAwIDk4LjU0MzkzMy0yODAuNDA3NDc2SDk3MC4xNTc4OGwxMzMuNjQ4NDI0LTI1NS4wMDAyNzggMTY2Ljk2NzY5OSAyNTUuMTU3Mzc4eiBtMCAwIiAgaG9yaXotYWR2LXg9IjEyNzEiIC8+DQoNCiAgICANCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iaHVvamlhbiIgdW5pY29kZT0iJiM1OTE2MTsiIGQ9Ik0zNzEuNDU0IDYzNy45MjdjMTUwLjM2MiAxNDkuNTYyIDM0Mi43IDIxNy4zMjggNTc1Ljc4NCAyMDEuOTM1IDE2LjYzNC0xLjA5OSAyOS4wNjEtMTUuNTUzIDI3Ljg1Mi0zMi4wMDRsLTAuMDMzLTAuMzggMC4wMDItMS4xODcgMC4wMzItMS43NyAwLjUwMy0xNi4xNjVjMS40NjYtNTEuOTQtMC44MDEtMTAwLjQ2Ni0xMC42OTgtMTU4LjczNy0xNC42OTItODYuNS00My44NjQtMTcwLjY4LTkxLjItMjQ5LjcyOS0zMi4zMzMtNTMuOTk1LTcyLjA4LTEwMy44NDUtMTE5LjY5LTE0OS4wMTNhMzAuMTE2IDMwLjExNiAwIDAgMC0wLjM2Mi01LjU4NGMtMjMuNDMzLTE0Ny43Ny04OC41MzMtMjQ0LjEtMTk1LjQxOC0yODQuMzU3LTE3LjUyNi02LjYwMS0zNi42NzMgNC4zNTEtMzkuOTY0IDIyLjY3OWwtMC4xMSAwLjY1Ny0xNi4zMzUgMTAzLjgzM2MtMzAuNDUtMTMuMjEyLTYyLjQ2OC0yNS40Mi05Ni4wOTEtMzYuNThhMjkuODcgMjkuODcgMCAwIDAtMTQuNDYtMS4wOTRsLTM0LjYxMi0zNC42MTNjLTExLjUxMi0xMS41MTEtMzAuMDcyLTExLjY3Ni00MS43ODMtMC40OTVsLTAuNTA1IDAuNDkzLTE2LjczNCAxNi43MzNjLTMxLjc0NS0zMS4yNTgtNzEuMzk5LTQ1LjM0OS0xMTQuMzItNDUuMTYtMTguNDk0IDAuMDgyLTM2LjQ4IDIuODc3LTUyLjY0NyA3LjQ3NS02LjM2IDEuODEtMTIuMTk1IDMuODQzLTE3LjAwOCA1Ljg4Mi0yLjQzNyAxLjAzMi00LjYzNiAyLjA3NS02LjU3NCAzLjE0M2wtMS4yODggMC43MTctMS4xOTcgMC42ODYtMS4xMTMgMC42NjljLTQuMyAyLjY1My02Ljc5NyA1LjE2MS05Ljg0NSAxMS4wMzhsLTAuODIgMS42MjItMC4zOCAwLjg5N2MtMjguMzcyIDY2Ljk4My0xMy41OTQgMTI3LjkwNCA0MSAxNzcuMjIzbC0yLjg1MiAyLjg1M2MtMTEuNTEgMTEuNTEtMTEuNjc0IDMwLjA3LTAuNDkxIDQxLjc4M2wwLjQ5MyAwLjUwNSAzMC44MDkgMzAuODEtNS4wNjIgNS4yNmEyOS45MDYgMjkuOTA2IDAgMCAwLTYuMjkgMzEuNjY2bDAuMTcyIDAuNDI4YzEzLjgyMSAzMy42NzQgMjguNDQ4IDY1LjgyIDQzLjg3OCA5Ni40MzZMODguMjU1IDQwMy4xMmwtMC42NTggMC4xMWMtMTguMzI4IDMuMjkxLTI5LjI4IDIyLjQzOS0yMi42OCAzOS45NjRDMTA1LjE3NiA1NTAuMDggMjAxLjUwNiA2MTUuMTggMzQ5LjI3NiA2MzguNjEzYTI5Ljc4IDI5Ljc4IDAgMCAwIDE5LjM5Mi0zLjQ5NnogbTMwOC43MjMtNDY4LjYzOGwtMC43MDctMC41MTdjLTM2LjgyNy0yNi45NzktNzcuMjM3LTUxLjc2Ny0xMjEuMzY0LTc0LjIwNiAwLjExNS0wLjUgMC4yMi0xLjAwOSAwLjMxNC0xLjUyMmwwLjEyLTAuNzA2TDU3MSAxMy4xMjNsMi4wNDkgMS4yM2M0OS45OTEgMzAuNDg4IDg1LjcxMiA4MS42NzYgMTA3LjEyNyAxNTQuOTM2ek0xNDMuMTkgMzQuMzg4bDAuMzA3LTAuOTM2IDAuODEyLTAuMjU1IDEuNzg4LTAuNTQgMC45MjYtMC4yNjdjMTEuMTYzLTMuMTc1IDIzLjc5NS01LjEzNyAzNi41NTMtNS4xOTQgMjcuNTM2LTAuMTIxIDUxLjc3MyA4LjIyOSA3MS43NTIgMjcuNjU4bC03OS41NzIgNzkuNTdjLTM0LjgtMzAuMDU0LTQ0LjgwOS02MS45OTMtMzIuNTY2LTEwMC4wMzZ6IG01OS42ODQgMTc1LjIxbC04Ljg1NC04Ljg1NUwzMzUuNTE0IDU5LjI1bDguODI5IDguODMtOC45NDkgOC41NTctMjMuNDg1IDIyLjU4NS0xNS41NDUgMTUuMDA5LTI0Ljg3OCAyNC4xYTI5LjkwNCAyOS45MDQgMCAwIDAtMC43MiAwLjcyM2wtNjcuODkyIDcwLjU0NHogbTcwOS44MSA1NzIuMTA4Yy0zMjAuMzIgMTAuNTg5LTU1MS41ODItMTUyLjA2NC02OTguMDEtNDkyLjYyNmwtMS42MjItMy44MTRMMzEzLjQ3NSAxODAuOTJsMy45Ni0zLjg0NCAyNC45NTMtMjQuMTU4IDIyLjk5Ni0yMi4xNjggMjEuMDM5LTIwLjE3OCAxNy4zNDItMTYuNTM2IDEuODIzIDAuNjNjMTk3LjQ4IDY5LjI0MyAzMzEuNzkzIDE3Ni40MTMgNDE0LjI0NSAzMTEuNzE1bDIuNTYgNC4yMzdjNDMuMjkgNzIuMjkgNzAuMDM3IDE0OS40NzggODMuNTQ3IDIyOS4wMTYgOC43NTEgNTEuNTI1IDExLjA0OCA5NC44MjQgMTAuMDMzIDE0MC44MzVsLTAuMDI2IDEuMTF6IG0tMjk5LjIxLTE2NC45NDhjNjkuODY0IDAgMTI2LjUtNTYuNjQyIDEyNi41LTEyNi41MTUgMC02OS44NzItNTYuNjM2LTEyNi41MTUtMTI2LjUtMTI2LjUxNS02OS44NjUgMC0xMjYuNTAxIDU2LjY0My0xMjYuNTAxIDEyNi41MTUgMCA2OS44NzMgNTYuNjM2IDEyNi41MTUgMTI2LjUgMTI2LjUxNXogbTAtNTkuODA3Yy0zNi44MzggMC02Ni43MDEtMjkuODY2LTY2LjcwMS02Ni43MDhzMjkuODYzLTY2LjcwOCA2Ni43LTY2LjcwOGMzNi44MzggMCA2Ni43MDEgMjkuODY2IDY2LjcwMSA2Ni43MDhzLTI5Ljg2MyA2Ni43MDgtNjYuNyA2Ni43MDh6IG0tMzAzLjExNiAxMi44MzVsLTEuMjI2LTAuMzE1Yy04MS43ODQtMjAuNzYzLTEzOC4xNTQtNTcuOTI4LTE3MC43OTctMTExLjQ1MmwtMS4yMjctMi4wNDkgNzkuMjEyLTEyLjQ2MSAwLjcwNi0wLjEyYTI5LjkxNiAyOS45MTYgMCAwIDAgNi41NS0xLjk4YzI2LjggNDYuODgzIDU1LjczMiA4OS42OCA4Ni43ODIgMTI4LjM3N3oiICBob3Jpei1hZHYteD0iMTAyNCIgLz4NCg0KICAgIA0KDQoNCiAgPC9mb250Pg0KPC9kZWZzPjwvc3ZnPg0K";
    },
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return autoRefresh;
        });
        var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                3,
            ),
            _src_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
            sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6),
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
                sweetalert2__WEBPACK_IMPORTED_MODULE_3__,
            );
        function autoRefresh() {
            return _autoRefresh.apply(this, arguments);
        }
        function _autoRefresh() {
            return (
                (_autoRefresh = Object(
                    _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a,
                )(
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                        function _callee() {
                            var time, buffer, generate_random_float, recur, status;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                                function _callee$(_context) {
                                    for (;;)
                                        switch ((_context.prev = _context.next)) {
                                            case 0:
                                                (recur = function() {
                                                    setTimeout(function() {
                                                        var e = top.document.querySelectorAll(
                                                                'a[onclick^="SelectSCO"]',
                                                            ),
                                                            t = top.document.querySelector(
                                                                "li.courseware_current a",
                                                            ),
                                                            n = top.document.querySelector(
                                                                '[href="javascript:NextSCO();"]',
                                                            );
                                                        console.error(n, t),
                                                            t == e[e.length - 1]
                                                                ? _src_global__WEBPACK_IMPORTED_MODULE_2__
                                                                      .c.USER_SETTINGS
                                                                      .loopRefresh && e[1].click()
                                                                : n.click(),
                                                            recur();
                                                    }, _src_global__WEBPACK_IMPORTED_MODULE_2__.c
                                                        .USER_SETTINGS.refreshIntervalMax *
                                                        generate_random_float() *
                                                        60 *
                                                        1e3);
                                                }),
                                                    (generate_random_float = function() {
                                                        var e = 1;
                                                        if (
                                                            _src_global__WEBPACK_IMPORTED_MODULE_2__
                                                                .c.USER_SETTINGS.randomRefresh
                                                        ) {
                                                            e = Math.random();
                                                            var t =
                                                                _src_global__WEBPACK_IMPORTED_MODULE_2__
                                                                    .c.USER_SETTINGS
                                                                    .refreshIntervalMin /
                                                                _src_global__WEBPACK_IMPORTED_MODULE_2__
                                                                    .c.USER_SETTINGS
                                                                    .refreshIntervalMax;
                                                            e < t && (e = t);
                                                        }
                                                        return (
                                                            _src_global__WEBPACK_IMPORTED_MODULE_2__
                                                                .c.USER_SETTINGS.debugMode &&
                                                                (console.log(
                                                                    _src_global__WEBPACK_IMPORTED_MODULE_2__
                                                                        .c.USER_SETTINGS
                                                                        .refreshIntervalMax *
                                                                        e *
                                                                        60 *
                                                                        1e3,
                                                                ),
                                                                console.log(Date.now() - buffer),
                                                                console.log(Date.now() - time),
                                                                (buffer = Date.now())),
                                                            e
                                                        );
                                                    }),
                                                    (time = Date.now()),
                                                    (buffer = time),
                                                    !0 ===
                                                        _src_global__WEBPACK_IMPORTED_MODULE_2__.c
                                                            .USER_SETTINGS.autoRefresh &&
                                                        (recur(),
                                                        (status = eval(
                                                            GM_getValue("hasInformed", "false"),
                                                        )),
                                                        status ||
                                                            (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(
                                                                {
                                                                    title: "挂机提示",
                                                                    text:
                                                                        "如果后台显示，不一定能自动切换页面",
                                                                    icon: "info",
                                                                    confirmButtonText: "了解",
                                                                },
                                                            ),
                                                            GM_setValue("hasInformed", !0)));
                                            case 5:
                                            case "end":
                                                return _context.stop();
                                        }
                                },
                                _callee,
                            );
                        },
                    ),
                )),
                _autoRefresh.apply(this, arguments)
            );
        }
    },
    function(e, t, n) {
        var r = (function(e) {
            "use strict";
            var t = Object.prototype,
                n = t.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator",
                a = r.asyncIterator || "@@asyncIterator",
                i = r.toStringTag || "@@toStringTag";
            function s(e, t, n) {
                return (
                    Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                    }),
                    e[t]
                );
            }
            try {
                s({}, "");
            } catch (e) {
                s = function(e, t, n) {
                    return (e[t] = n);
                };
            }
            function c(e, t, n, r) {
                var o = t && t.prototype instanceof A ? t : A,
                    a = Object.create(o.prototype),
                    i = new N(r || []);
                return (
                    (a._invoke = (function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw a;
                                return T();
                            }
                            for (n.method = o, n.arg = a; ; ) {
                                var i = n.delegate;
                                if (i) {
                                    var s = M(i, n);
                                    if (s) {
                                        if (s === u) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (
                                        ((r = n.done ? "completed" : "suspendedYield"), c.arg === u)
                                    )
                                        continue;
                                    return { value: c.arg, done: n.done };
                                }
                                "throw" === c.type &&
                                    ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
                            }
                        };
                    })(e, n, i)),
                    a
                );
            }
            function l(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            e.wrap = c;
            var u = {};
            function A() {}
            function d() {}
            function f() {}
            var p = {};
            p[o] = function() {
                return this;
            };
            var g = Object.getPrototypeOf,
                m = g && g(g(x([])));
            m && m !== t && n.call(m, o) && (p = m);
            var w = (f.prototype = A.prototype = Object.create(p));
            function h(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    s(e, t, function(e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function y(e, t) {
                var r;
                this._invoke = function(o, a) {
                    function i() {
                        return new t(function(r, i) {
                            !(function r(o, a, i, s) {
                                var c = l(e[o], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        A = u.value;
                                    return A && "object" == typeof A && n.call(A, "__await")
                                        ? t.resolve(A.__await).then(
                                              function(e) {
                                                  r("next", e, i, s);
                                              },
                                              function(e) {
                                                  r("throw", e, i, s);
                                              },
                                          )
                                        : t.resolve(A).then(
                                              function(e) {
                                                  (u.value = e), i(u);
                                              },
                                              function(e) {
                                                  return r("throw", e, i, s);
                                              },
                                          );
                                }
                                s(c.arg);
                            })(o, a, r, i);
                        });
                    }
                    return (r = r ? r.then(i, i) : i());
                };
            }
            function M(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (((t.delegate = null), "throw" === t.method)) {
                        if (
                            e.iterator.return &&
                            ((t.method = "return"), (t.arg = void 0), M(e, t), "throw" === t.method)
                        )
                            return u;
                        (t.method = "throw"),
                            (t.arg = new TypeError(
                                "The iterator does not provide a 'throw' method",
                            ));
                    }
                    return u;
                }
                var r = l(n, e.iterator, t.arg);
                if ("throw" === r.type)
                    return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), u;
                var o = r.arg;
                return o
                    ? o.done
                        ? ((t[e.resultName] = o.value),
                          (t.next = e.nextLoc),
                          "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
                          (t.delegate = null),
                          u)
                        : o
                    : ((t.method = "throw"),
                      (t.arg = new TypeError("iterator result is not an object")),
                      (t.delegate = null),
                      u);
            }
            function b(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
            }
            function v(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function N(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(b, this), this.reset(!0);
            }
            function x(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            a = function t() {
                                for (; ++r < e.length; )
                                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                                return (t.value = void 0), (t.done = !0), t;
                            };
                        return (a.next = a);
                    }
                }
                return { next: T };
            }
            function T() {
                return { value: void 0, done: !0 };
            }
            return (
                (d.prototype = w.constructor = f),
                (f.constructor = d),
                (d.displayName = s(f, i, "GeneratorFunction")),
                (e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
                }),
                (e.mark = function(e) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, f)
                            : ((e.__proto__ = f), s(e, i, "GeneratorFunction")),
                        (e.prototype = Object.create(w)),
                        e
                    );
                }),
                (e.awrap = function(e) {
                    return { __await: e };
                }),
                h(y.prototype),
                (y.prototype[a] = function() {
                    return this;
                }),
                (e.AsyncIterator = y),
                (e.async = function(t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new y(c(t, n, r, o), a);
                    return e.isGeneratorFunction(n)
                        ? i
                        : i.next().then(function(e) {
                              return e.done ? e.value : i.next();
                          });
                }),
                h(w),
                s(w, i, "Generator"),
                (w[o] = function() {
                    return this;
                }),
                (w.toString = function() {
                    return "[object Generator]";
                }),
                (e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return (
                        t.reverse(),
                        function n() {
                            for (; t.length; ) {
                                var r = t.pop();
                                if (r in e) return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (e.values = x),
                (N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = void 0),
                            this.tryEntries.forEach(v),
                            !e)
                        )
                            for (var t in this)
                                "t" === t.charAt(0) &&
                                    n.call(this, t) &&
                                    !isNaN(+t.slice(1)) &&
                                    (this[t] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(n, r) {
                            return (
                                (i.type = "throw"),
                                (i.arg = e),
                                (t.next = n),
                                r && ((t.method = "next"), (t.arg = void 0)),
                                !!r
                            );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var s = n.call(a, "catchLoc"),
                                    c = n.call(a, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                } else {
                                    if (!c)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (
                                o.tryLoc <= this.prev &&
                                n.call(o, "finallyLoc") &&
                                this.prev < o.finallyLoc
                            ) {
                                var a = o;
                                break;
                            }
                        }
                        a &&
                            ("break" === e || "continue" === e) &&
                            a.tryLoc <= t &&
                            t <= a.finallyLoc &&
                            (a = null);
                        var i = a ? a.completion : {};
                        return (
                            (i.type = e),
                            (i.arg = t),
                            a
                                ? ((this.method = "next"), (this.next = a.finallyLoc), u)
                                : this.complete(i)
                        );
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg),
                                  (this.method = "return"),
                                  (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            u
                        );
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc), v(n), u;
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    v(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return (
                            (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                            "next" === this.method && (this.arg = void 0),
                            u
                        );
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = r;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r);
        }
    },
    function(e, t, n) {
        var r = n(9),
            o = n(22);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
        var a = { insert: "head", singleton: !1 };
        r(o, a);
        e.exports = o.locals || {};
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(4),
            o = n.n(r),
            a = n(8),
            i = n.n(a),
            s = n(15),
            c = n(16),
            l = n(17),
            u = n(18),
            A = o()(!1),
            d = i()(s.a),
            f = i()(s.a, { hash: "#iefix" }),
            p = i()(c.a),
            g = i()(l.a),
            m = i()(u.a, { hash: "#iconfont" });
        A.push([
            e.i,
            '@font-face {font-family: "iconfont";\r\n  src: url(' +
                d +
                "); /* IE9 */\r\n  src: url(" +
                f +
                ") format('embedded-opentype'), \r\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAX0AAsAAAAACuQAAAWnAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqJIIcxATYCJAMQCwoABCAFhG0HRhshCVGUTk6I7EeBu6dQWIbGUDqJA9rlMhyE4pd/wx0P/419u29mvmra3aQGJPEMiUQySyQ2WSJBCZTOoWSaeIaNf3h2b6+R1d8/T24gWpp0ksPEg7k5nICNOUtHKGyEGql1iviBfCEFSi9N/1n6PzhmvCywPJvNJaN1OMBRAg0sIv6twB4sQPFF/iHe6jJvE2ha4Aa6ub++QEuhqwJqXoa+Ba2EWalghLquWrCzXI73KurpbWoD4J33+/EXzKJOUsn0u+483rmw/KH9XK15NDtyLx87Gc4Jdh8Zm4BCPC1031cNlJueullUXHMBUDe+k/ih/czpufr/jJJuRV1HEf7hJZmo0tVt0J5LZDI/tC2jkDVOwCPxU61xkaiyo44OcQgQX4BOnvOyJKu/6t2aG5drjcqw3WgcfOYm9Fgwz8ItTqz98oZBFQ4y2dKnyaZq0zaU5+EriS2b+sh0VbXj6QhBgAT/HapQeltfham2v5rECSph+2YVI2w2lJjN6kbrSvtWZ86Re2OJ4ipgkmWRyhrAccjJMK4SFkkWLlUURpZpUSQlaWabSG9yQHnUwRQ6eHST6Vo4teqcDBnSpOE8iUI4BKlERTeYWu0hxCH2XHZDq+FKhdhej/KHhs6X6eahU3Iy2pPDwcHf3WCwQiS31CDcQcdOhVrZBokoWkHY35izEmhSjMFIpWQ5BepasZ9IGkows/GbUPpILIuGsitQlzZesiDHPiXCdcxXudqr+0L7PWm+SqUwAjLYoI2kAmMxmEfBQVe6jYETxfRU+QEJU3lGhanxinplAFR8UbJuEGMvyTbNCt5yYt7Jlafnnyo9hK8JUysRJSDTKkHce6bkQ9k/MXqUNkd7PCgAhdAVNmUw9P/s8+huPMZX5bDePd09o8HaaO9+7xQdE4/05sPpoeNeeJEYeWk5VY4/zHrec8/UdIypkWnLf5UzblMma6raNvyyGuK0/ZVnlie+xvoXHTM4RR8kc+3UmKazr6zXehIYHk/O35oKBrsayVBa2eBUjVRocDmUClJoMPCf5z51nlMsMDPr7j6nce78gSdPsnS/mxWeMGvviL+FrUoZMffPpv/DcM8Kt2jLVdXDHr63iY20s3Z2XKSt/fXxZ18ssvvB+g198W2+lyGt5dubjD1w9wr3KHjXKcu5JSnLSlH7C180W9koTB8XsEiPTK3qaS6uw+c5RAPYfM/DT+ceiZFe2l+ti12icPB7tiZtxOJ/m/4NBxP+Hj4oQM98NNLU1kodAS+Im4Jlxsfo2NxrCL0w2910aO/A0nHmy6yWQiZRYM+UDaUt0QEWUXDOIotlqmnvY0/iIDoZbtajpIbW37NtWOTfDQ2LGmSEmyW7/1BDmBY87056ekj61GWrV09LjJ+/4L1u/tdR/yzLhubSZht82mrDyuHIURZTKcFqN4y0/QE/7OsVy/Kw9N7l9E+ar+bO3F763ixMMozbvby3Eg85wGxO9X/1mLDm1s6qR9kz1W7Nop97lvYn89Ci4cV/9dbH7frMP2mgcTanueeYP1QiS37lonIGcGSKDCylSKJisSeu5BSn6smEpmHjB84zdG8I7aSx5GfWTiIBeGvmAbK6RUTBbEJFyzmoqrsCTRsS9reMTFAVpYF1iwmEvt2QdH2ErK8dUTB3oWLqLVT1I0PT3Rid2LIczzo3hCwlF+0vDB3OPNOmHb/2ifwysSQu85hvJEUYw6kHls4dKCMZYk3x7s9UPfSEU9yT+yhJGHPhiBwdBar5Yuw5pOiTRg6n0HGDIBZFXKjUFzScg2U8p7PqZH7+CfGVEhapaCnzvyGiEI6OvHjAGiAO6qxRy6U0T/TONzMJkx40hK1mKRSPTpIYaYbGFU+LEIcaGdYhmVvwxHZDmqpH02vTOzwETfqJJVLkKFFRe02qYea3DgN2BPaksPm05Ci0MgAA') format('woff2'),\r\n  url(" +
                p +
                ") format('woff'),\r\n  url(" +
                g +
                ") format('truetype'), \r\n  url(" +
                m +
                ') format(\'svg\'); /* iOS 4.1- */\r\n}\r\n\r\n.iconfont {\r\n  font-family: "iconfont" !important;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.icon-setting:before {\r\n  content: "\\e605";\r\n}\r\n\r\n.icon-zhongzhi:before {\r\n  content: "\\e628";\r\n}\r\n\r\n.icon-huojian:before {\r\n  content: "\\e719";\r\n}\r\n\r\n',
            "",
        ]),
            (t.default = A);
    },
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
                sweetalert2__WEBPACK_IMPORTED_MODULE_1__,
            );
        if (
            /centercourseware\.sflep\.com/.test(location.href) &&
            !_global__WEBPACK_IMPORTED_MODULE_0__.b
        ) {
            var status = eval(GM_getValue("acceptAgreement", "false"));
            status ||
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a
                    .fire({
                        title: "使用须知",
                        width: 700,
                        html:
                            '\n                <div style="text-align: left;">\n                    <li>本脚本仅供个人学习交流使用，勿用于任何违法与商业行为</li>\n                    <li>本脚本完全开源免费，基于GPL3.0，欢迎一起<a href="https://github.com/SSmJaE/WELearnHelper" target="_blank">开发</a></li>\n                    <li>因使用本脚本造成的任何问题，均由使用者本人承担</li>\n                    <li>反馈问题请带截图 + 题目链接 + 具体描述</li>\n                </div>\n                ',
                        icon: "warning",
                        confirmButtonText: "接受",
                        allowOutsideClick: !1,
                        showCancelButton: !1,
                    })
                    .then(function(e) {
                        e.isConfirmed &&
                            (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                title: "使用提示",
                                width: 700,
                                html:
                                    '\n                        <div style="text-align: left;">\n                            <li>此处仅包含部分使用方法，详情请自行阅读安装页面</li>\n                            <li>点击齿轮进行功能设定</li>\n                            <li>左键按住“WELearn Helper”方可拖动悬浮窗</li>\n                            <li>双击“WELearn Helper”展开悬浮窗</li>\n                        </div>\n                        ',
                                icon: "info",
                            }),
                            GM_setValue("acceptAgreement", "true"));
                    });
        }
    },
    function(e, t, n) {
        "use strict";
        var r = n(10);
        n.n(r).a;
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(4),
            o = n.n(r)()(!1);
        o.push([
            e.i,
            '\n.my-button {\r\n  display: inline-block;\r\n  margin: 2px 0px;\r\n  padding: 5px 12px;\r\n  /* height: 20px; */\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background-color: white;\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n  font-family: "华文新魏", "新宋体";\r\n  border-radius: 4px;\r\n  line-height: normal;\n}\n.my-button:hover {\r\n  /* color: rgb(29, 161, 242); */\r\n  background-color: rgb(229, 229, 229);\n}\r\n',
            "",
        ]),
            (t.default = o);
    },
    function(e, t, n) {
        "use strict";
        var r = n(11);
        n.n(r).a;
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(4),
            o = n.n(r)()(!1);
        o.push([
            e.i,
            '\n#welearn-helper {\r\n  top: 100px;\r\n  left: 100px;\r\n  z-index: 99;\r\n  position: fixed;\r\n\r\n  min-width: 300px;\r\n  max-width: 500px;\r\n\r\n  background: rgba(255, 255, 255, 0.95);\r\n  border-radius: 8px;\r\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),\r\n    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\r\n\r\n  font-family: Georgia, "Times New Roman", Times, serif;\r\n  line-height: normal;\n}\n#welearn-helper:not(:hover) {\r\n  filter: brightness(98%);\n}\n#container-title {\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n\r\n  font-size: 28px;\r\n  text-align: center;\r\n\r\n  background: rgba(0, 0, 0, 0);\n}\n#container-setting-button {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 3px;\r\n\r\n  font-size: 23px;\r\n\r\n  cursor: pointer;\n}\n#container-setting-button:hover {\r\n  color: rgb(0, 230, 227);\n}\n#container-control button {\r\n  font-size: 16px;\n}\n#container-messages {\r\n  /* margin: 0 10px; */\r\n  border: black 1px solid;\r\n  max-height: 400px;\r\n  overflow-y: auto;\n}\n.container-message {\r\n  font-size: 18px;\r\n  /* white-space: pre-wrap; */\r\n  position: relative;\r\n  -webkit-animation: content_slide_in 0.5s;\r\n          animation: content_slide_in 0.5s;\r\n  -webkit-animation-timing-function: ease-out;\r\n          animation-timing-function: ease-out;\r\n\r\n  margin: 5px 10px;\r\n  padding: 0px;\r\n  padding-bottom: 3px;\r\n  line-height: 120%;\n}\n.container-message:hover:not(hr) {\r\n  padding-bottom: 1px;\r\n  border-bottom: 2px solid black;\r\n  cursor: copy;\n}\n#container-messages .error {\r\n  color: red;\n}\n#container-messages .success {\r\n  color: green;\n}\n#container-messages .info {\r\n  color: #2196f3;\n}\n#container-messages hr {\r\n  margin: 5px 0px;\n}\n@-webkit-keyframes content_slide_in {\nfrom {\r\n    left: -50%;\r\n    opacity: 0;\n}\nto {\r\n    left: 0%;\r\n    opacity: 1;\n}\n}\n@keyframes content_slide_in {\nfrom {\r\n    left: -50%;\r\n    opacity: 0;\n}\nto {\r\n    left: 0%;\r\n    opacity: 1;\n}\n}\r\n',
            "",
        ]),
            (t.default = o);
    },
    function(e, t, n) {
        "use strict";
        var r = n(12);
        n.n(r).a;
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(4),
            o = n.n(r)()(!1);
        o.push([
            e.i,
            "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* 限定label标签属性，也就是checkbox的包装器 */\nlabel[data-v-5a70c9ba] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 25px;\r\n  /* margin: 2px 5px;\r\n    border: black 1px solid; */\r\n  border-radius: 38px;\r\n  /* vertical-align: middle; */\n}\r\n\r\n/* 不显示checkbox本身，通过点击外部的label实现点击input的效果 */\nlabel input[data-v-5a70c9ba] {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\n}\r\n\r\n/* 未选中，滑条效果 */\n#slider[data-v-5a70c9ba] {\r\n  position: absolute;\r\n  z-index: 11;\r\n  /* cursor: pointer; */\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.4s;\r\n  border-radius: 38px;\r\n  background-color: rgb(234, 234, 234);\n}\r\n\r\n/* 未选中，点击时滑条效果 */\ninput:not(:checked):active ~ #slider[data-v-5a70c9ba] {\r\n  background-color: rgb(187, 187, 187);\n}\r\n\r\n/* 选中时，滑条效果 */\ninput:checked ~ #slider[data-v-5a70c9ba] {\r\n  background-color: #2196f3;\n}\n#switch[data-v-5a70c9ba] {\r\n  position: absolute;\r\n  z-index: 12;\r\n  height: 23px;\r\n  width: 23px;\r\n  left: 1px;\r\n  bottom: 1px;\r\n  background-color: white;\r\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.08);\r\n  border-radius: 50%;\n}\r\n\r\n/* 未选中，点击时滑块效果 */\ninput:active + #switch[data-v-5a70c9ba] {\r\n  border-radius: 38px;\r\n  -webkit-animation-name: widen_to_right-data-v-5a70c9ba;\r\n          animation-name: widen_to_right-data-v-5a70c9ba;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\n}\r\n\r\n/* 已选中，点击时滑块效果 */\ninput:checked:active + #switch[data-v-5a70c9ba] {\r\n  -webkit-animation-name: widen_to_left-data-v-5a70c9ba;\r\n          animation-name: widen_to_left-data-v-5a70c9ba;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\n}\r\n\r\n/* 滑块点击右移效果 */\ninput:checked + #switch[data-v-5a70c9ba] {\r\n  -webkit-animation-name: slide_to_right-data-v-5a70c9ba;\r\n          animation-name: slide_to_right-data-v-5a70c9ba;\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\n}\r\n\r\n/* 滑块点击左移效果 */\ninput:not(:checked):not(:active) + #switch[data-v-5a70c9ba] {\r\n  left: 1%;\r\n  -webkit-animation-name: slide_to_left-data-v-5a70c9ba;\r\n          animation-name: slide_to_left-data-v-5a70c9ba;\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes slide_to_right-data-v-5a70c9ba {\n0% {\r\n    width: 36px;\n}\r\n\r\n  /* 80% { */\r\n  /* border-radius: 10px; */\r\n  /* } */\n100% {\r\n    left: 26px;\n}\n}\n@keyframes slide_to_right-data-v-5a70c9ba {\n0% {\r\n    width: 36px;\n}\r\n\r\n  /* 80% { */\r\n  /* border-radius: 10px; */\r\n  /* } */\n100% {\r\n    left: 26px;\n}\n}\n@-webkit-keyframes slide_to_left-data-v-5a70c9ba {\n0% {\r\n    width: 36px;\n}\r\n\r\n  /* 80% { */\r\n  /* border-radius: 10px; */\r\n  /* } */\n100% {\r\n    left: 1%;\n}\n}\n@keyframes slide_to_left-data-v-5a70c9ba {\n0% {\r\n    width: 36px;\n}\r\n\r\n  /* 80% { */\r\n  /* border-radius: 10px; */\r\n  /* } */\n100% {\r\n    left: 1%;\n}\n}\n@-webkit-keyframes widen_to_right-data-v-5a70c9ba {\n100% {\r\n    width: 36px;\n}\n}\n@keyframes widen_to_right-data-v-5a70c9ba {\n100% {\r\n    width: 36px;\n}\n}\n@-webkit-keyframes widen_to_left-data-v-5a70c9ba {\n0% {\r\n    left: 26px;\n}\n100% {\r\n    left: 13px;\r\n    width: 36px;\n}\n}\n@keyframes widen_to_left-data-v-5a70c9ba {\n0% {\r\n    left: 26px;\n}\n100% {\r\n    left: 13px;\r\n    width: 36px;\n}\n}\r\n",
            "",
        ]),
            (t.default = o);
    },
    function(e, t, n) {
        "use strict";
        var r = n(13);
        n.n(r).a;
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(4),
            o = n.n(r)()(!1);
        o.push([
            e.i,
            "\n#container-setting-base[data-v-234d1526] {\r\n  display: none;\r\n  position: fixed;\r\n\r\n  top: 20%;\r\n  left: 50%;\r\n  width: 700px;\r\n  margin: 20px;\r\n  z-index: 101;\r\n\r\n  font-size: 16px;\r\n  line-height: 100%;\r\n\r\n  background: rgba(255, 255, 255, 0.95);\r\n  border: black 2px solid;\r\n  border-radius: 20px;\r\n\r\n  transform: translate(-50%, 0%);\r\n  -webkit-animation: slide_in-data-v-234d1526 0.8s;\r\n          animation: slide_in-data-v-234d1526 0.8s;\r\n  -webkit-animation-timing-function: ease-out;\r\n          animation-timing-function: ease-out;\n}\n@-webkit-keyframes slide_in-data-v-234d1526 {\nfrom {\r\n    left: 0%;\r\n    opacity: 0;\n}\n80% {\r\n    left: 53%;\n}\nto {\r\n    left: 50%;\r\n    opacity: 1;\n}\n}\n@keyframes slide_in-data-v-234d1526 {\nfrom {\r\n    left: 0%;\r\n    opacity: 0;\n}\n80% {\r\n    left: 53%;\n}\nto {\r\n    left: 50%;\r\n    opacity: 1;\n}\n}\ndiv.section[data-v-234d1526] {\r\n  margin: 0 10px;\n}\ndiv.title[data-v-234d1526] {\r\n  text-align: center;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\n}\ndiv.body[data-v-234d1526] {\r\n  overflow: hidden;\n}\r\n\r\n/* 旋转箭头 */\nsvg.arrow-down[data-v-234d1526] {\r\n  position: relative;\r\n  top: 5px;\r\n  left: 0px;\r\n  transition-duration: 0.6s;\n}\nsvg.arrow-down.opened[data-v-234d1526] {\r\n  transform: rotate(180deg);\n}\r\n/* -------------------- */\r\n\r\n/* 抽屉 */\n.toggle-slide-leave-active[data-v-234d1526],\r\n.toggle-slide-enter-active[data-v-234d1526] {\r\n  transition: all 0.6s;\n}\n.toggle-slide-enter[data-v-234d1526],\r\n.toggle-slide-leave-to[data-v-234d1526] {\r\n  max-height: 0;\r\n  opacity: 0;\n}\n.toggle-slide-enter-to[data-v-234d1526],\r\n.toggle-slide-leave[data-v-234d1526] {\r\n  max-height: 300px;\n}\r\n/* -------------------- */\ndiv.record[data-v-234d1526] {\r\n  display: table-row;\r\n  text-align: center;\r\n  margin: 5px 0px;\r\n  padding: 5px;\n}\n.record-left[data-v-234d1526] {\r\n  display: table-cell;\r\n  cursor: pointer;\r\n  width: 80px;\n}\r\n\r\n/* 中间部分居中对齐的实现 */\n.record-middle[data-v-234d1526] {\r\n  display: table-cell;\r\n  text-align: center;\r\n  min-width: 100px;\r\n  max-width: 100px;\r\n  min-height: 25px;\r\n  margin: 2px 5px;\r\n  padding: 0px;\n}\n.record-middle .input[data-v-234d1526] {\r\n  width: 80px;\r\n  height: 21px;\r\n  text-align: center;\r\n  font-size: 16px;\n}\n.record-middle .my-switch[data-v-234d1526] {\r\n  vertical-align: middle;\r\n  margin: 2px 5px;\n}\n.record-middle .readonly[data-v-234d1526] {\r\n  min-height: 25px;\r\n  margin-top: 5px;\n}\r\n/* -------------------- */\n.record-right[data-v-234d1526] {\r\n  display: table-cell;\r\n  text-align: left;\n}\nhr[data-v-234d1526] {\r\n  margin: 5px;\n}\n.container-setting-footer[data-v-234d1526] {\r\n  display: flex;\r\n  justify-content: center;\r\n  /* justify-content: flex-end; */\r\n  margin: 5px 0;\n}\n.container-setting-footer button[data-v-234d1526] {\r\n  margin: 0 5px;\n}\r\n\r\n/* #container-setting-save {\r\n  position: relative;\r\n  margin: 5px;\r\n  left: 50%;\r\n  transform: translate(-55%, 5%);\r\n} */\r\n",
            "",
        ]),
            (t.default = o);
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1),
            o = n.n(r),
            a = n(3),
            i = (n(21), n(0));
        function s(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return c(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var l = [
            {
                title: "用户",
                display: !0,
                settings: [
                    {
                        id: "userAccount",
                        name: "身份令牌",
                        default: "default",
                        description: "随意设定，累计每个人贡献的题目数量",
                    },
                    {
                        id: "userPoints",
                        name: "累计积分",
                        type: "readonly",
                        default: 0,
                        description: "上传答案获取，暂无用处",
                    },
                ],
            },
            {
                title: "悬浮窗",
                display: !0,
                settings: [
                    {
                        id: "autoCopy",
                        name: "自动复制",
                        type: "switch",
                        default: !0,
                        description: "开启时，点击悬浮窗的对应消息自动复制到粘贴板",
                    },
                    {
                        id: "autoSlide",
                        name: "自动下滑",
                        type: "switch",
                        default: !0,
                        description: "有新消息时，窗口是否自动下滑到新消息处",
                    },
                ],
            },
        ];
        function u(e, t) {
            var n,
                r = s(t);
            try {
                var o = function() {
                    var t = n.value;
                    e.some(function(e) {
                        return e.title == t.title;
                    }) || e.push({ title: t.title, display: t.display, settings: [] });
                    for (var r = void 0, o = 0; o < e.length; o++) e[o].title == t.title && (r = o);
                    if (void 0 === r) throw Error("error during get index ");
                    var a,
                        i = s(t.settings);
                    try {
                        var c = function() {
                            var t = a.value;
                            e[r].settings.some(function(e) {
                                return e.id == t.id;
                            }) || e[r].settings.push(t);
                        };
                        for (i.s(); !(a = i.n()).done; ) c();
                    } catch (e) {
                        i.e(e);
                    } finally {
                        i.f();
                    }
                };
                for (r.s(); !(n = r.n()).done; ) o();
            } catch (e) {
                r.e(e);
            } finally {
                r.f();
            }
        }
        function A(e) {
            var t,
                n = s(e);
            try {
                for (n.s(); !(t = n.n()).done; ) {
                    var r,
                        o = s(t.value.settings);
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var a = r.value;
                            null == i.c.USER_SETTINGS[a.id] &&
                                (i.c.USER_SETTINGS[a.id] = a.default);
                        }
                    } catch (e) {
                        o.e(e);
                    } finally {
                        o.f();
                    }
                }
            } catch (e) {
                n.e(e);
            } finally {
                n.f();
            }
        }
        n(23);
        var d = {
            bind: function(e, t) {
                var n = { event: "mousedown", transition: 600 };
                !(function(e, t) {
                    e.forEach(function(e) {
                        isNaN(Number(e)) ? (t.event = e) : (t.transition = e);
                    });
                })(Object.keys(t.modifiers), n),
                    e.addEventListener(n.event, function(a) {
                        !(function(e, t) {
                            var a = t,
                                i = parseInt(getComputedStyle(a).borderWidth.replace("px", "")),
                                s = a.getBoundingClientRect(),
                                c = s.left,
                                l = s.top,
                                u = a.offsetWidth,
                                A = a.offsetHeight,
                                d = e.clientX - c,
                                f = e.clientY - l,
                                p = Math.max(d, u - d),
                                g = Math.max(f, A - f),
                                m = window.getComputedStyle(a),
                                w = Math.sqrt(p * p + g * g),
                                h = i > 0 ? i : 0,
                                y = document.createElement("div"),
                                M = document.createElement("div");
                            (M.className = "ripple-container"),
                                (y.className = "ripple"),
                                (y.style.marginTop = "0px"),
                                (y.style.marginLeft = "0px"),
                                (y.style.width = "1px"),
                                (y.style.height = "1px"),
                                (y.style.transition =
                                    "all " + n.transition + "ms cubic-bezier(0.4, 0, 0.2, 1)"),
                                (y.style.borderRadius = "50%"),
                                (y.style.pointerEvents = "none"),
                                (y.style.position = "relative"),
                                (y.style.zIndex = o),
                                (y.style.backgroundColor = r),
                                (M.style.position = "absolute"),
                                (M.style.left = 0 - h + "px"),
                                (M.style.top = 0 - h + "px"),
                                (M.style.height = "0"),
                                (M.style.width = "0"),
                                (M.style.pointerEvents = "none"),
                                (M.style.overflow = "hidden");
                            var b =
                                a.style.position.length > 0
                                    ? a.style.position
                                    : getComputedStyle(a).position;
                            "relative" !== b && (a.style.position = "relative");
                            function v() {
                                setTimeout(function() {
                                    y.style.backgroundColor = "rgba(0, 0, 0, 0)";
                                }, 250),
                                    setTimeout(function() {
                                        M.parentNode.removeChild(M);
                                    }, 850),
                                    t.removeEventListener("mouseup", v, !1),
                                    setTimeout(function() {
                                        for (var e = !0, t = 0; t < a.childNodes.length; t++)
                                            "ripple-container" === a.childNodes[t].className &&
                                                (e = !1);
                                        e && (a.style.position = "static" !== b ? b : "");
                                    }, n.transition + 250);
                            }
                            M.appendChild(y),
                                a.appendChild(M),
                                (y.style.marginLeft = d + "px"),
                                (y.style.marginTop = f + "px"),
                                (M.style.width = u + "px"),
                                (M.style.height = A + "px"),
                                (M.style.borderTopLeftRadius = m.borderTopLeftRadius),
                                (M.style.borderTopRightRadius = m.borderTopRightRadius),
                                (M.style.borderBottomLeftRadius = m.borderBottomLeftRadius),
                                (M.style.borderBottomRightRadius = m.borderBottomRightRadius),
                                (M.style.direction = "ltr"),
                                setTimeout(function() {
                                    (y.style.width = 2 * w + "px"),
                                        (y.style.height = 2 * w + "px"),
                                        (y.style.marginLeft = d - w + "px"),
                                        (y.style.marginTop = f - w + "px");
                                }, 0),
                                "mousedown" === e.type ? t.addEventListener("mouseup", v, !1) : v();
                        })(a, e, t.value);
                    });
                var r = t.value || d.color || "rgba(0, 0, 0, 0.35)",
                    o = d.zIndex || "9999";
            },
        };
        var f = d,
            p = n(2),
            g = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "div",
                    {
                        directives: [
                            {
                                name: "show",
                                rawName: "v-show",
                                value: e.Global.collapse,
                                expression: "Global.collapse",
                            },
                        ],
                        attrs: { id: "container-panel" },
                    },
                    [
                        n("div", {
                            staticClass: "iconfont icon-setting",
                            attrs: { id: "container-setting-button" },
                            on: { click: e.showSetting },
                        }),
                        e._v(" "),
                        n(
                            "div",
                            { attrs: { id: "container-control" } },
                            [
                                e.Global.showExamQueryButton
                                    ? n("my-button", {
                                          attrs: { id: "container-check", label: "查询" },
                                          on: { click: e.retrieveAllQuestions },
                                      })
                                    : e._e(),
                                e._v(" "),
                                n("my-button", {
                                    attrs: { id: "container-comment", label: "留言" },
                                    on: { click: e.showComment },
                                }),
                                e._v(" "),
                                n("my-button", {
                                    attrs: { label: "折叠" },
                                    on: {
                                        click: function(t) {
                                            return e.collapsePanel();
                                        },
                                    },
                                }),
                                e._v(" "),
                                n("my-button", {
                                    attrs: {
                                        label: "交流群",
                                        onclick:
                                            "window.open('https://jq.qq.com/?_wv=1027&k=5AyCT4l','_blank')",
                                    },
                                }),
                            ],
                            1,
                        ),
                        e._v(" "),
                        n(
                            "div",
                            { attrs: { id: "container-messages" } },
                            e._l(e.Global.messages, function(t, r) {
                                return n("div", {
                                    key: r,
                                    staticClass: "container-message",
                                    class: t.type,
                                    domProps: { innerHTML: e._s("hr" == t.type ? "<hr>" : t.info) },
                                    on: {
                                        click: function(n) {
                                            return e.autoCopy(t.info);
                                        },
                                    },
                                });
                            }),
                            0,
                        ),
                    ],
                );
            };
        g._withStripped = !0;
        var m = n(6),
            w = n.n(m),
            h = n(7),
            y = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)(
                    "div",
                    {
                        directives: [{ name: "ripple", rawName: "v-ripple" }],
                        staticClass: "my-button",
                        on: {
                            click: function(t) {
                                return e.$emit("click", t);
                            },
                        },
                    },
                    [e._v("\n  " + e._s(e.label) + "\n")],
                );
            };
        y._withStripped = !0;
        var M = { name: "MyButton", props: { label: { type: String, default: "" } } };
        n(24);
        function b(e, t, n, r, o, a, i, s) {
            var c,
                l = "function" == typeof e ? e.options : e;
            if (
                (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
                r && (l.functional = !0),
                a && (l._scopeId = "data-v-" + a),
                i
                    ? ((c = function(e) {
                          (e =
                              e ||
                              (this.$vnode && this.$vnode.ssrContext) ||
                              (this.parent &&
                                  this.parent.$vnode &&
                                  this.parent.$vnode.ssrContext)) ||
                              "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                              (e = __VUE_SSR_CONTEXT__),
                              o && o.call(this, e),
                              e && e._registeredComponents && e._registeredComponents.add(i);
                      }),
                      (l._ssrRegister = c))
                    : o &&
                      (c = s
                          ? function() {
                                o.call(
                                    this,
                                    (l.functional ? this.parent : this).$root.$options.shadowRoot,
                                );
                            }
                          : o),
                c)
            )
                if (l.functional) {
                    l._injectStyles = c;
                    var u = l.render;
                    l.render = function(e, t) {
                        return c.call(t), u(e, t);
                    };
                } else {
                    var A = l.beforeCreate;
                    l.beforeCreate = A ? [].concat(A, c) : [c];
                }
            return { exports: e, options: l };
        }
        var v = b(M, y, [], !1, null, null, null);
        v.options.__file = "src/views/components/button.vue";
        var N = {
                components: { "my-button": v.exports },
                data: function() {
                    return { Global: i.c };
                },
                computed: {
                    points: function() {
                        return this.Global.points;
                    },
                },
                methods: {
                    retrieveAllQuestions: function() {
                        console.log(111), Object(h.retrieveAllQuestions)(), console.log(222);
                    },
                    autoCopy: function(e) {
                        i.c.USER_SETTINGS.autoCopy &&
                            GM_setClipboard(e.replace(/^.*、/, ""), "text");
                    },
                    showComment: function() {
                        return Object(a.a)(
                            o.a.mark(function e() {
                                var t, n;
                                return o.a.wrap(function(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    w.a.fire({
                                                        title: "留言",
                                                        input: "textarea",
                                                        inputPlaceholder:
                                                            "期待大家的反馈，如果有任何问题，都可以给我留言，我会定期查看。最好留下联系方式，方便后续交流。",
                                                        confirmButtonText: "发送",
                                                        width: 600,
                                                    })
                                                );
                                            case 2:
                                                (t = e.sent),
                                                    (n = t.value) && h.Requests.sendComment(n);
                                            case 5:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        )();
                    },
                    showSetting: function() {
                        var e = document.querySelector("#container-setting-base");
                        e.style.display = "table" == e.style.display ? "none" : "table";
                    },
                    test: function() {
                        var e = this;
                        [
                            { info: "We will do everything to ___________ peace.", type: "normal" },
                            { info: "preserve", type: "normal" },
                            { info: "新增收录", type: "normal" },
                            { info: "新增收录", type: "hr" },
                        ].forEach(function(t) {
                            return e.Global.messages.push(t);
                        });
                    },
                    collapsePanel: function() {
                        this.Global.collapse = !1;
                    },
                },
            },
            x = (n(26), b(N, g, [], !1, null, null, null));
        x.options.__file = "src/views/panel.vue";
        var T = x.exports,
            E = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "div",
                    { attrs: { id: "container-setting-base" } },
                    [
                        e._l(e.sections, function(t, r) {
                            return n(
                                "div",
                                { key: r, staticClass: "section" },
                                [
                                    0 !== r ? n("hr") : e._e(),
                                    e._v(" "),
                                    n(
                                        "div",
                                        {
                                            staticClass: "title",
                                            on: {
                                                click: function(e) {
                                                    t.display = !t.display;
                                                },
                                            },
                                        },
                                        [
                                            e._v("\n      " + e._s(t.title) + "\n      "),
                                            n(
                                                "svg",
                                                {
                                                    staticClass: "arrow-down",
                                                    class: t.display ? "opened" : "",
                                                    attrs: { width: "24", height: "24" },
                                                },
                                                [
                                                    n("path", {
                                                        attrs: {
                                                            d:
                                                                "M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z",
                                                            "fill-rule": "evenodd",
                                                        },
                                                    }),
                                                ],
                                            ),
                                        ],
                                    ),
                                    e._v(" "),
                                    n("transition", { attrs: { name: "toggle-slide" } }, [
                                        n(
                                            "div",
                                            {
                                                directives: [
                                                    {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: t.display,
                                                        expression: "section.display",
                                                    },
                                                ],
                                                staticClass: "body",
                                            },
                                            e._l(t.settings, function(t) {
                                                return n(
                                                    "div",
                                                    { key: t.id, staticClass: "record" },
                                                    [
                                                        n(
                                                            "label",
                                                            {
                                                                staticClass: "record-left",
                                                                attrs: { for: t.id },
                                                            },
                                                            [e._v(e._s(t.name))],
                                                        ),
                                                        e._v(" "),
                                                        n(
                                                            "div",
                                                            { staticClass: "record-middle" },
                                                            [
                                                                "readonly" === t.type
                                                                    ? [
                                                                          n(
                                                                              "div",
                                                                              {
                                                                                  staticClass:
                                                                                      "readonly",
                                                                              },
                                                                              [
                                                                                  e._v(
                                                                                      "\n                " +
                                                                                          e._s(
                                                                                              e
                                                                                                  .Global
                                                                                                  .USER_SETTINGS[
                                                                                                  t
                                                                                                      .id
                                                                                              ],
                                                                                          ) +
                                                                                          "\n              ",
                                                                                  ),
                                                                              ],
                                                                          ),
                                                                      ]
                                                                    : "switch" === t.type
                                                                    ? [
                                                                          n("my-switch", {
                                                                              attrs: { id: t.id },
                                                                              model: {
                                                                                  value:
                                                                                      e.Global
                                                                                          .USER_SETTINGS[
                                                                                          t.id
                                                                                      ],
                                                                                  callback: function(
                                                                                      n,
                                                                                  ) {
                                                                                      e.$set(
                                                                                          e.Global
                                                                                              .USER_SETTINGS,
                                                                                          t.id,
                                                                                          n,
                                                                                      );
                                                                                  },
                                                                                  expression:
                                                                                      "Global.USER_SETTINGS[setting.id]",
                                                                              },
                                                                          }),
                                                                      ]
                                                                    : [
                                                                          n("input", {
                                                                              staticClass: "input",
                                                                              attrs: { id: t.id },
                                                                              domProps: {
                                                                                  value:
                                                                                      e.Global
                                                                                          .USER_SETTINGS[
                                                                                          t.id
                                                                                      ],
                                                                              },
                                                                              on: {
                                                                                  input: function(
                                                                                      n,
                                                                                  ) {
                                                                                      e.Global.USER_SETTINGS[
                                                                                          t.id
                                                                                      ] =
                                                                                          n.target.value;
                                                                                  },
                                                                              },
                                                                          }),
                                                                      ],
                                                            ],
                                                            2,
                                                        ),
                                                        e._v(" "),
                                                        n("div", { staticClass: "record-right" }, [
                                                            e._v(
                                                                "\n            " +
                                                                    e._s(t.description) +
                                                                    "\n          ",
                                                            ),
                                                        ]),
                                                    ],
                                                );
                                            }),
                                            0,
                                        ),
                                    ]),
                                ],
                                1,
                            );
                        }),
                        e._v(" "),
                        n("div", { staticClass: "container-setting-footer" }, [
                            n("button", { on: { click: e.saveChange } }, [e._v("保存 & 刷新")]),
                            e._v(" "),
                            n("button", { on: { click: e.setDefault } }, [e._v("还原默认值")]),
                        ]),
                    ],
                    2,
                );
            };
        E._withStripped = !0;
        var j = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("label", { staticClass: "my-switch", style: e.labelStyle }, [
                n("input", {
                    ref: "input",
                    style: e.inputStyle,
                    attrs: { id: e.id, type: "checkbox", disabled: e.disabled },
                    domProps: { checked: e.checked },
                    on: {
                        change: function(t) {
                            return e.$emit("change", t.target.checked);
                        },
                    },
                }),
                e._v(" "),
                n("span", { attrs: { id: "switch" } }),
                e._v(" "),
                n("span", { attrs: { id: "slider" } }),
            ]);
        };
        j._withStripped = !0;
        var D = {
                model: { prop: "checked", event: "change" },
                props: {
                    checked: { type: Boolean, default: !1 },
                    disabled: { type: Boolean, default: !1 },
                    width: { type: Number, default: 50 },
                    height: { type: Number, default: 25 },
                    id: { type: String, default: void 0 },
                },
                computed: {
                    labelStyle: function() {
                        return { width: this.width + "px", height: this.height + "px" };
                    },
                    inputStyle: function() {
                        return {};
                    },
                },
            },
            I = (n(28), b(D, j, [], !1, null, "5a70c9ba", null));
        I.options.__file = "src/views/components/switch.vue";
        var k = {
                components: { "my-switch": I.exports },
                data: function() {
                    return { Global: i.c, version: i.e, sections: l };
                },
                created: function() {
                    h.Requests.initial(), h.Requests.updatePoints();
                },
                methods: {
                    saveChange: function() {
                        GM_setValue("USER_SETTINGS", JSON.stringify(i.c.USER_SETTINGS)),
                            location.reload(!0);
                    },
                    setDefault: function() {
                        !(function() {
                            var e,
                                t = s(l);
                            try {
                                for (t.s(); !(e = t.n()).done; ) {
                                    var n,
                                        r = s(e.value.settings);
                                    try {
                                        for (r.s(); !(n = r.n()).done; ) {
                                            var o = n.value;
                                            i.c.USER_SETTINGS[o.id] = o.default;
                                        }
                                    } catch (e) {
                                        r.e(e);
                                    } finally {
                                        r.f();
                                    }
                                }
                            } catch (e) {
                                t.e(e);
                            } finally {
                                t.f();
                            }
                        })();
                    },
                },
            },
            C = (n(30), b(k, E, [], !1, null, "234d1526", null));
        C.options.__file = "src/views/setting.vue";
        var O = C.exports;
        if (
            (Object(a.a)(
                o.a.mark(function e() {
                    var t, r;
                    return o.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Promise.resolve().then(n.bind(null, 7));
                                case 2:
                                    return (
                                        (t = e.sent),
                                        (r = t.pluginSettings),
                                        u(l, r),
                                        (e.next = 7),
                                        new Promise(function(e) {
                                            i.b ||
                                                ((i.c.USER_SETTINGS = JSON.parse(
                                                    GM_getValue("USER_SETTINGS", "{}"),
                                                )),
                                                A(l)),
                                                e();
                                        })
                                    );
                                case 7:
                                    Promise.resolve().then(n.bind(null, 33));
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            )(),
            Vue.directive("ripple", f),
            (location.href.includes("centercourseware.sflep.com") ||
                location.href.includes("course.sflep.com/2019/test/")) &&
                !document.querySelector("#welearn-helper"))
        ) {
            var L = document.createElement("div");
            (L.innerHTML =
                '\n        <div id="welearn-helper">\n            <div id="container-title">WELearn Helper</div>\n            <div id="container-panel"></div>\n        </div>\n        <div id="container-setting-base"></div>\n        '),
                document.body.appendChild(L);
            var S = document.querySelector("#container-title");
            S.addEventListener(
                "dblclick",
                function() {
                    i.c.collapse = !0;
                },
                !1,
            ),
                Object(p.b)(S, document.querySelector("#welearn-helper")),
                new Vue(T).$mount("#welearn-helper #container-panel"),
                new Vue(O).$mount("#container-setting-base");
        }
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1),
            o = n.n(r),
            a = n(3),
            i = n(0),
            s = n(5);
        location.href.includes("https://course.sflep.com/2019/student/course_info.aspx?") &&
            window.addEventListener(
                "load",
                Object(a.a)(
                    o.a.mark(function e() {
                        var t;
                        return o.a.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                Object(s.a)("/task/", {
                                                    method: "POST",
                                                    body: {
                                                        cookie: document.cookie,
                                                        url: location.href,
                                                    },
                                                })
                                            );
                                        case 3:
                                            (t = e.sent),
                                                console.log(t.responseText),
                                                (e.next = 10);
                                            break;
                                        case 7:
                                            (e.prev = 7), (e.t0 = e.catch(0)), console.log(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[0, 7]],
                        );
                    }),
                ),
                !1,
            ),
            location.href.includes("https://course.sflep.com/2019/test/") &&
                (i.c.showExamQueryButton = !0);
        var c = n(2);
        function l(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return u(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var A,
            d = ["et-tof", "et-blank", "et-select", "et-choice", "et-matching", "et-reference"];
        function f(e) {
            var t,
                n = [],
                r = l(d);
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var o = t.value,
                        a = e.querySelectorAll(o);
                    console.log(a);
                    var i,
                        s = 1,
                        c = l(a);
                    try {
                        for (c.s(); !(i = c.n()).done; ) {
                            var u = p(i.value);
                            u && ((u.index = s), console.log(u), n.push(u), s++);
                        }
                    } catch (e) {
                        c.e(e);
                    } finally {
                        c.f();
                    }
                }
            } catch (e) {
                r.e(e);
            } finally {
                r.f();
            }
            return n;
        }
        function p(e) {
            var t = e.tagName.toLowerCase(),
                n = "";
            switch (t) {
                case "et-tof":
                    n = e.getAttribute("key");
                    break;
                case "et-blank":
                    if (g(e)) return;
                    (n = e.textContent.split("|")[0]),
                        e.hasAttribute("block") && (t = "et-textarea");
                    break;
                case "et-select":
                    n = e.getAttribute("key");
                    try {
                        n.length || (n = e.firstElementChild.textContent);
                    } catch (e) {
                        n = "Answers will vary.";
                    }
                    break;
                case "et-choice":
                    if (g(e) && e.hasAttribute("inline")) return;
                    n = e.getAttribute("key");
                    break;
                case "et-matching":
                    if (g(e)) return;
                    n = e
                        .getAttribute("key")
                        .split(",")
                        .join("\n\t");
                    break;
                case "et-reference":
                    if (!i.c.USER_SETTINGS.showReference) return;
                    n = e.innerHTML;
            }
            return { text: n, type: t, element: e };
        }
        function g(e) {
            var t,
                n = e,
                r = 0,
                o = 0;
            try {
                for (var a = 0; a < 9; a++)
                    0 !== a && (n = n.parentElement),
                        "ET-MOBILE-ONLY" == (t = n.tagName) && o++,
                        "ET-WEB-ONLY" == t && r++;
            } catch (e) {
            } finally {
                return r && o ? r > 1 : !!r;
            }
        }
        function m(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return w(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return w(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function h(e) {
            $(e)
                .trigger("click")
                .trigger("focus")
                .trigger("keydown")
                .trigger("input");
        }
        function y(e) {
            $(e)
                .trigger("keyup")
                .trigger("change")
                .trigger("blur");
            try {
                angular.element(e).triggerHandler("hover"),
                    angular.element(e).triggerHandler("keyup"),
                    angular.element(e).triggerHandler("blur");
            } catch (e) {}
        }
        function M(e) {
            return b.apply(this, arguments);
        }
        function b() {
            return (b = Object(a.a)(
                o.a.mark(function e(t) {
                    var n,
                        r,
                        a,
                        s,
                        l,
                        u,
                        A,
                        d,
                        f,
                        p,
                        g,
                        w,
                        M,
                        b,
                        v,
                        N,
                        x,
                        T,
                        E,
                        j,
                        D,
                        I,
                        k,
                        C,
                        O,
                        L,
                        S,
                        z,
                        B,
                        _;
                    return o.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        console.error(1123),
                                            (n = document.querySelectorAll(
                                                "et-tof span.controls span",
                                            )),
                                            (r = 0),
                                            (a = document.querySelectorAll("et-blank span.blank")),
                                            (s = document.querySelectorAll(
                                                "et-blank textarea.blank",
                                            )),
                                            (l = 0),
                                            (u = 0),
                                            (A = document.querySelectorAll("et-select div")),
                                            (d = 0),
                                            (f = document.querySelectorAll("et-choice li")),
                                            (p = document.querySelectorAll("et-choice span")),
                                            (g = 0),
                                            (w = 0),
                                            (M = 0),
                                            (b = m(t)),
                                            (e.prev = 15),
                                            b.s();
                                    case 17:
                                        if ((v = b.n()).done) {
                                            e.next = 77;
                                            break;
                                        }
                                        return (
                                            (N = v.value),
                                            console.error(1124),
                                            (e.next = 22),
                                            Object(c.d)(i.c.USER_SETTINGS.solveInterval)
                                        );
                                    case 22:
                                        (e.t0 = N.type),
                                            (e.next =
                                                "et-tof" === e.t0
                                                    ? 25
                                                    : "et-blank" === e.t0
                                                    ? 37
                                                    : "et-textarea" === e.t0
                                                    ? 42
                                                    : "et-select" === e.t0
                                                    ? 45
                                                    : "et-choice" === e.t0
                                                    ? 51
                                                    : "et-matching" === e.t0
                                                    ? 61
                                                    : 75);
                                        break;
                                    case 25:
                                        (x = void 0),
                                            (e.t1 = N.text),
                                            (e.next =
                                                "t" === e.t1 || "T" === e.t1
                                                    ? 29
                                                    : "f" === e.t1 || "F" === e.t1
                                                    ? 31
                                                    : 33);
                                        break;
                                    case 29:
                                        return (x = 2 * r), e.abrupt("break", 34);
                                    case 31:
                                        return (x = 2 * r + 1), e.abrupt("break", 34);
                                    case 33:
                                        throw new Error("tof解答出错");
                                    case 34:
                                        return n[x].click(), r++, e.abrupt("break", 75);
                                    case 37:
                                        return (
                                            h(a[l]),
                                            (a[l].textContent = N.text),
                                            y(a[l]),
                                            l++,
                                            e.abrupt("break", 75)
                                        );
                                    case 42:
                                        return (
                                            N.text.length &&
                                                (h(s[u]),
                                                (s[u].textContent = N.text),
                                                (s[u].value = N.text),
                                                y(s[u])),
                                            u++,
                                            e.abrupt("break", 75)
                                        );
                                    case 45:
                                        return (
                                            A[d].classList.add("correct"),
                                            A[d].querySelector("select").click(),
                                            angular
                                                .element(A[d].querySelector(".key"))
                                                .triggerHandler("change"),
                                            y(A[d].querySelector(".key")),
                                            d++,
                                            e.abrupt("break", 75)
                                        );
                                    case 51:
                                        (T = void 0), (E = void 0), (j = void 0), (D = !1);
                                        try {
                                            E = N.text.split(",");
                                        } catch (e) {
                                            E = ["1"];
                                        }
                                        console.log(E),
                                            (j = N.element.querySelectorAll("li").length)
                                                ? (M = g)
                                                : (j = N.element.querySelectorAll("span").length)
                                                ? ((D = !0), (M = w))
                                                : (j = 4),
                                            (I = m(E));
                                        try {
                                            for (I.s(); !(k = I.n()).done; )
                                                if (
                                                    ((C = k.value),
                                                    (T = isNaN(parseInt(C))
                                                        ? j * M + C.toUpperCase().charCodeAt() - 65
                                                        : j * M + parseInt(C) - 1),
                                                    console.log(
                                                        "题号"
                                                            .concat(M, " span")
                                                            .concat(w, " 选项")
                                                            .concat(T, " 选项数")
                                                            .concat(j),
                                                    ),
                                                    D && j)
                                                )
                                                    try {
                                                        p[T].click();
                                                    } catch (e) {
                                                        f[T].click();
                                                    }
                                                else f[T].click();
                                        } catch (e) {
                                            I.e(e);
                                        } finally {
                                            I.f();
                                        }
                                        return D ? w++ : g++, M++, e.abrupt("break", 75);
                                    case 61:
                                        O = 0;
                                    case 62:
                                        if (
                                            !(O < N.element.getAttribute("key").split(",").length)
                                        ) {
                                            e.next = 74;
                                            break;
                                        }
                                        return (
                                            (e.next = 65),
                                            Object(c.d)(i.c.USER_SETTINGS.solveInterval)
                                        );
                                    case 65:
                                        (L =
                                            N.element
                                                .getAttribute("key")
                                                .split(",")
                                                [O].split("-")[1] - 1),
                                            (S = leftCircles[O].getAttribute("cx")),
                                            (z = leftCircles[O].getAttribute("cy")),
                                            (B = rightCircles[L].getAttribute("cx")),
                                            (_ = rightCircles[L].getAttribute("cy")),
                                            (lineElements[
                                                O
                                            ].innerHTML = '\n                    <line \n                        ng-class="{incorrect:!matching.isKey($parent.$index,b)}"\n                        ng-click="matching.removeLine($parent.$index, b)" \n                        ng-repeat="b in cb track by $index" \n                        ng-attr-x1="{{matching.circles.xA}}"\n                        ng-attr-x2="{{matching.circles.xB}}" \n                        ng-attr-y1="{{matching.circles.A[$parent.$index]}}" \n                        ng-attr-y2="{{matching.circles.B[b]}}"\n                        x1="'
                                                .concat(S, '" \n                        x2="')
                                                .concat(B, '" \n                        y1="')
                                                .concat(z, '" \n                        y2="')
                                                .concat(
                                                    _,
                                                    '" \n                        class=""\n                    ></line>',
                                                ));
                                    case 71:
                                        O++, (e.next = 62);
                                        break;
                                    case 74:
                                        return e.abrupt("break", 75);
                                    case 75:
                                        e.next = 17;
                                        break;
                                    case 77:
                                        e.next = 82;
                                        break;
                                    case 79:
                                        (e.prev = 79), (e.t2 = e.catch(15)), b.e(e.t2);
                                    case 82:
                                        return (e.prev = 82), b.f(), e.finish(82);
                                    case 85:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        null,
                        [[15, 79, 82, 85]],
                    );
                }),
            )).apply(this, arguments);
        }
        function v(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return N(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return N(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function N(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function x(e) {
            var t = [],
                n = e.querySelectorAll("correctResponse value");
            console.log(n);
            var r,
                o = 1,
                a = v(n);
            try {
                for (a.s(); !(r = a.n()).done; ) {
                    var i,
                        s = v(T(r.value, e));
                    try {
                        for (s.s(); !(i = s.n()).done; ) {
                            var c = i.value;
                            c && ((c.index = o), console.log(c), t.push(c)), o++;
                        }
                    } catch (e) {
                        s.e(e);
                    } finally {
                        s.f();
                    }
                }
            } catch (e) {
                a.e(e);
            } finally {
                a.f();
            }
            return t;
        }
        function T(e, t) {
            var n = "",
                r = "",
                o = [],
                a = e.textContent;
            if (36 == a.length) {
                r = "choice";
                var i = '[identifier="'.concat(a, '"]');
                try {
                    n = t.querySelector(i).textContent;
                } catch (t) {
                    n = e.textContent;
                }
                o.push({ text: n, type: r, element: e, identifier: a });
            } else if (a.length > 200) {
                var s,
                    c = v(a.split(","));
                try {
                    for (c.s(); !(s = c.n()).done; ) {
                        var l = s.value,
                            u = '[identifier="'.concat(l, '"]');
                        (n = t.querySelector(u).textContent),
                            o.push({ text: n, type: "choice", element: e, identifier: l });
                    }
                } catch (e) {
                    c.e(e);
                } finally {
                    c.f();
                }
            } else
                (r = "(Open.)" == (n = e.textContent) ? "textarea" : "blank"),
                    o.push({ text: n, type: r, element: e });
            return o;
        }
        function E(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return j(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return j(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function j(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function D(e) {
            return I.apply(this, arguments);
        }
        function I() {
            return (I = Object(a.a)(
                o.a.mark(function e(t) {
                    var n, r, a, s, l, u, A, d, f, p, g, m, w;
                    return o.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        (n = document.querySelectorAll(
                                            '.pattern input[type="text"]',
                                        )),
                                            (r = 0),
                                            (a = document.querySelectorAll("label[for]")),
                                            (s = E(t)),
                                            (e.prev = 4),
                                            s.s();
                                    case 6:
                                        if ((l = s.n()).done) {
                                            e.next = 23;
                                            break;
                                        }
                                        return (
                                            (u = l.value),
                                            (e.next = 10),
                                            Object(c.d)(i.c.USER_SETTINGS.solveInterval)
                                        );
                                    case 10:
                                        (e.t0 = u.type),
                                            (e.next =
                                                "blank" === e.t0
                                                    ? 13
                                                    : "textarea" === e.t0
                                                    ? 16
                                                    : "choice" === e.t0
                                                    ? 18
                                                    : 21);
                                        break;
                                    case 13:
                                        A = E(u.text.split(","));
                                        try {
                                            for (A.s(); !(d = A.n()).done; ) {
                                                f = d.value;
                                                try {
                                                    n[r].value = f;
                                                } catch (e) {
                                                    document.querySelector(
                                                        ".pattern textarea",
                                                    ).textContent = f;
                                                } finally {
                                                    r++;
                                                }
                                            }
                                        } catch (e) {
                                            A.e(e);
                                        } finally {
                                            A.f();
                                        }
                                        return e.abrupt("break", 21);
                                    case 16:
                                        return (
                                            (document.querySelector(".pattern textarea").value =
                                                i.c.USER_SETTINGS.defaultBlankAnswer),
                                            e.abrupt("break", 21)
                                        );
                                    case 18:
                                        p = E(a);
                                        try {
                                            for (p.s(); !(g = p.n()).done; )
                                                if (
                                                    (m = g.value)
                                                        .getAttribute("for")
                                                        .split("_")[1] == u.identifier
                                                ) {
                                                    m.click();
                                                    try {
                                                        (w = m.getBoundingClientRect().top),
                                                            document
                                                                .querySelector("#divTest")
                                                                .scrollTo(0, w - 50);
                                                    } catch (e) {}
                                                }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        return e.abrupt("break", 21);
                                    case 21:
                                        e.next = 6;
                                        break;
                                    case 23:
                                        e.next = 28;
                                        break;
                                    case 25:
                                        (e.prev = 25), (e.t1 = e.catch(4)), s.e(e.t1);
                                    case 28:
                                        return (e.prev = 28), s.f(), e.finish(28);
                                    case 31:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        null,
                        [[4, 25, 28, 31]],
                    );
                }),
            )).apply(this, arguments);
        }
        function k() {
            clearInterval(A),
                (A = setInterval(function() {
                    try {
                        i.c.messages = [];
                        var e = document.querySelector(
                            'ul[id^="wordTest"][style=""] > li:last-child',
                        ).textContent;
                        Object(c.a)(e);
                    } catch (e) {}
                }, 2e3));
        }
        function C(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return O(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return O(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function O(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function L() {
            var e = [],
                t = document.querySelectorAll("[data-solution]");
            console.log(t);
            var n,
                r = 1,
                o = C(t);
            try {
                for (o.s(); !(n = o.n()).done; ) {
                    var a = S(n.value);
                    a && ((a.index = r), console.log(a), e.push(a)), r++;
                }
            } catch (e) {
                o.e(e);
            } finally {
                o.f();
            }
            return e;
        }
        function S(e) {
            var t = e.getAttribute("data-solution"),
                n = "";
            if (t) n = "blank";
            else {
                try {
                    (t = e.firstElementChild.textContent) || (t = e.textContent);
                } catch (n) {
                    t = e.textContent;
                }
                n = "choice";
            }
            return { text: t, type: n, element: e };
        }
        function z(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return B(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return B(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function B(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function _(e) {
            return Q.apply(this, arguments);
        }
        function Q() {
            return (Q = Object(a.a)(
                o.a.mark(function e(t) {
                    var n, r, a, s, l;
                    return o.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        (n = document.querySelectorAll("input[data-itemtype]")),
                                            (r = 0),
                                            (a = z(t)),
                                            (e.prev = 3),
                                            a.s();
                                    case 5:
                                        if ((s = a.n()).done) {
                                            e.next = 19;
                                            break;
                                        }
                                        return (
                                            (l = s.value),
                                            (e.next = 9),
                                            Object(c.d)(i.c.USER_SETTINGS.solveInterval)
                                        );
                                    case 9:
                                        (e.t0 = l.type),
                                            (e.next =
                                                "blank" === e.t0
                                                    ? 12
                                                    : "choice" === e.t0
                                                    ? 15
                                                    : 17);
                                        break;
                                    case 12:
                                        return (n[r].value = l.text), r++, e.abrupt("break", 17);
                                    case 15:
                                        return l.element.click(), e.abrupt("break", 17);
                                    case 17:
                                        e.next = 5;
                                        break;
                                    case 19:
                                        e.next = 24;
                                        break;
                                    case 21:
                                        (e.prev = 21), (e.t1 = e.catch(3)), a.e(e.t1);
                                    case 24:
                                        return (e.prev = 24), a.f(), e.finish(24);
                                    case 27:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        null,
                        [[3, 21, 24, 27]],
                    );
                }),
            )).apply(this, arguments);
        }
        function U(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return Y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return Y(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function Y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function P(e) {
            var t = [],
                n = e.querySelectorAll("correctResponse value");
            console.log(n);
            var r,
                o = 1,
                a = U(n);
            try {
                for (a.s(); !(r = a.n()).done; ) {
                    var i = G(r.value, e);
                    i && ((i.index = o), console.log(i), t.push(i)), o++;
                }
            } catch (e) {
                a.e(e);
            } finally {
                a.f();
            }
            return t;
        }
        function G(e, t) {
            var n = e.textContent,
                r = "";
            if (36 == n.length) {
                r = "choice";
                var o = '[identifier="'.concat(n, '"]');
                (e = t.querySelector(o)), (n = /CDATA\[(.*)\]\]/.exec(e.innerHTML)[1].trim());
            } else r = 73 == n.length ? "matching" : "blank";
            return { text: n, type: r, element: e };
        }
        function R(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (n = (function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return q(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return q(e, t);
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            }
            var a,
                i = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    var e = n.next();
                    return (i = e.done), e;
                },
                e: function(e) {
                    (s = !0), (a = e);
                },
                f: function() {
                    try {
                        i || null == n.return || n.return();
                    } finally {
                        if (s) throw a;
                    }
                },
            };
        }
        function q(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var F = [
                "https://centercourseware.sflep.com/new century college english secedition integration 2/unit_01/course/texta.html#c09175d4-f281-488f-83fe-87c6bcf2a2b6?nocache=0.6378400703106109",
                "new century college english secedition integration 1",
                "new century college english secedition integration 2",
                "new century college english secedition integration 3",
                "new century college english secedition integration 4",
                "https://centercourseware.sflep.com/an integrated skills course (2nd edition) 2 for vocational college english/unit_02/course/listening.html#f248a182-7d3b-4112-86e8-8fca2706c690?nocache=0.3470470678074564",
                "an integrated skills course (2nd edition) 1 for vocational college english",
                "an integrated skills course (2nd edition) 2 for vocational college english",
                "an integrated skills course (2nd edition) 3 for vocational college english",
                "an integrated skills course (2nd edition) 4 for vocational college english",
                "https://centercourseware.sflep.com/an integrated skills course 2/unit_07/course/comprehension.html#e2f3d085-ca82-4d79-b31a-1bfe83529d88?nocache=0.5703432807157427",
                "an integrated skills course 1",
                "an integrated skills course 2",
            ],
            H = [
                "https://centercourseware.sflep.com/new progressive college english integrated course 3/unit_01/main10.html?3-1-6&nocache=0.8570993802491391",
                "new progressive college english integrated course 1",
                "new progressive college english integrated course 2",
                "new progressive college english integrated course 3",
                "new progressive college english integrated course 4",
                "https://centercourseware.sflep.com/new target college english integrated course 2/unit_05/main.html?2-5-10&nocache=0.7739324146362139",
                "new target college english integrated course 1",
                "new target college english integrated course 2",
                "new target college english integrated course 3",
                "new target college english integrated course 4",
            ],
            W = [
                "https://centercourseware.sflep.com/inspire%202/data/1/2-1-2.html",
                "inspire 1",
                "inspire 2",
                "inspire 3",
                "inspire 4",
                "https://centercourseware.sflep.com/New College English Viewing Listening Speaking 3/index.html#/1/1-1-1?nocache=0.2182374709016317",
                "New College English Viewing Listening Speaking 1",
                "New College English Viewing Listening Speaking 2",
                "New College English Viewing Listening Speaking 3",
                "New College English Viewing Listening Speaking 4",
                "https://centercourseware.sflep.com/New Target College English Video Course 1/index.html#/u1/TO/1-1?nocache=0.2502474772719703",
                "New Target College English Video Course 1",
                "New Target College English Video Course 2",
                "New Target College English Video Course 3",
                "New Target College English Video Course 4",
                "https://centercourseware.sflep.com/new century college english video thirdedition 1/index.html#/2/1-1-1?nocache=0.3053014048019431",
                "new century college english video thirdedition 1",
                "new century college english video thirdedition 2",
                "new century college english video thirdedition 3",
                "new century college english video thirdedition 4",
            ],
            J = [
                "https://centercourseware.sflep.com/new century extensive reading course for english majors 2/web.html?courseurl=210_01_05_01&nocache=0.2702018071769088",
                "new century extensive reading course for english majors 1",
                "new century extensive reading course for english majors 2",
                "new century extensive reading course for english majors 3",
                "new century extensive reading course for english majors 4",
            ],
            Z = new DOMParser();
        function V(e) {
            return K.apply(this, arguments);
        }
        function K() {
            return (K = Object(a.a)(
                o.a.mark(function e(t) {
                    var n, r, a;
                    return o.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), fetch(t);
                                case 2:
                                    return (n = e.sent), (e.next = 5), n.text();
                                case 5:
                                    return (
                                        (r = e.sent),
                                        (a = Z.parseFromString(r, "text/html")),
                                        console.log(a),
                                        e.abrupt("return", a)
                                    );
                                case 9:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            )).apply(this, arguments);
        }
        function X(e, t, n) {
            return ee.apply(this, arguments);
        }
        function ee() {
            return (ee = Object(a.a)(
                o.a.mark(function e(t, n, r) {
                    var a, i, s, c, l;
                    return o.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), fetch(t);
                                case 2:
                                    return (a = e.sent), (e.next = 5), a.text();
                                case 5:
                                    return (
                                        (i = e.sent),
                                        (s = 'resource[identifier="'.concat(n, '"] file')),
                                        (c = Z.parseFromString(i, "text/html")
                                            .querySelector(s)
                                            .getAttribute("href")),
                                        (l = "https://centercourseware.sflep.com/"
                                            .concat(r, "/")
                                            .concat(c)),
                                        e.abrupt("return", V(l))
                                    );
                                case 10:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            )).apply(this, arguments);
        }
        function te(e) {
            return ne.apply(this, arguments);
        }
        function ne() {
            return (ne = Object(a.a)(
                o.a.mark(function e(t) {
                    var n, r, a, s, l;
                    return o.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        (n = ""), (r = R(t)), (e.prev = 2), r.s();
                                    case 4:
                                        if ((a = r.n()).done) {
                                            e.next = 14;
                                            break;
                                        }
                                        if (((s = a.value), !i.c.USER_SETTINGS.autoSolve)) {
                                            e.next = 9;
                                            break;
                                        }
                                        return (
                                            (e.next = 9),
                                            Object(c.d)(i.c.USER_SETTINGS.solveInterval)
                                        );
                                    case 9:
                                        Object(c.a)(
                                            ""
                                                .concat(String(s.index).padStart(2, "0"), "、")
                                                .concat(s.text),
                                        ),
                                            (l = s.element.tagName),
                                            "" !== n && l !== n && (Object(c.a)("", "hr"), (n = l));
                                    case 12:
                                        e.next = 4;
                                        break;
                                    case 14:
                                        e.next = 19;
                                        break;
                                    case 16:
                                        (e.prev = 16), (e.t0 = e.catch(2)), r.e(e.t0);
                                    case 19:
                                        return (e.prev = 19), r.f(), e.finish(19);
                                    case 22:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        null,
                        [[2, 16, 19, 22]],
                    );
                }),
            )).apply(this, arguments);
        }
        function re() {
            return (re = Object(a.a)(
                o.a.mark(function e(t) {
                    var n, r, a, s, c, l, u;
                    return o.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    (n = /com\/(.*?)\//.exec(t)[1]),
                                        (n = decodeURI(n)),
                                        console.log(n),
                                        (r = void 0);
                                    try {
                                        r = /#(.*)\?/.exec(t)[1];
                                    } catch (e) {}
                                    if (
                                        ((a = "https://centercourseware.sflep.com/".concat(
                                            n,
                                            "/resource/manifest.xml",
                                        )),
                                        (s = "https://centercourseware.sflep.com/"
                                            .concat(n, "/data")
                                            .concat(r, ".html")),
                                        (l = []),
                                        !F.includes(n))
                                    ) {
                                        e.next = 17;
                                        break;
                                    }
                                    return (e.next = 11), X(a, r, n);
                                case 11:
                                    (c = e.sent),
                                        (l = x(c)),
                                        document.querySelector('div[id^="word"]') && k(),
                                        i.c.USER_SETTINGS.autoSolve && D(l),
                                        (e.next = 40);
                                    break;
                                case 17:
                                    if (!W.includes(n)) {
                                        e.next = 25;
                                        break;
                                    }
                                    return (e.next = 20), V(s);
                                case 20:
                                    (c = e.sent),
                                        (l = f(c)),
                                        i.c.USER_SETTINGS.autoSolve && M(l),
                                        (e.next = 40);
                                    break;
                                case 25:
                                    if (!H.includes(n)) {
                                        e.next = 29;
                                        break;
                                    }
                                    setTimeout(function() {
                                        (l = L()),
                                            console.log(l),
                                            te(l),
                                            i.c.USER_SETTINGS.autoSolve && _(l);
                                    }, 2e3),
                                        (e.next = 40);
                                    break;
                                case 29:
                                    if (!J.includes(n)) {
                                        e.next = 37;
                                        break;
                                    }
                                    return (
                                        (u =
                                            location.href
                                                .split("&")[0]
                                                .replace("web.html?courseurl=", "data/") + ".xml"),
                                        (e.next = 33),
                                        V(u)
                                    );
                                case 33:
                                    (c = e.sent), (l = P(c)), (e.next = 40);
                                    break;
                                case 37:
                                    console.log("未处理的课程类型"), console.log(n), console.log(r);
                                case 40:
                                    console.log(l), te(l);
                                case 42:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            )).apply(this, arguments);
        }
        if (location.href.includes("centercourseware.sflep.com")) {
            var oe = "";
            setInterval(function() {
                var e = location.href;
                console.log(e),
                    e != oe &&
                        ((i.c.messages = []),
                        (function(e) {
                            re.apply(this, arguments);
                        })(e)),
                    (oe = e);
            }, 2e3);
        }
        var ae = n(19);
        (location.href.includes("https://course.sflep.com/student/StudyCourse.aspx?") ||
            location.href.includes("https://course.sflep.com/Course/TryCourse.aspx?")) &&
            Object(ae.a)();
    },
]);
