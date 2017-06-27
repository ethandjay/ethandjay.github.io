$(window).scroll(function() {
	var scrollHeight = $(this).scrollTop();
	$('.section').each(function(index) {
		$(this).css({
			opacity: function () {
				var windowHeight = $(window).height();
				var elemHeight = $(this).offset().top;
				//if(index == 0) $('.nav-link').text(1 - Math.abs(((elemHeight - scrollHeight) / windowHeight)*2-1));
				return 1 - Math.abs(((elemHeight - scrollHeight) / windowHeight)*2-.5) + .5;
			}
		})
	})
	if ($(this).scrollTop() > 50) {
		$('.carousel-overlay').fadeOut();
	} else {
		$('.carousel-overlay').fadeIn(200);
	}

	$('.overfit').css('transform', function () {
		var val = 10 - (1.5*(($(document).height() - scrollHeight) / $(document).height())-.5)*10;
		return "translateY(" + -val + "vh)";
	})
})

