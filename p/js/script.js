function recenter() {
	var m = ($(window).height() - ($('.container').height() + 200))/2;
	$('.container').css({ "margin-top" : m<0?0:m });
}

function setNP() {
	var time = new Date();
	console.log(time.getUTCDay());
	if (time.getUTCDay() == 1 && time.getUTCHours() == 21){
		$('.np').removeClass('hidden');
	} else {
		$('.np').addClass('hidden');
	}
}

$(window).resize( function() { recenter(); } );

$(document).ready( function() {
	setNP();
	$('.stream').on('click', function() { 
		$('.player').toggleClass('min');
	});
	// recenter();

	setInterval(setNP, 60000);
});