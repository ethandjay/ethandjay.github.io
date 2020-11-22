parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ItQi":[function(require,module,exports) {
module.exports="/blur-sm.0c63e95b.jpg";
},{}],"h6NZ":[function(require,module,exports) {
module.exports="/blur.8dc73cdb.jpg";
},{}],"hYbW":[function(require,module,exports) {
module.exports="/chairs-sm.fd164eaf.jpg";
},{}],"ZEis":[function(require,module,exports) {
module.exports="/chairs.4f705798.jpg";
},{}],"iDa1":[function(require,module,exports) {
module.exports="/conform.61e2857d.jpg";
},{}],"PjZl":[function(require,module,exports) {
module.exports="/elder.37aecf4d.jpg";
},{}],"Ge5a":[function(require,module,exports) {
module.exports="/ethan.a6b8366f.jpg";
},{}],"cRLu":[function(require,module,exports) {
module.exports="/ethan2.8b750a8f.jpg";
},{}],"kgcG":[function(require,module,exports) {
module.exports="/headshot.77454304.jpg";
},{}],"jmeE":[function(require,module,exports) {
module.exports="/highway-sm.d8943d31.jpg";
},{}],"i76r":[function(require,module,exports) {
module.exports="/highway.04f5ceab.jpg";
},{}],"ysGN":[function(require,module,exports) {
module.exports="/pile.b154af3e.jpg";
},{}],"BsuE":[function(require,module,exports) {
module.exports="/rocks-sm.16ec88b8.jpg";
},{}],"xfGf":[function(require,module,exports) {
module.exports="/rocks.1e1daef3.jpg";
},{}],"b9WX":[function(require,module,exports) {
module.exports="/roof-sm.c248e18c.jpg";
},{}],"BrbM":[function(require,module,exports) {
module.exports="/roof.80cf98a9.jpg";
},{}],"UyGC":[function(require,module,exports) {
module.exports="/softfangs.36ea0d89.jpg";
},{}],"LZpw":[function(require,module,exports) {
module.exports="/sweet.160d2582.jpg";
},{}],"s5bp":[function(require,module,exports) {
module.exports="/wires-sm.bb3c9076.jpg";
},{}],"z5RH":[function(require,module,exports) {
module.exports="/wires.784d4247.jpg";
},{}],"m7Bz":[function(require,module,exports) {
module.exports={"blur-sm":require("./blur-sm.jpg"),blur:require("./blur.jpg"),"chairs-sm":require("./chairs-sm.jpg"),chairs:require("./chairs.jpg"),conform:require("./conform.jpg"),elder:require("./elder.jpg"),ethan:require("./ethan.jpg"),ethan2:require("./ethan2.jpg"),headshot:require("./headshot.jpg"),"highway-sm":require("./highway-sm.jpg"),highway:require("./highway.jpg"),pile:require("./pile.jpg"),"rocks-sm":require("./rocks-sm.jpg"),rocks:require("./rocks.jpg"),"roof-sm":require("./roof-sm.jpg"),roof:require("./roof.jpg"),softfangs:require("./softfangs.jpg"),sweet:require("./sweet.jpg"),"wires-sm":require("./wires-sm.jpg"),wires:require("./wires.jpg")};
},{"./blur-sm.jpg":"ItQi","./blur.jpg":"h6NZ","./chairs-sm.jpg":"hYbW","./chairs.jpg":"ZEis","./conform.jpg":"iDa1","./elder.jpg":"PjZl","./ethan.jpg":"Ge5a","./ethan2.jpg":"cRLu","./headshot.jpg":"kgcG","./highway-sm.jpg":"jmeE","./highway.jpg":"i76r","./pile.jpg":"ysGN","./rocks-sm.jpg":"BsuE","./rocks.jpg":"xfGf","./roof-sm.jpg":"b9WX","./roof.jpg":"BrbM","./softfangs.jpg":"UyGC","./sweet.jpg":"LZpw","./wires-sm.jpg":"s5bp","./wires.jpg":"z5RH"}],"L4bL":[function(require,module,exports) {
"use strict";var e=t(require("../img/*.jpg"));function t(e){return e&&e.__esModule?e:{default:e}}$(document).ready(function(){});var n,a=function(t,n){var a=new Image;a.onload=function(){$("#cimg-"+t).attr("src",a.src),$("#cimg-"+t).removeClass("loading")},a.src=e.default[n]};$(window).on("load",function(){setTimeout(function(){$(".left-flyer").addClass("left-anim"),$(".right-flyer").addClass("right-anim")},2e3),setTimeout(function(){$(".left-flyer, .right-flyer").css({transition:"transform .5s"})},3e3),$(window).trigger("resize");for(var e=["highway","chairs","roof","wires","blur","rocks"],t=0;t<e.length;t++)a(t,e[t])});var l=[{lat:35.456481,lng:-112.169454},{lat:31.7666771,lng:35.1526975},{lat:9.4047389,lng:-84.1606367},{lat:29.965577,lng:35.02962},{lat:36.0529925,lng:-112.1409521},{lat:9.3814053,lng:-84.134413}],r=[10,12,15,13,14,15],o=function(e){n=new google.maps.Map(document.getElementById("map-shell"),{center:l[e],zoom:r[e]})};$(document).on("click",".where",function(){$(".where").find("h3").text("Where was this taken?"==$(".where").find("h3").text()?"Go back to image":"Where was this taken?");var e=$(".carousel-item.active").attr("id").slice(-1);console.log(e),0==$("#map-shell").children().length?o(e):(n.setCenter(l[e]),n.setZoom(r[e])),$(".control").toggleClass("hide-map"),$("#map-overlay").toggleClass("hide-map")});
},{"../img/*.jpg":"m7Bz"}]},{},["L4bL"], null)
//# sourceMappingURL=/script.056fe8d9.js.map