var scrollEvents = function() {
	var scrollHeight = $(window).scrollTop();
	var set = $('.section');
	$('.section').each(function(index) {
		if (index == set.length-1 && ($(window).scrollTop() + $(window).height()) == $(document).height()) {
			$(this).animate({ opacity: 1 });
		}
		else if (index == set.length-1 && ($(window).scrollTop() + $(window).height()) != $(document).height() && $(this).css("opacity") == 1) {
			$(this).animate({ opacity: .75 });
		} else {
			$(this).css({
				opacity: function () {
					var windowHeight = $(window).height();
					var elemHeight = $(this).height();
					var elemOffsetFromTop = $(this).offset().top - scrollHeight;
					 //if(index == 0) $('.nav-link').text(1 - Math.abs((windowHeight/2 - elemOffset - $(this).height()/2) / (windowHeight/2 + 150)));

					return 1 - Math.abs((windowHeight/2 - elemOffsetFromTop - elemHeight/2) / (windowHeight/2 + 300));
				}
			})
		}
	})
	if ($(window).scrollTop() > 50) {
		$('.carousel-overlay').fadeOut();
	} else {
		$('.carousel-overlay').fadeIn(200);
	}

	$('.overfit').css('transform', function () {
		var val = 10 - (1.5*(($(document).height() - scrollHeight) / $(document).height())-.5)*10;
		return "translateY(" + -val + "vh)";
	});
}

$(document).ready( function () {
	
	scrollEvents();

	$('.butt').height( $(window).height()/2 - $('.section').last().height()/2 );
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

$(document).ready(function () {
	$('.nameplate').on('mouseover', function() {
		$('.right-flyer').removeClass('right-anim');
		$('.left-flyer').removeClass('left-anim');
	});

	$('.nameplate').on('mouseout', function() {
		$('.right-flyer').addClass('right-anim');
		$('.left-flyer').addClass('left-anim');
	});

	$('.rev-text').hover( function () {
		$('.review-thumb').toggleClass('hovered');
	});
});


