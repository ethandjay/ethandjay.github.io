$(document).ready( function() {
	$('.logo-wrapper').css('margin-top', ($(window).height() / 5) - ($('.logo-wrapper').height() / 2));
	console.log("fuck");

	$('.stream').on('click', function() {$('.player').toggleClass('min')});
});