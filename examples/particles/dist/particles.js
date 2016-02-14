/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(19);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(56);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _es = __webpack_require__(72);
	
	var _es2 = _interopRequireDefault(_es);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var KeyConsts = _es2.default.Consts.Input.Keys;
	
	var BlueParticle = function (_MomentumEngine$Class) {
	    (0, _inherits3.default)(BlueParticle, _MomentumEngine$Class);
	
	    function BlueParticle(x, y) {
	        (0, _classCallCheck3.default)(this, BlueParticle);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BlueParticle).call(this, x, y, 1, 1, new _es2.default.Classes.Color(255, 255, 255, 0)));
	
	        _this.timeToLive = 5000;
	        return _this;
	    }
	
	    (0, _createClass3.default)(BlueParticle, [{
	        key: "update",
	        value: function update(delta) {
	            this.color.a = this.color.a - delta * 0.00025;
	        }
	    }]);
	    return BlueParticle;
	}(_es2.default.Classes.Rect);
	
	window.onload = function () {
	
	    var width = 640,
	        height = 360,
	        baseSize = width / 64;
	
	    var particles = new _es2.default.Classes.Game({
	        canvas: document.getElementById("canvas"),
	        width: width,
	        height: height,
	        fixRatio: true,
	        desiredFps: 60,
	        inputs: {
	            keyboard: true
	        }
	    });
	
	    var black = new _es2.default.Classes.Color(0, 0, 0),
	        red = new _es2.default.Classes.Color(255, 0, 0);
	
	    var mainScene = new _es2.default.Classes.Rect(0, 0, width, height, black);
	    particles.addChildEntity(mainScene);
	
	    var rect = new _es2.default.Classes.Rect(width / 2 - baseSize, height / 2 - baseSize, baseSize * 2, baseSize * 2, red),
	        emitter = new _es2.default.Classes.Emitter(baseSize, baseSize, 4, new _es2.default.Classes.Vector2D(0, 1), BlueParticle);
	
	    mainScene.addChildEntity(rect);
	    rect.addChildEntity(emitter);
	
	    rect.update = function (delta) {
	
	        if (particles.inputs.keyboard.isPressed(KeyConsts.UP)) {
	            rect.pos.y -= 0.2 * delta;
	        }
	
	        if (particles.inputs.keyboard.isPressed(KeyConsts.DOWN)) {
	            rect.pos.y += 0.2 * delta;
	        }
	
	        if (particles.inputs.keyboard.isPressed(KeyConsts.LEFT)) {
	            rect.pos.x -= 0.2 * delta;
	        }
	
	        if (particles.inputs.keyboard.isPressed(KeyConsts.RIGHT)) {
	            rect.pos.x += 0.2 * delta;
	        }
	    };
	
	    //emitter.spread = Math.PI / 32;
	    emitter.setParticleParent(mainScene);
	    emitter.emitting = true;
	
	    particles.start();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(19);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(56);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _entity = __webpack_require__(63);
	
	var _entity2 = _interopRequireDefault(_entity);
	
	var _keyboardinput = __webpack_require__(65);
	
	var _keyboardinput2 = _interopRequireDefault(_keyboardinput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Game = function (_Entity) {
	    (0, _inherits3.default)(Game, _Entity);
	
	    function Game(config) {
	        (0, _classCallCheck3.default)(this, Game);
	        // Call entity constructor
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Game).call(this));
	
	        config = config || {};
	        config.inputs = config.inputs || {};
	
	        // Required params
	        if (config.canvas) {
	            _this.canvas = config.canvas;
	        } else {
	            throw new Error("MomentumEngine.Classes.Game must be constructed with a canvas");
	        }
	
	        if (config.width) {
	            _this.width = config.width;
	        } else {
	            throw new Error("MomentumEngine.Classes.Game must be constructed with canvas width");
	        }
	
	        if (config.height) {
	            _this.height = config.height;
	        } else {
	            throw new Error("MomentumEngine.Classes.Game must be constructed with canvas height");
	        }
	
	        // Optional params
	        _this.desiredFps = config.desiredFps || 60;
	
	        if (config.fixRatio) {
	
	            var deviceRatio = window.devicePixelRatio,
	                backingStoreRatio = 0;
	
	            // Unfortunately Ejecta requires calling getContext last, so we cannot get the backingStorePixelRatio. So for Ejecta's case, we set it to 1, and call getContext later.
	            if (typeof ejecta !== "undefined") {
	                backingStoreRatio = 1;
	            } else {
	
	                _this.context = _this.canvas.getContext("2d");
	
	                backingStoreRatio = _this.context.webkitBackingStorePixelRatio || _this.context.mozBackingStorePixelRatio || _this.context.msBackingStorePixelRatio || _this.context.oBackingStorePixelRatio || _this.context.backingStorePixelRatio || 1;
	            }
	
	            _this.scale = deviceRatio / backingStoreRatio;
	
	            _this.canvas.width = _this.width * _this.scale;
	            _this.canvas.height = _this.height * _this.scale;
	
	            _this.canvas.style.width = _this.width + "px";
	            _this.canvas.style.height = _this.height + "px";
	
	            // Call getContext last for Ejecta only.
	            if (typeof ejecta !== "undefined") {
	                _this.context = _this.canvas.getContext("2d");
	            }
	
	            _this.context.scale(deviceRatio, deviceRatio);
	        } else {
	
	            _this.canvas.width = _this.width;
	            _this.canvas.height = _this.height;
	
	            _this.context = _this.canvas.getContext("2d");
	        }
	
	        if (typeof _this.context.imageSmoothingEnabled !== "undefined") {
	            _this.context.imageSmoothingEnabled = config.imageSmoothing || false;
	        }
	
	        // Initialize defaults
	        _this.frameCounter = 0;
	
	        _this.inputs = {};
	        if (config.inputs.keyboard) {
	            _this.inputs.keyboard = new _keyboardinput2.default(_this);
	        }
	
	        _this._game = _this;
	        _this._lastFrameTimestamp = 0;
	        _this._wantPause = true;
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(Game, [{
	        key: "step",
	        value: function step(delta) {
	
	            this.frameCounter++;
	
	            this._updateEntity(delta);
	            this._renderEntity();
	        }
	    }, {
	        key: "start",
	        value: function start() {
	
	            var self = this; // NK: Hate doing this...better way plz?
	
	            if (self._wantPause) {
	                self._wantPause = false;
	            } else {
	                console.log("MomentumEngine.Classes.Game.start called, game instance is already started");
	                return false; // Game is already running
	            }
	
	            self._wantPause = false;
	
	            var requestFrame = function () {
	
	                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	                    window.setTimeout(callback, 1000 / self.desiredFps);
	                };
	            }();
	
	            self._lastFrameTimestamp = +new Date();
	            self.startTime = self._lastFrameTimestamp;
	
	            var loop = function loop() {
	
	                if (self._wantPause) {
	                    return;
	                }
	
	                var currentTimestamp = +new Date(),
	                    delta = currentTimestamp - self._lastFrameTimestamp;
	
	                delta = Math.min(delta, 1000 / self.desiredFps);
	                self._lastFrameTimestamp = currentTimestamp;
	
	                self.step(delta);
	
	                requestFrame(loop);
	            };
	
	            loop();
	            return true;
	        }
	    }, {
	        key: "pause",
	        value: function pause() {
	
	            if (!this._wantPause) {
	                this._wantPause = true;
	                return true;
	            } else {
	                console.log("MomentumEngine.Classes.Game.pause called, game instance is already paused");
	                return false;
	            }
	        }
	    }]);
	    return Game;
	}(_entity2.default);
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(5);
	
	__webpack_require__(7)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(13);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(16);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(18);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(20);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(21);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(46);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	__webpack_require__(39);
	module.exports = __webpack_require__(36)('iterator');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(24)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(25)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(27)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(29)
	  , has            = __webpack_require__(32)
	  , Iterators      = __webpack_require__(33)
	  , $iterCreate    = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(35)
	  , getProto       = __webpack_require__(18).getProto
	  , ITERATOR       = __webpack_require__(36)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(18)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(18)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(35)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(36)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).setDesc
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(36)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(37)('wks')
	  , uid    = __webpack_require__(38)
	  , Symbol = __webpack_require__(9).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	var Iterators = __webpack_require__(33);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(41)
	  , step             = __webpack_require__(42)
	  , Iterators        = __webpack_require__(33)
	  , toIObject        = __webpack_require__(43);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(44)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(45);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	__webpack_require__(55);
	module.exports = __webpack_require__(10).Symbol;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(18)
	  , global         = __webpack_require__(9)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(31)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(28)
	  , $fails         = __webpack_require__(13)
	  , shared         = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(35)
	  , uid            = __webpack_require__(38)
	  , wks            = __webpack_require__(36)
	  , keyOf          = __webpack_require__(49)
	  , $names         = __webpack_require__(50)
	  , enumKeys       = __webpack_require__(51)
	  , isArray        = __webpack_require__(52)
	  , anObject       = __webpack_require__(53)
	  , toIObject      = __webpack_require__(43)
	  , createDesc     = __webpack_require__(30)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(27)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(18)
	  , toIObject = __webpack_require__(43);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(43)
	  , getNames  = __webpack_require__(18).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(18);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(45);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(54);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 55 */
/***/ function(module, exports) {



/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(57);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(61);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(20);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(60).set});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(18).getDesc
	  , isObject = __webpack_require__(54)
	  , anObject = __webpack_require__(53);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(11)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(18);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _vector2d = __webpack_require__(64);
	
	var _vector2d2 = _interopRequireDefault(_vector2d);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Entity = function () {
	    function Entity(x, y) {
	        (0, _classCallCheck3.default)(this, Entity);
	
	
	        this.pos = new _vector2d2.default(x || 0, y || 0);
	        this.velocity = new _vector2d2.default(0, 0);
	        this.acceleration = new _vector2d2.default(0, 0);
	
	        this.state = {};
	        this.children = [];
	
	        this._calculatedPos = this.pos.clone();
	        this._lastCalculated = 0;
	        this._game = null;
	        this._parent = null;
	
	        this._creationTime = +new Date();
	    }
	
	    (0, _createClass3.default)(Entity, [{
	        key: "setVelocity",
	        value: function setVelocity(x, y) {
	
	            if (x instanceof _vector2d2.default) {
	                this.velocity = x;
	            } else {
	                this.velocity.x = x;
	                this.velocity.y = y;
	            }
	        }
	    }, {
	        key: "setAcceleration",
	        value: function setAcceleration(x, y) {
	
	            if (x instanceof _vector2d2.default) {
	                this.acceleration = x;
	            } else {
	                this.acceleration.x = x;
	                this.acceleration.y = y;
	            }
	        }
	    }, {
	        key: "createChildEntity",
	        value: function createChildEntity() {
	
	            var child = new Entity();
	
	            child._updateGame(this._game);
	            child._parent = this;
	            this.children.push(child);
	
	            return child;
	        }
	    }, {
	        key: "addChildEntity",
	        value: function addChildEntity(child) {
	
	            child._updateGame(this._game);
	            child._parent = this;
	            this.children.push(child);
	
	            return child;
	        }
	    }, {
	        key: "detachChildEntity",
	        value: function detachChildEntity(child) {
	
	            for (var i = 0; i < this.children.length; i++) {
	                if (this.children[i] == child) {
	
	                    this.children.splice(i, 1);
	                    return true;
	                }
	            }
	
	            return false;
	        }
	    }, {
	        key: "_preprocess",
	        value: function _preprocess() {
	
	            // NK: The purpose of this function is to calculate the true position of the entity relative to all its parents. It does this recursively, calling the _preprocess method all the way back up the tree and continuously adding the results together.
	
	            // Note there is a limiter, where the last calculated frame is stored, so that if the position has already been calculated for that node in this particular frame, the cached result is used rather than recalculating.
	
	            // When rendering, the draw calls should use this._calculatedPos rather than this.pos in order for the position to be correct.
	
	            if (this._game && this._lastCalculated < this._game.frameCounter) {
	
	                if (this._parent) {
	
	                    var parentPos = this._parent._preprocess();
	
	                    this._calculatedPos.x = this.pos.x + parentPos.x;
	                    this._calculatedPos.y = this.pos.y + parentPos.y;
	                } else {
	                    this._calculatedPos.x = this.pos.x;
	                    this._calculatedPos.y = this.pos.y;
	                }
	
	                this._lastCalculated = this._game.frameCounter;
	            }
	
	            return this._calculatedPos;
	        }
	    }, {
	        key: "_updateGame",
	        value: function _updateGame(game) {
	
	            this._game = game;
	
	            this.children.forEach(function (child) {
	                child._updateGame(game);
	            });
	        }
	    }, {
	        key: "_updateEntity",
	        value: function _updateEntity(delta) {
	
	            if (this.timeToLive) {
	                if (+new Date() - this._creationTime > this.timeToLive) {
	                    this._parent.detachChildEntity(this);
	                }
	            }
	
	            // Calculate new position based on velocity and acceleration if there's one set
	            if (this.velocity) {
	
	                if (this.acceleration) {
	                    this.velocity.add(this.acceleration);
	                }
	
	                this.pos.add(this.velocity);
	            }
	
	            // If there's an update method, call it
	            var updated = this.update && this.update(delta);
	
	            if (updated || typeof updated == "undefined" || typeof this.update === "undefined") {
	
	                this.children.forEach(function (child) {
	                    child._updateEntity(delta);
	                });
	            }
	        }
	    }, {
	        key: "_renderEntity",
	        value: function _renderEntity() {
	
	            this._preprocess();
	
	            var rendered = this.render && this.render();
	
	            if (rendered || typeof rendered == "undefined" || typeof this.render === "undefined") {
	
	                this.children.forEach(function (child) {
	                    child._renderEntity();
	                });
	            }
	        }
	    }]);
	    return Entity;
	}();
	
	exports.default = Entity;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Vector2D = function () {
	    function Vector2D(x, y) {
	        (0, _classCallCheck3.default)(this, Vector2D);
	
	        this.x = x || 0;this.y = y || 0;
	    }
	
	    (0, _createClass3.default)(Vector2D, [{
	        key: "invert",
	        value: function invert() {
	            this.x = -this.x;this.y = -this.y;
	            return this;
	        }
	    }, {
	        key: "add",
	        value: function add(val) {
	
	            if (val instanceof Vector2D) {
	                this.x += val.x;this.y += val.y;
	            } else {
	                this.x += val;this.y += val;
	            }
	
	            return this;
	        }
	    }, {
	        key: "subtract",
	        value: function subtract(val) {
	
	            if (val instanceof Vector2D) {
	                this.x -= val.x;this.y -= val.y;
	            } else {
	                this.x -= val;this.y -= val;
	            }
	
	            return this;
	        }
	    }, {
	        key: "multiply",
	        value: function multiply(val) {
	
	            if (val instanceof Vector2D) {
	                this.x *= val.x;this.y *= val.y;
	            } else {
	                this.x *= val;this.y *= val;
	            }
	
	            return this;
	        }
	    }, {
	        key: "divide",
	        value: function divide(val) {
	
	            if (val instanceof Vector2D) {
	                this.x /= val.x;this.y /= val.y;
	            } else {
	                this.x /= val;this.y /= val;
	            }
	
	            return this;
	        }
	    }, {
	        key: "equals",
	        value: function equals(val) {
	            return this.x == val.x && this.y == val.y;
	        }
	    }, {
	        key: "dot",
	        value: function dot(val) {
	            return this.x * val.x + this.y * val.y;
	        }
	    }, {
	        key: "length",
	        value: function length() {
	            return Math.sqrt(this.dot(this));
	        }
	    }, {
	        key: "unit",
	        value: function unit() {
	            return this.divide(this.length());
	        }
	    }, {
	        key: "min",
	        value: function min() {
	            return Math.min(this.x, this.y);
	        }
	    }, {
	        key: "max",
	        value: function max() {
	            return Math.max(this.x, this.y);
	        }
	    }, {
	        key: "degrees",
	        value: function degrees() {
	            return Math.atan(this.x, this.y) * 180;
	        }
	    }, {
	        key: "angle",
	        value: function angle() {
	            return Math.atan2(this.x, this.y);
	        }
	    }, {
	        key: "toArray",
	        value: function toArray() {
	            return [this.x, this.y];
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "[" + this.x + "}," + this.y + "}]";
	        }
	    }, {
	        key: "clone",
	        value: function clone() {
	            return new Vector2D(this.x, this.y);
	        }
	    }], [{
	        key: "fromAngle",
	        value: function fromAngle(angle, length) {
	            return new Vector2D(length * Math.cos(angle), length * Math.sin(angle));
	        }
	    }]);
	    return Vector2D;
	}();
	
	exports.default = Vector2D;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeyConsts = undefined;
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var KeyConsts = {
	    SPACE: 32,
	    BACKSPACE: 8,
	    TAB: 9,
	    ENTER: 13,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    PAUSE: 19,
	    CAPS_LOCK: 20,
	    ESCAPE: 27,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    INSERT: 45,
	    DELETE: 46,
	    NUM_0: 48,
	    NUM_1: 49,
	    NUM_2: 50,
	    NUM_3: 51,
	    NUM_4: 52,
	    NUM_5: 53,
	    NUM_6: 54,
	    NUM_7: 55,
	    NUM_8: 56,
	    NUM_9: 57,
	    CHAR_A: 65,
	    CHAR_B: 66,
	    CHAR_C: 67,
	    CHAR_D: 68,
	    CHAR_E: 69,
	    CHAR_F: 70,
	    CHAR_G: 71,
	    CHAR_H: 72,
	    CHAR_I: 73,
	    CHAR_J: 74,
	    CHAR_K: 75,
	    CHAR_L: 76,
	    CHAR_M: 77,
	    CHAR_N: 78,
	    CHAR_O: 79,
	    CHAR_P: 80,
	    CHAR_Q: 81,
	    CHAR_R: 82,
	    CHAR_S: 83,
	    CHAR_T: 84,
	    CHAR_U: 85,
	    CHAR_V: 86,
	    CHAR_W: 87,
	    CHAR_X: 88,
	    CHAR_Y: 89,
	    CHAR_Z: 90,
	    NUM_PAD_0: 96,
	    NUM_PAD_1: 97,
	    NUM_PAD_2: 98,
	    NUM_PAD_3: 99,
	    NUM_PAD_4: 100,
	    NUM_PAD_5: 101,
	    NUM_PAD_6: 102,
	    NUM_PAD_7: 103,
	    NUM_PAD_8: 104,
	    NUM_PAD_9: 105,
	    MULTIPLY: 106,
	    ADD: 107,
	    SUBTRACT: 109,
	    DECIMAL: 110,
	    DIVIDE: 111,
	    F1: 112,
	    F2: 113,
	    F3: 114,
	    F4: 115,
	    F5: 116,
	    F6: 117,
	    F7: 118,
	    F8: 119,
	    F9: 120,
	    F10: 121,
	    F11: 122,
	    F12: 123,
	    SEMICOLON: 186,
	    EQUALS: 187,
	    COMMA: 188,
	    DASH: 189,
	    PERIOD: 190,
	    FORWARD_SLASH: 191,
	    GRAVE: 192,
	    OPEN_BRACKET: 219,
	    BACK_SLASH: 220,
	    CLOSE_BRACKET: 221,
	    SINGLE_QUOTE: 222
	};
	
	var KeyboardInput = function () {
	    function KeyboardInput() {
	        (0, _classCallCheck3.default)(this, KeyboardInput);
	
	
	        var self = this;
	        self._keyState = {};
	
	        window.addEventListener("keydown", function (event) {
	            self._keyDownHandler(event);
	        }, false);
	
	        window.addEventListener("keyup", function (event) {
	            self._keyUpHandler(event);
	        }, false);
	    }
	
	    (0, _createClass3.default)(KeyboardInput, [{
	        key: "isPressed",
	        value: function isPressed(keyCode) {
	            return !!this._keyState[keyCode];
	        }
	    }, {
	        key: "_keyDownHandler",
	        value: function _keyDownHandler(event) {
	            this._keyState[event.keyCode] = true;
	        }
	    }, {
	        key: "_keyUpHandler",
	        value: function _keyUpHandler(event) {
	            this._keyState[event.keyCode] = false;
	        }
	    }]);
	    return KeyboardInput;
	}();
	
	exports.default = KeyboardInput;
	exports.KeyConsts = KeyConsts;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(19);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(56);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _entity = __webpack_require__(63);
	
	var _entity2 = _interopRequireDefault(_entity);
	
	var _vector2d = __webpack_require__(64);
	
	var _vector2d2 = _interopRequireDefault(_vector2d);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Emitter = function (_Entity) {
	    (0, _inherits3.default)(Emitter, _Entity);
	
	    function Emitter(x, y, rate, velocity, particle) {
	        (0, _classCallCheck3.default)(this, Emitter);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Emitter).call(this, x, y));
	
	        _this.particleVelocity = velocity;
	        _this.particleClass = particle;
	
	        _this.rate = rate;
	        _this.emitting = false;
	        _this.spread = Math.PI;
	        _this._lastEmitTime = _this._creationTime;
	        _this._wasEmitting = false;
	
	        _this._particles = [];
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(Emitter, [{
	        key: "setParticleParent",
	        value: function setParticleParent(entity) {
	            this._particleParent = entity;
	        }
	    }, {
	        key: "_emit",
	        value: function _emit() {
	
	            var ParticleClass = this.particleClass,
	                parent = this._particleParent || this._parent;
	
	            var angle = this.particleVelocity.angle() + this.spread - Math.random() * this.spread * 2,
	                magnitude = this.particleVelocity.length(),
	                velocity = _vector2d2.default.fromAngle(angle, magnitude);
	
	            var particle = new ParticleClass(this._calculatedPos.x, this._calculatedPos.y);
	            particle.velocity = velocity;
	
	            //this._particles.push(particle);
	            parent.addChildEntity(particle);
	        }
	    }, {
	        key: "_triggerEmissions",
	        value: function _triggerEmissions() {
	
	            // We prematurely call preprocess so that child particles can spawn from the emitters permission but be children of a different parent
	            // NK: This might cause a bug where child renders have an incorrect position because preprocess should normally be called after the update function but before the render, here it is before update. We'll see.
	            this._preprocess();
	
	            if (this.emitting) {
	
	                var currentTime = +new Date();
	
	                if (!this._wasEmitting) {
	                    this._wasEmitting = true;
	                    this._lastEmitTime = currentTime;
	                }
	
	                var emitDelta = currentTime - this._lastEmitTime;
	                if (emitDelta > this.rate) {
	
	                    var emissions = ~ ~(emitDelta / this.rate);
	
	                    this._lastEmitTime = currentTime + (emitDelta - this.rate * emissions);
	
	                    for (var i = 0; i < emissions; i++) {
	                        this._emit();
	                    }
	                }
	            } else {
	                this._wasEmitting = false;
	            }
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this._triggerEmissions();
	        }
	    }]);
	    return Emitter;
	}(_entity2.default);
	
	exports.default = Emitter;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(19);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(56);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _entity = __webpack_require__(63);
	
	var _entity2 = _interopRequireDefault(_entity);
	
	var _vector2d = __webpack_require__(64);
	
	var _vector2d2 = _interopRequireDefault(_vector2d);
	
	var _imageloader = __webpack_require__(68);
	
	var _imageloader2 = _interopRequireDefault(_imageloader);
	
	var _collisionmethods = __webpack_require__(69);
	
	var _collisionmethods2 = _interopRequireDefault(_collisionmethods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Sprite = function (_Entity) {
	    (0, _inherits3.default)(Sprite, _Entity);
	
	    function Sprite(x, y, width, height, image) {
	        (0, _classCallCheck3.default)(this, Sprite);
	
	
	        if (!image instanceof _imageloader2.default) {
	            throw new Error("MomentumEngine.Classes.Sprite must be instantiated with an ImageLoader instance");
	        }
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sprite).call(this, x, y));
	
	        _this.size = new _vector2d2.default(width || 0, height || 0);
	
	        _this._image = image;
	        _this._imagePos = new _vector2d2.default(0, 0);
	        _this._imageSize = new _vector2d2.default(0, 0);
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(Sprite, [{
	        key: "setImageCoords",
	        value: function setImageCoords(x, y, width, height) {
	
	            this._imagePos.x = x;
	            this._imagePos.y = y;
	            this._imageSize.x = width || 0;
	            this._imageSize.y = height || 0;
	        }
	    }, {
	        key: "isReady",
	        value: function isReady() {
	            return this._image.isLoaded() && !this._image.isError();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	
	            if (this.isReady() && this._game) {
	
	                var imageObj = this._image.getImageObj();
	
	                var subWidth = imageObj.width - this._imagePos.x,
	                    subHeight = imageObj.height - this._imagePos.y;
	
	                this._game.context.drawImage(imageObj, this._imagePos.x, this._imagePos.y, this._imageSize.x || subWidth, this._imageSize.y || subHeight, this._calculatedPos.x, this._calculatedPos.y, this.size.x || subWidth, this.size.y || subHeight);
	
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }]);
	    return Sprite;
	}(_entity2.default);
	
	exports.default = Sprite;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ImageLoader = function () {
	    function ImageLoader(src) {
	        var _this = this;
	
	        (0, _classCallCheck3.default)(this, ImageLoader);
	
	
	        this._loaded = false; // Default is true, set it to false until the image has loaded
	        this._error = false; // If the image fails to load, this will contain the reason
	
	        this._imageObj = new Image();
	
	        this._imageObj.addEventListener("load", function () {
	            _this._loaded = true;
	            _this._error = false;
	        });
	
	        this._imageObj.addEventListener("_error", function (err) {
	            _this._loaded = false;
	            _this._error = err;
	        });
	
	        this._imageObj.src = src;
	    }
	
	    (0, _createClass3.default)(ImageLoader, [{
	        key: "getImageObj",
	        value: function getImageObj() {
	
	            if (this._loaded) {
	                return this._imageObj;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "isLoaded",
	        value: function isLoaded() {
	            return this._loaded;
	        }
	    }, {
	        key: "isError",
	        value: function isError() {
	            return this._error;
	        }
	    }]);
	    return ImageLoader;
	}();
	
	exports.default = ImageLoader;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _rect = __webpack_require__(70);
	
	var _rect2 = _interopRequireDefault(_rect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CollisionMethods = function () {
	    function CollisionMethods() {
	        (0, _classCallCheck3.default)(this, CollisionMethods);
	    }
	
	    (0, _createClass3.default)(CollisionMethods, null, [{
	        key: "AABB",
	        value: function AABB(entity1, entity2) {
	
	            if (!entity1 instanceof _rect2.default || !entity2 instanceof _rect2.default) {
	                throw new Error("AABB collisions can only be checked on these entity types: Rect");
	            }
	
	            return entity1.pos.x < entity2.pos.x + entity2.size.x && entity1.pos.x + entity1.size.x > entity2.pos.x && entity1.pos.y < entity2.pos.y + entity2.size.y && entity1.size.y + entity1.pos.y > entity2.pos.y;
	        }
	    }]);
	    return CollisionMethods;
	}();
	
	exports.default = CollisionMethods;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(19);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(56);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _entity = __webpack_require__(63);
	
	var _entity2 = _interopRequireDefault(_entity);
	
	var _vector2d = __webpack_require__(64);
	
	var _vector2d2 = _interopRequireDefault(_vector2d);
	
	var _collisionmethods = __webpack_require__(69);
	
	var _collisionmethods2 = _interopRequireDefault(_collisionmethods);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Rect = function (_Entity) {
	    (0, _inherits3.default)(Rect, _Entity);
	
	    function Rect(x, y, width, height, color) {
	        (0, _classCallCheck3.default)(this, Rect);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Rect).call(this, x, y));
	
	        _this.size = new _vector2d2.default(width, height);
	        _this.color = color;
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(Rect, [{
	        key: "isCollidingWith",
	        value: function isCollidingWith(entity) {
	
	            if (entity instanceof Rect) {
	                return _collisionmethods2.default.AABB(this, entity);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	
	            if (this._game) {
	
	                this._game.context.fillStyle = this.color.toString();
	                this._game.context.fillRect(this._calculatedPos.x, this._calculatedPos.y, this.size.x, this.size.y);
	
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }]);
	    return Rect;
	}(_entity2.default);
	
	exports.default = Rect;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Color = function () {
	    function Color(r, g, b, a) {
	        (0, _classCallCheck3.default)(this, Color);
	
	
	        this.r = r || 0;
	        this.g = g || 0;
	        this.b = b || 0;
	        this.a = a || 1;
	    }
	
	    (0, _createClass3.default)(Color, [{
	        key: "toString",
	        value: function toString() {
	            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
	        }
	    }, {
	        key: "toHex",
	        value: function toHex() {
	            return "#" + (r << 16 | g << 8 | b).toString(16);
	        }
	    }]);
	    return Color;
	}();
	
	exports.default = Color;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _emitter = __webpack_require__(66);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _entity = __webpack_require__(63);
	
	var _entity2 = _interopRequireDefault(_entity);
	
	var _vector2d = __webpack_require__(64);
	
	var _vector2d2 = _interopRequireDefault(_vector2d);
	
	var _sprite = __webpack_require__(67);
	
	var _sprite2 = _interopRequireDefault(_sprite);
	
	var _rect = __webpack_require__(70);
	
	var _rect2 = _interopRequireDefault(_rect);
	
	var _color = __webpack_require__(71);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _imageloader = __webpack_require__(68);
	
	var _imageloader2 = _interopRequireDefault(_imageloader);
	
	var _keyboardinput = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Classes = {
	    Game: _game2.default,
	    Emitter: _emitter2.default,
	    Entity: _entity2.default,
	    Sprite: _sprite2.default,
	    Rect: _rect2.default,
	    Vector2D: _vector2d2.default,
	    Color: _color2.default,
	    ImageLoader: _imageloader2.default
	};
	
	var Consts = {
	    Input: {
	        Keys: _keyboardinput.KeyConsts
	    }
	};
	
	exports.default = {
	    Classes: Classes,
	    Consts: Consts
	};

/***/ }
/******/ ]);
//# sourceMappingURL=particles.js.map