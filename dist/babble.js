(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t,e){"function"==typeof define&&define.amd?define(e):"undefined"!=typeof exports?module.exports=e():t.Autolinker=e()}(this,function(){var t=function(e){t.Util.assign(this,e)};return t.prototype={constructor:t,urls:!0,email:!0,twitter:!0,newWindow:!0,stripPrefix:!0,className:"",htmlCharacterEntitiesRegex:/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,matcherRegex:function(){var t=/(^|[^\w])@(\w{1,15})/,e=/(?:[\-;:&=\+\$,\w\.]+@)/,r=/(?:[A-Za-z]{3,9}:(?:\/\/)?)/,n=/(?:www\.)/,i=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,s=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,a=/(?:[\-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|])?/;return new RegExp(["(",t.source,")","|","(",e.source,i.source,s.source,")","|","(","(?:","(?:",r.source,i.source,")","|","(?:","(.?//)?",n.source,i.source,")","|","(?:","(.?//)?",i.source,s.source,")",")",a.source,")"].join(""),"gi")}(),invalidProtocolRelMatchRegex:/^[\w]\/\//,charBeforeProtocolRelMatchRegex:/^(.)?\/\//,link:function(e){var r=this,n=this.getHtmlParser(),i=this.htmlCharacterEntitiesRegex,s=0,a=[];return n.parse(e,{processHtmlNode:function(t,e,r){"a"===e&&(r?s=Math.max(s-1,0):s++),a.push(t)},processTextNode:function(e){if(0===s)for(var n=t.Util.splitAndCapture(e,i),o=0,c=n.length;c>o;o++){var l=n[o],u=r.processTextNode(l);a.push(u)}else a.push(e)}}),a.join("")},getHtmlParser:function(){var e=this.htmlParser;return e||(e=this.htmlParser=new t.HtmlParser),e},getTagBuilder:function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new t.AnchorTagBuilder({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},processTextNode:function(e){var r=this,n=this.charBeforeProtocolRelMatchRegex;return e.replace(this.matcherRegex,function(e,i,s,a,o,c,l,u){var h,g=i,f=s,m=a,p=o,d=c,x=l||u,v="",b="";if(!r.isValidMatch(g,p,d,x))return e;if(r.matchHasUnbalancedClosingParen(e)&&(e=e.substr(0,e.length-1),b=")"),p)h=new t.match.Email({matchedText:e,email:p});else if(g)f&&(v=f,e=e.slice(1)),h=new t.match.Twitter({matchedText:e,twitterHandle:m});else{if(x){var w=x.match(n)[1]||"";w&&(v=w,e=e.slice(1))}h=new t.match.Url({matchedText:e,url:e,protocolRelativeMatch:x,stripPrefix:r.stripPrefix})}var y=r.createMatchReturnVal(h,e);return v+y+b})},isValidMatch:function(t,e,r,n){return t&&!this.twitter||e&&!this.email||r&&!this.urls||r&&-1===r.indexOf(".")||r&&/^[A-Za-z]{3,9}:/.test(r)&&!/:.*?[A-Za-z]/.test(r)||n&&this.invalidProtocolRelMatchRegex.test(n)?!1:!0},matchHasUnbalancedClosingParen:function(t){var e=t.charAt(t.length-1);if(")"===e){var r=t.match(/\(/g),n=t.match(/\)/g),i=r&&r.length||0,s=n&&n.length||0;if(s>i)return!0}return!1},createMatchReturnVal:function(e,r){var n;if(this.replaceFn&&(n=this.replaceFn.call(this,this,e)),"string"==typeof n)return n;if(n===!1)return r;if(n instanceof t.HtmlTag)return n.toString();var i=this.getTagBuilder(),s=i.build(e);return s.toString()}},t.link=function(e,r){var n=new t(r);return n.link(e)},t.match={},t.Util={abstractMethod:function(){throw"abstract"},assign:function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},extend:function(e,r){var n=e.prototype,i=function(){};i.prototype=n;var s;s=r.hasOwnProperty("constructor")?r.constructor:function(){n.constructor.apply(this,arguments)};var a=s.prototype=new i;return a.constructor=s,a.superclass=n,delete r.constructor,t.Util.assign(a,r),s},ellipsis:function(t,e,r){return t.length>e&&(r=null==r?"..":r,t=t.substring(0,e-r.length)+r),t},indexOf:function(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var r=0,n=t.length;n>r;r++)if(t[r]===e)return r;return-1},splitAndCapture:function(t,e){if(!e.global)throw new Error("`splitRegex` must have the 'g' flag set");for(var r,n=[],i=0;r=e.exec(t);)n.push(t.substring(i,r.index)),n.push(r[0]),i=r.index+r[0].length;return n.push(t.substring(i)),n}},t.HtmlParser=t.Util.extend(Object,{htmlRegex:function(){var t=/[0-9a-zA-Z:]+/,e=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,r=/(?:".*?"|'.*?'|[^'"=<>`\s]+)/,n=e.source+"(?:\\s*=\\s*"+r.source+")?";return new RegExp(["<(?:!|(/))?","("+t.source+")","(?:","\\s+","(?:",n,"|",r.source+")",")*","\\s*/?",">"].join(""),"g")}(),parse:function(t,e){e=e||{};for(var r,n=e.processHtmlNode||function(){},i=e.processTextNode||function(){},s=this.htmlRegex,a=0;null!==(r=s.exec(t));){var o=r[0],c=r[2],l=!!r[1],u=t.substring(a,r.index);u&&i(u),n(o,c,l),a=r.index+o.length}if(a<t.length){var h=t.substring(a);h&&i(h)}}}),t.HtmlTag=t.Util.extend(Object,{whitespaceRegex:/\s+/,constructor:function(e){t.Util.assign(this,e),this.innerHtml=this.innerHtml||this.innerHTML},setTagName:function(t){return this.tagName=t,this},getTagName:function(){return this.tagName||""},setAttr:function(t,e){var r=this.getAttrs();return r[t]=e,this},getAttr:function(t){return this.getAttrs()[t]},setAttrs:function(e){var r=this.getAttrs();return t.Util.assign(r,e),this},getAttrs:function(){return this.attrs||(this.attrs={})},setClass:function(t){return this.setAttr("class",t)},addClass:function(e){for(var r,n=this.getClass(),i=this.whitespaceRegex,s=t.Util.indexOf,a=n?n.split(i):[],o=e.split(i);r=o.shift();)-1===s(a,r)&&a.push(r);return this.getAttrs()["class"]=a.join(" "),this},removeClass:function(e){for(var r,n=this.getClass(),i=this.whitespaceRegex,s=t.Util.indexOf,a=n?n.split(i):[],o=e.split(i);a.length&&(r=o.shift());){var c=s(a,r);-1!==c&&a.splice(c,1)}return this.getAttrs()["class"]=a.join(" "),this},getClass:function(){return this.getAttrs()["class"]||""},hasClass:function(t){return-1!==(" "+this.getClass()+" ").indexOf(" "+t+" ")},setInnerHtml:function(t){return this.innerHtml=t,this},getInnerHtml:function(){return this.innerHtml||""},toString:function(){var t=this.getTagName(),e=this.buildAttrsStr();return e=e?" "+e:"",["<",t,e,">",this.getInnerHtml(),"</",t,">"].join("")},buildAttrsStr:function(){if(!this.attrs)return"";var t=this.getAttrs(),e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r+'="'+t[r]+'"');return e.join(" ")}}),t.AnchorTagBuilder=t.Util.extend(Object,{constructor:function(e){t.Util.assign(this,e)},build:function(e){var r=new t.HtmlTag({tagName:"a",attrs:this.createAttrs(e.getType(),e.getAnchorHref()),innerHtml:this.processAnchorText(e.getAnchorText())});return r},createAttrs:function(t,e){var r={href:e},n=this.createCssClass(t);return n&&(r["class"]=n),this.newWindow&&(r.target="_blank"),r},createCssClass:function(t){var e=this.className;return e?e+" "+e+"-"+t:""},processAnchorText:function(t){return t=this.doTruncate(t)},doTruncate:function(e){return t.Util.ellipsis(e,this.truncate||Number.POSITIVE_INFINITY)}}),t.match.Match=t.Util.extend(Object,{constructor:function(e){t.Util.assign(this,e)},getType:t.Util.abstractMethod,getMatchedText:function(){return this.matchedText},getAnchorHref:t.Util.abstractMethod,getAnchorText:t.Util.abstractMethod}),t.match.Email=t.Util.extend(t.match.Match,{getType:function(){return"email"},getEmail:function(){return this.email},getAnchorHref:function(){return"mailto:"+this.email},getAnchorText:function(){return this.email}}),t.match.Twitter=t.Util.extend(t.match.Match,{getType:function(){return"twitter"},getTwitterHandle:function(){return this.twitterHandle},getAnchorHref:function(){return"https://twitter.com/"+this.twitterHandle},getAnchorText:function(){return"@"+this.twitterHandle}}),t.match.Url=t.Util.extend(t.match.Match,{urlPrefixRegex:/^(https?:\/\/)?(www\.)?/i,protocolRelativeRegex:/^\/\//,checkForProtocolRegex:/^[A-Za-z]{3,9}:/,getType:function(){return"url"},getUrl:function(){var t=this.url;return this.protocolRelativeMatch||this.checkForProtocolRegex.test(t)||(t=this.url="http://"+t),t},getAnchorHref:function(){var t=this.getUrl();return t.replace(/&amp;/g,"&")},getAnchorText:function(){var t=this.getUrl();return this.protocolRelativeMatch&&(t=this.stripProtocolRelativePrefix(t)),this.stripPrefix&&(t=this.stripUrlPrefix(t)),t=this.removeTrailingSlash(t)},stripUrlPrefix:function(t){return t.replace(this.urlPrefixRegex,"")},stripProtocolRelativePrefix:function(t){return t.replace(this.protocolRelativeRegex,"")},removeTrailingSlash:function(t){return"/"===t.charAt(t.length-1)&&(t=t.slice(0,-1)),t}}),t});
},{}],2:[function(require,module,exports){
module.exports.Dispatcher=require(3);
},{}],3:[function(require,module,exports){
"use strict";function Dispatcher(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var invariant=require(4),_lastID=1,_prefix="ID_";Dispatcher.prototype.register=function(i){var t=_prefix+_lastID++;return this.$Dispatcher_callbacks[t]=i,t},Dispatcher.prototype.unregister=function(i){invariant(this.$Dispatcher_callbacks[i],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",i),delete this.$Dispatcher_callbacks[i]},Dispatcher.prototype.waitFor=function(i){invariant(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var t=0;t<i.length;t++){var a=i[t];this.$Dispatcher_isPending[a]?invariant(this.$Dispatcher_isHandled[a],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",a):(invariant(this.$Dispatcher_callbacks[a],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",a),this.$Dispatcher_invokeCallback(a))}},Dispatcher.prototype.dispatch=function(i){invariant(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(i);try{for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]||this.$Dispatcher_invokeCallback(t)}finally{this.$Dispatcher_stopDispatching()}},Dispatcher.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},Dispatcher.prototype.$Dispatcher_invokeCallback=function(i){this.$Dispatcher_isPending[i]=!0,this.$Dispatcher_callbacks[i](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[i]=!0},Dispatcher.prototype.$Dispatcher_startDispatching=function(i){for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]=!1,this.$Dispatcher_isHandled[t]=!1;this.$Dispatcher_pendingPayload=i,this.$Dispatcher_isDispatching=!0},Dispatcher.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},module.exports=Dispatcher;
},{}],4:[function(require,module,exports){
"use strict";var invariant=function(r,e,n,i,o,a,t,f){if(!r){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,i,o,a,t,f],l=0;s=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return d[l++]}))}throw s.framesToPop=1,s}};module.exports=invariant;
},{}],5:[function(require,module,exports){
function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(e){return"function"==typeof e}function isNumber(e){return"number"==typeof e}function isObject(e){return"object"==typeof e&&null!==e}function isUndefined(e){return void 0===e}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(e){if(!isNumber(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},EventEmitter.prototype.emit=function(e){var t,n,s,i,r,o;if(this._events||(this._events={}),"error"===e&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],isUndefined(n))return!1;if(isFunction(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(s=arguments.length,i=new Array(s-1),r=1;s>r;r++)i[r-1]=arguments[r];n.apply(this,i)}else if(isObject(n)){for(s=arguments.length,i=new Array(s-1),r=1;s>r;r++)i[r-1]=arguments[r];for(o=n.slice(),s=o.length,r=0;s>r;r++)o[r].apply(this,i)}return!0},EventEmitter.prototype.addListener=function(e,t){var n;if(!isFunction(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,isFunction(t.listener)?t.listener:t),this._events[e]?isObject(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,isObject(this._events[e])&&!this._events[e].warned){var n;n=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(e,t){function n(){this.removeListener(e,n),s||(s=!0,t.apply(this,arguments))}if(!isFunction(t))throw TypeError("listener must be a function");var s=!1;return n.listener=t,this.on(e,n),this},EventEmitter.prototype.removeListener=function(e,t){var n,s,i,r;if(!isFunction(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,s=-1,n===t||isFunction(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(isObject(n)){for(r=i;r-->0;)if(n[r]===t||n[r].listener&&n[r].listener===t){s=r;break}if(0>s)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},EventEmitter.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],isFunction(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},EventEmitter.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?isFunction(this._events[e])?[this._events[e]]:this._events[e].slice():[]},EventEmitter.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?isFunction(e._events[t])?1:e._events[t].length:0};
},{}],6:[function(require,module,exports){
function noop(){}var process=module.exports={};process.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,o="undefined"!=typeof window&&window.MutationObserver,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var s=[];if(o){var r=document.createElement("div"),t=new MutationObserver(function(){var e=s.slice();s.length=0,e.forEach(function(e){e()})});return t.observe(r,{attributes:!0}),function(e){s.length||r.setAttribute("yes","no"),s.push(e)}}return n?(window.addEventListener("message",function(e){var o=e.source;if((o===window||null===o)&&"process-tick"===e.data&&(e.stopPropagation(),s.length>0)){var n=s.shift();n()}},!0),function(e){s.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),process.title="browser",process.browser=!0,process.env={},process.argv=[],process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(){throw new Error("process.chdir is not supported")};
},{}],7:[function(require,module,exports){
(function (process){
function copyProperties(r,o,t,e,n,i,p){if(r=r||{},"production"!==process.env.NODE_ENV&&p)throw new Error("Too many arguments passed to copyProperties");for(var s,a=[o,t,e,n,i],g=0;a[g];){s=a[g++];for(var y in s)r[y]=s[y];s.hasOwnProperty&&s.hasOwnProperty("toString")&&"undefined"!=typeof s.toString&&r.toString!==s.toString&&(r.toString=s.toString)}return r}module.exports=copyProperties;
}).call(this,require(6))
},{}],8:[function(require,module,exports){
(function (process){
"use strict";var invariant=function(r,e,n,i,o,a,t,s){if("production"!==process.env.NODE_ENV&&void 0===e)throw new Error("invariant requires an error message argument");if(!r){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[n,i,o,a,t,s],d=0;u=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return v[d++]}))}throw u.framesToPop=1,u}};module.exports=invariant;
}).call(this,require(6))
},{}],9:[function(require,module,exports){
(function (process){
"use strict";var invariant=require(8),keyMirror=function(r){var n,i={};"production"!==process.env.NODE_ENV?invariant(r instanceof Object&&!Array.isArray(r),"keyMirror(...): Argument must be an object."):invariant(r instanceof Object&&!Array.isArray(r));for(n in r)r.hasOwnProperty(n)&&(i[n]=n);return i};module.exports=keyMirror;
}).call(this,require(6))
},{}],10:[function(require,module,exports){
"use strict";var mergeInto=require(12),merge=function(e,r){var t={};return mergeInto(t,e),mergeInto(t,r),t};module.exports=merge;
},{}],11:[function(require,module,exports){
(function (process){
"use strict";var invariant=require(8),keyMirror=require(9),MAX_MERGE_DEPTH=36,isTerminal=function(r){return"object"!=typeof r||null===r},mergeHelpers={MAX_MERGE_DEPTH:MAX_MERGE_DEPTH,isTerminal:isTerminal,normalizeMergeArg:function(r){return void 0===r||null===r?{}:r},checkMergeArrayArgs:function(r,e){"production"!==process.env.NODE_ENV?invariant(Array.isArray(r)&&Array.isArray(e),"Tried to merge arrays, instead got %s and %s.",r,e):invariant(Array.isArray(r)&&Array.isArray(e))},checkMergeObjectArgs:function(r,e){mergeHelpers.checkMergeObjectArg(r),mergeHelpers.checkMergeObjectArg(e)},checkMergeObjectArg:function(r){"production"!==process.env.NODE_ENV?invariant(!isTerminal(r)&&!Array.isArray(r),"Tried to merge an object, instead got %s.",r):invariant(!isTerminal(r)&&!Array.isArray(r))},checkMergeIntoObjectArg:function(r){"production"!==process.env.NODE_ENV?invariant(!(isTerminal(r)&&"function"!=typeof r||Array.isArray(r)),"Tried to merge into an object, instead got %s.",r):invariant(!(isTerminal(r)&&"function"!=typeof r||Array.isArray(r)))},checkMergeLevel:function(r){"production"!==process.env.NODE_ENV?invariant(MAX_MERGE_DEPTH>r,"Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way."):invariant(MAX_MERGE_DEPTH>r)},checkArrayStrategy:function(r){"production"!==process.env.NODE_ENV?invariant(void 0===r||r in mergeHelpers.ArrayStrategies,"You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays."):invariant(void 0===r||r in mergeHelpers.ArrayStrategies)},ArrayStrategies:keyMirror({Clobber:!0,IndexByIndex:!0})};module.exports=mergeHelpers;
}).call(this,require(6))
},{}],12:[function(require,module,exports){
"use strict";function mergeInto(e,r){if(checkMergeIntoObjectArg(e),null!=r){checkMergeObjectArg(r);for(var c in r)r.hasOwnProperty(c)&&(e[c]=r[c])}}var mergeHelpers=require(11),checkMergeObjectArg=mergeHelpers.checkMergeObjectArg,checkMergeIntoObjectArg=mergeHelpers.checkMergeIntoObjectArg;module.exports=mergeInto;
},{}],13:[function(require,module,exports){
"use strict";var ChatAppDispatcher=require(25),ChatConstants=require(24),ChatSocketUtils=require(28),MessageStore=require(26),ActionTypes=ChatConstants.ActionTypes;module.exports={sendUsername:function(e){ChatSocketUtils.sendUsername(e)},createMessage:function(e){ChatSocketUtils.sendMessage(e)}};
},{}],14:[function(require,module,exports){
"use strict";var ChatAppDispatcher=require(25),ChatConstants=require(24),ActionTypes=ChatConstants.ActionTypes;module.exports={receiveRawMessage:function(e){ChatAppDispatcher.handleServerAction({type:ActionTypes.RECEIVE_RAW_MESSAGE,rawMessage:e})},receiveUsername:function(e,t){ChatAppDispatcher.handleServerAction({type:ActionTypes.RECEIVE_USERNAME_RESPONSE,username:e,isAuthenticated:t||!1})},receiveUserList:function(e){ChatAppDispatcher.handleServerAction({type:ActionTypes.RECEIVE_USER_LIST,userList:e})},receiveJoinMessage:function(e){ChatAppDispatcher.handleServerAction({type:ActionTypes.RECEIVE_JOIN_MESSAGE,rawMessage:e})},receiveLeftMessage:function(e){ChatAppDispatcher.handleServerAction({type:ActionTypes.RECEIVE_LEFT_MESSAGE,rawMessage:e})}};
},{}],15:[function(require,module,exports){
"use strict";var ChatApp=require(16),ChatSocketUtils=require(28),UserStorageUtils=require(29),Config=require(23),React=require("react/addons");window.React=React,ChatSocketUtils.init(Config.SOCKET_URL),UserStorageUtils.findUsername(),React.renderComponent(ChatApp(null),document.getElementById("chatwindow"));
},{}],16:[function(require,module,exports){
"use strict";var Navigation=require(20),MessageSection=require(19),MessageComposer=require(17),UsernameSection=require(22),UserStore=require(27),React=require("react/addons"),ChatApp=React.createClass({displayName:"ChatApp",getInitialState:function(){return{isAuthenticated:!1}},componentDidMount:function(){UserStore.addChangeListener(this._onChange)},componentWillUnmount:function(){UserStore.removeChangeListener(this._onChange)},_onChange:function(){this.setState({isAuthenticated:UserStore.isAuthenticated()})},render:function(){var e;return e=this.state.isAuthenticated?[Navigation(null),MessageSection(null),MessageComposer(null)]:UsernameSection(null),React.DOM.div({className:"chatapp"},e)}});module.exports=ChatApp;
},{}],17:[function(require,module,exports){
"use strict";var ChatActionCreators=require(13),React=require("react/addons"),ENTER_KEY_CODE=13;module.exports=React.createClass({displayName:"exports",getInitialState:function(){return{text:""}},componentDidMount:function(){var t=this.refs.textarea.getDOMNode();window.onfocus=function(){t.focus()}},componentWillUnmount:function(){window.onfocus=null},_onChange:function(t){this.setState({text:t.target.value})},_onKeyDown:function(t){if(t.keyCode===ENTER_KEY_CODE){t.preventDefault();var e=this.state.text.trim();e&&ChatActionCreators.createMessage(e),this.setState({text:""})}},render:function(){return React.DOM.div({className:"messageComposer"},React.DOM.textarea({ref:"textarea",className:"textarea",name:"message",autoFocus:!0,value:this.state.text,onChange:this._onChange,onKeyDown:this._onKeyDown}))}});
},{}],18:[function(require,module,exports){
"use strict";var Config=require(23),Autolinker=require(1),React=require("react/addons"),AL=new Autolinker({truncate:Config.URL_MAX_CHAR,twitter:Config.TWITTER_HANDLE_AUTO_LINK});module.exports=React.createClass({displayName:"exports",propTypes:{message:React.PropTypes.object},render:function(){var e=this.props.message,a=React.addons.classSet,t={messageItem:!0};t[e.type]=!0;var s=AL.link(e.text);return React.DOM.li({className:a(t)},React.DOM.div({className:"messageTime"},e.date.toLocaleTimeString()),React.DOM.div({className:"messageAuthor"},e.author),React.DOM.div({className:"messageText",dangerouslySetInnerHTML:{__html:s}}))}});
},{}],19:[function(require,module,exports){
"use strict";function getStateFromStores(){return{messages:MessageStore.getAll()}}var MessageListItem=require(18),MessageStore=require(26),React=require("react/addons"),MessageSection=React.createClass({displayName:"MessageSection",getInitialState:function(){return getStateFromStores()},componentDidMount:function(){this._scrollToBottom(),MessageStore.addChangeListener(this._onChange)},componentWillUnmount:function(){MessageStore.removeChangeListener(this._onChange)},componentDidUpdate:function(){this._scrollToBottom()},_scrollToBottom:function(){var e=this.refs.messageList.getDOMNode();window.scrollTo(0,e.scrollHeight)},_onChange:function(){this.setState(getStateFromStores())},render:function(){var e=this.state.messages.map(function(e,t){return MessageListItem({key:t,message:e})});return React.DOM.ul({className:"messageList",ref:"messageList"},e)}});module.exports=MessageSection;
},{}],20:[function(require,module,exports){
"use strict";var UserSection=require(21),React=require("react/addons"),Navigation=React.createClass({displayName:"Navigation",getInitialState:function(){return{isOpen:!1}},_onHgClick:function(){this.setState({isOpen:!this.state.isOpen})},render:function(){var e=React.addons.classSet,t=e({"hamburger-icon":!0,close:this.state.isOpen});return React.DOM.nav(null,UserSection({isOpen:this.state.isOpen}),React.DOM.button({className:t,type:"button",onClick:this._onHgClick},React.DOM.span({className:"lines"})))}});module.exports=Navigation;
},{}],21:[function(require,module,exports){
"use strict";function getStateFromStores(){return{users:UserStore.getAll()}}var UserStore=require(27),React=require("react/addons"),UserSection=React.createClass({displayName:"UserSection",propTypes:{isOpen:React.PropTypes.bool.isRequired},getInitialState:function(){return getStateFromStores()},componentDidMount:function(){UserStore.addChangeListener(this._onChange)},componentWillUnmount:function(){UserStore.removeChangeListener(this._onChange)},_onChange:function(){this.setState(getStateFromStores())},render:function(){var e=React.addons.classSet,t=e({userSection:!0,opened:this.props.isOpen}),s=this.state.users.map(function(e,t){return React.DOM.li({className:"userItem",key:t},e)});return React.DOM.div({className:t},React.DOM.h2(null,"Users"),React.DOM.ul({className:"userList"},s))}});module.exports=UserSection;
},{}],22:[function(require,module,exports){
"use strict";var UserStore=require(27),ChatActionCreators=require(13),React=require("react/addons"),ENTER_KEY_CODE=13,UsernameSection=React.createClass({displayName:"UsernameSection",getInitialState:function(){return{username:UserStore.getUsername(),gotResponse:!1,isAuthenticated:!1,alreadySubmitted:!1}},componentDidMount:function(){UserStore.addChangeListener(this._onChange)},componentWillUnmount:function(){UserStore.removeChangeListener(this._onChange)},_onChange:function(){this.setState({gotResponse:!0,username:UserStore.getUsername(),isAuthenticated:UserStore.isAuthenticated()})},_onInputChange:function(e){this.setState({username:e.target.value.trim()})},_onInputKeyDown:function(e){e.keyCode===ENTER_KEY_CODE&&(e.preventDefault(),this._handleClick())},_handleClick:function(){event.preventDefault(),this.state.username&&(ChatActionCreators.sendUsername(this.state.username),this.setState({alreadySubmitted:!0}))},render:function(){var e;return this.state.gotResponse&&!this.state.isAuthenticated&&(e=React.DOM.span({className:"usernameError"},"The username is not available")),React.DOM.section({className:"usernameSection"},React.DOM.div({className:"usernameForm"},React.DOM.h3({className:"title"},"What's your username?"),React.DOM.input({className:"usernameInput",type:"text",maxLength:"20",autoFocus:!0,defaultValue:this.state.username,onChange:this._onInputChange,onKeyDown:this._onInputKeyDown}),e,React.DOM.button({className:"usernameBtn",type:"button",onClick:this._handleClick},"ENTER")))}});module.exports=UsernameSection;
},{}],23:[function(require,module,exports){
module.exports={SOCKET_URL:"http://babble-server-demo.herokuapp.com:80",TWITTER_HANDLE_AUTO_LINK:!1,URL_MAX_CHAR:70};
},{}],24:[function(require,module,exports){
"use strict";var keyMirror=require(9);module.exports={ActionTypes:keyMirror({RECEIVE_RAW_MESSAGE:null,RECEIVE_JOIN_MESSAGE:null,RECEIVE_LEFT_MESSAGE:null,RECEIVE_USERNAME_RESPONSE:null,RECEIVE_USER_LIST:null}),PayloadSources:keyMirror({SERVER_ACTION:null,VIEW_ACTION:null})};
},{}],25:[function(require,module,exports){
"use strict";var ChatConstants=require(24),Dispatcher=require(2).Dispatcher,copyProperties=require(7),PayloadSources=ChatConstants.PayloadSources,ChatAppDispatcher=copyProperties(new Dispatcher,{handleServerAction:function(t){var e={source:PayloadSources.SERVER_ACTION,action:t};this.dispatch(e)},handleViewAction:function(t){var e={source:PayloadSources.VIEW_ACTION,action:t};this.dispatch(e)}});module.exports=ChatAppDispatcher;
},{}],26:[function(require,module,exports){
"use strict";var ChatAppDispatcher=require(25),ChatConstants=require(24),EventEmitter=require(5).EventEmitter,merge=require(10),ActionTypes=ChatConstants.ActionTypes,CHANGE_EVENT="change",_messages=[],MessageStore=merge(EventEmitter.prototype,{emitChange:function(){this.emit(CHANGE_EVENT)},addChangeListener:function(e){this.addListener(CHANGE_EVENT,e)},removeChangeListener:function(e){this.removeListener(CHANGE_EVENT,e)},getAll:function(){return _messages},convertRawMessage:function(e,s){return{type:e,date:new Date(s.time),author:s.user,text:s.msg}}});MessageStore.dispatchToken=ChatAppDispatcher.register(function(e){var s=e.action;switch(s.type){case ActionTypes.RECEIVE_RAW_MESSAGE:_messages.push(MessageStore.convertRawMessage("message",s.rawMessage)),MessageStore.emitChange();break;case ActionTypes.RECEIVE_JOIN_MESSAGE:s.rawMessage.msg="joins the chat.",_messages.push(MessageStore.convertRawMessage("join",s.rawMessage)),MessageStore.emitChange();break;case ActionTypes.RECEIVE_LEFT_MESSAGE:s.rawMessage.msg="left the chat.",_messages.push(MessageStore.convertRawMessage("left",s.rawMessage)),MessageStore.emitChange()}}),module.exports=MessageStore;
},{}],27:[function(require,module,exports){
"use strict";var ChatAppDispatcher=require(25),ChatConstants=require(24),EventEmitter=require(5).EventEmitter,merge=require(10),ActionTypes=ChatConstants.ActionTypes,CHANGE_EVENT="change",_users=[],_currentUsername="",_isAuthenticated=!1,UserStore=merge(EventEmitter.prototype,{emitChange:function(){this.emit(CHANGE_EVENT)},addChangeListener:function(e){this.addListener(CHANGE_EVENT,e)},removeChangeListener:function(e){this.removeListener(CHANGE_EVENT,e)},isAuthenticated:function(){return _isAuthenticated},getUsername:function(){return _currentUsername},getAll:function(){return _users}});UserStore.dispatchToken=ChatAppDispatcher.register(function(e){var t=e.action;switch(t.type){case ActionTypes.RECEIVE_USERNAME_RESPONSE:_isAuthenticated=t.isAuthenticated,_currentUsername=t.username,UserStore.emitChange();break;case ActionTypes.RECEIVE_USER_LIST:t.userList.forEach(function(e){_users.push(e)}),UserStore.emitChange();break;case ActionTypes.RECEIVE_JOIN_MESSAGE:_users.push(t.rawMessage.user),UserStore.emitChange();break;case ActionTypes.RECEIVE_LEFT_MESSAGE:var r=_users.indexOf(t.rawMessage.user);r>-1&&_users.splice(r,1),UserStore.emitChange()}}),module.exports=UserStore;
},{}],28:[function(require,module,exports){
"use strict";var ChatServerActionCreators=require(14),UserStorageUtils=require(29),io=require("socket.io-client"),socket;module.exports={init:function(e){socket=io(e),socket.on("connect",function(){console.log("Connected to socket:",e),socket.on("send:message",function(e){ChatServerActionCreators.receiveRawMessage(e)}),socket.on("send:history",function(e){e.forEach(function(e){ChatServerActionCreators.receiveRawMessage(e)})}),socket.on("user:list",function(e){ChatServerActionCreators.receiveUserList(e)}),socket.on("user:join",function(e){ChatServerActionCreators.receiveJoinMessage(e)}),socket.on("user:left",function(e){ChatServerActionCreators.receiveLeftMessage(e)}),socket.on("disconnect",function(){console.log("Disconnected from socket:",e)})})},sendMessage:function(e){socket.emit("send:message",e)},sendUsername:function(e){socket.emit("send:username",e,function(t){t&&UserStorageUtils.saveUsername(e),ChatServerActionCreators.receiveUsername(e,t)})}};
},{}],29:[function(require,module,exports){
"use strict";var ChatServerActionCreators=require(14);module.exports={findUsername:function(){var e=localStorage.getItem("username")||"";ChatServerActionCreators.receiveUsername(e)},saveUsername:function(e){localStorage.setItem("username",e)}};
},{}]},{},[15]);
