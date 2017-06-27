
// var userScrolled = false;

// $(window).scroll(function() {
//   userScrolled = true;
// });

// setInterval(function() {
//   if (userScrolled) {

var scrollEvents = function() {
	var scrollHeight = $(window).scrollTop();
	$('.section').each(function(index) {
		$(this).css({
			opacity: function () {
				var windowHeight = $(window).height();
				var elemHeight = $(this).offset().top;
				// if(index == 0) $('.nav-link').text(1 - Math.abs(((elemHeight - scrollHeight) / windowHeight)*2-1));
				return 1 - Math.abs(((elemHeight - scrollHeight) / windowHeight)*2-.5) + .5;
			}
		})
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

$(document).ready(scrollEvents);
setInterval(scrollEvents, 10);


//     userScrolled = false;
//   }
// }, 10);

$(document).on('click', '.nav-link', function(event){

	//prevents hash flicker
    event.preventDefault();
	history.pushState(null, null, $.attr(this, 'href'));

    $('body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - ($(window).height() - $('.section').height())/2
    }, 500);
});