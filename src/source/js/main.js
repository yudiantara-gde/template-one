
(function($) {

	//superfish menu
		$('#nav-desktop').superfish();

		AOS.init({
			duration: 1200
		});

	//scroll for header position
		$(window).on('scroll', function(){

			var scrollPos 	= $('html, body').scrollTop();
			var contenPos	= $('.chk-pos').offset().top;

			//remove fixed class
			$('#header').removeClass('fixed');

			if(scrollPos >= contenPos) {

				$('#header').addClass('fixed')
			}else {

				$('#header').removeClass('fixed');
			}
		});
	
	//nav about
		$('.nav-about').click(function(){
			$(this).toggleClass('active-nav');
		});
})(jQuery);