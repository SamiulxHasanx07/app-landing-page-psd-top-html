(function ($) {
    "use strict";
    
    // PreLoader 
    $(window).on('load', function(){
      $("#loading").delay(2000).fadeOut(500);
      $("#loading-center").click(function() {
      $("#loading").fadeOut(1500);
      })
    })


    // Sticky Navbar 
    $('.navbar').sticky({
      outerWidth:true,
    });

    // Scroll Up 
    $(function () {
      $.scrollUp({
          scrollName: 'scrollUp',      // Element ID
          scrollDistance: 300,         // Distance from top/bottom before showing element (px)
          scrollFrom: 'top',           // 'top' or 'bottom'
          scrollSpeed: 1500,            // Speed back to top (ms)
          easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
          animation: 'fade',           // Fade, slide, none
          animationSpeed: 200,         // Animation speed (ms)
          scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
          scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
          scrollText: '<i class="fas fa-chevron-up"></i>' , // Text for element, can contain HTML
          scrollTitle: false,          // Set a custom <a> title if required.
          scrollImg: false,            // Set true to use image
          activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
          zIndex: 2147483647           // Z-Index for the overlay
      });
    });

  
    // Brand Slider Section 
     
    $(".brands-slider .owl-carousel").owlCarousel(
      {
        loop:true, 
        items:1,
        margin:40,
        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        responsive:{
                  0:{
                      items:3
                  },
                  767:{
                      items:5
                  },
                  992:{
                      items:7
                  }
                }

      }
    );
    

    // Testimonial Slider Section 
    $('.owl-carousel').owlCarousel({
      loop:true,
      items:1,
      margin:10,
      nav:true,
  })
    
    
})(jQuery);	


new WOW().init();