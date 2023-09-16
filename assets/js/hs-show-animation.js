!function (t, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.HSShowAnimation = n() : t.HSShowAnimation = n() }(window, function () { return (d = { "./src/js/hs-show-animation.js": function (module, exports, __webpack_require__) { "use strict"; eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n* HSShowAnimation Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSShowAnimation\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\nvar HSShowAnimation = function () {\n\tfunction HSShowAnimation(elem, settings) {\n\t\t_classCallCheck(this, HSShowAnimation);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tgroupName: null,\n\t\t\ttargetSelector: null,\n\t\t\tsiblingSelector: null,\n\t\t\teventType: 'click',\n\n\t\t\tclassMap: {\n\t\t\t\tactive: 'active'\n\t\t\t},\n\n\t\t\tanimationType: 'simple',\n\t\t\tanimationInit: 'animated',\n\t\t\tanimationIn: null,\n\t\t\tduration: null,\n\n\t\t\tafterShow: function afterShow() {}\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSShowAnimation, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-show-animation-options') ? JSON.parse($el.attr('data-hs-show-animation-options')) : {},\n\t\t\t    options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\tcontext._prepareObject($el, options);\n\n\t\t\t$el.on(options.eventType, function (e) {\n\t\t\t\te.preventDefault();\n\n\t\t\t\tif ($el.hasClass(options.classMap.active)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tcontext._activeClassChange($el, options);\n\n\t\t\t\tif (options.animationType === 'css-animation') {\n\t\t\t\t\tcontext._cssAnimation($el, options);\n\t\t\t\t} else {\n\t\t\t\t\tcontext._simpleAnimation($el, options);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_prepareObject',\n\t\tvalue: function _prepareObject(el, params) {\n\t\t\tvar options = params;\n\n\t\t\tel.attr('data-hs-show-animation-link-group', options.groupName);\n\n\t\t\tif (options.duration) {\n\t\t\t\t$(options.targetSelector).css({\n\t\t\t\t\tanimationDuration: options.duration + 'ms'\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t$(options.targetSelector).attr('data-hs-show-animation-target-group', options.groupName);\n\n\t\t\tif (options.siblingSelector) {\n\t\t\t\t$(options.siblingSelector).attr('data-hs-show-animation-target-group', options.groupName);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: '_activeClassChange',\n\t\tvalue: function _activeClassChange(el, params) {\n\t\t\tvar options = params;\n\n\t\t\t$('[data-hs-show-animation-link-group=\"' + options.groupName + '\"]').removeClass(options.classMap.active);\n\n\t\t\tel.addClass(options.classMap.active);\n\t\t}\n\t}, {\n\t\tkey: '_simpleAnimation',\n\t\tvalue: function _simpleAnimation(el, params) {\n\t\t\tvar options = params;\n\n\t\t\t$('[data-hs-show-animation-target-group=\"' + options.groupName + '\"]').hide().css({\n\t\t\t\topacity: 0\n\t\t\t});\n\n\t\t\t$(options.targetSelector).show().css({\n\t\t\t\topacity: 1\n\t\t\t});\n\n\t\t\toptions.afterShow();\n\t\t}\n\t}, {\n\t\tkey: '_cssAnimation',\n\t\tvalue: function _cssAnimation(el, params) {\n\t\t\tvar options = params;\n\n\t\t\t$('[data-hs-show-animation-target-group=\"' + options.groupName + '\"]').hide().css({\n\t\t\t\topacity: 0\n\t\t\t}).removeClass(options.animationInit + ' ' + options.animationIn);\n\n\t\t\t$(options.targetSelector).show();\n\n\t\t\toptions.afterShow();\n\n\t\t\tsetTimeout(function () {\n\t\t\t\t$(options.targetSelector).css({\n\t\t\t\t\topacity: 1\n\t\t\t\t}).addClass(options.animationInit + ' ' + options.animationIn);\n\t\t\t}, 50);\n\t\t}\n\t}]);\n\n\treturn HSShowAnimation;\n}();\n\nexports.default = HSShowAnimation;\n\n//# sourceURL=webpack://HSShowAnimation/./src/js/hs-show-animation.js?") } }, e = {}, f.m = d, f.c = e, f.d = function (t, n, e) { f.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e }) }, f.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, f.t = function (n, t) { if (1 & t && (n = f(n)), 8 & t) return n; if (4 & t && "object" == typeof n && n && n.__esModule) return n; var e = Object.create(null); if (f.r(e), Object.defineProperty(e, "default", { enumerable: !0, value: n }), 2 & t && "string" != typeof n) for (var o in n) f.d(e, o, function (t) { return n[t] }.bind(null, o)); return e }, f.n = function (t) { var n = t && t.__esModule ? function () { return t.default } : function () { return t }; return f.d(n, "a", n), n }, f.o = function (t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, f.p = "", f(f.s = "./src/js/hs-show-animation.js")).default; function f(t) { if (e[t]) return e[t].exports; var n = e[t] = { i: t, l: !1, exports: {} }; return d[t].call(n.exports, n, n.exports, f), n.l = !0, n.exports } var d, e });