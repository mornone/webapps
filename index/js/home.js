$(function(){

	$('#meun').on('click', 'li', function(event) {
		var phone = $('#phone'),
			screen = $('#screen');
		if(0 === $(this).index()){
			phone.addClass('android');
			screen.addClass('screen-android');
		}else{
			phone.removeClass('android');
			screen.removeClass('screen-android');
		}
		event.preventDefault();
	});

});