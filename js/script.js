(function($){

	/* jsAnchors
	--------------------------------------------------*/
	var jsAnchors = function(){
		$('a[href^="#"]').on('click', function(event) {
			var hash = '#' + $(this).attr('href').split('#')[1]
			var element = $(hash)
			if (element.length) {
				event.preventDefault();
				history.pushState(hash, undefined, hash)
				$('html, body').animate({scrollTop: element.offset().top - 55}, 1000)
			}

			$('.navi').removeClass('on');
		});
	}

	/* Dom Ready
	--------------------------------------------------*/
	jsAnchors();

})(jQuery);