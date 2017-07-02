var sidebarTrack = function() {
	var minOffset = $(window).height();
	var elem = null;
	$('.section').each( function (i) {
		var elemOffsetFromMid = Math.abs($(this).offset().top - $(window).scrollTop() - $(window).height()/2 + $(this).outerHeight()/2);
		if(elemOffsetFromMid < minOffset){
			minOffset = elemOffsetFromMid;
			elem = $(this);
		}
	})

	$('.nav-item-onpage').removeClass("hovered");
	if($(window).scrollTop() > 50){
		$('[href="#'+elem.attr('id')+'"]').parent().addClass("hovered");
	}
}

var scrollEvents = function() {
	var scrollHeight = $(window).scrollTop();
	var set = $('.section');
	$('.section').each(function(index) {
			$(this).css({
				opacity: function () {
					var windowHeight = $(window).height();
					var elemHeight = $(this).height();
					var elemOffsetFromTop = $(this).offset().top - scrollHeight;
					 //if(index == 0) $('.nav-link').text(1 - Math.abs((windowHeight/2 - elemOffset - $(this).height()/2) / (windowHeight/2 + 150)));

					return 1.1 - 1.1*Math.abs((windowHeight/2 - elemOffsetFromTop - elemHeight/2) / (windowHeight/2 + 300));
				}
			});
		});
	if ($(window).scrollTop() > 50) {
		$('.carousel-overlay').fadeOut();
	} else {
		$('.carousel-overlay').fadeIn(200);
	}

	$('.overfit').css('transform', function () {
		var val = 10 - (1.5*(($(document).height() - scrollHeight) / $(document).height())-.5)*10;
		return "translateY(" + -val + "vh)";
	});

	sidebarTrack();
}

$(document).ready( function () {
	
	scrollEvents();

	$('.butt').height( $(window).height()/2 - $('.section').last().outerHeight(true)/2 );
});
//$(window).scroll(scrollEvents);

var userScrolled = false;

$(window).scroll(function() {
  userScrolled = true;
});

setInterval(function() {
  if (userScrolled) {
  	scrollEvents();
    userScrolled = false;
  }
}, 50);

$(document).on('click', '.sidebar', function(event) {

	//prevents hash flicker
    event.preventDefault();
	history.pushState(null, null, $.attr(this, 'href'));

    $('body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - $(window).height()/2 + $($(this).attr('href')).outerHeight()/2
    }, 500);
});

$(window).resize(function() {
	var y = $(window).height() - ($('.nav-item-music').offset().top - $(window).scrollTop() + $('.nav-item-music').outerHeight());
	if (y < 0){
		y = 0;
	}
	$('.music-container').css({ "max-height": y });
});

$(document).on('click', '.sidebar-music', function(event) {

	//prevents hash flicker
    event.preventDefault();

    $('.music-container').toggleClass('music-container-min');
})

$(document).ready( function() {
	$(window).trigger('resize');
	$('#email').attr('href', 'mailto:ethandjay@gmail.com');


	$('.nameplate').on('mouseover', function() {
		$('.right-flyer').removeClass('right-anim');
		$('.left-flyer').removeClass('left-anim');
	});

	$('.nameplate').on('mouseout', function() {
		$('.right-flyer').addClass('right-anim');
		$('.left-flyer').addClass('left-anim');
	});

	$('.rev-text').hover( function () {
		$('.review-pic').toggleClass('hovered');
	});

	$('.nav-item-onpage').hover( function(event) {
		$('.nav-item-onpage').not(this).removeClass('hovered');
	});
	$('.nav-item-onpage').mouseout( function () {
		sidebarTrack();
	});
});

$(document).on('click', '.section-link', function(event) {

	//prevents hash flicker
    event.preventDefault();

    $('.section-nav-item').removeClass('active-nav-item');
    $(this).parent().addClass('active-nav-item');

    $('body').animate({
        scrollTop: $($(this).closest('.section')).offset().top - ($(window).height() - $(this).closest('.section').height())/2
    }, 500);

    $( $(this).attr('href') ).animate({ opacity: 1 });
    $('.toggleable').not( $(this).attr('href') ).animate({ opacity: 0});

    $('.toggleable').addClass('inactive-content');
    $( $(this).attr('href') ).removeClass('inactive-content');

});

$(window).on('load', function () {
	setTimeout(function(){
		$('.left-flyer').addClass('left-anim');
		$('.right-flyer').addClass('right-anim');
	}, 2000);

	setTimeout( function() {
		$('.left-flyer, .right-flyer').css({'transition':'transform .5s'});
	}, 3000);
});

