function recenter() {
	var m = ($(window).height() - ($('.container').height() + 200))/2;
	$('.container').css({ "margin-top" : m<0?0:m });
}


$(window).resize( function() { recenter(); } );

$(document).ready( function() {
	$('.stream').on('click', function() { 
		$('.player').toggleClass('min');
	});
	// recenter();
});