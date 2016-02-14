!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=n(66),a=i(u),s=n(63),c=i(s),f=n(64),l=i(f),d=n(67),h=i(d),_=n(70),y=i(_),p=n(71),v=i(p),m=n(68),g=i(m),x=n(65),w={Game:o["default"],Emitter:a["default"],Entity:c["default"],Sprite:h["default"],Rect:y["default"],Vector2D:l["default"],Color:v["default"],ImageLoader:g["default"]},b={Input:{Keys:x.KeyConsts}};window.MomentumEngine={Classes:w,Consts:b}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(56),h=i(d),_=n(63),y=i(_),p=n(65),v=i(p),m=function(t){function e(t){(0,a["default"])(this,e);var n=(0,l["default"])(this,(0,o["default"])(e).call(this));if(t=t||{},t.inputs=t.inputs||{},!t.canvas)throw new Error("MomentumEngine.Classes.Game must be constructed with a canvas");if(n.canvas=t.canvas,!t.width)throw new Error("MomentumEngine.Classes.Game must be constructed with canvas width");if(n.width=t.width,!t.height)throw new Error("MomentumEngine.Classes.Game must be constructed with canvas height");if(n.height=t.height,n.desiredFps=t.desiredFps||60,t.fixRatio){var i=window.devicePixelRatio,r=0;"undefined"!=typeof ejecta?r=1:(n.context=n.canvas.getContext("2d"),r=n.context.webkitBackingStorePixelRatio||n.context.mozBackingStorePixelRatio||n.context.msBackingStorePixelRatio||n.context.oBackingStorePixelRatio||n.context.backingStorePixelRatio||1),n.scale=i/r,n.canvas.width=n.width*n.scale,n.canvas.height=n.height*n.scale,n.canvas.style.width=n.width+"px",n.canvas.style.height=n.height+"px","undefined"!=typeof ejecta&&(n.context=n.canvas.getContext("2d")),n.context.scale(i,i)}else n.canvas.width=n.width,n.canvas.height=n.height,n.context=n.canvas.getContext("2d");return"undefined"!=typeof n.context.imageSmoothingEnabled&&(n.context.imageSmoothingEnabled=t.imageSmoothing||!1),n.frameCounter=0,n.inputs={},t.inputs.keyboard&&(n.inputs.keyboard=new v["default"](n)),n._game=n,n._lastFrameTimestamp=0,n._wantPause=!0,n}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"step",value:function(t){this.frameCounter++,this._updateEntity(t),this._renderEntity()}},{key:"start",value:function(){var t=this;if(!t._wantPause)return console.log("MomentumEngine.Classes.Game.start called, game instance is already started"),!1;t._wantPause=!1,t._wantPause=!1;var e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/t.desiredFps)}}();t._lastFrameTimestamp=+new Date,t.startTime=t._lastFrameTimestamp;var n=function i(){if(!t._wantPause){var n=+new Date,r=n-t._lastFrameTimestamp;r=Math.min(r,1e3/t.desiredFps),t._lastFrameTimestamp=n,t.step(r),e(i)}};return n(),!0}},{key:"pause",value:function(){return this._wantPause?(console.log("MomentumEngine.Classes.Game.pause called, game instance is already paused"),!1):(this._wantPause=!0,!0)}}]),e}(y["default"]);e["default"]=m},function(t,e,n){t.exports={"default":n(3),__esModule:!0}},function(t,e,n){n(4),t.exports=n(10).Object.getPrototypeOf},function(t,e,n){var i=n(5);n(7)("getPrototypeOf",function(t){return function(e){return t(i(e))}})},function(t,e,n){var i=n(6);t.exports=function(t){return Object(i(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(8),r=n(10),o=n(13);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],u={};u[t]=e(n),i(i.S+i.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){var i=n(9),r=n(10),o=n(11),u="prototype",a=function(t,e,n){var s,c,f,l=t&a.F,d=t&a.G,h=t&a.S,_=t&a.P,y=t&a.B,p=t&a.W,v=d?r:r[e]||(r[e]={}),m=d?i:h?i[e]:(i[e]||{})[u];d&&(n=e);for(s in n)c=!l&&m&&s in m,c&&s in v||(f=c?m[s]:n[s],v[s]=d&&"function"!=typeof m[s]?n[s]:y&&c?o(f,i):p&&m[s]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):_&&"function"==typeof f?o(Function.call,f):f,_&&((v[u]||(v[u]={}))[s]=f))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(12);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(16),o=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e,n){var i=n(18);t.exports=function(t,e,n){return i.setDesc(t,e,n)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(20),o=i(r);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,o["default"])(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r="function"==typeof _Symbol&&"symbol"==typeof _Symbol$iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof _Symbol&&t.constructor===_Symbol?"symbol":typeof t};e.__esModule=!0;var o=n(21),u=i(o),a=n(46),s=i(a);e["default"]="function"==typeof s["default"]&&"symbol"===r(u["default"])?function(t){return"undefined"==typeof t?"undefined":r(t)}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":"undefined"==typeof t?"undefined":r(t)}},function(t,e,n){t.exports={"default":n(22),__esModule:!0}},function(t,e,n){n(23),n(39),t.exports=n(36)("iterator")},function(t,e,n){"use strict";var i=n(24)(!0);n(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var i=n(25),r=n(6);t.exports=function(t){return function(e,n){var o,u,a=String(r(e)),s=i(n),c=a.length;return 0>s||s>=c?t?"":void 0:(o=a.charCodeAt(s),55296>o||o>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):o:t?a.slice(s,s+2):(o-55296<<10)+(u-56320)+65536)}}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(27),r=n(8),o=n(28),u=n(29),a=n(32),s=n(33),c=n(34),f=n(35),l=n(18).getProto,d=n(36)("iterator"),h=!([].keys&&"next"in[].keys()),_="@@iterator",y="keys",p="values",v=function(){return this};t.exports=function(t,e,n,m,g,x,w){c(n,e,m);var b,P,E=function(t){if(!h&&t in k)return k[t];switch(t){case y:return function(){return new n(this,t)};case p:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",S=g==p,A=!1,k=t.prototype,C=k[d]||k[_]||g&&k[g],O=C||E(g);if(C){var R=l(O.call(new t));f(R,M,!0),!i&&a(k,_)&&u(R,d,v),S&&C.name!==p&&(A=!0,O=function(){return C.call(this)})}if(i&&!w||!h&&!A&&k[d]||u(k,d,O),s[e]=O,s[M]=v,g)if(b={values:S?O:E(p),keys:x?O:E(y),entries:S?E("entries"):O},w)for(P in b)P in k||o(k,P,b[P]);else r(r.P+r.F*(h||A),e,b);return b}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(29)},function(t,e,n){var i=n(18),r=n(30);t.exports=n(31)?function(t,e,n){return i.setDesc(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var i=n(18),r=n(30),o=n(35),u={};n(29)(u,n(36)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i.create(u,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var i=n(18).setDesc,r=n(32),o=n(36)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(37)("wks"),r=n(38),o=n(9).Symbol;t.exports=function(t){return i[t]||(i[t]=o&&o[t]||(o||r)("Symbol."+t))}},function(t,e,n){var i=n(9),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){n(40);var i=n(33);i.NodeList=i.HTMLCollection=i.Array},function(t,e,n){"use strict";var i=n(41),r=n(42),o=n(33),u=n(43);t.exports=n(26)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(44),r=n(6);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(45);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){t.exports={"default":n(47),__esModule:!0}},function(t,e,n){n(48),n(55),t.exports=n(10).Symbol},function(t,e,n){"use strict";var i=n(18),r=n(9),o=n(32),u=n(31),a=n(8),s=n(28),c=n(13),f=n(37),l=n(35),d=n(38),h=n(36),_=n(49),y=n(50),p=n(51),v=n(52),m=n(53),g=n(43),x=n(30),w=i.getDesc,b=i.setDesc,P=i.create,E=y.get,M=r.Symbol,S=r.JSON,A=S&&S.stringify,k=!1,C=h("_hidden"),O=i.isEnum,R=f("symbol-registry"),D=f("symbols"),j="function"==typeof M,N=Object.prototype,T=u&&c(function(){return 7!=P(b({},"a",{get:function(){return b(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=w(N,e);i&&delete N[e],b(t,e,n),i&&t!==N&&b(N,e,i)}:b,H=function(t){var e=D[t]=P(M.prototype);return e._k=t,u&&k&&T(N,t,{configurable:!0,set:function(e){o(this,C)&&o(this[C],t)&&(this[C][t]=!1),T(this,t,x(1,e))}}),e},F=function(t){return"symbol"==typeof t},U=function(t,e,n){return n&&o(D,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=P(n,{enumerable:x(0,!1)})):(o(t,C)||b(t,C,x(1,{})),t[C][e]=!0),T(t,e,n)):b(t,e,n)},L=function(t,e){m(t);for(var n,i=p(e=g(e)),r=0,o=i.length;o>r;)U(t,n=i[r++],e[n]);return t},I=function(t,e){return void 0===e?P(t):L(P(t),e)},B=function(t){var e=O.call(this,t);return e||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t]?e:!0},G=function(t,e){var n=w(t=g(t),e);return!n||!o(D,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n},z=function(t){for(var e,n=E(g(t)),i=[],r=0;n.length>r;)o(D,e=n[r++])||e==C||i.push(e);return i},K=function(t){for(var e,n=E(g(t)),i=[],r=0;n.length>r;)o(D,e=n[r++])&&i.push(D[e]);return i},W=function(t){if(void 0!==t&&!F(t)){for(var e,n,i=[t],r=1,o=arguments;o.length>r;)i.push(o[r++]);return e=i[1],"function"==typeof e&&(n=e),(n||!v(e))&&(e=function(t,e){return n&&(e=n.call(this,t,e)),F(e)?void 0:e}),i[1]=e,A.apply(S,i)}},V=c(function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))});j||(M=function(){if(F(this))throw TypeError("Symbol is not a constructor");return H(d(arguments.length>0?arguments[0]:void 0))},s(M.prototype,"toString",function(){return this._k}),F=function(t){return t instanceof M},i.create=I,i.isEnum=B,i.getDesc=G,i.setDesc=U,i.setDescs=L,i.getNames=y.get=z,i.getSymbols=K,u&&!n(27)&&s(N,"propertyIsEnumerable",B,!0));var q={"for":function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){return _(R,t)},useSetter:function(){k=!0},useSimple:function(){k=!1}};i.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=h(t);q[t]=j?e:H(e)}),k=!0,a(a.G+a.W,{Symbol:M}),a(a.S,"Symbol",q),a(a.S+a.F*!j,"Object",{create:I,defineProperty:U,defineProperties:L,getOwnPropertyDescriptor:G,getOwnPropertyNames:z,getOwnPropertySymbols:K}),S&&a(a.S+a.F*(!j||V),"JSON",{stringify:W}),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var i=n(18),r=n(43);t.exports=function(t,e){for(var n,o=r(t),u=i.getKeys(o),a=u.length,s=0;a>s;)if(o[n=u[s++]]===e)return n}},function(t,e,n){var i=n(43),r=n(18).getNames,o={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==o.call(t)?a(t):r(i(t))}},function(t,e,n){var i=n(18);t.exports=function(t){var e=i.getKeys(t),n=i.getSymbols;if(n)for(var r,o=n(t),u=i.isEnum,a=0;o.length>a;)u.call(t,r=o[a++])&&e.push(r);return e}},function(t,e,n){var i=n(45);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){var i=n(54);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(57),o=i(r),u=n(61),a=i(u),s=n(20),c=i(s);e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,c["default"])(e)));t.prototype=(0,a["default"])(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o["default"]?(0,o["default"])(t,e):t.__proto__=e)}},function(t,e,n){t.exports={"default":n(58),__esModule:!0}},function(t,e,n){n(59),t.exports=n(10).Object.setPrototypeOf},function(t,e,n){var i=n(8);i(i.S,"Object",{setPrototypeOf:n(60).set})},function(t,e,n){var i=n(18).getDesc,r=n(54),o=n(53),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(11)(Function.call,i(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){t.exports={"default":n(62),__esModule:!0}},function(t,e,n){var i=n(18);t.exports=function(t,e){return i.create(t,e)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=n(64),c=i(s),f=function(){function t(e,n){(0,o["default"])(this,t),this.pos=new c["default"](e||0,n||0),this.velocity=new c["default"](0,0),this.acceleration=new c["default"](0,0),this.state={},this.children=[],this._calculatedPos=this.pos.clone(),this._lastCalculated=0,this._game=null,this._parent=null,this._creationTime=+new Date}return(0,a["default"])(t,[{key:"setVelocity",value:function(t,e){t instanceof c["default"]?this.velocity=t:(this.velocity.x=t,this.velocity.y=e)}},{key:"setAcceleration",value:function(t,e){t instanceof c["default"]?this.acceleration=t:(this.acceleration.x=t,this.acceleration.y=e)}},{key:"createChildEntity",value:function(){var e=new t;return e._updateGame(this._game),e._parent=this,this.children.push(e),e}},{key:"addChildEntity",value:function(t){return t._updateGame(this._game),t._parent=this,this.children.push(t),t}},{key:"detachChildEntity",value:function(t){for(var e=0;e<this.children.length;e++)if(this.children[e]==t)return this.children.splice(e,1),!0;return!1}},{key:"_preprocess",value:function(){if(this._game&&this._lastCalculated<this._game.frameCounter){if(this._parent){var t=this._parent._preprocess();this._calculatedPos.x=this.pos.x+t.x,this._calculatedPos.y=this.pos.y+t.y}else this._calculatedPos.x=this.pos.x,this._calculatedPos.y=this.pos.y;this._lastCalculated=this._game.frameCounter}return this._calculatedPos}},{key:"_updateGame",value:function(t){this._game=t,this.children.forEach(function(e){e._updateGame(t)})}},{key:"_updateEntity",value:function(t){this.timeToLive&&+new Date-this._creationTime>this.timeToLive&&this._parent.detachChildEntity(this),this.velocity&&(this.acceleration&&this.velocity.add(this.acceleration),this.pos.add(this.velocity.clone().multiply(t)));var e=this.update&&this.update(t);(e||"undefined"==typeof e||"undefined"==typeof this.update)&&this.children.forEach(function(e){e._updateEntity(t)})}},{key:"_renderEntity",value:function(){this._preprocess();var t=this.render&&this.render();(t||"undefined"==typeof t||"undefined"==typeof this.render)&&this.children.forEach(function(t){t._renderEntity()})}}]),t}();e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=function(){function t(e,n){(0,o["default"])(this,t),this.x=e||0,this.y=n||0}return(0,a["default"])(t,[{key:"invert",value:function(){return this.x=-this.x,this.y=-this.y,this}},{key:"add",value:function(e){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=e),this}},{key:"subtract",value:function(e){return e instanceof t?(this.x-=e.x,this.y-=e.y):(this.x-=e,this.y-=e),this}},{key:"multiply",value:function(e){return e instanceof t?(this.x*=e.x,this.y*=e.y):(this.x*=e,this.y*=e),this}},{key:"divide",value:function(e){return e instanceof t?(this.x/=e.x,this.y/=e.y):(this.x/=e,this.y/=e),this}},{key:"equals",value:function(t){return this.x==t.x&&this.y==t.y}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"unit",value:function(){return this.divide(this.length())}},{key:"min",value:function(){return Math.min(this.x,this.y)}},{key:"max",value:function(){return Math.max(this.x,this.y)}},{key:"degrees",value:function(){return 180*Math.atan(this.x,this.y)}},{key:"angle",value:function(){return Math.atan2(this.x,this.y)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"toString",value:function(){return"["+this.x+"},"+this.y+"}]"}},{key:"clone",value:function(){return new t(this.x,this.y)}}],[{key:"fromAngle",value:function(e,n){return new t(n*Math.cos(e),n*Math.sin(e))}}]),t}();e["default"]=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.KeyConsts=void 0;var r=n(14),o=i(r),u=n(15),a=i(u),s={SPACE:32,BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,NUM_0:48,NUM_1:49,NUM_2:50,NUM_3:51,NUM_4:52,NUM_5:53,NUM_6:54,NUM_7:55,NUM_8:56,NUM_9:57,CHAR_A:65,CHAR_B:66,CHAR_C:67,CHAR_D:68,CHAR_E:69,CHAR_F:70,CHAR_G:71,CHAR_H:72,CHAR_I:73,CHAR_J:74,CHAR_K:75,CHAR_L:76,CHAR_M:77,CHAR_N:78,CHAR_O:79,CHAR_P:80,CHAR_Q:81,CHAR_R:82,CHAR_S:83,CHAR_T:84,CHAR_U:85,CHAR_V:86,CHAR_W:87,CHAR_X:88,CHAR_Y:89,CHAR_Z:90,NUM_PAD_0:96,NUM_PAD_1:97,NUM_PAD_2:98,NUM_PAD_3:99,NUM_PAD_4:100,NUM_PAD_5:101,NUM_PAD_6:102,NUM_PAD_7:103,NUM_PAD_8:104,NUM_PAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SEMICOLON:186,EQUALS:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRACKET:221,SINGLE_QUOTE:222},c=function(){function t(){(0,o["default"])(this,t);var e=this;e._keyState={},window.addEventListener("keydown",function(t){e._keyDownHandler(t)},!1),window.addEventListener("keyup",function(t){e._keyUpHandler(t)},!1)}return(0,a["default"])(t,[{key:"isPressed",value:function(t){return!!this._keyState[t]}},{key:"_keyDownHandler",value:function(t){this._keyState[t.keyCode]=!0}},{key:"_keyUpHandler",value:function(t){this._keyState[t.keyCode]=!1}}]),t}();e["default"]=c,e.KeyConsts=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(56),h=i(d),_=n(63),y=i(_),p=n(64),v=i(p),m=function(t){function e(t,n,i,r,u){(0,a["default"])(this,e);var s=(0,l["default"])(this,(0,o["default"])(e).call(this,t,n));return s.particleVelocity=r,s.particleClass=u,s.rate=i,s.emitting=!1,s.spread=Math.PI,s._lastEmitTime=s._creationTime,s._wasEmitting=!1,s._particles=[],s}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"setParticleParent",value:function(t){this._particleParent=t}},{key:"_emit",value:function(){var t=this.particleClass,e=this._particleParent||this._parent,n=this.particleVelocity.angle()+this.spread-Math.random()*this.spread*2,i=this.particleVelocity.length(),r=v["default"].fromAngle(n,i),o=new t(this._calculatedPos.x,this._calculatedPos.y);o.velocity=r,e.addChildEntity(o)}},{key:"_triggerEmissions",value:function(){if(this._preprocess(),this.emitting){var t=+new Date;this._wasEmitting||(this._wasEmitting=!0,this._lastEmitTime=t);var e=t-this._lastEmitTime;if(e>this.rate){var n=~~(e/this.rate);this._lastEmitTime=t+(e-this.rate*n);for(var i=0;n>i;i++)this._emit()}}else this._wasEmitting=!1}},{key:"update",value:function(){this._triggerEmissions()}}]),e}(y["default"]);e["default"]=m},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(56),h=i(d),_=n(63),y=i(_),p=n(64),v=i(p),m=n(68),g=i(m),x=n(69),w=(i(x),function(t){function e(t,n,i,r,u){if((0,a["default"])(this,e),!u instanceof g["default"])throw new Error("MomentumEngine.Classes.Sprite must be instantiated with an ImageLoader instance");var s=(0,l["default"])(this,(0,o["default"])(e).call(this,t,n));return s.size=new v["default"](i||0,r||0),s._image=u,s._imagePos=new v["default"](0,0),s._imageSize=new v["default"](0,0),s}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"setImageCoords",value:function(t,e,n,i){this._imagePos.x=t,this._imagePos.y=e,this._imageSize.x=n||0,this._imageSize.y=i||0}},{key:"isReady",value:function(){return this._image.isLoaded()&&!this._image.isError()}},{key:"render",value:function(){if(this.isReady()&&this._game){var t=this._image.getImageObj(),e=t.width-this._imagePos.x,n=t.height-this._imagePos.y;return this._game.context.drawImage(t,this._imagePos.x,this._imagePos.y,this._imageSize.x||e,this._imageSize.y||n,this._calculatedPos.x,this._calculatedPos.y,this.size.x||e,this.size.y||n),!0}return!1}}]),e}(y["default"]));e["default"]=w},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=function(){function t(e){var n=this;(0,o["default"])(this,t),this._loaded=!1,this._error=!1,this._imageObj=new Image,this._imageObj.addEventListener("load",function(){n._loaded=!0,n._error=!1}),this._imageObj.addEventListener("_error",function(t){n._loaded=!1,n._error=t}),this._imageObj.src=e}return(0,a["default"])(t,[{key:"getImageObj",value:function(){return this._loaded?this._imageObj:!1}},{key:"isLoaded",value:function(){return this._loaded}},{key:"isError",value:function(){return this._error}}]),t}();e["default"]=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=i(r),u=n(15),a=i(u),s=n(70),c=i(s),f=function(){function t(){(0,o["default"])(this,t)}return(0,a["default"])(t,null,[{key:"AABB",value:function(t,e){if(!t instanceof c["default"]||!e instanceof c["default"])throw new Error("AABB collisions can only be checked on these entity types: Rect");return t.pos.x<e.pos.x+e.size.x&&t.pos.x+t.size.x>e.pos.x&&t.pos.y<e.pos.y+e.size.y&&t.size.y+t.pos.y>e.pos.y}}]),t}();e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(14),a=i(u),s=n(15),c=i(s),f=n(19),l=i(f),d=n(56),h=i(d),_=n(63),y=i(_),p=n(64),v=i(p),m=n(69),g=i(m),x=function(t){function e(t,n,i,r,u){(0,a["default"])(this,e);var s=(0,l["default"])(this,(0,o["default"])(e).call(this,t,n));return s.size=new v["default"](i,r),s.color=u,s}return(0,h["default"])(e,t),(0,c["default"])(e,[{key:"isCollidingWith",value:function(t){return t instanceof e?g["default"].AABB(this,t):void 0}},{key:"render",value:function(){return this._game?(this._game.context.fillStyle=this.color.toString(),this._game.context.fillRect(this._calculatedPos.x,this._calculatedPos.y,this.size.x,this.size.y),!0):!1}}]),e}(y["default"]);e["default"]=x},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),u=i(o),a=n(15),s=i(a),c=function(){function t(e,n,i,r){(0,u["default"])(this,t),this.r=e||0,this.g=n||0,this.b=i||0,this.a=r||1}return(0,s["default"])(t,[{key:"toString",value:function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"}},{key:"toHex",value:function(){return"#"+(r<<16|g<<8|b).toString(16)}}]),t}();e["default"]=c}]);
//# sourceMappingURL=es5.js.map