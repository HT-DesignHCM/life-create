(function($){

	/* jsAnchors
	--------------------------------------------------*/
	var jsAnchors = function(){
		$('a[href^="#"]:not(".tabs a")').on('click', function(event) {
			var hash = '#' + $(this).attr('href').split('#')[1]
			var element = $(hash)
			if (element.length) {
				event.preventDefault();
				history.pushState(hash, undefined, hash)
				$('html, body').animate({scrollTop: element.offset().top}, 1000)
			}
		});
	}
	/* jsEffect
	--------------------------------------------------*/
	var jsEffect = function(){
		$(window).on('scroll load', function(){
			var
			sc = $(window).scrollTop(),
			wh = window.innerHeight;
			$('.fadeup, .effect').each(function(index, el) {
				var pos = $(this).offset().top;
				if(pos<sc+wh*0.8){
					$(this).addClass('on');
				}
			});
		});
	}

	/* jsFixed
	--------------------------------------------------*/
	var jsFixed = function(){
		var $header = $('#header');
		var $height = $header.outerHeight();

		$(window).scroll(function() {
			if ( $(window).scrollTop() > 0){
				$header.addClass('fixed');
				$('body').css({
					'padding-top': $height
				});
			} else {
				$header.removeClass('fixed');
				$('body').css({
					'padding-top': 0
				});
			}
		});
	}

	/* jsOpenMenuSP
	--------------------------------------------------*/
	var jsMenu = function(){
		$('#open-menu').click(function() {
			$(this).toggleClass('active');
			$('#sp-nav').slideToggle(200);
		});
		$('#close-menu').click(function() {
			$('#sp-nav').slideToggle(200);
			$('#open-menu').removeClass('active');
		});
		$('.sp-nav-parent').click(function() {console.log('aa');
			$(this).removeClass('active');
			if($(this).parent('p').next('.sp-nav-sub').css('display') == 'none') {
				$(this).parent('p').next('.sp-nav-sub').slideDown(200);
				$(this).parent('p').addClass('active');
			}
			else {
				$(this).parent('p').next('.sp-nav-sub').slideUp(200);
			}
		});
	}

	/* jsMenuFooter
	--------------------------------------------------*/
	var jsMenuFooter = function(){
		$('.fnav-parent').click(function() {console.log('aa');
			$(this).removeClass('active');
			if($(this).next('.fnav-sub').css('display') == 'none') {
				$(this).next('.fnav-sub').slideDown(200);
				$(this).addClass('active');
			}
			else {
				$(this).next('.fnav-sub').slideUp(200);
			}
		});
	}

	/* jsTabs
	--------------------------------------------------*/
	var jsTabs = function(){
		$(".tabs a").click(function() {
			
			$('html, body').animate();

			var elm = $(this);

			elm.parent("li")
				.siblings()
				.removeClass("active");

			elm.parent("li").addClass("active");

			elm.parents(".tabs")
				.next()
				.children(".tab-box")
				.hide();

			var i = elm.parent("li").index();
			$('.tab-contents > div:eq('+i+')').fadeIn();
			return false;
		});
	}

	/* Dom Ready
	--------------------------------------------------*/
	jsAnchors();
	jsEffect();
	jsFixed();
	jsMenu();
	jsMenuFooter();
	jsTabs();
	$('.matchHeight').matchHeight();
})(jQuery);