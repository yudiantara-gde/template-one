(function($) {
  
  //heroes swiper
  var swiper = new Swiper('.heroes .swiper-container', {
    spaceBetween: 16,
    
    //navigation
    navigation: {
      nextEl: '.heroes-next',
      prevEl: '.heroes-prev',
    },

    //pagination
    pagination: {
      clickable: true,
      el: '.heroes-pagination',
    },

    //autoplay
    autoplay: {
      delay: 2500,
    },

    //efect
    effect: 'fade',
    
    //lopping
    loop: true,

    //speed
    speed: 1200,
  });

  //column swiper
  var sc = new Swiper('.slider-column .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 16,  

    //pagination
    pagination: {
      clickable: true,
      el: '.sc-pagination',
    },
  });
})(jQuery);