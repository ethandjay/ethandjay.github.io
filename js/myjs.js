$(window).scroll(function() {
	var scrollHeight = $(this).scrollTop();
	$('.section').each(function() {
		$(this).css({
			opacity: function () {
				var windowHeight = $(window).height();
				var elemHeight = $(this).offset().top;
				return 1.5 - ((elemHeight - scrollHeight) / windowHeight)*1.5;
			}
		})
	})
})