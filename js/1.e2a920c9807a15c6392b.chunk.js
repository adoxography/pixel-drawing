// [AIV_SHORT]  Build version: 0.3.1 - Thursday, October 31st, 2019, 12:20:13 PM  
 (window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1tTY":function(t,e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var o=function(){function e(t){r(this,e),this.commands=t||[]}return i(e,[{key:"add",value:function(t){this.commands.push(t)}},{key:"toArray",value:function(){return this.commands.reduce(function(t,e){return t.concat(e.toArray())},[])}},{key:"length",get:function(){return this.commands.length}}]),e}(),n=function(){function n(t,e){r(this,n),this.number=t,this.clr=e}return i(n,[{key:"toArray",value:function(){return Array(this.number).fill(this.clr)}}]),n}(),s=function(){function n(t,e){r(this,n),this.number=t||1,this.program=new o(e||[])}return i(n,[{key:"add",value:function(t){this.program.add(t)}},{key:"toArray",value:function(){return Array(this.number).fill(this.program.toArray()).flat()}}]),n}(),c=function(){function t(){r(this,t)}return i(t,[{key:"toArray",value:function(){return[null]}}]),t}();t.exports={Loop:s,Newline:c,Pixel:n,Sequence:o}},"231I":function(t,e,n){"use strict";var r={b:{rgb:[0,0,255]},r:{rgb:[255,0,0]},g:{rgb:[0,255,0]},gr:{rgb:[80,80,80]},y:{rgb:[255,255,0]},pu:{rgb:[255,0,255]},o:{rgb:[255,125,0]},c:{rgb:[0,255,255]},w:{rgb:[255,255,255]},k:{rgb:[0,0,0]},br:{rgb:[125,80,0]},pi:{rgb:[255,80,125]}},a={size:20,frameRate:16,clrs:r},i={id:null,updated:0,name:"Jump Man",text:"10[c g];\n10[g c];\n3[c g]     6r                    4[c g];\n2[g c] g   10r                   c 2[g c];\n2[c g] c   3br 3y k y            g 3[c g];\n2[g c]     br y br 4y k 3y       c 2[g c];\n2[c g]     br y 2br 4y k 3y      2[c g];\n2[g c]     2br 5y 4k             c 2[g c];\n3[c g]     8y                    3[c g];\n2[g c] g   2r b 2r b r           4[g c];\n2[c g]     3r b 2r b 3r          3[c g];\ng c g      4r 4b 4r              c 2[g c];\nc g c      2y r b o 2b o b r 2y  g 2[c g];\ng c g      3y 6b 3y              c 2[g c];\nc g c      2y 8b 2y              g 2[c g];\n2[g c] g   3b g c 3b             c 3[g c];\n2[c g]     3k 2[g c] 3k          3[c g];\ng c g      4k 2[c g] 4k          c 2[g c];\n2[5[2gr 2br];]",settings:a};t.exports={program:i,settings:a,clrs:r}},"28Ky":function(t,e,n){"use strict";var r=n("k52t");n.n(r).a},"2mmj":function(t,e,n){t.exports=n.p+"374a4767bd27018051743808685703e0.png"},"2pTP":function(t,e,n){},"3ERx":function(t,e,n){},"4OvJ":function(t,e){t.exports={array_last:function(t){return t[t.length-1]},debounce:function(n,r){var a;return function(){var t=this,e=arguments;clearTimeout(a),a=setTimeout(function(){return n.apply(t,e)},r)}},escape:function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}}},"7mSr":function(t,e,n){t.exports=n.p+"f22d55e4b17a66c5f9f5a54fe433d820.png"},IYIw:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return i(t,arguments,s(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)})(t)}function i(t,e,n){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,s(t).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(t,a(Error)),t}();t.exports={ParseError:c}},OjRc:function(t,e,n){t.exports=n.p+"89476c2c88b04ecc6b4e16a6b3c5cc18.png"},RAzI:function(t,e,n){t.exports=n.p+"d57173091775549f817462c19c9e3eb0.png"},VQ0Q:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);var r=n("XfhM"),a=n.n(r),i=n("7O5W"),o=n("wHSu"),s=n("8tEE"),c=n("KHd+"),l=Object(c.a)({},function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,null,null,null).exports,u=n("jE9Z"),p={computed:{path:function(){return this.$route.path},isCodeRoute:function(){return"/"===this.path||"/code"===this.path},isAboutRoute:function(){return"/about"===this.path},isReferenceRoute:function(){return"/ref"===this.path}}},f=(n("28Ky"),Object(c.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-component"},[n("div",{staticClass:"tabs is-boxed"},[n("ul",[n("li",{class:{"is-active":t.isCodeRoute}},[n("router-link",{attrs:{to:"code"}},[t._v("\n          Code\n        ")])],1),t._v(" "),n("li",{class:{"is-active":t.isAboutRoute}},[n("router-link",{attrs:{to:"about"}},[t._v("\n          About\n        ")])],1),t._v(" "),n("li",{class:{"is-active":t.isReferenceRoute}},[n("router-link",{attrs:{to:"ref"}},[t._v("\n          Reference\n        ")])],1)])]),t._v(" "),n("div",{staticClass:"box"},[n("router-view")],1)])},[],!1,null,null,null).exports),d={props:{clrs:{type:Object,default:function(){}}}},h=(n("jQHa"),Object(c.a)(d,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"clr-table"},n._l(n.clrs,function(t,e){return r("span",{key:e,style:{border:"10px solid rgb("+t.rgb.join(",")+")"}},[n._v("\n    "+n._s(e)+"\n  ")])}),0)},[],!1,null,null,null).exports),g=n("L2JU");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={components:{"pixel-clr-table":h},props:{value:{type:Object,default:function(){return{size:0,clrs:{},frameRate:0}}}},computed:v({},Object(g.c)(["syntaxHighlighting"])),methods:v({},Object(g.b)(["updateSyntaxHighlighting"]),{updateSize:function(t){var e=JSON.parse(JSON.stringify(this.value));e.size=t,this.$emit("input",e)},updateFrameRate:function(t){var e=JSON.parse(JSON.stringify(this.value));e.frameRate=parseInt(t),this.$emit("input",e)}})},w=Object(c.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"clr-table"}},[e._v("\n        Available colours\n      ")]),e._v(" "),n("pixel-clr-table",{attrs:{id:"clr-table",clrs:e.value.clrs}})],1)]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"size-input"}},[e._v("\n        Number of pixels\n      ")]),e._v(" "),n("input",{staticClass:"input",attrs:{id:"size-input",type:"number"},domProps:{value:e.value.size},on:{input:function(t){return e.updateSize(t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"frame-rate-input"}},[e._v("\n        Frame Rate\n      ")]),e._v(" "),n("input",{staticClass:"slider",attrs:{id:"frame-rate-input",type:"range",step:"1",min:"1",max:"60"},domProps:{value:e.value.frameRate},on:{input:function(t){return e.updateFrameRate(t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.syntaxHighlighting},on:{input:function(t){return e.updateSyntaxHighlighting(t.target.checked)}}}),e._v("\n        Syntax Highlighting On\n      ")])])])])},[],!1,null,null,null).exports,x=n("I335"),O=n.n(x),_={props:{width:{type:Number,default:400},height:{type:Number,default:400}},created:function(){console.log("loaded!")},mounted:function(){this.p5=new O.a(this.initP5,"p5-sketch")},methods:{initP5:function(t){t.setup=this.setup(t),t.draw=this.draw(t)}}};function P(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var S={extends:Object(c.a)(_,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"p5-sketch",attrs:{id:"p5-sketch"}})},[],!1,null,null,null).exports,data:function(){return{p5:null,row:0,col:0,programIndex:0,pixelSize:0,pixels:[],size:0,frameRate:16}},created:function(){this.pixelSize=this.width/this.size},methods:{setup:function(t){var e=this;return function(){t.createCanvas(e.width,e.height),t.stroke(200)}},draw:function(t){var e=this;return function(){t.frameRate(e.frameRate),e.drawNextPixel(t)}},render:function(t,e,n){this.size=e,this.pixels=t,this.pixelSize=this.width/e,this.programIndex=0,this.firstPixel=!0,this.row=0,this.col=0,this.frameRate=n,this.$forceUpdate()},clearScreen:function(t){t.background(255);for(var e=0;e<=this.size;e++)t.line(0,e*this.pixelSize,this.width,e*this.pixelSize),t.line(e*this.pixelSize,0,e*this.pixelSize,this.height)},drawNextPixel:function(t){var e;for(this.firstPixel&&(this.clearScreen(t),this.firstPixel=!1);this.pixels.length&&!(e=this.pixels.shift());)this.row++,this.col=0;(e||this.pixels.length)&&(t.fill(t.color.apply(t,P(e))),t.rect(this.col*this.pixelSize,this.row*this.pixelSize,this.pixelSize,this.pixelSize),this.col++,this.programIndex++)}}},j=Object(c.a)(S,void 0,void 0,!1,null,null,null).exports,k=function t(e,n){var r=0,a=!0,i=!1,o=void 0;try{for(var s,c=e.childNodes[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value,u=l.length||l.innerText.length;if(n<=r+u)return l.nodeType!==Node.TEXT_NODE?t(l,n-r):C(l,n-r);r+=u}}catch(t){i=!0,o=t}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}},C=function(t,e){var n=document.createRange();return n.setStart(t,e),n.collapse(!0),n},E={props:{value:{type:String,default:""}},methods:{handleInput:function(t){var e=this,n=this.getCaretPosition();this.$emit("input",t.target.innerHTML),this.$nextTick(function(){return e.setCaret(n)})},getCaretPosition:function(){return function(t){var e=document.getSelection().getRangeAt(0),n=e.cloneRange();return n.selectNodeContents(t),n.setEnd(e.endContainer,e.endOffset),n.toString().length}(this.$el)},setCaret:function(t){!function(t,e){var n=document.getSelection(),r=k(t,e);n.removeAllRanges(),n.addRange(r)}(this.$el,t)}}},R=Object(c.a)(E,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"program-input textarea",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.value)},on:{input:t.handleInput}})},[],!1,null,null,null).exports;function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A={components:{"pixel-editable":R},props:{value:{type:String,default:""},clrs:{type:Object,default:function(){return{}}}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){N(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(g.c)(["syntaxHighlighting"]),{formattedValue:function(){var r=this;return this.value.replace(/\d*([a-z]+)/g,function(t,e){if(!{}.hasOwnProperty.call(r.clrs,e))return t.replace(/.{1,5}/g,'<span class="err">$&</span>');if(r.syntaxHighlighting){var n=r.clrs[e];return'<span style="color: '.concat(function(t){return"rgb(".concat(t.rgb.map(function(t){return.75*t}).join(","),")")}(n),';">').concat(t,"</span>")}return t})}}),methods:{handleInput:function(t){var e=t.replace(/<.+?>/g,"");this.$emit("input",e)}}},T=(n("WNPU"),Object(c.a)(A,function(){var t=this.$createElement;return(this._self._c||t)("pixel-editable",{attrs:{value:this.formattedValue},on:{input:this.handleInput}})},[],!1,null,null,null).exports),$={props:{title:{type:String,default:""}},methods:{close:function(){this.$emit("close")}}},z={components:{Modal:Object(c.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background",on:{click:t.close}}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.close}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t._t("default")],2),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t._t("footer",[n("button",{staticClass:"button is-danger",on:{click:t.close}},[t._v("\n          Cancel\n        ")])])],2)])])},[],!1,null,null,null).exports},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{selection:""}},methods:{load:function(){this.$emit("input",this.selection)},close:function(){this.$emit("close")}}},D=Object(c.a)(z,function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"Choose a file"},on:{close:r.close},scopedSlots:r._u([{key:"footer",fn:function(){return[a("button",{staticClass:"button is-success",on:{click:r.load}},[r._v("\n      Load\n    ")])]},proxy:!0}])},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:r.selection,expression:"selection"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});r.selection=t.target.multiple?e:e[0]}}},r._l(r.options,function(t){var e=t.id,n=t.name;return a("option",{key:e,domProps:{value:e}},[r._v("\n        "+r._s(n)+"\n      ")])}),0)])])},[],!1,null,null,null).exports,H={props:{buttons:{type:Array,default:function(){return[]}}},methods:{handleClick:function(t){t.call()}}},L=(n("t1HX"),Object(c.a)(H,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"field toolbar is-pulled-right"},n._l(n.buttons,function(e,t){return r("a",{key:t,staticClass:"button icon is-medium",attrs:{title:e.title,disabled:!!e.disabled&&e.disabled()},on:{click:function(t){return n.handleClick(e.action)}}},[r("i",{staticClass:"fas",class:"fa-"+e.icon})])}),0)},[],!1,null,null,null).exports),F=n("231I"),M=n.n(F),J=n("4OvJ"),U=n("XFhw"),V=n("1tTY"),X=n.n(V),Q=n("IYIw");function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var q=function(){function n(t,e){if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),!(t instanceof RegExp))throw new TypeError("First argument to `Rule` must be RegExp");this._pattern=t,this.pattern=new RegExp("^".concat(t.source,"$")),this.action=e}return function(t,e,n){e&&B(t.prototype,e),n&&B(t,n)}(n,[{key:"appliesTo",value:function(t){return this.pattern.test(t)}},{key:"match",value:function(t){return t.match(this.pattern)}},{key:"apply",value:function(t){this.action(t)}}],[{key:"merge",value:function(t,e){var n=t.map(function(t){return t._pattern.source});return new RegExp(n.join("|"),e)}}]),n}(),G=[new q(/(\d*)([a-z]+)/,function(t){var e=t.stack,n=t.matchData,r=parseInt(n[1]||1),a=n[2];Object(J.array_last)(e).add(new X.a.Pixel(r,a))}),new q(new RegExp("(\\d*)".concat(Object(J.escape)(U.BEGIN_LOOP))),function(t){var e=t.stack,n=t.matchData,r=parseInt(n[1]||1),a=new X.a.Loop(r);Object(J.array_last)(e).add(a),e.push(a)}),new q(new RegExp(Object(J.escape)(U.END_LOOP)),function(t){var e=t.stack;if(!(Object(J.array_last)(e)instanceof X.a.Loop))throw new Q.ParseError('Unexpected "]"');e.pop()}),new q(new RegExp(Object(J.escape)(U.END_OF_LINE)),function(t){var e=t.stack;Object(J.array_last)(e).add(new X.a.Newline)}),new q(/\S+/,function(t){var e=t.token;throw new Q.ParseError("Unexpected token '".concat(e,"'"))})],K=q.merge(G,"g"),W=function(t){return function(t){var r=[new V.Sequence];if(t.forEach(function(e){var t=G.find(function(t){return t.appliesTo(e)});if(!t)throw new Q.ParseError("Unknown token ".concat(e));var n=t.match(e);t.apply({stack:r,token:e,matchData:n})}),1<r.length)throw new Q.ParseError("Unmatched '".concat(U.BEGIN_LOOP,"'"));return r[0]}(function(t){return Array.from(t.matchAll(K)).map(function(t){return t[0]})}(t))};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){tt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et={components:{"pixel-side-panel":w,"pixel-sketch":j,"pixel-editor":T,"pixel-file-select":D,"pixel-toolbar":L},data:function(){var t=this;return{panelShown:!0,showFileSelect:!1,errorMessage:null,dirty:!1,program:null,toolbarButtons:[{icon:"plus",title:"New",action:this.createNew},{icon:"save",title:"Save",action:this.save,disabled:function(){return!t.dirty}},{icon:"folder-open",title:"Load",action:this.handleOpenClicked,disabled:function(){return 0===t.allPrograms.length}},{icon:"copy",title:"Duplicate",action:this.duplicate,disabled:function(){return null===t.program.id}}]}},computed:Z({},Object(g.c)("programs",["allPrograms","maxId","lastProgram"]),{},Object(g.c)(["autoSave"])),created:function(){this.program=JSON.parse(JSON.stringify(this.lastProgram)),this.dirty=!1},mounted:function(){this.render()},methods:Z({},Object(g.b)("programs",["saveProgram","loadProgram","updateAutoSave"]),{},Object(g.b)(["updateAutoSave"]),{render:function(){var t=this.parse(this.program.text);t&&this.$refs.sketch.render(t,this.program.settings.size,this.program.settings.frameRate)},handleInput:function(){this.errorMessage=null,this.validate(this.program.text),this.handleChange()},handlePanelInput:function(){this.handleChange()},handleChange:function(){this.dirty=!0,this.autoSave&&this.save()},validate:Object(J.debounce)(function(t){console.log("validating");try{var e=W(t).toArray(),n=!0,r=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s&&!{}.hasOwnProperty.call(this.program.settings.clrs,s)){this.errorMessage="Unknown colour '".concat(s,"'");break}}}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}catch(t){this.errorMessage=t.message}},500),parse:function(t){var e=this;console.log(t);var n=W(t).toArray();return n.some(function(t){return t&&!{}.hasOwnProperty.call(e.program.settings.clrs,t)})?null:n.map(function(t){return t?e.program.settings.clrs[t].rgb:null})},createNew:function(){this.dirty&&!confirm("Unsaved changes. Continue?")||(this.program={id:null,name:"Untitled",text:"",settings:JSON.parse(JSON.stringify(M.a.settings))})},duplicate:function(){if(!this.dirty||confirm("Unsaved changes. Continue?")){var t=JSON.parse(JSON.stringify(this.program));t.id=null,t.name+=" (2)",this.program=t}},save:function(){this.program.id||(this.program.id=this.maxId+1),this.saveProgram(this.program),this.dirty=!1},handleOpenClicked:function(){this.showFileSelect=!0},handleLoadProgram:function(e){this.showFileSelect=!1,this.loadProgram(e),this.program=this.allPrograms.find(function(t){return t.id===e})}})},nt=Object(c.a)(et,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-narrow"},[n("div",{staticStyle:{"min-width":"1em"}},[n("a",{staticClass:"icon can-rotate",class:{rotated:!e.panelShown},attrs:{title:e.panelShown?"Hide Panel":"Show Panel"},on:{click:function(t){e.panelShown=!e.panelShown}}},[n("i",{staticClass:"fas fa-chevron-right"})]),e._v(" "),n("transition",{attrs:{name:"slide-fade"}},[e.panelShown?n("div",[n("pixel-side-panel",{on:{input:e.handlePanelInput},model:{value:e.program.settings,callback:function(t){e.$set(e.program,"settings",t)},expression:"program.settings"}})],1):e._e()])],1)]),e._v(" "),n("div",{staticClass:"column program-container"},[n("pixel-toolbar",{attrs:{buttons:e.toolbarButtons}}),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.program.name,expression:"program.name"}],staticClass:"input",domProps:{value:e.program.name},on:{input:function(t){t.target.composing||e.$set(e.program,"name",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("pixel-editor",{attrs:{clrs:e.program.settings.clrs},on:{input:e.handleInput},model:{value:e.program.text,callback:function(t){e.$set(e.program,"text",t)},expression:"program.text"}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"has-text-danger"},[e._v("\n            Error: "+e._s(e.errorMessage)+"\n          ")]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.autoSave},on:{input:function(t){return e.updateAutoSave(t.target.checked)}}}),e._v("\n                Auto Save\n              ")])])])],1)],1)])]),e._v(" "),n("div",{staticClass:"column is-narrow"},[n("div",{staticClass:"field"},[n("button",{staticClass:"draw-button button is-success",attrs:{disabled:e.errorMessage},on:{click:e.render}},[e._v("\n        Draw!\n      ")])]),e._v(" "),n("pixel-sketch",{ref:"sketch"})],1),e._v(" "),n("pixel-file-select",{directives:[{name:"show",rawName:"v-show",value:e.showFileSelect,expression:"showFileSelect"}],attrs:{options:e.allPrograms.map(function(t){return{id:t.id,name:t.name}})},on:{close:function(t){e.showFileSelect=!1},input:function(t){return e.handleLoadProgram(t)}}})],1)},[],!1,null,null,null).exports,rt=Object(c.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("This program is based on an unplugged activity called "),n("a",{attrs:{href:"https://docs.google.com/document/d/1S__G3fasIgUhkeCkbC91TXHmhOF_MgwdKarz80bsvFE/edit?usp=sharing"}},[t._v("Pixel Programming")]),t._v(" from "),n("a",{attrs:{href:"https://www.canadalearningcode.ca"}},[t._v("Canada Learning Code")]),t._v(". It uses a simple domain-specific language (DSL) to demonstrate how simple instructions can be given to a computer.")])])}],!1,null,null,null).exports,at=n("dLPz"),it=n.n(at),ot={data:function(){return{contents:it.a}}},st=Object(c.a)(ot,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content",domProps:{innerHTML:this._s(this.contents)}})},[],!1,null,null,null).exports;a.a.use(u.a);var ct=[{path:"/",component:f,children:[{path:"code",component:nt},{path:"about",component:rt},{path:"ref",component:st},{path:"*",component:nt}]}],lt=new u.a({routes:ct,linkActiveClass:"active"}),ut=n("58oi"),pt=n.n(ut);function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ht={namespaced:!0,state:{all:[]},getters:{allPrograms:function(t){return t.all},maxId:function(t){return t.all.reduce(function(t,e){return Math.max(t,e.id)},0)},lastProgram:function(t){return t.all.reduce(function(t,e){return t.updated>e.updated?t:e},M.a.program)}},actions:{saveProgram:function(t,e){(0,t.commit)("saveProgram",{data:e})},loadProgram:function(t,e){(0,t.commit)("loadProgram",{id:e})}},mutations:{saveProgram:function(t,e){var n=e.data;n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ft(n,!0).forEach(function(t){dt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{updated:Date.now()});var r=t.all.findIndex(function(t){return t.id===n.id});r<0?t.all.push(n):t.all[r]=n},loadProgram:function(t,e){var n=e.id;t.all.find(function(t){return t.id===n}).updated=Date.now()}}},gt={namespaced:!1,state:{__VERSION__:"0.3.1",autoSave:!1,syntaxHighlighting:!0},getters:{autoSave:function(t){return t.autoSave},syntaxHighlighting:function(t){return t.syntaxHighlighting}},actions:{updateAutoSave:function(t,e){(0,t.commit)("updateAutoSave",{value:e})},updateSyntaxHighlighting:function(t,e){(0,t.commit)("updateSyntaxHighlighting",{value:e})}},mutations:{updateAutoSave:function(t,e){var n=e.value;t.autoSave=n},updateSyntaxHighlighting:function(t,e){var n=e.value;t.syntaxHighlighting=n}}},mt="pixel-drawing",vt=JSON.parse(localStorage.getItem(mt));vt&&!{}.hasOwnProperty.call(vt,"programs")&&localStorage.removeItem(mt),a.a.use(g.a);var bt=new pt.a({key:mt,storage:window.localStorage}),yt=new g.a.Store({modules:{global:gt,programs:ht},plugins:[bt.plugin],strict:!1});window.__VERSION__="0.3.1",n("3ERx"),i.b.add(o.a,s.a),i.a.watch(),new a.a({el:"#app",render:function(t){return t(l)},router:lt,store:yt})},WNPU:function(t,e,n){"use strict";var r=n("gtha");n.n(r).a},XFhw:function(t,e){t.exports={BEGIN_LOOP:"[",END_LOOP:"]",END_OF_LINE:";"}},Xyfl:function(t,e,n){t.exports=n.p+"b8a5f049b96f5c65c032828d847fa13e.png"},dLPz:function(t,e,n){t.exports='<h1 id="pixels-syntax">Pixels Syntax</h1>\n<h2 id="expressions">Expressions</h2>\n<p>The simplest <strong>expression</strong> is just a colour code; for example, this program draws a single red pixel in the top left corner:</p>\n<pre><code>r</code></pre><p><img src="'+n("RAzI")+'" alt="r"></p>\n<p>Multiple expressions can be given on a single line. Just put a space between them! This program draws three red pixels:</p>\n<pre><code>r r r</code></pre><p><img src="'+n("Xyfl")+'" alt="r r r"></p>\n<p>We can shorten this program, though, by specifying a number in front of the colour code. This program is equivalent to the one above:</p>\n<pre><code>1r 1r 1r</code></pre><p>The shortened version looks like this:</p>\n<pre><code>3r</code></pre><p>The semicolon (<code>;</code>) can be used to end a line. Any expressions after a semicolon will be drawn on a new line. For example, this program draws a 3x3 red square in the top left corner:</p>\n<pre><code>3r; 3r; 3r;</code></pre><p><img src="'+n("2mmj")+'" alt="3r; 3r; 3r;"></p>\n<p>To make your code easier to read, though, you&#39;ll probably want to format it like this:</p>\n<pre><code>3r;\n3r;\n3r;</code></pre><h2 id="loops">Loops</h2>\n<p>Using numbered expressions is already a kind of loop, but there is syntax for more advanced loops. Take this program, for example:</p>\n<pre><code>2r 2y 2r 2y 2r 2y;</code></pre><p>Here, the program <code>2r 2y</code> is repeated three times. This program does exactly that:</p>\n<pre><code>3[2r 2y];</code></pre><p>The resulting picture looks like this:</p>\n<p><img src="'+n("7mSr")+'" alt="3[3r 3y]"></p>\n<p>Looping can be done over multi-line programs as well. For example, this program is really expressing a multi-line loop:</p>\n<pre><code>r y;\nr y;\nr y;</code></pre><p><img src="'+n("OjRc")+'" alt="3[r y;]"></p>\n<p>Using the looping syntax, it can be rewritten like this:</p>\n<pre><code>3[r y;]</code></pre>'},gtha:function(t,e,n){},jQHa:function(t,e,n){"use strict";var r=n("2pTP");n.n(r).a},k52t:function(t,e,n){},t1HX:function(t,e,n){"use strict";var r=n("VQ0Q");n.n(r).a}},[["Vtdi",0,5,17,4,6,7,8,10,11,13,14,12,16,15]]]); 