function smoothScroll() {
	$('a').click(function(){
	    	$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    	}, 500);
	   	 return false;
	});
}

$(document).ready(function() {
    // $('#menu').dropit();
	$("#sticker").sticky({topSpacing:0});
	smoothScroll();
}); //end of doc ready dropit


//SMOOTH SCROLLING
