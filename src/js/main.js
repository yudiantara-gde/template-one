
(function($) {

	//superfish menu
		$('#nav-desktop').superfish();

	// Slicknav
		$('#nav-mobile').slicknav();

	$('a.slicknav_btn').click(function() {
		$('body').toggleClass('content-lock');

		$(this).siblings().each(function() {
			$('body').removeClass('active');
		})
	});
	
	//toggle class active
		$(".toggle-btn").click(function() {
			//e.preventDefault();
			$(this).toggleClass('active');
	
			$(this).siblings().each(function() {
				$(this).removeClass('active');
			})
		});
	
	//nav icon
		$('#nav-icon').click(function(){
			$(this).toggleClass('open');
			$('#wrapper').toggleClass('nav-active');
		});

	//debounce
	function debounce(func, wait, immediate) {
		var timeout;
	  
		return function executedFunction() {
		  var context = this;
		  var args = arguments;
			  
		  var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		  };
	  
		  var callNow = immediate && !timeout;
		  
		  clearTimeout(timeout);
	  
		  timeout = setTimeout(later, wait);
		  
		  if (callNow) func.apply(context, args);
		};
	};
	
})(jQuery);