$(document).ready(function(){
 
  // Sticky Navigation
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down"){
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  }, {
    offset: '60px'
  });

  // Page Scrolling
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
  })
  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
  })

})