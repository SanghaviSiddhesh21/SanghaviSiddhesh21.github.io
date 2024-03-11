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
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:4,
              nav:true,
              loop:false
          }
      }
    });
    
  });