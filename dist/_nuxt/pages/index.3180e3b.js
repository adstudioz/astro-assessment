/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"c",(function(){return r.a})),n.d(t,"b",(function(){return I}));var r=n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function h(e,t){d(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){d(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){d(e,t,n)}))}function d(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,o,e,n):Reflect.defineMetadata(r,o,e)}))}var v={__proto__:[]}instanceof Array;function y(e){return function(t,n,r){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(t){return e(t,n,r)}))}}function m(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var data=new t;t.prototype._init=n;var r={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(r[e]=data[e])})),r}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(_.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){return c({},e,r.value)}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return m(this,e)}});var o=e.__decorators__;o&&(o.forEach((function(e){return e(t)})),delete e.__decorators__);var l=Object.getPrototypeOf(e.prototype),d=l instanceof r.a?l.constructor:r.a,v=d.extend(t);return C(v,e,d),f()&&h(v,e),v}var j={prototype:!0,arguments:!0,callee:!0,caller:!0};function C(e,t,n){Object.getOwnPropertyNames(t).forEach((function(r){if(!j[r]){var c=Object.getOwnPropertyDescriptor(e,r);if(!c||c.configurable){var l,f,h=Object.getOwnPropertyDescriptor(t,r);if(!v){if("cid"===r)return;var d=Object.getOwnPropertyDescriptor(n,r);if(l=h.value,f=o(l),null!=l&&("object"===f||"function"===f)&&d&&d.value===h.value)return}0,Object.defineProperty(e,r,h)}}}))}function w(e){return"function"==typeof e?O(e):function(t){return O(t,e)}}w.registerHooks=function(e){_.push.apply(_,l(e))};var R=w;function S(e){var t=function(){var n=this,r="function"==typeof e?e.call(this):e;for(var i in(r=Object.create(r||null)).__reactiveInject__=this.__reactiveInject__||{},t.managed)r[t.managed[i]]=this[i];var o=function(i){r[t.managedReactive[i]]=c[i],r.__reactiveInject__.hasOwnProperty(t.managedReactive[i])||Object.defineProperty(r.__reactiveInject__,t.managedReactive[i],{enumerable:!0,get:function(){return n[i]}})},c=this;for(var i in t.managedReactive)o(i);return r};return t.managed={},t.managedReactive={},t}function L(e){return"function"!=typeof e||!e.managed&&!e.managedReactive}function I(e){return y((function(t,n){var r=t.provide;L(r)&&(r=t.provide=S(r)),r.managed[n]=e||n}))}"undefined"!=typeof Reflect&&Reflect.getMetadata},238:function(e,t,n){"use strict";n.r(t);n(23),n(24),n(12),n(220);var r=n(221),o=n(223),c=n(224),l=n(222),f=n(15),h=n(234);function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){Object(o.a)(n,e);var t=d(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return n}(h.c),m=y=v([Object(h.a)({})],y),_=n(39),component=Object(_.a)(m,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("h1",{staticClass:"text-32"},[this._v("Welcome to Astro")])])}],!1,null,null,null);t.default=component.exports},240:function(e,t,n){"use strict";n.r(t),n.d(t,"SortBy",(function(){return j})),n.d(t,"Resolution",(function(){return C})),n.d(t,"Category",(function(){return w})),n.d(t,"Language",(function(){return R}));n(33),n(25),n(32),n(31),n(17),n(23),n(24),n(220),n(55),n(71);var r=n(68),o=(n(34),n(3)),c=(n(26),n(12),n(225),n(221)),l=n(226),f=n(223),h=n(224),d=n(222),v=n(15),y=n(234);function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var j,C,w,R,S=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};!function(e){e.ChannnelNumber="channel-number",e.ChannnelTitle="channel-title"}(j||(j={})),function(e){e.SD="SD",e.HD="HD"}(C||(C={})),function(e){e.AstroOnTheGo="Astro On The Go",e.Kids="Kids",e.Learning="Learning",e.Lifestyle="Lifestyle",e.Movies="Movies",e.Music="Music",e.News="News",e.Njoi="NJOI",e.Radio="Radio",e.SetTopBox="Set Top Box",e.SpecialInterest="Special Interest",e.Sports="Sports",e.TribeID="Tribe ID",e.TribePH="Tribe PH",e.VarietyEntertainment="Variety Entertainment"}(w||(w={})),function(e){e.Chinese="Chinese",e.Indian="Indian",e.International="International",e.KoreanJapanese="Korean & Japanese",e.Malay="Malay",e.MultipleLanguage="Multiple Language"}(R||(R={}));var L=function(e){Object(f.a)(v,e);var t,n,h,d=O(v);function v(){var e;return Object(c.a)(this,v),(e=d.apply(this,arguments)).channels=[],e.rawChannels=[],e.filteredChannels=[],e.searchInput="",e.currentSorting=null,e.isLoading=!0,e.categories=Object.values(w),e.languages=Object.values(R),e.resolutions=Object.values(C),e}return Object(l.a)(v,[{key:"created",value:(h=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchChannels();case 2:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"fetchChannels",value:(n=Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,this.$axios.get("/channel/all.json");case 3:data=e.sent.data,this.rawChannels=data.response,this.channels=data.response,this.filteredChannels=data.response,console.log(data.response[0]),this.isLoading=!1;case 9:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"searchChannels",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,o,c,l,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.length>0&&void 0!==f[0]&&f[0],this.isLoading=!0,this.searchInput){e.next=6;break}return this.channels=t?Object(r.a)(this.rawChannels):Object(r.a)(this.filteredChannels),this.isLoading=!1,e.abrupt("return");case 6:this.channels=[],n=[],n=t?Object(r.a)(this.rawChannels):Object(r.a)(this.filteredChannels),o=m(n);try{for(o.s();!(c=o.n()).done;)((l=c.value).title.toLowerCase().includes(this.searchInput.toLowerCase())||l.stbNumber.toLowerCase().includes(this.searchInput.toLowerCase()))&&this.channels.push(l)}catch(e){o.e(e)}finally{o.f()}this.isLoading=!1;case 12:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"sortChannels",value:function(e){this.isLoading=!0,this.channels=this.channels.sort((function(t,n){return e===j.ChannnelTitle?t.title.toLowerCase()>n.title.toLowerCase()?1:-1:t.stbNumber.toLowerCase()>n.stbNumber.toLowerCase()?1:-1})),this.currentSorting=e,this.isLoading=!1}},{key:"filterChannelsByCategory",value:function(e){this.isLoading=!0,this.filteredChannels=Object(r.a)(this.rawChannels),this.filteredChannels=this.filteredChannels.filter((function(t){return t.category===e})),this.channels=Object(r.a)(this.filteredChannels),this.reapplySearchAndSort(),this.isLoading=!1}},{key:"filterChannelsByLanguage",value:function(e){this.isLoading=!0,this.filteredChannels=Object(r.a)(this.rawChannels),this.filteredChannels=this.filteredChannels.filter((function(t){return t.language===e})),this.channels=Object(r.a)(this.filteredChannels),this.reapplySearchAndSort(),this.isLoading=!1}},{key:"filterChannelsByResolution",value:function(e){this.isLoading=!0,this.filteredChannels=Object(r.a)(this.rawChannels),this.filteredChannels=this.filteredChannels.filter((function(t){return e===C.HD?t.isHd:!t.isHd})),this.channels=Object(r.a)(this.filteredChannels),this.reapplySearchAndSort(),this.isLoading=!1}},{key:"reapplySearchAndSort",value:function(){this.searchInput&&this.searchChannels(),this.currentSorting&&this.sortChannels(this.currentSorting)}}]),v}(y.c);S([Object(y.b)()],L.prototype,"channels",void 0),S([Object(y.b)()],L.prototype,"rawChannels",void 0),S([Object(y.b)()],L.prototype,"filteredChannels",void 0),S([Object(y.b)()],L.prototype,"searchInput",void 0),S([Object(y.b)()],L.prototype,"currentSorting",void 0),S([Object(y.b)()],L.prototype,"isLoading",void 0),S([Object(y.b)()],L.prototype,"categories",void 0),S([Object(y.b)()],L.prototype,"languages",void 0),S([Object(y.b)()],L.prototype,"resolutions",void 0);var I=L=S([Object(y.a)({})],L),P=n(39),component=Object(P.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("Header"),e._v(" "),n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.searchChannels()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],attrs:{id:"search_channel",placeholder:"search",name:"search_channel"},domProps:{value:e.searchInput},on:{input:function(t){t.target.composing||(e.searchInput=t.target.value)}}}),e._v(" "),n("button",[e._v("search")])]),e._v(" "),n("div",[n("button",{on:{click:function(t){return e.sortChannels("channel-title")}}},[e._v("Sort By Name")]),e._v(" "),n("button",{on:{click:function(t){return e.sortChannels("channel-number")}}},[e._v("\n          Sort By Number\n        ")]),e._v(" "),n("div",e._l(e.categories,(function(t,r){return n("button",{key:r,staticClass:"m-10",on:{click:function(n){return e.filterChannelsByCategory(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])})),0),e._v(" "),n("div",e._l(e.languages,(function(t,r){return n("button",{key:r,staticClass:"m-10",on:{click:function(n){return e.filterChannelsByLanguage(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])})),0),e._v(" "),n("div",e._l(e.resolutions,(function(t,r){return n("button",{key:r,staticClass:"m-10",on:{click:function(n){return e.filterChannelsByResolution(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])})),0)])]),e._v(" "),e.isLoading?e._e():n("div",[e.channels.length?n("div",{staticClass:"flex flex-wrap"},e._l(e.channels,(function(t,r){return n("div",{key:r,staticClass:"w-200 m-20"},[n("p",[e._v("title: "+e._s(t.title))]),e._v(" "),n("p",[e._v("number: "+e._s(t.stbNumber))]),e._v(" "),n("p",[e._v("category: "+e._s(t.category))]),e._v(" "),n("p",[e._v("language: "+e._s(t.language))]),e._v(" "),n("p",[e._v("resolution: "+e._s(t.isHd?"HD":"SD"))]),e._v(" "),n("img",{staticClass:"w-100",attrs:{src:t.imageUrl}})])})),0):e._e()])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(238).default})}}]);