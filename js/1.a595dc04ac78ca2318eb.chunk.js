(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2mmj":function(e,t,n){e.exports=n.p+"374a4767bd27018051743808685703e0.png"},"3ERx":function(e,t,n){},"4OvJ":function(e,t){e.exports={debounce:function(n,r){var i;return function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){return n.apply(e,t)},r)}}}},"5zL7":function(e,t,n){"use strict";var r=n("BkeR"),i=n.n(r);t.default=i.a},"7mSr":function(e,t,n){e.exports=n.p+"f22d55e4b17a66c5f9f5a54fe433d820.png"},B5RE:function(e,t,n){"use strict";function i(e){return"".concat(a).concat(e)}function r(e){var t=new RegExp("^".concat(e,"(.*)$"));return Object.keys(localStorage).filter(function(e){return e.match(t)}).map(function(e){return e.match(t)[1]})}var a="pixel-file-",o=function(e){return null!==localStorage.getItem(i(e))};e.exports={PROGRAM_PFX:a,generateKey:i,generateName:function(e){if(!o(e))return e;var t=e.match(/^(.*)-(\d+)$/);return t?"".concat(t[1],"-").concat(parseInt(t[2])+1):"".concat(e,"-1")},allKeys:r,allPrograms:function(){return r(a)},getProgram:function(e){return JSON.parse(localStorage.getItem(i(e)))},programExists:o,renameProgram:function(e,t){var n=i(e),r=i(t);localStorage.setItem(r,localStorage.getItem(n)),localStorage.removeItem(n)},saveProgram:function(e,t){return localStorage.setItem(e,JSON.stringify(t))}}},BkeR:function(e,t){},OjRc:function(e,t,n){e.exports=n.p+"89476c2c88b04ecc6b4e16a6b3c5cc18.png"},RAzI:function(e,t,n){e.exports=n.p+"d57173091775549f817462c19c9e3eb0.png"},T4Yo:function(e,t,n){"use strict";function r(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tabs"},[n("ul",[n("li",[n("router-link",{attrs:{to:"code"}},[e._v("\n          Code\n        ")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"about"}},[e._v("\n          About\n        ")])],1),n("li",[n("router-link",{attrs:{to:"ref"}},[e._v("\n          Reference\n        ")])],1)])]),e._v(" "),n("router-view")],1)}var i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},V9rE:function(e,t,n){"use strict";var r=n("T4Yo"),i=n("5zL7"),a=n("KHd+"),o=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);t.default=o.exports},Vtdi:function(e,t,n){"use strict";n.r(t);var r=n("XfhM"),i=n.n(r),a=n("jE9Z"),o=n("7O5W"),s=n("wHSu"),l=n("8tEE"),c=n("KHd+"),u=Object(c.a)({},function(){var e=this.$createElement;return(this._self._c||e)("router-view")},[],!1,null,null,null).exports,p=n("V9rE"),d={props:{clrs:{type:Object,default:function(){}}}},h={components:{"pixel-clr-table":Object(c.a)(d,function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("table",{staticClass:"pixel-clr-table table is-bordered"},[n._m(0),n._v(" "),r("tbody",n._l(n.clrs,function(e,t){return r("tr",{key:t},[r("td",[n._v(n._s(e.name))]),n._v(" "),r("td",[n._v(n._s(t))]),n._v(" "),r("td",{style:{"background-color":"rgb("+e.rgb.join(",")+")"}})])}),0)])},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("td",[e._v("Colour")]),e._v(" "),n("td",[e._v("Code")]),e._v(" "),n("td",[e._v("Preview")])])])}],!1,null,null,null).exports},props:{value:{type:Object,default:function(){return{size:20,clrs:{}}}}},methods:{handleSizeInput:function(e){var t=JSON.parse(JSON.stringify(this.value));t.size=e,this.$emit("input",t)}}},f=Object(c.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pixel-clr-table",{attrs:{clrs:t.value.clrs}}),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"size-input"}},[t._v("\n        Number of pixels\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value.size,expression:"value.size"}],staticClass:"input",attrs:{id:"size-input",type:"number"},domProps:{value:t.value.size},on:{input:[function(e){e.target.composing||t.$set(t.value,"size",e.target.value)},function(e){return t.handleSizeInput(e.target.value)}]}})])],1)},[],!1,null,null,null).exports,m=n("I335"),g=n.n(m),v={props:{width:{type:Number,default:400},height:{type:Number,default:400}},created:function(){console.log("loaded!")},mounted:function(){this.p5=new g.a(this.initP5,"p5-sketch")},methods:{initP5:function(e){e.setup=this.setup(e),e.draw=this.draw(e)}}};function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x={extends:Object(c.a)(v,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"p5-sketch",attrs:{id:"p5-sketch"}})},[],!1,null,null,null).exports,data:function(){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({p5:null,row:0,col:0,programIndex:0,pixelSize:0,pixels:[],size:0},"pixelSize",0)},created:function(){this.pixelSize=this.width/this.size},methods:{setup:function(e){var t=this;return function(){e.createCanvas(t.width,t.height),e.stroke(200),e.frameRate(16)}},draw:function(e){var t=this;return function(){return t.drawNextPixel(e)}},render:function(e,t){this.size=t,this.pixels=e,this.pixelSize=this.width/t,this.programIndex=0,this.firstPixel=!0,this.row=0,this.col=0,this.$forceUpdate()},clearScreen:function(e){e.background(255);for(var t=0;t<=this.size;t++)e.line(0,t*this.pixelSize,this.width,t*this.pixelSize),e.line(t*this.pixelSize,0,t*this.pixelSize,this.height)},drawNextPixel:function(e){var t;for(this.firstPixel&&(this.clearScreen(e),this.firstPixel=!1);this.pixels.length&&!(t=this.pixels.shift());)this.row++,this.col=0;(t||this.pixels.length)&&(e.fill(e.color.apply(e,b(t))),e.rect(this.col*this.pixelSize,this.row*this.pixelSize,this.pixelSize,this.pixelSize),this.col++,this.programIndex++)}}},y=Object(c.a)(x,void 0,void 0,!1,null,null,null).exports,w={props:{value:{type:String,default:""}},methods:{handleInput:function(e){this.$emit("input",e.target.innerText)}}},_=Object(c.a)(w,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"program-input textarea",attrs:{contenteditable:"true"},domProps:{textContent:e._s(e.value)},on:{blur:e.handleInput}})},[],!1,null,null,null).exports,S={props:{title:{type:String,default:""}},methods:{close:function(){this.$emit("close")}}},k={components:{Modal:Object(c.a)(S,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background",on:{click:e.close}}),e._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:e.close}})]),e._v(" "),n("section",{staticClass:"modal-card-body"},[e._t("default")],2),e._v(" "),n("footer",{staticClass:"modal-card-foot"},[e._t("footer",[n("button",{staticClass:"button is-danger",on:{click:e.close}},[e._v("\n          Cancel\n        ")])])],2)])])},[],!1,null,null,null).exports},props:{options:{type:Array,default:function(){return[]}}},data:function(){return{selection:""}},methods:{load:function(){this.$emit("input",this.selection)},close:function(){this.$emit("close")}}},C=Object(c.a)(k,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Modal",{ref:"modal",attrs:{title:"Choose a file"},on:{close:n.close},scopedSlots:n._u([{key:"footer",fn:function(){return[t("button",{staticClass:"button is-success",on:{click:n.load}},[n._v("\n      Load\n    ")])]},proxy:!0}])},[t("select",{directives:[{name:"model",rawName:"v-model",value:n.selection,expression:"selection"}],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});n.selection=e.target.multiple?t:t[0]}}},n._l(n.options,function(e){return t("option",{key:e},[n._v("\n      "+n._s(e)+"\n    ")])}),0)])},[],!1,null,null,null).exports,E={props:{buttons:{type:Array,default:function(){return[]}}},methods:{handleClick:function(e){e.call()}}},O=Object(c.a)(E,function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"field"},[r("span",{staticClass:"control"},n._l(n.buttons,function(t){return r("a",{staticClass:"button icon",on:{click:function(e){return n.handleClick(t.action)}}},[r("i",{staticClass:"fas",class:"fa-"+t.icon})])}),0)])},[],!1,null,null,null).exports,P=n("4OvJ"),j=n("B5RE"),A=n("dait"),T=n.n(A),z={components:{"pixel-side-panel":f,"pixel-sketch":y,"pixel-editor":_,"pixel-file-select":C,"pixel-toolbar":O},data:function(){return{panelShown:!0,name:"Jump Man",program:"",savedFiles:[],showFileSelect:!1,toolbarButtons:[{icon:"save",action:this.save},{icon:"folder-open",action:this.handleOpenClicked},{icon:"plus",action:this.newSketch}],parser:new T.a,settings:{size:20,clrs:{b:{name:"blue",rgb:[0,0,255]},r:{name:"red",rgb:[255,0,0]},g:{name:"green",rgb:[0,255,0]},gr:{name:"grey",rgb:[80,80,80]},y:{name:"yellow",rgb:[255,255,0]},pu:{name:"purple",rgb:[255,0,255]},o:{name:"orange",rgb:[255,125,0]},c:{name:"cyan",rgb:[0,255,255]},w:{name:"white",rgb:[255,255,255]},k:{name:"black",rgb:[0,0,0]},br:{name:"brown",rgb:[125,80,0]},pi:{name:"pink",rgb:[255,80,125]}}},errorMessage:null}},computed:{slug:function(){return Object(j.generateKey)(this.name)}},mounted:function(){var e=localStorage.getItem("pixel-drawing");null!==e&&(this.program=e),this.savedFiles=Object(j.allPrograms)(),this.render()},methods:{render:function(){var e=this.parse(this.program);e&&this.$refs.sketch.render(e,this.settings.size)},onInput:function(e){this.errorMessage=null,this.validate(this.program)},validate:Object(P.debounce)(function(e){try{var t=this.parser.parse(e).toArray(),n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s&&!this.clrs.hasOwnProperty(s)){this.errorMessage="Unknown colour '".concat(s,"'");break}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}catch(e){this.errorMessage=e.message}},500),parse:function(e){var t=this;console.log(e);var n=this.parser.parse(e).toArray();return n.some(function(e){return e&&!t.settings.clrs.hasOwnProperty(e)})?null:(console.log(n.map(function(e){return e?t.settings.clrs[e].rgb:null})),n.map(function(e){return e?t.settings.clrs[e].rgb:null}))},save:function(){Object(j.saveProgram)(this.slug,{program:this.program,settings:this.settings})},handleOpenClicked:function(){this.showFileSelect=!0},loadFile:function(e){var t=Object(j.getProgram)(e);this.program=t.program,this.settings=t.settings,this.name=e,this.showFileSelect=!1},newSketch:function(){this.name=Object(j.generateName)("Untitled"),this.program="",this.save()},updateName:function(e){var t=this.slug;this.name=Object(j.generateName)(e),Object(j.renameProgram)(t,this.slug)}}},R=Object(c.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-narrow"},[n("div",{staticStyle:{"min-width":"1em"}},[n("a",{staticClass:"icon can-rotate",class:{rotated:!t.panelShown},attrs:{title:t.panelShown?"Hide Panel":"Show Panel"},on:{click:function(e){t.panelShown=!t.panelShown}}},[n("i",{staticClass:"fas fa-chevron-right"})]),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[t.panelShown?n("div",[n("pixel-side-panel",{model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}})],1):t._e()])],1)]),t._v(" "),n("div",{staticClass:"column program-container"},[n("pixel-toolbar",{attrs:{buttons:t.toolbarButtons}}),t._v(" "),n("div",{staticClass:"field"},[n("span",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",domProps:{value:t.name},on:{blur:function(e){return t.updateName(e.target.value)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("pixel-editor",{model:{value:t.program,callback:function(e){t.program=e},expression:"program"}}),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"has-text-danger"},[t._v("\n            Error: "+t._s(t.errorMessage)+"\n          ")])],1),t._v(" "),n("button",{staticClass:"draw-button button is-primary",attrs:{disabled:t.errorMessage},on:{click:t.render}},[t._v("\n          Draw!\n        ")])],1)])]),t._v(" "),n("div",{staticClass:"column is-narrow"},[n("pixel-sketch",{ref:"sketch"})],1),t._v(" "),n("pixel-file-select",{directives:[{name:"show",rawName:"v-show",value:t.showFileSelect,expression:"showFileSelect"}],attrs:{options:t.savedFiles},on:{close:function(e){t.showFileSelect=!1},input:t.loadFile}})],1)},[],!1,null,null,null).exports,N=Object(c.a)({},function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("This program is based on an unplugged activity called "),n("a",{attrs:{href:"https://docs.google.com/document/d/1S__G3fasIgUhkeCkbC91TXHmhOF_MgwdKarz80bsvFE/edit?usp=sharing"}},[e._v("Pixel Programming")]),e._v(" from "),n("a",{attrs:{href:"https://www.canadalearningcode.ca"}},[e._v("Canada Learning Code")]),e._v(". It uses a simple domain-specific language (DSL) to demonstrate how simple instructions can be given to a computer.")])])}],!1,null,null,null).exports,$=n("dLPz"),I=n.n($),F={data:function(){return{contents:I.a}}},M=Object(c.a)(F,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content",domProps:{innerHTML:this._s(this.contents)}})},[],!1,null,null,null).exports,J=[{path:"/",component:p.default,children:[{path:"code",component:R},{path:"about",component:N},{path:"ref",component:M},{path:"*",component:R}]}];o.b.add(s.a,l.a),o.a.watch(),n("3ERx"),i.a.use(a.a);var L=new a.a({routes:J,linkActiveClass:"active",mode:"history"});new i.a({el:"#app",render:function(e){return e(u)},router:L})},Xyfl:function(e,t,n){e.exports=n.p+"b8a5f049b96f5c65c032828d847fa13e.png"},dLPz:function(e,t,n){e.exports='<h1 id="pixels-syntax">Pixels Syntax</h1>\n<h2 id="expressions">Expressions</h2>\n<p>The simplest <strong>expression</strong> is just a colour code; for example, this program draws a single red pixel in the top left corner:</p>\n<pre><code>r</code></pre><p><img src="'+n("RAzI")+'" alt="r"></p>\n<p>Multiple expressions can be given on a single line. Just put a space between them! This program draws three red pixels:</p>\n<pre><code>r r r</code></pre><p><img src="'+n("Xyfl")+'" alt="r r r"></p>\n<p>We can shorten this program, though, by specifying a number in front of the colour code. This program is equivalent to the one above:</p>\n<pre><code>1r 1r 1r</code></pre><p>The shortened version looks like this:</p>\n<pre><code>3r</code></pre><p>The semicolon (<code>;</code>) can be used to end a line. Any expressions after a semicolon will be drawn on a new line. For example, this program draws a 3x3 red square in the top left corner:</p>\n<pre><code>3r; 3r; 3r;</code></pre><p><img src="'+n("2mmj")+'" alt="3r; 3r; 3r;"></p>\n<p>To make your code easier to read, though, you&#39;ll probably want to format it like this:</p>\n<pre><code>3r;\n3r;\n3r;</code></pre><h2 id="loops">Loops</h2>\n<p>Using numbered expressions is already a kind of loop, but there is syntax for more advanced loops. Take this program, for example:</p>\n<pre><code>2r 2y 2r 2y 2r 2y;</code></pre><p>Here, the program <code>2r 2y</code> is repeated three times. This program does exactly that:</p>\n<pre><code>3[2r 2y];</code></pre><p>The resulting picture looks like this:</p>\n<p><img src="'+n("7mSr")+'" alt="3[3r 3y]"></p>\n<p>Looping can be done over multi-line programs as well. For example, this program is really expressing a multi-line loop:</p>\n<pre><code>r y;\nr y;\nr y;</code></pre><p><img src="'+n("OjRc")+'" alt="3[r y;]"></p>\n<p>Using the looping syntax, it can be rewritten like this:</p>\n<pre><code>3[r y;]</code></pre>'},dait:function(e,t){function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}Array.prototype.last=function(){return this[this.length-1]},RegExp.escape=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")};var n=function(){function e(){r(this,e),this.PATTERNS={begin_loop:RegExp("(\\d*)".concat(RegExp.escape("["))),end_loop:RegExp(RegExp.escape("]")),end_of_line:RegExp(RegExp.escape(";")),pixel:/(\d*)([a-z]+)/}}return a(e,[{key:"maxPattern",value:function(){var e=[this.PATTERNS.begin_loop,this.PATTERNS.end_loop,this.PATTERNS.end_of_line,this.PATTERNS.pixel,/S+/];return new RegExp(e.map(function(e){return e.source}).join("|"),"g")}},{key:"parse",value:function(e){var t,n=e.matchAll(this.maxPattern()),r=new v,i=[r],a=!0,o=!1,s=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=g(l.value,1)[0];if(this.PATTERNS.pixel.test(u)){var p=g(u.match(this.PATTERNS.pixel),3),d=(p[0],p[1]),h=p[2];d=d||1,i.last().add(new b(parseInt(d),h))}else if(this.PATTERNS.begin_loop.test(u)){var f=g(u.match(this.PATTERNS.begin_loop),2),m=(f[0],f[1]);m=m||1,t=new x(parseInt(m)),i.last().add(t),i.push(t)}else if("]"===u){if(!(i.last()instanceof x))throw new Error("Unexpected ']'");i.pop()}else{if(";"!==u)throw new Error("Unexpected token '".concat(u,"'"));i.last().add(new y)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(1<i.length)throw new Error("Unmatched '['");return r}}]),e}(),v=function(){function e(){r(this,e),this.commands=[]}return a(e,[{key:"add",value:function(e){this.commands.push(e)}},{key:"toArray",value:function(){return this.commands.reduce(function(e,t){return e.concat(t.toArray())},[])}},{key:"length",value:function(){return this.commands.length}}]),e}(),b=function(){function n(e,t){r(this,n),this.number=e,this.clr=t}return a(n,[{key:"toArray",value:function(){return Array(this.number).fill(this.clr)}}]),n}(),x=function(){function t(e){r(this,t),this.number=e,this.program=new v}return a(t,[{key:"add",value:function(e){this.program.add(e)}},{key:"toArray",value:function(){return Array(this.number).fill(this.program.toArray()).flat()}}]),t}(),y=function(){function e(){r(this,e)}return a(e,[{key:"toArray",value:function(){return[null]}}]),e}();e.exports=n}},[["Vtdi",0,4,5,6,8,9,11,12,10,13]]]);