var Robot = (function(){

	var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange  ? "orientationchange" : "resize",
		clientWidth = 0,
		slideLength = $('#scroller a'),
		scroller = $('#scroller'),
		wrapper = $('#wrapper'),
		indicator = $('#indicator');

		var setIndicator = function(){
			$.each(slideLength,function(i){
				$('#indicator').append('<li'+((i+1) === 1 ? ' class="seld"' : '')+'></li>')
			});
		};

		var getOffsetWidth = function(){
			clientWidth = document.body.offsetWidth;
			wrapper.css('width',clientWidth);
			slideLength.css('width',clientWidth);
			var slideWidth = document.body.offsetWidth * slideLength.length;
			scroller.css('width',slideWidth);
		};

		getOffsetWidth();
		setIndicator();

		window.addEventListener(orientationEvent,function(event){
			getOffsetWidth();
			setTimeout(loaded,1000);	
		},false);

})();