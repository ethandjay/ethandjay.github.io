parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"h6NZ":[function(require,module,exports) {
module.exports="blur.8dc73cdb.jpg";
},{}],"ItQi":[function(require,module,exports) {
module.exports="blur-sm.0c63e95b.jpg";
},{}],"hYbW":[function(require,module,exports) {
module.exports="chairs-sm.fd164eaf.jpg";
},{}],"ZEis":[function(require,module,exports) {
module.exports="chairs.4f705798.jpg";
},{}],"iDa1":[function(require,module,exports) {
module.exports="conform.61e2857d.jpg";
},{}],"PjZl":[function(require,module,exports) {
module.exports="elder.37aecf4d.jpg";
},{}],"Ge5a":[function(require,module,exports) {
module.exports="ethan.a6b8366f.jpg";
},{}],"cRLu":[function(require,module,exports) {
module.exports="ethan2.8b750a8f.jpg";
},{}],"kgcG":[function(require,module,exports) {
module.exports="headshot.77454304.jpg";
},{}],"jmeE":[function(require,module,exports) {
module.exports="highway-sm.d8943d31.jpg";
},{}],"i76r":[function(require,module,exports) {
module.exports="highway.04f5ceab.jpg";
},{}],"ysGN":[function(require,module,exports) {
module.exports="pile.b154af3e.jpg";
},{}],"xfGf":[function(require,module,exports) {
module.exports="rocks.1e1daef3.jpg";
},{}],"BsuE":[function(require,module,exports) {
module.exports="rocks-sm.16ec88b8.jpg";
},{}],"b9WX":[function(require,module,exports) {
module.exports="roof-sm.c248e18c.jpg";
},{}],"BrbM":[function(require,module,exports) {
module.exports="roof.80cf98a9.jpg";
},{}],"UyGC":[function(require,module,exports) {
module.exports="softfangs.36ea0d89.jpg";
},{}],"LZpw":[function(require,module,exports) {
module.exports="sweet.160d2582.jpg";
},{}],"z5RH":[function(require,module,exports) {
module.exports="wires.784d4247.jpg";
},{}],"s5bp":[function(require,module,exports) {
module.exports="wires-sm.bb3c9076.jpg";
},{}],"m7Bz":[function(require,module,exports) {
module.exports={blur:require("./blur.jpg"),"blur-sm":require("./blur-sm.jpg"),"chairs-sm":require("./chairs-sm.jpg"),chairs:require("./chairs.jpg"),conform:require("./conform.jpg"),elder:require("./elder.jpg"),ethan:require("./ethan.jpg"),ethan2:require("./ethan2.jpg"),headshot:require("./headshot.jpg"),"highway-sm":require("./highway-sm.jpg"),highway:require("./highway.jpg"),pile:require("./pile.jpg"),rocks:require("./rocks.jpg"),"rocks-sm":require("./rocks-sm.jpg"),"roof-sm":require("./roof-sm.jpg"),roof:require("./roof.jpg"),softfangs:require("./softfangs.jpg"),sweet:require("./sweet.jpg"),wires:require("./wires.jpg"),"wires-sm":require("./wires-sm.jpg")};
},{"./blur.jpg":"h6NZ","./blur-sm.jpg":"ItQi","./chairs-sm.jpg":"hYbW","./chairs.jpg":"ZEis","./conform.jpg":"iDa1","./elder.jpg":"PjZl","./ethan.jpg":"Ge5a","./ethan2.jpg":"cRLu","./headshot.jpg":"kgcG","./highway-sm.jpg":"jmeE","./highway.jpg":"i76r","./pile.jpg":"ysGN","./rocks.jpg":"xfGf","./rocks-sm.jpg":"BsuE","./roof-sm.jpg":"b9WX","./roof.jpg":"BrbM","./softfangs.jpg":"UyGC","./sweet.jpg":"LZpw","./wires.jpg":"z5RH","./wires-sm.jpg":"s5bp"}],"L4bL":[function(require,module,exports) {
"use strict";var t=e(require("../img/*.jpg"));function e(t){return t&&t.__esModule?t:{default:t}}var o=function(){var t=$(window).height(),e=null;$(".section").each(function(o){var n=Math.abs($(this).offset().top-$(window).scrollTop()-$(window).height()/2+$(this).outerHeight()/2);n<t&&(t=n,e=$(this))}),$(".nav-item-onpage").removeClass("hovered"),$(window).scrollTop()>50&&$('[href="#'+e.attr("id")+'"]').parent().addClass("hovered")},n=function(){var t=$(window).scrollTop();$(".section");$(window).width()>1020?$(".section").each(function(e){$(this).css({opacity:function(){var e=$(window).height(),o=$(this).height(),n=$(this).offset().top-t;return 1.1-1.1*Math.abs((e/2-n-o/2)/(e/2+800))}})}):$(".section").animate({opacity:1}),$(window).scrollTop()>50?$(".carousel-overlay").fadeOut(200):$(".carousel-overlay").fadeIn(200),$(".overfit").css("transform",function(){return"translateY("+-(9-9*(($(document).height()-t)/$(document).height()*1.5-.5))+"vh)"}),o()};$(document).ready(function(){n(),setTimeout(function(){$(".butt").height($(window).height()/2-$(".section").first().outerHeight(!0)/2)},500)});var i=!1;$(window).scroll(function(){i=!0}),setInterval(function(){i&&(n(),i=!1)},30),$(document).on("click",".sidebar",function(t){t.preventDefault(),history.pushState(null,null,$.attr(this,"href")),$("html,body").animate({scrollTop:$($(this).attr("href")).offset().top-$(window).height()/2+$($(this).attr("href")).outerHeight()/2},500)}),$(window).resize(function(){n()}),$(document).on("click",".sidebar-music",function(t){t.preventDefault(),$(".music-container").toggleClass("music-container-min")}),$(document).on("click",".nav-radio",function(t){}),$(document).ready(function(){$("#email").attr("href","mailto:ethandjay@gmail.com"),$(".nameplate").on("mouseover",function(){$(".right-flyer").removeClass("right-anim"),$(".left-flyer").removeClass("left-anim")}),$(".nameplate").on("mouseout",function(){$(".right-flyer").addClass("right-anim"),$(".left-flyer").addClass("left-anim")}),$(".skill-img").on("mouseover",function(){$(".skill").text($(this).attr("alt")),$(".skill").css({opacity:1})}),$(".skill-img").on("mouseout",function(){$(".skill").css({opacity:0})}),$(".rev-text").hover(function(){$(".review-pic").toggleClass("hovered")}),$(".nav-item-onpage").hover(function(t){$(".nav-item-onpage").not(this).removeClass("hovered")}),$(".nav-item-onpage").mouseout(function(){o()})}),$(document).on("click",".section-link",function(t){t.preventDefault(),$(".section-nav-item").removeClass("active-nav-item"),$(this).parent().addClass("active-nav-item"),$(window).width()>500&&$("body").animate({scrollTop:$($(this).closest(".section")).offset().top-($(window).height()-$(this).closest(".section").height())/2},500),$($(this).attr("href")).animate({opacity:1}),$(".toggleable").not($(this).attr("href")).animate({opacity:0}),$(".toggleable").addClass("inactive-content"),$($(this).attr("href")).removeClass("inactive-content")});var a,s=function(e,o){var n=new Image;n.onload=function(){$("#cimg-"+e).attr("src",n.src),$("#cimg-"+e).removeClass("loading")},n.src=t.default[o]};$(window).on("load",function(){setTimeout(function(){$(".left-flyer").addClass("left-anim"),$(".right-flyer").addClass("right-anim")},2e3),setTimeout(function(){$(".left-flyer, .right-flyer").css({transition:"transform .5s"})},3e3),$(window).trigger("resize");for(var t=["highway","chairs","roof","wires","blur","rocks"],e=0;e<t.length;e++)s(e,t[e])});var r=[{lat:35.456481,lng:-112.169454},{lat:31.7666771,lng:35.1526975},{lat:9.4047389,lng:-84.1606367},{lat:29.965577,lng:35.02962},{lat:36.0529925,lng:-112.1409521},{lat:9.3814053,lng:-84.134413}],l=[10,12,15,13,14,15],c=function(t){a=new google.maps.Map(document.getElementById("map-shell"),{center:r[t],zoom:l[t]})};$(document).on("click",".where",function(){$(".where").find("h3").text("Where was this taken?"==$(".where").find("h3").text()?"Go back to image":"Where was this taken?");var t=$(".carousel-item.active").attr("id").slice(-1);console.log(t),0==$("#map-shell").children().length?c(t):(a.setCenter(r[t]),a.setZoom(l[t])),$(".control").toggleClass("hide-map"),$("#map-overlay").toggleClass("hide-map")});
},{"../img/*.jpg":"m7Bz"}]},{},["L4bL"], null)
//# sourceMappingURL=script.1162ba29.js.map