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

/* scrollReval() method shows technologies svg items*/
window.sr = ScrollReveal();
sr.reveal('.box', {
  duration: 1000
}, 300);
