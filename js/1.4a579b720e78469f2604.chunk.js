// [AIV_SHORT]  Build version: 0.4.0 - Friday, November 1st, 2019, 9:56:39 AM  
 (window.webpackJsonp=window.webpackJsonp||[]).push([[1],{l4Qa:function(t,i,e){"use strict";e.r(i);var r=e("I335"),n=e.n(r),s={props:{width:{type:Number,default:400},height:{type:Number,default:400}},created:function(){console.log("loaded!")},mounted:function(){this.p5=new n.a(this.initP5,"p5-sketch")},methods:{initP5:function(t){t.setup=this.setup(t),t.draw=this.draw(t)}}},h=e("KHd+");function l(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={extends:Object(h.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"p5-sketch",attrs:{id:"p5-sketch"}})},[],!1,null,null,null).exports,data:function(){return{p5:null,row:0,col:0,programIndex:0,pixelSize:0,pixels:[],size:0,frameRate:16}},created:function(){this.pixelSize=this.width/this.size},methods:{setup:function(t){var i=this;return function(){t.createCanvas(i.width,i.height),t.stroke(200)}},draw:function(t){var i=this;return function(){t.frameRate(i.frameRate),i.drawNextPixel(t)}},render:function(t,i,e){this.size=i,this.pixels=t,this.pixelSize=this.width/i,this.programIndex=0,this.firstPixel=!0,this.row=0,this.col=0,this.frameRate=e,this.$forceUpdate()},clearScreen:function(t){t.background(255);for(var i=0;i<=this.size;i++)t.line(0,i*this.pixelSize,this.width,i*this.pixelSize),t.line(i*this.pixelSize,0,i*this.pixelSize,this.height)},drawNextPixel:function(t){var i;for(this.firstPixel&&(this.clearScreen(t),this.firstPixel=!1);this.pixels.length&&!(i=this.pixels.shift());)this.row++,this.col=0;(i||this.pixels.length)&&(t.fill(t.color.apply(t,l(i))),t.rect(this.col*this.pixelSize,this.row*this.pixelSize,this.pixelSize,this.pixelSize),this.col++,this.programIndex++)}}},a=Object(h.a)(o,void 0,void 0,!1,null,null,null);i.default=a.exports}}]); 