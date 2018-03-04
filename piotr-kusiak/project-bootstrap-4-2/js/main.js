$('a[href*="http"]').click(function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	
	$('body').fadeOut(5000, function(){
		window.location.href = url;
	});
});



$(window).scroll(function() {
	
	var scrollTop = $(this).scrollTop();
	
	/* Menu change color */
	if( scrollTop > 70 ) {
		$('.navbar').addClass('scroll');
	} else {
		$('.navbar').removeClass('scroll');
	}
	
	/* Progress  bar*/
	var percent = (scrollTop*100)/($('body').height()- $(this).height());
	$('.progressbar').css({width: (percent + '%')})
	 
});

$('a[href*="#"]').click(function() {
	var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 74
    }, 800);
});



























/*$('a:not([href*="#"])').on('click', function(e){
	e.preventDefault();
	var link = $(this).attr('href');
	console.log(link);
	$('body').fadeOut(3000, function(){
		document.location.href = link;
	});
});*/























$(window).on('scroll', function(){
	
})