import images from '../img/*.jpg'

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

$(document).ready( function () {
	
	// scrollEvents();

	// Resize bottom of page padding

	
});
//$(window).scroll(scrollEvents);



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

var blurLoad = function(num, name) {
	var img = new Image();
	img.onload = function() {
		$('#cimg-' + num).attr("src", img.src);
		$('#cimg-' + num).removeClass("loading");
	}
	img.src = images[name]
}

$(window).on('load', function () {
	setTimeout(function(){
		$('.left-flyer').addClass('left-anim');
		$('.right-flyer').addClass('right-anim');
	}, 2000);

	setTimeout( function() {
		$('.left-flyer, .right-flyer').css({'transition':'transform .5s'});
	}, 3000);
	$(window).trigger('resize');


	// Dynamically blur-load (carousel) images

	// All large pictures to be loaded (in descending priority)
	var bigPics = [
		"highway",
		"chairs",
		"roof",
		"wires",
		"blur",
		"rocks",
	];

	for (var i = 0; i < bigPics.length; i++){
		blurLoad(i, bigPics[i])
	}
});

var map;
var locations = [
	{lat: 35.456481, lng: -112.169454},
	{lat: 31.7666771, lng: 35.1526975},
	{lat: 9.4047389, lng: -84.1606367},
	{lat: 29.965577, lng: 35.02962},
	{lat: 36.0529925, lng: -112.1409521},
	{lat: 9.3814053, lng: -84.134413}
];
var zoom = [10, 12, 15, 13, 14, 15];

var initMap = function (image_num) {
	map = new google.maps.Map(document.getElementById('map-shell'), {
		center: locations[image_num],
		zoom: zoom[image_num]
    });
}

$(document).on('click', '.where', function () {
	$('.where').find('h3').text($('.where').find('h3').text() == 'Where was this taken?' ? 'Go back to image' : 'Where was this taken?');

	var currPicID = $('.carousel-item.active').attr('id').slice(-1);
	console.log(currPicID);
	if ($('#map-shell').children().length == 0){
		initMap(currPicID);
	} else {
		map.setCenter(locations[currPicID]);
		map.setZoom(zoom[currPicID]);
	}
	$('.control').toggleClass('hide-map');
	$('#map-overlay').toggleClass('hide-map');
});

















