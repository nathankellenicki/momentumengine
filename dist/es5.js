!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(1),o=r(i),u=n(51),a=r(u),s=n(52),c=r(s),f=n(54),l=r(f),d=n(56),h=r(d),y=n(53),_={Game:o["default"],Entity:a["default"],Rect:l["default"],Vector2D:c["default"],Color:h["default"]},p={Input:{Keys:y.KeyConsts}};window.MomentumEngine={Classes:_,Consts:p}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=r(i),u=n(14),a=r(u),s=n(15),c=r(s),f=n(19),l=r(f),d=n(44),h=r(d),y=n(51),_=r(y),p=n(53),v=r(p),m=function(t){function e(t){(0,a["default"])(this,e);var n=(0,l["default"])(this,(0,o["default"])(e).call(this));if(t=t||{},t.inputs=t.inputs||{},!t.canvas)throw new Error("MomentumEngine.Game must be constructed with a canvas");if(n.canvas=t.canvas,!t.width)throw new Error("MomentumEngine.Game must be constructed with canvas width");if(n.width=t.width,!t.height)throw new Error("MomentumEngine.Game must be constructed with canvas height");if(n.height=t.height,n.desiredFps=t.desiredFps||60,t.fixRatio){var r=window.devicePixelRatio,i=0;"undefined"!=typeof ejecta?i=1:(n.context=n.canvas.getContext("2d"),i=n.context.webkitBackingStorePixelRatio||n.context.mozBackingStorePixelRatio||n.context.msBackingStorePixelRatio||n.context.oBackingStorePixelRatio||n.context.backingStorePixelRatio||1),n.scale=r/i,n.canvas.width=n.width*n.scale,n.canvas.height=n.height*n.scale,n.canvas.style.width=n.width+"px",n.canvas.style.height=n.height+"px","undefined"!=typeof ejecta&&(n.context=n.canvas.getContext("2d")),n.context.scale(r,r)}else n.canvas.width=n.width,n.canvas.height=n.height,n.context=n.canvas.getContext("2d");return"undefined"!=typeof n.context.imageSmoothingEnabled&&(n.context.imageSmoothingEnabled=t.imageSmoothing||!1),n.lastFrameDelta=0,n.frameCounter=0,n.inputs={},t.inputs.keyboard&&(n.inputs.keyboard=new v["default"](n)),n._game=n,n._lastFrameTimestamp=0,n._wantPause=!0,n}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"start",value:function(){var t=this;if(!t._wantPause)return console.log("MomentumEngine.Game.start called, game instance is already started"),!1;t._wantPause=!1,t._wantPause=!1;var e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/t.desiredFps)}}();t._lastFrameTimestamp=+new Date;var n=function r(){t.frameCounter++;var n=+new Date;t.lastFrameDelta=n-t._lastFrameTimestamp,t._lastFrameTimestamp=n,t.lastFrameDelta=Math.min(t.lastFrameDelta,1e3/t.desiredFps),t._wantPause||(t._updateEntity.bind(t),t._updateEntity(),t._renderEntity.bind(t),t._renderEntity(),e(r))};return n(),!0}},{key:"pause",value:function(){return this._wantPause?(console.log("MomentumEngine.Game.pause called, game instance is already paused"),!1):(this._wantPause=!0,!0)}}]),e}(_["default"]);e["default"]=m},function(t,e,n){t.exports={"default":n(3),__esModule:!0}},function(t,e,n){n(4),t.exports=n(10).Object.getPrototypeOf},function(t,e,n){var r=n(5);n(7)("getPrototypeOf",function(t){return function(e){return t(r(e))}})},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(8),i=n(10),o=n(13);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(9),i=n(10),o=n(11),u="prototype",a=function(t,e,n){var s,c,f,l=t&a.F,d=t&a.G,h=t&a.S,y=t&a.P,_=t&a.B,p=t&a.W,v=d?i:i[e]||(i[e]={}),m=d?r:h?r[e]:(r[e]||{})[u];d&&(n=e);for(s in n)c=!l&&m&&s in m,c&&s in v||(f=c?m[s]:n[s],v[s]=d&&"function"!=typeof m[s]?n[s]:_&&c?o(f,r):p&&m[s]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):y&&"function"==typeof f?o(Function.call,f):f,y&&((v[u]||(v[u]={}))[s]=f))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(16),o=r(i);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){return r.setDesc(t,e,n)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(20),o=r(i);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,o["default"])(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t){return t&&"undefined"!=typeof _Symbol&&t.constructor===_Symbol?"symbol":typeof t}e.__esModule=!0;var o=n(21),u=r(o);e["default"]=function(t){return t&&"undefined"!=typeof u["default"]&&t.constructor===u["default"]?"symbol":"undefined"==typeof t?"undefined":i(t)}},function(t,e,n){t.exports={"default":n(22),__esModule:!0}},function(t,e,n){n(23),n(43),t.exports=n(10).Symbol},function(t,e,n){"use strict";var r=n(18),i=n(9),o=n(24),u=n(25),a=n(8),s=n(26),c=n(13),f=n(29),l=n(30),d=n(32),h=n(31),y=n(33),_=n(37),p=n(38),v=n(39),m=n(40),g=n(34),x=n(28),b=r.getDesc,w=r.setDesc,P=r.create,A=_.get,E=i.Symbol,M=i.JSON,S=M&&M.stringify,C=!1,k=h("_hidden"),O=r.isEnum,R=f("symbol-registry"),D=f("symbols"),F="function"==typeof E,N=Object.prototype,H=u&&c(function(){return 7!=P(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=b(N,e);r&&delete N[e],w(t,e,n),r&&t!==N&&w(N,e,r)}:w,j=function(t){var e=D[t]=P(E.prototype);return e._k=t,u&&C&&H(N,t,{configurable:!0,set:function(e){o(this,k)&&o(this[k],t)&&(this[k][t]=!1),H(this,t,x(1,e))}}),e},T=function(t){return"symbol"==typeof t},U=function(t,e,n){return n&&o(D,e)?(n.enumerable?(o(t,k)&&t[k][e]&&(t[k][e]=!1),n=P(n,{enumerable:x(0,!1)})):(o(t,k)||w(t,k,x(1,{})),t[k][e]=!0),H(t,e,n)):w(t,e,n)},B=function(t,e){m(t);for(var n,r=p(e=g(e)),i=0,o=r.length;o>i;)U(t,n=r[i++],e[n]);return t},G=function(t,e){return void 0===e?P(t):B(P(t),e)},L=function(t){var e=O.call(this,t);return e||!o(this,t)||!o(D,t)||o(this,k)&&this[k][t]?e:!0},I=function(t,e){var n=b(t=g(t),e);return!n||!o(D,e)||o(t,k)&&t[k][e]||(n.enumerable=!0),n},K=function(t){for(var e,n=A(g(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==k||r.push(e);return r},z=function(t){for(var e,n=A(g(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])&&r.push(D[e]);return r},W=function(t){if(void 0!==t&&!T(t)){for(var e,n,r=[t],i=1,o=arguments;o.length>i;)r.push(o[i++]);return e=r[1],"function"==typeof e&&(n=e),(n||!v(e))&&(e=function(t,e){return n&&(e=n.call(this,t,e)),T(e)?void 0:e}),r[1]=e,S.apply(M,r)}},q=c(function(){var t=E();return"[null]"!=S([t])||"{}"!=S({a:t})||"{}"!=S(Object(t))});F||(E=function(){if(T(this))throw TypeError("Symbol is not a constructor");return j(d(arguments.length>0?arguments[0]:void 0))},s(E.prototype,"toString",function(){return this._k}),T=function(t){return t instanceof E},r.create=G,r.isEnum=L,r.getDesc=I,r.setDesc=U,r.setDescs=B,r.getNames=_.get=K,r.getSymbols=z,u&&!n(42)&&s(N,"propertyIsEnumerable",L,!0));var J={"for":function(t){return o(R,t+="")?R[t]:R[t]=E(t)},keyFor:function(t){return y(R,t)},useSetter:function(){C=!0},useSimple:function(){C=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=h(t);J[t]=F?e:j(e)}),C=!0,a(a.G+a.W,{Symbol:E}),a(a.S,"Symbol",J),a(a.S+a.F*!F,"Object",{create:G,defineProperty:U,defineProperties:B,getOwnPropertyDescriptor:I,getOwnPropertyNames:K,getOwnPropertySymbols:z}),M&&a(a.S+a.F*(!F||q),"JSON",{stringify:W}),l(E,"Symbol"),l(Math,"Math",!0),l(i.JSON,"JSON",!0)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=n(27)},function(t,e,n){var r=n(18),i=n(28);t.exports=n(25)?function(t,e,n){return r.setDesc(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(9),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(18).setDesc,i=n(24),o=n(31)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(29)("wks"),i=n(32),o=n(9).Symbol;t.exports=function(t){return r[t]||(r[t]=o&&o[t]||(o||i)("Symbol."+t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(18),i=n(34);t.exports=function(t,e){for(var n,o=i(t),u=r.getKeys(o),a=u.length,s=0;a>s;)if(o[n=u[s++]]===e)return n}},function(t,e,n){var r=n(35),i=n(6);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(34),i=n(18).getNames,o={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==o.call(t)?a(t):i(r(t))}},function(t,e,n){var r=n(18);t.exports=function(t){var e=r.getKeys(t),n=r.getSymbols;if(n)for(var i,o=n(t),u=r.isEnum,a=0;o.length>a;)u.call(t,i=o[a++])&&e.push(i);return e}},function(t,e,n){var r=n(36);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(41);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=!0},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(45),o=r(i),u=n(49),a=r(u),s=n(20),c=r(s);e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,c["default"])(e)));t.prototype=(0,a["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o["default"]?(0,o["default"])(t,e):t.__proto__=e)}},function(t,e,n){t.exports={"default":n(46),__esModule:!0}},function(t,e,n){n(47),t.exports=n(10).Object.setPrototypeOf},function(t,e,n){var r=n(8);r(r.S,"Object",{setPrototypeOf:n(48).set})},function(t,e,n){var r=n(18).getDesc,i=n(41),o=n(40),u=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,r(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){t.exports={"default":n(50),__esModule:!0}},function(t,e,n){var r=n(18);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=r(i),u=n(15),a=r(u),s=n(52),c=r(s),f=function(){function t(e,n){(0,o["default"])(this,t),this.pos=new c["default"](e||0,n||0),this.state={},this.children=[],this._calculatedPos=this.pos.clone(),this._lastCalculated=0,this._game=null,this._parent=null}return(0,a["default"])(t,[{key:"createChildEntity",value:function(){var e=new t;return e._updateGame(this._game),e._parent=this,this.children.push(e),e}},{key:"addChildEntity",value:function(t){return t._updateGame(this._game),t._parent=this,this.children.push(t),t}},{key:"detachChildEntity",value:function(t){}},{key:"_recalculatePos",value:function(){if(this._game&&this._lastCalculated<this._game.frameCounter){if(this._parent){var t=this._parent._recalculatePos();this._calculatedPos.x=this.pos.x+t.x,this._calculatedPos.y=this.pos.y+t.y}else this._calculatedPos.x=this.pos.x,this._calculatedPos.y=this.pos.y;this._lastCalculated=this._game.frameCounter}return this._calculatedPos}},{key:"_updateGame",value:function(t){this._game=t,this.children.forEach(function(e){e._updateGame(t)})}},{key:"_updateEntity",value:function(){(this.update&&this.update()||"undefined"==typeof this.update)&&this.children.forEach(function(t){t._updateEntity()})}},{key:"_renderEntity",value:function(){(this.render&&this.render()||"undefined"==typeof this.render)&&this.children.forEach(function(t){t._renderEntity()})}}]),t}();e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=r(i),u=n(15),a=r(u),s=function(){function t(e,n){(0,o["default"])(this,t),this.x=e||0,this.y=n||0}return(0,a["default"])(t,[{key:"invert",value:function(){return this.x=-this.x,this.y=-this.y,this}},{key:"add",value:function(e){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=e),this}},{key:"subtract",value:function(e){return e instanceof t?(this.x-=e.x,this.y-=e.y):(this.x-=e,this.y-=e),this}},{key:"multiply",value:function(e){return e instanceof t?(this.x*=e.x,this.y*=e.y):(this.x*=e,this.y*=e),this}},{key:"divide",value:function(e){return e instanceof t?(this.x/=e.x,this.y/=e.y):(this.x/=e,this.y/=e),this}},{key:"equals",value:function(t){return this.x==t.x&&this.y==t.y}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"unit",value:function(){return this.divide(this.length())}},{key:"min",value:function(){return Math.min(this.x,this.y)}},{key:"max",value:function(){return Math.max(this.x,this.y)}},{key:"degrees",value:function(){return 180*Math.atan(this.x,this.y)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"toString",value:function(){return"["+this.x+"},"+this.y+"}]"}},{key:"clone",value:function(){return new t(this.x,this.y)}}]),t}();e["default"]=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.KeyConsts=void 0;var i=n(14),o=r(i),u=n(15),a=r(u),s={SPACE:32,BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,NUM_0:48,NUM_1:49,NUM_2:50,NUM_3:51,NUM_4:52,NUM_5:53,NUM_6:54,NUM_7:55,NUM_8:56,NUM_9:57,CHAR_A:65,CHAR_B:66,CHAR_C:67,CHAR_D:68,CHAR_E:69,CHAR_F:70,CHAR_G:71,CHAR_H:72,CHAR_I:73,CHAR_J:74,CHAR_K:75,CHAR_L:76,CHAR_M:77,CHAR_N:78,CHAR_O:79,CHAR_P:80,CHAR_Q:81,CHAR_R:82,CHAR_S:83,CHAR_T:84,CHAR_U:85,CHAR_V:86,CHAR_W:87,CHAR_X:88,CHAR_Y:89,CHAR_Z:90,NUM_PAD_0:96,NUM_PAD_1:97,NUM_PAD_2:98,NUM_PAD_3:99,NUM_PAD_4:100,NUM_PAD_5:101,NUM_PAD_6:102,NUM_PAD_7:103,NUM_PAD_8:104,NUM_PAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,EQUALS:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRACKET:221,SINGLE_QUOTE:222},c=function(){function t(){(0,o["default"])(this,t);var e=this;e._keyState={},window.addEventListener("keydown",function(t){e._keyDownHandler(t)},!1),window.addEventListener("keyup",function(t){e._keyUpHandler(t)},!1)}return(0,a["default"])(t,[{key:"isPressed",value:function(t){return!!this._keyState[t]}},{key:"_keyDownHandler",value:function(t){this._keyState[t.keyCode]=!0}},{key:"_keyUpHandler",value:function(t){this._keyState[t.keyCode]=!1}}]),t}();e["default"]=c,e.KeyConsts=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=r(i),u=n(14),a=r(u),s=n(15),c=r(s),f=n(19),l=r(f),d=n(44),h=r(d),y=n(51),_=r(y),p=n(52),v=r(p),m=n(55),g=r(m),x=function(t){function e(t,n,r,i,u){(0,a["default"])(this,e);var s=(0,l["default"])(this,(0,o["default"])(e).call(this,t,n));return s.size=new v["default"](r,i),s.color=u,s}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"isColliding",value:function(t){return t instanceof e?g["default"].AABB(this,t):void 0}},{key:"render",value:function(){return this._recalculatePos(),this._game?(this._game.context.fillStyle=this.color,this._game.context.fillRect(this._calculatedPos.x,this._calculatedPos.y,this.size.x,this.size.y),!0):!1}}]),e}(_["default"]);e["default"]=x},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=r(i),u=n(15),a=r(u),s=n(54),c=r(s),f=function(){function t(){(0,o["default"])(this,t)}return(0,a["default"])(t,null,[{key:"AABB",value:function(t,e){if(!t instanceof c["default"]||!e instanceof c["default"])throw new Error("AABB collisions can only be checked on these entity types: Rect");return t.pos.x<e.pos.x+e.size.x&&t.pos.x+t.size.x>e.pos.x&&t.pos.y<e.pos.y+e.size.y&&t.size.y+t.pos.y>e.pos.y}}]),t}();e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),u=i(o),a=n(15),s=i(a),c=function(){function t(e,n,r,i){(0,u["default"])(this,t),this.r=e||0,this.g=n||0,this.b=r||0,this.a=i||1}return(0,s["default"])(t,[{key:"toString",value:function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"}},{key:"toHex",value:function(){return"#"+(r<<16|g<<8|b).toString(16)}}]),t}();e["default"]=c}]);
//# sourceMappingURL=es5.js.map