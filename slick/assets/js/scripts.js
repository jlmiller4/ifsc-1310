$(document).ready(function() {

    $('.fade').slick({
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });

    $('.fadee').slick({
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000
    });

    $('.shuffle').slick({ 
      fx:     'shuffle', 
      easing: 'easeOutBack', 
      delay:  -4000,
      infinite: true,
      speed: 500,
      slide: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true 
  });


});