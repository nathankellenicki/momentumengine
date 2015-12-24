!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=n(51),a=i(u),s=n(52),c=i(s),f=n(54),l=i(f),d=n(57),h=i(d),_=n(58),y=i(_),p=n(55),m=i(p),v=n(53),g={Game:o["default"],Entity:a["default"],Sprite:l["default"],Rect:h["default"],Vector2D:c["default"],Color:y["default"],ImageLoader:m["default"]},x={Input:{Keys:v.KeyConsts}};window.MomentumEngine={Classes:g,Consts:x}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(44),h=i(d),_=n(51),y=i(_),p=n(53),m=i(p),v=function(t){function e(t){(0,a["default"])(this,e);var n=(0,l["default"])(this,(0,o["default"])(e).call(this));if(t=t||{},t.inputs=t.inputs||{},!t.canvas)throw new Error("MomentumEngine.Classes.Game must be constructed with a canvas");if(n.canvas=t.canvas,!t.width)throw new Error("MomentumEngine.Classes.Game must be constructed with canvas width");if(n.width=t.width,!t.height)throw new Error("MomentumEngine.Classes.Game must be constructed with canvas height");if(n.height=t.height,n.desiredFps=t.desiredFps||60,t.fixRatio){var i=window.devicePixelRatio,r=0;"undefined"!=typeof ejecta?r=1:(n.context=n.canvas.getContext("2d"),r=n.context.webkitBackingStorePixelRatio||n.context.mozBackingStorePixelRatio||n.context.msBackingStorePixelRatio||n.context.oBackingStorePixelRatio||n.context.backingStorePixelRatio||1),n.scale=i/r,n.canvas.width=n.width*n.scale,n.canvas.height=n.height*n.scale,n.canvas.style.width=n.width+"px",n.canvas.style.height=n.height+"px","undefined"!=typeof ejecta&&(n.context=n.canvas.getContext("2d")),n.context.scale(i,i)}else n.canvas.width=n.width,n.canvas.height=n.height,n.context=n.canvas.getContext("2d");return"undefined"!=typeof n.context.imageSmoothingEnabled&&(n.context.imageSmoothingEnabled=t.imageSmoothing||!1),n.frameCounter=0,n.inputs={},t.inputs.keyboard&&(n.inputs.keyboard=new m["default"](n)),n._game=n,n._lastFrameTimestamp=0,n._wantPause=!0,n}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"step",value:function(t){this.frameCounter++,this._updateEntity(t),this._renderEntity()}},{key:"start",value:function(){var t=this;if(!t._wantPause)return console.log("MomentumEngine.Classes.Game.start called, game instance is already started"),!1;t._wantPause=!1,t._wantPause=!1;var e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/t.desiredFps)}}();t._lastFrameTimestamp=+new Date,t.startTime=t._lastFrameTimestamp;var n=function i(){if(!t._wantPause){var n=+new Date,r=n-t._lastFrameTimestamp;r=Math.min(r,1e3/t.desiredFps),t._lastFrameTimestamp=n,t.step(r),e(i)}};return n(),!0}},{key:"pause",value:function(){return this._wantPause?(console.log("MomentumEngine.Classes.Game.pause called, game instance is already paused"),!1):(this._wantPause=!0,!0)}}]),e}(y["default"]);e["default"]=v},function(t,e,n){t.exports={"default":n(3),__esModule:!0}},function(t,e,n){n(4),t.exports=n(10).Object.getPrototypeOf},function(t,e,n){var i=n(5);n(7)("getPrototypeOf",function(t){return function(e){return t(i(e))}})},function(t,e,n){var i=n(6);t.exports=function(t){return Object(i(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(8),r=n(10),o=n(13);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],u={};u[t]=e(n),i(i.S+i.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){var i=n(9),r=n(10),o=n(11),u="prototype",a=function(t,e,n){var s,c,f,l=t&a.F,d=t&a.G,h=t&a.S,_=t&a.P,y=t&a.B,p=t&a.W,m=d?r:r[e]||(r[e]={}),v=d?i:h?i[e]:(i[e]||{})[u];d&&(n=e);for(s in n)c=!l&&v&&s in v,c&&s in m||(f=c?v[s]:n[s],m[s]=d&&"function"!=typeof v[s]?n[s]:y&&c?o(f,i):p&&v[s]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):_&&"function"==typeof f?o(Function.call,f):f,_&&((m[u]||(m[u]={}))[s]=f))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(12);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(16),o=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e,n){var i=n(18);t.exports=function(t,e,n){return i.setDesc(t,e,n)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(20),o=i(r);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,o["default"])(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t){return t&&"undefined"!=typeof _Symbol&&t.constructor===_Symbol?"symbol":typeof t}e.__esModule=!0;var o=n(21),u=i(o);e["default"]=function(t){return t&&"undefined"!=typeof u["default"]&&t.constructor===u["default"]?"symbol":"undefined"==typeof t?"undefined":r(t)}},function(t,e,n){t.exports={"default":n(22),__esModule:!0}},function(t,e,n){n(23),n(43),t.exports=n(10).Symbol},function(t,e,n){"use strict";var i=n(18),r=n(9),o=n(24),u=n(25),a=n(8),s=n(26),c=n(13),f=n(29),l=n(30),d=n(32),h=n(31),_=n(33),y=n(37),p=n(38),m=n(39),v=n(40),g=n(34),x=n(28),b=i.getDesc,w=i.setDesc,P=i.create,S=y.get,M=r.Symbol,E=r.JSON,A=E&&E.stringify,C=!1,k=h("_hidden"),O=i.isEnum,R=f("symbol-registry"),j=f("symbols"),D="function"==typeof M,N=Object.prototype,H=u&&c(function(){return 7!=P(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=b(N,e);i&&delete N[e],w(t,e,n),i&&t!==N&&w(N,e,i)}:w,F=function(t){var e=j[t]=P(M.prototype);return e._k=t,u&&C&&H(N,t,{configurable:!0,set:function(e){o(this,k)&&o(this[k],t)&&(this[k][t]=!1),H(this,t,x(1,e))}}),e},T=function(t){return"symbol"==typeof t},U=function(t,e,n){return n&&o(j,e)?(n.enumerable?(o(t,k)&&t[k][e]&&(t[k][e]=!1),n=P(n,{enumerable:x(0,!1)})):(o(t,k)||w(t,k,x(1,{})),t[k][e]=!0),H(t,e,n)):w(t,e,n)},I=function(t,e){v(t);for(var n,i=p(e=g(e)),r=0,o=i.length;o>r;)U(t,n=i[r++],e[n]);return t},L=function(t,e){return void 0===e?P(t):I(P(t),e)},B=function(t){var e=O.call(this,t);return e||!o(this,t)||!o(j,t)||o(this,k)&&this[k][t]?e:!0},G=function(t,e){var n=b(t=g(t),e);return!n||!o(j,e)||o(t,k)&&t[k][e]||(n.enumerable=!0),n},z=function(t){for(var e,n=S(g(t)),i=[],r=0;n.length>r;)o(j,e=n[r++])||e==k||i.push(e);return i},K=function(t){for(var e,n=S(g(t)),i=[],r=0;n.length>r;)o(j,e=n[r++])&&i.push(j[e]);return i},W=function(t){if(void 0!==t&&!T(t)){for(var e,n,i=[t],r=1,o=arguments;o.length>r;)i.push(o[r++]);return e=i[1],"function"==typeof e&&(n=e),(n||!m(e))&&(e=function(t,e){return n&&(e=n.call(this,t,e)),T(e)?void 0:e}),i[1]=e,A.apply(E,i)}},q=c(function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))});D||(M=function(){if(T(this))throw TypeError("Symbol is not a constructor");return F(d(arguments.length>0?arguments[0]:void 0))},s(M.prototype,"toString",function(){return this._k}),T=function(t){return t instanceof M},i.create=L,i.isEnum=B,i.getDesc=G,i.setDesc=U,i.setDescs=I,i.getNames=y.get=z,i.getSymbols=K,u&&!n(42)&&s(N,"propertyIsEnumerable",B,!0));var J={"for":function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){return _(R,t)},useSetter:function(){C=!0},useSimple:function(){C=!1}};i.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=h(t);J[t]=D?e:F(e)}),C=!0,a(a.G+a.W,{Symbol:M}),a(a.S,"Symbol",J),a(a.S+a.F*!D,"Object",{create:L,defineProperty:U,defineProperties:I,getOwnPropertyDescriptor:G,getOwnPropertyNames:z,getOwnPropertySymbols:K}),E&&a(a.S+a.F*(!D||q),"JSON",{stringify:W}),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=n(27)},function(t,e,n){var i=n(18),r=n(28);t.exports=n(25)?function(t,e,n){return i.setDesc(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(9),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var i=n(18).setDesc,r=n(24),o=n(31)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(29)("wks"),r=n(32),o=n(9).Symbol;t.exports=function(t){return i[t]||(i[t]=o&&o[t]||(o||r)("Symbol."+t))}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){var i=n(18),r=n(34);t.exports=function(t,e){for(var n,o=r(t),u=i.getKeys(o),a=u.length,s=0;a>s;)if(o[n=u[s++]]===e)return n}},function(t,e,n){var i=n(35),r=n(6);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(34),r=n(18).getNames,o={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==o.call(t)?a(t):r(i(t))}},function(t,e,n){var i=n(18);t.exports=function(t){var e=i.getKeys(t),n=i.getSymbols;if(n)for(var r,o=n(t),u=i.isEnum,a=0;o.length>a;)u.call(t,r=o[a++])&&e.push(r);return e}},function(t,e,n){var i=n(36);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){var i=n(41);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=!0},function(t,e){},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(45),o=i(r),u=n(49),a=i(u),s=n(20),c=i(s);e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,c["default"])(e)));t.prototype=(0,a["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o["default"]?(0,o["default"])(t,e):t.__proto__=e)}},function(t,e,n){t.exports={"default":n(46),__esModule:!0}},function(t,e,n){n(47),t.exports=n(10).Object.setPrototypeOf},function(t,e,n){var i=n(8);i(i.S,"Object",{setPrototypeOf:n(48).set})},function(t,e,n){var i=n(18).getDesc,r=n(41),o=n(40),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(11)(Function.call,i(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){t.exports={"default":n(50),__esModule:!0}},function(t,e,n){var i=n(18);t.exports=function(t,e){return i.create(t,e)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=n(52),c=i(s),f=function(){function t(e,n){(0,o["default"])(this,t),this.pos=new c["default"](e||0,n||0),this.state={},this.children=[],this._calculatedPos=this.pos.clone(),this._lastCalculated=0,this._game=null,this._parent=null}return(0,a["default"])(t,[{key:"createChildEntity",value:function(){var e=new t;return e._updateGame(this._game),e._parent=this,this.children.push(e),e}},{key:"addChildEntity",value:function(t){return t._updateGame(this._game),t._parent=this,this.children.push(t),t}},{key:"detachChildEntity",value:function(t){for(var e=0;e<this.children.length;e++)if(this.children[e]==t)return this.children.splice(e,1),!0;return!1}},{key:"_preprocess",value:function(){if(this._game&&this._lastCalculated<this._game.frameCounter){if(this._parent){var t=this._parent._preprocess();this._calculatedPos.x=this.pos.x+t.x,this._calculatedPos.y=this.pos.y+t.y}else this._calculatedPos.x=this.pos.x,this._calculatedPos.y=this.pos.y;this._lastCalculated=this._game.frameCounter}return this._calculatedPos}},{key:"_updateGame",value:function(t){this._game=t,this.children.forEach(function(e){e._updateGame(t)})}},{key:"_updateEntity",value:function(t){var e=this.update&&this.update(t);(e||"undefined"==typeof e||"undefined"==typeof this.update)&&this.children.forEach(function(e){e._updateEntity(t)})}},{key:"_renderEntity",value:function(){this._preprocess();var t=this.render&&this.render();(t||"undefined"==typeof t||"undefined"==typeof this.render)&&this.children.forEach(function(t){t._renderEntity()})}}]),t}();e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=function(){function t(e,n){(0,o["default"])(this,t),this.x=e||0,this.y=n||0}return(0,a["default"])(t,[{key:"invert",value:function(){return this.x=-this.x,this.y=-this.y,this}},{key:"add",value:function(e){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=e),this}},{key:"subtract",value:function(e){return e instanceof t?(this.x-=e.x,this.y-=e.y):(this.x-=e,this.y-=e),this}},{key:"multiply",value:function(e){return e instanceof t?(this.x*=e.x,this.y*=e.y):(this.x*=e,this.y*=e),this}},{key:"divide",value:function(e){return e instanceof t?(this.x/=e.x,this.y/=e.y):(this.x/=e,this.y/=e),this}},{key:"equals",value:function(t){return this.x==t.x&&this.y==t.y}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"unit",value:function(){return this.divide(this.length())}},{key:"min",value:function(){return Math.min(this.x,this.y)}},{key:"max",value:function(){return Math.max(this.x,this.y)}},{key:"degrees",value:function(){return 180*Math.atan(this.x,this.y)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"toString",value:function(){return"["+this.x+"},"+this.y+"}]"}},{key:"clone",value:function(){return new t(this.x,this.y)}}]),t}();e["default"]=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.KeyConsts=void 0;var r=n(14),o=i(r),u=n(15),a=i(u),s={SPACE:32,BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,NUM_0:48,NUM_1:49,NUM_2:50,NUM_3:51,NUM_4:52,NUM_5:53,NUM_6:54,NUM_7:55,NUM_8:56,NUM_9:57,CHAR_A:65,CHAR_B:66,CHAR_C:67,CHAR_D:68,CHAR_E:69,CHAR_F:70,CHAR_G:71,CHAR_H:72,CHAR_I:73,CHAR_J:74,CHAR_K:75,CHAR_L:76,CHAR_M:77,CHAR_N:78,CHAR_O:79,CHAR_P:80,CHAR_Q:81,CHAR_R:82,CHAR_S:83,CHAR_T:84,CHAR_U:85,CHAR_V:86,CHAR_W:87,CHAR_X:88,CHAR_Y:89,CHAR_Z:90,NUM_PAD_0:96,NUM_PAD_1:97,NUM_PAD_2:98,NUM_PAD_3:99,NUM_PAD_4:100,NUM_PAD_5:101,NUM_PAD_6:102,NUM_PAD_7:103,NUM_PAD_8:104,NUM_PAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,EQUALS:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRACKET:221,SINGLE_QUOTE:222},c=function(){function t(){(0,o["default"])(this,t);var e=this;e._keyState={},window.addEventListener("keydown",function(t){e._keyDownHandler(t)},!1),window.addEventListener("keyup",function(t){e._keyUpHandler(t)},!1)}return(0,a["default"])(t,[{key:"isPressed",value:function(t){return!!this._keyState[t]}},{key:"_keyDownHandler",value:function(t){this._keyState[t.keyCode]=!0}},{key:"_keyUpHandler",value:function(t){this._keyState[t.keyCode]=!1}}]),t}();e["default"]=c,e.KeyConsts=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(44),h=i(d),_=n(51),y=i(_),p=n(52),m=i(p),v=n(55),g=i(v),x=n(56),b=(i(x),function(t){function e(t,n,i,r,u){if((0,a["default"])(this,e),!u instanceof g["default"])throw new Error("MomentumEngine.Classes.Sprite must be instantiated with an ImageLoader instance");var s=(0,l["default"])(this,(0,o["default"])(e).call(this,t,n));return s.size=new m["default"](i||0,r||0),s._image=u,s._imagePos=new m["default"](0,0),s._imageSize=new m["default"](0,0),s}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"setImageCoords",value:function(t,e,n,i){this._imagePos.x=t,this._imagePos.y=e,this._imageSize.x=n||0,this._imageSize.y=i||0}},{key:"isReady",value:function(){return this._image.isLoaded()&&!this._image.isError()}},{key:"render",value:function(){if(this.isReady()&&this._game){var t=this._image.getImageObj(),e=t.width-this._imagePos.x,n=t.height-this._imagePos.y;return this._game.context.drawImage(t,this._imagePos.x,this._imagePos.y,this._imageSize.x||e,this._imageSize.y||n,this._calculatedPos.x,this._calculatedPos.y,this.size.x||e,this.size.y||n),!0}return!1}}]),e}(y["default"]));e["default"]=b},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=function(){function t(e){var n=this;(0,o["default"])(this,t),this._loaded=!1,this._error=!1,this._imageObj=new Image,this._imageObj.addEventListener("load",function(){n._loaded=!0,n._error=!1}),this._imageObj.addEventListener("_error",function(t){n._loaded=!1,n._error=t}),this._imageObj.src=e}return(0,a["default"])(t,[{key:"getImageObj",value:function(){return this._loaded?this._imageObj:!1}},{key:"isLoaded",value:function(){return this._loaded}},{key:"isError",value:function(){return this._error}}]),t}();e["default"]=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=n(57),c=i(s),f=function(){function t(){(0,o["default"])(this,t)}return(0,a["default"])(t,null,[{key:"AABB",value:function(t,e){if(!t instanceof c["default"]||!e instanceof c["default"])throw new Error("AABB collisions can only be checked on these entity types: Rect");return t.pos.x<e.pos.x+e.size.x&&t.pos.x+t.size.x>e.pos.x&&t.pos.y<e.pos.y+e.size.y&&t.size.y+t.pos.y>e.pos.y}}]),t}();e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(44),h=i(d),_=n(51),y=i(_),p=n(52),m=i(p),v=n(56),g=i(v),x=function(t){function e(t,n,i,r,u){(0,a["default"])(this,e);var s=(0,l["default"])(this,(0,o["default"])(e).call(this,t,n));return s.size=new m["default"](i,r),s.color=u,s}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"isCollidingWith",value:function(t){return t instanceof e?g["default"].AABB(this,t):void 0}},{key:"render",value:function(){return this._game?(this._game.context.fillStyle=this.color.toString(),this._game.context.fillRect(this._calculatedPos.x,this._calculatedPos.y,this.size.x,this.size.y),!0):!1}}]),e}(y["default"]);e["default"]=x},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),u=i(o),a=n(15),s=i(a),c=function(){function t(e,n,i,r){(0,u["default"])(this,t),this.r=e||0,this.g=n||0,this.b=i||0,this.a=r||1}return(0,s["default"])(t,[{key:"toString",value:function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"}},{key:"toHex",value:function(){return"#"+(r<<16|g<<8|b).toString(16)}}]),t}();e["default"]=c}]);
//# sourceMappingURL=es5.js.map