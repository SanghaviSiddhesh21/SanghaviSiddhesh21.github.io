$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      dots:true,
      margin:10,
      responsiveClass:true,
      dots: true,
      nav: false,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          400:{
              items:1,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
    });
    
  });