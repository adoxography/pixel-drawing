// [AIV_SHORT]  Build version: 0.4.0 - Friday, November 1st, 2019, 10:01:55 AM  
 (window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1tTY":function(t,e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var i=function(){function e(t){r(this,e),this.commands=t||[]}return o(e,[{key:"add",value:function(t){this.commands.push(t)}},{key:"toArray",value:function(){return this.commands.reduce(function(t,e){return t.concat(e.toArray())},[])}},{key:"length",get:function(){return this.commands.length}}]),e}(),n=function(){function n(t,e){r(this,n),this.number=t,this.clr=e}return o(n,[{key:"toArray",value:function(){return Array(this.number).fill(this.clr)}}]),n}(),s=function(){function n(t,e){r(this,n),this.number=t||1,this.program=new i(e||[])}return o(n,[{key:"add",value:function(t){this.program.add(t)}},{key:"toArray",value:function(){return Array(this.number).fill(this.program.toArray()).flat()}}]),n}(),c=function(){function t(){r(this,t)}return o(t,[{key:"toArray",value:function(){return[null]}}]),t}();t.exports={Loop:s,Newline:c,Pixel:n,Sequence:i}},"231I":function(t,e,n){"use strict";var r={b:[0,0,255],r:[255,0,0],g:[0,255,0],gr:[80,80,80],y:[255,255,0],pu:[255,0,255],o:[255,125,0],c:[0,255,255],w:[255,255,255],k:[0,0,0],br:[125,80,0],pi:[255,80,125]},a={size:20,frameRate:16,clrs:r},o={id:null,updated:0,name:"Jump Man",text:"10[c g];\n10[g c];\n3[c g]     6r                    4[c g];\n2[g c] g   10r                   c 2[g c];\n2[c g] c   3br 3y k y            g 3[c g];\n2[g c]     br y br 4y k 3y       c 2[g c];\n2[c g]     br y 2br 4y k 3y      2[c g];\n2[g c]     2br 5y 4k             c 2[g c];\n3[c g]     8y                    3[c g];\n2[g c] g   2r b 2r b r           4[g c];\n2[c g]     3r b 2r b 3r          3[c g];\ng c g      4r 4b 4r              c 2[g c];\nc g c      2y r b o 2b o b r 2y  g 2[c g];\ng c g      3y 6b 3y              c 2[g c];\nc g c      2y 8b 2y              g 2[c g];\n2[g c] g   3b g c 3b             c 3[g c];\n2[c g]     3k 2[g c] 3k          3[c g];\ng c g      4k 2[c g] 4k          c 2[g c];\n2[5[2gr 2br];]",settings:a};t.exports={program:o,settings:a,clrs:r}},"28Ky":function(t,e,n){"use strict";var r=n("k52t");n.n(r).a},"2mmj":function(t,e,n){t.exports=n.p+"374a4767bd27018051743808685703e0.png"},"2pTP":function(t,e,n){},"3ERx":function(t,e,n){},"4OvJ":function(t,e){var a=function(r){return new Promise(function(n,t){var e=new FileReader;e.onload=function(t){var e={name:r.name,body:t.target.result};n(e)},e.readAsText(r)})};t.exports={array_last:function(t){return t[t.length-1]},debounce:function(n,r){var a;return function(){var t=this,e=arguments;clearTimeout(a),a=setTimeout(function(){return n.apply(t,e)},r)}},escape:function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},pushDownload:function(t,e){var n=new Blob([e],{type:"text/plain"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,t);else{var r=document.createElement("a");r.href=window.URL.createObjectURL(n),r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r)}},openFile:function(t){var e=t.accept,r=document.createElement("input");return r.type="file",r.accept=e,new Promise(function(n,t){r.onchange=function(t){var e=t.target.files[0];return a(e).then(n)},document.body.appendChild(r),r.click(),document.body.removeChild(r)})}}},"7mSr":function(t,e,n){t.exports=n.p+"f22d55e4b17a66c5f9f5a54fe433d820.png"},IYIw:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return o(t,arguments,s(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)})(t)}function o(t,e,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&i(a,n.prototype),a}).apply(null,arguments)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,s(t).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(t,a(Error)),t}();t.exports={ParseError:c}},OjRc:function(t,e,n){t.exports=n.p+"89476c2c88b04ecc6b4e16a6b3c5cc18.png"},RAzI:function(t,e,n){t.exports=n.p+"d57173091775549f817462c19c9e3eb0.png"},UGaS:function(t,e){function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function P(t){var e=t.match(/^[!@$]([a-zA-Z_]+):\s*(.+)$/);return{key:e[1],value:e[2]}}var s=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;o(this,e),t=t||{},this.id=t.id||null,this.name=t.name||"Untitled",this.updated=t.updated||null,this.text=t.text||"";this.settings=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{frameRate:16,size:20,clrs:{}},{},t.settings)}return n(e,null,[{key:"parse",value:function(t){return new e(function(t){var e,n,r,a,o,i,s,c,l,u,p,f,d,h={settings:{clrs:{}}},g={__VERSION__:window.__VERSION__},m=[],v=!1,b=!0,y=!1,w=void 0;try{for(var O,x=t.split("\n")[Symbol.iterator]();!(b=(O=x.next()).done);b=!0){var _=O.value;if("==="===_)v=!v;else if(v)m.push(_);else if(_)switch(_[0]){case"!":u=g,void 0,p=P(_),f=p.key,d=p.value,u["__".concat(f,"__")]=d;break;case"@":i=h.settings,void 0,s=P(_),c=s.key,l=s.value,i[c]=JSON.parse(l);break;case"$":e=h.settings.clrs,a=void 0,n=P(_),r=n.key,a=n.value,o=a.match(/^(\d+),\s*(\d+),\s*(\d+)$/),e[r]=[parseInt(o[1]),parseInt(o[2]),parseInt(o[3])]}}}catch(t){y=!0,w=t}finally{try{b||null==x.return||x.return()}finally{if(y)throw w}}return h.text=m.join("\n"),h}(t))}}]),n(e,[{key:"clone",value:function(){return JSON.parse(JSON.stringify(this))}},{key:"toString",value:function(){for(var t=["!VERSION: ".concat(window.__VERSION__),""],e=0,n=Object.entries(this.settings);e<n.length;e++){var r=p(n[e],2),a=r[0],o=r[1];"clrs"!==a&&{}.hasOwnProperty.call(this.settings,a)&&t.push("@".concat(a,": ").concat(o))}t.push("");for(var i=0,s=Object.entries(this.clrs);i<s.length;i++){var c=p(s[i],2),l=c[0],u=c[1];!{}.hasOwnProperty.call(this.clrs,l)||t.push("$".concat(l,": ").concat(u.toString()))}return t.push(""),t.push("==="),t.push(this.text),t.push("==="),t.join("\n")}},{key:"clrs",get:function(){return this.settings.clrs}}]),e}(),c=function(){function r(t,e,n){o(this,r),this.r=t,this.g=e,this.b=n}return n(r,[{key:"toArray",value:function(){return[this.r,this.g,this.b]}},{key:"toString",value:function(){return this.toArray().join("\n")}}]),r}();t.exports={Clr:c,Program:s}},VQ0Q:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);var r=n("XfhM"),a=n.n(r),o=n("7O5W"),i=n("muhD"),s=n("a0qU"),c=n("W21E"),l=n("fCwp"),u=n("DuTs"),p=n("Qjxm"),f=n("IAcK"),d=n("KHd+"),h=Object(d.a)({},function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,null,null,null).exports,g=n("jE9Z"),m={computed:{path:function(){return this.$route.path},isCodeRoute:function(){return"/"===this.path||"/code"===this.path},isAboutRoute:function(){return"/about"===this.path},isReferenceRoute:function(){return"/ref"===this.path}}},v=(n("28Ky"),Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-component"},[n("div",{staticClass:"tabs is-boxed"},[n("ul",[n("li",{class:{"is-active":t.isCodeRoute}},[n("router-link",{attrs:{to:"code"}},[t._v("\n          Code\n        ")])],1),t._v(" "),n("li",{class:{"is-active":t.isAboutRoute}},[n("router-link",{attrs:{to:"about"}},[t._v("\n          About\n        ")])],1),t._v(" "),n("li",{class:{"is-active":t.isReferenceRoute}},[n("router-link",{attrs:{to:"ref"}},[t._v("\n          Reference\n        ")])],1)])]),t._v(" "),n("div",{staticClass:"box"},[n("router-view")],1)])},[],!1,null,null,null).exports),b={props:{clrs:{type:Object,default:function(){}}}},y=(n("jQHa"),Object(d.a)(b,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"clr-table"},n._l(n.clrs,function(t,e){return r("span",{key:e,style:{border:"10px solid rgb("+t.join(",")+")"}},[n._v("\n    "+n._s(e)+"\n  ")])}),0)},[],!1,null,null,null).exports),w=n("L2JU");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P={components:{"pixel-clr-table":y},props:{value:{type:Object,default:function(){return{size:0,clrs:{},frameRate:0}}}},computed:x({},Object(w.c)(["syntaxHighlighting"])),methods:x({},Object(w.b)(["updateSyntaxHighlighting"]),{updateSize:function(t){var e=JSON.parse(JSON.stringify(this.value));e.size=t,this.$emit("input",e)},updateFrameRate:function(t){var e=JSON.parse(JSON.stringify(this.value));e.frameRate=parseInt(t),this.$emit("input",e)}})},S=Object(d.a)(P,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"clr-table"}},[e._v("\n        Available colours\n      ")]),e._v(" "),n("pixel-clr-table",{attrs:{id:"clr-table",clrs:e.value.clrs}})],1)]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"size-input"}},[e._v("\n        Number of pixels\n      ")]),e._v(" "),n("input",{staticClass:"input",attrs:{id:"size-input",type:"number"},domProps:{value:e.value.size},on:{input:function(t){return e.updateSize(t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"frame-rate-input"}},[e._v("\n        Frame Rate\n      ")]),e._v(" "),n("input",{staticClass:"slider",attrs:{id:"frame-rate-input",type:"range",step:"1",min:"1",max:"60"},domProps:{value:e.value.frameRate},on:{input:function(t){return e.updateFrameRate(t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.syntaxHighlighting},on:{input:function(t){return e.updateSyntaxHighlighting(t.target.checked)}}}),e._v("\n        Syntax Highlighting On\n      ")])])])])},[],!1,null,null,null).exports,j={props:{width:{type:Number,default:400},height:{type:Number,default:400}},created:function(){console.log("loaded!")},mounted:function(){var e=this;n.e(7).then(n.t.bind(null,"I335",7)).then(function(t){e.p5=new t(e.initP5,"p5-sketch")})},methods:{initP5:function(t){t.setup=this.setup(t),t.draw=this.draw(t)}}};function k(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C={extends:Object(d.a)(j,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"p5-sketch",attrs:{id:"p5-sketch"}})},[],!1,null,null,null).exports,data:function(){return{p5:null,row:0,col:0,programIndex:0,pixelSize:0,pixels:[],size:0,frameRate:16}},created:function(){this.pixelSize=this.width/this.size},methods:{setup:function(t){var e=this;return function(){t.createCanvas(e.width,e.height),t.stroke(200)}},draw:function(t){var e=this;return function(){t.frameRate(e.frameRate),e.drawNextPixel(t)}},render:function(t,e,n){this.size=e,this.pixels=t,this.pixelSize=this.width/e,this.programIndex=0,this.firstPixel=!0,this.row=0,this.col=0,this.frameRate=n,this.$forceUpdate()},clearScreen:function(t){t.background(255);for(var e=0;e<=this.size;e++)t.line(0,e*this.pixelSize,this.width,e*this.pixelSize),t.line(e*this.pixelSize,0,e*this.pixelSize,this.height)},drawNextPixel:function(t){var e;for(this.firstPixel&&(this.clearScreen(t),this.firstPixel=!1);this.pixels.length&&!(e=this.pixels.shift());)this.row++,this.col=0;(e||this.pixels.length)&&(t.fill(t.color.apply(t,k(e))),t.rect(this.col*this.pixelSize,this.row*this.pixelSize,this.pixelSize,this.pixelSize),this.col++,this.programIndex++)}}},E=Object(d.a)(C,void 0,void 0,!1,null,null,null).exports,R=function t(e,n){var r=0,a=!0,o=!1,i=void 0;try{for(var s,c=e.childNodes[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value,u=l.length||l.innerText.length;if(n<=r+u)return l.nodeType!==Node.TEXT_NODE?t(l,n-r):I(l,n-r);r+=u}}catch(t){o=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(o)throw i}}},I=function(t,e){var n=document.createRange();return n.setStart(t,e),n.collapse(!0),n},A={props:{value:{type:String,default:""}},methods:{handleInput:function(t){var e=this,n=this.getCaretPosition();this.$emit("input",t.target.innerHTML),this.$nextTick(function(){return e.setCaret(n)})},getCaretPosition:function(){return function(t){var e=document.getSelection().getRangeAt(0),n=e.cloneRange();return n.selectNodeContents(t),n.setEnd(e.endContainer,e.endOffset),n.toString().length}(this.$el)},setCaret:function(t){!function(t,e){var n=document.getSelection(),r=R(t,e);n.removeAllRanges(),n.addRange(r)}(this.$el,t)}}},D=Object(d.a)(A,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"program-input textarea",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.value)},on:{input:t.handleInput}})},[],!1,null,null,null).exports;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T={components:{"pixel-editable":D},props:{value:{type:String,default:""},clrs:{type:Object,default:function(){return{}}}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){$(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(w.c)(["syntaxHighlighting"]),{formattedValue:function(){var r=this;return this.value.replace(/\d*([a-z]+)/g,function(t,e){if(!{}.hasOwnProperty.call(r.clrs,e))return t.replace(/.{1,5}/g,'<span class="err">$&</span>');if(r.syntaxHighlighting){var n=r.clrs[e];return'<span style="color: '.concat(function(t){return"rgb(".concat(t.map(function(t){return.75*t}).join(","),")")}(n),';">').concat(t,"</span>")}return t})}}),methods:{handleInput:function(t){var e=t.replace(/<.+?>/g,"");this.$emit("input",e)}}},z=(n("WNPU"),Object(d.a)(T,function(){var t=this.$createElement;return(this._self._c||t)("pixel-editable",{attrs:{value:this.formattedValue},on:{input:this.handleInput}})},[],!1,null,null,null).exports),L={props:{title:{type:String,default:""}},methods:{close:function(){this.$emit("close")}}},H={components:{Modal:Object(d.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background",on:{click:t.close}}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.close}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t._t("default")],2),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t._t("footer",[n("button",{staticClass:"button is-danger",on:{click:t.close}},[t._v("\n          Cancel\n        ")])])],2)])])},[],!1,null,null,null).exports},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{selection:""}},methods:{load:function(){this.$emit("input",this.selection)},close:function(){this.$emit("close")}}},U=Object(d.a)(H,function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("Modal",{ref:"modal",attrs:{title:"Choose a file"},on:{close:r.close},scopedSlots:r._u([{key:"footer",fn:function(){return[a("button",{staticClass:"button is-success",on:{click:r.load}},[r._v("\n      Load\n    ")])]},proxy:!0}])},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:r.selection,expression:"selection"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});r.selection=t.target.multiple?e:e[0]}}},r._l(r.options,function(t){var e=t.id,n=t.name;return a("option",{key:e,domProps:{value:e}},[r._v("\n        "+r._s(n)+"\n      ")])}),0)])])},[],!1,null,null,null).exports,F={props:{buttons:{type:Array,default:function(){return[]}}},methods:{handleClick:function(t){t.call()}}},M=(n("t1HX"),Object(d.a)(F,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"field toolbar is-pulled-right"},n._l(n.buttons,function(e,t){return r("a",{key:t,staticClass:"button icon is-medium",attrs:{title:e.title,disabled:!!e.disabled&&e.disabled()},on:{click:function(t){return n.handleClick(e.action)}}},[r("i",{staticClass:"fas",class:"fa-"+e.icon})])}),0)},[],!1,null,null,null).exports),V=n("231I"),J=n.n(V),X=n("4OvJ"),B=n("UGaS"),Q=n("XFhw"),G=n("1tTY"),q=n.n(G),K=n("IYIw");function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Y=function(){function n(t,e){if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),!(t instanceof RegExp))throw new TypeError("First argument to `Rule` must be RegExp");this._pattern=t,this.pattern=new RegExp("^".concat(t.source,"$")),this.action=e}return function(t,e,n){e&&W(t.prototype,e),n&&W(t,n)}(n,[{key:"appliesTo",value:function(t){return this.pattern.test(t)}},{key:"match",value:function(t){return t.match(this.pattern)}},{key:"apply",value:function(t){this.action(t)}}],[{key:"merge",value:function(t,e){var n=t.map(function(t){return t._pattern.source});return new RegExp(n.join("|"),e)}}]),n}(),Z=[new Y(/(\d*)([a-z]+)/,function(t){var e=t.stack,n=t.matchData,r=parseInt(n[1]||1),a=n[2];Object(X.array_last)(e).add(new q.a.Pixel(r,a))}),new Y(new RegExp("(\\d*)".concat(Object(X.escape)(Q.BEGIN_LOOP))),function(t){var e=t.stack,n=t.matchData,r=parseInt(n[1]||1),a=new q.a.Loop(r);Object(X.array_last)(e).add(a),e.push(a)}),new Y(new RegExp(Object(X.escape)(Q.END_LOOP)),function(t){var e=t.stack;if(!(Object(X.array_last)(e)instanceof q.a.Loop))throw new K.ParseError('Unexpected "]"');e.pop()}),new Y(new RegExp(Object(X.escape)(Q.END_OF_LINE)),function(t){var e=t.stack;Object(X.array_last)(e).add(new q.a.Newline)}),new Y(/\S+/,function(t){var e=t.token;throw new K.ParseError("Unexpected token '".concat(e,"'"))})],tt=Y.merge(Z,"g"),et=function(t){return function(t){var r=[new G.Sequence];if(t.forEach(function(e){var t=Z.find(function(t){return t.appliesTo(e)});if(!t)throw new K.ParseError("Unknown token ".concat(e));var n=t.match(e);t.apply({stack:r,token:e,matchData:n})}),1<r.length)throw new K.ParseError("Unmatched '".concat(Q.BEGIN_LOOP,"'"));return r[0]}(function(t){return Array.from(t.matchAll(tt)).map(function(t){return t[0]})}(t))};function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nt(n,!0).forEach(function(t){at(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ot={components:{"pixel-side-panel":S,"pixel-sketch":E,"pixel-editor":z,"pixel-file-select":U,"pixel-toolbar":M},data:function(){var t=this;return{panelShown:!0,showFileSelect:!1,errorMessage:null,dirty:!1,program:null,toolbarButtons:[{icon:"plus",title:"New",action:this.createNew},{icon:"save",title:"Save",action:this.save,disabled:function(){return!t.dirty}},{icon:"folder-open",title:"Load",action:this.handleOpenClicked,disabled:function(){return 0===t.allPrograms.length}},{icon:"copy",title:"Duplicate",action:this.duplicate,disabled:function(){return null===t.program.id}},{icon:"download",title:"Download",action:this.handleDownload},{icon:"upload",title:"Upload",action:function(){return t.handleUpload()}}]}},computed:rt({},Object(w.c)("programs",["allPrograms","maxId","lastProgram"]),{},Object(w.c)(["autoSave"])),created:function(){this.program=new B.Program(this.lastProgram),this.dirty=!1},mounted:function(){this.render()},methods:rt({},Object(w.b)("programs",["saveProgram","tapProgram","updateAutoSave"]),{},Object(w.b)(["updateAutoSave"]),{render:function(){var t=this.parse(this.program.text);t&&this.$refs.sketch.render(t,this.program.settings.size,this.program.settings.frameRate)},handleInput:function(){this.errorMessage=null,this.validate(this.program.text),this.handleChange()},handlePanelInput:function(){this.handleChange()},handleChange:function(){this.dirty=!0,this.autoSave&&this.save()},handleDownload:function(){var t=this.program.name+".pxl",e=this.program.toString();Object(X.pushDownload)(t,e)},handleUpload:function(){var n=this;Object(X.openFile)({accept:".pxl"}).then(function(t){if(!n.dirty||confirm("Unsaved changes. Continue?")){var e=B.Program.parse(t.body);e.name=t.name.match(/^(.*)\..*$/)[1],n.program=e}})},validate:Object(X.debounce)(function(t){console.log("validating");try{var e=et(t).toArray(),n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var s=o.value;if(s&&!{}.hasOwnProperty.call(this.program.settings.clrs,s)){this.errorMessage="Unknown colour '".concat(s,"'");break}}}catch(t){r=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}catch(t){this.errorMessage=t.message}},500),parse:function(t){var e=this;console.log(t);var n=et(t).toArray();return n.some(function(t){return t&&!{}.hasOwnProperty.call(e.program.settings.clrs,t)})?null:n.map(function(t){return e.program.settings.clrs[t]})},createNew:function(){this.dirty&&!confirm("Unsaved changes. Continue?")||(this.program=new B.Program)},duplicate:function(){if(!this.dirty||confirm("Unsaved changes. Continue?")){var t=this.program.clone();t.id=null,t.name+=" (2)",this.program=t}},save:function(){this.program.id||(this.program.id=this.maxId+1),this.saveProgram(this.program),this.dirty=!1},handleOpenClicked:function(){this.showFileSelect=!0},handleLoadProgram:function(e){this.showFileSelect=!1,this.tapProgram(e);var t=this.allPrograms.find(function(t){return t.id===e});this.program=new B.Program(t)}})},it=Object(d.a)(ot,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-narrow"},[n("div",{staticStyle:{"min-width":"1em"}},[n("a",{staticClass:"icon can-rotate",class:{rotated:!e.panelShown},attrs:{title:e.panelShown?"Hide Panel":"Show Panel"},on:{click:function(t){e.panelShown=!e.panelShown}}},[n("i",{staticClass:"fas fa-chevron-right"})]),e._v(" "),n("transition",{attrs:{name:"slide-fade"}},[e.panelShown?n("div",[n("pixel-side-panel",{on:{input:e.handlePanelInput},model:{value:e.program.settings,callback:function(t){e.$set(e.program,"settings",t)},expression:"program.settings"}})],1):e._e()])],1)]),e._v(" "),n("div",{staticClass:"column program-container"},[n("pixel-toolbar",{attrs:{buttons:e.toolbarButtons}}),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.program.name,expression:"program.name"}],staticClass:"input",domProps:{value:e.program.name},on:{input:function(t){t.target.composing||e.$set(e.program,"name",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("pixel-editor",{attrs:{clrs:e.program.settings.clrs},on:{input:e.handleInput},model:{value:e.program.text,callback:function(t){e.$set(e.program,"text",t)},expression:"program.text"}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"has-text-danger"},[e._v("\n            Error: "+e._s(e.errorMessage)+"\n          ")]),e._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.autoSave},on:{input:function(t){return e.updateAutoSave(t.target.checked)}}}),e._v("\n                Auto Save\n              ")])])])],1)],1)])]),e._v(" "),n("div",{staticClass:"column is-narrow"},[n("div",{staticClass:"field"},[n("button",{staticClass:"draw-button button is-success",attrs:{disabled:e.errorMessage},on:{click:e.render}},[e._v("\n        Draw!\n      ")])]),e._v(" "),n("pixel-sketch",{ref:"sketch"})],1),e._v(" "),n("pixel-file-select",{directives:[{name:"show",rawName:"v-show",value:e.showFileSelect,expression:"showFileSelect"}],attrs:{options:e.allPrograms.map(function(t){return{id:t.id,name:t.name}})},on:{close:function(t){e.showFileSelect=!1},input:function(t){return e.handleLoadProgram(t)}}})],1)},[],!1,null,null,null).exports,st=Object(d.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("This program is based on an unplugged activity called "),n("a",{attrs:{href:"https://docs.google.com/document/d/1S__G3fasIgUhkeCkbC91TXHmhOF_MgwdKarz80bsvFE/edit?usp=sharing"}},[t._v("Pixel Programming")]),t._v(" from "),n("a",{attrs:{href:"https://www.canadalearningcode.ca"}},[t._v("Canada Learning Code")]),t._v(". It uses a simple domain-specific language (DSL) to demonstrate how simple instructions can be given to a computer.")])])}],!1,null,null,null).exports,ct=n("dLPz"),lt=n.n(ct),ut={data:function(){return{contents:lt.a}}},pt=Object(d.a)(ut,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content",domProps:{innerHTML:this._s(this.contents)}})},[],!1,null,null,null).exports;a.a.use(g.a);var ft=[{path:"/",component:v,children:[{path:"code",component:it},{path:"about",component:st},{path:"ref",component:pt},{path:"*",component:it}]}],dt=new g.a({routes:ft,linkActiveClass:"active"}),ht=n("58oi"),gt=n.n(ht);function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var bt={namespaced:!0,state:{all:[]},getters:{allPrograms:function(t){return t.all},maxId:function(t){return t.all.reduce(function(t,e){return Math.max(t,e.id)},0)},lastProgram:function(t){return t.all.reduce(function(t,e){return t.updated>e.updated?t:e},J.a.program)}},actions:{saveProgram:function(t,e){(0,t.commit)("saveProgram",{data:e})},tapProgram:function(t,e){(0,t.commit)("tapProgram",{id:e})}},mutations:{saveProgram:function(t,e){var n=e.data;n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(n,!0).forEach(function(t){vt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{updated:Date.now()});var r=t.all.findIndex(function(t){return t.id===n.id});r<0?t.all.push(n):t.all[r]=n},tapProgram:function(t,e){var n=e.id;t.all.find(function(t){return t.id===n}).updated=Date.now()}}},yt={namespaced:!1,state:{__VERSION__:"0.4.0",autoSave:!1,syntaxHighlighting:!0},getters:{autoSave:function(t){return t.autoSave},syntaxHighlighting:function(t){return t.syntaxHighlighting}},actions:{updateAutoSave:function(t,e){(0,t.commit)("updateAutoSave",{value:e})},updateSyntaxHighlighting:function(t,e){(0,t.commit)("updateSyntaxHighlighting",{value:e})}},mutations:{updateAutoSave:function(t,e){var n=e.value;t.autoSave=n},updateSyntaxHighlighting:function(t,e){var n=e.value;t.syntaxHighlighting=n}}},wt="pixel-drawing",Ot=JSON.parse(localStorage.getItem(wt));Ot&&!{}.hasOwnProperty.call(Ot,"programs")&&localStorage.removeItem(wt),a.a.use(w.a);var xt=new gt.a({key:wt,storage:window.localStorage}),_t=new w.a.Store({modules:{global:yt,programs:bt},plugins:[xt.plugin],strict:!1});window.__VERSION__="0.4.0",n("3ERx"),o.b.add(i.faChevronRight,s.faCopy,c.faDownload,l.faFolderOpen,u.faPlus,p.faSave,f.faUpload),o.a.watch(),new a.a({el:"#app",render:function(t){return t(h)},router:dt,store:_t})},WNPU:function(t,e,n){"use strict";var r=n("gtha");n.n(r).a},XFhw:function(t,e){t.exports={BEGIN_LOOP:"[",END_LOOP:"]",END_OF_LINE:";"}},Xyfl:function(t,e,n){t.exports=n.p+"b8a5f049b96f5c65c032828d847fa13e.png"},dLPz:function(t,e,n){t.exports='<h1 id="pixels-syntax">Pixels Syntax</h1>\n<h2 id="expressions">Expressions</h2>\n<p>The simplest <strong>expression</strong> is just a colour code; for example, this program draws a single red pixel in the top left corner:</p>\n<pre><code>r</code></pre><p><img src="'+n("RAzI")+'" alt="r"></p>\n<p>Multiple expressions can be given on a single line. Just put a space between them! This program draws three red pixels:</p>\n<pre><code>r r r</code></pre><p><img src="'+n("Xyfl")+'" alt="r r r"></p>\n<p>We can shorten this program, though, by specifying a number in front of the colour code. This program is equivalent to the one above:</p>\n<pre><code>1r 1r 1r</code></pre><p>The shortened version looks like this:</p>\n<pre><code>3r</code></pre><p>The semicolon (<code>;</code>) can be used to end a line. Any expressions after a semicolon will be drawn on a new line. For example, this program draws a 3x3 red square in the top left corner:</p>\n<pre><code>3r; 3r; 3r;</code></pre><p><img src="'+n("2mmj")+'" alt="3r; 3r; 3r;"></p>\n<p>To make your code easier to read, though, you&#39;ll probably want to format it like this:</p>\n<pre><code>3r;\n3r;\n3r;</code></pre><h2 id="loops">Loops</h2>\n<p>Using numbered expressions is already a kind of loop, but there is syntax for more advanced loops. Take this program, for example:</p>\n<pre><code>2r 2y 2r 2y 2r 2y;</code></pre><p>Here, the program <code>2r 2y</code> is repeated three times. This program does exactly that:</p>\n<pre><code>3[2r 2y];</code></pre><p>The resulting picture looks like this:</p>\n<p><img src="'+n("7mSr")+'" alt="3[3r 3y]"></p>\n<p>Looping can be done over multi-line programs as well. For example, this program is really expressing a multi-line loop:</p>\n<pre><code>r y;\nr y;\nr y;</code></pre><p><img src="'+n("OjRc")+'" alt="3[r y;]"></p>\n<p>Using the looping syntax, it can be rewritten like this:</p>\n<pre><code>3[r y;]</code></pre>'},gtha:function(t,e,n){},jQHa:function(t,e,n){"use strict";var r=n("2pTP");n.n(r).a},k52t:function(t,e,n){},t1HX:function(t,e,n){"use strict";var r=n("VQ0Q");n.n(r).a}},[["Vtdi",0,5,17,4,6,8,10,11,13,14,12,16,15]]]); 