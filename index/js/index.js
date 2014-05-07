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

		var setRestponseEle = function(){
			var li = $('ul.index-list li'),
				liChild = li.find('a'),
				lcHeight = liChild.width() / 2;
				if(li.parent().data('switch') != 1){
					if(lcHeight >= 100){
						
						li.css('height',lcHeight);
						if(li.find('ul')){
							li.find('ul li').css('height',lcHeight / 2);
						}
					}
				}
		};

		setTimeout(setRestponseEle,300);
		getOffsetWidth();
		setIndicator();


		window.addEventListener(orientationEvent,function(event){
			getOffsetWidth();
			setRestponseEle();
			setTimeout(loaded,1000);
		},false);

		$('<script>').attr({type: 'text/javascript',src: '../js/browse.js'}).appendTo('body');

})();