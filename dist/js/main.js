$(document).ready(function(){
    $('.destacados').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]});
        $('.servicios').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]});
  });