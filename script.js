	// for scrollup fadeOut 
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200){
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	})
	
	// for scrollup
		$('.scrollup').on('click', function(){
			$("html, body").animate({
				scrollTop: 0
			}, 1500);
			return false;
		})