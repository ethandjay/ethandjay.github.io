// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/blur-sm.jpg":[function(require,module,exports) {
module.exports = "/blur-sm.eb028c15.jpg";
},{}],"img/blur.jpg":[function(require,module,exports) {
module.exports = "/blur.063013e3.jpg";
},{}],"img/chairs-sm.jpg":[function(require,module,exports) {
module.exports = "/chairs-sm.d99833b3.jpg";
},{}],"img/chairs.jpg":[function(require,module,exports) {
module.exports = "/chairs.03b40f3f.jpg";
},{}],"img/conform.jpg":[function(require,module,exports) {
module.exports = "/conform.e2aeabae.jpg";
},{}],"img/elder.jpg":[function(require,module,exports) {
module.exports = "/elder.4a7f4236.jpg";
},{}],"img/ethan.jpg":[function(require,module,exports) {
module.exports = "/ethan.6c0df2b1.jpg";
},{}],"img/ethan2.jpg":[function(require,module,exports) {
module.exports = "/ethan2.32c30d49.jpg";
},{}],"img/headshot.jpg":[function(require,module,exports) {
module.exports = "/headshot.dd511d87.jpg";
},{}],"img/highway-sm.jpg":[function(require,module,exports) {
module.exports = "/highway-sm.378317d3.jpg";
},{}],"img/highway.jpg":[function(require,module,exports) {
module.exports = "/highway.5b2c6d5b.jpg";
},{}],"img/pile.jpg":[function(require,module,exports) {
module.exports = "/pile.792325e4.jpg";
},{}],"img/rocks-sm.jpg":[function(require,module,exports) {
module.exports = "/rocks-sm.a03a367a.jpg";
},{}],"img/rocks.jpg":[function(require,module,exports) {
module.exports = "/rocks.6963d90a.jpg";
},{}],"img/roof-sm.jpg":[function(require,module,exports) {
module.exports = "/roof-sm.08086b97.jpg";
},{}],"img/roof.jpg":[function(require,module,exports) {
module.exports = "/roof.fecc3164.jpg";
},{}],"img/softfangs.jpg":[function(require,module,exports) {
module.exports = "/softfangs.32435a97.jpg";
},{}],"img/sweet.jpg":[function(require,module,exports) {
module.exports = "/sweet.79fd8649.jpg";
},{}],"img/wires-sm.jpg":[function(require,module,exports) {
module.exports = "/wires-sm.3e40ca3d.jpg";
},{}],"img/wires.jpg":[function(require,module,exports) {
module.exports = "/wires.da6f0056.jpg";
},{}],"img/*.jpg":[function(require,module,exports) {
module.exports = {
  "blur-sm": require("./blur-sm.jpg"),
  "blur": require("./blur.jpg"),
  "chairs-sm": require("./chairs-sm.jpg"),
  "chairs": require("./chairs.jpg"),
  "conform": require("./conform.jpg"),
  "elder": require("./elder.jpg"),
  "ethan": require("./ethan.jpg"),
  "ethan2": require("./ethan2.jpg"),
  "headshot": require("./headshot.jpg"),
  "highway-sm": require("./highway-sm.jpg"),
  "highway": require("./highway.jpg"),
  "pile": require("./pile.jpg"),
  "rocks-sm": require("./rocks-sm.jpg"),
  "rocks": require("./rocks.jpg"),
  "roof-sm": require("./roof-sm.jpg"),
  "roof": require("./roof.jpg"),
  "softfangs": require("./softfangs.jpg"),
  "sweet": require("./sweet.jpg"),
  "wires-sm": require("./wires-sm.jpg"),
  "wires": require("./wires.jpg")
};
},{"./blur-sm.jpg":"img/blur-sm.jpg","./blur.jpg":"img/blur.jpg","./chairs-sm.jpg":"img/chairs-sm.jpg","./chairs.jpg":"img/chairs.jpg","./conform.jpg":"img/conform.jpg","./elder.jpg":"img/elder.jpg","./ethan.jpg":"img/ethan.jpg","./ethan2.jpg":"img/ethan2.jpg","./headshot.jpg":"img/headshot.jpg","./highway-sm.jpg":"img/highway-sm.jpg","./highway.jpg":"img/highway.jpg","./pile.jpg":"img/pile.jpg","./rocks-sm.jpg":"img/rocks-sm.jpg","./rocks.jpg":"img/rocks.jpg","./roof-sm.jpg":"img/roof-sm.jpg","./roof.jpg":"img/roof.jpg","./softfangs.jpg":"img/softfangs.jpg","./sweet.jpg":"img/sweet.jpg","./wires-sm.jpg":"img/wires-sm.jpg","./wires.jpg":"img/wires.jpg"}],"js/script.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../img/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Making the nav elements highlight themselves when their section is scrolled to
// var sidebarTrack = function() {
// 	var minOffset = $(window).height();
// 	var elem = null;
// 	$('.section').each( function (i) {
// 		var elemOffsetFromMid = Math.abs($(this).offset().top - $(window).scrollTop() - $(window).height()/2 + $(this).outerHeight()/2);
// 		if(elemOffsetFromMid < minOffset){
// 			minOffset = elemOffsetFromMid;
// 			elem = $(this);
// 		}
// 	})
// 	$('.nav-item-onpage').removeClass("hovered");
// 	if($(window).scrollTop() > 50){
// 		$('[href="#'+elem.attr('id')+'"]').parent().addClass("hovered");
// 	}
// }
// Function package for all events dependent on scroll behavior
// var scrollEvents = function() {
// 	sidebarTrack();
// }
$(document).ready(function () {// scrollEvents();
  // Resize bottom of page padding
}); //$(window).scroll(scrollEvents);
// Attempt at slowing the firing of scroll events
// var userScrolled = false;
// $(window).scroll(function() {
//   userScrolled = true;
// });
// setInterval(function() {
//   if (userScrolled) {
//   	scrollEvents();
//     userScrolled = false;
//   }
// }, 30);
// $(document).on('click', '.play-button', function(event){
// 	$.get("https://api.spotify.com/v1/albums/3YDm8Vu6IOjjVdLNHlJtj0");
// });
// Nav go-to
// $(document).on('click', '.sidebar', function(event) {
// 	//prevents hash flicker
//     // event.preventDefault();
// 	// history.pushState(null, null, $.attr(this, 'href'));
//     // $('html,body').animate({
//     //     scrollTop: $( $(this).attr('href') ).offset().top - $(window).height()/2 + $($(this).attr('href')).outerHeight()/2
// 	// }, 500);
// 	// window.scrollTo({ 
// 	// 	top: $( $(this).attr('href') ).offset().top - $(window).height()/2 + $($(this).attr('href')).outerHeight()/2,
// 	// 	behavior: 'smooth'
// 	// });
// });
// $(window).resize(function() {
// 	// scrollEvents();
// 	// var y = $(window).height() - ($('.nav-item-music').offset().top - $(window).scrollTop() + $('.nav-item-music').outerHeight());
// 	// if (y < 0){
// 	// 	y = 0;
// 	// }
// 	// $('.music-container').css({ "max-height": y });
// 	// $('.play-overlay').css({ "max-width": $('.music-img').width() });
// 	// $('.nav-radio').css({ "height": $('.nav-item').first().height() });
// });
// Expand music panel
// $(document).on('click', '.sidebar-music', function(event) {
// 	//prevents hash flicker
//     event.preventDefault();
//     $('.music-container').toggleClass('music-container-min');
// })
// $(document).on('click', '.nav-radio', function(event) {
// })
// $(document).ready( function() {
// 	$('.nav-item-onpage').mouseout( function () {
// 		sidebarTrack();
// 	});
// });
// $(document).on('click', '.section-link', function(event) {
//prevents hash flicker
// event.preventDefault();
// $('.section-nav-item').removeClass('active-nav-item');
// $(this).parent().addClass('active-nav-item');
// if ($(window).width() > 500){
//     $('body').animate({
//         scrollTop: $($(this).closest('.section')).offset().top - ($(window).height() - $(this).closest('.section').height())/2
// 	}, 500);
// var nearSection = $(this).closest('.section');
// window.scrollTo({ 
// 	top: $(nearSection).offset().top - ($(window).height() - nearSection.height())/2,
// 	behavior: 'smooth'
// });
// }
// $( $(this).attr('href') ).animate({ opacity: 1 });
// $('.toggleable').not( $(this).attr('href') ).animate({ opacity: 0});
// $('.toggleable').removeClass('active-content');
// $( $(this).attr('href') ).addClass('active-content');
// });

var blurLoad = function blurLoad(num, name) {
  var img = new Image();

  img.onload = function () {
    $('#cimg-' + num).attr("src", img.src);
    $('#cimg-' + num).removeClass("loading");
  };

  img.src = _.default[name];
};

$(window).on('load', function () {
  setTimeout(function () {
    $('.left-flyer').addClass('left-anim');
    $('.right-flyer').addClass('right-anim');
  }, 2000);
  setTimeout(function () {
    $('.left-flyer, .right-flyer').css({
      'transition': 'transform .5s'
    });
  }, 3000);
  $(window).trigger('resize'); // Dynamically blur-load (carousel) images
  // All large pictures to be loaded (in descending priority)

  var bigPics = ["highway", "chairs", "roof", "wires", "blur", "rocks"];

  for (var i = 0; i < bigPics.length; i++) {
    blurLoad(i, bigPics[i]);
  }
});
var map;
var locations = [{
  lat: 35.456481,
  lng: -112.169454
}, {
  lat: 31.7666771,
  lng: 35.1526975
}, {
  lat: 9.4047389,
  lng: -84.1606367
}, {
  lat: 29.965577,
  lng: 35.02962
}, {
  lat: 36.0529925,
  lng: -112.1409521
}, {
  lat: 9.3814053,
  lng: -84.134413
}];
var zoom = [10, 12, 15, 13, 14, 15];

var initMap = function initMap(image_num) {
  map = new google.maps.Map(document.getElementById('map-shell'), {
    center: locations[image_num],
    zoom: zoom[image_num]
  });
};

$(document).on('click', '.where', function () {
  $('.where').find('h3').text($('.where').find('h3').text() == 'Where was this taken?' ? 'Go back to image' : 'Where was this taken?');
  var currPicID = $('.carousel-item.active').attr('id').slice(-1);
  console.log(currPicID);

  if ($('#map-shell').children().length == 0) {
    initMap(currPicID);
  } else {
    map.setCenter(locations[currPicID]);
    map.setZoom(zoom[currPicID]);
  }

  $('.control').toggleClass('hide-map');
  $('#map-overlay').toggleClass('hide-map');
});
},{"../img/*.jpg":"img/*.jpg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64395" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map