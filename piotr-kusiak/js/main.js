$('a[href*="http"]').click(function (e) {
  e.preventDefault();
  var url = $(this).attr('href');

  $('body').fadeOut(2000, function () {
    window.location.href = url;
  });
});

$(window).scroll(function () {

  var scrollTop = $(this).scrollTop();

  /* Menu change color */
  if (scrollTop > 70) {
    $('.navbar').addClass('scroll');
  } else {
    $('.navbar').removeClass('scroll');
  }

  /* Progress  bar*/
  var percent = (scrollTop * 100) / ($('body').height() - $(this).height());
  $('.progressbar').css({
    width: (percent + '%')
  })

});

/* scrollReveal() method shows technologies svg items*/
window.sr = ScrollReveal();
sr.reveal('.box', {
  duration: 900
}, 300);

$('a[href*="#"]').click(function () {
  var anchor = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(anchor).offset().top
  }, 800);
});
