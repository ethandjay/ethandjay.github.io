$(window).scroll(function() {
	var scrollHeight = $(this).scrollTop();
	$('.section').css({
		opacity: function () {
			var elemHeight = $(this).height();
			return 1 - (elemHeight - scrollHeight) / elemHeight;
		}
	})
})