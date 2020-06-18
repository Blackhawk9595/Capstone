// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n\n<header>\n<div id=\"jumbotron\">\n\n<h1>EIS ENTERPRISES</h1>\n<hr>\n\n\n</div>\n\n</header\n";
};

exports.default = _default;
},{}],"components/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n<nav>\n    <ul>\n    ".concat(st.reduce(function (html, link) {
    return html + "<li><a href=\"/".concat(link.title !== "home" ? link.title : "", "\" title=\"").concat(link.title, "\" data-navigo>").concat(link.text, "</a></li>");
  }, ""), "\n    </ul>\n    </nav>\n");
};
/* <li><a href="./home">home</a></li>
<li><a href="./about">about</a></li>
<li><a href="./products">products</a></li>
<li><a href="./docs">docs</a></li> */


exports.default = _default;
},{}],"components/views/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<h2>Home</h2>\n<img id=\"homePic\" src=https://cdn.pixabay.com/photo/2020/02/13/15/37/ai-4846063_960_720.jpg alt=\"Tech Wars\" width=\"700\" height=\"600\">\n<hr>\n    <p style='text-align: left'> What is technology? The word \u2018technology\u2019 comes from two Greek words. \n      These words are \u2018techne\u2019 which means \u2018craft\u2019 or \u2018skill\u2019, and \u2018logos\u2019, \n      which can be translated as \u2018knowledge\u2019. So, technology is a way of putting\n      theoretical knowledge into action by means of \n      skills or engineering methods.\n      </p>\n";
};

exports.default = _default;
},{}],"components/views/about.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<h2>About Us</h2>\n<hr>\n<img src=\"data:image/jpeg;base64,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\" alt=\"Artificial Intelligence\" id=\"AI\">\n<div id=\"aboutParagraphs\">\n  <p>Eis Enterprises was established in August 2018 as a libertarian counter strike against anti human technology. </p>\n\n  <p>Located in Saint Louis Mo. Eis Enterprises offers the most advanced innovation and technology software development and consultancy services to different companies and organizations. They specialize in web application design, programming, database design and administration, network administration, Robotics, Hardware equipment and documentaries.</p>\n\n  <p>Eis Enterprises\u2019 mission is to become a market leader by consistently exceeding our Customer\u2019s expectations; providing them with best of unorthodox 3D technology solutions. We will continually communicate with, and learn from our Customers, in order to improve our products and services. And, we will keep on top of today\u2019s and tommorrow\u2019s technology, no matter how fast it moves, to ensure our Customers always have the best tools available to them.</p>\n\n  <p>\nTechnology can serve virtually any combination of demographic, psychographic, geographic and behavioristic characteristics in the consumer market. The possibilities are endless here, as each conceivable target market in the consumer segment has at least one unique need that technology can serve. </p>\n</div\n\n";
};

exports.default = _default;
},{}],"components/views/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<h2>Products</h2>\n    <hr>\n  \n    <div id=\"Products\">\n\n    \n        <div>\n      \n\n        <h3>Revolutionary War Arms</h3>\n        <h4>Long Guns</h4>\n        <h3>Charleville Musket</h3>\n\n        <img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fe/Fusil_d%27infanterie_1766.jpg\" alt=\"Girl in a jacket\" width=\"400\" height=\"400\"> \n\n      \n        <p>The Charleville Musket was a .69 caliber standard French infantry musket used in the 18th and 19th centuries. It was made in 1717 and was last produced during the 1840s. However, it still saw limited use in conflicts through the mid-19th century (such as the Crimean War).</p>\n        \n        <h3>Marquis de  Lafayette Musket</h3>\n              <img src=\"https://i2.wp.com/thehistoryjunkie.com/wp-content/uploads/2019/06/charle.jpg?ssl=1\" alt=\"Girl in a jacket\" width=\"400\" height=\"400\"> \n<p>\n  The Marquis de Lafayette was a muzzleloading smoothbore musket and one of the most common weapons from the Revolutionary War. While it originated in Great Britain and was a British weapon it was the primary musket used by the Americans. Considering that the colonists were former British subjects it makes sense.\n\n\n</p>\n<h4>Short Guns</h4>\n\n<h3>Long John Dragoon Pistol</h3>\n\n<img src=\"https://barajasdominguez.files.wordpress.com/2014/04/flintlock2.jpg\" alt=\"Girl in a jacket\" width=\"400\" height=\"400\"> \n<p>\n  Historically, this pistol could have been made anywhere in the Colonies or eastern states during the last quarter of the 18th century or the first few years of the 19th century.\n\n\n</p>\n  </main>\n\n  <form id=\"Order Now\" action=\"\" method=\"POST\">\n    <div id=\"Order Now\">\n      <h3>Order Now</h3>\n      <div>\n        <input type=\"radio\" id=\"delivery\" name=\"deliveryType\" value=\"delivery\" checked>\n        <label for=\"delivery\">Delivery</label>\n        <input type=\"radio\" id=\"pickUp\" name=\"deliveryType\" value=\"pickUp\">\n        <label for=\"pickUp\">Pick Up</label>\n      </div>\n      <div>\n        <label for=\"Model\">Model: </label>\n        <select name=\"Model\" id=\"Model\">\n          <option value=\"Charleville\">Charleville</option>\n          <option value=\"Marquis de Lafayette\">Marquis de Lafayette</option>\n          <option value=\"Fair\">Fair</option>\n          <option value=\"Poor\">Poor</option>\n        </select>\n      </div>\n      <div>\n        <label for=\"Year\">Year: </label>\n        <select name=\"Year\" id=\"Year\">\n          <option value=\"1717\">1717</option>\n          <option value=\"1728\">1728</option>\n          <option value=\"1763\">1763</option>\n          <option value=\"1766\">1766</option>\n        </select>\n      </div>\n      <div>\n        <label for=\"Stock\">Stock: </label>\n        <select name=\"Stock\" id=\"Stock\">\n          <option value=\"Red Ceder\">Red Ceder</option>\n          <option value=\"Hickory\">Hickory</option>\n          <option value=\"Walnut\">Walnut</option>\n          <option value=\"Oak\">Oak</option>\n        </select>\n      </div>\n      <div>\n        <label for=\"Condition\">Condition: </label>\n        <select name=\"Condition\" id=\"Condition\">\n          <option value=\"Excellent\">Excellent</option>\n          <option value=\"Good\">Good</option>\n          <option value=\"Fair\">Fair</option>\n          <option value=\"Poor\">Poor</option>\n        </select>\n      </div>\n      <fieldset>\n        <legend id=\"Accessories\">Accessories</legend>\n        <div>\n          <input type=\"checkbox\" name=\"Accessories\" id=\"Bayonet\" value=\"Bayonet\">\n          <label for=\"Bayonet\">Bayonet</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" name=\"Accessories\" id=\"Sling\" value=\"Sling\">\n          <label for=\"Sling\">Sling</label>\n        </div>\n        <div>\n          <input type=\"checkbox\" name=\"Accessories\" id=\"Smoothbore\" value=\"Smoothbore\">\n          <label for=\"Smoothbore\">Smoothbore</label></div>\n        <div>\n          <input type=\"checkbox\" name=\"Accessories\" id=\"Rifling\" value=\"Rifling\">\n          <label for=\"Rifling\">Rifling</label></div>\n        <div>\n          \n      </fieldset>\n    </div>\n    <div id=\"customerInfoForm\">\n      <h3>Customer Info</h3>\n      <div>\n        <label for=\"name\">Name: </label>\n        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your Name\">\n      </div>\n      <div>\n        <label for=\"phone\">Phone #: </label>\n        <input type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"xxx-xxx-xxxx\">\n      </div>\n      <div>\n        <label for=\"email\">Email: </label>\n        <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"your@email.here\">\n      </div>\n      <div id=\"addressSection\">\n        <h4>Address</h4>\n        <div>\n          <label for=\"address\">Address: </label>\n          <input type=\"text\" id=\"address\" name=\"address\" placeholder=\"123 Your Address\">\n        </div>\n        <div>\n          <label for=\"city\">City: </label>\n          <input type=\"text\" id=\"city\" name=\"city\" placeholder=\"Your City\">\n        </div>\n        <div>\n          <label for=\"zipcode\">Zipcode: </label>\n          <input type=\"text\" id=\"zipcode\" name=\"zipcode\" placeholder=\"xxxxx\">\n        </div>\n      </div>\n      <input type=\"submit\" name=\"submit\" value=\"Order Pizza\">\n    </div>\n  </form>\n";
};

exports.default = _default;
},{}],"components/views/docs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<h2>Docs</h2>\n    <hr>\n    <h3>Human v Machines</h3>\n    <h4>Episode one</h4>\n    <h5>The Global Surveillance System</h5>\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/JT-XgUMgqIM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n";
};

exports.default = _default;
},{}],"components/views/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "home", {
  enumerable: true,
  get: function () {
    return _home.default;
  }
});
Object.defineProperty(exports, "about", {
  enumerable: true,
  get: function () {
    return _about.default;
  }
});
Object.defineProperty(exports, "products", {
  enumerable: true,
  get: function () {
    return _products.default;
  }
});
Object.defineProperty(exports, "docs", {
  enumerable: true,
  get: function () {
    return _docs.default;
  }
});

var _home = _interopRequireDefault(require("./home"));

var _about = _interopRequireDefault(require("./about"));

var _products = _interopRequireDefault(require("./products"));

var _docs = _interopRequireDefault(require("./docs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./home":"components/views/home.js","./about":"components/views/about.js","./products":"components/views/products.js","./docs":"components/views/docs.js"}],"components/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var views = _interopRequireWildcard(require("./views"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(st) {
  return "\n    ".concat(views[st.view](st), "\n");
};

exports.default = _default;
},{"./views":"components/views/index.js"}],"components/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n\n<footer id=\"footer\"><p style=\"font-size: 50%;\">&copy;EIS ENTERPRISES 2020</p>\n<a href=\"#\" class=\"fa fa-twitter\"></a>\n<a href=\"#\" class=\"fa fa-linkedin\"></a>\n\n<a href=\"#\" class=\"fa fa-github\"></a>\n</footer>\n";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});
Object.defineProperty(exports, "nav", {
  enumerable: true,
  get: function () {
    return _nav.default;
  }
});
Object.defineProperty(exports, "main", {
  enumerable: true,
  get: function () {
    return _main.default;
  }
});
Object.defineProperty(exports, "footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});

var _header = _interopRequireDefault(require("./header"));

var _nav = _interopRequireDefault(require("./nav"));

var _main = _interopRequireDefault(require("./main"));

var _footer = _interopRequireDefault(require("./footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./header":"components/header.js","./nav":"components/nav.js","./main":"components/main.js","./footer":"components/footer.js"}],"store/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  view: "home"
};
exports.default = _default;
},{}],"store/about.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  view: "about"
};
exports.default = _default;
},{}],"store/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  view: "products"
};
exports.default = _default;
},{}],"store/docs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  view: "docs"
};
exports.default = _default;
},{}],"store/links.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  title: "home",
  text: "Home"
}, {
  title: "about",
  text: "About"
}, {
  title: "docs",
  text: "Docs"
}, {
  title: "products",
  text: "Products"
}];
exports.default = _default;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "home", {
  enumerable: true,
  get: function () {
    return _home.default;
  }
});
Object.defineProperty(exports, "about", {
  enumerable: true,
  get: function () {
    return _about.default;
  }
});
Object.defineProperty(exports, "products", {
  enumerable: true,
  get: function () {
    return _products.default;
  }
});
Object.defineProperty(exports, "docs", {
  enumerable: true,
  get: function () {
    return _docs.default;
  }
});
Object.defineProperty(exports, "links", {
  enumerable: true,
  get: function () {
    return _links.default;
  }
});

var _home = _interopRequireDefault(require("./home"));

var _about = _interopRequireDefault(require("./about"));

var _products = _interopRequireDefault(require("./products"));

var _docs = _interopRequireDefault(require("./docs"));

var _links = _interopRequireDefault(require("./links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./home":"store/home.js","./about":"store/about.js","./products":"store/products.js","./docs":"store/docs.js","./links":"store/links.js"}],"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],"index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");

var state = _interopRequireWildcard(require("./store"));

var _navigo = _interopRequireDefault(require("navigo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = new _navigo.default(window.location.origin);
router.on({
  ":page": function page(params) {
    return render(state[params.page]);
  },
  "/": function _() {
    return render(state.home);
  }
}).resolve();

function render() {
  var st = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state.home;
  document.querySelector("#root").innerHTML = "\n  ".concat((0, _components.header)(), "\n  ").concat((0, _components.nav)(state.links), "\n  ").concat((0, _components.main)(st), "\n  ").concat((0, _components.footer)(), "\n  ");
  router.updatePageLinks();
  addNavListeners(st);
}

;

function addNavListeners() {
  document.querySelectorAll("nav > ul").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      var page = event.target.textContent;
      render(state[page]);
    });
  });
}
},{"./components":"components/index.js","./store":"store/index.js","navigo":"node_modules/navigo/lib/navigo.min.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59828" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Capstone.e31bb0bc.js.map